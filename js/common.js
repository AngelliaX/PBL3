var JOURNAL_ARTICLE_UPDATE_CONTENT_URL="/delegate/api/v01/article/content/",LAYOUT_UPDATE_NAME_URL="/delegate/api/v01/layout/name/",primaryHeadlineQuickTip="",headlineQuickTip="",contentQuickTip="",blockContentQuickTip="",blockHeadlineQuickTip="",contentIntroText="",headlineIntroText="",blockHeadlineIntroText="",secondaryHeadlineIntroText="",primaryHeadlineIntroText="",subnavHeadlineIntroText="";function validDate(e,t){var a=e.getDay();for(i=0;i<t.length;i++)if(-1!=$.inArray(a,t)||new Date>e)return[!1];return[!0]}function convertToBrowserLocalTime(e){return new Date(e.getTime()-6e4*e.getTimezoneOffset())}Date.prototype.getTwelveHourFormattedTime=function(){return(0==this.getHours()?"12":this.getHours()>12?this.getHours()-12:this.getHours())+":"+((this.getMinutes()<9?"0":"")+this.getMinutes())+" "+(this.getHours()<12?"am":"pm")},function(e){e.ui&&e.ui.dialog&&e.browser.webkit&&(e.ui.dialog.overlay.events=e.map(["focus","keydown","keypress"],(function(e){return e+".dialog-overlay"})).join(" "))}(jQuery),function(e){var t,i;e.ui.dialog.prototype.options.ieRoundedCorners=!1,e.ui.dialog.prototype.options.modal=!0,e.ui.dialog.prototype.options.draggable=!1,e.ui.dialog.prototype.options.resizable=!1;var a=e.ui.dialog.prototype._init;e.ui.dialog.prototype._init=function(){var n=(t=this).element[0];if(i=e(n).parent(),a.apply(t,arguments),t.options.ieRoundedCorners&&e.browser.msie&&e.browser.version<9){e(i).addClass("js-templateDialogStyle js-template-modal-wrapper"),t.options.styleOverride&&e(i).addClass(t.options.styleOverride);var o=e(i).offset().top+e(i).height(),s=e(i).offset().left;e(i).before("<div class='js-modal-rounded-top'><span class='js-modal-rounded-top-left'></span><span class='js-modal-border-spacer'></span><span class='js-modal-rounded-top-right'></span></div>"),e(".js-modal-rounded-top").css({top:e(i).offset().top+3,left:s,"z-index":e(i).css("z-index")-1}),e(i).after("<div class='js-modal-rounded-bottom'><span class='js-modal-rounded-bottom-left'></span><span class='js-modal-border-spacer'></span><span class='js-modal-rounded-bottom-right'></span></div>"),e(".js-modal-rounded-bottom").css({top:o,left:s,"z-index":e(i).css("z-index")-1}),e(".js-modal-border-spacer").css({width:e(i).width()-10}),e(".ie7 div.ui-dialog-titlebar").css({width:e(i).width()-25}),e(".ui-widget-overlay").css({"z-index":e(i).css("z-index")-2})}t.uiDialog.bind("dialogclose",(function(){if(e.browser.msie&&e.browser.version<9&&(e(".js-modal-rounded-top, .js-modal-rounded-bottom").remove(),e(".ui-dialog").size()>1&&e(this).hasClass("js-confirm-modal-wrapper"))){var a=e(".js-templateDialogStyle").offset().top,n=e(".js-templateDialogStyle").offset().left;e(".js-templateDialogStyle").before("<div class='js-modal-rounded-top'><span class='js-modal-rounded-top-left'></span><span class='js-modal-border-spacer'></span><span class='js-modal-rounded-top-right'></span></div>"),e(".js-modal-rounded-top").css({top:e(i).offset().top+3,left:n,"z-index":e(i).css("z-index")-1}),e(".js-templateDialogStyle").after("<div class='js-modal-rounded-bottom'><span class='js-modal-rounded-bottom-left'></span><span class='js-modal-border-spacer'></span><span class='js-modal-rounded-bottom-right'></span></div>"),e(".js-modal-rounded-bottom").css({top:a+e(".js-templateDialogStyle").height(),left:n,"z-index":e(".js-templateDialogStyle").css("z-index")-1}),e(".js-modal-border-spacer").css({width:e(".js-templateDialogStyle").width()-10}),e(".ui-widget-overlay").css({"z-index":e(".js-templateDialogStyle").css("z-index")-10})}t.options.customClose?t.options.customClose():(e(this).dialog("destroy"),e(this).remove())}))}}(jQuery);var v2p={};function enableDatePicker(e,t){t||(t="+1d"),$(e).datepicker({showButtonPanel:!0,showOn:"both",buttonImage:v2p.getContextPath()+"/public/images/form/calendar.jpg",buttonImageOnly:!0,minDate:t})}function enableDynalinks(){function e(e,t){var i,a,n,o,s,l=$(".dynalink-edit",e),r=$(".dynalink-view",e),d=$("input[type='text']",l)[0],c=$("a",r)[0];null==(a=(n=(n=d.value).replace(/\s/g,"").replace(/\/$/,"")).match(/^https?:\/\//i))&&(a="http://"),s=(o=n.replace(a,"")).length>0?a+o:"",c.innerHTML=o,c.href=s,d.value=s;var p=$(d).hasClass("error");i="edit"==t||""==d.value||p,l.toggle(i),r.toggle(!i),"edit"==t&&(d.focus(),d.select())}$(document).ready((function(){$(".dynalink").each((function(){var t=this,i=$(".dynalink-edit input[type='text']",t)[0],a=$(".dynalink-view a.edit-trigger",t)[0];i.onblur=function(){e(t,"auto")},a.onclick=function(){return e(t,"edit"),!1},e(t,"auto")}))}))}function enableDynatexts(){function e(e,t){var i,a=$(".dynatext-edit",e),n=$(".dynatext-view",e),o=$("input[type='text']",a)[0],s=$("span",n)[0];$(s).text(o.value.replace(/"/g,"&quot;").replace(/'/g,"&#039;")),i="edit"==t||""==o.value,a.toggle(i),n.toggle(!i),"edit"==t&&(o.focus(),o.select())}$(document).ready((function(){$(".dynatext").each((function(){var t=this,i=$(".dynatext-edit input[type='text']",t)[0],a=$(".dynatext-view a.edit-trigger",t)[0];i.onblur=function(){e(t,"auto")},a.onclick=function(){return e(t,"edit"),!1},e(t,"auto")}))}))}function css_browser_selector(e){var t=e.toLowerCase(),i=function(e){return t.indexOf(e)>-1},a="gecko",n="webkit",o="safari",s="opera",l="mobile",r=document.documentElement,d=[!/opera|webtv/i.test(t)&&/msie\s(\d)/.test(t)?"ie ie"+RegExp.$1:i("firefox/2")?a+" ff2":i("firefox/3.5")?a+" ff3 ff3_5":i("firefox/3.6")?a+" ff3 ff3_6":i("firefox/3")?a+" ff3":i("gecko/")?a:i("opera")?s+(/version\/(\d+)/.test(t)?" "+s+RegExp.$1:/opera(\s|\/)(\d+)/.test(t)?" "+s+RegExp.$2:""):i("konqueror")?"konqueror":i("blackberry")?l+" blackberry":i("android")?l+" android":i("chrome")?n+" chrome":i("iron")?n+" iron":i("applewebkit/")?n+" "+o+(/version\/(\d+)/.test(t)?" "+o+RegExp.$1:""):i("mozilla/")?a:"",i("j2me")?l+" j2me":i("iphone")?l+" iphone":i("ipod")?l+" ipod":i("ipad")?l+" ipad":i("mac")||i("darwin")?"mac":i("webtv")?"webtv":i("win")?"win"+(i("windows nt 6.0")?" vista":""):i("freebsd")?"freebsd":i("x11")||i("linux")?"linux":"","js"];return c=d.join(" "),r.className+=" "+c,c}v2p.initiateSubNavigation=function(){$("a.subNavigationPopinTrigger").click((function(){$("div.subNavigationPopin").dialog("close"),v2p.openSubNavigationPopin(this)}))},v2p.openSubNavigationPopin=function(e){var t=$(e).offset().left+$(e).width()-117,i=0;$(e).hasClass("practiceMenuTrigger")?($("li.userMenuItem").hide(),$("li.practiceMenuItem").show(),i=$(e).offset().top+21):($("li.userMenuItem").show(),$("li.practiceMenuItem").hide(),i=$(e).offset().top+12),$("div.subNavigationPopin").dialog({open:function(){$(this).parent().attr({id:"subNavigationPopinWrapper"}),v2p.configureSubNavigationUI()},close:function(){},width:149,closeText:"",position:[t,i],draggable:!1,modal:!1,resizable:!1})},v2p.configureSubNavigationUI=function(){$("#subNavigationPopinWrapper a.popinClose").attr({hideFocus:"true"}).focus().click((function(){return $("div.subNavigationPopin").dialog("close"),!1})),$("#subNavigationPopinWrapper li a").focus((function(){$(this).addClass("subNavigationFocusedLink")})).blur((function(){$(this).removeClass("subNavigationFocusedLink")})),$("#subNavigationPopinWrapper").mouseover((function(){$(this).addClass("subNavigationSuspendClose")})).mouseout((function(){$("div.subNavigationSuspendClose").removeClass("subNavigationSuspendClose")})),$("body").mouseup((function(){$("#subNavigationPopinWrapper").hasClass("subNavigationSuspendClose")||$("div.subNavigationPopin").dialog("close")})),$(window).resize((function(){$("div.subNavigationPopin").dialog("close")}))},v2p.initLiferay=function(){CKEDITOR.on("dialogDefinition",(function(e){var t=e.data.name,i=e.data.definition;"link"==t&&i.getContents("info").get("linkType").items.splice(1,1)})),v2p.initateThirdBadge(),$("#optionalText").on("keydown",(function(e){if(13==e.keyCode)return e.preventDefault(),!1})),$("#gaTrackingCode").on("keydown",(function(e){if(13==e.keyCode)return e.preventDefault(),!1})),$(".column-wide").each((function(){var e=$(this).find(".form-wrapper").height();$(this).next(".column-narrow").find(".form-wrapper").height(e)})),$(".js-email-tooltip").hover((function(){$(".test-email-tooltip-wrapper").remove();$(".email-tooltip-container").append("<div class='test-email-tooltip-wrapper'><span class='js-tooltip-unicorn'></span><span class='clearBoth'></span><span class='js-tooltip'><p>To send this test to more than one email address, use a comma to separate email addresses.</p><p>Example:<br>mary@yahoo.com, john2@yahoo.com</p></span></div>")}),(function(){$(".test-email-tooltip-wrapper").remove()})),$(".js-texting-tooltip").hover((function(){$(".test-texting-tooltip-wrapper").remove();$(".texting-tooltip-container").append("<div class='test-texting-tooltip-wrapper'><span class='js-tooltip-unicorn'></span><span class='clearBoth'></span><span class='js-tooltip'><p>We'll only send you messages about your pet's health and upcoming appointments. We'll never share your number or send you any ads.</p></span></div>")}),(function(){$(".test-texting-tooltip-wrapper").remove()}));var e="";$("form").each((function(){e+=$(this).serialize()})),$(".js-tabs").tabs(),v2p.initiateYesNoConfirm(),$(".js-utcDate").each((function(){var e=convertToBrowserLocalTime(new Date($.trim($(this).html())));$(this).text($.datepicker.formatDate("M d, yy",e))})),$(".js-utcTime").each((function(){var e=new Date($.trim($(this).html()));$(this).text(convertToBrowserLocalTime(e).getTwelveHourFormattedTime())})),v2p.initateJqEasyCounter(),$(".js-select-all").change((function(e){var t=$(this).is(":checked");$(this).parent().find("input[type='checkbox']").not(".js-select-all").each((function(e){$(this).attr("checked",t)}))})),$(".js-select-all").click((function(e){e.preventDefault(),$(this).closest(".js-select-all-container").find("input[type='checkbox']").not(".js-select-all").each((function(e){$(this).attr("checked","checked")}))})),$(".js-data-table").each((function(e){jQuery.fn.dataTableExt.oPagination.iFullNumbersShowPages=1;var t="C",i="f",a=[];$(this).find("th.js-data-table-no-hide").each((function(e){a.push($(this).index())})),$(this).hasClass("js-disable-show-hide")&&(t=""),$(this).hasClass("js-disable-search")&&(i="");var n=!$(this).hasClass("js-disable-sorting"),o=[];$(this).find("th").each((function(e){o.push({bSortable:!$(this).hasClass("js-data-table-no-sort"),bSearchable:!$(this).hasClass("js-data-table-no-search")})})),$(this).dataTable({sPaginationType:"full_numbers",sDom:'<"clear">'+t+i+"rtilp",oColVis:{buttonText:"Show/Hide Columns",bRestore:!0,aiExclude:a},oLanguage:{oPaginate:{sPrevious:"&nbsp;",sFirst:"&nbsp;",sNext:"&nbsp;",sLast:"&nbsp;"},sLengthMenu:"show _MENU_ results per page",sInfo:"showing _START_ - _END_ of _TOTAL_ results",sEmptyTable:"&nbsp;",sZeroRecords:"&nbsp;",sInfoFiltered:"&nbsp;",sInfoEmpty:"showing 0 - 0 of 0 results"},fnDrawCallback:function(){var e=this.parent();0==this.fnSettings().fnRecordsDisplay()?($(".dataTables_paginate",e).css("visibility","hidden"),$(".dataTables_length",e).css("visibility","hidden")):($(".dataTables_paginate",e).css("visibility","visible"),$(".dataTables_length",e).css("visibility","visible"))},aoColumns:o,bSort:n})})),$(".js-phone-mask").inputmask("(999) 999-9999"),$(".js-zip-mask").inputmask("99999[-9999]"),$(".js-submit-trigger").size()>0&&$(".js-button-row").hide(),$(".js-global-submit").each((function(e){$(".button-row").hide();var t=$(this),i=$("form").not($(t)).not("form[action='#']");0==i.length&&$(this).closest(".portlet-boundary").hide(),$(t).submit((function(e){$(i).find("form:last");var t=!1;return $(i).each((function(e){var i=$(this);t||$.ajax({async:!1,type:"POST",url:$(i).attr("action"),data:$(i).serialize(),beforeSend:function(){},success:function(e){$(i).html($(e).find("#"+$(i).attr("id")).html()),$(i).find(".js-phone-mask").inputmask("(999) 999-9999"),$(i).find(".js-zip-mask").inputmask("99999[-9999]"),$(i).find(".js-button-row").hide(),$(e).find(".aui-field-label-validation-msg").size()>0&&(t=!0)}})})),!t}))})),$(".js-cancel-trigger").each((function(){var t=$(this);$(t).click((function(i){var a="";$("form").each((function(){a+=$(this).serialize()})),e!=a&&(i.preventDefault(),$("<div><h3>Do you want to save your changes?</h3></div>").dialog({width:300,height:200,title:"Save Changes",modal:!0,autoOpen:!0,ieRoundedCorners:!0,buttons:{Yes:function(){$(this).dialog("close");var e=$(t).closest("form"),i=$(e).find(".js-save-button")[0];i?$(i).click():$(e).submit()},No:function(){$(this).dialog("close");var e=$(t).attr("href");e?window.location.href=e:($(t).off(i),$(t).click())},Cancel:function(){$(this).dialog("close"),i.preventDefault()}}}))}))})),$(".js-showmore-link, .js-showless-link").click((function(){return container=$(this).closest(".js-showmore-container"),container.find(".js-showmore-link").toggle(),container.find(".js-showless-link").toggle(),container.find(".js-showmore-content").toggle(),"block"==$(".js-showmore-content").css("display")?$(".medical-history").addClass("js-expanded"):$(".medical-history").removeClass("js-expanded"),!1})),$(".js-empty-portlet").each((function(){$(this).closest(".portlet-boundary").hide()})),$(".pet-selector-drop-down option").each((function(){"selected"!=$(this).attr("selected")?$("<a href='#' class='js-pet-selector-link'>"+$(this).text()+"</a>").appendTo($(".js-pet-selector-list")).wrap("<li></li>"):$("<span>"+$(this).text()+"</span>").appendTo($(".js-pet-selector-header"))})),$(".js-pet-selector-link").live("click",(function(){var e=$(this).text();$(".pet-selector-drop-down option").each((function(){$(this).text()==e&&($(this).attr("selected","selected"),$(".pet-selector-drop-down").change())}))})),$(".js-tooltip-click-trigger").each((function(){v2p.initiateClickToolTip($(this),!0)})),v2p.normalizeChildHeight(),v2p.initiateSubnavJCarousel(),v2p.transposeSubnav(),v2p.scrubPublicImages(),$("body").hasClass("private-page")&&v2p.initatePrivatePageUX()},v2p.serializeWithDisabled=function(e){return e.serialize()+"&"+$.param(e.find("input:disabled"))},v2p.escapeForSelector=function(e){return null==e?e:e.replace(/[!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g,"\\$&")},function(e){e.fn.cancelConfirm=function(t){var i=e.extend({includeDisabled:!0,eventType:"click",hasChanged:function(e,t){return e!==t}},t),a=function(e){return i.includeDisabled?v2p.serializeWithDisabled(e):e.serialize()};return this.each((function(){var t=e(this);t.closest("form").each((function(){var n=e(this),o=a(n);t.on(i.eventType,(function(s){i.hasChanged(o,a(n))?(s.preventDefault(),e("<div/>").dialog({width:300,height:200,autoOpen:!0,title:"Save Changes",styleOverride:"js-confirm-modal-wrapper",ieRoundedCorners:!0,buttons:{Yes:function(){return e(window).off("beforeunload"),e.isFunction(i.yes)?i.yes():n.submit(),e(this).dialog("close"),e(".ui-dialog").dialog("close"),!1},No:function(){e(window).off("beforeunload"),e.isFunction(i.no)?i.no():t.attr("href")&&(window.location.href=t.attr("href")),e(this).dialog("close"),e(".ui-dialog").dialog("close")},Cancel:function(){e(this).dialog("close")}},open:function(){if(i.dialogContent)var t=i.dialogContent;else t="<p class='dialogMessageBlock'><strong>Do you want to save your changes?</strong></p>";e(this).append(t),i.width&&e(this).dialog("option","width",i.width),i.height&&e(this).dialog("option","height",i.height)},close:function(){if(e(".dialogMessageBlock").parent().remove(),e("html").hasClass("ie8")){var t=e(".js-template-modal-wrapper"),i=parseInt(e(t).css("top").replace("px",""));e(".js-modal-rounded-top").css({top:i+3+"px","z-index":e(t).css("z-index")-1})}}})):e.isFunction(i.noChange)&&i.noChange()}))}))}))}}(jQuery),function(e){e.fn.confirmNavigation=function(t){var i=e.extend({includeDisabled:!0,eventType:"beforeunload",hasChanged:function(e,t){return e!==t}},t),a=function(e){return i.includeDisabled?v2p.serializeWithDisabled(e):e.serialize()};return e("input[type='submit']").on("click",(function(){e(window).off("beforeunload")})),e("form").each((function(){var t=e(this),n=a(t);e(window).on(i.eventType,(function(o){if(i.hasChanged(n,a(t)))return o.preventDefault(),e(".suspend-click").removeClass("suspend-click"),"This page is asking you to confirm that you want to leave - data you have entered may not be saved.";e.isFunction(i.noChange)&&i.noChange()}))}))}}(jQuery),function(e){e.fn.charactersLeft=function(t){var i=e.extend({max:100,overflowMessage:"You may only have up to {} characters",message:"{} characters left."},t);return this.each((function(t){e(this).keyup((function(){var t=i.max-e(this).val().length;i.target&&(t>=0?i.target.html(i.message.replace("{}",t)):e(this).val(e(this).val().substr(0,i.max)))})).keyup()}))}}(jQuery),v2p.hasProperty=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1},v2p.getContextPath=function(){return $("meta[name='contextPath']").attr("content")},v2p.populateImageToolTip=function(e){var t=$("<div></div>");$(t).html("<ul class='img-tooltip-content'></ul>");var i=$(e).attr("width"),a=$(e).attr("height");return $(e).hasClass("badge")?$(t).find("ul").append("<li>Add an accreditation or online tool logo here. "+i+" x "+a+" pixels.</li>"):$(t).find("ul").append("<li>Image size: "+i+" x "+a+" pixels</li>"),$(t).find("ul").append("<li><a href='#' class='triggerOverride'>Upload one of your images</a></li>"),$(t).find("ul").append("<li><a href='#' class='imgUploadDelete'>Delete this image</a></li>"),$(t).html()},v2p.initiateClickToolTip=function(e,t){e.on("hover",(function(){var i,a;t?(i=parseInt($(e).find("a").height())-25,a=parseInt($(e).width())-34):(i=parseInt($(e).find("a").offset().top)+parseInt($(e).find("a").height()),a=parseInt($(e).find("a").offset().left)-18),$(".js-suspendClose").removeClass("js-suspendClose"),$(this).addClass("js-suspendClose");setTimeout((function(){v2p.triggerTooltip(e,i,a,t)}),250);return $.browser.msie&&($(".accountContainer-link, .js-user-container-arrow").addClass("ie-fix"),$(".accountContainer-link, .js-user-container-arrow").removeClass("ie-fix")),!1})),e.on("mouseleave",(function(){$(this).removeClass("js-suspendClose")}))},v2p.triggerTooltip=function(e,t,i,a){if($(".js-suspendClose").size()>0){$(".js-tooltip-wrapper").remove();var n=$(e).next(".js-tooltip-click-content").clone(!0),o=$("<div class='js-tooltip-wrapper'><span class='js-tooltip-unicorn'></span><span class='clearBoth'></span><span class='js-tooltip'></span></div>");$(n).css({display:"block"}).appendTo($(o).find(".js-tooltip")),a?$(o).insertAfter($(e)):$(o).appendTo($("body")),$(o).show(),$(e).hasClass("js-tooltip-right")&&($(o).find(".js-tooltip-unicorn").addClass("js-tooltip-unicorn-right"),$(o).find(".js-tooltip").css({float:"right"}),i=0-parseInt($(o).width())+(parseInt($(e).width())+18)),$(e).hasClass("js-tooltip-no-unicorn")&&$(o).find(".js-tooltip-unicorn").addClass("js-tooltip-no-unicorn"),a?$(o).css({"margin-top":t,"margin-left":i}):$(o).css({top:t,left:i}),$(o).find(".js-tooltip").hide().show(),$(o).hover((function(){$(this).addClass("js-suspendClose")}),(function(){$(".js-suspendClose").removeClass("js-suspendClose");setTimeout((function(){$(".js-tooltip-wrapper").each((function(){$(this).hasClass("js-suspendClose")||$(this).remove()}))}),100)}))}},v2p.populateEditableContentTooltip=function(e){var t="";return $(e).hasClass("js-editable-primary-headline")?t='<p class="triggerOverride">Double-click to edit.</p><p><span class="triggerOverride icon-caution"></span>This will also change the tab label above, as well as the heading on all pages in this section.</p><p><span class="triggerOverride icon-caution"></span>These changes are published automatically because they\'re important to navigation.</p>':$(e).hasClass("js-editable-secondary-headline")?(t='<p class="triggerOverride">Double-click to edit.</p>',$(e).hasClass("js-editable-sub-navigation")&&(t='<p class="triggerOverride">Double-click to edit.</p><p><span class="triggerOverride icon-caution"></span>This will also change the label shown in the navigation below the image.</p>')):t=($(e).hasClass("js-editable-block-headline"),'<p class="triggerOverride">Double-click to edit.</p>'),t},v2p.initiateEditableTooltips=function(){$(".js-editable").unbind().each((function(){var e=this;$(e).on({mouseenter:function(){$(e).addClass("js-suspendClose"),$(e).addClass("js-editable-active");setTimeout((function(){if($(".js-suspendClose").size()>0){$(".js-tooltip-wrapper").remove();var t="";t=$(e).hasClass("js-editable-image")?v2p.populateImageToolTip(e):v2p.populateEditableContentTooltip(e),$("<div class='js-tooltip-wrapper'><span class='js-tooltip-unicorn'></span><span class='clearBoth'></span><span class='js-tooltip'>"+t+"</span></div>").insertAfter($(e)).fadeIn(50,(function(){$(this).find(".triggerOverride").live("click",(function(){return $(e).dblclick(),$(".js-tooltip-wrapper").remove(),!1})),$(".imgUploadDelete").unbind("click").click((function(t){t.stopPropagation(),t.preventDefault(),v2p.showDeleteItemDialog(e,(function(){if($(this).dialog("close"),$(e).hasClass("js-editable-linked-image")&&$(e).parent().is("a")&&$(e).unwrap(),$(e).is("img")){$(e).attr("alt","");var t=$(e).attr("data-public");$(e).attr({src:t}),$(".subnav-item-selected img").attr("src",t),v2p.saveJournalArticleContent()}}))})),$(this).hover((function(){$(this).addClass("js-suspendClose")}),(function(){$(this).removeClass("js-suspendClose").remove()})),$(this).css({visibility:"visible"})}))}}),100)},mouseleave:function(){$(e).removeClass("js-editable-active"),$(e).removeClass("js-suspendClose");setTimeout((function(){$(e).hasClass("js-suspendClose")||$(e).next(".js-tooltip-wrapper").hasClass("js-suspendClose")||$(e).next(".js-tooltip-wrapper").remove()}),100)}})})),v2p.disableEditableImageLinks()},v2p.showDeleteItemDialog=function(e,t){$("<div><h4 style='padding:10px 0;'>Are you sure you want to permanently delete this item?</h4><p>Once it's deleted, you won't be able to bring it back.</p></div>").dialog({width:"auto",height:"auto",modal:!0,autoOpen:!0,ieRoundedCorners:!0,title:"Delete",buttons:{Yes:function(){$(e).hasClass("ok-publish")&&$(e).removeClass("ok-publish").addClass("no-publish"),t(),$(this).dialog("close")},No:function(){$(this).dialog("close")}}})},v2p.disableEditableImageLinks=function(){$(".js-editable-linked-image").each((function(){$(this).parent().is("a")&&$(this).parent().click((function(e){e.preventDefault()}))}))},v2p.enableDatePicker=function(e){$(e).datepicker({showButtonPanel:!0,showOn:"both",buttonImage:"/theme/public/common/images/calendar.jpg",buttonImageOnly:!0,minDate:"+1d"})},v2p.beginLoadWithSource=function(e,t,i){0==$("#loading").size()&&$("body").append('<div id="loading"><img src="'+e+'" height="'+t+'" width="'+i+'"/></div>'),$("#loading").dialog({height:20,width:128,minHeight:20,minWidth:128,zIndex:99999,stack:!1,show:"fade",dialogClass:"invisible-dialog"})},v2p.endLoad=function(){$("#loading").dialog("close")},v2p.normalizeChildHeight=function(){$(".js-normalize-child-height").each((function(){var e=0;$(this).children().each((function(){$(this).height()>e&&(e=$(this).height())})),$(this).children().css({height:e})}))},v2p.normalizeTipHeight=function(e){var t=$(e).find(".left-col .fieldset-content").height();$(e).find(".right-col .fieldset-content").css({height:t})},v2p.initiateSubnavJCarousel=function(){if($("#subnav-list").size()>0){var e=0;$("#subnav-list li").each((function(t,i){$(this).hasClass("subnav-item-selected")&&(e=t)})),$("#subnav-list").jcarousel({start:e,scroll:3,visible:5,vertical:!1,itemFallbackDimension:170}).css({visibility:"visible"}),$("#subnav-list li").css("display","none").css("display","block")}},v2p.transposeSubnav=function(){if($(".services-subnav").size()>0){var e=$(".subnav:last").clone();$(".subnav").hide(0),$(".services-subnav").html(e),$(".services-subnav .subnav").show(0)}},v2p.initiateYesNoConfirm=function(){$('*[class*="js-yesNoConfirm-"]').each((function(){var e=$(this),t=$(e).attr("class").match(/js-yesNoConfirm-[A-Za-z0-9]*/g);$(e).click((function(i){i.preventDefault(),$(i.target).hasClass("suspend-click")||v2p.yesNoConfirm(e,"#"+t+"-content")}))}))},v2p.yesNoConfirm=function(trigger,dialogContent){$(dialogContent).dialog({width:495,height:"auto",modal:!0,autoOpen:!0,ieRoundedCorners:!0,buttons:{Yes:function(){var action=$(trigger).attr("href");$(trigger).data("callback")?(eval($(trigger).data("callback")),$(this).dialog("close")):$(trigger).data("method")?($(this).dialog("close"),$.ajax({url:action,type:"POST",success:function(e){location.reload()},cache:!1,error:function(e,t,i){}})):action?($(this).dialog("close"),window.location.href=action):($(this).dialog("close"),$(trigger).unbind("click"),$(trigger).click(),$(trigger).prop("disabled",!0))},No:function(){$(".suspend-click").removeClass("suspend-click"),$(this).dialog("close")}}})},v2p.initiateWYSIWYG=function(){$(".js-editable-content").live("dblclick",(function(e){var t=$(this),i=contentIntroText,a=contentQuickTip;$(t).hasClass("js-editable-block-content")&&(a=blockContentQuickTip),$("<div>"+i+'<textarea name="editor" id="editor" rows="5" cols="90" style="margin-top:10px;margin-left:5px;border:1px solid grey;background-color:white;width: 545px;">'+$(t).html()+'</textarea><p class="helper-text">'+a+"</p></div>").dialog({title:"Edit Text",width:565,height:"auto",modal:!0,ieRoundedCorners:!0,autoOpen:!0,open:function(e,t){CKEDITOR.replace("editor").focus(),CKEDITOR.instances.editor.on("contentDom",(function(){CKEDITOR.instances.editor.document.on("keyup",(function(){var e=CKEDITOR.instances.editor.getData();v2p.checkEmptyContentInWYSIWYG(e)}))}))},close:function(e,t){$(this).remove()},buttons:{Save:function(){var e=CKEDITOR.instances.editor.getData();e=e.replace(/&Acirc;/g,"").replace(/&#160;/g,"").replace(/&Atilde;/g,"").replace(/&sbquo;/g,""),$(t).html(e),"REST"==$(t).data("method")?null!=v2p.surveyService&&v2p.surveyService.updateSurveyIntroduction(t,e):v2p.saveJournalArticleContent(),$(this).dialog("close")},Cancel:function(){$(this).dialog("close")}}})})),v2p.checkEmptyContentInWYSIWYG=function(e){e=e.replace(/&Acirc;/g,"").replace(/&#160;/g,"").replace(/&Atilde;/g,"").replace(/&sbquo;/g,"").replace(/&nbsp;/g,"").replace(/<p><\/p>/g,""),$.trim(e)?$(".ui-dialog-buttonpane button:contains('Save')").attr("disabled",!1).removeClass("ui-state-disabled"):$(".ui-dialog-buttonpane button:contains('Save')").attr("disabled",!0).addClass("ui-state-disabled")},v2p.saveJournalArticleContent=function(){repeatableBlock.removeToolbars(),v2p.scrubPrivateImages(),$(".js-tooltip-wrapper").remove();var e=$("div.journal-content-article").first().html();$.post(JOURNAL_ARTICLE_UPDATE_CONTENT_URL+articleId,{content:e,groupId:groupId},(function(e){$("div.journal-content-article").first().html(e),repeatableBlock.initBlocks(repeatableBlock.containerId),v2p.initiateEditableTooltips(),v2p.initateEditableImage(),v2p.scrubPublicImages()}))},v2p.executeServiceCall=function(e,t,i,a){t=JSON.stringify(t),$.ajax({url:i,headers:{"content-type":"application/json"},dataType:"json",type:e,data:t,success:function(e){a&&a(e)},cache:!1,error:function(e,t,i){}})},v2p.initiateInlineEditing=function(){$(".js-editable-headline").live("dblclick",(function(e){var t,i=$(this);t=v2p.populateEditableDialogContent(i);var a=$(i).data("title");a||(a="Edit This Headline"),$(t).dialog({title:a,width:495,height:"auto",modal:!0,ieRoundedCorners:!0,autoOpen:!0,open:function(){$(".ui-dialog-buttonpane button:contains('Save')").attr("disabled",!0).addClass("ui-state-disabled"),$("#headline-editor").bind("keyup",(function(){v2p.checkEmptyContentInWYSIWYG($("#headline-editor").val())})),v2p.initateJqEasyCounter(),$(this).addClass("headline-editor-dialog"),$("#headline-editor").blur().focus()},close:function(e,t){$(this).remove()},buttons:{Save:function(){var e=$("#wrapper").hasClass("surveys"),t=$.trim($("#headline-editor").val());if(e)$(".js-editable").each((function(){var e=$.trim($(this).text());t==e&&(a=!0)}));else var a=!1;var n=/<|>|"/.test(t);if(n||a)return n?($(".js-dialog-error-message").remove(),$(".headline-editor-dialog").prepend("<div class='color-red font-family-verdana font-size-12 portlet-msg-error js-dialog-error-message' id='imageUploadError' style='margin: 2px auto 14px;'>Sorry, we can't accept the following special characters : < > '' </div>").show(),!1):a&&e?($(".js-dialog-error-message").remove(),$(".headline-editor-dialog").prepend("<div class='color-red font-family-verdana font-size-12 portlet-msg-error js-dialog-error-message' style='margin: 2px auto 14px;'>Hmm, it looks like you've already used this wording. Try to make it unique.</div>").show(),!1):($("#imageUploadError").remove(),!1);if($(i).hasClass("js-editable-primary-headline"))$("#nav ul li.selected").html(t),$.post(LAYOUT_UPDATE_NAME_URL+layoutPlid,{name:t,groupId:groupId,updateParent:!0},(function(e){$(".result").html(e.msg)}));else if($(i).hasClass("js-editable-secondary-headline")&&$(i).hasClass("js-editable-sub-navigation")){var o=$(".subnav-item-selected span");o.length>0?o.text(t):$(".subnav-item-selected a").text(t),$.post(LAYOUT_UPDATE_NAME_URL+layoutPlid,{name:t,groupId:groupId,updateParent:!1},(function(e){}))}if("REST"==$(i).data("method")){if(v2p.surveyService){var s=repeatableBlock.getIndex(i);v2p.surveyService.updateSurveyRankQuestion(i,t,s)}$(this).dialog("close")}else{$(i).html(v2p.htmlEncode(t)),v2p.saveJournalArticleContent(),$(this).dialog("close");var l=$(i).closest("form");$(l).submit()}},Cancel:function(){$(this).dialog("close")}}})}))}},RegExp.escape=function(e){return e.replace(/[\/\\^$*+?()|[\]{}<>]/g,"\\$&")},v2p.htmlEncode=function(e){return e?jQuery("<div />").text(e).html():""},v2p.htmlDecode=function(e){return e?$("<div />").html(e).text():""},v2p.populateEditableDialogContent=function(e){var t="";return $(e).hasClass("js-editable-primary-headline")?t="<div>"+primaryHeadlineIntroText+'<input type="text" id="headline-editor" class="js-counter" data-max-char="20" value="'+$(e).html()+'"><p class="helper-text">'+primaryHeadlineQuickTip+"</p></div>":$(e).hasClass("js-editable-secondary-headline")?(t="<div>"+secondaryHeadlineIntroText+'<input type="text" id="headline-editor" value="'+$(e).html()+'"><br/><p class="helper-text">'+headlineQuickTip+"</p></div>",$(e).hasClass("js-editable-sub-navigation")&&(t="<div>"+subnavHeadlineIntroText+'<input type="text" id="headline-editor" class="js-counter" data-max-char="28" value="'+$(e).html()+'"><p class="helper-text">'+headlineQuickTip+"</p><div>")):t=$(e).hasClass("js-editable-block-headline")?"<div>"+blockHeadlineIntroText+'<input type="text" id="headline-editor" value="'+$(e).html()+'"><br/><p class="helper-text">'+blockHeadlineQuickTip+"</p></div>":$(e).hasClass("js-editable-block-question")?'<div><p class="font-family-verdana font-size-12 margin-bottom-5px">Customize your question</p><input type="text" id="headline-editor" class="js-counter" style="width: 99%;" data-max-char="250" value="'+$(e).html()+'"></div>':"<div>"+headlineIntroText+'<input type="text" id="headline-editor" value="'+$(e).html()+'"><br/><p class="helper-text">'+headlineQuickTip+"</p></div>",$(t)},v2p.initateEditableImage=function(e){$(".js-editable-image").dblclick((function(){"undefined"!=typeof newsletterImage&&newsletterImage.uploadAndCrop({practiceId:practiceId,url:"/delegate/api/v01/image/newsletter/upload",newsletterId:newsletterId,image:$(this),additionalImages:$(".js-updatable-image"),editUrl:$(this).hasClass("js-editable-linked-image"),callback:function(){v2p.saveJournalArticleContent(),v2p.disableEditableImageLinks()}}),"undefined"!=typeof websiteImage&&websiteImage.uploadAndCrop({practiceId:practiceId,image:$(this),additionalImages:$(".js-updatable-image"),editUrl:$(this).hasClass("js-editable-linked-image"),callback:function(){v2p.disableEditableImageLinks(),v2p.saveJournalArticleContent()}})}))},v2p.scrubPrivateImages=function(){$(".private-page .js-editable-image").each((function(){var e=$(this).attr("src");e.indexOf("private-")&&(e=e.replace(/private-/,"public-"),$(this).attr({src:e}))}))},v2p.scrubPublicImages=function(){$(".private-page .js-editable-image").each((function(){var e=$(this).attr("src");e.indexOf("public-")&&(e=e.replace(/public-/,"private-"),$(this).attr({src:e}))}))},v2p.initatePrivatePageUX=function(){$("body").hasClass("view-only")?v2p.scrubPrivateImages():($(".js-repeatableBlock").size()>0&&repeatableBlock.initBlocks($(".js-repeatableBlock:first").parent().attr("id")),$("#jumpToPage").change((function(){document.location.href=$("option:selected",this).val()})),v2p.initiateEditableTooltips(),v2p.initiateWYSIWYG(),v2p.initiateInlineEditing(),$(".subnav-item-selected img").addClass("js-updatable-image"),v2p.initateEditableImage(),$(".js-editable-content").bind("click",(function(e){e.preventDefault(e)})))},v2p.initateJqEasyCounter=function(){$(".js-counter").each((function(){if(!$(this).next().hasClass("jqEasyCounterMsg")){var e=$(this),t={maxChars:$(e).attr("data-max-char")};$(this).jqEasyCounter(t)}}))},v2p.initateThirdBadge=function(){$(".accreditation-wrapper li").length<=2&&$(".accreditation-wrapper ul").prepend('<li><img class="js-editable js-editable-image js-editable-linked-image no-publish badge" src="/theme/public/common/images/public-default-60x80.jpg" alt="" title="" width="60" height="80" data-private="/theme/public/common/images/private-default-60x80.jpg" data-public="/theme/public/common/images/public-default-60x80.jpg"/></li>')},v2p.MakeSameHeight=function(e){var t,i,a,n,o=[];function s(e,t){return e<t?1:e>t?-1:void 0}$.each(e,(function(e,l){t=$("#"+l).find(".fieldset-content"),i=$("#themes-"+l).find(".fieldset-content"),a=t.height(),n=i.height(),(o=[a,n]).sort(s),t.height(o[0]),i.height(o[0])}))},v2p.disableFormEnterToSubmitForm=function(){var e=["login1"];$(window).keydown((function(t){if(13==t.keyCode)try{var i=t.target,a=$(i.form).attr("id");if("submit"!=i.type&&!function(e,t){for(var i=e.length;i--;)if(e[i]===t)return!0;return!1}(e,a))return t.preventDefault(),!1}catch(e){}}))},v2p.initCommunications=function(){v2p.initiateSubNavigation(),$(".js-cancel-warning-trigger").cancelConfirm(),$.ajaxSetup({cache:!1}),v2p.disableFormEnterToSubmitForm(),$(".js-pet-id-hover-trigger").size()>0&&v2p.initiatePetIDPreviewImageHover()},css_browser_selector(navigator.userAgent),$.fn.preload=function(){this.each((function(){$("<img/>")[0].src=this}))},v2p.initiatePetIDPreviewImageHover=function(){$(".js-pet-id-hover-trigger").hover((function(){var e=$(this).clone();$(e).attr({height:100,width:100}).removeClass("js-pet-id-hover-trigger").addClass("js-pet-id-hover-content"),$(this).after(e)}),(function(){$(".js-pet-id-hover-content").remove()})),$.fn.dataTableExt.oApi.fnGetHiddenTrNodes=function(e){for(var t=this.oApi._fnGetTrNodes(e),i=$("tbody tr",e.nTable),a=0;a<i.length;a++){var n=jQuery.inArray(i[a],t);-1!=n&&t.splice(n,1)}return t}},v2p.initiateRatingStars=function(){$('.rating input[type="radio"]').change((function(){$('.rating input[type="radio"]').attr("checked",!1),$(".rating span").removeClass("starChecked").css("background-position","0 0"),$(this).attr("checked",!0),$(this).next("span").addClass("starChecked").css("background-position","-31px 0");for(var e=$(this).val(),t=0;t<e;)$("#survey_rating_"+t).addClass("starChecked").css("background-position","-31px 0"),t++}))},$(".js-submit-on-enter").keydown((function(e){13==e.which&&$(this).submit()})),$(".js-form-submit-link").click((function(e){e.preventDefault(),$(this).closest("form").submit()})),$(".client-search-form").submit((function(e){return e.preventDefault(),$.ajax({url:v2p.getContextPath()+"/petowners",data:$("#clientSearch").serialize(),dataType:"json",success:function(e){e.petownerUrl?window.location.href=e.petownerUrl:($(".js-no-result-hide").hide(),$(".js-client-search-error").show())},cache:!1,error:function(e,t,i){}}),!1})),$(".js-tooltip-click-trigger").each((function(){v2p.initiateClickToolTip($(this))})),v2p.initiateYesNoConfirm(),v2p.preventDoubleSubmission=function(){return $(".js-prevent-double-submission").on("click",(function(e){if($(this).hasClass("suspend-click"))return e.preventDefault(),!1;$(".js-prevent-double-submission").addClass("suspend-click")})),this},v2p.keepAliveSession=function(e,t,i){var a=1e3*e;jQuery.sessionTimeout({keepAliveUrl:t,ajaxType:"GET",keepAliveInterval:a/4,warnAfter:a-9e4,onWarn:function(){var e=window.onbeforeunload;window.onbeforeunload=null,$("<div title=\"Still there?\"><h3>We've noticed you've been inactive. For your security we would like to log you out unless you're still working. What would you like to do?</h3></div>").dialog({dialogClass:"session-expiration-dialog",width:495,height:"auto",modal:!0,autoOpen:!0,ieRoundedCorners:!0,buttons:{"Log out":function(){window.location=i},Continue:function(){window.onbeforeunload=e,$(this).dialog("close")}}})},redirAfter:a-1e4,redirUrl:i})},function(e){e.fn.ctaButtonExample=function(t){e.extend({},t);var i=function(t,i,a,n,o){return function(){return e('<div id="'+o+'">'+(-1!=navigator.appVersion.indexOf("Mac")?"<p>Command+C to copy the code</p>":"<p>Control+C to copy the code</p>")+'<textarea style="overflow: auto; width:100%; height:'+(n-100)+'px;" rows="" cols="">'+(e.isFunction(t)?t():t)+"</textarea></div>").dialog({title:i,width:a,height:n,close:function(){e("#"+o).remove()}}).find("textarea").select(),!1}};return this.each((function(){var t=e(this),a=function(e){e.colorpicker(),e.parent().css("display","inline-block")},n=t.parent(),o=n.find(".js-color-input");a(o);var s=function(){t.find("strong").css("color",o.val()),t.find("a").css("color",o.val())};o.on("change.color",s);var l=n.find(".js-bgcolor-input");a(l);var r=function(){t.find("td").attr("bgcolor",l.val()),t.find("a").css("border","1px solid"+l.val())};l.on("change.color",r);var d=n.find(".js-copy-link"),c=d.data("clipboard-text");if(t.html('<table border="0" cellspacing="0" cellpadding="0" style="width:auto"> \n  <tbody>\n    <tr>\n      <td align="center" style="padding: 0 0 0 0; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;">\n        <a href="'+c+'" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; text-decoration: none; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; padding: 12px 35px; display: inline-block;">\n          <strong style="font-weight: normal;">'+t.data("button-name")+"</strong>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>"),n.find(".js-copy-code").click(i((function(){return t.html()}),"Copy Button Code",520,320,"copyCodeButtonDialog")),d.click(i(c,"Copy Link Code",400,150,"copyLinkButtonDialog")),s(),r(),!0===t.data("disabled")){n.find("input").prop("disabled",!0),n.find(".js-disabled-message").show(),n.find(".js-button-color-list").hide();var p=t.find("a");t.find("strong").attr("style",p.attr("style")).css("font-weight","normal").css("border","solid 1px #CCCCCC").css("cursor","default").css("color","#FFFFFF"),t.find("td").attr("bgcolor","#CCCCCC"),p.parent().html(p.html())}}))}}(jQuery);