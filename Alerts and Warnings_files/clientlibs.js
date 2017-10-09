/*
 * TSG Global Base JS
 */

;(function($, window, document, undefined) {
    
    $(document).ready(function(){	
        
    });
    
}(jQuery, window, document));
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
jQuery(document).ready(function($) {
    var jcps = $('.ie8 #photoslider, .ie7 #photoslider');
    
    if(jcps.length) {
        jcps.jcarousel({
            wrap: 'both'
        });
        
        $('.miniSliderPrev').jcarouselControl({
            target: '-=1'
        });

        $('.miniSliderNext').jcarouselControl({
            target: '+=1'
        });
    } else if( $('.photo ul.slider') ) {
        $(".photo ul.slider").roundabout({
            focusBearing: 0.0,
            minScale: 0.8
        });
        $(".nav_base").hide();

        $("a.next", "#photoslider").click(function(e) {
            e.preventDefault();
            $(".nav_base").show();
            $(".photo ul.slider").roundabout("animateToNextChild");
            $(".nav_base").delay(600).slideUp(1);
        });

        $("a.prev", "#photoslider").click(function(e) {

        e.preventDefault();
            $(".nav_base").show();
            $(".photo ul.slider").roundabout("animateToPreviousChild");
            $(".nav_base").delay(600).slideUp(1);
        });

        // Tooltip
        //toggles show and hide of tooltip bubble when tooltip icon clicked
        $("span.tooltip_icon").click(function() {
            $(this).parent().siblings().children().removeClass('show').addClass('hide');
            $(this).siblings().toggleClass('show hide');
        });
        
        //hides tooltip bubble when x icon clicked
        $('div.tooltip_box span').click(function(){
            $(this).parent().removeClass('show').addClass('hide');
        });
        
        //closes tooltip when document is clicked
        $(document).click(function(){
            $('div.tooltip_box').removeClass('show').addClass('hide');
        });
        
        // add UI elements
        $('.definitions .tooltip_box').prepend('<div class="tiptop"></div>');
        $('.definitions .tooltip_box').append('<div class="tipbottom"></div>');
        
        // add a linebreak to stack LIs. Needed for x positioning of tooltip bix absolute positioning
        $('ul.definitions li').after('<br />');
        
        $('div.tooltip_box').click(function(e){
            e.stopPropagation();
        });
        
        $("span.tooltip_icon").click(function(e){
            e.stopPropagation();
        });        
    }
}); 
;(function($, window, document, undefined) {
    
    $.fn.dataTableExt.oSort["numeric-comma-asc"]  = function(a,b) {
        var x = a.replace( /,/g, "" ),
            y = b.replace( /,/g, "" );

        x = parseFloat( x );
        y = parseFloat( y );
        return ((x < y) ? -1 : ((x > y) ?  1 : 0));
    };

    $.fn.dataTableExt.oSort["numeric-comma-desc"] = function(a,b) {
        var x = a.replace( /,/g, "" ),
            y = b.replace( /,/g, "" );

        x = parseFloat( x );
        y = parseFloat( y );
        return ((x < y) ?  1 : ((x > y) ? -1 : 0));
    };      

    $(document).ready(function() {

        // Must create a new <thead> with the <th>'s and append it to the table.
        // CQ5 rte is automatically removing the <thead> elements.
        $("#ppt_issued_by_state .filterable_table, #passports_issued .filterable_table, #valid_passports_circulation .filterable_table, #passport_applications_received .filterable_table").each(function() {
            var tableHeadersRow = $(this).find("tr").filter(function() {
                return $("th", this).length > 0;
            }).detach(),
            newThead = $("<thead />").append(tableHeadersRow);

            $(this).append(newThead);
        });            

        $('#ppt_issued_by_state .filterable_table').dataTable({
            "bPaginate": false,     // disable pagination
            "bLengthChange": false, // disable number of records shown option
            "bFilter": true,        // enable filtering
            "bSort": true,          // enable sorting
            "bInfo": false,         // disable records shown
            "sDom": "t",             // only show the table
            "aaSorting": [[ 0, "desc" ]], //sort by date column, most recent first
            "aoColumns": [null,
                { "sType": "numeric-comma" },
                { "sType": "numeric-comma" },
                { "sType": "numeric-comma" },
                { "sType": "numeric-comma" },
                { "sType": "numeric-comma" },                 
                { "sType": "numeric-comma" },
                { "sType": "numeric-comma" }
            ]
        });

        $('#passports_issued .filterable_table, #valid_passports_circulation .filterable_table, #passport_applications_received .filterable_table').dataTable({
            "bPaginate": false,     // disable pagination
            "bLengthChange": false, // disable number of records shown option
            "bFilter": true,        // enable filtering
            "bSort": true,          // enable sorting
            "bInfo": false,         // disable records shown
            "sDom": "t",             // only show the table
            "aaSorting": [[ 0, "desc" ]], //sort by date column, most recent first
            "aoColumns": [null, { "sType": "numeric-comma" }]
        });

        /* Showing and hiding appropriate tables */
        $('#passports .stats_data').hide();
        $('#passports.statistics #right_rail .right_rail_box.med').hide();
        $("#passports_issued").show();
        $('#passports.statistics #right_rail #passports_issued_chart').show();

        $('#table_stats_submit').click(function(e) {
            var selected_val = $('#stats_select').val();

            e.preventDefault();
            $('#passports .stats_data').hide();
            $('#passports.statistics #right_rail .right_rail_box.med').hide();

            if(selected_val === "issued") {
                $("#passports_issued").show('fast');
                $('#passports.statistics #right_rail #passports_issued_chart').show('fast');
            } else if(selected_val === 'circulation') {
                $("#valid_passports_circulation").show('fast');
                $('#passports.statistics #right_rail #passports_circulation_chart').show('fast');
            } else if(selected_val === "received") {
                $('#passport_applications_received').show('fast');
            } else if(selected_val === "issued_by_state") {
                $('#ppt_issued_by_state').show('fast');
                $('#passports.statistics div#right_rail').css('margin-top','-65px');
            }
        });
    });
})(jQuery, window, document);
;(function($, window, document, undefined) {

    $(document).ready(function() {
        
        if( $(".passport-wizard").length === 1 && $("body.cq-wcm-edit").length < 1 ) {
            
            /* Initialize Colorbox */
            $('a.iframe').colorbox(
                { iframe: true, width: "850px", height: "600px" }
            );
            
            window.travelStateGov = window.travelStateGov || {};
            travelStateGov.passportWizard = travelStateGov.passportWizard || {};
            /*******************************
                passport wizard object (pwo)
            *******************************/
            // if the persons age is under 16 when passport was issued then it is a child passport (expires in five years - must apply      // for new passport after expiration

            // if the persons age is 16 or greater then it is an adult passport (expires in 10 years and can be renewed upto five years     // after expiration
            travelStateGov.passportWizard.pwoResponses = {
                currentResidence: "",
                dateOfBirth: "",
                personsAge: "",
                hasHadUsPassport: "",
                stillHavePassport: "",
                knowIssuanceDate: "",
                isStillValid: "",
                reportedToPassportServices: "",
                replacingLimitedValidityPassport: "",
                lvDomesticOverseas: "",
                lvValidityDate: "",
                lvGenderNatural: "",
                lvExpirationDate: "",
                passportIssuanceDate: "",
                passportAge: "",
                requiresChangesCorrections: "",
                nameChange: "",
                correctAnError: "",
                nameChangeLegalDocument: "",
                passportType: "",
                processMethod: "",
                agencyCode: "",
                deliveryMethod: ""
            };


            /*******************************
                initialize questions
            *******************************/
            jQuery('#eligibility_questionset_two .questions').hide();

            jQuery("#persons_age, #passports_age, #lost_stolen_passports_age, #lv_validity_date_time, #lv_expiration_passports_age").each(function(i){
                jQuery("<div class='date_helper_text'>(mm/dd/yyyy)</div>").insertAfter(jQuery(this)); 
            });

            var calImagePath = "/etc/designs/travel/images_global/calendar.gif";

            var datePickerOpts = {
                    showOn: "both",
                    buttonImage: calImagePath,
                    buttonImageOnly: true,
                    maxDate: new Date(),
                    changeMonth: true,
                    changeYear: true,
                    yearRange: "1900"
            };

            jQuery("#persons_age").datepicker(datePickerOpts);

            jQuery("#passports_age").datepicker(datePickerOpts);

            jQuery("#lost_stolen_passports_age").datepicker(datePickerOpts);
            
            jQuery("#lv_validity_date_time").datepicker(datePickerOpts);

            jQuery("#lv_expiration_passports_age").datepicker(datePickerOpts);


            /*******************************
                event handlers for questions
            *******************************/
            jQuery('input[name="currently_reside"]').change(function(e){
                travelStateGov.passportWizard.pwoResponses.currentResidence = jQuery(this).val();
                travelStateGov.passportWizard.currentResidence = travelStateGov.passportWizard.pwoResponses.currentResidence;   
                if(jQuery('input[name="existing"]').is(':checked')){
                    var $this = jQuery('input[name="existing"]').filter(':checked');
                    $this.trigger('change');
                }
            });
            jQuery('#persons_age,#passports_age, #lost_stolen_passports_age, #lv_validity_date_time, #lv_expiration_passports_age').focus(function(e){
                 var dim = $(this).offset();
                $("#ui-datepicker-div").offset({
                    top     :   dim.top + 37,
                    left    :   dim.left
                });
                    //console.log(dim);
            });
            jQuery('#persons_age').change(function(e){
                var thisDateInput = jQuery(this),
                    thisDateInputVal = jQuery.trim(thisDateInput.val());
                if(validateBirthdate(thisDateInputVal)){
                    travelStateGov.passportWizard.pwoResponses.dateOfBirth = thisDateInputVal;
                    setAge(jQuery(this));

                    //setting the min date for other date pickers based on the persons entered birth date
                    jQuery( "#passports_age" ).datepicker( "option", "minDate", new Date(thisDateInputVal) );
                    jQuery( "#lost_stolen_passports_age" ).datepicker( "option", "minDate", new Date(thisDateInputVal) );
                    jQuery( "#lv_validity_date_time" ).datepicker( "option", "minDate", new Date(thisDateInputVal) );
                    jQuery( "#lv_expiration_passports_age" ).datepicker( "option", "minDate", new Date(thisDateInputVal) );
                    //set person type so it can be determined if adult, child, or 16or17
                    setPersonType();
                    if(jQuery('input[name="existing"]').is(':checked')){
                        var $this = jQuery('input[name="existing"]').filter(':checked');
                        $this.trigger('change');
                    }
                }else{
                    thisDateInput.focus();
                    alert("Please enter a valid birth date. ");
                }   

            });
            jQuery('input[name="existing"]').change(function(e){
                //make sure first two inputs have been completed
                if(checkQuestionSetOne()){
                    questionReset(jQuery(this));
                    isMoreQuestions(jQuery(this));
                }else{
                    //all questions in question set one has not been completed
                    alert("Please complete all of the first three questions");
                }
            });
            jQuery('input[name="have_passport"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            jQuery('input[name="know_issuance_date"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            jQuery('#lost_stolen_passports_age').change(function(e){
                var thisDateInput = jQuery(this),
                    thisDateInputVal = jQuery.trim(thisDateInput.val());
                if( validateIssuanceDate(thisDateInputVal) ){
                    travelStateGov.passportWizard.pwoResponses.passportIssuanceDate = thisDateInputVal;
                    setPassportAge(thisDateInput);
                    questionReset(thisDateInput);
                    isMoreQuestions(thisDateInput);
                }else{
                    thisDateInput.focus();
                    alert("Please enter a valid passport issuance date.");
                }
            });
            jQuery('#passports_age').focusout(function()  {
                jQuery("#corrections_yes").focus();
            });
            jQuery('#lost_stolen_passports_age').focusout(function()  {
                jQuery("#reported_yes").focus();
            });
            jQuery('.edit_btn_renew').focusout(function()  {
                jQuery("#standard_processing").focus();
            });
            jQuery('span.edit_btn.type').focusout(function()  {
                jQuery("#standard_processing").focus();
            });
            jQuery('span.edit_btn.processing').focusout(function()  {
                jQuery("#standard_processing").focus();
            });
            jQuery('#header_passtype_replace_edit').focusout(function()  {
                jQuery("#standard_processing").focus();
            });
            
            jQuery('input[name="is_still_valid"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            jQuery('input[name="lost_stolen"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            jQuery('input[name="reported"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            jQuery('input[name="replacing_lv"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            jQuery('input[name="lv_domest_oversea"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            jQuery('input[name="lv_validity_date"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            jQuery('input[name="lv_gender_natural"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            jQuery('#lv_expiration_passports_age').change(function(e){
                var thisDateInput = jQuery(this),
                    thisDateInputVal = jQuery.trim(thisDateInput.val());
                if( validateIssuanceDate(thisDateInputVal) ){
                    travelStateGov.passportWizard.pwoResponses.lvExpirationDate = thisDateInputVal;
                    setPassportAge(thisDateInput);
                    questionReset(thisDateInput);
                    isMoreQuestions(thisDateInput);
                }else{
                    thisDateInput.focus();
                    alert("Please enter valid passport issuance date.");
                }
            });
            jQuery('#passports_age').change(function(e){
                var thisDateInput = jQuery(this),
                    thisDateInputVal = jQuery.trim(thisDateInput.val());
                    jQuery("#corrections_yes").focus();

                //passport age must be newer than birthdate and older than current date and must be valid date

                if( validateIssuanceDate(thisDateInputVal) ){
                    travelStateGov.passportWizard.pwoResponses.passportIssuanceDate = thisDateInputVal;
                    setPassportAge(thisDateInput);
                    questionReset(thisDateInput);
                    isMoreQuestions(thisDateInput);
                }else{
                    alert("Please enter a valid passport issuance date.");
                }
            });
            jQuery('input[name="corrections"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });

            jQuery('input[name="name_change"]').click(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            jQuery('input[name="correct_error"]').click(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });

            jQuery('input[name="name_change_documents"]').change(function(e){
                questionReset(jQuery(this));
                isMoreQuestions(jQuery(this));
            });
            /*******************************
                event handler for Next button
            *******************************/
            jQuery("#outcomeBtn").click(function(e){
                var thisOutcomeBtn = jQuery(this);

                e.preventDefault();

                if(!(thisOutcomeBtn.hasClass("disabled"))){
                    travelStateGov.passportWizard.eligibililityOutcome = runPassportWizard();
                    jQuery("#outcome_display").text(travelStateGov.passportWizard.eligibililityOutcome);
                    //set the global object with outcome
                    //set controller tabs
                    jQuery("#tab1").removeClass("selected disabled").addClass("inactive");
                    jQuery("#tab2").removeClass("inactive disabled").addClass("selected");
                    //hide eligibility outcome
                    jQuery("#step_eligibility").hide();
                    //set value in cost calc options
                    var costCalcOptionId = getMappedOptions(travelStateGov.passportWizard.eligibililityOutcome.toLowerCase());
                    jQuery("#"+costCalcOptionId).attr("checked",true).trigger("click");
                    //set step eligibility as the backBtnPage in global object
                    travelStateGov.passportWizard.setBackBtnPage("step_eligibility");
                    //set step eligibility as the backBtnPage in global object
                    travelStateGov.passportWizard.setCurrentPage("cost_calculator");
                    //show cost calculator
                    jQuery("#cost_calculator").show();
                    jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                    
                    $("#book_type").focus();
                    $("#option_have_book").focus(); 
                    $("#book_under16_type").focus();
                    $("#standard_processing").focus();

                    //populate some of the outcomes screens with appropriate data based on current residence
                    if(travelStateGov.passportWizard.pwoResponses.currentResidence === "unitedstates"){
                        jQuery(".facility_type").text("Acceptance Facility");
                        jQuery(".official_type").text("Acceptance Agent");
                        jQuery('.overseas_processing').hide();
                        jQuery('.overseas_delivery').hide();
                    }else{
                        jQuery(".facility_type").text("U.S. Embassy or Consulate");
                        jQuery(".official_type").text("Consular Official");
                    }

                }else{
                    alert("Please answer all the questions");   
                }
            });

            /*******************************
                reset questions when 
                question is changed
            *******************************/
            var questionReset = function(questionChanged){
                jQuery("#outcomeBtn").addClass("disabled");
                var questionWrapper = jQuery(".questions"),
                    questionWrapperLength = questionWrapper.length;
                    questionTarget = questionChanged.hasClass("questions") ? questionChanged : questionChanged.parents('fieldset');
                    questionChangedIndex = questionWrapper.index(questionTarget),
                    objProperty = "";

                for(var i = (questionChangedIndex + 1), j = questionWrapperLength; i < j; i++){
                    if(i > 2){
                        //hide
                        jQuery(questionWrapper[i]).hide();
                    }   
                    //reset the value
                    jQuery(questionWrapper[i]).find("input").filter(":checked").each(function(i){
                        jQuery(this).prop("checked", false);
                    }).end().filter("input[type='text']").val("");

                    //reset the pwoResponse value

                    objProperty = jQuery(questionWrapper[i]).attr("data-objProp") || jQuery(questionWrapper[i]).parents('fieldset').attr("data-objProp");

                    //if(typeof travelStateGov.passportWizard.pwoResponses[objProperty] === "boolean"){
                    //  travelStateGov.passportWizard.pwoResponses[objProperty] = false;
                    //}else{
                        travelStateGov.passportWizard.pwoResponses[objProperty] = "";
                    //}
                    if(jQuery(questionWrapper[i]).attr("id") === "lost_stolen_issuance_date" || jQuery(questionWrapper[i]).attr("id") === "issuance_date" || jQuery(questionWrapper[i]).attr("id") === "lv_expiration_date"){
                        travelStateGov.passportWizard.pwoResponses.passportAge = "";
                    }

                }
            };
            /*******************************
                isMoreQuestions
            *******************************/
            var isMoreQuestions = function(responseObj){
                var objProperty = responseObj.attr("data-objProp") || responseObj.parents('fieldset').attr("data-objProp"),
                    inputValue = responseObj.val(),
                    responseObjType = responseObj.prop("type"),
                    objPropertySetting = "";

                switch (responseObjType){
                    case "radio":
                        if(inputValue === "yes"){
                            objPropertySetting = true;
                        }else{
                            objPropertySetting = false;
                        }
                    break;
                    case "text":
                        objPropertySetting = inputValue;
                    break;
                    case "checkbox":
                        if(responseObj.is(":checked")){
                            objPropertySetting = true;
                        }else{
                            objPropertySetting = false;
                        }   
                    break;      
                }
                if(!showQuestion(objProperty, objPropertySetting, responseObj)){
                    //enable next button
                    jQuery("#outcomeBtn").removeClass("disabled");
                }

                travelStateGov.passportWizard.pwoResponses[objProperty] = objPropertySetting;   
            };
            var showQuestion = function(objProp, objPropBool, responseObj){
                var isQuestion = false;

                switch (objProp){
                    case "hasHadUsPassport":            
                        if(objPropBool){
                            jQuery("#have_passport").show();
                            isQuestion = true;
                        }   
                    break;
                    case "stillHavePassport":
                        if(objPropBool){
                            jQuery("#replacing_lv").show();
                            isQuestion = true;
                        }else{
                            jQuery("#know_issuance_date").show();
        //                  jQuery("#lost_stolen").show();
                            isQuestion = true;
                        }   
                    break;
                    case "knowIssuanceDate":
                        if(objPropBool){
                            jQuery("#lost_stolen_issuance_date").show();
                            isQuestion = true;
                        }else{
                            jQuery("#is_still_valid").show();
                            isQuestion = true;
                        }   
                    break;
                    case "isStillValid":
                        if(objPropBool){
                            jQuery("#reported").show();
                            isQuestion = true;
                        }
                    break;
                    case "lostStolenIssuanceDate":
                        if(objPropBool){
                            jQuery("#reported").show();
                            isQuestion = true;
                        }
                    break;
                    case "replacingLimitedValidityPassport":
                        if(objPropBool){
                            jQuery("#lv_domest_oversea").show();
                            isQuestion = true;
                        }else{
                            jQuery("#issuance_date").show();
                            isQuestion = true;
                        }   
                    break;
                    case "lvDomesticOverseas":
                        if(objPropBool){
                            jQuery("#lv_validity_date").show();
                            isQuestion = true;
                        }else{
                            jQuery("#lv_expiration_date").show();
                            isQuestion = true;
                        }   
                    break;
                    case "lvValidityDate":
                        if(objPropBool){
                            jQuery("#lv_expiration_date").show();
                            isQuestion = true;
                        }else{
                            jQuery("#lv_gender_natural").show();
                            isQuestion = true;
                        }   
                    break;
                    case "lvGenderNatural":
                        jQuery("#lv_expiration_date").show();
                        isQuestion = true;
                    break;
                    case "passportIssuanceDate":
                        if( compareDateYears( 15 ) ){
                            jQuery("#corrections").show();
                            isQuestion = true;
                        }
                    break;
                    case "requiresChangesCorrections":
                        if(objPropBool){
                            jQuery("#name_error").show();
                            isQuestion = true;
                        }
                    break;

                    case "nameChangeErrorCorrection":
                        var checkboxWrap = responseObj.siblings("input[type='checkbox']").andSelf(),
                            nameChange = checkboxWrap.filter("input[name='name_change']"),
                            errorCorrection = checkboxWrap.filter("input[name='correct_error']");

                        //name change only  
                        if(!(errorCorrection.is(":checked")) && nameChange.is(":checked")){
                            jQuery("#name_change_documents").show();
                            //have to set the pwoResponse value here for these checkboxes
                            travelStateGov.passportWizard.pwoResponses["nameChange"] = true;
                            travelStateGov.passportWizard.pwoResponses["correctAnError"] = false;

                            isQuestion = true;

                        //error correction and name change  
                        }else if(errorCorrection.is(":checked") && nameChange.is(":checked")){
                            jQuery("#name_change_documents").show();
                            //have to set the pwoResponse value here for these checkboxes
                            travelStateGov.passportWizard.pwoResponses["nameChange"] = true;
                            travelStateGov.passportWizard.pwoResponses["correctAnError"] = true;

                            isQuestion = true;
                        //error correction only
                        }else if(errorCorrection.is(":checked") && !(nameChange.is(":checked"))){                   
                            travelStateGov.passportWizard.pwoResponses["nameChange"] = false;
                            travelStateGov.passportWizard.pwoResponses["correctAnError"] = true;

                            isQuestion = false;
                        //neither is selected   
                        }else if(!(errorCorrection.is(":checked")) && !(nameChange.is(":checked"))){
                            //could be another question depending on selection
                            isQuestion = true;
                        }

                    break;

                    default: isQuestion = false;
                }
                return isQuestion;
            };
            /*******************************
                utility functions
            *******************************/
            var checkDates = function(strDate1, numYears){
                var currentDate = new Date(),
                    currentDateMidNight = null,
                    comparisonDate = new Date(strDate1);

                //make sure current Date is at midnight
                currentDateMidNight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

                comparisonDate.setFullYear (comparisonDate.getFullYear() + numYears);
                comparisonDate = comparisonDate.getTime();
                currentDateMidNight = currentDateMidNight.getTime();


                if(comparisonDate < currentDateMidNight){
                    return "expired";
                }else if(comparisonDate > currentDateMidNight){
                    return "valid";
                }else if(comparisonDate === currentDateMidNight){
                    return "equalTo";
                }   
            };

            var validateBirthdate = function( strDate ){
                var thisDate = strDate;
                //check first if validate
                if(!travelStateGov.globalfx.isDate(thisDate)){
                    return false;
                }
                //make sure birthdate is not a future date
                if(travelStateGov.globalfx.dateCompare(thisDate) === -1){
                    return false;
                }
                return true;
            };
            var validateIssuanceDate = function( strDate ){
                var thisDate = strDate;
                var birthdate = travelStateGov.passportWizard.pwoResponses.dateOfBirth;
                //check first if validate
                if(!travelStateGov.globalfx.isDate(thisDate)){
                    return false;
                }
                //make sure issuance date is not a future date
                if(travelStateGov.globalfx.dateCompare(thisDate) === -1){
                    return false;
                }
                //make sure issuance date is after birthdate
                if(travelStateGov.globalfx.dateCompare(thisDate, birthdate) === 1){
                    return false;
                }
                return true;
            };
            var validateExpirationDate = function( strDate ){
                var thisDate = strDate;
                var birthdate = travelStateGov.passportWizard.pwoResponses.dateOfBirth;
                //check first if validate
                if(!travelStateGov.globalfx.isDate(thisDate)){
                    return false;
                }
                //make sure expiration date is newer than birthdate
                if(travelStateGov.globalfx.dateCompare(thisDate, birthdate) === 1){
                    return false;
                }
                return true;
            };

            var getAge = function(strDate1, strDate2){ //***
                var currentDate = "";
                if(strDate1.length > 0){
                    var objDate = new Date(strDate1);

                    if(strDate2 != undefined){
                        currentDate = new Date(strDate2);
                    }else{
                        currentDate = new Date();
                    }
                    diff = currentDate.getTime() - objDate.getTime();

                    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
                }
            };
            var setAge = function(elem){
                travelStateGov.passportWizard.pwoResponses.personsAge = getAge(travelStateGov.passportWizard.pwoResponses.dateOfBirth); 
            };
            var setPassportAge = function(elem){
                travelStateGov.passportWizard.pwoResponses.passportAge = getAge(travelStateGov.passportWizard.pwoResponses.passportIssuanceDate);   
            };
            var resetPwoResponses = function(){
                jQuery.each(travelStateGov.passportWizard.pwoResponses, function(key, value){
                        //if(typeof(value) === "boolean"){
                        //  travelStateGov.passportWizard.pwoResponses[key] = false;
                        //}else{
                            travelStateGov.passportWizard.pwoResponses[key] = "";
                        //} 
                });
            };
            var completeReset = function(){
                var $thisQuestion = jQuery(".questions").eq(0);
                //reset form and pworesponses
                questionReset($thisQuestion);
                //reset first question because questionReset function considers it the changed question
                $thisQuestion.find("input").filter(":checked").prop("checked", false);
                travelStateGov.passportWizard.pwoResponses.currentResidence = "";
            }
            //always run a completeReset when page loads
            completeReset();

            var isChildPassport = function(){
                //if person is less than 16 when passport was issued then it is a child passport
                var issuanceDate = (travelStateGov.passportWizard.pwoResponses.passportIssuanceDate) ? travelStateGov.passportWizard.pwoResponses.passportIssuanceDate : travelStateGov.passportWizard.pwoResponses.lostStolenIssuanceDate;
                var ageWhenIssued = getAge(travelStateGov.passportWizard.pwoResponses.dateOfBirth, issuanceDate);
                if( ageWhenIssued < 16){
                    return true;
                }else{
                    return false;
                }    
            };
            var setPersonType = function(){
                if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                    travelStateGov.passportWizard.personType = "adult";
                }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                    travelStateGov.passportWizard.personType = "child";
                }else {
                    travelStateGov.passportWizard.personType = "16or17";
                }
            };
            var getMappedOptions = function(eligibilityOutcome){

                switch (eligibilityOutcome){
                    //adult
                    case "new adult passport":
                        return "new_option";
                    break;
                    case "new adult passport with additional proof":
                        return "new_option";
                    break;
                    case "new adult passport and ds-64":
                        return "new_option";
                    break;
                    case "renew adult passport":
                        return "renew_option";
                    break;

                    //child
                    case "new child passport":
                        return "under16_option";
                    break;
                    case "new child passport and ds-64":
                        return "under16_option";
                    break;


                    //16 and 17
                    case "new passport with additional requirements":
                        //16 and 17
                        return "new_option";
                    break;
                    case "renew passport with additional requirements":
                        //16 and 17
                        return "renew_option";
                    break;
                    case "new passport with additional requirements and ds-64":
                        //16 and 17
                        return "new_option";
                    break;

                    //no fee and lv no fee 
                    case "lv - no fee and submit form ds-5504":
                        return "replace_option";
                    break;
                    case "no fee and submit form ds-5504":
                        return "replace_option";
                    break;
                }
            };
            var checkQuestionSetOne = function(){
                var personsAge = jQuery('#persons_age').val();


                if(jQuery('input[name="currently_reside"]').is(":checked") && personsAge.length > 0){
                    return true;
                }else{
                    return false;
                }

            };

            var compareDateYears = function(numYears) {
                var issuanceDate = new Date( travelStateGov.passportWizard.pwoResponses.passportIssuanceDate ),
                    now = new Date(),
                    currentYear = now.getFullYear();

                now.setFullYear(currentYear - numYears);
                now.setHours(0,0,0,0);

                return now < issuanceDate;   
            };

            var compareLVIssuanceDateYears = function(numYears) {
                var issuanceLVDate = new Date( travelStateGov.passportWizard.pwoResponses.lvExpirationDate ),
                    now = new Date(),
                    currentYear = now.getFullYear();

                now.setFullYear(currentYear - numYears);
                now.setHours(0,0,0,0);

                return now < issuanceLVDate;   
            };

            var runPassportWizard = function(){
                /*******************************
                    passport wizard logic
                *******************************/
                var qOut = jQuery("#question_asked"),
                    rOut = jQuery("#response_given"),
                    dOut = jQuery("#outcome_display");

                //question set 1
                //Do you currently reside in the U.S.? (property)
                //What is your Date of Birth?   (property)
                //Have you ever had a U.S. passport? (Question - decision)
                if(travelStateGov.passportWizard.pwoResponses.hasHadUsPassport){
                    qOut.append("<p>Have you ever had a U.S. passport?</p>");
                    rOut.append("<p>Yes - I have had a U.S. passport</p>");
                    //question 2
                    //Do you still have the passport in your possession? (Question - decision)
                    if(travelStateGov.passportWizard.pwoResponses.stillHavePassport){
                        qOut.append("<p>Do you still have the passport in your possession?</p>");
                        rOut.append("<p>Yes - I am in possession of my passport</p>");
                        if(travelStateGov.passportWizard.pwoResponses.replacingLimitedValidityPassport === false){
                            qOut.append("<p>Are you replacing a \"Limited Validity\" Passport?</p>");
                            rOut.append("<p>No - I am not replacing a \"Limited Validity\" Passport</p>");
                            //todo: dates need to be refactored to be more granular
                            if( compareDateYears( 15 ) ) { // if now is less than or equal to 15 years. See getAge()
                                //Is passport less than fifteen years old?
                                qOut.append('<p>Is passport less than fifteen years old?</p>');
                                rOut.append("<p>Passport is "+travelStateGov.passportWizard.pwoResponses.passportAge+" years old</p>");
                                if(travelStateGov.passportWizard.pwoResponses.requiresChangesCorrections){
                                    //question 4
                                    //Do you require an changes or corrections to what is currently printed on your passport?
                                    qOut.append('<p>Do you require an changes or corrections to what is currently printed on your passport?</p>');
                                    rOut.append("<p>Yes - I need to have a name change or correction made</p>");

                                    if((travelStateGov.passportWizard.pwoResponses.nameChange && travelStateGov.passportWizard.pwoResponses.correctAnError) || travelStateGov.passportWizard.pwoResponses.nameChange){
                                        qOut.append('<p>Correct an Error and Name Change or Name Change only</p>');
                                        rOut.append("<p>Name Change = "+travelStateGov.passportWizard.pwoResponses.nameChange+" and Error Correction = "+travelStateGov.passportWizard.pwoResponses.correctAnError+"</p>");

                                        if(travelStateGov.passportWizard.pwoResponses.nameChangeLegalDocument){
                                            qOut.append('<p>Do you have an original or certified copy of your marriage certificate or the government-issued document demonstrating your legal name change under federal or state law?</p>');
                                            rOut.append("<p>Yes - I do have the legal documents</p>");
                                            var nc_oneYear = checkDates(travelStateGov.passportWizard.pwoResponses.passportIssuanceDate, 1);
                                            if(nc_oneYear === "valid" || nc_oneYear === "equalTo"){
                                                dOut.append("<p>No Fee and submit form DS-5504</p>");
                                                return "No Fee and submit form DS-5504";
                                            }else{
                                                if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                                    if(isChildPassport()) {

                                                        if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                            dOut.append("<p>New Adult Passport</p>");
                                                            return "New Adult Passport";

                                                        }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                            dOut.append("<p>New Child Passport</p>");
                                                            return "New Child Passport";
                                                        }
                                                        else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                            dOut.append("<p>New Passport with additional requirements.</p>");
                                                            return "New Passport with additional requirements";
                                                        }

                                                    } else if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                        dOut.append("<p>Renew Adult Passport</p>");
                                                        return "Renew Adult Passport";
                                                    }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                        dOut.append("<p>New Child Passport</p>");
                                                        return "New Child Passport";
                                                    }
                                                    else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                        dOut.append("<p>Renew passport with additional requirements</p>");
                                                        return "Renew passport with additional requirements";
                                                    }
                                                }   
                                            }
                                        }else{
                                            qOut.append("<p>Do you have an original or certified copy of your marriage certificate or the government-issued document demonstrating your legal name change under federal or state law?</p>");
                                            rOut.append("<p>No - I do not have the legal documents</p>");
                                            if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                                if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                    dOut.append("<p>New Adult Passport with additional proof</p>");
                                                    return "New Adult Passport with additional proof";
                                                }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                    dOut.append("<p>New Child Passport</p>");
                                                    return "New Child Passport";
                                                }
                                                else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                    dOut.append("<p>New Passport with additional requirements</p>");
                                                    return "New Passport with additional requirements";
                                                }
                                            }
                                        }   
                                    }else if(travelStateGov.passportWizard.pwoResponses.correctAnError && !(travelStateGov.passportWizard.pwoResponses.nameChange)){
                                        qOut.append('<p>correctAnError Only.</p>');
                                        if(isChildPassport()){
                                            var ce_fiveYear = checkDates(travelStateGov.passportWizard.pwoResponses.passportIssuanceDate, 5);
                                            if(ce_fiveYear === "valid"){
                                                dOut.append("<p>No Fee and submit form DS-5504</p>");
                                                return "No Fee and submit form DS-5504";
                                            }else{
                                                if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                                    if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                        dOut.append("<p>New Child Passport</p>");
                                                        return "New Child Passport";
                                                    }
                                                    else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                        dOut.append("<p>Renew Passport with additional requirements.</p>");
                                                        return "Renew Passport with additional requirements";
                                                    }
                                                    else if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                        dOut.append("<p>Renew Adult Passport</p>");
                                                        return "Renew Adult Passport";  
                                                    }
                                                }       
                                            }
                                        }else{
                                            var ce_tenYear = checkDates(travelStateGov.passportWizard.pwoResponses.passportIssuanceDate, 10);
                                            if(ce_tenYear === "valid"){
                                                dOut.append("<p>No Fee and submit form DS-5504</p>");
                                                return "No Fee and submit form DS-5504";
                                            }else{
                                                if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                                    if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                        dOut.append("<p>New Child Passport</p>");
                                                        return "New Child Passport";
                                                    }
                                                    else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                        dOut.append("<p>Renew Passport with additional requirements.</p>");
                                                        return "Renew Passport with additional requirements";
                                                    }
                                                    else if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                        dOut.append("<p>Renew Adult Passport</p>");
                                                        return "Renew Adult Passport";  
                                                    }
                                                }   
                                            }
                                        }   
                                    }
                                }else{
                                    qOut.append("<p>Do you require an changes or corrections to what is currently printed on your passport?</p>");
                                    rOut.append("<p>I do not require changes or corrections</p>");  
                                    //no corrections
                                    if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){

                                        if(isChildPassport()) {

                                            if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                dOut.append("<p>New Adult Passport</p>");
                                                return "New Adult Passport";

                                            }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                dOut.append("<p>New Child Passport</p>");
                                                return "New Child Passport";
                                            }
                                            else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                dOut.append("<p>New Passport with additional requirements.</p>");
                                                return "New Passport with additional requirements";
                                            }

                                        } else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                            dOut.append("<p>New Child Passport</p>");
                                            return "New Child Passport";
                                        }
                                        else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                            dOut.append("<p>Renew Passport with additional requirements.</p>");
                                            return "Renew Passport with additional requirements";
                                        }
                                        else if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                            dOut.append("<p>Renew Adult Passport</p>");
                                            return "Renew Adult Passport";  
                                        }
                                    }   
                                }
                            } else if( !compareDateYears( 15 ) ) {
                                //Is passport greater than or equal to fifteen years old
                                if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                    if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                        dOut.append("<p>New Adult Passport</p>");
                                        return "New Adult Passport";

                                    }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                        dOut.append("<p>New Child Passport</p>");
                                        return "New Child Passport";
                                    }
                                    else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                        dOut.append("<p>New Passport with additional requirements.</p>");
                                        return "New Passport with additional requirements";
                                    }
                                }
                            } // Updated Passport Logic for Limited Validity Passports
                        }else if(travelStateGov.passportWizard.pwoResponses.replacingLimitedValidityPassport === true){
                            //LV Passport is domestic
                            if(travelStateGov.passportWizard.pwoResponses.lvDomesticOverseas === true){ 
                                //LV Passport has a 1 year or less validity
                                if(travelStateGov.passportWizard.pwoResponses.lvValidityDate === true){                                        
                                    //issued less than one year
                                    var lv_oneYear = checkDates(travelStateGov.passportWizard.pwoResponses.lvExpirationDate, 1);
                                    if( lv_oneYear === "valid" || lv_oneYear === "equalTo"){
                                        dOut.append("<p>LV - No Fee and submit form DS-5504</p>");
                                        return "LV - No Fee and submit form DS-5504";
                                    }else{
                                        //beyond one year expired
                                        if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                            if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                dOut.append("<p>New Adult Passport</p>");
                                                return "New Adult Passport";
                                            }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                dOut.append("<p>New Child Passport</p>");
                                                return "New Child Passport";
                                            }
                                            else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                dOut.append("<p>New Passport with additional requirements</p>");
                                                return "New Passport with additional requirements";
                                            }
                                        }   
                                    }
                                }else{ 
                                //LV Passport is over 1 year validity
                                    // Limitation based on gender transition or naturalization
                                    if(travelStateGov.passportWizard.pwoResponses.lvGenderNatural === true){
                                        //issued less than two years
                                        var lv_twoYear = checkDates(travelStateGov.passportWizard.pwoResponses.lvExpirationDate, 2);
                                        if( lv_twoYear === "valid" || lv_twoYear === "equalTo"){
                                            dOut.append("<p>LV - No Fee and submit form DS-5504</p>");
                                            return "LV - No Fee and submit form DS-5504";
                                        }else{
                                            //beyond two years issued
                                            if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                                if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                    dOut.append("<p>New Adult Passport</p>");
                                                    return "New Adult Passport";
                                                }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                    dOut.append("<p>New Child Passport</p>");
                                                    return "New Child Passport";
                                                }
                                                else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                    dOut.append("<p>New Passport with additional requirements</p>");
                                                    return "New Passport with additional requirements";
                                                }
                                            }   
                                        }
                                    }else{ 
                                    // No limitation based on gender transition or naturalization
                                        if( compareLVIssuanceDateYears( 15 ) ){
                                            //issued less than to 15 years
                                            if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                                if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                    dOut.append("<p>Renew Adult Passport</p>");
                                                    return "Renew Adult Passport";
                                                }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                    dOut.append("<p>New Child Passport</p>");
                                                    return "New Child Passport";
                                                }
                                                else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                    dOut.append("<p>Renew Passport with additional requirements</p>");
                                                    return "Renew Passport with additional requirements";
                                                }
                                            }   
                                        }else{
                                            //beyond 15 years issued
                                            if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                                if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                    dOut.append("<p>New Adult Passport</p>");
                                                    return "New Adult Passport";
                                                }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                    dOut.append("<p>New Child Passport</p>");
                                                    return "New Child Passport";
                                                }
                                                else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                    dOut.append("<p>New Passport with additional requirements</p>");
                                                    return "New Passport with additional requirements";
                                                }
                                            }   
                                        }
                                    }
                                }
                            }else{ 
                            //LV Passport is Overseas 
                                //issued less than or equal to one year
                                var lv_oneYear = checkDates(travelStateGov.passportWizard.pwoResponses.lvExpirationDate, 1);
                                if( lv_oneYear === "valid" || lv_oneYear === "equalTo"){
                                    dOut.append("<p>LV - No Fee and submit form DS-5504</p>");
                                    return "LV - No Fee and submit form DS-5504";
                                }else if( compareLVIssuanceDateYears( 15 ) ){
                                    //issued less than to 15 years
                                    if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                        if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                            dOut.append("<p>Renew Adult Passport</p>");
                                            return "Renew Adult Passport";
                                        }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                            dOut.append("<p>New Child Passport</p>");
                                            return "New Child Passport";
                                        }
                                        else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                            dOut.append("<p>Renew Passport with additional requirements</p>");
                                            return "Renew Passport with additional requirements";
                                        }
                                    }   
                                }else{
                                    //beyond 15 years issued
                                    if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                        if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                            dOut.append("<p>New Adult Passport</p>");
                                            return "New Adult Passport";
                                        }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                            dOut.append("<p>New Child Passport</p>");
                                            return "New Child Passport";
                                        }
                                        else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                            dOut.append("<p>New Passport with additional requirements</p>");
                                            return "New Passport with additional requirements";
                                        }
                                    }   
                                }
                            }
                        }               
                    }else{
                        qOut.append("<p>Do you still have the passport in your possession?</p>");
                        rOut.append("<p>No - I am not in possession of my passport</p>");
                        if(travelStateGov.passportWizard.pwoResponses.knowIssuanceDate){
                            qOut.append("<p>Do you know the issuance date of your passport?</p>");
                            rOut.append("<p>Yes - I know my issuance date.</p>");
                            if(travelStateGov.passportWizard.pwoResponses.reportedToPassportServices){
                                qOut.append("<p>Have you reported your passport losts or stolen to Passport Services?</p>");
                                rOut.append("<p>Yes - I have reported my passport lost or stolen.</p>");
                                if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                    if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                        dOut.append("<p>New Adult Passport</p>");
                                        return "New Adult Passport";

                                    }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                        dOut.append("<p>New Child Passport</p>");
                                        return "New Child Passport";
                                    }
                                    else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                        dOut.append("<p>New Passport with additional requirements.</p>");
                                        return "New Passport with additional requirements";
                                    }
                                }
                            }else{
                                qOut.append("<p>Have you reported your passport losts or stolen to Passport Services?</p>");
                                rOut.append("<p>No - I have not reported my passport lost or stolen.</p>");
                                //has not been reported                     
                                if(isChildPassport()){
                                    var ls_fiveYear = checkDates(travelStateGov.passportWizard.pwoResponses.lostStolenIssuanceDate, 5);
                                    if(ls_fiveYear === "valid"){
                                        if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                            if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                dOut.append("<p>New Adult Passport</p>");
                                                return "New Adult Passport and DS-64";

                                            }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                dOut.append("<p>New Child Passport</p>");
                                                return "New Child Passport and DS-64";
                                            }
                                            else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                dOut.append("<p>New Passport with additional requirements.</p>");
                                                return "New Passport with additional requirements and DS-64";
                                            }
                                        }
                                    }else if(ls_fiveYear === "expired" || ls_fiveYear === "equalTo"){
                                        if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                            if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                dOut.append("<p>New Adult Passport</p>");
                                                return "New Adult Passport";

                                            }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                dOut.append("<p>New Child Passport</p>");
                                                return "New Child Passport";
                                            }
                                            else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                dOut.append("<p>New Passport with additional requirements.</p>");
                                                return "New Passport with additional requirements";
                                            }
                                        }
                                    }
                                }else{
                                    var ls_tenYear = checkDates(travelStateGov.passportWizard.pwoResponses.lostStolenIssuanceDate, 10);
                                    //adult passport
                                    if(ls_tenYear === "valid"){
                                        if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                            if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                dOut.append("<p>New Adult Passport</p>");
                                                return "New Adult Passport and DS-64";

                                            }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                dOut.append("<p>New Child Passport</p>");
                                                return "New Child Passport and DS-64";
                                            }
                                            else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                                dOut.append("<p>New Passport with additional requirements.</p>");
                                                return "New Passport with additional requirements and DS-64";
                                            }
                                        }

                                    }else if(ls_tenYear === "expired" || ls_tenYear === "equalTo"){
                                        if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                            if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                                dOut.append("<p>New Adult Passport</p>");
                                                return "New Adult Passport";

                                            }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                                dOut.append("<p>New Child Passport</p>");
                                                return "New Child Passport";
                                            }
                                            else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || pwoResponses.personsAge === 17){
                                                dOut.append("<p>New Passport with additional requirements.</p>");
                                                return "New Passport with additional requirements";
                                            }
                                        }
                                    }
                                }   
                            }
                        }else{
                            if(travelStateGov.passportWizard.pwoResponses.isStillValid){
                                if(travelStateGov.passportWizard.pwoResponses.reportedToPassportServices){
                                    //reported
                                    if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                        if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                            dOut.append("<p>New Adult Passport</p>");
                                            return "New Adult Passport";

                                        }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                            dOut.append("<p>New Child Passport</p>");
                                            return "New Child Passport";
                                        }
                                        else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                            dOut.append("<p>New Passport with additional requirements.</p>");
                                            return "New Passport with additional requirements";
                                        }
                                    }
                                }else{
                                    //not reported
                                    if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                        if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                            dOut.append("<p>New Adult Passport</p>");
                                            return "New Adult Passport and DS-64";

                                        }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                            dOut.append("<p>New Child Passport</p>");
                                            return "New Child Passport and DS-64";
                                        }
                                        else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                            dOut.append("<p>New Passport with additional requirements.</p>");
                                            return "New Passport with additional requirements and DS-64";
                                        }
                                    }
                                }
                            }else{
                                //expired
                                if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                                    if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                                        dOut.append("<p>New Adult Passport</p>");
                                        return "New Adult Passport";

                                    }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                                        dOut.append("<p>New Child Passport</p>");
                                        return "New Child Passport";
                                    }
                                    else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                                        dOut.append("<p>New Passport with additional requirements.</p>");
                                        return "New Passport with additional requirements";
                                    }
                                }
                            }
                        }
                    }

                }else{
                    qOut.append("<p>Have you ever had a U.S. passport?</p>");
                    rOut.append("<p>No</p>");
                    //display results based on age
                    if(travelStateGov.passportWizard.pwoResponses.personsAge.toString.length > 0){
                        if(travelStateGov.passportWizard.pwoResponses.personsAge >= 18){
                            dOut.append("<p>New Adult Passport</p>");
                            return "New Adult Passport";

                        }else if(travelStateGov.passportWizard.pwoResponses.personsAge < 16){
                            dOut.append("<p>New Child Passport</p>");
                            return "New Child Passport";
                        }
                        else if(travelStateGov.passportWizard.pwoResponses.personsAge === 16 || travelStateGov.passportWizard.pwoResponses.personsAge === 17){
                            dOut.append("<p>New Passport with additional requirements.</p>");
                            return "New Passport with additional requirements";
                        }
                    }   
                }
            };//end of runPassportWizard

        //2db functions
            var get2dbValue = function(value) {
                if(typeof value === "boolean") {
                    if(value){
                        return "Y";
                    }else{
                        return "N";
                    }
                }else if(typeof value === "string") {
                    return value;
                }else if( value === undefined ) {
                    return "";
                }
            };
            var getAppOrigin = function(value) {
                if(value.length > 0){
                    if(value === "unitedstates"){
                        return "D";
                    }else{
                        return "I";
                    }
                }else{
                    return value;
                }
            };
            var getPpt2dbString = function() {
                var ppt_2db = "";
                /*
                "?HasPPT=" + get2dbValue(travelStateGov.passportWizard.pwoResponses.hasHadUsPassport) +
                    "&PPTDOI=" + get2dbValue(travelStateGov.passportWizard.pwoResponses.passportIssuanceDate) +
                    "&NameChg=" + get2dbValue(travelStateGov.passportWizard.pwoResponses.nameChange) +
                    "&SuppDoc=" + get2dbValue(travelStateGov.passportWizard.pwoResponses.nameChangeLegalDocument) +
                    "&DOB=" + get2dbValue(travelStateGov.passportWizard.pwoResponses.dateOfBirth) +
                    "&BothParents=" +
                    "&NewPPT=" + get2dbValue(travelStateGov.passportWizard.pwoResponses.passportType) +
                    "&AppOrigin=" + getAppOrigin(travelStateGov.passportWizard.pwoResponses.currentResidence) +
                    "&ProcMethod=" + get2dbValue(travelStateGov.passportWizard.pwoResponses.processMethod) +
                    "&PPTLoc=" + get2dbValue(travelStateGov.passportWizard.pwoResponses.agencyCode) +
                    "&FileSearch=" +
                    "&LimVal=" + get2dbValue(travelStateGov.passportWizard.pwoResponses.replacingLimitedValidityPassport) +
                    "&DelMeth=" + get2dbValue(travelStateGov.passportWizard.pwoResponses.deliveryMethod);
                    */
                return ppt_2db; 
            };

            //set click handler on ppt to 2db links to creat query string
            /* jQuery(".form_list .html a", "#passport_wizard").click(function(e){
                var urlRoot = "https://pptform.state.gov/";
                jQuery(this).prop("href", urlRoot + getPpt2dbString());
                return true;
            });*/

            jQuery(document).ready(function() {
                jQuery("input[name='currently_reside']").change(function() {

                    var attention = jQuery("#reside_us").find(".resideOtherAlert"),
                        ds82ByMail = jQuery("#ds82-by-mail"),
                        outSideUsRenew = jQuery("#outside-us-renew"),
                        ds82ByMailSummary = jQuery("#ds82-by-mail-summary");

                    if(jQuery(this).val() === "outside_us_canada"){
                        attention.show();
                        outSideUsRenew.show();
                        ds82ByMailSummary.hide();
                        ds82ByMail.text("Passport Renewal");
                    } else {
                        attention.hide();
                        outSideUsRenew.hide();
                        ds82ByMailSummary.show();
                        ds82ByMail.text("U.S. Passport Renewal for Eligible Individuals");
                    };
                });        
            });
        }
    });

}(jQuery, window, document));
;(function($, window, document, undefined) {

    $(document).ready(function() {
        
        if( $(".passport-wizard").length === 1 && $("body.cq-wcm-edit").length < 1 ) {
            var stepOptions = jQuery('#step_options'),
                stepType = jQuery('#step_type'),
                stepRenew = jQuery('#step_renew'),
                stepReplace = jQuery('#step_replace'),
                stepProcess = jQuery('#step_processing'),
                stepCostSummary = jQuery('#step_cost_summary'),

                sectionOptions = jQuery('#passport_options'),
                sectionType = jQuery('#passport_type'),
                sectionProcess = jQuery('#processing_method'),
                sectionRenewCurrent = jQuery('#section_renew_current'),
                sectionRenewType = jQuery('#section_renew_type'),
                sectionRenewBookOrCard = jQuery('#section_renew_type_bc'),
                sectionRenewAddbook = jQuery('#section_renew_addbook'),
                sectionRenewAddcard = jQuery('#section_renew_addcard'),
                sectionAll = jQuery('#passport_options,#passport_type,#processing_method,#section_renew_current,#section_renew_type,#section_renew_addbook,#section_renew_addcard'),

                sDText = jQuery('.sDText'),
                sDTextCardOnly = jQuery('.sDTextCardOnly'),
                areaDelivery = jQuery('#delivery_method'),
                areaAgency = jQuery('#agency_processing'),
                areaDeliveryTotal = jQuery('tr.delivery'),
                areaOverNight = jQuery('.overnight_delivery'),

                headerOptions = jQuery('#header_option'),
                headerOptionNew = jQuery('#header_option_new'),
                headerOptionRenew = jQuery('#header_option_renew'),
                headerOptionUnder16 = jQuery('#header_option_under16'),
                headerOptionOver16 = jQuery('#header_option_over16'),
                headerOptionReplace = jQuery('#header_option_replace'),
                headerOptionAll = jQuery('#header_option_new,#header_option_renew,#header_option_under16,#header_option_over16,#header_option_replace'),

                headerType = jQuery('#header_passtype'),
                headerTypeBook = jQuery('#header_passtype_book'),
                headerTypeCard = jQuery('#header_passtype_card'),
                headerTypeBookCard = jQuery('#header_passtype_book_card'),
                headerTypeAll = jQuery('#header_passtype,#header_passtype_book,#header_passtype_card,#header_passtype_book_card'),

                headerProcess = jQuery('#header_processing'),
                headerProcessStandard = jQuery('#header_standard'),
                headerProcessExp = jQuery('#header_exp'),
                headerProcessAgency = jQuery('#header_exp_agency'),
                headerProcessOverseas = jQuery('#header_overseas_standard'), 
                headerProcessAll = jQuery('#header_standard,#header_exp,#header_exp_agency,#header_exp_agency,#header_overseas_standard'),

                costOver16 = jQuery('#cost_over16'),
                costUnder16 = jQuery('#cost_under16'),
                costRenew = jQuery('#cost_renew'),
                costAll = jQuery('#cost_under16,#cost_over16,#cost_renew'),

                noteCardDelivery = jQuery('#note_card_delivery'),

                selectedAgency = jQuery('.display_selected_agency'),
                appointmentDisplay = jQuery('.appointment_display'),

                // summary tab hide/shows
                summaryTotals = jQuery('.summary .summary_state_total,.summary .delivery,.summary .total'),
                summaryDelivery = jQuery('.summary .delivery'),
                summaryAgency = jQuery('.summary_agency_total');

            // hide on startup
                jQuery('.acceptance_fee_summary,.acceptance_fee_summary_rail,#agency_processing,#delivery_method').hide();
                stepType.hide();
                stepReplace.hide();
                stepRenew.hide();
                stepProcess.hide();
                stepCostSummary.hide();
                selectedAgency.hide();
                sectionRenewType.hide();
                sectionRenewBookOrCard.hide();
                sectionRenewAddbook.hide();
                sectionRenewAddcard.hide();
                noteCardDelivery.hide();
                jQuery('#step_renew .button_section').hide();
                jQuery('#header_passtype_replace_edit').hide();
                jQuery('.book_replace,.card_replace,.book_card_replace,.standard_processing_ca,.exp_processing_ca,.standard_delivery_ca').hide();
                jQuery('.location_agency_outcome,.location_facility_outcome,.location_embassy_outcome').hide();
                summaryAgency.hide();
                jQuery('.button_section .btn.calculate a').addClass('disabled');

            // NEW
                jQuery('.agency_fee,.costs_total_row .helper_text_agency').hide();

            // reset on load
                jQuery(window).load(function () {
                    jQuery('#cost_calc input:checkbox, #cost_calc input:radio').removeAttr('checked').removeAttr('selected');
                    travelStateGov.passportWizard.pwoResponses.passportType = "";
                    travelStateGov.passportWizard.pwoResponses.processMethod = "";
                    travelStateGov.passportWizard.pwoResponses.agencyCode = "";
                    travelStateGov.passportWizard.pwoResponses.deliveryMethod = "";
                });

                var acceptanceCharge = function (){
                    return jQuery('#exp_agency_processing').is(':checked');
                };

            // radio button / edit click handlers

                // options radio buttons
                jQuery('#passport_options input').click(function() {
                    stepOptions.hide();
                    stepType.show();
                    sectionType.show();
                });
                jQuery('#new_option').click(function() {
                    costAll.hide(); 
                    costOver16.show();
                });
                jQuery('#under16_option').click(function() {
                    costAll.hide(); 
                    costUnder16.show();
                });

                // passport type radio button functions
                
                jQuery.fn.passportType = function() {
                     headerTypeAll.addClass('unselected showit').removeClass('selected'); // remove selected
                     headerType.addClass('hideit'); // hide initial header
                     sectionType.hide();
                     stepProcess.show();
                     $("#calculatecosts").attr("href", "#");

                     sDText.show();
                     sDTextCardOnly.hide();
                     areaOverNight.show();

                     sectionProcess.show();
                     noteCardDelivery.hide();
                     if( travelStateGov.passportWizard.pwoResponses.currentResidence === "canada" ) {
                         headerProcessStandard.addClass('selected').removeClass('unselected');
                         jQuery('#standard_processing_ca').trigger('click');
                         jQuery('#standard_delivery_ca').trigger('click');
                         areaOverNight.hide();
                     }
                     if( travelStateGov.passportWizard.pwoResponses.currentResidence === "outside_us_canada" ) {
                         headerProcessStandard.addClass('selected').removeClass('unselected');
                         jQuery('#overseas_processing_input').trigger('click');
                         jQuery('#overseas_delivery').trigger('click');
                         areaOverNight.hide();
                         jQuery('.button_section .btn.calculate a').removeClass('disabled'); 
                     }
                };
                jQuery.fn.bookType = function() {
                    jQuery('.type_label,.passport_type').html('Passport Book');
                    jQuery('.passport_submit_type').html('Passport Book');
                    jQuery('.type_total').html( $("#book_type").val() );
                    headerTypeBook.addClass('selected').removeClass('unselected');
                    jQuery('#book_type').trigger('click');
                    jQuery('span.edit_btn.type').focus();
                    }; 
                jQuery.fn.cardType = function() {
                    jQuery('.type_label,.passport_type').html('Passport Card');
                    jQuery('.passport_submit_type').html('Passport Card');
                    jQuery('.type_total').html( $("#card_type").val() );
                    headerTypeCard.addClass('selected').removeClass('unselected');
                    areaOverNight.hide(); // no overnight for cards
                    sDText.hide();
                    sDTextCardOnly.show();
                    jQuery('#card_type').trigger('click');
                    if( travelStateGov.passportWizard.pwoResponses.currentResidence === "unitedstates" ) {
                        jQuery('#standard_delivery').trigger('click');
                        jQuery('.button_section .btn.calculate a').addClass('disabled');
                    }
                    if( travelStateGov.passportWizard.pwoResponses.currentResidence === "canada" ) {
                        jQuery('#standard_delivery_ca').trigger('click');
                        jQuery('#standard_processing_ca').trigger('click');
                    }}; 
                jQuery.fn.bookCardType = function() {
                    var returnDocument = jQuery('#option_have_card').is(":checked") ? 'Passport Card' : 'Passport Book' ;

                    jQuery('.type_label,.passport_type').html('Passport Book and Passport Card');
                    jQuery('.passport_submit_type').html(returnDocument);
                    jQuery('.type_total').html( $("#book_card_type").val() );
                    headerTypeBookCard.addClass('selected').removeClass('unselected');
                    noteCardDelivery.show();
                    jQuery('#book_card_type').trigger('click');
                    if( travelStateGov.passportWizard.pwoResponses.currentResidence === "outside_us_canada" ) {
                        jQuery('#overseas_delivery').trigger('click');
                        areaOverNight.hide();
                    }
                }; 
                jQuery.fn.bookReplace = function() {                    
                    jQuery('.type_label,.passport_type').html('Passport Book');
                    jQuery('.type_total').html( $("#book_replace").val() );
                    headerTypeBook.addClass('selected').removeClass('unselected');
                    };  
                jQuery.fn.bookUnder16Type = function() {
                    jQuery('.type_label,.passport_type').html('Passport Book');
                    jQuery('.type_total').html( $("#book_under16_type").val() );
                    headerTypeBook.addClass('selected').removeClass('unselected');
                    };  
                jQuery.fn.cardUnder16Type = function() {
                    jQuery('.type_label,.passport_type').html('Passport Card');
                    jQuery('.type_total').html( $("#card_under16_type").val() );
                    headerTypeCard.addClass('selected').removeClass('unselected');
                    areaOverNight.hide(); // no overnight for cards
                    if( travelStateGov.passportWizard.pwoResponses.currentResidence === "unitedstates" ) {
                        jQuery('#standard_delivery').trigger('click');
                        jQuery('.button_section .btn.calculate a').addClass('disabled');
                    }
                    if( travelStateGov.passportWizard.pwoResponses.currentResidence === "canada" ) {
                        jQuery('#standard_delivery_ca').trigger('click');
                    }};   
                jQuery.fn.bookCardUnder16Type = function() {
                    jQuery('.type_label,.passport_type').html('Passport Book and Passport Card');
                    jQuery('.type_total').html( $("#book_card_under16_type").val() );
                    headerTypeBookCard.addClass('selected').removeClass('unselected');
                    noteCardDelivery.show();
                    if( travelStateGov.passportWizard.pwoResponses.currentResidence === "outside_us_canada" ) {
                        jQuery('#overseas_delivery').trigger('click');
                        areaOverNight.hide();
                    }}; 
                //passport type radio option events 
                jQuery('#passport_type input').keydown(function(e) {
                    if (e.keyCode  === 9){
                     jQuery.fn.passportType();
                     var pass_port_type = jQuery(this).attr("id");
                     switch (pass_port_type){
                        case 'book_type':
                            jQuery.fn.bookType();
                            break;
                        case 'card_type':
                            jQuery.fn.cardType();
                            break;
                        case 'book_card_type':
                            jQuery.fn.bookCardType();  
                            break;
                        case 'book_replace':
                            jQuery.fn.bookReplace();  
                            break;   
                        case 'book_under16_type':
                            jQuery.fn.bookUnder16Type();  
                            break;   
                        case 'card_under16_type':
                            jQuery.fn.cardUnder16Type();  
                            break;       
                        case 'book_card_under16_type':
                            jQuery.fn.bookCardUnder16Type();  
                            break;     
                     }
                     jQuery('.selected span.edit_btn.type a').focus();
                }}); 
                
                var labelID;
                var inputID;
                $('label').mousedown(function(){
                    labelID = $(this).attr('for');
                    $('#'+labelID).trigger('mousedown');
                });
                
                $('input').keydown(function(){
                    inputID = $(this).attr('id');
                    //$('#'+inputID).trigger('mousedown');
                    //console.log(inputID);
                });
                
                jQuery( "#book_type" ).mousedown(function(){
                     jQuery.fn.passportType();
                     jQuery.fn.bookType();
                });
                jQuery('#book_replace').mousedown(function() {
                     jQuery.fn.passportType();
                     jQuery.fn.bookReplace();
                });
                jQuery('#card_type').mousedown(function() {
                     jQuery.fn.passportType();
                     jQuery.fn.cardType();
                });
                jQuery('#book_card_type').mousedown(function() {
                     jQuery.fn.passportType();
                     jQuery.fn.bookCardType();
                    
                });
                jQuery('#book_under16_type').mousedown(function() {
                     $(this).trigger('click');
                     jQuery.fn.passportType();
                     jQuery.fn.bookUnder16Type();
                });
                jQuery('#card_under16_type').mousedown(function() {
                     $(this).trigger('click');
                     jQuery.fn.passportType();
                     jQuery.fn.cardUnder16Type();
                });
                jQuery('#book_card_under16_type').mousedown(function() {
                     $(this).trigger('click');
                     jQuery.fn.passportType();
                     jQuery.fn.bookCardUnder16Type();
                });
                //radio edit buttons
                jQuery('span.edit_btn.type').click(function(e) {
                    //disabling proceeding tabs
                    jQuery("#tab3, #tab4, #tab5").removeClass("selected inactive").addClass("disabled");
                    jQuery('#step_processing input,#step_type input').prop("checked",false);
                    headerTypeAll.removeClass('showit'); // remove selected
                    headerType.removeClass('hideit');
                    headerProcessAll.removeClass('showit');
                    headerProcess.removeClass('hideit');
                    sectionType.show();
                    stepProcess.hide();
                    areaDelivery.hide();
                    stepCostSummary.hide();
                    jQuery('.button_section .btn.calculate a').addClass('disabled');
                    if( travelStateGov.passportWizard.pwoResponses.currentResidence === "canada" ) {
                        jQuery('.button_section .btn.calculate a').removeClass('disabled');
                    }
                    travelStateGov.passportWizard.pwoResponses.passportType = "";
                    travelStateGov.passportWizard.pwoResponses.processMethod = "";
                    travelStateGov.passportWizard.pwoResponses.agencyCode = "";
                    travelStateGov.passportWizard.pwoResponses.deliveryMethod = "";
                    // for agency fee
                    jQuery('.agency_fee,.costs_total_row .helper_text_agency').hide();
                    jQuery('.totals,.acceptance_fee_summary').show();
                    // summary screen
                    summaryTotals.show();
                    summaryDelivery.show();
                    summaryAgency.hide();
                    
                    jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                    jQuery('calculatecosts').focus();
                    $("#calculatecosts").attr("href", "#").attr('tabindex', 1);
                    $( "#calculatecosts" ).focus(); 
                    $("#complete_forms").removeAttr("href");
                    $("#get_a_photo").removeAttr("href");
                    $("#collect_documents").removeAttr("href");
                    e.preventDefault();
                });
                // passport processing radio buttons
                jQuery('#step_processing input:radio').click(function() {
                    // make appointment text on summary screen
                    appointmentDisplay.hide();
                });
                
                //Passport Type Navigation Handler, keyCode 9 = Tab Key
                jQuery('#standard_processing').keydown(function (e) {

                   if (e.keyCode  === 9)
                       $('#standard_delivery').click();
                });
                jQuery('#exp_processing').keydown(function (e) {

                   if (e.keyCode  === 9)
                       $('#standard_delivery').click();
                });
                jQuery('#exp_agency_processing').keydown(function (e) {

                   if (e.keyCode  === 9)
                       $('#standard_delivery').click();
                });
                
                jQuery('#standard_processing').click(function() {
                    jQuery('.processing_label').html('Standard Processing');
                    jQuery('.processing_total').html( $("#standard_processing").val() );
                    jQuery('#delivery_method').show();
                    jQuery('#agency_processing').hide();
                    areaDeliveryTotal.show();
                    headerProcessAll.addClass('unselected').removeClass('selected'); // remove selected
                    headerProcessStandard.addClass('selected').removeClass('unselected');
                    if ( jQuery('#option_correct_card').is(':checked') || jQuery('#card_under16_type').is(':checked') || jQuery('#card_type').is(':checked') ){
                        jQuery('.button_section .btn.calculate a').removeClass('disabled');
                    }
                });
                jQuery('#standard_processing_ca').click(function() {
                    jQuery('.processing_label').html('Overseas Processing');
                    jQuery('.delivery_label').html('Overseas Delivery');
                    jQuery('.processing_total').html( $("#standard_processing_ca").val() );
                    jQuery('#agency_processing').hide();
                    jQuery('#delivery_method').show();

                    if( jQuery('#new_option').is(':checked') || jQuery("#under16_option").is(':checked') ){
                        jQuery('.agency_fee').show();
                    }

                    areaDeliveryTotal.show();
                    headerProcessAll.addClass('unselected').removeClass('selected'); // remove selected
                    headerProcessStandard.addClass('selected').removeClass('unselected');
                    jQuery('#standard_delivery_ca').prop("checked",true);
                });
                jQuery('#exp_processing').click(function() {
                    jQuery('.processing_label').html('Expedited Processing');
                    jQuery('.processing_total').html( $("#exp_processing").val() );
                    jQuery('#delivery_method').show();
                    jQuery('#agency_processing').hide();
                    areaDeliveryTotal.show();
                    headerProcessAll.addClass('unselected').removeClass('selected'); // remove selected
                    headerProcessExp.addClass('selected').removeClass('unselected');
                    if ( jQuery('#option_correct_card').is(':checked') || jQuery('#card_under16_type').is(':checked') || jQuery('#card_type').is(':checked') ){
                        jQuery('.button_section .btn.calculate a').removeClass('disabled');
                    }
                });
                jQuery('#exp_agency_processing').click(function() {
                    jQuery('.processing_label').html('Expedited at Agency');
                    jQuery('.processing_total').html( $("#exp_agency_processing").val() );
                    areaDelivery.hide();
                    areaAgency.show();
                    areaDeliveryTotal.hide();
                    headerProcessAll.addClass('unselected').removeClass('selected'); // remove selected
                    headerProcessAgency.addClass('selected').removeClass('unselected');
                    // uncheck delievery options and cost number
                    jQuery('#standard_delivery,#overnight_delivery').prop("checked",false);
                    jQuery('.delivery_total').html('0.00');
                    jQuery('.button_section .btn.calculate a').removeClass('disabled');
                    // make appointment text on summary screen
                    appointmentDisplay.show();
                });

                jQuery('#overseas_processing_input').click(function() {
                    jQuery('.processing_label').html('Overseas Processing');
                    jQuery('.processing_total').html( $("#overseas_processing_input").val() );
                    jQuery('#delivery_method').show();
                    jQuery('#agency_processing').hide();
                    headerProcessAll.addClass('unselected').removeClass('selected'); // remove selected
                    headerProcessStandard.addClass('selected').removeClass('unselected');
                });

                jQuery('#standard_delivery').click(function() {
                    jQuery('.delivery_label').html('Standard Delivery');
                    jQuery('.delivery_total').html( $("#standard_delivery").val() );

                });
                jQuery('#overnight_delivery').click(function() {
                    jQuery('.delivery_label').html('Overnight Delivery');
                    jQuery('.delivery_total').html( $("#overnight_delivery").val() );

                });
                jQuery('#overseas_delivery').click(function() {
                    jQuery('.delivery_label').html('Overseas Delivery');
                    jQuery('.delivery_total').html( $("#overseas_delivery").val() );

                    if( jQuery('#new_option').is(':checked') || jQuery("#under16_option").is(':checked') ){
                        jQuery('.agency_fee').show();
                    }
                });
                jQuery('#delivery_method input').click(function() {
                    jQuery('.button_section .btn.calculate a').removeClass('disabled'); 
                });
                jQuery('span.edit_btn.processing').click(function(e) {
                    //disabling proceeding tabs
                    jQuery("#tab3, #tab4, #tab5").removeClass("selected inactive").addClass("disabled");
                    jQuery('#step_processing input').prop("checked",false);
                    headerProcessAll.removeClass('showit');
                    headerProcess.removeClass('hideit');
                    sectionProcess.show();
                    stepCostSummary.hide();
                    areaDelivery.hide();
                    areaAgency.hide();
                    selectedAgency.hide();
                    jQuery('#select_agency option:selected,#standard_delivery option:selected').removeAttr("selected");
                    jQuery('.button_section .btn.calculate a').addClass('disabled');
                    if( travelStateGov.passportWizard.pwoResponses.currentResidence === "canada" ) {
                        jQuery('#standard_delivery_ca').trigger('click');
                    }
                    if( jQuery('#option_correct_card').is(':checked') ){
                        jQuery('#standard_delivery').trigger('click');
                    }
                    travelStateGov.passportWizard.pwoResponses.processMethod = "";
                    travelStateGov.passportWizard.pwoResponses.agencyCode = "";
                    travelStateGov.passportWizard.pwoResponses.deliveryMethod = "";
                    // for agency fee
                    jQuery('.agency_fee,.costs_total_row .helper_text_agency').hide();
                    jQuery('.totals,.acceptance_fee_summary').show();
                    // summary screen
                    summaryTotals.show();
                    summaryDelivery.show();
                    summaryAgency.hide();
                    jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                    jQuery('calculatecosts').focus();
                    $("#calculatecosts").attr("href", "#");
                    $( "#calculatecosts" ).focus(); 
                    $("#complete_forms").removeAttr("href");
                    $("#get_a_photo").removeAttr("href");
                    $("#collect_documents").removeAttr("href");
                    e.preventDefault();
                });

            //  calculate function    
                jQuery('#calculate_costs').click(function(){
                    if(!(jQuery(this).hasClass('disabled'))){

                        // calculate costs from checked radios
                        var total = 0.00;

                        jQuery('input[class=cost]:checked').each(function() {
                            //alert(jQuery(this).val());
                            total += parseFloat(jQuery(this).val());
                        });
                        // if there's a $25 acceptance fee add it to the overall total
                        var acceptanceFee = function (){
                            return jQuery('#new_option').is(':checked') || jQuery('#under16_option').is(':checked');
                        };
                        var acceptanceFeeExp = function (){
                            return jQuery('#exp_agency_processing').is(':checked') && jQuery('#new_option').is(':checked');
                        };
                        var acceptanceFeeExpMinor = function (){
                            return jQuery('#exp_agency_processing').is(':checked') && jQuery('#under16_option').is(':checked');
                        };

                        if( travelStateGov.passportWizard.pwoResponses.currentResidence === "unitedstates" && 
                            acceptanceFee() || acceptanceFeeExp() || acceptanceFeeExpMinor() ){
                            var overallTotal = total + parseFloat( $(".agency_fee_total").text() );
                            jQuery('.acceptance_fee_summary,.acceptance_fee_summary_rail').show();
                        } else if( travelStateGov.passportWizard.pwoResponses.currentResidence !== "unitedstates" &&
                            ( jQuery('#new_option').is(':checked') || jQuery("#under16_option").is(':checked') ) ){
                            total += parseFloat( $(".agency_fee_total").text() );
                            var overallTotal = total;
                            jQuery('.acceptance_fee_summary_rail').show();
                            jQuery('.acceptance_fee_summary').hide();
                            summaryTotals.hide();
                            summaryDelivery.show();
                            summaryAgency.show();
                        } else {
                            var overallTotal = total;
                            jQuery('.acceptance_fee_summary,.acceptance_fee_summary_rail').hide();
                        }  

                        // show totals in the summary divs
                            var totalNum = total.toFixed(2); // add .00 decimal to round numbers
                            var overallTotalNum = overallTotal.toFixed(2); // add .00 decimal to round numbers
                            jQuery('.sub_total').html('$' + totalNum);
                            jQuery('.overallTotal').html('$' + overallTotalNum);

                            sectionProcess.hide();
                            stepCostSummary.show();
                            headerProcessAll.addClass('showit');
                            headerProcess.addClass('hideit');
                            jQuery.scrollTo('#step_cost_summary');
                       
                            // enter root path
                            var agencySelection = jQuery('#select_agency option:selected').val(),
                            agencyRootPath = "/content/travel/resources/database/database.getagencyinfo.html",
                            agencyUrlString = agencyRootPath + "?aid=" + agencySelection;
                            //console.log(agencyUrlString);

                        jQuery.get(agencyUrlString, function(data) {

                            // comment out this line in DAY
                            //var data = '<div id="a01"><h3>Atlanta Passport Agency</h3><p>Building name<br />Street<br />State, Zip</p><p><span class="hours">Hours:</span>0:00 a.m.&ndash;0:00 p.m.<br />M-F excluding Federal holidays</p><p class="announcement">US Passport Card on-site Appointment Required</p></div>';
                            //alert($.trim(data));
                            if($.trim(data) === "Error: Can't Find Data"){
                                var data = '<div id="a01"><h3>No Passport Agency Office location listed</h3></div>';                           
                                jQuery('.display_selected_agency .right_rail_content').html(data);
                                jQuery('.agency_location').html(data);
                            }else{
                                jQuery('.display_selected_agency .right_rail_content').html(data);
                                jQuery('.agency_location').html(data);
                            }});

                        // show agency rail and outcome if a location is selected  
                        var agencySelected = function (){
                            return jQuery('#select_agency option:selected').hasClass('noselection');
                        };
                        if( agencySelected()) {
                            selectedAgency.hide();
                        }
                        else{
                            selectedAgency.show();
                        } 

                        jQuery("#tab1, #tab3, #tab4, #tab5").removeClass("selected disabled").addClass("inactive");
                        
                        // show proper location info outcome
                        if( jQuery('#standard_processing').is(':checked') ){
                            jQuery('.location_facility_outcome').show();
                            jQuery('.location_agency_outcome,.location_embassy_outcome').hide();
                        }
                        if( jQuery('#exp_processing').is(':checked') ){
                            jQuery('.location_facility_outcome').show();
                            jQuery('#location_agency_outcome,#location_embassy_outcome').hide();
                        }
                        if( jQuery('#exp_agency_processing').is(':checked') ){             
                            jQuery('.location_agency_outcome').show();       
                            jQuery('.location_facility_outcome,.location_embassy_outcome').hide();
                        }
                        // for agency fee new
                        if( jQuery('#exp_agency_processing').is(':checked') && jQuery('#new_option').is(':checked') ){            
                            jQuery('.agency_fee,.costs_total_row .helper_text_agency').show();       
                            jQuery('.totals,.acceptance_fee_summary').hide();
                            // summary screen
                            summaryTotals.hide();
                            summaryDelivery.hide();
                            summaryAgency.show();
                        }
                        if( jQuery('#exp_agency_processing').is(':checked') && jQuery('#under16_option').is(':checked') ){            
                            jQuery('.agency_fee,.costs_total_row .helper_text_agency').show();       
                            jQuery('.totals,.acceptance_fee_summary').hide();
                            // summary screen
                            summaryTotals.hide();
                            summaryDelivery.hide();
                            summaryAgency.show();
                        }
                        // for agency fee renew/change           
                        if( jQuery('#exp_agency_processing').is(':checked') && jQuery('#renew_option').is(':checked') || jQuery('#replace_option').is(':checked') ){            
                            jQuery('.costs_total_row .helper_text_agency').show();       
                            jQuery('.agency_fee,.totals,.acceptance_fee_summary,.summary .delivery').hide();
                            // summary screen
                            summaryTotals.show();
                            summaryDelivery.hide();
                            summaryAgency.hide();
                        }

                        if( travelStateGov.passportWizard.pwoResponses.currentResidence === "canada" || travelStateGov.passportWizard.pwoResponses.currentResidence === "outside_us_canada" ){
                            jQuery('.location_embassy_outcome').show();
                            jQuery('.location_agency_outcome,.location_facility_outcome').hide();
                        }
                        if( jQuery('#overseas_processing_input').is(':checked') || jQuery('#standard_processing_ca').is(':checked') ){
                            jQuery('span.edit_btn.processing').hide();
                        }

                        // values from calcualtor to 2db
                        if( jQuery('#book_type').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.passportType = "P";
                        }
                        if( jQuery('#card_type').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.passportType = "C";
                        }
                        if( jQuery('#book_card_type').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.passportType = "B";
                        }
                        if( jQuery('#book_under16_type').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.passportType = "P";
                        }
                        if( jQuery('#card_under16_type').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.passportType = "C";
                        }
                        if( jQuery('#book_card_under16_type').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.passportType = "B";
                        }
                        if( jQuery('#standard_processing').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.processMethod = "S";
                        }
                        if( jQuery('#exp_processing').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.processMethod = "E";
                        }
                        if( jQuery('#exp_agency_processing').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.processMethod = "EA";
                        }
                        if( jQuery('#standard_delivery').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.deliveryMethod = "S";
                        }
                        if( jQuery('#overnight_delivery').is(':checked') ){
                            travelStateGov.passportWizard.pwoResponses.deliveryMethod = "O";
                        }

                        var agencyLocationCode = jQuery('#select_agency option:selected').val();

                        travelStateGov.passportWizard.pwoResponses.agencyCode = agencyLocationCode;

                        if(travelStateGov.passportWizard.pwoResponses.agencyCode === "0"){
                            travelStateGov.passportWizard.pwoResponses.agencyCode = "";
                        }
                    }
                    //console.log("next_to_documents");
                    jQuery('div.btn.next').focus();
                });

                // extra info in summary screen
                jQuery(document).ready(function(){
                    jQuery('.info_modal_link').colorbox({inline:true, width:"50%"});
                    return false;
                });

            // ============== Eligibility Configurations =============== //

                // Results Set 1. new passport options. default calc, needs form ds-11 on summary

                // Results Set 1 + DS64. normal calc +  = lost/stolen needs form ds64 on summary

                // No Fee,(Limited Books) (under 1 year) Form DS-5504. book only, go to processing
                    jQuery('#replace_option').click(function(){
                        jQuery('span.edit_btn.type').hide(); // hide for all renewals
                        if( travelStateGov.passportWizard.pwoResponses.replacingLimitedValidityPassport === true 
                            ) {
                                jQuery('#book_replace').trigger('mousedown');
                                stepRenew.hide();
                                stepType.show();
                                jQuery('.edit_btn_renew').hide();
                            }
                    });

                // No Fee, Form DS-5504 (Name Changes + Data Corrections), Change/Correct Cost Calculator First Tab:
                    jQuery('#replace_option').click(function(){
                        if( travelStateGov.passportWizard.pwoResponses.replacingLimitedValidityPassport === false && 
                            travelStateGov.passportWizard.pwoResponses.requiresChangesCorrections === true
                            ) {
                                stepType.hide();
                                stepReplace.show();
                                jQuery('#header_passtype_replace').show();
                                jQuery('#step_replace .form_content').show();
                                jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                                $("#calculatecosts").attr("href", "#").attr('tabindex', 1);
                                $( "#calculatecosts" ).focus(); 
                            }
                    });             
                    jQuery('#option_correct_book').mousedown(function() {
                        jQuery('#header_passtype_replace').hide();
                        jQuery('#header_passtype_replace_edit').show();
                        stepRenew.hide();
                        stepType.hide();
                        sectionType.hide();
                        jQuery('#step_replace .form_content').hide();
                        stepProcess.show();
                        jQuery('.type_label').html('Correct a Passport Book');
                        jQuery('.type_total').html('0.00');
                        jQuery('#header_passtype_replace_edit h2 em').html('Book');
                    });
                    jQuery('#option_correct_book').keydown(function(e) {
                        if(e.keyCode === 32){ 
                            e.preventDefault();
                            jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                            jQuery('#header_passtype_replace').hide();
                            jQuery('#header_passtype_replace_edit').show();
                            stepRenew.hide();
                            stepType.hide();
                            sectionType.hide();
                            jQuery('#step_replace .form_content').hide();
                            stepProcess.show();
                            jQuery('.type_label').html('Correct a Passport Book');
                            jQuery('.type_total').html('0.00');
                            jQuery('#header_passtype_replace_edit h2 em').html('Book');
                            jQuery('#header_passtype_replace_edit a').focus();
                        }
                    });
                    jQuery('#option_correct_card').mousedown(function() { 
                        jQuery('#header_passtype_replace').hide();
                        jQuery('#header_passtype_replace_edit').show();
                        stepRenew.hide();
                        stepType.hide();
                        sectionType.hide();
                        jQuery('#step_replace .form_content').hide();
                        stepProcess.show();
                        jQuery('.type_label').html('Correct a Passport Card');
                        jQuery('.type_total').html('0.00');
                        jQuery('#header_passtype_replace_edit h2 em').html('Card');
                        jQuery('#standard_delivery').trigger('click');
                        jQuery('.button_section .btn.calculate a').addClass('disabled');
                        areaOverNight.hide();
                    });
                    jQuery('#option_correct_card').keydown(function(e) {
                        if(e.keyCode === 32){  
                            e.preventDefault();
                            jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                            jQuery('#header_passtype_replace').hide();
                            jQuery('#header_passtype_replace_edit').show();
                            stepRenew.hide();
                            stepType.hide();
                            sectionType.hide();
                            jQuery('#step_replace .form_content').hide();
                            stepProcess.show();
                            jQuery('.type_label').html('Correct a Passport Card');
                            jQuery('.type_total').html('0.00');
                            jQuery('#header_passtype_replace_edit h2 em').html('Card');
                            jQuery('#standard_delivery').trigger('click');
                            jQuery('.button_section .btn.calculate a').addClass('disabled');
                            areaOverNight.hide();
                            
                            jQuery('#header_passtype_replace_edit a').focus();
                        }
                    });
                    jQuery('#option_correct_book_card').mousedown(function() { 
                            jQuery('#header_passtype_replace').hide();
                            jQuery('#header_passtype_replace_edit').show();
                            stepRenew.hide();
                            stepType.hide();
                            sectionType.hide();
                            jQuery('#step_replace .form_content').hide();
                            stepProcess.show();
                            noteCardDelivery.show();
                            jQuery('.type_label').html('Correct a Passport Book and Card');
                            jQuery('.type_total').html('0.00');
                            jQuery('#header_passtype_replace_edit h2 em').html('Book &amp; Card');      
                        
                    });
   
                    jQuery('#option_correct_book_card').keydown(function(e) {
                        if(e.keyCode === 32){  
                            e.preventDefault();
                            jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                            jQuery('#header_passtype_replace').hide();
                        
                            jQuery('#header_passtype_replace_edit').show();
                            stepRenew.hide();
                            stepType.hide();
                            sectionType.hide();
                            jQuery('#step_replace .form_content').hide();
                            stepProcess.show();
                            noteCardDelivery.show();
                            jQuery('.type_label').html('Correct a Passport Book and Card');
                            jQuery('.type_total').html('0.00');
                            jQuery('#header_passtype_replace_edit h2 em').html('Book &amp; Card');
                            jQuery('#header_passtype_replace_edit a').focus();
                        }
                    });
                    
                    jQuery('#header_passtype_replace_edit .edit_btn').click(function() {
                        jQuery('#step_replace .form_content').show();
                        jQuery('#option_correct_book,#option_correct_card,#option_correct_book_card,#step_processing input').prop("checked",false);
                        //disabling proceeding tabs
                        jQuery("#tab3, #tab4, #tab5").removeClass("selected inactive").addClass("disabled");
                        headerTypeAll.removeClass('showit'); // remove selected
                        headerType.removeClass('hideit');
                        headerProcessAll.removeClass('showit');
                        headerProcess.removeClass('hideit');
                        sectionProcess.show();
                        stepType.hide();
                        stepProcess.hide();
                        areaDelivery.hide();
                        stepCostSummary.hide();

                        sDText.show();
                        sDTextCardOnly.hide();
                        areaOverNight.show();            

                        noteCardDelivery.hide();
                        jQuery('#section_renew_current').show();
                        jQuery('#section_renew_type,#section_renew_type_bc,#section_renew_addbook,#section_renew_addcard').hide();
                        jQuery('.button_section .btn.calculate a').addClass('disabled');
                        travelStateGov.passportWizard.pwoResponses.passportType = "";
                        travelStateGov.passportWizard.pwoResponses.processMthod = "";
                        travelStateGov.passportWizard.pwoResponses.agencyCode = "";
                        travelStateGov.passportWizard.pwoResponses.deliveryMethod = "";
                        // for agency fee
                        jQuery('.agency_fee,.costs_total_row .helper_text_agency').hide();
                        jQuery('.totals,.acceptance_fee_summary').show(); 
                        jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                    });

                // Results Set 2 (without Limited Books). ds-82
                    jQuery('.edit_btn_renew').hide();

                    jQuery('#renew_option').click(function(){    
                        stepType.hide();
                        stepRenew.show();
                    });

                    jQuery('#renew_option').mousedown(function(){    
                        stepType.hide();
                        stepRenew.show(); 
                    });

                    jQuery('#renew_option').keydown(function(e){  
                        if(e.keyCode === 32){  
                            stepType.hide();
                            stepRenew.show();
                        }
                    });

                    // have BOOK
                    jQuery('#option_have_book').mousedown(function() {
                        jQuery('#section_renew_addbook,#section_renew_type,#section_renew_type_bc').hide();
                        jQuery('#section_renew_addcard').show(); // add a card?
                    });
                    jQuery('#option_have_book').keydown(function(e){
                        if(e.keyCode === 32){
                        // user has pressed space
                            jQuery('#section_renew_addbook,#section_renew_type,#section_renew_type_bc').hide();
                            jQuery('#section_renew_addcard').show(); // add a card?
                        }
                    });
                    // have CARD
                    jQuery('#option_have_card').mousedown(function() {
                        jQuery('#section_renew_addcard,#section_renew_type,#section_renew_type_bc').hide(); // add a book?
                        jQuery('#section_renew_addbook').show();
                    });
                    jQuery('#option_have_card').keydown(function(e) {
                        if(e.keyCode === 32){
                            jQuery('#section_renew_addcard,#section_renew_type,#section_renew_type_bc').hide(); // add a book?
                            jQuery('#section_renew_addbook').show();
                        }
                    });

                    // renew BOOK and CARD
                    jQuery('#option_have_book_card,#option_renew_addbook_yes,#option_renew_addcard_yes').mousedown(function() {
                        jQuery('#book_card_type').trigger('click'); 
                        // user has and chose to renew both
                        jQuery.fn.passportType();
                        jQuery.fn.bookCardType();
                    });
                    jQuery('#option_have_book_card,#option_renew_addbook_yes,#option_renew_addcard_yes').keydown(function(e) { 
                        if(e.keyCode === 32){
                            jQuery('#book_card_type').trigger('click'); 
                            // user has and chose to renew both
                            jQuery.fn.passportType();
                            jQuery.fn.bookCardType();
                            var optionSelection = jQuery(this).attr('id');
                            switch (optionSelection){
                                case 'option_renew_addcard_yes':
                                    jQuery('#edit_btn_renew_both').focus();
                                    break;
                                case 'option_renew_addcard_no':
                                    jQuery('#edit_btn_renew_book').focus();
                                    break;
                            }
                        }
                    });
                    // did not want to add book
                    jQuery('#option_renew_addbook_no,#option_renew_card_bc').mousedown(function() { 
                        jQuery('#card_type').trigger('click');
                     jQuery.fn.passportType();
                     jQuery.fn.cardType();
                    });
                    jQuery('#option_renew_addbook_no,#option_renew_card_bc').keydown(function(e) { 
                        if(e.keyCode === 32){
                            jQuery('#card_type').trigger('click');
                            jQuery.fn.passportType();
                            jQuery.fn.cardType();
                        }
                    });
                    // did not want to add card
                    jQuery('#option_renew_addcard_no,#option_renew_book_bc').mousedown(function() { 
                        jQuery('#book_type').trigger('click');
                        jQuery.fn.passportType();
                        jQuery.fn.bookType();
                    });
                    jQuery('#option_renew_addcard_no,#option_renew_book_bc').keydown(function(e) { 
                        if(e.keyCode === 32){
                            jQuery('#book_type').trigger('click');
                            jQuery.fn.passportType();
                            jQuery.fn.bookType();
                        }
                    });
                    // all renewals
                    jQuery('#option_renew_addbook_yes,#option_renew_addcard_yes,#option_renew_addbook_no,#option_renew_addcard_no,#option_renew_book_bc').mousedown(function() {
                        stepRenew.hide();
                        stepType.show();
                        areaDelivery.hide();
                        if ( travelStateGov.passportWizard.pwoResponses.currentResidence === "canada" ) {
                            jQuery('#standard_processing_ca').trigger('click');
                            jQuery('#standard_delivery_ca').trigger('click');
                            areaDelivery.show();
                        }
                        jQuery('.edit_btn_renew').show();
                    });
                    
                    jQuery('#option_renew_addbook_yes,#option_renew_addcard_yes,#option_renew_addbook_no,#option_renew_addcard_no,#option_renew_book_bc').keydown(function(e) {

                        if(e.keyCode === 32){
                            stepRenew.hide();
                            stepType.show();
                            areaDelivery.hide();
                            if ( travelStateGov.passportWizard.pwoResponses.currentResidence === "canada" ) {
                                jQuery('#standard_processing_ca').trigger('click');
                                jQuery('#standard_delivery_ca').trigger('click');
                                areaDelivery.show();
                            }
                            jQuery('.edit_btn_renew').show();
                            var optionSelection = jQuery(this).attr('id');
                            switch (optionSelection){
                                case 'option_renew_addcard_yes':
                                    jQuery('#edit_btn_renew_both').focus();
                                    break;
                                case 'option_renew_addbook_yes':
                                    jQuery('#edit_btn_renew_both').focus();
                                    break;
                                case 'option_renew_addcard_no':
                                    jQuery('#edit_btn_renew_book').focus();
                                    break;
                                case 'option_renew_addbook_no':
                                    jQuery('#edit_btn_renew_card').focus();
                                    break;
                            }
                            e.preventDefault();
                        }
                    });

                    jQuery('#option_have_book_card,#option_renew_card_bc').mousedown(function() {
                        stepRenew.hide();
                        stepType.show();
                        jQuery('.edit_btn_renew').show();
                    });

                    jQuery('#option_have_book_card,#option_renew_card_bc').keydown(function(e) {
                        if(e.keyCode === 32){
                            stepRenew.hide();
                            stepType.show();
                            jQuery('.edit_btn_renew').show();
                            //alert(jQuery(this).attr('id'));
                            jQuery('#edit_btn_renew_both').focus();
                            e.preventDefault();
                            
                        }
                    });

                    jQuery('span.edit_btn_renew a').click(function(e) {
                        //disabling proceeding tabs
                        jQuery("#tab3, #tab4, #tab5").removeClass("selected inactive").addClass("disabled");
                        jQuery('#step_processing input,#step_renew input').prop("checked",false);
                        headerTypeAll.removeClass('showit'); // remove selected
                        headerType.removeClass('hideit');
                        headerProcessAll.removeClass('showit');
                        headerProcess.removeClass('hideit');
                        stepRenew.show();
                        stepType.hide();
                        stepProcess.hide();
                        areaDelivery.hide();
                        stepCostSummary.hide();
                        jQuery('#section_renew_current').show();
                        jQuery('#section_renew_type,#section_renew_type_bc,#section_renew_addbook,#section_renew_addcard').hide();
                        jQuery('.button_section .btn.calculate a').addClass('disabled');
                        travelStateGov.passportWizard.pwoResponses.passportType = "";
                        travelStateGov.passportWizard.pwoResponses.processMethod = "";
                        travelStateGov.passportWizard.pwoResponses.agencyCode = "";
                        travelStateGov.passportWizard.pwoResponses.deliveryMethod = "";
                        // for agency fee
                        jQuery('.agency_fee,.costs_total_row .helper_text_agency').hide();
                        jQuery('.totals,.acceptance_fee_summary').show();
                        $("#option_have_book").focus(); 
                        jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                        e.preventDefault();
                    });

                // Results Set 2 (with a Limited Book). same renew calc, values auto entered for BOOK. followup checkbox then would you like to add card
                    jQuery('#renew_option').click(function(){
                        jQuery('span.edit_btn.type').hide(); // hide for all renewals
                        if( travelStateGov.passportWizard.pwoResponses.replacingLimitedValidityPassport === true ) {
                            jQuery('#book_type').trigger('click');
                            jQuery.fn.passportType();
                            jQuery.fn.bookType();
                            stepRenew.hide();
                            stepType.show();
                        }
                    });

                // processing & delivery configuration
                jQuery('#new_option,#renew_option,#under16_option,#replace_option').click(function(){
                    var processUSA = jQuery('.standard_processing,.exp_processing,.exp_processing_agency'),
                        processCanada = jQuery('.standard_processing_ca'), // sifter 14314 jQuery('.standard_processing_ca,.exp_processing_ca'),
                        processOther = jQuery('.overseas_processing'),
                        processAll = jQuery('.standard_processing,.exp_processing,.exp_processing_agency,.overseas_processing');
                        processAll.hide();
                        if( travelStateGov.passportWizard.pwoResponses.currentResidence === "unitedstates" ){
                            processUSA.show();
                            processOther.hide();
                        }
                        if( travelStateGov.passportWizard.pwoResponses.currentResidence === "canada" ){
                            processCanada.show();
                            jQuery('.button_section .btn.calculate a').removeClass('disabled');
                        }
                        if( travelStateGov.passportWizard.pwoResponses.currentResidence === "outside_us_canada" ){
                            processOther.show();
                            jQuery('#overseas_processing_input').trigger('click');
                            jQuery('#overseas_delivery').trigger('click');
                        }
                    var deliverUSA = jQuery('.standard_delivery,.overnight_delivery'),
                        deliverCanada = jQuery('.standard_delivery_ca'),
                        deliverOther = jQuery('.overseas_delivery'),
                        deliverAll = jQuery('.standard_delivery,.overnight_delivery,.overseas_delivery');
                        deliverAll.hide();
                        if( travelStateGov.passportWizard.pwoResponses.currentResidence === "unitedstates" ){
                            deliverUSA.show();
                        }
                        if( travelStateGov.passportWizard.pwoResponses.currentResidence === "canada" ){
                            deliverCanada.show();
                            jQuery('.button_section .btn.calculate a').removeClass('disabled');
                        }
                        if( travelStateGov.passportWizard.pwoResponses.currentResidence === "outside_us_canada" ){
                            deliverOther.show();
                        }
                });

            // end eligibility congiguration

                // reset stuff if user goes back
                jQuery('#tab1').click(function() {
                    jQuery('#cost_calc input:checkbox, #cost_calc input:radio').removeAttr('checked').removeAttr('selected');
                    travelStateGov.passportWizard.pwoResponses.passportType = "";
                    travelStateGov.passportWizard.pwoResponses.processMethod = "";
                    travelStateGov.passportWizard.pwoResponses.agencyCode = "";
                    travelStateGov.passportWizard.pwoResponses.deliveryMethod = "";
                    jQuery('.acceptance_fee_summary,.acceptance_fee_summary_rail,#agency_processing,#delivery_method').hide();
                    stepType.hide();
                    stepReplace.hide();
                    stepRenew.hide();
                    stepProcess.hide();
                    stepCostSummary.hide();
                    selectedAgency.hide();
                    sectionProcess.show();
                    sectionRenewType.hide();
                    sectionRenewBookOrCard.hide();
                    sectionRenewAddbook.hide();
                    sectionRenewAddcard.hide();
                    noteCardDelivery.hide();
                    jQuery('#step_renew .button_section').hide();
                    jQuery('#header_passtype_replace_edit').hide();
                    jQuery('.book_replace,.card_replace,.book_card_replace,.standard_processing_ca,.exp_processing_ca,.standard_delivery_ca').hide();
                    jQuery('.location_agency_outcome,.location_facility_outcome,.location_embassy_outcome').hide();

                    jQuery('#step_processing input,#step_type input').prop("checked",false);
                    jQuery('.button_section .btn.calculate a').addClass('disabled');

                    jQuery('#step_processing input').prop("checked",false);
                    headerProcessAll.removeClass('showit');
                    headerProcess.removeClass('hideit');
                    jQuery('.text_add').text('add');
                    jQuery('.button_section .btn.calculate a').addClass('disabled');
                    // for agency fee
                    jQuery('.agency_fee,.costs_total_row .helper_text_agency').hide();
                    jQuery('.totals,.acceptance_fee_summary').show();
                    // summary screen
                    summaryTotals.show();
                    summaryDelivery.show();
                    summaryAgency.hide();
                });
                jQuery('#back_to_eligibility').click(function() {
                    jQuery('.text_add').text('add');
                    sectionRenewType.hide();
                    sectionRenewAddbook.hide();
                    sectionRenewAddcard.hide();
                    sectionRenewBookOrCard.hide();
                    sectionProcess.show();
                    areaDelivery.hide();
                    jQuery('.delivery_label').html('Standard Delivery');
                    jQuery('.button_section .btn.calculate a').addClass('disabled');
                    jQuery('.standard_processing_ca').hide();
                    jQuery('span.edit_btn.processing').show();
                    jQuery('#header_processing').removeClass('hideit');
                    // for agency fee
                    jQuery('.agency_fee,.costs_total_row .helper_text_agency').hide();
                    jQuery('.totals,.acceptance_fee_summary').show();
                    // summary screen
                    summaryTotals.show();
                    summaryDelivery.show();
                    summaryAgency.hide();
                });
                
            if( $(".cost-calculator").length === 1 ) {
                
                $('.process_menu').hide();
                
                //$('#step_eligibility .title_intro_bg').html('');
                
                $('.btn.calculate a.disabled').click(function() {
                    return false;
                });
                
                $('span.edit_btn.type').click(function() {
                    $('#cost_calculator .button_section').show();
                });
                
                $('span.edit_btn.processing').click(function() {
                    $('#cost_calculator .button_section').show();
                    $('#step_renew .simple').hide();
                });

                $('#cost_summary').after('<div class="button_section reset"><div class="blue"><div class="btn next"><a title="Start Over" href="#" tabindex="1">Start Over</a></div></div>');

                $('#cost_calculator .button_section.reset a').click(function() {
                    $('window').scrollTop();
                    location.reload();
                });

                // hide the wizard buttons
                $('#cost_calculator .button_section').addClass('simple');
                $('#cost_calculator .button_section.reset.simple').removeClass('simple');
                $('#step_cost_summary .button_section.simple').hide();
                $('#calculate_costs').click(function(){
                    $('#step_cost_summary .button_section.simple').hide();
                    
                 
                });
            }
        }
    });

}(jQuery, window, document));
;(function($, window, document, undefined) {

    $(document).ready(function() {
        
        if( $(".passport-wizard").length === 1 && $("body.cq-wcm-edit").length < 1 ) {
            //create methods in global area
            window.travelStateGov = window.travelStateGov || {};
            travelStateGov.passportWizard = travelStateGov.passportWizard || {};

            travelStateGov.passportWizard.backBtnPage = "";
            travelStateGov.passportWizard.currentPage = "";
            travelStateGov.passportWizard.setBackBtnPage = function(page){
                this.backBtnPage = page;
            };
            travelStateGov.passportWizard.getlastPage = function(){
                return this.backBtnPage;
            };
            travelStateGov.passportWizard.setCurrentPage = function(page){
                this.currentPage = page;
            };
            travelStateGov.passportWizard.getCurrentPage = function(){
                return this.currentPage;
            };  

            /*******************************
                initialize wizard state so that
                first tab is open and eligibility
                questions
            *******************************/
            jQuery(".outcomes").hide();
            jQuery("#step_eligibility").show();
            
            $("#calculatecosts").removeAttr("href");
            $("#complete_forms").removeAttr("href");
            $("#get_a_photo").removeAttr("href");
            $("#collect_documents").removeAttr("href");

            //at this point the code to go from eligibility is in the passport wizard main logic
            //possibly needs to be refactored so this is the controller

            /*******************************
                set right rail visibility 
            *******************************/
            // all rail components are in this variable except "Seleceted Agency" - that is controlled in the calculator 
            var railComponents = jQuery('#refund_info,#npic_call,#passport_costs,#passport_photo_examples,#enroll_step_rail,.checklist,#research_country');
            railComponents.hide();
            // show initially
            jQuery('#refund_info').show();
            // rail states
            function railEligibility() { //eligibility
                ;railComponents.hide();
                jQuery('#refund_info').show();
                jQuery('.display_selected_agency').hide();
            };
            function railCalc() { //cost calc
                railComponents.hide();
                jQuery('#npic_call').show();
                jQuery('.display_selected_agency').removeClass('hide_selected_agency');
            };
            function railDocuments() { //documents
                railComponents.hide();
                jQuery('#passport_costs,#npic_call').show();
                jQuery('.display_selected_agency').removeClass('hide_selected_agency');
            };
            function railPhotos() { //photos
                railComponents.hide();
                jQuery('#passport_costs,#passport_photo_examples').show();
                jQuery('.display_selected_agency').removeClass('hide_selected_agency');
            };
            function railSummary() { //summary
                railComponents.hide();
                jQuery('#enroll_step_rail,.checklist,#research_country').show();
                jQuery('.display_selected_agency').addClass('hide_selected_agency');
            };
            // duplicate click handler needs to happen here due to order of js
            jQuery('#calculate_costs').click(function(e){
		e.preventDefault();
                if(!(jQuery(this).hasClass('disabled'))){
                    jQuery('#npic_call').show();
                    jQuery('#refund_info').hide();
                }
                
                   // jQuery("#edit_btn_type").focus();
                    
                    $("#calculatecosts").attr("href", "#").attr('tabindex', 1);;
                    //$( "#calculatecosts" ).focus(); 
                    $("#complete_forms").removeAttr("href");
                    $("#get_a_photo").removeAttr("href");
                    $("#collect_documents").removeAttr("href");
                    
                    jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                    $("#calculatecosts").focus();
            });

            /*******************************
                Event Handlers for Tabs
            *******************************/
                jQuery("#tab1").click(function(){
                //eligibility
                    var thisTab = jQuery(this);
                    thisTab.focus();
                    if(!(thisTab.hasClass("disabled")) && (thisTab.hasClass("inactive"))){
                        jQuery("#back_to_eligibility").trigger("click");                     /*
                        //turn off display for current page
                        var currentPage = travelStateGov.passportWizard.getCurrentPage();
                        jQuery("#"+currentPage).hide();

                        //turn on display for that button
                        jQuery("#step_eligibility").show();
                        travelStateGov.passportWizard.setCurrentPage("step_eligibility");

                        //set previous page for back button
                        travelStateGov.passportWizard.setBackBtnPage("");
                        */

                        //rightrail
                        railEligibility();
                        jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                    }
                });
                jQuery("#tab2").click(function(){
                //cost calc
                    var thisTab = jQuery(this);
                    if(!(thisTab.hasClass("disabled"))){
                        //jQuery("#tab1").removeClass("selected disabled").addClass("inactive");
                        jQuery("#tab2").removeClass("inactive disabled").addClass("selected");
                        //jQuery("#tab3, #tab4, #tab5").removeClass("selected inactive").addClass("disabled");
                        jQuery("#tab1, #tab3, #tab4, #tab5").removeClass("selected disabled").addClass("inactive");

                        //turn off display for current page
                        var currentPage = travelStateGov.passportWizard.getCurrentPage();
                        jQuery("#"+currentPage).hide();

                        //turn on display for that button
                        jQuery("#cost_calculator").show();
                        travelStateGov.passportWizard.setCurrentPage("cost_calculator");

                        //set previous page for back button
                        travelStateGov.passportWizard.setBackBtnPage("step_eligibility");

                        //rightrail
                        railCalc();
                        jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                        
                        $("#calculatecosts").attr("href", "#").attr('tabindex', 1);
                        $( "#calculatecosts" ).focus(); 
                        $("#complete_forms").removeAttr("href");
                        $("#get_a_photo").removeAttr("href");
                        $("#collect_documents").removeAttr("href");
                    }
                });
                jQuery("#tab3").click(function(){
                //documents
                    var thisTab = jQuery(this);
                    if(!(thisTab.hasClass("disabled"))){
                        jQuery("#tab3").removeClass("inactive disabled").addClass("selected");
                        jQuery("#tab1, #tab2, #tab4, #tab5").removeClass("selected disabled").addClass("inactive");

                        //turn off display for current page
                        var currentPage = travelStateGov.passportWizard.getCurrentPage();
                        jQuery("#"+currentPage).hide();

                        //turn on display for that button
                        var docsPage = getDocumentsDisplay();

                        jQuery("#"+docsPage).show();
                        travelStateGov.passportWizard.setCurrentPage(docsPage);

                        //set previous page for back button
                        travelStateGov.passportWizard.setBackBtnPage("cost_calculator");

                        //rightrail
                        railDocuments();
                        jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                
                        $("#collect_documents").attr("href", "#").attr('tabindex', 1);
                        $( "#collect_documents" ).focus(); 
                        $("#get_a_photo").removeAttr("href");
                        $("#complete_forms").removeAttr("href");
                        $( "#calculatecosts" ).removeAttr("href"); 
                    }
                });
                jQuery("#tab4").click(function(){
                //photos
                    var thisTab = jQuery(this);
                    if(!(thisTab.hasClass("disabled"))){
                        jQuery("#tab4").removeClass("inactive disabled").addClass("selected");
                        jQuery("#tab1, #tab2, #tab3, #tab5").removeClass("selected disabled").addClass("inactive");

                        //turn off display for current page
                        var currentPage = travelStateGov.passportWizard.getCurrentPage();
                        jQuery("#"+currentPage).hide();

                        //turn on display for that button
                        var photosPage = getPhotosDisplay();
                        jQuery("#"+photosPage).show();
                        travelStateGov.passportWizard.setCurrentPage(photosPage);

                        //set previous page for back button
                        travelStateGov.passportWizard.setBackBtnPage(getDocumentsDisplay());

                        //rightrail
                        railPhotos();
                        jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                
                        $("#get_a_photo").attr("href", "#").attr('tabindex', 1);;  
                        $( "#get_a_photo" ).focus(); 
                        $("#complete_forms").removeAttr("href");
                        $("#collect_documents").removeAttr("href");
                        $( "#calculatecosts" ).removeAttr("href"); 
                    }
                });
                jQuery("#tab5").click(function(){
                //summary
                    var thisTab = jQuery(this);
                    if(!(thisTab.hasClass("disabled"))){
                        jQuery("#tab5").removeClass("inactive disabled").addClass("selected");
                        jQuery("#tab1, #tab2, #tab3, #tab4").removeClass("selected disabled").addClass("inactive");

                        //turn off display for current page
                        var currentPage = travelStateGov.passportWizard.getCurrentPage();
                        jQuery("#"+currentPage).hide();

                        //turn on display for that button
                        var summaryPage = getSummaryDisplay();
                        jQuery("#"+summaryPage).show();
                        travelStateGov.passportWizard.setCurrentPage(summaryPage);

                        //set previous page for back button
                        travelStateGov.passportWizard.setBackBtnPage(getPhotosDisplay());

                        //rightrail
                        railSummary();
                        jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                
                        $("#complete_forms").attr("href", "#").attr('tabindex', 1);
                        $( "#complete_forms" ).focus(); 
                        $("#get_a_photo").removeAttr("href");
                        $("#collect_documents").removeAttr("href");
                        $( "#calculatecosts" ).removeAttr("href"); 
                    }
                });


            /*******************************
                Event handlers for back 
                and next buttons
            *******************************/
            //in cost calc tab
            //back last page is undefined
            jQuery("#back_to_eligibility").click(function(e){
                e.preventDefault();
                // clear all responses
                // radio buttons and one select element
                var inputWrap = jQuery("#cost_calculator").find("input").filter(":checked"),
                selectWrap = jQuery("#cost_calculator").find("select");   
                inputWrap.each(function(i){
                    jQuery(this).attr("checked", false);
                });
                selectWrap.each(function(i){
                    jQuery(this).children("option").eq("0").prop("selected", true);
                });

                //reset the show hide states and headers back to start
                jQuery('#header_passtype,#header_passtype_book,#header_passtype_card,#header_passtype_book_card').addClass('unselected').removeClass('selected showit hideit');
                jQuery('#header_option_new,#header_option_renew,#header_option_under16,#header_option_over16,#header_option_replace').addClass('unselected').removeClass('selected showit hideit');
                jQuery('#header_standard,#header_exp,#header_exp_agency,#header_exp_agency').addClass('unselected').removeClass('selected showit hideit');
                jQuery('#step_processing,#step_cost_summary,#acceptance_fee_summary').hide();

                //reset summary labels
                jQuery('.type_total').html('0');
                jQuery('.type_label').html('&nbsp;');
                jQuery('.delivery_total').html('0.00');

                //hide outcomes
                jQuery(".outcomes").hide();
                jQuery("#step_eligibility").show();

                //change tabs going back to tab 1

                jQuery("#tab1").removeClass("inactive disabled").addClass("selected");
                jQuery("#tab2, #tab3, #tab4, #tab5").removeClass("selected inactive").addClass("disabled");

                //set current page
                travelStateGov.passportWizard.setCurrentPage("step_eligibility");

                //rightrail
                railEligibility();
                jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                
               
                $( "#currently_reside_us" ).focus(); 

            });



            jQuery("#next_to_documents").click(function(e){
                e.preventDefault();
                var thisNextBtn = jQuery(this);
                //change tabs going next to documents tab 3
                jQuery("#tab2").removeClass("selected disabled").addClass("inactive");
                jQuery("#tab3").removeClass("inactive disabled").addClass("selected");
                //hide cost calculator outcome
                jQuery("#cost_calculator").hide();
                //show appropriate documents screen
                var display = getDocumentsDisplay();

                travelStateGov.passportWizard.setBackBtnPage(thisNextBtn.parents(".outcomes").prop("id"));
                jQuery("#"+display).show();
                travelStateGov.passportWizard.setCurrentPage(display);

                //rightrail
                railDocuments();
                jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                
                $("#collect_documents").attr("href", "#").attr('tabindex', 1);
                $( "#collect_documents" ).focus(); 
                $("#get_a_photo").removeAttr("href");
                $("#complete_forms").removeAttr("href");
                $( "#calculatecosts" ).removeAttr("href"); 

            });

            //in documents tab

            jQuery(".wizard_documents .back a").click(function(e){
                e.preventDefault();
                var thisBackBtn = jQuery(this);
                //going back to tab 2 cost calc
                jQuery("#tab1").removeClass("selected disabled").addClass("inactive");
                jQuery("#tab2").removeClass("inactive disabled").addClass("selected");
                jQuery("#tab3").removeClass("selected disabled").addClass("inactive");
                //jQuery("#tab3, #tab4, #tab5").removeClass("selected inactive").addClass("disabled");

                thisBackBtn.parents(".outcomes").hide();
                jQuery("#cost_calculator").show();

                //set last page
                travelStateGov.passportWizard.setBackBtnPage("step_eligibility");
                //set current page
                travelStateGov.passportWizard.setCurrentPage("cost_calculator");
                //rightrail
                railCalc();
                jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                
                $( "#calculatecosts" ).focus(); 
            });

            jQuery(".wizard_documents .next a").click(function(e){
                e.preventDefault();
                var thisNextBtn = jQuery(this);
                //change tabs going next to photos tab 4
                jQuery("#tab3").removeClass("selected disabled").addClass("inactive");
                jQuery("#tab4").removeClass("inactive disabled").addClass("selected");
                //hide eligibility outcome
                thisNextBtn.parents(".outcomes").hide();

                //show appropriate documents screen
                var display = getPhotosDisplay();
                jQuery("#"+display).show();

                //set this as last page
                travelStateGov.passportWizard.setBackBtnPage(thisNextBtn.parents(".outcomes").prop("id"));
                //set current page
                travelStateGov.passportWizard.setCurrentPage(display);

                //rightrail
                railPhotos();
                jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                
                $("#get_a_photo").attr("href", "#").attr('tabindex', 1);  
                $( "#get_a_photo" ).focus(); 
                $("#complete_forms").removeAttr("href");
                $("#collect_documents").removeAttr("href");
            });

            // in photos tab
            jQuery(".wizard_photos .back a").click(function(e){
                e.preventDefault();
                var thisBackBtn = jQuery(this);
                //change tabs to documents tab 3
                jQuery("#tab3").removeClass("inactive disabled").addClass("selected");
                jQuery("#tab4").removeClass("selected disabled").addClass("inactive");
                thisBackBtn.parents(".outcomes").hide();

                //what to show
                var display = getDocumentsDisplay();
                jQuery("#"+display).show();

                //set last page
                travelStateGov.passportWizard.setBackBtnPage("cost_calculator");
                //set current page
                travelStateGov.passportWizard.setCurrentPage(getDocumentsDisplay());

                //rightrail
                railDocuments();
                jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                
                $("#collect_documents").attr("href", "#").attr('tabindex', 1);
                $( "#collect_documents" ).focus(); 
                $("#get_a_photo").removeAttr("href");
                $("#complete_forms").removeAttr("href");
                $( "#calculatecosts" ).removeAttr("href"); 
            });

            jQuery(".wizard_photos .next a").click(function(e){
                e.preventDefault();
                var thisNextBtn = jQuery(this);
                //change tabs to summary tab 5
                jQuery("#tab4").removeClass("selected disabled").addClass("inactive");
                jQuery("#tab5").removeClass("inactive disabled").addClass("selected");
                //hide eligibility outcome
                thisNextBtn.parents(".outcomes").hide();
                //show appropriate documents screen
                var display = getSummaryDisplay();
                jQuery("#"+display).show();
                //set this as last page
                travelStateGov.passportWizard.setBackBtnPage(thisNextBtn.parents(".outcomes").prop("id"));
                //set current page
                travelStateGov.passportWizard.setCurrentPage(display);
                //rightrail
                railSummary();
                jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                
                $("#complete_forms").attr("href", "#").attr('tabindex', 1);
                $( "#complete_forms" ).focus(); 
                $("#get_a_photo").removeAttr("href");
                $("#collect_documents").removeAttr("href");
                $( "#calculatecosts" ).removeAttr("href"); 
            });
            //in summary tab
            //in summary tab only back button in summary tabs
            jQuery(".wizard_summary .back a").click(function(e){
                e.preventDefault();
                var thisBackBtn = jQuery(this);
                //change tabs going back to photos tab 4
                jQuery("#tab4").removeClass("inactive disabled").addClass("selected");
                jQuery("#tab5").removeClass("selected disabled").addClass("inactive");
                thisBackBtn.parents(".outcomes").hide();
                //what to show
                var display = travelStateGov.passportWizard.getlastPage();
                jQuery("#"+display).show();
                //set last page
                travelStateGov.passportWizard.setBackBtnPage(getDocumentsDisplay());
                //set current page
                travelStateGov.passportWizard.setCurrentPage(getPhotosDisplay());

                //rightrail
                railPhotos();
                jQuery.scrollTo(jQuery("#passport_wizard"), 800);
                
                $("#get_a_photo").attr("href", "#").attr('tabindex', 1);
                $("#get_a_photo").focus(); 
                $("#complete_forms").removeAttr("href");
                $("#collect_documents").removeAttr("href");
                $( "#calculatecosts" ).removeAttr("href"); 
            });


            /*******************************
                utility functions
            *******************************/

            var getDocumentsDisplay = function(){
                var eligibilityOutcome = travelStateGov.passportWizard.eligibililityOutcome.toLowerCase();

                switch (eligibilityOutcome){
                    //adult
                    case "new adult passport":
                        return "new_adult_passport_docs";
                    break;
                    case "new adult passport with additional proof":
                        return "new_adult_passport_addl_proof_docs";
                    break;
                    case "new adult passport and ds-64":
                        return "new_adult_passport_ds64_docs";
                    break;
                    case "renew adult passport":
                        return "renew_adult_passport_docs";
                    break;

                    //child
                    case "new child passport":
                        return "new_child_passport_docs";
                    break;
                    case "new child passport and ds-64":
                        return "new_child_passport_ds64_docs";
                    break;


                    //16 and 17
                    case "new passport with additional requirements":
                        return "new_16_17_passport_addlreq_docs";
                    break;
                    case "renew passport with additional requirements":
                        return "renew_16_17_passport_addlreq_docs";
                    break;
                    case "new passport with additional requirements and ds-64":
                        return "new_16_17_passport_addlreq_ds64_docs";
                    break;

                    //no fee and lv no fee 
                    case "lv - no fee and submit form ds-5504":
                        return "no_fee_lv_ds5504_docs";
                    break;
                    case "no fee and submit form ds-5504":
                        return "no_fee_ds5504_docs";
                    break;
                }
            };//end of getDocumentsDisplay
            var getPhotosDisplay = function(){
                var personType = travelStateGov.passportWizard.personType,
                    displayOut = "";
                if(personType === "adult" || personType === "16or17"){
                    displayOut = "adult_photo_req";
                }else{
                    displayOut = "minor_photo_req";
                }
                return displayOut;
            };//end of getPhotoDisplay
            var getSummaryDisplay = function(){
                var eligibilityOutcome = travelStateGov.passportWizard.eligibililityOutcome.toLowerCase();

                switch (eligibilityOutcome){
                    //adult
                    case "new adult passport":
                        return "new_adult_passport_summary";
                    break;
                    case "new adult passport with additional proof":
                        return "new_adult_passport_addl_proof_summary";
                    break;
                    case "new adult passport and ds-64":
                        return "new_adult_passport_ds64_summary";
                    break;
                    case "renew adult passport":
                        return "renew_adult_passport_summary";
                    break;

                    //child
                    case "new child passport":
                        return "new_child_passport_summary";
                    break;
                    case "new child passport and ds-64":
                        return "new_child_passport_ds64_summary";
                    break;


                    //16 and 17
                    case "new passport with additional requirements":
                        return "new_16_17_passport_addlreq_summary";
                    break;
                    case "renew passport with additional requirements":
                        return "renew_16_17_passport_addlreq_summary";
                    break;
                    case "new passport with additional requirements and ds-64":
                        return "new_16_17_passport_addlreq_ds64_summary";
                    break;

                    //no fee and lv no fee 
                    case "lv - no fee and submit form ds-5504":
                        return "no_fee_lv_ds5504_summary";
                    break;
                    case "no fee and submit form ds-5504":
                        return "no_fee_ds5504_summary";
                    break;
                }
            };//end of getDocumentsDisplay
        }
    });

}(jQuery, window, document));
