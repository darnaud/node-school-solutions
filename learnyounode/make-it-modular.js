var filtermod = require('./filtermod')

filtermod(process.argv[2], process.argv[3], function(err, list){
	if (err)
		console.error('There is an error')
	else
		list.forEach(function(file){ console.log(file)})
})