(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(182),s=n.n(l),m=n(162),c=n(176),p=n(154),d=n(177),f=n(292),u=p.b.div.withConfig({displayName:"AuthorHandles__SocialWrapper",componentId:"y019zv-0"})(["text-align:left;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;margin:0 auto;.social-item{padding:0.25rem 0.25rem;color:#ffffff;font-size:2em;}"]),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author.frontmatter,t=e.github,n=e.linkedin,a=e.twitter,r=e.email;return i.a.createElement(u,null,i.a.createElement(function(e){var t=e.handle;return i.a.createElement("span",{className:"social-item"},i.a.createElement("a",{className:"social-link",href:"https://twitter.com/"+t},i.a.createElement(f.d,null)))},{handle:a}),i.a.createElement(function(e){var t=e.handle;return i.a.createElement("span",{className:"social-item"},i.a.createElement("a",{className:"social-link",href:"https://github.com/"+t},i.a.createElement(f.b,null)))},{handle:t}),i.a.createElement(function(e){var t=e.handle;return i.a.createElement("span",{className:"social-item"},i.a.createElement("a",{className:"social-link",href:"https://www.linkedin.com/in/"+t},i.a.createElement(f.c,null)))},{handle:n}),i.a.createElement(function(e){var t=e.handle;return i.a.createElement("span",{className:"social-item"},i.a.createElement("a",{className:"social-link",href:"mailto:"+t},i.a.createElement(f.a,null)))},{handle:r}))},t}(i.a.Component),h=p.b.div.withConfig({displayName:"AuthorBio__AuthorAvatar",componentId:"msph6f-0"})(["border-radius:50%;height:150px;width:150px;background-size:cover;float:right;"]),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author;return i.a.createElement(o.Fragment,null,i.a.createElement(h,{style:{backgroundImage:'url("'+e.frontmatter.avatar.publicURL+'")'}}),i.a.createElement(g,{author:e}),i.a.createElement(d.a,{content:e.html}))},t}(i.a.Component),y=n(160),x=n(161),A=n(165);n.d(t,"pageQuery",function(){return E});var w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).l=void 0,t}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.allMarkdownRemark.edges"),t=s()(this,"props.data.author"),n=""+t.frontmatter.title;return i.a.createElement(m.a,{location:this.props.location,title:n},i.a.createElement(x.a,{title:t.frontmatter.title,path:t.frontmatter.slug,cover:t.frontmatter.cover&&t.frontmatter.cover.publicURL}),i.a.createElement(A.a,{heroImg:t.frontmatter.cover&&t.frontmatter.cover.publicURL,title:t.frontmatter.title}),i.a.createElement(y.a,null,i.a.createElement(b,{author:t})),i.a.createElement(y.a,null,i.a.createElement("h1",{style:{margin:"0 0 2em 0"}},'Posts authored by "',this.props.pageContext.author,'"'),i.a.createElement(c.a,{posts:e})))},t}(i.a.Component),E=(t.default=w,"1249915326")},155:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(33),s=n.n(l);n.d(t,"a",function(){return s.a}),n.d(t,"b",function(){return l.withPrefix});n(157),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},156:function(e,t){e.exports={siteTitle:"040code",siteDescription:"A developers blog",authorName:"040 code",twitterUsername:"niekos77",authorAvatar:"",multilangPosts:!1,authorDescription:"",siteUrl:"https://040code.github.io/",disqusSiteUrl:"https://www.disqus.com/",pathPrefix:"/",siteCover:"/images/cover.jpg",googleAnalyticsId:"UA-137787150-1",background_color:"#ffffff",theme_color:"#222222",display:"standalone",icon:"src/assets/gatsby-icon.png",postsPerPage:7,disqusShortname:"040code",headerLinks:[{label:"🏡 040 blog",url:"/"},{label:"Niek Palm",url:"/authors/niek"},{label:"Maarten Metz",url:"/authors/maarten"},{label:"Jeroen Knoops",url:"/authors/jeroen"},{label:"Stefan van den Oord",url:"/authors/stefan"}],footerLinks:[]}},157:function(e,t,n){var a;e.exports=(a=n(159))&&a.default||a},158:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return c});var a=n(173),r=n.n(a),o=n(154),i=n(155);function l(){var e=r()(['\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Lato", sans-serif;\n  color: #222222cc;\n  background-color: #e8e8e8;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  color: rgba(34,34,34,0.8);\n}\n\nul,\nol {\n  padding-left: 2em;\n  margin: 1em 0 0 0;\n}\n']);return l=function(){return e},e}var s=Object(o.a)(l()),m=Object(o.b)(i.a).withConfig({displayName:"Commons__StyledLink",componentId:"sc-1yiug1-0"})(["border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}"]),c=o.b.p.withConfig({displayName:"Commons__Text",componentId:"sc-1yiug1-1"})(["line-height:1.6;margin:1em 0 0 0;"])},159:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(56),s=n(2),m=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},160:function(e,t,n){"use strict";var a=n(154).b.main.attrs({role:"main"}).withConfig({displayName:"Wrapper",componentId:"aej7i5-0"})(["position:relative;border-radius:3px;width:80%;max-width:770px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:30px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);@media (max-width:780px){width:90%;padding:25px;}"]);t.a=a},161:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(169),s=n.n(l),m=n(155),c=n(156),p=n.n(c),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.isBlogPost,n=e.path,a=void 0===n?"":n,r=e.lang,o=void 0===r?"en":r,l=this.props.title?this.props.title+" | "+p.a.siteTitle:p.a.siteTitle,c=p.a.siteUrl.substring(0,p.a.siteUrl.length-1),d=""+c+(this.props.imageFb||this.props.cover||Object(m.b)(p.a.siteCover)),f=""+c+(this.props.imageTw||this.props.cover||Object(m.b)(p.a.siteCover)),u=this.props.description||p.a.siteDescription;return i.a.createElement(s.a,{title:l},i.a.createElement("html",{lang:o}),i.a.createElement("meta",{name:"description",content:u}),i.a.createElement("link",{rel:"canonical",href:c+Object(m.b)(a)}),i.a.createElement("meta",{property:"og:url",content:c+Object(m.b)(a)}),i.a.createElement("meta",{property:"og:type",content:t?"article":"website"}),i.a.createElement("meta",{property:"og:title",content:l}),i.a.createElement("meta",{property:"og:description",content:u}),i.a.createElement("meta",{property:"og:image",content:d}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:p.a.twitterUsername}),i.a.createElement("meta",{name:"twitter:title",content:l}),i.a.createElement("meta",{name:"twitter:description",content:u}),i.a.createElement("meta",{name:"twitter:image",content:f}))},t}(i.a.Component);t.a=d},162:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(155),s=n(154),m=n(170),c=s.b.div.withConfig({displayName:"SideMenu__StyledBurgerMenu",componentId:"uekpe8-0"})([".bm-burger-button{position:fixed;width:36px;height:30px;left:36px;top:36px;}.bm-burger-bars{background:#ffffff;}.bm-cross-button{height:24px;width:24px;}.bm-cross{background:#ffffff;}.bm-menu{background:rgb(0,0,0,0.5);padding:2.5em 1em 0;font-size:1.15em;}.bm-morph-shape{fill:#373a47;}.bm-item-list{padding-top:2em;","}.bm-item{display:inline-block;padding:0.5em;}.bm-overlay{background:rgba(0,0,0,0.3);}"],""),p=Object(s.b)(l.a).withConfig({displayName:"SideMenu__MenuLink",componentId:"uekpe8-1"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.headerLinks;return i.a.createElement(c,null,i.a.createElement(m.slide,null,e.map(function(e,t){return i.a.createElement(p,{to:e.url,key:"header-link-"+t},e.label)})))},t}(i.a.Component),f=(n(171),s.b.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1oxe0wr-0"})(["text-align:left;padding-top:30px;padding-bottom:50px;background-color:rgba(32,35,42,0.85);color:#ffffff;padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;margin-bottom:1em;padding-right:1em;}}& a{color:#ffffff;font-weight:bold;&:hover{color:#e8e8e8;border-bottom:1px dotted #e8e8e8;}}.footer-col > p{margin:0;}.footer-title{margin:0 0 1rem;}.footer-item{padding:0.25rem 0;color:#ffffff;}.footer-heart{color:red;}.footer-item-text{padding:0.1rem 0;color:#ffffff;}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"])),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.authorName,n=e.footerLinks,a=(e.websiteHost,function(e){var t=e.item;return"string"==typeof t?i.a.createElement("h5",{className:"footer-title",key:t},t):t.url.startsWith("/")?i.a.createElement("span",{className:"footer-item"},i.a.createElement(l.a,{className:"footer-link",to:t.url},t.label)):i.a.createElement("span",{className:"footer-item"},i.a.createElement("a",{className:"footer-link",href:t.url},t.label))}),r=function(e){var t=e.column;return i.a.createElement("div",{className:"footer-col"},t.map(function(e,t){return i.a.createElement(a,{item:e,key:"footer-column-item-"+t})}))};return i.a.createElement(f,null,i.a.createElement("nav",null,i.a.createElement("div",{className:"footer-col"},i.a.createElement("h5",{className:"footer-title"},t," © 2019"),i.a.createElement("p",{className:"footer-item-text"},"Built with"," ",i.a.createElement("a",{className:"footer-link",href:"https://www.gatsbyjs.org"},"Gatsby"),".")),n.map(function(e,t){return i.a.createElement(r,{column:e,key:"footer-column-"+t})})))},t}(i.a.Component),g=n(156),h=n.n(g),b=(n(172),n(158)),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(o.Fragment,null,i.a.createElement(b.a,null),i.a.createElement(d,{headerLinks:h.a.headerLinks}),i.a.createElement("div",{style:{margin:"0 0"}},e),i.a.createElement(u,{siteConfig:h.a}))},t}(i.a.Component);t.a=y},164:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(155),s=n(154),m=s.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"sc-1uj42o2-0"})(["display:inline;margin:0 0.5rem 0 0;color:#787676;"]),c=Object(s.b)(l.a).withConfig({displayName:"TagList__TagListItem",componentId:"sc-1uj42o2-1"})(["margin-left:0.3rem;display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#777;border-radius:10px;&:hover{border-bottom:1px dotted #787676;}"]),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.icon;return i.a.createElement(m,null,!0===n,t.map(function(e,n){return i.a.createElement(o.Fragment,{key:"tag-list-"+n},i.a.createElement(c,{className:"w3-round-size",to:"tags/"+e},e),n<t.length-1?" ":"")}))},t}(i.a.Component);t.a=p},165:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(155),s=n(156),m=n.n(s),c=n(154),p=c.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1i1rqpz-0"})(["position:relative;display:table;width:100%;height:340px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),d=c.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1i1rqpz-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),f=c.b.div.withConfig({displayName:"Hero__LocationContainer",componentId:"sc-1i1rqpz-2"})(["display:table-footer-group;vertical-align:center;text-align:right;width:100%;"]),u=c.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1i1rqpz-3"})(["font-size:3.5rem;margin:10px 60px;color:#fff;text-shadow:2px 2px #222222;font-weight:800;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;"]),g=c.b.h2.withConfig({displayName:"Hero__HeroSubtitle",componentId:"sc-1i1rqpz-4"})(["font-size:1.7rem;margin:10px 60px;color:#fff;text-shadow:2px 2px #222222;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;"]),h=c.b.span.withConfig({displayName:"Hero__DateAndAuthor",componentId:"sc-1i1rqpz-5"})(["font-weight:500;font-size:1.2rem;color:#fff;text-shadow:2px 2px #222222;"]),b=Object(c.b)(l.a).withConfig({displayName:"Hero__AuthorLink",componentId:"sc-1i1rqpz-6"})(["margin-left:0.3rem;font-weight:500;font-size:1.2rem;color:#fff;text-shadow:2px 2px #222222;&:hover{border-bottom:1px dotted #787676;}&:before{content:'@';}"]),y=c.b.a.withConfig({displayName:"Hero__LocationLink",componentId:"sc-1i1rqpz-7"})(["margin-right:0.7rem;font-size:0.9rem;color:#fff;text-shadow:2px 2px #222222;font-size:1rem;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-style:italic;&:hover{border-bottom:1px dotted #787676;}"]),x=c.b.span.withConfig({displayName:"Hero__LocationMarker",componentId:"sc-1i1rqpz-8"})(["margin-right:0.4rem;font-size:0.75rem;color:#fff;text-shadow:2px 2px #222222;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;"]),A=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.heroImg||Object(l.b)(m.a.siteCover),t=this.props.title,n=this.props.subtitle,a=this.props.date,r=this.props.authors,s=this.props.coverDescription,c=this.props.coverLink;return i.a.createElement(p,{style:{backgroundImage:'url("'+e+'")'}},i.a.createElement(d,null,i.a.createElement(u,null,t),i.a.createElement(g,null,n),r&&0!=r.length&&i.a.createElement(h,null,"by: ",r&&r.map(function(e,t){return i.a.createElement(o.Fragment,{key:"author-list-"+t},i.a.createElement(b,{to:"authors/"+e},e),t<r.length-1?" ":"")}),"  on ",a)),s&&c&&i.a.createElement(f,null,i.a.createElement(x,null,i.a.createElement("span",{className:"fa fa-map-marker-alt"})),i.a.createElement(y,{href:c,target:"_blank"},s)))},t}(i.a.Component);t.a=A},166:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(154),s=n(167),m=n.n(s),c=n(168),p=n.n(c),d=l.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-142m10a-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.language,t="en"===e?m.a:p.a,n="en"===e?"english post":"post en francais";return i.a.createElement(d,{src:t,alt:n,className:"flag"})},t}(i.a.Component);t.a=f},167:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},168:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},176:function(e,t,n){"use strict";n(34);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(155),s=n(166),m=n(164),c=n(154),p=c.b.div.withConfig({displayName:"AuthorList__ListContainer",componentId:"sc-10ety25-0"})(["display:inline;margin:0 0.5rem 0 0;color:#787676;"]),d=Object(c.b)(l.a).withConfig({displayName:"AuthorList__AuthorListItem",componentId:"sc-10ety25-1"})(["margin-left:0.3rem;color:#787676;&:hover{border-bottom:1px dotted #787676;}&:before{content:'@';}"]),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.authors;return i.a.createElement(p,null,e.map(function(t,n){return i.a.createElement(o.Fragment,{key:"author-list-"+n},i.a.createElement(d,{to:"authors/"+t},t),n<e.length-1?", ":"")}))},t}(i.a.Component),u=n(156),g=n.n(u),h=c.b.article.withConfig({displayName:"PostsListItem__Post",componentId:"f90k99-0"})(["border-bottom:1px solid rgba(214,209,230,0.5);padding-bottom:1.25rem;margin-bottom:2rem;"]),b=(Object(c.b)(l.a).withConfig({displayName:"PostsListItem__ReadPost",componentId:"f90k99-1"})(["display:block;font-size:0.75rem;margin-top:1rem;text-align:center;text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;line-height:2;&:hover{background-color:rgba(32,35,42,0.85);border-radius:0.25rem;color:#fff;}"]),c.b.time.withConfig({displayName:"PostsListItem__PostDate",componentId:"f90k99-2"})(["color:#787676;&:before{content:'🗓';margin-right:0.2rem;}"])),y=c.b.header.withConfig({displayName:"PostsListItem__PostHeader",componentId:"f90k99-3"})(["padding:0em 0;"]),x=(c.b.p.withConfig({displayName:"PostsListItem__Excerpt",componentId:"f90k99-4"})(["line-height:1.45;padding-bottom:0.5em;"]),Object(c.b)(l.a).withConfig({displayName:"PostsListItem__PostTitleLink",componentId:"f90k99-5"})(["font-size:1.6rem;font-weight:bold;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;&:hover{border-bottom:1px dotted rgba(34,34,34,0.8);}"])),A=c.b.p.withConfig({displayName:"PostsListItem__PostSubTitle",componentId:"f90k99-6"})(["padding:0.8rem 0;font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-style:italic;font-size:1.2rem;"]),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.subtitle,a=e.slug,r=e.date,o=e.language,l=e.tags,c=e.authors;return i.a.createElement(h,null,i.a.createElement(y,null,i.a.createElement("h2",null,i.a.createElement(x,{to:a},g.a.multilangPosts&&i.a.createElement(s.a,{language:o}),t))),i.a.createElement("section",null,i.a.createElement(A,null,n)),i.a.createElement("footer",null,i.a.createElement(m.a,{tags:l,icon:!0}),i.a.createElement(b,null,r),i.a.createElement(f,{authors:c})))},t}(i.a.Component),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.posts;return i.a.createElement(o.Fragment,null,e.map(function(e){var t={title:e.node.frontmatter.title,subtitle:e.node.frontmatter.subtitle,slug:e.node.frontmatter.slug,date:e.node.frontmatter.date,language:e.node.frontmatter.language||"en",tags:e.node.frontmatter.tags||[],authors:e.node.frontmatter.authors||[]};return i.a.createElement(w,Object.assign({key:t.slug},t))}))},t}(i.a.Component);t.a=E},177:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(154),s=n(164),m=l.b.header.withConfig({displayName:"ContentHeader__Header",componentId:"sc-1uw779c-0"})(["margin-bottom:2rem;color:#787676;"]),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.tags;return i.a.createElement(m,null,t&&i.a.createElement("time",null,t),Array.isArray(n)&&n.length>0&&i.a.createElement(o.Fragment,null,i.a.createElement(s.a,{tags:n})))},t}(i.a.Component),p=l.b.div.withConfig({displayName:"Content__ContentBody",componentId:"sc-1jppj8x-0"})(["line-height:1.6;& > h2:first-of-type{padding-top:0;}& > h2{padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3:first-of-type{padding-top:0;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}&.anchor,&.gatsby-resp-image-link{border:none;}}& > blockquote{box-sizing:border-box;margin:1.75em 0 1.75em -2.2em;padding:0 0 0 1.75em;border-left:0.4em solid rgba(32,35,42,0.85);}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;background:#2d2d2d;color:#ffffff;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em 0em 1.5em 0;font-size:0.7em;}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight-code-line{background-color:#022a4b;display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:.75em;border-left:.25em solid #ffa7c4;}& p > code.language-text,& li > code.language-text{background:rgba(255,229,100,0.2);color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;}& table{margin-top:1em;border-collapse:collapse;border-radius:0.5em;overflow:hidden;& th,& td{padding:0.5em;background:#e8e8e8;border-bottom:2px solid white;}}"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.content,n=e.tags;return i.a.createElement("section",null,n&&i.a.createElement(c,{tags:n}),i.a.createElement(p,{dangerouslySetInnerHTML:{__html:t}}))},t}(i.a.Component);t.a=d}}]);
//# sourceMappingURL=component---src-templates-authors-js-36f30ff7d756ebfbabcf.js.map