
test            () { _test $testOrder                                                   ;}
dev             () { export DISABLE_JOBS=true DISABLE_TRIGGERS=true; _nodemon server.js ;}
