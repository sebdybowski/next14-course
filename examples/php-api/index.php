<?php
function fetchData($url, $requestNumber = 100) {
    $records = [];

    // Initialize multiple curl handles
    $multiCurl = curl_multi_init();
    $curlHandles = [];

    for ($i = 0; $i < $requestNumber; $i++) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_multi_add_handle($multiCurl, $ch);
        $curlHandles[] = $ch;
    }

    // Execute the multi handle
    $running = null;
    do {
        curl_multi_exec($multiCurl, $running);
        curl_multi_select($multiCurl);
    } while ($running > 0);

    // Collect the responses
    foreach ($curlHandles as $ch) {
        $response = curl_multi_getcontent($ch);
        $data = json_decode($response, true);
        if (isset($data['data'])) {
            $records = array_merge($records, $data['data']);
        }
        curl_multi_remove_handle($multiCurl, $ch);
    }

    // Close the multi handle
    curl_multi_close($multiCurl);

    return $records;
}

// Set the URL and number of requests
$url = 'https://datausa.io/api/data?drilldowns=State&measures=Population';
$requestNumber = 100;

// Fetch the data
$records = fetchData($url, $requestNumber);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data USA</title>
</head>
<body>
    <main class="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Data USA</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>State</th>
                    <th>Year</th>
                    <th>Population</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($records as $index => $record): ?>
                    <tr>
                        <td><?php echo $index + 1; ?></td>
                        <td><?php echo htmlspecialchars($record['State']); ?></td>
                        <td><?php echo htmlspecialchars($record['Year']); ?></td>
                        <td><?php echo htmlspecialchars($record['Population']); ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </main>
</body>
</html>
