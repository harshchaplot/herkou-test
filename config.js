module.exports = {
    'secretKey': '12345-67890-09876-54321',
    'mongoUrl' : 'mongodb+srv://admin:admin@mycluster.kwthm.mongodb.net/myDB?retryWrites=true&w=majority'
    // mongodb+srv://admin:admin@mycluster-eatj8.mongodb.net/myDB?retryWrites=true&w=majority
    
}

exports.shuffle =  function() {
    var a = [0,1,2,3,4,5,6,7,8,9,10]
    console.log('function');
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    console.log('function1');
    console.log(a)
    return a;
}