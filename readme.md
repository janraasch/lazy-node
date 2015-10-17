# lazy-node

> non-blocking I/O?

## Requirements

Only Node.js `>=v4.2.1`.

## Installation

Clone the repo. Cd into it and run `npm i`.

## Getting your awe inspired

Start the server by running:

```bash
npm start
```

Then open up a few more consoles and run `curl localhost:8000` all over the place. Notice how requests are accepted by the server instantly (by it printing `${n}: Request numero ${n} just came in.` to stdout) even though the requests are only answered three seconds after they have been triggered. You can also try running

```bash
ab -n 100 -c 100 http://127.0.0.1:8000/
```

and have look at what your server is doing, when it gets hit by 100 requests in parallel.

Sample output of running the above ApacheBench command:

```bash
This is ApacheBench, Version 2.3 <$Revision: 1663405 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient).....done


Server Software:        
Server Hostname:        127.0.0.1
Server Port:            8000

Document Path:          /
Document Length:        81 bytes

Concurrency Level:      100
Time taken for tests:   3.052 seconds
Complete requests:      100
Failed requests:        93
   (Connect: 0, Receive: 0, Length: 93, Exceptions: 0)
Total transferred:      18392 bytes
HTML transferred:       8292 bytes
Requests per second:    32.77 [#/sec] (mean)
Time per request:       3051.671 [ms] (mean)
Time per request:       30.517 [ms] (mean, across all concurrent requests)
Transfer rate:          5.89 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        1    3   0.8      3       4
Processing:  3016 3031  10.5   3035    3046
Waiting:       11   29  10.6     32      46
Total:       3020 3034   9.7   3038    3047

Percentage of the requests served within a certain time (ms)
  50%   3038
  66%   3040
  75%   3043
  80%   3043
  90%   3047
  95%   3047
  98%   3047
  99%   3047
 100%   3047 (longest request)
```

Now, if you want to dive into this a little deeper, start by watching the [Introduction to Node.js](https://www.youtube.com/watch?v=jo_B4LTHi3I) by Ryan Dahl or open up the `slow-but-responsive.js` file and make that little server a little more complex.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Jan Raasch](http://janraasch.com)
