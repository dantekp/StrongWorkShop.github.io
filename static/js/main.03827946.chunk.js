(this.webpackJsonpportfolioInTerminal = this.webpackJsonpportfolioInTerminal || []).push([
    [0], {
        21: function(e, t, n) {},
        22: function(e, t, n) {},
        23: function(e, t, n) {},
        24: function(e, t, n) {},
        25: function(e, t, n) {},
        26: function(e, t, n) {},
        27: function(e, t, n) {},
        28: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                a = n(1),
                o = n.n(a),
                s = n(11),
                c = n.n(s),
                i = n(12),
                l = n.n(i),
                u = function(e, t) {
                    return function() {
                        return Object(a.useEffect)((function() {
                            return new l.a(t)
                        })), Object(r.jsx)(e, {})
                    }
                },
                d = n(2),
                h = new function e(t, n) {
                    var r = this;
                    Object(d.a)(this, e), this.getSectionContent = function(e) {
                        return r.languages[r.actualLanguage][e].content
                    }, this.getSectionName = function(e) {
                        return r.languages[r.actualLanguage][e].name
                    }, this.changeLanguage = function(e) {
                        if (!r.isValid(e)) throw new Error("Unsuported language: " + e);
                        r.actualLanguage = e
                    }, this.isValid = function(e) {
                        return r.supportedLanguages.includes(e)
                    }, this.getSectionNames = function() {
                        var e = r.languages[r.actualLanguage];
                        return Object.keys(e)
                    }, this.languages = t, this.supportedLanguages = Object.keys(t), this.actualLanguage = n
                }({
                    es: {
                        aboutme: {
                            name: "Info",
                            content: Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsxs)("p", {
                                    children: ["Hola \ud83d\udc4b, Soy ", Object(r.jsx)("a", {
                                        rel: "noreferrer",
                                        target: "_blank",
                                        href: "https://discord.gg/MXantCek",
                                        children: "@dantekp"
                                    }), ",", Object(r.jsx)("br", {}), "."]
                                }), Object(r.jsx)("p", {
                                    children: ""
                                }), Object(r.jsx)("p", {
                                    children: "Hacemos Spoofed  Pa Fivem Y Mas!!"
                                }), Object(r.jsx)("p", {
                                    children: ""
                                })]
                            })
                        },
                        contact: {
                            name: "Contacto",
                            content: Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsx)("p", {
                                    children: "Aquí está nuestro Discord para más información."
                                }), Object(r.jsx)("p", {
                                    children: "Contacto:"
                                }), Object(r.jsxs)("p", {
                                    children: [" \ud83d\udcbb ", Object(r.jsx)("a", {
                                        rel: "noreferrer",
                                        target: "_blank",
                                        href: "https://discord.gg/MXantCek",
                                        children: "Discord"
                                    })]
                                }), Object(r.jsxs)("p", {
                                    children: [" \ud83d\udce8 ", Object(r.jsx)("a", {
                                        href: "https://github.com/dantekp/loader",
                                        children: "Loader"
                                    })]
                                })]
                            })
                        }
                    },
                    en: {
                        aboutme: {
                            name: "Info",
                            content: Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsxs)("p", {
                                    children: ["Hey \ud83d\udc4b, Im ", Object(r.jsx)("a", {
                                        rel: "noreferrer",
                                        target: "_blank",
                                        href: "https://discord.gg/MXantCek",
                                        children: "@dantekp"
                                    }), ",", Object(r.jsx)("br", {}), "."]
                                }), Object(r.jsx)("p", {
                                    children: ""
                                }), Object(r.jsx)("p", {
                                    children: "We Spoofed For Fivem & More!!"
                                }), Object(r.jsx)("p", {
                                    children: ""
                                })]
                            })
                        },
                        contact: {
                            name: "Contact",
                            content: Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsx)("p", {
                                    children: "Here Is My Discord For More Informacion."
                                }), Object(r.jsx)("p", {
                                    children: "Contact:"
                                }), Object(r.jsxs)("p", {
                                    children: [" \ud83d\udcbb ", Object(r.jsx)("a", {
                                        rel: "noreferrer",
                                        target: "_blank",
                                        href: "https://discord.gg/MXantCek",
                                        children: "Discord"
                                    })]
                                }), Object(r.jsxs)("p", {
                                    children: [" \ud83d\udce8 ", Object(r.jsx)("a", {
                                        href: "https://github.com/dantekp/loader",
                                        children: "Loader"
                                    })]
                                })]
                            })
                        }
                    }
                }, "en"),
                j = h.getSectionContent,
                p = h.getSectionName,
                m = h.getSectionNames,
                b = h.changeLanguage,
                g = h.isValid,
                f = h.supportedLanguages,
                x = (n(21), function(e) {
                    return Object(r.jsx)("a", {
                        className: "language",
                        href: "?language=" + e,
                        children: e
                    }, e)
                }),
                O = function() {
                    var e = f.map(x);
                    return Object(r.jsx)("div", {
                        className: "languages",
                        children: e
                    })
                },
                v = (n(22), n(10)),
                S = {
                    isHide: !0,
                    textColorsSelected: 0,
                    backgroundColorsSelected: 0,
                    textColors: ["#0f0", "red", "yellow"],
                    backgroundColors: ["rgba(0, 0, 0, 90%)", "rgba(0, 0, 0, 60%)", "rgba(255, 255, 255, 90%)"]
                },
                k = function(e, t) {
                    return t + 1 === e.length ? [e[0], 0] : [e[t + 1], t + 1]
                },
                y = function(e, t) {
                    return e.style.display = t
                },
                w = function(e) {
                    return e.style.color = function(e) {
                        var t = k(e.textColors, e.textColorsSelected),
                            n = Object(v.a)(t, 2),
                            r = n[0],
                            a = n[1];
                        return e.textColorsSelected = a, r
                    }(S)
                },
                C = function(e) {
                    return e.style.backgroundColor = function(e) {
                        var t = k(e.backgroundColors, e.backgroundColorsSelected),
                            n = Object(v.a)(t, 2),
                            r = n[0],
                            a = n[1];
                        return e.backgroundColorsSelected = a, r
                    }(S)
                };

            function T(e) {
                return Object(r.jsx)("div", {
                    className: "button",
                    onClick: e.onClick,
                    style: {
                        color: e.color,
                        backgroundColor: e.color,
                        width: String(12) + "px",
                        height: String(12) + "px",
                        marginLeft: String(6) + "px"
                    }
                })
            }
            var I = function(e) {
                    return Object(r.jsxs)("div", {
                        id: "topBar",
                        children: [Object(r.jsxs)("div", {
                            className: "buttons",
                            children: [Object(r.jsx)(O, {}), Object(r.jsx)(T, {
                                onClick: function() {
                                    return e = document.querySelector("div.languages"), S.isHide ? y(e, "inline") : y(e, "none"), void(S.isHide = !S.isHide);
                                    var e
                                },
                                color: "#f00"
                            }), Object(r.jsx)(T, {
                                onClick: function() {
                                    return w(document.querySelector("div#terminalDialog"))
                                },
                                color: "#ff0"
                            }), Object(r.jsx)(T, {
                                onClick: function() {
                                    return C(document.querySelector("div#terminalDialog"))
                                },
                                color: "#0f0"
                            })]
                        }), Object(r.jsxs)("p", {
                            id: "title",
                            children: [" ", e.title, " "]
                        })]
                    })
                },
                L = n(3),
                _ = n(5),
                N = n(4),
                E = n(13),
                B = (n(23), function(e) {
                    Object(_.a)(n, e);
                    var t = Object(N.a)(n);

                    function n(e) {
                        var r;
                        return Object(d.a)(this, n), (r = t.call(this, e)).setCursorStatus = function(e) {
                            e ? r.setState({
                                cursorOnStatus: !0,
                                opacity: 100
                            }) : r.setState({
                                cursorOnStatus: !1,
                                opacity: 0
                            })
                        }, r.changeCursorState = function() {
                            r.setCursorStatus(!r.state.cursorOnStatus)
                        }, r.componentDidMount = function() {
                            r.interval = setInterval((function() {
                                r.changeCursorState()
                            }), r.state.timeToUpdate)
                        }, r.componentWillUnmount = function() {
                            clearInterval(r.interval)
                        }, r.state = {
                            cursorChar: "\u2588",
                            timeToUpdate: 500,
                            cursorOnStatus: !0,
                            opacity: 100
                        }, r
                    }
                    return Object(L.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = String(this.state.opacity) + "%";
                            return Object(r.jsx)("strong", {
                                id: "cursor",
                                style: {
                                    opacity: e
                                },
                                children: this.state.cursorChar
                            })
                        }
                    }]), n
                }(o.a.Component)),
                M = (n(24), function(e) {
                    Object(_.a)(n, e);
                    var t = Object(N.a)(n);

                    function n(e) {
                        var r;
                        return Object(d.a)(this, n), (r = t.call(this, e)).checkIfLeftCharToBeShowed = function() {
                            return Boolean("" !== String(r.state.charsToBeShowed))
                        }, r.showOneChar = function() {
                            var e = Object(E.a)(r.state.charsToBeShowed),
                                t = e[0],
                                n = e.slice(1),
                                a = r.state.textInsideTerminalText + t;
                            r.setState({
                                textInsideTerminalText: a,
                                charsToBeShowed: n
                            })
                        }, r.showACharIfIsMissingACharToBeShown = function() {
                            r.checkIfLeftCharToBeShowed() ? r.showOneChar() : clearInterval(r.interval)
                        }, r.componentDidMount = function() {
                            r.interval = setInterval(r.showACharIfIsMissingACharToBeShown, r.state.timeToWaitBetweenEachChar)
                        }, r.state = {
                            timeToWaitBetweenEachChar: e.totalTime / e.text.length,
                            textInsideTerminalText: "",
                            charsToBeShowed: e.text.split("")
                        }, r
                    }
                    return Object(L.a)(n, [{
                        key: "render",
                        value: function() {
                            return Object(r.jsx)("div", {
                                className: "textTyped",
                                children: Object(r.jsxs)("p", {
                                    id: "textTyped",
                                    children: [this.state.textInsideTerminalText, Object(r.jsx)(B, {})]
                                })
                            })
                        }
                    }]), n
                }(o.a.Component)),
                A = (n(25), function(e) {
                    Object(_.a)(n, e);
                    var t = Object(N.a)(n);

                    function n(e) {
                        var a;
                        return Object(d.a)(this, n), (a = t.call(this, e)).componentDidMount = function() {
                            return window.addEventListener("load", a.renderSection)
                        }, a.renderSection = function() {
                            var e = Object(r.jsxs)(r.Fragment, {
                                children: [" ", m().map((function(e) {
                                    return Object(r.jsx)("a", {
                                        className: "sectionLinks",
                                        onClick: function() {
                                            return a.props.onClick(e)
                                        },
                                        href: "#" + e,
                                        children: p(e)
                                    }, e)
                                }))]
                            });
                            a.setState({
                                sections: e
                            })
                        }, a.state = {
                            sections: Object(r.jsx)(r.Fragment, {})
                        }, a
                    }
                    return Object(L.a)(n, [{
                        key: "render",
                        value: function() {
                            return Object(r.jsx)("p", {
                                className: "sections",
                                children: this.state.sections
                            })
                        }
                    }]), n
                }(o.a.Component)),
                D = function() {
                    var e = new URLSearchParams(window.location.search).get("language"),
                        t = navigator.language.split("-")[0];
                    g(e) ? b(e) : g(t) && b(t)
                },
                H = (n(26), function(e) {
                    Object(_.a)(n, e);
                    var t = Object(N.a)(n);

                    function n(e) {
                        var r;
                        return Object(d.a)(this, n), (r = t.call(this, e)).componentDidMount = function() {
                            D(), setTimeout(r.changeSection, 1e3, r.state.section)
                        }, r.changeSection = function(e) {
                            r.updateSectionNameAndClearContent(e), setTimeout(r.updateSectionContent, r.state.timeToWaitTheCommadIsTyped + 100, e)
                        }, r.updateSectionNameAndClearContent = function(e) {
                            r.setState({
                                section: e,
                                sectionContent: ""
                            }), r.updateSectionName(e)
                        }, r.updateSectionName = function(e) {
                            var t = "cat " + e + ".txt",
                                n = r.state.timeToWaitTheCommadIsTyped / t.length;
                            r.textTyped.setState({
                                timeToWaitBetweenEachChar: n,
                                textInsideTerminalText: "",
                                charsToBeShowed: t.split("")
                            }), r.textTyped.componentDidMount()
                        }, r.updateSectionContent = function(e) {
                            r.setState({
                                sectionContent: j(e)
                            })
                        }, r.state = {
                            timeToWaitTheCommadIsTyped: 1e3,
                            section: "aboutme",
                            promptString: "[GhostFace]$ ",
                            sectionName: "",
                            sectionContent: ""
                        }, r
                    }
                    return Object(L.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsxs)("div", {
                                    className: "outputDiv",
                                    children: [Object(r.jsxs)("div", {
                                        className: "promptDiv",
                                        children: [Object(r.jsx)("p", {
                                            id: "promptText",
                                            children: this.state.promptString
                                        }), Object(r.jsx)(M, {
                                            ref: function(t) {
                                                return e.textTyped = t
                                            },
                                            totalTime: 0,
                                            text: ""
                                        })]
                                    }), Object(r.jsxs)("div", {
                                        id: "outputText",
                                        children: [Object(r.jsx)("br", {}), this.state.sectionContent]
                                    })]
                                }), Object(r.jsx)(r.Fragment, {
                                    children: Object(r.jsx)(A, {
                                        onClick: this.changeSection
                                    })
                                })]
                            })
                        }
                    }]), n
                }(o.a.Component)),
                F = (n(27), u((function() {
                    return Object(r.jsxs)("div", {
                        id: "terminalDialog",
                        children: [Object(r.jsx)("div", {
                            children: Object(r.jsx)(I, {
                                title: "Terminal"
                            })
                        }), Object(r.jsx)("div", {
                            className: "terminalScreen",
                            children: Object(r.jsx)(H, {})
                        })]
                    })
                }), {
                    dialogId: "terminalDialog",
                    elementThatCaptureTheClick: "topBar",
                    centerElement: !0
                }));
            c.a.render(Object(r.jsx)(o.a.StrictMode, {
                children: Object(r.jsx)(F, {})
            }), document.getElementById("root"))
        }
    },
    [
        [28, 1, 2]
    ]
]);
//# sourceMappingURL=main.03827946.chunk.js.map