<?php
$url = 'http://localhost:8080/pokemon-1500.json';
$jsonData = file_get_contents($url);
$arrayData = json_decode($jsonData, true);
?>
<html>
  <body>
    <main>
      <h1>Pokemon</h1>
<?php
// Print table rows
foreach ($arrayData as $row) {
  echo '<div style="display: flex;">';
  foreach ($row as $value) {
    echo '<div>' . (is_array($value) ? implode(', ', $value) : $value) . '</div>';
  }
  echo '</div>';
}
?>
   </main>
  </body>
</html>