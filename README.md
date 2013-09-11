LavaCharts
==========

LavaCharts is a Package for Laravel 4 that wraps the Google Chart API for PHP5.3+

[![Build Status](https://travis-ci.org/kevinkhill/LavaCharts.png?branch=master)](https://travis-ci.org/kevinkhill/LavaCharts)

#Installing
To your project's main composer.json file, add this the the requirements

  ```
  "khill\lavacharts" : "dev-master"
  ```

Register the LavaChart Service Provider by adding this line to the providers array in ```app/config/app.php```

  ```
  "Khill\Lavacharts\LavachartsServiceProvider"
  ```

Finally, to download and install, just run:

  ```
  composer install
  ```

If you want to view the demos, publish the assets with:

  ```
  php artisan asset:publish khill/lavacharts
  ```

If you want to overide the default config of the package, run:

  ```
  php artisan config:publish khill/lavacharts
  ```