const dummy = [
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum iaculis eu non diam. Aliquam id diam maecenas ultricies mi. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Pulvinar pellentesque habitant morbi tristique senectus et. Risus in hendrerit gravida rutrum quisque non. A lacus vestibulum sed arcu non odio euismod lacinia at. Mi proin sed libero enim sed faucibus turpis.`,
	`Luctus accumsan tortor posuere ac ut. Id aliquet lectus proin nibh nisl condimentum. In mollis nunc sed id semper. Urna condimentum mattis pellentesque id. Nisl purus in mollis nunc sed id. Justo nec ultrices dui sapien eget mi proin. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Mi tempus imperdiet nulla malesuada. Id interdum velit laoreet id donec ultrices. Ipsum nunc aliquet bibendum enim. Faucibus vitae aliquet nec ullamcorper. Euismod nisi porta lorem mollis.`,
	`Amet dictum sit amet justo donec enim diam. In eu mi bibendum neque. Congue mauris rhoncus aenean vel elit. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. A pellentesque sit amet porttitor eget dolor. Dolor purus non enim praesent elementum facilisis leo vel. Pulvinar etiam non quam lacus suspendisse faucibus. Lobortis feugiat vivamus at augue eget arcu dictum varius. Euismod lacinia at quis risus sed. Cursus in hac habitasse platea. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.`,
	`Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Amet facilisis magna etiam tempor orci. Ut tristique et egestas quis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Diam vulputate ut pharetra sit amet aliquam. Orci dapibus ultrices in iaculis nunc sed. Libero enim sed faucibus turpis in eu mi. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget.`,
	`At volutpat diam ut venenatis tellus in metus. Orci a scelerisque purus semper eget duis at tellus. Mollis nunc sed id semper risus in. Viverra maecenas accumsan lacus vel. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Faucibus nisl tincidunt eget nullam non nisi est sit. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Semper eget duis at tellus at urna condimentum. Viverra justo nec ultrices dui sapien eget mi.`,
	`Eleifend quam adipiscing vitae proin sagittis. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Purus in mollis nunc sed id semper risus in. Velit euismod in pellentesque massa. Nisl condimentum id venenatis a condimentum. Id cursus metus aliquam eleifend mi in nulla posuere. Dui sapien eget mi proin sed. Leo urna molestie at elementum eu facilisis sed odio.`,
	`Dui id ornare arcu odio ut. Dolor sit amet consectetur adipiscing elit. Eu ultrices vitae auctor eu augue ut. Viverra suspendisse potenti nullam ac tortor. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Sed tempus urna et pharetra pharetra massa massa ultricies. Vestibulum sed arcu non odio euismod lacinia. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Ac orci phasellus egestas tellus rutrum tellus pellentesque.`,
	`In mollis nunc sed id. Nullam ac tortor vitae purus faucibus ornare. Ut ornare lectus sit amet. Ut porttitor leo a diam. Faucibus turpis in eu mi bibendum neque egestas congue quisque. In arcu cursus euismod quis viverra. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Tempus iaculis urna id volutpat lacus laoreet. Ultricies integer quis auctor elit sed vulputate. Risus feugiat in ante metus dictum at. Sem et tortor consequat id porta nibh. Ut etiam sit amet nisl purus in.`,
	`Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ac turpis egestas maecenas pharetra convallis posuere morbi. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Diam quis enim lobortis scelerisque fermentum dui. Eu mi bibendum neque egestas congue. Adipiscing enim eu turpis egestas pretium aenean. Sem fringilla ut morbi tincidunt augue interdum velit euismod. `

	]
const form = document.querySelector('.dummy-form');
const amount = document.querySelector('#amount');
const article = document.querySelector('#dummy-text');
form.addEventListener('submit', function(e) {
	e.preventDefault()
	// console.log("Hey");
	let value = parseInt(amount.value);
	let random =  Math.floor(Math.random() * dummy.length)
	console.log(random);
	if (isNaN(value) || value < 0 || value > 9) {
		article.innerHTML = `<p id="article">${dummy[random]}</p>`

	} else {
		let tempText = dummy.slice(0, value);
		tempText = tempText.map((item) =>{
			return `<p id="article">${item}</p>`
		}).join("")	
		article.innerHTML = tempText;
		console.log(tempText);

	}
	
});