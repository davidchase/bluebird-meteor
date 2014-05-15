bluebird
===============

Bluebird is a fully featured promise library with focus on innovative features and performance. Packaged for Meteor.

Use
====
```
$ mrt add bluebird
```
	
The global variable `Promise` becomes available after the above command.

Quick example below:

```
function ajaxGetAsync(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("error", reject);
        xhr.addEventListener("load", resolve);
        xhr.open("GET", url);
        xhr.send(null);
    });
}

ajaxGetAsync(url).then(function(res){
    console.log(res);
})
.catch(function(e){
    console.error(e.type);
});

```

For more information check out the original [API]('https://github.com/petkaantonov/bluebird/blob/master/API.md').