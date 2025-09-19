/*!
 * Get parameter value from URL or URL string
 * Used by Search and Video Placeholder
 * v2023-01-25
 */
function getURLParameter(param, href){
  var url = (href && href.length > 0 && href.indexOf('?') != -1) ? href.split('?')[1] : window.location.search.substring(1),
      params = new URLSearchParams(url)
  ;
  return params.get(param);
}

/*!
 * Convert icons
 * Replaces a `span` with the `.icon` class
 * <span class="icon" data-icon="calendar"></span>
 */
(function(){
  var icons = document.querySelectorAll('span.icon');
  for(i=0; i< icons.length; i++){
    var el = icons[i],
        className = el.getAttribute('class'),
        dataIcon = el.getAttribute('data-icon'),
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    ;
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#icon-' + dataIcon);
    svg.setAttribute('class', className);
    svg.setAttribute('data-icon', dataIcon);
    svg.setAttribute('aria-hidden', true);
    svg.setAttribute('focusable', false);
    svg.appendChild(use);
    el.parentNode.replaceChild(svg, el);
  }
})();

/*!
 * Table overflow
 */
(function(){
  document.querySelectorAll('table').forEach(function(table){
    var table_wrapper = document.createElement('div');
    table_wrapper.className = 'tablewrap';
    table.parentNode.insertBefore(table_wrapper, table);
    table_wrapper.appendChild(table);
  });
})();

/*!
 * Responsive wrapper embeds, iframes, etc
 * v2023-05-01
 */
(function(){
  function fitEmbed(embeds){
    console.log(embeds)
    for(var i=0; i<embeds.length; i++) {
      var embed = embeds[i],
          width = embed.getAttribute('width'),
          height = embed.getAttribute('height')
      ;
      embed.style.aspectRatio = `${width} / ${height}`;
    }
  }
  var sources = [
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="vimeo.com"]'
      ],
      embeds = document.querySelectorAll(sources.join(','))
  ;
  if(embeds.length) {
    fitEmbed(embeds);
  }
})();

/*!
 * Global Menu
 * v2025-05-01
 */
(function(){
	let menu = document.getElementById('global-menu');
	if (!menu) return;
	document.querySelectorAll('.global-menu-toggle').forEach(function(item){
		item.addEventListener('click', function(e){
			menu.showModal();
		}, false)
	});
})();

/*!
 * Light/Dark Toggle
 * v2025-07-02
 */
(function(){
	const themeKey = 'ndt-user-theme-preference';
	const lightTheme = 'light';
	const darkTheme = 'dark';
	let toggles = document.querySelectorAll('.light-dark-toggle');
	let body = document.body;
	
  function setCookie(name, value, days) {
  	const expires = new Date(Date.now() + days * 864e5).toUTCString();
  	const domain = location.hostname.split('.').slice(-2).join('.');
  	document.cookie = `${name}=${value}; expires=${expires}; path=/; domain=.${domain}`;
  }

	function getCookie(name) {
		return document.cookie
			.split('; ')
			.find(row => row.startsWith(name + '='))
			?.split('=')[1];
	}
})();

/*!
 * Video Placeholder
 * Uses a link with the class `video` and a child image
 * <a class="video" href="https://www.youtube.com/watch?v=YTID"><img src="...">Optional text</a>
 * v2025-05-19
 */
(function(){
  document.body.querySelectorAll('.video').forEach(function(item, i){
    var video = item,
        link_text = item.innerText,
        play_button = document.createElement('div')
    ;
    play_button.setAttribute('class', 'play');
    
    if (link_text) {
      let play_label = document.createElement('span');
      Array.from(video.childNodes).forEach(function(node) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          var span = document.createElement('span');
          span.className = 'video-label';
          span.textContent = node.textContent.trim();
          video.replaceChild(span, node);
        }
      });
      play_label.setAttribute('class', 'play-label');
      play_label.innerHTML = link_text
      play_button.appendChild(play_label)
    }
    video.appendChild(play_button);
    video.addEventListener('click', loadVideo, false);
  });

  function loadVideo(e){
    e.preventDefault();
    if(this.classList.contains('lightbox')) return;

    var el = this,
        img = el.getElementsByTagName('img')[0],
        w = img.width,
        h = img.height,
        href = el.getAttribute('href'),
        service = (href.indexOf('vimeo') >= 0) ? 'vimeo' : 'youtube',
        baseurl = (service == 'youtube') ? 'https://www.youtube-nocookie.com/embed/' : 'https://player.vimeo.com/video/',
        id = (service == 'youtube') ? getURLParameter('v', href) : href.split('/').pop(),
        t = getURLParameter('t', href),
        timestamp = (t) ? `&start=${t}` : ''
    ;

    el.parentNode.innerHTML = `<iframe data-init="false" width="${w}" height="${h}" frameborder="0" src="${baseurl + id}?autoplay=1&rel=0&wmode=transparent&vq=hd720&enablejsapi=1${timestamp}" credentialless allowfullscreen referrerpolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-popups-to-escape-sandbox" csp="sandbox allow-scripts allow-same-origin;" style="aspect-ratio:${w}/${h}"></iframe>`;
  }
})();

/*!
 * Primary/Fixed Nav
 * v2025-08-26
 */
(function(){
	const SCROLL_DELAY = 10;
	const nav_primary = document.querySelector('.header-nav');
	const nav_fixed = document.getElementById('nav-fixed');
	if(!nav_fixed || !nav_primary) return;

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if(entry.isIntersecting){
				// Primary nav is visible, hide fixed nav
				if(!nav_fixed.hidden){
					nav_fixed.classList.remove('active');
					setTimeout(() => {
						nav_fixed.hidden = true;
					}, SCROLL_DELAY);
				}
			} else {
				// Primary nav is out of view, show fixed nav
				if(nav_fixed.hidden){
					nav_fixed.hidden = false;
					setTimeout(() => {
						nav_fixed.classList.add('active');
					}, SCROLL_DELAY);
				}
			}
		});
	}, {
		threshold: 0,
		rootMargin: '0px'
	});

	observer.observe(nav_primary);
})();

/*!
 * Sticky Footer Nav
 * v2025-08-27
 */
(function(){
	const navFooter = document.querySelector('.nav-footer');
	const siteFooter = document.querySelector('.site-footer');

	if(!navFooter || !siteFooter) return;
	if(!navFooter.classList.contains('nav--fixed')) return;

  navFooter.classList.add('fixed');
  var windowBottom = window.pageYOffset + window.innerHeight,
      footerTop = siteFooter.offsetTop + navFooter.offsetHeight,
      SCROLL_DELAY = 10,
	    scrollTimeout = null
  ;
  
	window.addEventListener('scroll', () => {
		if(scrollTimeout) clearTimeout(scrollTimeout);
		
		scrollTimeout = setTimeout(() => {
			const scrollCurr = window.pageYOffset;
      windowBottom = scrollCurr + window.innerHeight;
      footerTop = siteFooter.offsetTop + navFooter.offsetHeight;
      if(windowBottom < footerTop){
        navFooter.classList.add('fixed');
      } else {
        navFooter.classList.remove('fixed');
      }
		}, SCROLL_DELAY);
	}, { passive: true });
})();

/*!
 * Back to Top Button
 * v2025-08-27
 */
(function(){
  const pageBtt = document.querySelector('.page-btt');
  if(!pageBtt) return;
  
  const thresholdElement = document.createElement('div');
  thresholdElement.style.height = '100vh';
  thresholdElement.style.position = 'absolute';
  thresholdElement.style.top = '0';
  thresholdElement.style.left = '0';
  thresholdElement.style.pointerEvents = 'none';
  thresholdElement.style.zIndex = '-1';
  document.body.appendChild(thresholdElement);
  
  const observer = new IntersectionObserver((entries) => {
  	entries.forEach(entry => {
  		if (entry.isIntersecting) {
  			pageBtt.classList.remove('active');
  		} else {
  			pageBtt.classList.add('active');
  		}
  	});
  }, {
  	threshold: 0,
  	rootMargin: '0px'
  });
  
  observer.observe(thresholdElement);
})();

/*!
 * Social Sharing
 * v2023-12-14
 */
(function(){
  if (!document.querySelectorAll('.social-share')) return;

  var containers = document.querySelectorAll('.social-share'),
      url = (document.querySelector('link[rel="canonical"]')) ? document.querySelector('link[rel="canonical"]').getAttribute('href') : window.location.href,
      url_enc = encodeURIComponent(url),
      title = document.querySelector('h1') || document.querySelector('.page-title'),
      title_text = title.innerText,
      title_enc = encodeURIComponent(title_text),
      shareData = {
        title: document.domain,
        text: title_text,
        url: url
      },
      defaultServices = [{
        name: 'Facebook',
        html: '<svg class="icon" data-icon="facebook"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-facebook"></use></svg>',
        url: 'https://www.facebook.com/dialog/share?app_id=135465433914446&display=popup&href=' + url_enc + '&title=' + title_enc
      }, {
        name: 'LinkedIn',
        html: '<svg class="icon" data-icon="linkedin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-linkedin"></use></svg>',
        url: 'https://www.linkedin.com/sharing/share-offsite/?url=' + url_enc + '&title=' + title_enc
      }, {
        name: 'X/Twitter',
        html: '<svg class="icon" data-icon="twitter-x"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter-x"></use></svg>',
        url: 'https://twitter.com/intent/tweet?url=' + url_enc + '&text=' + title_enc
      }, {
        name: 'Email',
        html: '<svg class="icon" data-icon="envelope"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-envelope"></use></svg>',
        url: 'mailto:?subject=' + title_enc + '&body=' + url_enc
      }],
      services = (typeof window.NDTSharingServices === "undefined") ? defaultServices : window.NDTSharingServices,
      content_native = '<li class="share-native hidden"><button class="btn" title="Share this page" aria-label="Share this page"><svg class="icon" data-icon="box-arrow-up"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-box-arrow-up"></use></svg><span> Share</span></button></li>',
      content = function(){
        let html = '<ul class="no-bullets native-false">';
        if(navigator.share){ html += content_native }
        for(var i = 0; i < services.length; ++i) {
          var service = services[i];
          html += '<li class="share-' + service.name.toLowerCase().replace('/','-') + ' share-custom"><a title="Share on ' + service.name + '" class="btn" href="' + service.url + '" aria-label="Share on ' + service.name + '">' + service.html + '</a></li>';
        }
        html += '</ul>';
        return html;
      },
      clickHandler = function(e) {
        if(e.target.tagName == 'A'){
          var service = e.target.protocol.indexOf('mailto') !== -1 ? 'email' : e.target.host;
          if (service === 'email') return;
          e.preventDefault();
          window.open(e.target.href, "_blank", "toolbar=no,menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes,width=600,height=400,modal=yes,alwaysRaised=yes");
        } else {
          nativeShare();
        }
      },
      nativeShare = function(e){
        if(navigator.canShare(shareData)) {
          navigator.share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch((e) => console.log('Error: ' + e))
        } else { console.log('Sharing not available') }
      }
  ;
  
  for(var i = 0; i < containers.length; ++i) {
    var container = containers[i];
    container.innerHTML = content();
    if(navigator.share){
      container.querySelector('ul').classList.remove('native-false')
      container.querySelector('ul').classList.add('native-true');
      container.querySelector('.share-native').classList.remove('hidden');
    }
    container.addEventListener('click', clickHandler, false);
  }
})();
