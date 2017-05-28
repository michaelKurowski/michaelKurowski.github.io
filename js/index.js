let languageSet = 'eng'
let languageMap = new Map([
	['$about', 'nav-about'],
	['$portfolio', 'nav-portfolio'],
	['$links', 'nav-links'],
	['$contact', 'nav-contact'],
	['$aboutText', 'aboutText'],
	['$galleryArt', 'gallery-header-art'],
	['$galleryWebsities', 'gallery-header-websities'],
	['$galleryWebapps', 'gallery-header-webapps'],
	['$galleryVisualisations', 'gallery-header-visualisations'],
	['$linksHeader', 'links-header'],
	['$contactHeader', 'contact-header'],
	['$contactEmail', 'contact-email']

])



let dictionary = new Map([
	['pl', new Map ([
				['$about', 'O mnie'],
				['$portfolio', 'Portfolio'],
				['$links', 'Linki'],
				['$contact', 'Kontakt'],
				['$aboutText', 'Cześć, <br>nazywam się Michael! Jestem web developerem który kieruje się w życiu pasją do swojego języka w którym programuje - JavaScript i miłością do grafiki. <br> Witaj na mojej stronie domowej!'],
				['$motto', 'Stwórzmy projekt który zapada w pamięć'],
				['$galleryWebsities', 'Strony www'],
				['$galleryWebapps', 'Aplikacje internetowe'],
				['$galleryArt', 'Prace plastyczne'],
				['$galleryVisualisations', 'Wizualizacje'],
				['$linksHeader', 'Znajdź mnie na'],
				['$contactHeader', 'Kontakt'],
				['$contactEmail', 'Email kontaktowy'],
		
				['$gallery->hypatiaTitle', 'Strona Oddająca Hołd Hypatii'],
				['$gallery->hypatiaDescription', 'Strona o antycznej filozof, Hypatii.<br> Projekt związany z przedsiębwzięciem Free-Code-Camp.'],

				['$gallery->portfolioTitle', 'Strona Osobista'],
				['$gallery->portfolioDescription', 'Strona którą teraz przeglądasz.'],
		
				['$gallery->longboatTitle', 'Longboat'],
				['$gallery->longboatDescription', 'Longboat wikingów przedzierający się przez sztorm.'],
		
				['$gallery->papal-guardTitle', 'Strażnik Papieski'],
				['$gallery->papal-guardDescription', 'Portret Szwajcarskiego strażnika papieskiego.'],
		
				['$gallery->merTitle', 'Mer'],
				['$gallery->merDescription', 'Stworzenie zaprojektowane przeze mnie.'],
		
				['$gallery->murlocTitle', 'Murloc'],
				['$gallery->murlocDescription', 'Stworzenie, z uniwersum World of Warcraft.'],
		
				['$gallery->origami-birdTitle', 'Ptak Origami'],
				['$gallery->origami-birdDescription', 'Latający ptak origami.'],
		
				['$gallery->slavic-hutTitle', 'Słowiańska Chata'],
				['$gallery->slavic-hutDescription', 'Wykonana w kreskówkowym stylu, wczesnosłowiańska chata.'],
		
				['$gallery->dotsTitle', 'Kropki'],
				['$gallery->dotsDescription', 'Animowana sieć kropek, która może zostać umieszczona na stronie www.'],
		
				['$gallery->water-wormTitle', 'Wodny Robak'],
				['$gallery->water-wormDescription', 'Robak który pływa za Twoim kursorem.'],
		
				['$gallery->quote-generatorTitle', 'Generator cytatów'],
				['$gallery->quote-generatorDescription', 'Wygeneruj losowy cytat i opublikuj go na Twitterze.']
		
	])],
	['eng', new Map ([
				['$about', 'About Me'],
				['$portfolio', 'Portfolio'],
				['$links', 'Links'],
				['$contact', 'Contact'],
				['$aboutText', 'Hey there,<br>I\'m Michael, a web developer driven with passion to JavaScript and graphics.<br>Enthusiast of teamwork and efficient workflow. Welcome to my personal page.'],
				['$motto', 'Let\'s create a project that people will remember'],
				['$galleryWebsities', 'Websites'],
				['$galleryArt', 'Artworks'],
				['$galleryVisualisations', 'Visualisations'],
				['$linksHeader', 'Find me on'],
				['$contactHeader', 'Contact'],
				['$contactEmail', 'Contact email'],
				['$galleryWebapps', 'Web Applications'],
		
				['$gallery->hypatiaTitle', 'Hypatia Tribute Page'],
				['$gallery->hypatiaDescription', 'A page about ancient philosopher Hypatia.<br> Free-Code-Camp related project'],

				['$gallery->portfolioTitle', 'Personal Site'],
				['$gallery->portfolioDescription', 'The site that you are viewing currently.'],
		
				['$gallery->longboatTitle', 'Longboat'],
				['$gallery->longboatDescription', 'A viking longboat travelling through stormy sea.'],
		
				['$gallery->papal-guardTitle', 'Papal Guard'],
				['$gallery->papal-guardDescription', 'A papal guard semi-realistic portrair.'],
		
				['$gallery->merTitle', 'Mer'],
				['$gallery->merDescription', 'A creature designed by myself.'],
		
				['$gallery->murlocTitle', 'Murloc'],
				['$gallery->murlocDescription', 'Creature from World of Warcraft universe.'],
		
				['$gallery->origami-birdTitle', 'Origami Bird'],
				['$gallery->origami-birdDescription', 'Flying origami bird.'],
		
				['$gallery->slavic-hutTitle', 'Slavic Hut'],
				['$gallery->slavic-hutDescription', 'Cartoon style, early medieval slavic hut.'],
		
				['$gallery->dotsTitle', 'Dots'],
				['$gallery->dotsDescription', 'Dots network animation that can be used as website element.'],
		
				['$gallery->water-wormTitle', 'Water Worm'],
				['$gallery->water-wormDescription', 'Water worm following mouse cursor.'],
		
				['$gallery->quote-generatorTitle', 'Quotes generator'],
				['$gallery->quote-generatorDescription', 'Get a random quote and publish it on your Twitter.']
		
	])],
	['ie', new Map ([
				['$about', 'Faoi'],
				['$portfolio', 'Punann'],
				['$links', 'Nascanna'],
				['$contact', 'Teagmháil'],
				['$aboutText', 'Dia duit,<br>Is mise Michael, forbróir na idirlíon, díograiseach le JavaScript agus ghrafach.<br>Is brea liom obair foirne agus sreabhadh oibre éifeachtúila. Failte le mó suíomh fein.'],
				['$motto', 'Ligamar tionscadal síorálainn a cruthaigh'],
				['$galleryWebsities', 'Suíomh Idirlína'],
				['$galleryArt', 'Saothar ealaíne'],
				['$galleryVisualisations', 'Amharcléiriú'],
				['$linksHeader', 'Cuir í dteaghmhail liom ar'],
				['$contactHeader', 'Déan teagmháil'],
				['$contactEmail', 'Déan teagmháil r-phost'],
				['$galleryWebapps', 'Iarratais Gréasáin'],
		
				['$gallery->hypatiaTitle', 'leathanach ómós Hypatia'],
				['$gallery->hypatiaDescription', 'Leathanach faoi fealsamh ársa, Hypatia.<br> tionscnámh gaolta Free-Code-Camp'],

				['$gallery->portfolioTitle', 'Suíomh Idirlin Pearsanta '],
				['$gallery->portfolioDescription', 'An suíomh idirlin atá tú ar.'],
		
				['$gallery->longboatTitle', 'Bád fada'],
				['$gallery->longboatDescription', 'Bád fada na Lochlannach ag seoltóireacht tríd an farraige garbh.'],
		
				['$gallery->papal-guardTitle', 'Gardaí na phápa'],
				['$gallery->papal-guardDescription', 'Portráid leath-réalaíoch ar garda na phápa.'],
		
				['$gallery->merTitle', 'Murúch'],
				['$gallery->merDescription', 'Neach dearadh liom fein.'],
		
				['$gallery->murlocTitle', 'Murloc'],
				['$gallery->murlocDescription', 'Neach ó domhan na \'World of Warcraft\'.'],
		
				['$gallery->origami-birdTitle', 'Éan Oragámaí'],
				['$gallery->origami-birdDescription', 'Éan Oragámaí ag eitilt.'],
		
				['$gallery->slavic-hutTitle', 'Bothán Slavach'],
				['$gallery->slavic-hutDescription', 'Stíl cartún, Bothán Slavach ó meánaoiseach aois luath.'],
		
				['$gallery->dotsTitle', 'Poncanna'],
				['$gallery->dotsDescription', 'Beochan líonra poncanna, in ann úsaid a bhaint as i mpairt den suíomh idirlin.'],
		
				['$gallery->water-wormTitle', 'Péist uisce'],
				['$gallery->water-wormDescription', 'Péist uisce a leanann cúrsóir riomhaire.'],
		
				['$gallery->quote-generatorTitle', 'Sleachta gineadóir'],
				['$gallery->quote-generatorDescription', 'Faigh ceanglófar randamach agus é a fhoilsiú ar do twitter.']
	])]
])

let portfolioGallery = [
	{
		title: 'websities',
		gallery: [
				{
					title: 'hypatia',
					thumbinal: 'http://i64.tinypic.com/rbw1gn.png',
					link: 'https://codepen.io/michaelKurowski/full/QGeRqV/'
				},
				{
					title: 'portfolio',
					thumbinal: 'http://i63.tinypic.com/2iqy33r.png',
					link: 'https://codepen.io/michaelKurowski/full/yMxJJr/'
				}
			
		]
	},
	{
		title: 'webapps',
		gallery: [
				{
					title: 'quote-generator',
					thumbinal: 'http://i65.tinypic.com/37ssp.png',
					link: 'https://codepen.io/michaelKurowski/full/wJNaQB/'
				}
		]
	},
	{
		title: 'art',
		gallery: [
			{
				title: 'longboat',		
				thumbinal: 'http://i63.tinypic.com/66kqp0.png',
				link: 'https://kesepton.deviantart.com/art/Longboat-509926031'
			},
			{
				title: 'papal-guard',
				thumbinal: 'http://i64.tinypic.com/zwydlh.png',
				link: 'https://kesepton.deviantart.com/art/Papal-Guard-509926211'
			},
			{
				title: 'mer',
				thumbinal: 'http://i63.tinypic.com/549jcw.png',
				link: 'https://kesepton.deviantart.com/art/Mer-509925967'
			},
			{
				title: 'murloc',
				thumbinal: 'http://i64.tinypic.com/dgsznl.png',
				link: 'https://kesepton.deviantart.com/art/Murloc-509926133'
			},
			{
				title: 'origami-bird',		
				thumbinal: 'http://i67.tinypic.com/xomxs5.png',
				link: 'https://kesepton.deviantart.com/art/Origami-Bird-371585871'
			},
			{
				title: 'slavic-hut',		
				thumbinal: 'http://i66.tinypic.com/2dgvpzt.png',
				link: 'https://kesepton.deviantart.com/art/Slavic-Hut-509925795'
			}
		]
	},
	{
		title: 'visualisations',
		gallery: [
			{
				title: 'dots',		
				thumbinal: 'http://i66.tinypic.com/ayog42.png',
				link: 'https://codepen.io/michaelKurowski/full/RpYGqz/'
			},
			{
				title: 'water-worm',		
				thumbinal: 'http://i68.tinypic.com/s3f4f7.png',
				link: 'https://codepen.io/michaelKurowski/full/NpLgwE/'
			}
		]
	},
]

function setLanguage (languageCode) {
	languageSet = languageCode || languageSet
	languageMap.forEach( (value, key) => {
		let text = dictionary.get(languageCode).get(key)
		$('#' + value).html(text)
		
		//console.log(dictionary.get(languageCode).get(key))
	})
	portfolioGallery.forEach( gallerySection => {
		gallerySection.gallery.forEach( thumbinal => {
			let title = dictionary.get(languageCode).get('$gallery->' + thumbinal.title + 'Title')
			let desc = dictionary.get(languageCode).get('$gallery->' + thumbinal.title + 'Description')
			$('#gallery-overlay-' + thumbinal.title).html('<strong>' + title + '</strong><br>')
			$('#gallery-overlay-' + thumbinal.title).append(desc)
		})
	})
}


$(window).resize(function() {
	viewportWidth = $(window).width()
	$('#mainPage').css(
		'height',
		$(window).height()
	)
	$('#mainPage').css(
		'width',
		$(window).width()
	)
	cnv.width = $(window).width()
	cnv.height = $(window).height()
	console.log($(window).height())
});

$(document).ready(() => {
	viewportWidth = $(window).width()
	setLanguage('eng')
	$('#mainPage').css(
		'height',
		$(window).height()
	)	
	$('#mainPage').css(
		'width',
		$(window).width()
	)
	cnv.width = viewportWidth
	cnv.height = $(window).height()
	console.log($(window).height())
	
})

$(document).scroll(() => {
	$('#mainPage').css(
		'top',
		-$(document).scrollTop() + 'px'
	)
})
portfolioGallery.forEach( element => {
	let categoryRow = $(document.createElement('div')).addClass('col-md-12 center-block mt-5 mb-5 bgd-secondary')
	let header = $(document.createElement('h1'))
	header.attr('id', 'gallery-header-' + element.title)
	header.append(element.title)
	categoryRow.append(header)
	$('#gallery').append(categoryRow)
	
	let categoryGalleryRow = $(document.createElement('div'))
	categoryGalleryRow.attr('id', 'gallery-' + element.title)
	categoryGalleryRow.addClass('col-md-12 center-block row mb-5 bgd-secondary-dark')
	$('#gallery').append(categoryGalleryRow)
	
	let imgLoading = element.gallery.map(obj => 
		new Promise ((resolve, reject) => {
			let img = new Image()
			img.src = obj.thumbinal
			img.onload = () => resolve({img, link: obj.link, title: obj.title})
		})
	)

Promise.all(imgLoading)
	.then( imgs => {
		imgs.forEach( resolvedValue => {
			let img = resolvedValue.img
			let hrefUrl = resolvedValue.link
			let title = resolvedValue.title
			
			let imgContainer = $(document.createElement('div')).addClass('col-md-4 menu-element mb-5 mt-5 galleryThumb')
			let link = $(document.createElement('a'))
			link.attr('href', hrefUrl)
			link.attr('target', '_blank')
			let overlay = $(document.createElement('div')).addClass('bgd-secondary-dark hidden-desc-layer')
			$(overlay).attr('id', 'gallery-overlay-' + title)
			$(link).append(img)
			$(link).append(overlay)
			$(imgContainer).append(link)
			//$(imgContainer).append(overlay)
			$(img).addClass('img-thumbnail')
			$('#gallery-' + element.title).append(imgContainer)
		})
		setLanguage(false)
	})
})

void function setListeners() {
	document.onmousemove = e => {
		$('.slideshow-pic').css({'transform': `rotateX(${Math.abs(e.clientY/20)}deg)`} )
	}
}()

let viewportWidth = 0
let grdColors = ['rgba(0,0,0,0.3)', "rgba(0,0,0,0)"];
let grdLength = 100
let dotsColor='yellow';
let bigDotsColor = 'yellow'
let linesColor = 'yellow'
let fontColor = '#f1ff79'
let backgroundColor = '#311717'
let dotsAmount = Math.round($(window).width()/25);


let bigDotsAmount = Math.round($(window).width()/25);;
let speedLimit = 0.6;
let lineLength = 200;
let lineWidthMultiplier = 1



let lnLngthSqrd = lineLength*lineLength;
let cnv = document.getElementById("mainPage");
let ctx = cnv.getContext("2d");

let dotsList = [];
let bigDotsList = [];
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;



let realSizeHeight = window.innerHeight;
let initWindowHeight = window.innerHeight;

let grd = ctx.createLinearGradient(0,70,0,70+grdLength);
let grd2 = ctx.createLinearGradient(00,cnv.height-grdLength,0,cnv.height);
//let grd2 =
init();


function init(){
	//Initializing gradient
	for (var i=0;i<grdColors.length;i++){
		console.log(i+ "x" + grdColors[i]);
		grd.addColorStop(i*(1/grdColors.length),grdColors[i]);
		grd2.addColorStop((grdColors.length-i)*(1/grdColors.length),grdColors[i]);
	}
	for (var i=0;i<dotsAmount;i++){
		dotsList.push(new dot( rand(0,cnv.width,false), rand(0,cnv.height,false), rand(2,3,true) ));

	}
	for (var i=0;i<bigDotsAmount;i++){
		bigDotsList.push(new dot( rand(0,cnv.width,false), rand(0,cnv.height,false), rand(2,40,true) ));

		
	}
	for (var i=0;i<dotsAmount;i++){
		for (var j=0;j<dotsAmount;j++){
			var distanceSquared = (dotsList[i].coordinates[0] - dotsList[j].coordinates[0])*(dotsList[i].coordinates[0] - dotsList[j].coordinates[0]) + (dotsList[i].coordinates[1] - dotsList[j].coordinates[1])*(dotsList[i].coordinates[1] - dotsList[j].coordinates[1]);
			if (Math.abs(distanceSquared)<lnLngthSqrd){
				dotsList[i].friends.push(dotsList[j]);
			}
		}
	}
	
	
	//ctx.fillStyle=grd;
	//ctx.fillRect(0, 0, cnv.width, cnv.height);
	//ctx.fillStyle=grd2;
	//ctx.fillRect(0, 0, cnv.width, cnv.height);
	setInterval(frame, 25);
	
	
}



function frame (){
	
	//ctx.fillStyle="red";
	ctx.clearRect(0, 0, cnv.width, cnv.height);
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	ctx.fillStyle = grd2;
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	ctx.textAlign = 'center'
	let fontSize = Math.sqrt(viewportWidth*2)/2.4 + (viewportWidth * 2) / 2000
	ctx.font = fontSize + 'px Georgia';
	ctx.fillStyle = fontColor;
	ctx.fillText(dictionary.get(languageSet).get('$motto'), cnv.width/2, cnv.height/2);
	for (var i=0;i<dotsAmount;i++){
		dotsList[i].move();
		dotsList[i].draw(0.2);
		for (var j=0;j<dotsAmount;j++){
			var distanceSquared = (dotsList[i].coordinates[0] - dotsList[j].coordinates[0])*(dotsList[i].coordinates[0] - dotsList[j].coordinates[0]) + (dotsList[i].coordinates[1] - dotsList[j].coordinates[1])*(dotsList[i].coordinates[1] - dotsList[j].coordinates[1]);
			if (Math.abs(distanceSquared)<lnLngthSqrd){
			ctx.globalAlpha = 0.02*(lnLngthSqrd/Math.abs(distanceSquared));
			ctx.beginPath();
			ctx.strokeStyle=linesColor;
			ctx.moveTo(dotsList[i].coordinates[0],dotsList[i].coordinates[1]);
			ctx.lineTo(dotsList[j].coordinates[0],dotsList[j].coordinates[1]);
			ctx.stroke();
			ctx.globalAlpha = 1;
			}
		}
	
		

	}
	for (var i=0;i<bigDotsAmount;i++){
		bigDotsList[i].move();
		ctx.shadowBlur=10;
		ctx.shadowColor=bigDotsColor;
		bigDotsList[i].draw(0.02);
		ctx.shadowBlur=0;
	}
	
}

function dot(x,y,size){
	this.coordinates = [x,y];
	this.size = size;
	this.vects = [0,0];
	this.friends = [];
	this.move = function(){
		this.vects[0]+=rand(-0.1,0.2,false);
		this.vects[1]+=rand(-0.1,0.2,false);
		if(this.vects[0]>speedLimit){
			this.vects[0]-=0.1;
		}
		if(this.vects[0]<-speedLimit){
			this.vects[0]+=0.1;
		}
		if(this.vects[1]>speedLimit){
			this.vects[1]-=0.1;
		}
		if(this.vects[1]<-speedLimit){
			this.vects[1]+=0.1;
		}
		
		
		if (this.coordinates[0]<0){
			this.coordinates[0]=0;
		}
		if (this.coordinates[0]>cnv.width){
			this.coordinates[0]=cnv.width;
		}
		if (this.coordinates[1]>realSizeHeight){
			this.coordinates[1]=realSizeHeight;
		}	
		if (this.coordinates[1]<0){
			this.coordinates[1]=0;
		}	
		this.coordinates[0]+=this.vects[0];
		this.coordinates[1]+=this.vects[1];
	}
	this.draw = function(opacity){
		ctx.lineWidth = lineWidthMultiplier

		ctx.globalAlpha = opacity;
		//ctx.shadowBlur=2;
		//ctx.shadowColor=dotsColor;
		ctx.beginPath();
		ctx.fillStyle=dotsColor;

		ctx.arc(this.coordinates[0],this.coordinates[1],this.size,0,2*Math.PI);
		ctx.closePath();
		ctx.fill();
		ctx.globalAlpha = 1;
		//ctx.shadowBlur=0;
	}
}


function rand(min,max,round){
	switch (round){
		case true:
			return Math.round(Math.random()*max+min);
		case false:
			return Math.random()*max+min;
	}
}

