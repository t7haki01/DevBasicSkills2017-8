

var test1 = ["1", "1", "1", "0", "1", "0", "0", "0"];
var test2 = ["1", "1", "0", "1", "0", "1", "0", "0"];
var test3 = ["1", "0", "1", "1", "0", "0", "1", "0"];



for(i=0; i<8; i++)
{
    process.stdout.write( test1[i] ) ;
    process.stdout.write( test2[i] ) ;
    process.stdout.write( test3[i] + "\n" ) ;
}