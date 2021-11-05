const crypto = require('crypto');
const util = require('util');

const start = process.hrtime();

// Default value -> 4
// process.env.UV_THREADPOOL_SIZE = 6;

for (let i = 0; i < 8; i++) {
  crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', (err) => {
    if (err) throw err;
    const end = process.hrtime(start);
    console.log(
      util.format(
        'crypto %d start %d end %d execute %d',
        i,
        end[0],
        end[1],
        end[0] + end[1] / 1e9
      )
    );
  });
}

/*
crypto 4 start 0 end 447847051 execute 0.447847051
crypto 5 start 0 end 454236518 execute 0.454236518
crypto 1 start 0 end 454306297 execute 0.454306297
crypto 2 start 0 end 454355239 execute 0.454355239
crypto 0 start 0 end 482598945 execute 0.482598945
crypto 3 start 0 end 511578017 execute 0.511578017
crypto 6 start 0 end 883345887 execute 0.883345887
crypto 7 start 0 end 884169936 execute 0.884169936
*/
