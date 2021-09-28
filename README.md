# evm-k6-performance-test
An evermos staging performance test using k6 api and performance testing tools.

> :warning: **USAGE**: Be very careful not to commit any code with evm credentials

Installation
Download and install the latest official .msi package here https://dl.k6.io/msi/k6-latest-amd64.msi
Test the installation by executing this command in cmd or gitbash.

`k6 -h [filename]`

Ways to run the project
Open folder containing k6 test file.
  - With git bash or cmd you can run by executing this command.
    k6 run [filename].js
  - With visual studio code cli

Tools that are recommended :
- k6 Browser Recorder (Browser Extension)
- xPath Finder (Browser Extension)

Make a new performance test function :
1. Activate k6 Browser recorder while execution web function manually/.
2. Stop the recorder when done.
3. Open .har file containing scripts of requests made.
   You can open in a text editor or https://app.k6.io/projects dashboard.
4. Select necessary request from generated scripts.
5. Modify the scripts to a desired executable test.

Other Commands that might be useful for running this repository :
```k6 -h 
k6 run [filename]
k6 run --vus 10 --duration 30s [filename] //run with virtual users
k6 login cloud -h //check cloud reporting installation
k6 login cloud -t [token bearer] //open cloud reporting installation

