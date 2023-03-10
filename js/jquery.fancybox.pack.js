/* fancyBox v2.0.6 fancyapps.com | fancyapps.com/fancybox/#license */
(function(v, g, i, r) {
    var f = i(v),
        b = i(g),
        j = i.fancybox = function() {
            j.open.apply(this, arguments)
        },
        p = !1,
        h = g.createTouch !== r,
        c = function(d) {
            return "string" === i.type(d)
        },
        e = function(a, d) {
            d && c(a) && 0 < a.indexOf("%") && (a = j.getViewport()[d] / 100 * parseInt(a, 10));
            return Math.round(a) + "px"
        };
    i.extend(j, {
        version: "2.0.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            autoSize: !0,
            autoResize: !h,
            autoCenter: !h,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            fixed: !1,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3000,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            keys: {
                next: [13, 32, 34, 39, 40],
                prev: [8, 33, 37, 38],
                close: [27]
            },
            tpl: {
                wrap: '<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"' + (i.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
                swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
                next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 300,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 300,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 300,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 300,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: {
                    speedIn: 0,
                    speedOut: 300,
                    opacity: 0.8,
                    css: {
                        cursor: "pointer"
                    },
                    closeClick: !0
                },
                title: {
                    type: "float"
                }
            }
        },
        group: {},
        opts: {},
        coming: null,
        current: null,
        isOpen: !1,
        isOpened: !1,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, d) {
            j.close(!0);
            a && !i.isArray(a) && (a = a instanceof i ? i(a).get() : [a]);
            j.isActive = !0;
            j.opts = i.extend(!0, {}, j.defaults, d);
            i.isPlainObject(d) && d.keys !== r && (j.opts.keys = d.keys ? i.extend({}, j.defaults.keys, d.keys) : !1);
            j.group = a;
            j._start(j.opts.index || 0)
        },
        cancel: function() {
            j.coming && !1 === j.trigger("onCancel") || (j.coming = null, j.hideLoading(), j.ajaxLoad && j.ajaxLoad.abort(), j.ajaxLoad = null, j.imgPreload && (j.imgPreload.onload = j.imgPreload.onabort = j.imgPreload.onerror = null))
        },
        close: function(a) {
            j.cancel();
            j.current && !1 !== j.trigger("beforeClose") && (j.unbindEvents(), !j.isOpen || a && !0 === a[0] ? (i(".fancybox-wrap").stop().trigger("onReset").remove(), j._afterZoomOut()) : (j.isOpen = j.isOpened = !1, i(".fancybox-item, .fancybox-nav").remove(), j.wrap.stop(!0).removeClass("fancybox-opened"), j.inner.css("overflow", "hidden"), j.transitions[j.current.closeMethod]()))
        },
        play: function(a) {
            var l = function() {
                    clearTimeout(j.player.timer)
                },
                k = function() {
                    l();
                    j.current && j.player.isActive && (j.player.timer = setTimeout(j.next, j.current.playSpeed))
                },
                d = function() {
                    l();
                    i("body").unbind(".player");
                    j.player.isActive = !1;
                    j.trigger("onPlayEnd")
                };
            if (j.player.isActive || a && !1 === a[0]) {
                d()
            } else {
                if (j.current && (j.current.loop || j.current.index < j.group.length - 1)) {
                    j.player.isActive = !0, i("body").bind({
                        "afterShow.player onUpdate.player": k,
                        "onCancel.player beforeClose.player": d,
                        "beforeLoad.player": l
                    }), k(), j.trigger("onPlayStart")
                }
            }
        },
        next: function() {
            j.current && j.jumpto(j.current.index + 1)
        },
        prev: function() {
            j.current && j.jumpto(j.current.index - 1)
        },
        jumpto: function(a) {
            j.current && (a = parseInt(a, 10), 1 < j.group.length && j.current.loop && (a >= j.group.length ? a = 0 : 0 > a && (a = j.group.length - 1)), j.group[a] !== r && (j.cancel(), j._start(a)))
        },
        reposition: function(a, k) {
            var d;
            j.isOpen && (d = j._getPosition(k), a && "scroll" === a.type ? (delete d.position, j.wrap.stop(!0, !0).animate(d, 200)) : j.wrap.css(d))
        },
        update: function(a) {
            j.isOpen && (p || setTimeout(function() {
                var k = j.current,
                    d = !a || a && "orientationchange" === a.type;
                if (p && (p = !1, k)) {
                    if (!a || "scroll" !== a.type || d) {
                        k.autoSize && "iframe" !== k.type && (j.inner.height("auto"), k.height = j.inner.height()), (k.autoResize || d) && j._setDimension(), k.canGrow && "iframe" !== k.type && j.inner.height("auto")
                    }(k.autoCenter || d) && j.reposition(a);
                    j.trigger("onUpdate")
                }
            }, 200), p = !0)
        },
        toggle: function() {
            j.isOpen && (j.current.fitToView = !j.current.fitToView, j.update())
        },
        hideLoading: function() {
            b.unbind("keypress.fb");
            i("#fancybox-loading").remove()
        },
        showLoading: function() {
            j.hideLoading();
            b.bind("keypress.fb", function(a) {
                27 === a.keyCode && (a.preventDefault(), j.cancel())
            });
            i('<div id="fancybox-loading"><div></div></div>').click(j.cancel).appendTo("body")
        },
        getViewport: function() {
            return {
                x: f.scrollLeft(),
                y: f.scrollTop(),
                w: h && v.innerWidth ? v.innerWidth : f.width(),
                h: h && v.innerHeight ? v.innerHeight : f.height()
            }
        },
        unbindEvents: function() {
            j.wrap && j.wrap.unbind(".fb");
            b.unbind(".fb");
            f.unbind(".fb")
        },
        bindEvents: function() {
            var a = j.current,
                d = a.keys;
            a && (f.bind("resize.fb orientationchange.fb" + (a.autoCenter && !a.fixed ? " scroll.fb" : ""), j.update), d && b.bind("keydown.fb", function(k) {
                var l;
                l = k.target || k.srcElement;
                if (!k.ctrlKey && !k.altKey && !k.shiftKey && !k.metaKey && (!l || !l.type && !i(l).is("[contenteditable]"))) {
                    l = k.keyCode, -1 < i.inArray(l, d.close) ? (j.close(), k.preventDefault()) : -1 < i.inArray(l, d.next) ? (j.next(), k.preventDefault()) : -1 < i.inArray(l, d.prev) && (j.prev(), k.preventDefault())
                }
            }), i.fn.mousewheel && a.mouseWheel && 1 < j.group.length && j.wrap.bind("mousewheel.fb", function(k, m) {
                var l = k.target || null;
                if (0 !== m && (!l || 0 === l.clientHeight || l.scrollHeight === l.clientHeight && l.scrollWidth === l.clientWidth)) {
                    k.preventDefault(), j[0 < m ? "prev" : "next"]()
                }
            }))
        },
        trigger: function(a, l) {
            var k, d = l || j[-1 < i.inArray(a, ["onCancel", "beforeLoad", "afterLoad"]) ? "coming" : "current"];
            if (d) {
                i.isFunction(d[a]) && (k = d[a].apply(d, Array.prototype.slice.call(arguments, 1)));
                if (!1 === k) {
                    return !1
                }
                d.helpers && i.each(d.helpers, function(n, m) {
                    if (m && i.isPlainObject(j.helpers[n]) && i.isFunction(j.helpers[n][a])) {
                        j.helpers[n][a](m, d)
                    }
                });
                i.event.trigger(a + ".fb")
            }
        },
        isImage: function(d) {
            return c(d) && d.match(/\.(jpe?g|gif|png|bmp)((\?|#).*)?$/i)
        },
        isSWF: function(d) {
            return c(d) && d.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(a) {
            var n = {},
                m = j.group[a] || null,
                l, k, d;
            if (m && (m.nodeType || m instanceof i)) {
                l = !0, i.metadata && (n = i(m).metadata())
            }
            n = i.extend(!0, {}, j.opts, {
                index: a,
                element: m
            }, i.isPlainObject(m) ? m : n);
            i.each(["href", "title", "content", "type"], function(o, q) {
                n[q] = j.opts[q] || l && i(m).attr(q) || n[q] || null
            });
            "number" === typeof n.margin && (n.margin = [n.margin, n.margin, n.margin, n.margin]);
            n.modal && i.extend(!0, n, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        css: {
                            cursor: "auto"
                        },
                        closeClick: !1
                    }
                }
            });
            j.coming = n;
            if (!1 === j.trigger("beforeLoad")) {
                j.coming = null
            } else {
                k = n.type;
                a = n.href || m;
                k || (l && (k = i(m).data("fancybox-type"), k || (k = (k = m.className.match(/fancybox\.(\w+)/)) ? k[1] : null)), !k && c(a) && (j.isImage(a) ? k = "image" : j.isSWF(a) ? k = "swf" : a.match(/^#/) && (k = "inline")), k || (k = l ? "inline" : "html"), n.type = k);
                if ("inline" === k || "html" === k) {
                    if (n.content || (n.content = "inline" === k ? i(c(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : m), !n.content || !n.content.length) {
                        k = null
                    }
                } else {
                    a || (k = null)
                }
                "ajax" === k && c(a) && (d = a.split(/\s+/, 2), a = d.shift(), n.selector = d.shift());
                n.href = a;
                n.group = j.group;
                n.isDom = l;
                switch (k) {
                    case "image":
                        j._loadImage();
                        break;
                    case "ajax":
                        j._loadAjax();
                        break;
                    case "inline":
                    case "iframe":
                    case "swf":
                    case "html":
                        j._afterLoad();
                        break;
                    default:
                        j._error("type")
                }
            }
        },
        _error: function(a) {
            j.hideLoading();
            i.extend(j.coming, {
                type: "html",
                autoSize: !0,
                minWidth: 0,
                minHeight: 0,
                padding: 15,
                hasError: a,
                content: j.coming.tpl.error
            });
            j._afterLoad()
        },
        _loadImage: function() {
            var a = j.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null;
                j.coming.width = this.width;
                j.coming.height = this.height;
                j._afterLoad()
            };
            a.onerror = function() {
                this.onload = this.onerror = null;
                j._error("image")
            };
            a.src = j.coming.href;
            (a.complete === r || !a.complete) && j.showLoading()
        },
        _loadAjax: function() {
            j.showLoading();
            j.ajaxLoad = i.ajax(i.extend({}, j.coming.ajax, {
                url: j.coming.href,
                error: function(a, d) {
                    j.coming && "abort" !== d ? j._error("ajax", a) : j.hideLoading()
                },
                success: function(a, d) {
                    "success" === d && (j.coming.content = a, j._afterLoad())
                }
            }))
        },
        _preloadImages: function() {
            var a = j.group,
                o = j.current,
                n = a.length,
                m, l, d, k = Math.min(o.preload, n - 1);
            if (o.preload && !(2 > a.length)) {
                for (d = 1; d <= k; d += 1) {
                    if (m = a[(o.index + d) % n], l = m.href || i(m).attr("href") || m, "image" === m.type || j.isImage(l)) {
                        (new Image).src = l
                    }
                }
            }
        },
        _afterLoad: function() {
            j.hideLoading();
            !j.coming || !1 === j.trigger("afterLoad", j.current) ? j.coming = !1 : (j.isOpened ? (i(".fancybox-item, .fancybox-nav").remove(), j.wrap.stop(!0).removeClass("fancybox-opened"), j.inner.css("overflow", "hidden"), j.transitions[j.current.prevMethod]()) : (i(".fancybox-wrap").stop().trigger("onReset").remove(), j.trigger("afterClose")), j.unbindEvents(), j.isOpen = !1, j.current = j.coming, j.wrap = i(j.current.tpl.wrap).addClass("fancybox-" + (h ? "mobile" : "desktop") + " fancybox-type-" + j.current.type + " fancybox-tmp " + j.current.wrapCSS).appendTo("body"), j.skin = i(".fancybox-skin", j.wrap).css("padding", e(j.current.padding)), j.outer = i(".fancybox-outer", j.wrap), j.inner = i(".fancybox-inner", j.wrap), j._setContent())
        },
        _setContent: function() {
            var a = j.current,
                o = a.content,
                n = a.type,
                m = a.minWidth,
                l = a.minHeight,
                d = a.maxWidth,
                k = a.maxHeight;
            switch (n) {
                case "inline":
                case "ajax":
                case "html":
                    a.selector ? o = i("<div>").html(o).find(a.selector) : o instanceof i && (o.parent().hasClass("fancybox-inner") && o.parents(".fancybox-wrap").unbind("onReset"), o = o.show().detach(), i(j.wrap).bind("onReset", function() {
                        o.appendTo("body").hide()
                    }));
                    a.autoSize && (m = i('<div class="fancybox-wrap ' + j.current.wrapCSS + ' fancybox-tmp"></div>').appendTo("body").css({
                        minWidth: e(m, "w"),
                        minHeight: e(l, "h"),
                        maxWidth: e(d, "w"),
                        maxHeight: e(k, "h")
                    }).append(o), a.width = m.width(), a.height = m.height(), m.width(j.current.width), m.height() > a.height && (m.width(a.width + 1), a.width = m.width(), a.height = m.height()), o = m.contents().detach(), m.remove());
                    break;
                case "image":
                    o = a.tpl.image.replace("{href}", a.href);
                    a.aspectRatio = !0;
                    break;
                case "swf":
                    o = a.tpl.swf.replace(/\{width\}/g, a.width).replace(/\{height\}/g, a.height).replace(/\{href\}/g, a.href);
                    break;
                case "iframe":
                    o = i(a.tpl.iframe.replace("{rnd}", (new Date).getTime())).attr("scrolling", a.scrolling).attr("src", a.href), a.scrolling = h ? "scroll" : "auto"
            }
            if ("image" === n || "swf" === n) {
                a.autoSize = !1, a.scrolling = "visible"
            }
            "iframe" === n && a.autoSize ? (j.showLoading(), j._setDimension(), j.inner.css("overflow", a.scrolling), o.bind({
                onCancel: function() {
                    i(this).unbind();
                    j._afterZoomOut()
                },
                load: function() {
                    j.hideLoading();
                    try {
                        this.contentWindow.document.location && (j.current.height = i(this).contents().find("body").height())
                    } catch (q) {
                        j.current.autoSize = !1
                    }
                    j[j.isOpen ? "_afterZoomIn" : "_beforeShow"]()
                }
            }).appendTo(j.inner)) : (j.inner.append(o), j._beforeShow())
        },
        _beforeShow: function() {
            j.coming = null;
            j.trigger("beforeShow");
            j._setDimension();
            j.wrap.hide().removeClass("fancybox-tmp");
            j.bindEvents();
            j._preloadImages();
            j.transitions[j.isOpened ? j.current.nextMethod : j.current.openMethod]()
        },
        _setDimension: function() {
            var A = j.wrap,
                z = j.inner,
                y = j.current,
                x = j.getViewport(),
                w = y.margin,
                t = 2 * y.padding,
                u = y.width,
                s = y.height,
                a = y.maxWidth + t,
                q = y.maxHeight + t,
                o = y.minWidth + t,
                n = y.minHeight + t,
                d;
            x.w -= w[1] + w[3];
            x.h -= w[0] + w[2];
            c(u) && 0 < u.indexOf("%") && (u = (x.w - t) * parseFloat(u) / 100);
            c(s) && 0 < s.indexOf("%") && (s = (x.h - t) * parseFloat(s) / 100);
            w = u / s;
            u += t;
            s += t;
            y.fitToView && (a = Math.min(x.w, a), q = Math.min(x.h, q));
            if (y.aspectRatio) {
                if (u > a && (u = a, s = (u - t) / w + t), s > q && (s = q, u = (s - t) * w + t), u < o && (u = o, s = (u - t) / w + t), s < n) {
                    s = n, u = (s - t) * w + t
                }
            } else {
                u = Math.max(o, Math.min(u, a)), s = Math.max(n, Math.min(s, q))
            }
            u = Math.round(u);
            s = Math.round(s);
            i(A.add(z)).width("auto").height("auto");
            z.width(u - t).height(s - t);
            A.width(u);
            d = A.height();
            if (u > a || d > q) {
                for (;
                    (u > a || d > q) && u > o && d > n;) {
                    s -= 10, y.aspectRatio ? (u = Math.round((s - t) * w + t), u < o && (u = o, s = (u - t) / w + t)) : u -= 10, z.width(u - t).height(s - t), A.width(u), d = A.height()
                }
            }
            y.dim = {
                width: e(u),
                height: e(d)
            };
            y.canGrow = y.autoSize && s > n && s < q;
            y.canShrink = !1;
            y.canExpand = !1;
            if (u - t < y.width || s - t < y.height) {
                y.canExpand = !0
            } else {
                if ((u > x.w || d > x.h) && u > o && s > n) {
                    y.canShrink = !0
                }
            }
            j.innerSpace = d - t - z.height()
        },
        _getPosition: function(a) {
            var q = j.current,
                n = j.getViewport(),
                m = q.margin,
                o = j.wrap.width() + m[1] + m[3],
                k = j.wrap.height() + m[0] + m[2],
                l = {
                    position: "absolute",
                    top: m[0] + n.y,
                    left: m[3] + n.x
                };
            q.autoCenter && q.fixed && !a && k <= n.h && o <= n.w && (l = {
                position: "fixed",
                top: m[0],
                left: m[3]
            });
            l.top = e(Math.max(l.top, l.top + (n.h - k) * q.topRatio));
            l.left = e(Math.max(l.left, l.left + 0.5 * (n.w - o)));
            return l
        },
        _afterZoomIn: function() {
            var a = j.current,
                d = a ? a.scrolling : "no";
            if (a && (j.isOpen = j.isOpened = !0, j.wrap.addClass("fancybox-opened"), j.inner.css("overflow", "yes" === d ? "scroll" : "no" === d ? "hidden" : d), j.trigger("afterShow"), j.update(), (a.closeClick || a.nextClick) && j.inner.css("cursor", "pointer").bind("click.fb", function(k) {
                    if (!i(k.target).is("a") && !i(k.target).parent().is("a")) {
                        j[a.closeClick ? "close" : "next"]()
                    }
                }), a.closeBtn && i(a.tpl.closeBtn).appendTo(j.skin).bind("click.fb", j.close), a.arrows && 1 < j.group.length && ((a.loop || 0 < a.index) && i(a.tpl.prev).appendTo(j.outer).bind("click.fb", j.prev), (a.loop || a.index < j.group.length - 1) && i(a.tpl.next).appendTo(j.outer).bind("click.fb", j.next)), j.opts.autoPlay && !j.player.isActive)) {
                j.opts.autoPlay = !1, j.play()
            }
        },
        _afterZoomOut: function() {
            var a = j.current;
            j.wrap.trigger("onReset").remove();
            i.extend(j, {
                group: {},
                opts: {},
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            j.trigger("afterClose", a)
        }
    });
    j.transitions = {
        getOrigPosition: function() {
            var a = j.current,
                o = a.element,
                n = a.padding,
                m = i(a.orig),
                l = {},
                d = 50,
                k = 50;
            !m.length && a.isDom && i(o).is(":visible") && (m = i(o).find("img:first"), m.length || (m = i(o)));
            m.length ? (l = m.offset(), m.is("img") && (d = m.outerWidth(), k = m.outerHeight())) : (a = j.getViewport(), l.top = a.y + 0.5 * (a.h - k), l.left = a.x + 0.5 * (a.w - d));
            return l = {
                top: e(l.top - n),
                left: e(l.left - n),
                width: e(d + 2 * n),
                height: e(k + 2 * n)
            }
        },
        step: function(a, n) {
            var l = n.prop,
                m, k;
            if ("width" === l || "height" === l) {
                m = Math.ceil(a - 2 * j.current.padding), "height" === l && (k = (a - n.start) / (n.end - n.start), n.start > n.end && (k = 1 - k), m -= j.innerSpace * k), j.inner[l](m)
            }
        },
        zoomIn: function() {
            var a = j.wrap,
                n = j.current,
                m = n.openEffect,
                l = "elastic" === m,
                k = i.extend({}, n.dim, j._getPosition(l)),
                d = i.extend({
                    opacity: 1
                }, k);
            delete d.position;
            l ? (k = this.getOrigPosition(), n.openOpacity && (k.opacity = 0), j.outer.add(j.inner).width("auto").height("auto")) : "fade" === m && (k.opacity = 0);
            a.css(k).show().animate(d, {
                duration: "none" === m ? 0 : n.openSpeed,
                easing: n.openEasing,
                step: l ? this.step : null,
                complete: j._afterZoomIn
            })
        },
        zoomOut: function() {
            var a = j.wrap,
                n = j.current,
                m = n.openEffect,
                l = "elastic" === m,
                k = {
                    opacity: 0
                };
            l && ("fixed" === a.css("position") && a.css(j._getPosition(!0)), k = this.getOrigPosition(), n.closeOpacity && (k.opacity = 0));
            a.animate(k, {
                duration: "none" === m ? 0 : n.closeSpeed,
                easing: n.closeEasing,
                step: l ? this.step : null,
                complete: j._afterZoomOut
            })
        },
        changeIn: function() {
            var a = j.wrap,
                o = j.current,
                n = o.nextEffect,
                m = "elastic" === n,
                l = j._getPosition(m),
                k = {
                    opacity: 1
                };
            l.opacity = 0;
            m && (l.top = e(parseInt(l.top, 10) - 200), k.top = "+=200px");
            a.css(l).show().animate(k, {
                duration: "none" === n ? 0 : o.nextSpeed,
                easing: o.nextEasing,
                complete: j._afterZoomIn
            })
        },
        changeOut: function() {
            var a = j.wrap,
                l = j.current,
                k = l.prevEffect,
                d = {
                    opacity: 0
                };
            a.removeClass("fancybox-opened");
            "elastic" === k && (d.top = "+=200px");
            a.animate(d, {
                duration: "none" === k ? 0 : l.prevSpeed,
                easing: l.prevEasing,
                complete: function() {
                    i(this).trigger("onReset").remove()
                }
            })
        }
    };
    j.helpers.overlay = {
        overlay: null,
        update: function() {
            var d, k;
            this.overlay.width("100%").height("100%");
            i.browser.msie || h ? (d = Math.max(g.documentElement.scrollWidth, g.body.scrollWidth), k = Math.max(g.documentElement.offsetWidth, g.body.offsetWidth), d = d < k ? f.width() : d) : d = b.width();
            this.overlay.width(d).height(b.height())
        },
        beforeShow: function(a) {
            this.overlay || (a = i.extend(!0, {}, j.defaults.helpers.overlay, a), this.overlay = i('<div id="fancybox-overlay"></div>').css(a.css).appendTo("body"), a.closeClick && this.overlay.bind("click.fb", j.close), j.current.fixed && !h ? this.overlay.addClass("overlay-fixed") : (this.update(), this.onUpdate = function() {
                this.update()
            }), this.overlay.fadeTo(a.speedIn, a.opacity))
        },
        afterClose: function(d) {
            this.overlay && this.overlay.fadeOut(d.speedOut || 0, function() {
                i(this).remove()
            });
            this.overlay = null
        }
    };
    j.helpers.title = {
        beforeShow: function(a) {
            var d;
            if (d = j.current.title) {
                d = i('<div class="fancybox-title fancybox-title-' + a.type + '-wrap">' + d + "</div>").appendTo("body"), "float" === a.type && (d.width(d.width()), d.wrapInner('<span class="child"></span>'), j.current.margin[2] += Math.abs(parseInt(d.css("margin-bottom"), 10))), d.appendTo("over" === a.type ? j.inner : "outside" === a.type ? j.wrap : j.skin)
            }
        }
    };
    i.fn.fancybox = function(a) {
        var m = i(this),
            l = this.selector || "",
            k, d = function(s) {
                var q = this,
                    o = k,
                    n;
                !s.ctrlKey && !s.altKey && !s.shiftKey && !s.metaKey && !i(q).is(".fancybox-wrap") && (s.preventDefault(), s = a.groupAttr || "data-fancybox-group", n = i(q).attr(s), n || (s = "rel", n = q[s]), n && "" !== n && "nofollow" !== n && (q = l.length ? i(l) : m, q = q.filter("[" + s + '="' + n + '"]'), o = q.index(this)), a.index = o, j.open(q, a))
            },
            a = a || {};
        k = a.index || 0;
        l ? b.undelegate(l, "click.fb-start").delegate(l, "click.fb-start", d) : m.unbind("click.fb-start").bind("click.fb-start", d);
        return this
    };
    i(g).ready(function() {
        j.defaults.fixed = i.support.fixedPosition || !(i.browser.msie && 6 >= i.browser.version) && !h
    })
})(window, document, jQuery);