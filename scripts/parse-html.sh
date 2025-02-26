DIR=issues
echo '[' > $DIR/$1.json
cat $DIR/$1.html | sed 's/.*\([a-f0-9]\{8\}\-[a-f0-9]\{4\}\-[a-f0-9]\{4\}\-[a-f0-9]\{4\}\-[a-f0-9]\{12\}\).*\№ \([0-9]\+\).*>\([0-9]\+ [^<]\+ [0-9]\{4\}\)<.*/    { "id": "\1", "num": \2, "date": "\3" },/' >> $DIR/$1.json
echo  >> $DIR/$1.json
echo ']' >> $DIR/$1.json
