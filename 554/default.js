(function (global, jQuery) {
	global.$_Tawk_AccountKey = '5a67ac584b401e45400c5653';
	global.$_Tawk_WidgetId = 'default';
	global.$_Tawk_Unstable = false;
	global.$_Tawk = global.$_Tawk || {};
	(function (global) {
		global.$_Tawk.widgetSettings = {
			"t": "inline",
			"h": 0,
			"w": 0,
			"minh": 40,
			"minw": 260,
			"pos": "br",
			"woc": "max",
			"dsw": false,
			"lc": "en",
			"hwol": false,
			"hwof": false,
			"hab": false,
			"dws": false,
			"hwt": true,
			"thm": {
				"hbg": "#76b51b",
				"htx": "#ffffff",
				"topc": 5,
				"btmc": 0,
				"aBblBg": "#6aa318",
				"aBblTx": "#ffffff",
				"vBblBg": "#e5e5e5",
				"vBblTx": "#333333"
			},
			"bbl": {
				"name": "42",
				"type": "gallery",
				"width": 142,
				"height": 70,
				"zIndex": 1,
				"rightOffset": 69,
				"bottomOffset": 44,
				"topOffset": 0,
				"leftOffset": 0,
				"rotate": 0
			},
			"mw": "round",
			"dw": "full",
			"wv": 5,
			"ws": null,
			"offlineForm": {
				"shortMessage": "Offline",
				"text": "Please fill out the form below and we will get back to you as soon as possible.",
				"fields": [{"label": "Name", "isRequired": true, "type": "name", "selections": []}, {
					"label": "Email",
					"isRequired": true,
					"type": "email",
					"selections": []
				}, {"label": "Message", "isRequired": true, "type": "message", "selections": []}]
			},
			"prechatForm": null,
			"onlineGreeting": {
				"shortMessage": "Online",
				"longMessage": "We are live and ready to have a video or voice call with you now. Please click one of the following buttons to start.",
				"actionMessage": "Type here and press enter.."
			},
			"awayGreeting": {"shortMessage": "Away", "longMessage": ""}
		};
	})(global);
	(function (b) {
		var a = {
			pluralFormFunction: function (a) {
				return 1 === a ? "one" : "other"
			}, form: {}
		};
		a.form.SaveButton = {message: "Save"};
		a.form.SubmitButton = {message: "Submit"};
		a.form.StartChatButton = {message: "Start Chat"};
		a.form.CancelButton = {message: "Cancel"};
		a.form.CloseButton = {message: "Close"};
		a.form.SendButton = {message: "Send"};
		a.form.NamePlaceholder = {message: "your name.."};
		a.form.EmailPlaceholder = {message: "your email.."};
		a.form.QuestionPlaceholder = {message: "your query.."};
		a.form.DepartmentsPlaceholder = {message: "select department.."};
		a.form.MessagePlaceholder = {message: "your message.."};
		a.form.NameErrorMessage = {message: "Name must be provided."};
		a.form.EmailErrorMessage = {message: "Invalid email address."};
		a.form.DepartmentsErrorMessage = {message: "Department is required."};
		a.form.QuestionErrorMessage = {message: "Question is required and must not be longer then 500 characters."};
		a.form.MessageErrorMessage = {message: "Message is required and must not be longer then 500 characters."};
		a.form.NameFormMessage = {message: "Please change your name so we can recognize you the next time."};
		a.form.EmailTranscriptFormMessage = {message: "Please fill out the form below to have this conversation sent to your email address."};
		a.form.PreChatFormMessage = {message: "Please fill out the form below to start chatting with the next available agent."};
		a.form.OfflineFormMessage = {message: "Please fill out the form below and we will get back to you as soon as possible."};
		a.form.PreChatFormMessageProfile = {message: "Please fill out the form below to start chatting with me."};
		a.form.OfflineMessageSent = {message: "Your message was sent successfully!"};
		a.form.OfflineMessageNotSent = {message: "Your message was not delivered, please retry"};
		a.form.EndChatTitle = {message: "Are you sure you want to end this chat?"};
		a.form.RequiredErrorMessage = {message: "This field is required"};
		a.form.PhoneErrorMessage = {message: "Invalid phone number"};
		a.form.saved = {message: "Saved"};
		a.form.errorSaving = {message: "Unable to save. Please try again"};
		a.form.visitButton = {message: "Visit VOOChat"};
		a.form.SubmittingProcess = {message: "Submitting"};
		a.form.EndingProcess = {message: "Ending"};
		a.form.SendingProcess = {message: "Sending"};
		a.form.SavingProcess = {message: "Saving"};
		a.form.EmailTranscriptTo = {message: "Email transcript to"};
		a.form.name = {message: "Name"};
		a.form.email = {message: "Email"};
		a.form.department = {message: "Department"};
		a.form.message = {message: "Message"};
		a.form.any = {message: "Any"};
		a.form.phone = {message: "Phone"};
		a.form.question = {message: "Question"};
		a.form.saving = {message: "Saving.."};
		a.form.SubmittedFrom = {message: "Submitted From"};
		a.form.sendAgain = {message: "Send Again"};
		a.rollover =
			{};
		a.rollover.popOut = {message: "Pop out"};
		a.rollover.minimize = {message: "Minimize"};
		a.rollover.resize = {message: "Resize"};
		a.rollover.resendMessage = {message: "Resend message"};
		a.rollover.emailTranscriptOption = {message: "Email Transcript"};
		a.rollover.positiveRating = {message: "Rate this conversation with +1"};
		a.rollover.negativeRating = {message: "Rate this conversation with -1"};
		a.rollover.maximize = {message: "Maximize"};
		a.rollover.end = {message: "End Chat"};
		a.rollover.uploadFile = {message: "Upload File"};
		a.rollover.videoCall =
			{message: "Video Call"};
		a.rollover.voiceCall = {message: "Voice Call"};
		a.rollover.screenShare = {message: "Screen Share"};
		a.transcript = {};
		a.transcript.transcriptSubject = {
			message: "Chat email transcript on #host started on #startedOn",
			vars: ["host", "startedOn"]
		};
		a.transcript.transcriptStartedOn = {message: "#dateString, at #time", vars: ["dateString", "time"]};
		a.transcript.me = {message: "Me"};
		a.transcript.CONVERSATION_STARTED_ON = {message: "Conversation started on"};
		a.overlay = {};
		a.overlay.inactive = {message: "Click here to reinitiate the chat"};
		a.overlay.maintenance = {message: "Chat is in maintenance"};
		a.overlay.cookiesOff = {message: "You can't use this chat because your browser's cookie functionality is turned off. Please turn it on and refresh your browser."};
		a.overlay.tawkContent = {message: "This widget is powered by VOOChat - a free messaging application that lets you monitor and engage with the visitors on your website."};
		a.chat = {};
		a.chat.visitor_name = {message: "Visitor name"};
		a.chat.like = {message: "You liked this conversation"};
		a.chat.dislike =
			{message: "You disliked this conversation"};
		a.chat.remove_rate = {message: "You removed your rating for this conversation"};
		a.chat.sayButton = {message: "Say"};
		a.chat.hideButton = {message: "Hide Chat"};
		a.chat.send_mail = {message: "Send Mail"};
		a.chat.AGENT_JOIN_CONVERSATION = {message: "#n has joined the conversation", vars: ["n"]};
		a.chat.AGENT_LEFT_CONVERSATION = {message: "#n has left the conversation", vars: ["n"]};
		a.chat.agentIsTyping = {
			message: "#strongStart #n #strongEnd is typing",
			vars: ["n", "strongStart", "strongEnd"]
		};
		a.chat.mobileAgentIsTyping = {message: "#n is typing..", vars: ["n"]};
		a.chat.defaultName = {message: "You (change name)"};
		a.chat.mobileEnterText = {message: "Say something..."};
		a.chat.messageQueuedTitile = {message: "message queued"};
		a.chat.live_chat = {message: "Live Chat"};
		a.chat.notificationTitle = {message: "notification"};
		a.chat.departmentIsOffline = {
			message: "Department #strongStart #departmentName #strongEnd is currently offline. You might be served by another department.",
			vars: ["departmentName", "strongStart", "strongEnd"]
		};
		a.chat.departmentIsAway = {
			message: "Department #strongStart #departmentName #strongEnd is currently away.",
			vars: ["departmentName", "strongStart", "strongEnd"]
		};
		a.chat.mobileName = {message: "You"};
		a.chat.chatEnded = {message: "Your chat has ended"};
		a.chat.newChat = {message: "Start New Chat"};
		a.chat.newMessages = {message: "New messages"};
		a.chat.say_something = {message: "Type here and press enter.."};
		a.chat.downloadFile = {message: "Download File"};
		a.chat.limit50 = {message: "The maximum file size is 50MB, please upload a smaller file."};
		a.chat.limit2 = {message: "The maximum file size is 2MB for mobile browsers, please upload a smaller file."};
		a.chat.generalUploadError = {
			message: 'Unable to upload file "#fileName", please try again.',
			vars: ["fileName"]
		};
		a.chat.retry = {message: "Retry."};
		a.chat.dragDropText = {message: "Drop files here to upload"};
		a.chat.pasted_image_title = {message: "Pasted image at #dateTime", vars: ["dateTime"]};
		a.chat.chat_qm = {message: "Chat?"};
		a.chat.we_are_live = {message: "We are live and ready to chat with you now. Say something to start a live chat."};
		a.chat.profile_prechat_text = {message: "Please fill out the form below to start chatting with me."};
		a.chat.incoming_call_message = {message: "Incoming Call"};
		a.chat.accept_call = {message: "Accept"};
		a.chat.decline_call = {message: "Decline"};
		a.chat.video_call_error = {message: "Video call is not available."};
		a.chat.voice_call_error = {message: "Voice call is not available."};
		a.chat.screen_share_error = {message: "Screen share is not available."};
		a.chat.message_too_long = {message: "Message cannot exceed 5000 characters"};
		a.chat.message_not_delivered = {message: "Message not delivered, click here to resend."};
		a.chat.visitor_ringing = {message: "Calling..."};
		a.chat.agent_ringing = {message: "Incoming Call"};
		a.chat.ongoing_call = {message: "Ongoing Call"};
		a.chat.completed_call = {message: "Call ended"};
		a.chat.missed_agent = {message: "Your call was missed"};
		a.chat.missed_visitor = {message: "You missed a call"};
		a.chat.rejected_call = {message: "You rejected this call"};
		a.chat.call_end_details = {
			message: "Started at #startedOn and lasted #duration",
			vars: ["startedOn", "duration"]
		};
		a.chat.call_started_on = {message: "Started at #startedOn", vars: ["startedOn"]};
		a.chat.error_title = {message: "Error"};
		a.chat.call_error_load = {message: "Unable to load call details."};
		a.status = {};
		a.status.online = {message: "Online"};
		a.status.away = {message: "Away"};
		a.status.offline = {message: "Offline"};
		a.months = {};
		a.months["0"] = {message: "January"};
		a.months["1"] = {message: "February"};
		a.months["2"] = {message: "March"};
		a.months["3"] = {message: "April"};
		a.months["4"] = {message: "May"};
		a.months["5"] =
			{message: "June"};
		a.months["6"] = {message: "July"};
		a.months["7"] = {message: "August"};
		a.months["8"] = {message: "September"};
		a.months["9"] = {message: "October"};
		a.months["10"] = {message: "November"};
		a.months["11"] = {message: "December"};
		a.days = {};
		a.days["0"] = {message: "Sunday"};
		a.days["1"] = {message: "Monday"};
		a.days["2"] = {message: "Tuesday"};
		a.days["3"] = {message: "Wednesday"};
		a.days["4"] = {message: "Thursday"};
		a.days["5"] = {message: "Friday"};
		a.days["6"] = {message: "Saturday"};
		a.menu = {};
		a.menu.change_name = {message: "Change Name"};
		a.menu.sound_on = {message: "Sound On"};
		a.menu.sound_off = {message: "Sound Off"};
		a.menu.about_tawk = {message: "About this app"};
		a.menu.print_transcript = {message: "Print Transcript"};
		a.menu.Options = {message: "Options"};
		a.menu.CloseMenu = {message: "Close menu"};
		a.menu.AgentList = {message: "Agent List"};
		a.notifications = {};
		a.notifications.maximum_file_upload_warning = {
			message: "#strongStartWarning :#strongEnd Sorry, file transfer is limited to #strongStart#limitFileNumber#strongEnd files at a time. Please try the following file(s) again :",
			vars: ["strongStart", "strongEnd", "limitFileNumber"]
		};
		a.notifications.maximum_size_upload_warning = {
			message: "#strongStartWarning :#strongEnd Sorry, file transfer is limited to #strongStart#limitFileSize#strongEnd per file. Please compress the following file(s) and try again.",
			vars: ["strongStart", "strongEnd", "limitFileSize"]
		};
		a.notifications.retry = {message: "Retry"};
		a.chat = a.chat || {};
		a.chat.messageQueuedText = {
			vars: ["strongStart", "strongEnd"], pluralVars: ["t"], message: {
				one: "Estimated wait time is #strongStart #t minute #strongEnd",
				other: "Estimated wait time is #strongStart #t minutes #strongEnd"
			}
		};
		a.chat.newMessage = {
			vars: [],
			pluralVars: ["num"],
			message: {one: "#num new message", other: "#num new messages"}
		};
		a.chat.seconds = {vars: [], pluralVars: ["num"], message: {one: "#num second", other: "#num seconds"}};
		a.chat.minutes = {vars: [], pluralVars: ["num"], message: {one: "#num minute", other: "#num minutes"}};
		a.chat.hours = {vars: [], pluralVars: ["num"], message: {one: "#num hour", other: "#num hours"}};
		b.$_Tawk.language = a;
		b.$_Tawk.languageUpdater && b.$_Tawk.languageUpdater()
	})("undefined" ===
	typeof global ? window : global);

	(function () {
		!function (w) {
			var g;
			"undefined" != typeof window ? g = window : "undefined" != typeof global ? g = global : "undefined" != typeof self && (g = self);
			g.$__TawkEngine = w()
		}(function () {
			return function g(l, p, d) {
				function e(h, u) {
					if (!p[h]) {
						if (!l[h]) {
							var b = "function" == typeof require && require;
							if (!u && b) return b(h, !0);
							if (c) return c(h, !0);
							throw Error("Cannot find module '" + h + "'");
						}
						b = p[h] = {exports: {}};
						l[h][0].call(b.exports, function (b) {
							var c = l[h][1][b];
							return e(c ? c : b)
						}, b, b.exports, g, l, p, d)
					}
					return p[h].exports
				}

				for (var c = "function" ==
					typeof require && require, h = 0; h < d.length; h++) e(d[h]);
				return e
			}({
				debug: [function (g, l, p) {
					l.exports = g("n9i2g6")
				}, {}],
				n9i2g6: [function (g, l, p) {
					l.exports = function () {
						return function () {
						}
					}
				}, {}],
				3: [function (g, l, p) {
					function d() {
					}

					l.exports = function (e, c, h) {
						function g(b, d) {
							if (0 >= g.count) throw Error("after called too many times");
							--g.count;
							b ? (l = !0, c(b), c = h) : 0 !== g.count || l || c(null, d)
						}

						var l = !1;
						h = h || d;
						g.count = e;
						return 0 === e ? c() : g
					}
				}, {}],
				4: [function (g, l, p) {
					l.exports = function (d, e, c) {
						var h = d.byteLength;
						e = e || 0;
						c = c || h;
						if (d.slice) return d.slice(e,
							c);
						0 > e && (e += h);
						0 > c && (c += h);
						c > h && (c = h);
						if (e >= h || e >= c || 0 === h) return new ArrayBuffer(0);
						d = new Uint8Array(d);
						for (var h = new Uint8Array(c - e), g = 0; e < c; e++, g++) h[g] = d[e];
						return h.buffer
					}
				}, {}],
				5: [function (g, l, p) {
					(function (d) {
						p.encode = function (e) {
							e = new Uint8Array(e);
							var c, h = e.length, g = "";
							for (c = 0; c < h; c += 3) g += d[e[c] >> 2], g += d[(e[c] & 3) << 4 | e[c + 1] >> 4], g += d[(e[c + 1] & 15) << 2 | e[c + 2] >> 6], g += d[e[c + 2] & 63];
							2 === h % 3 ? g = g.substring(0, g.length - 1) + "=" : 1 === h % 3 && (g = g.substring(0, g.length - 2) + "==");
							return g
						};
						p.decode = function (e) {
							var c =
								0.75 * e.length, h = e.length, g = 0, l, b, s, p;
							"=" === e[e.length - 1] && (c--, "=" === e[e.length - 2] && c--);
							for (var r = new ArrayBuffer(c), V = new Uint8Array(r), c = 0; c < h; c += 4) l = d.indexOf(e[c]), b = d.indexOf(e[c + 1]), s = d.indexOf(e[c + 2]), p = d.indexOf(e[c + 3]), V[g++] = l << 2 | b >> 4, V[g++] = (b & 15) << 4 | s >> 2, V[g++] = (s & 3) << 6 | p & 63;
							return r
						}
					})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
				}, {}],
				6: [function (g, l, p) {
					(function (d) {
						function e(b) {
							for (var v = 0; v < b.length; v++) {
								var c = b[v];
								if (c.buffer instanceof ArrayBuffer) {
									var d =
										c.buffer;
									if (c.byteLength !== d.byteLength) {
										var e = new Uint8Array(c.byteLength);
										e.set(new Uint8Array(d, c.byteOffset, c.byteLength));
										d = e.buffer
									}
									b[v] = d
								}
							}
						}

						function c(b, v) {
							v = v || {};
							var c = new g;
							e(b);
							for (var d = 0; d < b.length; d++) c.append(b[d]);
							return v.type ? c.getBlob(v.type) : c.getBlob()
						}

						function h(b, c) {
							e(b);
							return new Blob(b, c || {})
						}

						var g = d.BlobBuilder || d.WebKitBlobBuilder || d.MSBlobBuilder || d.MozBlobBuilder, p;
						try {
							p = 2 === (new Blob(["hi"])).size
						} catch (b) {
							p = !1
						}
						var s;
						if (s = p) try {
							s = 2 === (new Blob([new Uint8Array([1, 2])])).size
						} catch (G) {
							s =
								!1
						}
						var r = g && g.prototype.append && g.prototype.getBlob;
						d = p ? s ? d.Blob : h : r ? c : void 0;
						l.exports = d
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {}],
				7: [function (g, l, p) {
				}, {}],
				8: [function (g, l, p) {
					function d(e) {
						if (e) {
							for (var c in d.prototype) e[c] = d.prototype[c];
							return e
						}
					}

					l.exports = d;
					d.prototype.on = d.prototype.addEventListener = function (d, c) {
						this._callbacks = this._callbacks || {};
						(this._callbacks[d] = this._callbacks[d] || []).push(c);
						return this
					};
					d.prototype.once = function (d, c) {
						function h() {
							g.off(d,
								h);
							c.apply(this, arguments)
						}

						var g = this;
						this._callbacks = this._callbacks || {};
						h.fn = c;
						this.on(d, h);
						return this
					};
					d.prototype.off = d.prototype.removeListener = d.prototype.removeAllListeners = d.prototype.removeEventListener = function (d, c) {
						this._callbacks = this._callbacks || {};
						if (0 == arguments.length) return this._callbacks = {}, this;
						var h = this._callbacks[d];
						if (!h) return this;
						if (1 == arguments.length) return delete this._callbacks[d], this;
						for (var g, l = 0; l < h.length; l++) if (g = h[l], g === c || g.fn === c) {
							h.splice(l, 1);
							break
						}
						return this
					};
					d.prototype.emit = function (d) {
						this._callbacks = this._callbacks || {};
						var c = [].slice.call(arguments, 1), g = this._callbacks[d];
						if (g) for (var g = g.slice(0), l = 0, p = g.length; l < p; ++l) g[l].apply(this, c);
						return this
					};
					d.prototype.listeners = function (d) {
						this._callbacks = this._callbacks || {};
						return this._callbacks[d] || []
					};
					d.prototype.hasListeners = function (d) {
						return !!this.listeners(d).length
					}
				}, {}],
				9: [function (g, l, p) {
					l.exports = function (d, e) {
						var c = function () {
						};
						c.prototype = e.prototype;
						d.prototype = new c;
						d.prototype.constructor =
							d
					}
				}, {}],
				10: [function (g, l, p) {
					l.exports = g("./lib/")
				}, {"./lib/": 11}],
				11: [function (g, l, p) {
					l.exports = g("./socket");
					l.exports.parser = g("engine.io-parser")
				}, {"./socket": 12, "engine.io-parser": 20}],
				12: [function (g, l, p) {
					(function (d) {
						function e(b, c) {
							if (!(this instanceof e)) return new e(b, c);
							c = c || {};
							b && "object" == typeof b && (c = b, b = null);
							b ? (b = s(b), c.hostname = b.host, c.secure = "https" == b.protocol || "wss" == b.protocol, c.port = b.port, b.query && (c.query = b.query)) : c.host && (c.hostname = s(c.host).host);
							this.secure = null != c.secure ?
								c.secure : d.location && "https:" == location.protocol;
							c.hostname && !c.port && (c.port = this.secure ? "443" : "80");
							this.agent = c.agent || !1;
							this.hostname = c.hostname || (d.location ? location.hostname : "localhost");
							this.port = c.port || (d.location && location.port ? location.port : this.secure ? 443 : 80);
							this.query = c.query || {};
							"string" == typeof this.query && (this.query = r.decode(this.query));
							this.upgrade = !1 !== c.upgrade;
							this.path = (c.path || "/engine.io").replace(/\/$/, "") + "/";
							this.forceJSONP = !!c.forceJSONP;
							this.jsonp = !1 !== c.jsonp;
							this.forceBase64 =
								!!c.forceBase64;
							this.enablesXDR = !!c.enablesXDR;
							this.timestampParam = c.timestampParam || "t";
							this.timestampRequests = c.timestampRequests;
							this.transports = c.transports || ["polling", "websocket"];
							this.readyState = "";
							this.writeBuffer = [];
							this.policyPort = c.policyPort || 843;
							this.rememberUpgrade = c.rememberUpgrade || !1;
							this.binaryType = null;
							this.onlyBinaryUpgrades = c.onlyBinaryUpgrades;
							this.perMessageDeflate = !1 !== c.perMessageDeflate ? c.perMessageDeflate || {} : !1;
							!0 === this.perMessageDeflate && (this.perMessageDeflate = {});
							this.perMessageDeflate &&
							null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024);
							this.pfx = c.pfx || null;
							this.key = c.key || null;
							this.passphrase = c.passphrase || null;
							this.cert = c.cert || null;
							this.ca = c.ca || null;
							this.ciphers = c.ciphers || null;
							this.rejectUnauthorized = void 0 === c.rejectUnauthorized ? !0 : c.rejectUnauthorized;
							var g = "object" == typeof d && d;
							g.global === g && (c.extraHeaders && 0 < Object.keys(c.extraHeaders).length) && (this.extraHeaders = c.extraHeaders);
							this.open()
						}

						var c = g("./transports"), h = g("component-emitter"), p =
								g("debug")("engine.io-client:socket"), u = g("indexof"), b = g("engine.io-parser"),
							s = g("parseuri"), G = g("parsejson"), r = g("parseqs");
						l.exports = e;
						e.priorWebsocketSuccess = !1;
						h(e.prototype);
						e.protocol = b.protocol;
						e.Socket = e;
						e.Transport = g("./transport");
						e.transports = g("./transports");
						e.parser = g("engine.io-parser");
						e.prototype.createTransport = function (d) {
							p('creating transport "%s"', d);
							var e = this.query, g = {}, h;
							for (h in e) e.hasOwnProperty(h) && (g[h] = e[h]);
							g.EIO = b.protocol;
							g.transport = d;
							this.id && (g.sid = this.id);
							return new c[d]({
								agent: this.agent,
								hostname: this.hostname,
								port: this.port,
								secure: this.secure,
								path: this.path,
								query: g,
								forceJSONP: this.forceJSONP,
								jsonp: this.jsonp,
								forceBase64: this.forceBase64,
								enablesXDR: this.enablesXDR,
								timestampRequests: this.timestampRequests,
								timestampParam: this.timestampParam,
								policyPort: this.policyPort,
								socket: this,
								pfx: this.pfx,
								key: this.key,
								passphrase: this.passphrase,
								cert: this.cert,
								ca: this.ca,
								ciphers: this.ciphers,
								rejectUnauthorized: this.rejectUnauthorized,
								perMessageDeflate: this.perMessageDeflate,
								extraHeaders: this.extraHeaders
							})
						};
						e.prototype.open = function () {
							var b;
							if (this.rememberUpgrade && e.priorWebsocketSuccess && -1 != this.transports.indexOf("websocket")) b = "websocket"; else {
								if (0 === this.transports.length) {
									var c = this;
									setTimeout(function () {
										c.emit("error", "No transports available")
									}, 0);
									return
								}
								b = this.transports[0]
							}
							this.readyState = "opening";
							try {
								b = this.createTransport(b)
							} catch (d) {
								this.transports.shift();
								this.open();
								return
							}
							b.open();
							this.setTransport(b)
						};
						e.prototype.setTransport = function (b) {
							p("setting transport %s", b.name);
							var c = this;
							this.transport && (p("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners());
							this.transport = b;
							b.on("drain", function () {
								c.onDrain()
							}).on("packet", function (b) {
								c.onPacket(b)
							}).on("error", function (b) {
								c.onError(b)
							}).on("close", function () {
								c.onClose("transport close")
							})
						};
						e.prototype.probe = function (b) {
							function c() {
								if (u.onlyBinaryUpgrades) {
									var d = !this.supportsBinary && u.transport.supportsBinary;
									r = r || d
								}
								r || (p('probe transport "%s" opened', b), x.send([{type: "ping", data: "probe"}]),
									x.once("packet", function (c) {
										r || ("pong" == c.type && "probe" == c.data ? (p('probe transport "%s" pong', b), u.upgrading = !0, u.emit("upgrading", x), x && (e.priorWebsocketSuccess = "websocket" == x.name, p('pausing current transport "%s"', u.transport.name), u.transport.pause(function () {
											r || "closed" == u.readyState || (p("changing transport and sending upgrade packet"), s(), u.setTransport(x), x.send([{type: "upgrade"}]), u.emit("upgrade", x), x = null, u.upgrading = !1, u.flush())
										}))) : (p('probe transport "%s" failed', b), c = Error("probe error"),
											c.transport = x.name, u.emit("upgradeError", c)))
									}))
							}

							function d() {
								r || (r = !0, s(), x.close(), x = null)
							}

							function g(c) {
								var e = Error("probe error: " + c);
								e.transport = x.name;
								d();
								p('probe transport "%s" failed because of error: %s', b, c);
								u.emit("upgradeError", e)
							}

							function h() {
								g("transport closed")
							}

							function l() {
								g("socket closed")
							}

							function M(b) {
								x && b.name != x.name && (p('"%s" works - aborting "%s"', b.name, x.name), d())
							}

							function s() {
								x.removeListener("open", c);
								x.removeListener("error", g);
								x.removeListener("close", h);
								u.removeListener("close",
									l);
								u.removeListener("upgrading", M)
							}

							p('probing transport "%s"', b);
							var x = this.createTransport(b, {probe: 1}), r = !1, u = this;
							e.priorWebsocketSuccess = !1;
							x.once("open", c);
							x.once("error", g);
							x.once("close", h);
							this.once("close", l);
							this.once("upgrading", M);
							x.open()
						};
						e.prototype.onOpen = function () {
							p("socket open");
							this.readyState = "open";
							e.priorWebsocketSuccess = "websocket" == this.transport.name;
							this.emit("open");
							this.flush();
							if ("open" == this.readyState && this.upgrade && this.transport.pause) {
								p("starting upgrade probes");
								for (var b = 0, c = this.upgrades.length; b < c; b++) this.probe(this.upgrades[b])
							}
						};
						e.prototype.onPacket = function (b) {
							if ("opening" == this.readyState || "open" == this.readyState) switch (p('socket receive: type "%s", data "%s"', b.type, b.data), this.emit("packet", b), this.emit("heartbeat"), b.type) {
								case "open":
									this.onHandshake(G(b.data));
									break;
								case "pong":
									this.setPing();
									this.emit("pong");
									break;
								case "error":
									var c = Error("server error");
									c.code = b.data;
									this.onError(c);
									break;
								case "message":
									this.emit("data", b.data), this.emit("message",
										b.data)
							} else p('packet received with socket readyState "%s"', this.readyState)
						};
						e.prototype.onHandshake = function (b) {
							this.emit("handshake", b);
							this.id = b.sid;
							this.transport.query.sid = b.sid;
							this.upgrades = this.filterUpgrades(b.upgrades);
							this.pingInterval = b.pingInterval;
							this.pingTimeout = b.pingTimeout;
							this.onOpen();
							"closed" != this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
						};
						e.prototype.onHeartbeat = function (b) {
							clearTimeout(this.pingTimeoutTimer);
							var c = this;
							c.pingTimeoutTimer = setTimeout(function () {
								if ("closed" != c.readyState) c.onClose("ping timeout")
							}, b || c.pingInterval + c.pingTimeout)
						};
						e.prototype.setPing = function () {
							var b = this;
							clearTimeout(b.pingIntervalTimer);
							b.pingIntervalTimer = setTimeout(function () {
								p("writing ping packet - expecting pong within %sms", b.pingTimeout);
								b.ping();
								b.onHeartbeat(b.pingTimeout)
							}, b.pingInterval)
						};
						e.prototype.ping = function () {
							var b = this;
							this.sendPacket("ping", function () {
								b.emit("ping")
							})
						};
						e.prototype.onDrain = function () {
							this.writeBuffer.splice(0,
								this.prevBufferLen);
							this.prevBufferLen = 0;
							0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
						};
						e.prototype.flush = function () {
							"closed" != this.readyState && (this.transport.writable && !this.upgrading && this.writeBuffer.length) && (p("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
						};
						e.prototype.write = e.prototype.send = function (b, c, d) {
							this.sendPacket("message", b, c, d);
							return this
						};
						e.prototype.sendPacket =
							function (b, c, d, e) {
								"function" == typeof c && (e = c, c = void 0);
								"function" == typeof d && (e = d, d = null);
								if ("closing" != this.readyState && "closed" != this.readyState) {
									d = d || {};
									d.compress = !1 !== d.compress;
									b = {type: b, data: c, options: d};
									this.emit("packetCreate", b);
									this.writeBuffer.push(b);
									if (e) this.once("flush", e);
									this.flush()
								}
							};
						e.prototype.close = function () {
							function b() {
								e.onClose("forced close");
								p("socket closing - telling transport to close");
								e.transport.close()
							}

							function c() {
								e.removeListener("upgrade", c);
								e.removeListener("upgradeError",
									c);
								b()
							}

							function d() {
								e.once("upgrade", c);
								e.once("upgradeError", c)
							}

							if ("opening" == this.readyState || "open" == this.readyState) {
								this.readyState = "closing";
								var e = this;
								if (this.writeBuffer.length) this.once("drain", function () {
									this.upgrading ? d() : b()
								}); else this.upgrading ? d() : b()
							}
							return this
						};
						e.prototype.onError = function (b) {
							p("socket error %j", b);
							e.priorWebsocketSuccess = !1;
							this.emit("error", b);
							this.onClose("transport error", b)
						};
						e.prototype.onClose = function (b, c) {
							if ("opening" == this.readyState || "open" == this.readyState ||
								"closing" == this.readyState) p('socket close with reason: "%s"', b), clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", b, c), this.writeBuffer = [], this.prevBufferLen = 0
						};
						e.prototype.filterUpgrades = function (b) {
							for (var c = [], d = 0, e = b.length; d < e; d++) ~u(this.transports, b[d]) && c.push(b[d]);
							return c
						}
					}).call(this, "undefined" !== typeof self ?
						self : "undefined" !== typeof window ? window : {})
				}, {
					"./transport": 13,
					"./transports": 14,
					"component-emitter": 8,
					debug: "n9i2g6",
					"engine.io-parser": 20,
					indexof: 24,
					parsejson: 26,
					parseqs: 27,
					parseuri: 28
				}],
				13: [function (g, l, p) {
					function d(c) {
						this.path = c.path;
						this.hostname = c.hostname;
						this.port = c.port;
						this.secure = c.secure;
						this.query = c.query;
						this.timestampParam = c.timestampParam;
						this.timestampRequests = c.timestampRequests;
						this.readyState = "";
						this.agent = c.agent || !1;
						this.socket = c.socket;
						this.enablesXDR = c.enablesXDR;
						this.pfx =
							c.pfx;
						this.key = c.key;
						this.passphrase = c.passphrase;
						this.cert = c.cert;
						this.ca = c.ca;
						this.ciphers = c.ciphers;
						this.rejectUnauthorized = c.rejectUnauthorized;
						this.extraHeaders = c.extraHeaders
					}

					var e = g("engine.io-parser");
					g = g("component-emitter");
					l.exports = d;
					g(d.prototype);
					d.prototype.onError = function (c, d) {
						var e = Error(c);
						e.type = "TransportError";
						e.description = d;
						this.emit("error", e);
						return this
					};
					d.prototype.open = function () {
						if ("closed" == this.readyState || "" == this.readyState) this.readyState = "opening", this.doOpen();
						return this
					};
					d.prototype.close = function () {
						if ("opening" == this.readyState || "open" == this.readyState) this.doClose(), this.onClose();
						return this
					};
					d.prototype.send = function (c) {
						if ("open" == this.readyState) this.write(c); else throw Error("Transport not open");
					};
					d.prototype.onOpen = function () {
						this.readyState = "open";
						this.writable = !0;
						this.emit("open")
					};
					d.prototype.onData = function (c) {
						c = e.decodePacket(c, this.socket.binaryType);
						this.onPacket(c)
					};
					d.prototype.onPacket = function (c) {
						this.emit("packet", c)
					};
					d.prototype.onClose =
						function () {
							this.readyState = "closed";
							this.emit("close")
						}
				}, {"component-emitter": 8, "engine.io-parser": 20}],
				14: [function (g, l, p) {
					(function (d) {
						var e = g("xmlhttprequest-ssl"), c = g("./polling-xhr"), h = g("./polling-jsonp"),
							l = g("./websocket");
						p.polling = function (g) {
							var b = !1, l = !1, p = !1 !== g.jsonp;
							d.location && (l = "https:" == location.protocol, (b = location.port) || (b = l ? 443 : 80), b = g.hostname != location.hostname || b != g.port, l = g.secure != l);
							g.xdomain = b;
							g.xscheme = l;
							if ("open" in new e(g) && !g.forceJSONP) return new c(g);
							if (!p) throw Error("JSONP disabled");
							return new h(g)
						};
						p.websocket = l
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {"./polling-jsonp": 15, "./polling-xhr": 16, "./websocket": 18, "xmlhttprequest-ssl": 19}],
				15: [function (g, l, p) {
					(function (d) {
						function e() {
						}

						function c(b) {
							h.call(this, b);
							this.query = this.query || {};
							s || (d.___eio || (d.___eio = []), s = d.___eio);
							this.index = s.length;
							var c = this;
							s.push(function (b) {
								c.onData(b)
							});
							this.query.j = this.index;
							d.document && d.addEventListener && d.addEventListener("beforeunload", function () {
								c.script &&
								(c.script.onerror = e)
							}, !1)
						}

						var h = g("./polling"), p = g("component-inherit");
						l.exports = c;
						var u = /\n/g, b = /\\n/g, s;
						p(c, h);
						c.prototype.supportsBinary = !1;
						c.prototype.doClose = function () {
							this.script && (this.script.parentNode.removeChild(this.script), this.script = null);
							this.form && (this.form.parentNode.removeChild(this.form), this.iframe = this.form = null);
							h.prototype.doClose.call(this)
						};
						c.prototype.doPoll = function () {
							var b = this, c = document.createElement("script");
							this.script && (this.script.parentNode.removeChild(this.script),
								this.script = null);
							c.async = !0;
							c.src = this.uri();
							c.onerror = function (c) {
								b.onError("jsonp poll error", c)
							};
							var d = document.getElementsByTagName("script")[0];
							d ? d.parentNode.insertBefore(c, d) : (document.head || document.body).appendChild(c);
							this.script = c;
							"undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
								var b = document.createElement("iframe");
								document.body.appendChild(b);
								document.body.removeChild(b)
							}, 100)
						};
						c.prototype.doWrite = function (c, d) {
							function e() {
								g();
								d()
							}

							function g() {
								if (h.iframe) try {
									h.form.removeChild(h.iframe)
								} catch (b) {
									h.onError("jsonp polling iframe removal error",
										b)
								}
								try {
									M = document.createElement('<iframe src="javascript:0" name="' + h.iframeId + '">')
								} catch (c) {
									M = document.createElement("iframe"), M.name = h.iframeId, M.src = "javascript:0"
								}
								M.id = h.iframeId;
								h.form.appendChild(M);
								h.iframe = M
							}

							var h = this;
							if (!this.form) {
								var l = document.createElement("form"), p = document.createElement("textarea"),
									s = this.iframeId = "eio_iframe_" + this.index, M;
								l.className = "socketio";
								l.style.position = "absolute";
								l.style.top = "-1000px";
								l.style.left = "-1000px";
								l.target = s;
								l.method = "POST";
								l.setAttribute("accept-charset",
									"utf-8");
								p.name = "d";
								l.appendChild(p);
								document.body.appendChild(l);
								this.form = l;
								this.area = p
							}
							this.form.action = this.uri();
							g();
							c = c.replace(b, "\\\n");
							this.area.value = c.replace(u, "\\n");
							try {
								this.form.submit()
							} catch (K) {
							}
							this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
								"complete" == h.iframe.readyState && e()
							} : this.iframe.onload = e
						}
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {"./polling": 17, "component-inherit": 9}],
				16: [function (g, l, p) {
					(function (d) {
						function e() {
						}

						function c(c) {
							b.call(this, c);
							if (d.location) {
								var e = "https:" == location.protocol, g = location.port;
								g || (g = e ? 443 : 80);
								this.xd = c.hostname != d.location.hostname || g != c.port;
								this.xs = c.secure != e
							} else this.extraHeaders = c.extraHeaders
						}

						function h(b) {
							this.method = b.method || "GET";
							this.uri = b.uri;
							this.xd = !!b.xd;
							this.xs = !!b.xs;
							this.async = !1 !== b.async;
							this.data = void 0 != b.data ? b.data : null;
							this.agent = b.agent;
							this.isBinary = b.isBinary;
							this.supportsBinary = b.supportsBinary;
							this.enablesXDR = b.enablesXDR;
							this.pfx = b.pfx;
							this.key =
								b.key;
							this.passphrase = b.passphrase;
							this.cert = b.cert;
							this.ca = b.ca;
							this.ciphers = b.ciphers;
							this.rejectUnauthorized = b.rejectUnauthorized;
							this.extraHeaders = b.extraHeaders;
							this.create()
						}

						function p() {
							for (var b in h.requests) h.requests.hasOwnProperty(b) && h.requests[b].abort()
						}

						var u = g("xmlhttprequest-ssl"), b = g("./polling"), s = g("component-emitter"),
							G = g("component-inherit"), r = g("debug")("engine.io-client:polling-xhr");
						l.exports = c;
						l.exports.Request = h;
						G(c, b);
						c.prototype.supportsBinary = !0;
						c.prototype.request = function (b) {
							b =
								b || {};
							b.uri = this.uri();
							b.xd = this.xd;
							b.xs = this.xs;
							b.agent = this.agent || !1;
							b.supportsBinary = this.supportsBinary;
							b.enablesXDR = this.enablesXDR;
							b.pfx = this.pfx;
							b.key = this.key;
							b.passphrase = this.passphrase;
							b.cert = this.cert;
							b.ca = this.ca;
							b.ciphers = this.ciphers;
							b.rejectUnauthorized = this.rejectUnauthorized;
							b.extraHeaders = this.extraHeaders;
							return new h(b)
						};
						c.prototype.doWrite = function (b, c) {
							var d = this.request({
								method: "POST",
								data: b,
								isBinary: "string" !== typeof b && void 0 !== b
							}), e = this;
							d.on("success", c);
							d.on("error",
								function (b) {
									e.onError("xhr post error", b)
								});
							this.sendXhr = d
						};
						c.prototype.doPoll = function () {
							r("xhr poll");
							var b = this.request(), c = this;
							b.on("data", function (b) {
								c.onData(b)
							});
							b.on("error", function (b) {
								c.onError("xhr poll error", b)
							});
							this.pollXhr = b
						};
						s(h.prototype);
						h.prototype.create = function () {
							var b = {
								agent: this.agent,
								xdomain: this.xd,
								xscheme: this.xs,
								enablesXDR: this.enablesXDR
							};
							b.pfx = this.pfx;
							b.key = this.key;
							b.passphrase = this.passphrase;
							b.cert = this.cert;
							b.ca = this.ca;
							b.ciphers = this.ciphers;
							b.rejectUnauthorized =
								this.rejectUnauthorized;
							var c = this.xhr = new u(b), e = this;
							try {
								r("xhr open %s: %s", this.method, this.uri);
								c.open(this.method, this.uri, this.async);
								try {
									if (this.extraHeaders) {
										c.setDisableHeaderCheck(!0);
										for (var g in this.extraHeaders) this.extraHeaders.hasOwnProperty(g) && c.setRequestHeader(g, this.extraHeaders[g])
									}
								} catch (l) {
								}
								this.supportsBinary && (c.responseType = "arraybuffer");
								if ("POST" == this.method) try {
									this.isBinary ? c.setRequestHeader("Content-type", "application/octet-stream") : c.setRequestHeader("Content-type",
										"text/plain;charset=UTF-8")
								} catch (p) {
								}
								"withCredentials" in c && (c.withCredentials = !0);
								this.hasXDR() ? (c.onload = function () {
									e.onLoad()
								}, c.onerror = function () {
									e.onError(c.responseText)
								}) : c.onreadystatechange = function () {
									if (4 == c.readyState) if (200 == c.status || 1223 == c.status) e.onLoad(); else setTimeout(function () {
										e.onError(c.status)
									}, 0)
								};
								r("xhr data %s", this.data);
								c.send(this.data)
							} catch (M) {
								setTimeout(function () {
									e.onError(M)
								}, 0);
								return
							}
							d.document && (this.index = h.requestsCount++, h.requests[this.index] = this)
						};
						h.prototype.onSuccess =
							function () {
								this.emit("success");
								this.cleanup()
							};
						h.prototype.onData = function (b) {
							this.emit("data", b);
							this.onSuccess()
						};
						h.prototype.onError = function (b) {
							this.emit("error", b);
							this.cleanup(!0)
						};
						h.prototype.cleanup = function (b) {
							if ("undefined" != typeof this.xhr && null !== this.xhr) {
								this.hasXDR() ? this.xhr.onload = this.xhr.onerror = e : this.xhr.onreadystatechange = e;
								if (b) try {
									this.xhr.abort()
								} catch (c) {
								}
								d.document && delete h.requests[this.index];
								this.xhr = null
							}
						};
						h.prototype.onLoad = function () {
							var b;
							try {
								var c;
								try {
									c = this.xhr.getResponseHeader("Content-Type").split(";")[0]
								} catch (d) {
								}
								if ("application/octet-stream" ===
									c) b = this.xhr.response; else if (this.supportsBinary) try {
									b = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
								} catch (e) {
									var g = new Uint8Array(this.xhr.response);
									c = [];
									for (var h = 0, l = g.length; h < l; h++) c.push(g[h]);
									b = String.fromCharCode.apply(null, c)
								} else b = this.xhr.responseText
							} catch (p) {
								this.onError(p)
							}
							if (null != b) this.onData(b)
						};
						h.prototype.hasXDR = function () {
							return "undefined" !== typeof d.XDomainRequest && !this.xs && this.enablesXDR
						};
						h.prototype.abort = function () {
							this.cleanup()
						};
						d.document && (h.requestsCount =
							0, h.requests = {}, d.attachEvent ? d.attachEvent("onunload", p) : d.addEventListener && d.addEventListener("beforeunload", p, !1))
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {
					"./polling": 17,
					"component-emitter": 8,
					"component-inherit": 9,
					debug: "n9i2g6",
					"xmlhttprequest-ssl": 19
				}],
				17: [function (g, l, p) {
					function d(c) {
						var d = c && c.forceBase64;
						if (!b || d) this.supportsBinary = !1;
						e.call(this, c)
					}

					var e = g("../transport"), c = g("parseqs"), h = g("engine.io-parser");
					p = g("component-inherit");
					var I =
						g("yeast"), u = g("debug")("engine.io-client:polling");
					l.exports = d;
					var b = null != (new (g("xmlhttprequest-ssl"))({xdomain: !1})).responseType;
					p(d, e);
					d.prototype.name = "polling";
					d.prototype.doOpen = function () {
						this.poll()
					};
					d.prototype.pause = function (b) {
						function c() {
							u("paused");
							d.readyState = "paused";
							b()
						}

						var d = this;
						this.readyState = "pausing";
						if (this.polling || !this.writable) {
							var e = 0;
							this.polling && (u("we are currently polling - waiting to pause"), e++, this.once("pollComplete", function () {
								u("pre-pause polling complete");
								--e || c()
							}));
							this.writable || (u("we are currently writing - waiting to pause"), e++, this.once("drain", function () {
								u("pre-pause writing complete");
								--e || c()
							}))
						} else c()
					};
					d.prototype.poll = function () {
						u("polling");
						this.polling = !0;
						this.doPoll();
						this.emit("poll")
					};
					d.prototype.onData = function (b) {
						var c = this;
						u("polling got data %s", b);
						h.decodePayload(b, this.socket.binaryType, function (b, d, e) {
							if ("opening" == c.readyState) c.onOpen();
							if ("close" == b.type) return c.onClose(), !1;
							c.onPacket(b)
						});
						"closed" != this.readyState &&
						(this.polling = !1, this.emit("pollComplete"), "open" == this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState))
					};
					d.prototype.doClose = function () {
						function b() {
							u("writing close packet");
							c.write([{type: "close"}])
						}

						var c = this;
						"open" == this.readyState ? (u("transport open - closing"), b()) : (u("transport not open - deferring close"), this.once("open", b))
					};
					d.prototype.write = function (b) {
						var c = this;
						this.writable = !1;
						var d = function () {
							c.writable = !0;
							c.emit("drain")
						}, c = this;
						h.encodePayload(b,
							this.supportsBinary, function (b) {
								c.doWrite(b, d)
							})
					};
					d.prototype.uri = function () {
						var b = this.query || {}, d = this.secure ? "https" : "http", e = "";
						!1 !== this.timestampRequests && (b[this.timestampParam] = I());
						this.supportsBinary || b.sid || (b.b64 = 1);
						b = c.encode(b);
						this.port && ("https" == d && 443 != this.port || "http" == d && 80 != this.port) && (e = ":" + this.port);
						b.length && (b = "?" + b);
						var g = -1 !== this.hostname.indexOf(":");
						return d + "://" + (g ? "[" + this.hostname + "]" : this.hostname) + e + this.path + b
					}
				}, {
					"../transport": 13, "component-inherit": 9, debug: "n9i2g6",
					"engine.io-parser": 20, parseqs: 27, "xmlhttprequest-ssl": 19, yeast: 30
				}],
				18: [function (g, l, p) {
					(function (d) {
						function e(b) {
							b && b.forceBase64 && (this.supportsBinary = !1);
							this.perMessageDeflate = b.perMessageDeflate;
							c.call(this, b)
						}

						var c = g("../transport"), h = g("engine.io-parser"), p = g("parseqs"),
							u = g("component-inherit"), b = g("yeast"), s = g("debug")("engine.io-client:websocket"),
							G = d.WebSocket || d.MozWebSocket, r = G;
						if (!r && "undefined" === typeof window) try {
							r = g("ws")
						} catch (V) {
						}
						l.exports = e;
						u(e, c);
						e.prototype.name = "websocket";
						e.prototype.supportsBinary = !0;
						e.prototype.doOpen = function () {
							if (this.check()) {
								var b = this.uri(), c = {agent: this.agent, perMessageDeflate: this.perMessageDeflate};
								c.pfx = this.pfx;
								c.key = this.key;
								c.passphrase = this.passphrase;
								c.cert = this.cert;
								c.ca = this.ca;
								c.ciphers = this.ciphers;
								c.rejectUnauthorized = this.rejectUnauthorized;
								this.extraHeaders && (c.headers = this.extraHeaders);
								this.ws = G ? new r(b) : new r(b, void 0, c);
								void 0 === this.ws.binaryType && (this.supportsBinary = !1);
								this.ws.supports && this.ws.supports.binary ? (this.supportsBinary =
									!0, this.ws.binaryType = "buffer") : this.ws.binaryType = "arraybuffer";
								this.addEventListeners()
							}
						};
						e.prototype.addEventListeners = function () {
							var b = this;
							this.ws.onopen = function () {
								b.onOpen()
							};
							this.ws.onclose = function () {
								b.onClose()
							};
							this.ws.onmessage = function (c) {
								b.onData(c.data)
							};
							this.ws.onerror = function (c) {
								b.onError("websocket error", c)
							}
						};
						"undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent) && (e.prototype.onData = function (b) {
							var d = this;
							setTimeout(function () {
									c.prototype.onData.call(d, b)
								},
								0)
						});
						e.prototype.write = function (b) {
							function c() {
								e.emit("flush");
								setTimeout(function () {
									e.writable = !0;
									e.emit("drain")
								}, 0)
							}

							var e = this;
							this.writable = !1;
							for (var g = b.length, l = 0, p = g; l < p; l++) (function (b) {
								h.encodePacket(b, e.supportsBinary, function (h) {
									if (!G) {
										var l = {};
										b.options && (l.compress = b.options.compress);
										e.perMessageDeflate && ("string" == typeof h ? d.Buffer.byteLength(h) : h.length) < e.perMessageDeflate.threshold && (l.compress = !1)
									}
									try {
										G ? e.ws.send(h) : e.ws.send(h, l)
									} catch (p) {
										s("websocket closed before onclose event")
									}
									--g ||
									c()
								})
							})(b[l])
						};
						e.prototype.onClose = function () {
							c.prototype.onClose.call(this)
						};
						e.prototype.doClose = function () {
							"undefined" !== typeof this.ws && this.ws.close()
						};
						e.prototype.uri = function () {
							var c = this.query || {}, d = this.secure ? "wss" : "ws", e = "";
							this.port && ("wss" == d && 443 != this.port || "ws" == d && 80 != this.port) && (e = ":" + this.port);
							this.timestampRequests && (c[this.timestampParam] = b());
							this.supportsBinary || (c.b64 = 1);
							c = p.encode(c);
							c.length && (c = "?" + c);
							var g = -1 !== this.hostname.indexOf(":");
							return d + "://" + (g ? "[" + this.hostname +
								"]" : this.hostname) + e + this.path + c
						};
						e.prototype.check = function () {
							return !!r && !("__initialize" in r && this.name === e.prototype.name)
						}
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {
					"../transport": 13,
					"component-inherit": 9,
					debug: "n9i2g6",
					"engine.io-parser": 20,
					parseqs: 27,
					ws: 7,
					yeast: 30
				}],
				19: [function (g, l, p) {
					var d = g("has-cors");
					l.exports = function (e) {
						var c = e.xdomain, g = e.xscheme;
						e = e.enablesXDR;
						try {
							if ("undefined" != typeof XMLHttpRequest && (!c || d)) return new XMLHttpRequest
						} catch (l) {
						}
						try {
							if ("undefined" !=
								typeof XDomainRequest && !g && e) return new XDomainRequest
						} catch (p) {
						}
						if (!c) try {
							return new ActiveXObject("Microsoft.XMLHTTP")
						} catch (b) {
						}
					}
				}, {"has-cors": 23}],
				20: [function (g, l, p) {
					(function (d) {
						function e(b, c, d) {
							if (!c) return p.encodeBase64Packet(b, d);
							var e = new FileReader;
							e.onload = function () {
								b.data = e.result;
								p.encodePacket(b, c, !0, d)
							};
							return e.readAsArrayBuffer(b.data)
						}

						function c(b, c, d) {
							var e = Array(b.length);
							d = s(b.length, d);
							for (var g = function (b, d, g) {
								c(d, function (c, d) {
									e[b] = d;
									g(c, e)
								})
							}, h = 0; h < b.length; h++) g(h, b[h],
								d)
						}

						var h = g("./keys"), l = g("has-binary"), u = g("arraybuffer.slice"),
							b = g("base64-arraybuffer"), s = g("after"), G = g("utf8"),
							r = navigator.userAgent.match(/Android/i), V = /PhantomJS/i.test(navigator.userAgent),
							v = r || V;
						p.protocol = 3;
						var E = p.packets = {open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6},
							F = h(E), N = {type: "error", data: "parser error"}, L = g("blob");
						p.encodePacket = function (b, c, g, h) {
							"function" == typeof c && (h = c, c = !1);
							"function" == typeof g && (h = g, g = null);
							var l = void 0 === b.data ? void 0 : b.data.buffer || b.data;
							if (d.ArrayBuffer &&
								l instanceof ArrayBuffer) {
								if (c) {
									g = b.data;
									c = new Uint8Array(g);
									g = new Uint8Array(1 + g.byteLength);
									g[0] = E[b.type];
									for (b = 0; b < c.length; b++) g[b + 1] = c[b];
									b = h(g.buffer)
								} else b = p.encodeBase64Packet(b, h);
								return b
							}
							if (L && l instanceof d.Blob) return c ? v ? b = e(b, c, h) : (c = new Uint8Array(1), c[0] = E[b.type], b = new L([c.buffer, b.data]), b = h(b)) : b = p.encodeBase64Packet(b, h), b;
							if (l && l.base64) return h("b" + p.packets[b.type] + b.data.data);
							c = E[b.type];
							void 0 !== b.data && (c += g ? G.encode(String(b.data)) : String(b.data));
							return h("" + c)
						};
						p.encodeBase64Packet =
							function (b, c) {
								var e = "b" + p.packets[b.type];
								if (L && b.data instanceof d.Blob) {
									var g = new FileReader;
									g.onload = function () {
										var b = g.result.split(",")[1];
										c(e + b)
									};
									return g.readAsDataURL(b.data)
								}
								var h;
								try {
									h = String.fromCharCode.apply(null, new Uint8Array(b.data))
								} catch (l) {
									h = new Uint8Array(b.data);
									for (var r = Array(h.length), s = 0; s < h.length; s++) r[s] = h[s];
									h = String.fromCharCode.apply(null, r)
								}
								e += d.btoa(h);
								return c(e)
							};
						p.decodePacket = function (b, c, d) {
							if ("string" == typeof b || void 0 === b) {
								if ("b" == b.charAt(0)) return p.decodeBase64Packet(b.substr(1),
									c);
								if (d) try {
									b = G.decode(b)
								} catch (e) {
									return N
								}
								d = b.charAt(0);
								return Number(d) == d && F[d] ? 1 < b.length ? {
									type: F[d],
									data: b.substring(1)
								} : {type: F[d]} : N
							}
							d = (new Uint8Array(b))[0];
							b = u(b, 1);
							L && "blob" === c && (b = new L([b]));
							return {type: F[d], data: b}
						};
						p.decodeBase64Packet = function (c, e) {
							var g = F[c.charAt(0)];
							if (!d.ArrayBuffer) return {type: g, data: {base64: !0, data: c.substr(1)}};
							var h = b.decode(c.substr(1));
							"blob" === e && L && (h = new L([h]));
							return {type: g, data: h}
						};
						p.encodePayload = function (b, d, e) {
							"function" == typeof d && (e = d, d = null);
							var g = l(b);
							if (d && g) return L && !v ? p.encodePayloadAsBlob(b, e) : p.encodePayloadAsArrayBuffer(b, e);
							if (!b.length) return e("0:");
							c(b, function (b, c) {
								p.encodePacket(b, g ? d : !1, !0, function (b) {
									c(null, b.length + ":" + b)
								})
							}, function (b, c) {
								return e(c.join(""))
							})
						};
						p.decodePayload = function (b, c, d) {
							if ("string" != typeof b) return p.decodePayloadAsBinary(b, c, d);
							"function" === typeof c && (d = c, c = null);
							var e;
							if ("" == b) return d(N, 0, 1);
							e = "";
							for (var g, h, l = 0, r = b.length; l < r; l++) if (h = b.charAt(l), ":" != h) e += h; else {
								if ("" == e || e != (g = Number(e))) return d(N,
									0, 1);
								h = b.substr(l + 1, g);
								if (e != h.length) return d(N, 0, 1);
								if (h.length) {
									e = p.decodePacket(h, c, !0);
									if (N.type == e.type && N.data == e.data) return d(N, 0, 1);
									if (!1 === d(e, l + g, r)) return
								}
								l += g;
								e = ""
							}
							if ("" != e) return d(N, 0, 1)
						};
						p.encodePayloadAsArrayBuffer = function (b, d) {
							if (!b.length) return d(new ArrayBuffer(0));
							c(b, function (b, c) {
								p.encodePacket(b, !0, !0, function (b) {
									return c(null, b)
								})
							}, function (b, c) {
								var e = c.reduce(function (b, c) {
										var d;
										d = "string" === typeof c ? c.length : c.byteLength;
										return b + d.toString().length + d + 2
									}, 0), g = new Uint8Array(e),
									h = 0;
								c.forEach(function (b) {
									var c = "string" === typeof b, d = b;
									if (c) {
										for (var d = new Uint8Array(b.length), e = 0; e < b.length; e++) d[e] = b.charCodeAt(e);
										d = d.buffer
									}
									c ? g[h++] = 0 : g[h++] = 1;
									b = d.byteLength.toString();
									for (e = 0; e < b.length; e++) g[h++] = parseInt(b[e]);
									g[h++] = 255;
									d = new Uint8Array(d);
									for (e = 0; e < d.length; e++) g[h++] = d[e]
								});
								return d(g.buffer)
							})
						};
						p.encodePayloadAsBlob = function (b, d) {
							c(b, function (b, c) {
								p.encodePacket(b, !0, !0, function (b) {
									var d = new Uint8Array(1);
									d[0] = 1;
									if ("string" === typeof b) {
										for (var e = new Uint8Array(b.length),
											     g = 0; g < b.length; g++) e[g] = b.charCodeAt(g);
										b = e.buffer;
										d[0] = 0
									}
									for (var e = (b instanceof ArrayBuffer ? b.byteLength : b.size).toString(), h = new Uint8Array(e.length + 1), g = 0; g < e.length; g++) h[g] = parseInt(e[g]);
									h[e.length] = 255;
									L && (b = new L([d.buffer, h.buffer, b]), c(null, b))
								})
							}, function (b, c) {
								return d(new L(c))
							})
						};
						p.decodePayloadAsBinary = function (b, c, d) {
							"function" === typeof c && (d = c, c = null);
							for (var e = [], g = !1; 0 < b.byteLength;) {
								for (var h = new Uint8Array(b), l = 0 === h[0], r = "", s = 1; 255 != h[s]; s++) {
									if (310 < r.length) {
										g = !0;
										break
									}
									r += h[s]
								}
								if (g) return d(N,
									0, 1);
								b = u(b, 2 + r.length);
								r = parseInt(r);
								h = u(b, 0, r);
								if (l) try {
									h = String.fromCharCode.apply(null, new Uint8Array(h))
								} catch (k) {
									for (l = new Uint8Array(h), h = "", s = 0; s < l.length; s++) h += String.fromCharCode(l[s])
								}
								e.push(h);
								b = u(b, r)
							}
							var v = e.length;
							e.forEach(function (b, e) {
								d(p.decodePacket(b, c, !0), e, v)
							})
						}
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {
					"./keys": 21,
					after: 3,
					"arraybuffer.slice": 4,
					"base64-arraybuffer": 5,
					blob: 6,
					"has-binary": 22,
					utf8: 29
				}],
				21: [function (g, l, p) {
					l.exports = Object.keys ||
						function (d) {
							var e = [], c = Object.prototype.hasOwnProperty, g;
							for (g in d) c.call(d, g) && e.push(g);
							return e
						}
				}, {}],
				22: [function (g, l, p) {
					(function (d) {
						var e = g("isarray");
						l.exports = function (c) {
							function g(c) {
								if (!c) return !1;
								if (d.Buffer && d.Buffer.isBuffer(c) || d.ArrayBuffer && c instanceof ArrayBuffer || d.Blob && c instanceof Blob || d.File && c instanceof File) return !0;
								if (e(c)) for (var l = 0; l < c.length; l++) {
									if (g(c[l])) return !0
								} else if (c && "object" == typeof c) for (l in c.toJSON && (c = c.toJSON()), c) if (Object.prototype.hasOwnProperty.call(c,
										l) && g(c[l])) return !0;
								return !1
							}

							return g(c)
						}
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {isarray: 25}],
				23: [function (g, l, p) {
					try {
						l.exports = "undefined" !== typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
					} catch (d) {
						l.exports = !1
					}
				}, {}],
				24: [function (g, l, p) {
					var d = [].indexOf;
					l.exports = function (e, c) {
						if (d) return e.indexOf(c);
						for (var g = 0; g < e.length; ++g) if (e[g] === c) return g;
						return -1
					}
				}, {}],
				25: [function (g, l, p) {
					l.exports = Array.isArray || function (d) {
						return "[object Array]" ==
							Object.prototype.toString.call(d)
					}
				}, {}],
				26: [function (g, l, p) {
					(function (d) {
						var e = /^[\],:{}\s]*$/, c = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
							g = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
							p = /(?:^|:|,)(?:\s*\[)+/g, u = /^\s+/, b = /\s+$/;
						l.exports = function (l) {
							if ("string" != typeof l || !l) return null;
							l = l.replace(u, "").replace(b, "");
							if (d.JSON && JSON.parse) return JSON.parse(l);
							if (e.test(l.replace(c, "@").replace(g, "]").replace(p, ""))) return (new Function("return " + l))()
						}
					}).call(this, "undefined" !==
					typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {}],
				27: [function (g, l, p) {
					p.encode = function (d) {
						var e = "", c;
						for (c in d) d.hasOwnProperty(c) && (e.length && (e += "&"), e += encodeURIComponent(c) + "=" + encodeURIComponent(d[c]));
						return e
					};
					p.decode = function (d) {
						var e = {};
						d = d.split("&");
						for (var c = 0, g = d.length; c < g; c++) {
							var l = d[c].split("=");
							e[decodeURIComponent(l[0])] = decodeURIComponent(l[1])
						}
						return e
					}
				}, {}],
				28: [function (g, l, p) {
					var d = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
						e = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");
					l.exports = function (c) {
						var g = c, l = c.indexOf("["), p = c.indexOf("]");
						-1 != l && -1 != p && (c = c.substring(0, l) + c.substring(l, p).replace(/:/g, ";") + c.substring(p, c.length));
						c = d.exec(c || "");
						for (var b = {}, s = 14; s--;) b[e[s]] = c[s] || "";
						-1 != l && -1 != p && (b.source = g, b.host = b.host.substring(1, b.host.length - 1).replace(/;/g, ":"), b.authority = b.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), b.ipv6uri =
							!0);
						return b
					}
				}, {}],
				29: [function (g, l, p) {
					(function (d) {
						(function (e) {
							function c(b) {
								for (var c = [], d = 0, e = b.length, g, h; d < e;) g = b.charCodeAt(d++), 55296 <= g && 56319 >= g && d < e ? (h = b.charCodeAt(d++), 56320 == (h & 64512) ? c.push(((g & 1023) << 10) + (h & 1023) + 65536) : (c.push(g), d--)) : c.push(g);
								return c
							}

							function g(b) {
								if (55296 <= b && 57343 >= b) throw Error("Lone surrogate U+" + b.toString(16).toUpperCase() + " is not a scalar value");
							}

							function I() {
								if (E >= v) throw Error("Invalid byte index");
								var b = V[E] & 255;
								E++;
								if (128 == (b & 192)) return b & 63;
								throw Error("Invalid continuation byte");
							}

							function u() {
								var b, c, d, e;
								if (E > v) throw Error("Invalid byte index");
								if (E == v) return !1;
								b = V[E] & 255;
								E++;
								if (0 == (b & 128)) return b;
								if (192 == (b & 224)) {
									c = I();
									b = (b & 31) << 6 | c;
									if (128 <= b) return b;
									throw Error("Invalid continuation byte");
								}
								if (224 == (b & 240)) {
									c = I();
									d = I();
									b = (b & 15) << 12 | c << 6 | d;
									if (2048 <= b) return g(b), b;
									throw Error("Invalid continuation byte");
								}
								if (240 == (b & 248) && (c = I(), d = I(), e = I(), b = (b & 15) << 18 | c << 12 | d << 6 | e, 65536 <= b && 1114111 >= b)) return b;
								throw Error("Invalid UTF-8 detected");
							}

							var b = "object" == typeof p && p, s = "object" ==
								typeof l && l && l.exports == b && l, G = "object" == typeof d && d;
							if (G.global === G || G.window === G) e = G;
							var r = String.fromCharCode, V, v, E, G = {
								version: "2.0.0", encode: function (b) {
									b = c(b);
									for (var d = b.length, e = -1, l, p = ""; ++e < d;) {
										l = b[e];
										if (0 == (l & 4294967168)) l = r(l); else {
											var s = "";
											0 == (l & 4294965248) ? s = r(l >> 6 & 31 | 192) : 0 == (l & 4294901760) ? (g(l), s = r(l >> 12 & 15 | 224), s += r(l >> 6 & 63 | 128)) : 0 == (l & 4292870144) && (s = r(l >> 18 & 7 | 240), s += r(l >> 12 & 63 | 128), s += r(l >> 6 & 63 | 128));
											l = s += r(l & 63 | 128)
										}
										p += l
									}
									return p
								}, decode: function (b) {
									V = c(b);
									v = V.length;
									E = 0;
									b = [];
									for (var d; !1 !== (d = u());) b.push(d);
									d = b.length;
									for (var e = -1, g, l = ""; ++e < d;) g = b[e], 65535 < g && (g -= 65536, l += r(g >>> 10 & 1023 | 55296), g = 56320 | g & 1023), l += r(g);
									return l
								}
							};
							if (b && !b.nodeType) if (s) s.exports = G; else {
								e = {}.hasOwnProperty;
								for (var F in G) e.call(G, F) && (b[F] = G[F])
							} else e.utf8 = G
						})(this)
					}).call(this, "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {})
				}, {}],
				30: [function (g, l, p) {
					function d(b) {
						var d = "";
						do d = c[b % h] + d, b = Math.floor(b / h); while (0 < b);
						return d
					}

					function e() {
						var b = d(+new Date);
						return b !==
						s ? (u = 0, s = b) : b + "." + d(u++)
					}

					for (var c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), h = 64, I = {}, u = 0, b = 0, s; b < h; b++) I[c[b]] = b;
					e.encode = d;
					e.decode = function (c) {
						var d = 0;
						for (b = 0; b < c.length; b++) d = d * h + I[c.charAt(b)];
						return d
					};
					l.exports = e
				}, {}]
			}, {}, [10])(10)
		})
	})();
	$_TAWK_JSON = {};
	(function () {
		function w(b, c) {
			function e(b) {
				if (e[b] !== X) return e[b];
				var d;
				if ("bug-string-char-index" == b) d = "a" != "a"[0]; else if ("json" == b) d = e("json-stringify") && e("json-parse"); else {
					var l;
					if ("json-stringify" == b) {
						d = c.stringify;
						var k = "function" == typeof d && Y;
						if (k) {
							(l = function () {
								return 1
							}).toJSON = l;
							try {
								k = "0" === d(0) && "0" === d(new g) && '""' == d(new h) && d(K) === X && d(X) === X && d() === X && "1" === d(l) && "[1]" == d([l]) && "[null]" == d([X]) && "null" == d(null) && "[null,null,null]" == d([X, K, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' ==
									d({a: [l, !0, !1, null, "\x00\b\n\f\r\t"]}) && "1" === d(null, l) && "[\n 1,\n 2\n]" == d([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new u(-864E13)) && '"+275760-09-13T00:00:00.000Z"' == d(new u(864E13)) && '"-000001-01-01T00:00:00.000Z"' == d(new u(-621987552E5)) && '"1969-12-31T23:59:59.999Z"' == d(new u(-1))
							} catch (m) {
								k = !1
							}
						}
						d = k
					}
					if ("json-parse" == b) {
						d = c.parse;
						if ("function" == typeof d) try {
							if (0 === d("0") && !d(!1)) {
								l = d('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
								var p = 5 == l.a.length && 1 === l.a[0];
								if (p) {
									try {
										p = !d('"\t"')
									} catch (t) {
									}
									if (p) try {
										p =
											1 !== d("01")
									} catch (v) {
									}
									if (p) try {
										p = 1 !== d("1.")
									} catch (x) {
									}
								}
							}
						} catch (w) {
							p = !1
						}
						d = p
					}
				}
				return e[b] = !!d
			}

			b || (b = d.Object());
			c || (c = d.Object());
			var g = b.Number || d.Number, h = b.String || d.String, p = b.Object || d.Object, u = b.Date || d.Date,
				F = b.SyntaxError || d.SyntaxError, N = b.TypeError || d.TypeError, L = b.Math || d.Math,
				M = b.JSON || d.JSON;
			"object" == typeof M && M && (c.stringify = M.stringify, c.parse = M.parse);
			var p = p.prototype, K = p.toString, x, I, X, Y = new u(-0xc782b5b800cec);
			try {
				Y = -109252 == Y.getUTCFullYear() && 0 === Y.getUTCMonth() && 1 === Y.getUTCDate() &&
					10 == Y.getUTCHours() && 37 == Y.getUTCMinutes() && 6 == Y.getUTCSeconds() && 708 == Y.getUTCMilliseconds()
			} catch (va) {
			}
			if (!e("json")) {
				var fa = e("bug-string-char-index");
				if (!Y) var T = L.floor, k = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
					A = function (b, c) {
						return k[c] + 365 * (b - 1970) + T((b - 1969 + (c = +(1 < c))) / 4) - T((b - 1901 + c) / 100) + T((b - 1601 + c) / 400)
					};
				(x = p.hasOwnProperty) || (x = function (b) {
					var c = {}, d;
					(c.__proto__ = null, c.__proto__ = {toString: 1}, c).toString != K ? x = function (b) {
						var c = this.__proto__;
						b = b in (this.__proto__ = null, this);
						this.__proto__ =
							c;
						return b
					} : (d = c.constructor, x = function (b) {
						var c = (this.constructor || d).prototype;
						return b in this && !(b in c && this[b] === c[b])
					});
					c = null;
					return x.call(this, b)
				});
				I = function (b, c) {
					var d = 0, e, g, k;
					(e = function () {
						this.valueOf = 0
					}).prototype.valueOf = 0;
					g = new e;
					for (k in g) x.call(g, k) && d++;
					e = g = null;
					d ? I = 2 == d ? function (b, c) {
						var d = {}, e = "[object Function]" == K.call(b), g;
						for (g in b) e && "prototype" == g || (x.call(d, g) || !(d[g] = 1) || !x.call(b, g)) || c(g)
					} : function (b, c) {
						var d = "[object Function]" == K.call(b), e, g;
						for (e in b) d && "prototype" ==
						e || (!x.call(b, e) || (g = "constructor" === e)) || c(e);
						(g || x.call(b, e = "constructor")) && c(e)
					} : (g = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), I = function (b, c) {
						var d = "[object Function]" == K.call(b), e,
							k = !d && "function" != typeof b.constructor && l[typeof b.hasOwnProperty] && b.hasOwnProperty || x;
						for (e in b) d && "prototype" == e || !k.call(b, e) || c(e);
						for (d = g.length; e = g[--d]; k.call(b, e) && c(e)) ;
					});
					return I(b, c)
				};
				if (!e("json-stringify")) {
					var W = {
						92: "\\\\", 34: '\\"', 8: "\\b",
						12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"
					}, y = function (b, c) {
						return ("000000" + (c || 0)).slice(-b)
					}, t = function (b) {
						for (var c = '"', d = 0, e = b.length, g = !fa || 10 < e, l = g && (fa ? b.split("") : b); d < e; d++) {
							var k = b.charCodeAt(d);
							switch (k) {
								case 8:
								case 9:
								case 10:
								case 12:
								case 13:
								case 34:
								case 92:
									c += W[k];
									break;
								default:
									if (32 > k) {
										c += "\\u00" + y(2, k.toString(16));
										break
									}
									c += g ? l[d] : b.charAt(d)
							}
						}
						return c + '"'
					}, ra = function (b, c, d, e, g, l, k) {
						var h, m, p, r, s, v, u, w, z;
						try {
							h = c[b]
						} catch (E) {
						}
						if ("object" == typeof h && h) if (m = K.call(h), "[object Date]" != m || x.call(h,
								"toJSON")) "function" == typeof h.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || x.call(h, "toJSON")) && (h = h.toJSON(b)); else if (h > -1 / 0 && h < 1 / 0) {
							if (A) {
								r = T(h / 864E5);
								for (m = T(r / 365.2425) + 1970 - 1; A(m + 1, 0) <= r; m++) ;
								for (p = T((r - A(m, 0)) / 30.42); A(m, p + 1) <= r; p++) ;
								r = 1 + r - A(m, p);
								s = (h % 864E5 + 864E5) % 864E5;
								v = T(s / 36E5) % 24;
								u = T(s / 6E4) % 60;
								w = T(s / 1E3) % 60;
								s %= 1E3
							} else m = h.getUTCFullYear(), p = h.getUTCMonth(), r = h.getUTCDate(), v = h.getUTCHours(), u = h.getUTCMinutes(), w = h.getUTCSeconds(), s = h.getUTCMilliseconds();
							h = (0 >= m || 1E4 <= m ? (0 > m ? "-" : "+") + y(6, 0 > m ? -m : m) : y(4, m)) + "-" + y(2, p + 1) + "-" + y(2, r) + "T" + y(2, v) + ":" + y(2, u) + ":" + y(2, w) + "." + y(3, s) + "Z"
						} else h = null;
						d && (h = d.call(c, b, h));
						if (null === h) return "null";
						m = K.call(h);
						if ("[object Boolean]" == m) return "" + h;
						if ("[object Number]" == m) return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
						if ("[object String]" == m) return t("" + h);
						if ("object" == typeof h) {
							for (b = k.length; b--;) if (k[b] === h) throw N();
							k.push(h);
							z = [];
							c = l;
							l += g;
							if ("[object Array]" == m) {
								p = 0;
								for (b = h.length; p < b; p++) m = ra(p, h, d, e, g, l, k), z.push(m === X ? "null" :
									m);
								b = z.length ? g ? "[\n" + l + z.join(",\n" + l) + "\n" + c + "]" : "[" + z.join(",") + "]" : "[]"
							} else I(e || h, function (b) {
								var c = ra(b, h, d, e, g, l, k);
								c !== X && z.push(t(b) + ":" + (g ? " " : "") + c)
							}), b = z.length ? g ? "{\n" + l + z.join(",\n" + l) + "\n" + c + "}" : "{" + z.join(",") + "}" : "{}";
							k.pop();
							return b
						}
					};
					c.stringify = function (b, c, d) {
						var e, g, h, k;
						if (l[typeof c] && c) if ("[object Function]" == (k = K.call(c))) g = c; else if ("[object Array]" == k) {
							h = {};
							for (var m = 0, p = c.length, r; m < p; r = c[m++], (k = K.call(r), "[object String]" == k || "[object Number]" == k) && (h[r] = 1)) ;
						}
						if (d) if ("[object Number]" ==
							(k = K.call(d))) {
							if (0 < (d -= d % 1)) for (e = "", 10 < d && (d = 10); e.length < d; e += " ") ;
						} else "[object String]" == k && (e = 10 >= d.length ? d : d.slice(0, 10));
						return ra("", (r = {}, r[""] = b, r), g, h, e, "", [])
					}
				}
				if (!e("json-parse")) {
					var Ca = h.fromCharCode,
						Da = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, z, m,
						Q = function () {
							z = m = null;
							throw F();
						}, ea = function () {
							for (var b = m, c = b.length, d, e, g, h, k; z < c;) switch (k = b.charCodeAt(z), k) {
								case 9:
								case 10:
								case 13:
								case 32:
									z++;
									break;
								case 123:
								case 125:
								case 91:
								case 93:
								case 58:
								case 44:
									return d =
										fa ? b.charAt(z) : b[z], z++, d;
								case 34:
									d = "@";
									for (z++; z < c;) if (k = b.charCodeAt(z), 32 > k) Q(); else if (92 == k) switch (k = b.charCodeAt(++z), k) {
										case 92:
										case 34:
										case 47:
										case 98:
										case 116:
										case 110:
										case 102:
										case 114:
											d += Da[k];
											z++;
											break;
										case 117:
											e = ++z;
											for (g = z + 4; z < g; z++) k = b.charCodeAt(z), 48 <= k && 57 >= k || (97 <= k && 102 >= k || 65 <= k && 70 >= k) || Q();
											d += Ca("0x" + b.slice(e, z));
											break;
										default:
											Q()
									} else {
										if (34 == k) break;
										k = b.charCodeAt(z);
										for (e = z; 32 <= k && 92 != k && 34 != k;) k = b.charCodeAt(++z);
										d += b.slice(e, z)
									}
									if (34 == b.charCodeAt(z)) return z++, d;
									Q();
								default:
									e =
										z;
									45 == k && (h = !0, k = b.charCodeAt(++z));
									if (48 <= k && 57 >= k) {
										for (48 == k && (k = b.charCodeAt(z + 1), 48 <= k && 57 >= k) && Q(); z < c && (k = b.charCodeAt(z), 48 <= k && 57 >= k); z++) ;
										if (46 == b.charCodeAt(z)) {
											for (g = ++z; g < c && (k = b.charCodeAt(g), 48 <= k && 57 >= k); g++) ;
											g == z && Q();
											z = g
										}
										k = b.charCodeAt(z);
										if (101 == k || 69 == k) {
											k = b.charCodeAt(++z);
											43 != k && 45 != k || z++;
											for (g = z; g < c && (k = b.charCodeAt(g), 48 <= k && 57 >= k); g++) ;
											g == z && Q();
											z = g
										}
										return +b.slice(e, z)
									}
									h && Q();
									if ("true" == b.slice(z, z + 4)) return z += 4, !0;
									if ("false" == b.slice(z, z + 5)) return z += 5, !1;
									if ("null" == b.slice(z,
											z + 4)) return z += 4, null;
									Q()
							}
							return "$"
						}, na = function (b) {
							var c, d;
							"$" == b && Q();
							if ("string" == typeof b) {
								if ("@" == (fa ? b.charAt(0) : b[0])) return b.slice(1);
								if ("[" == b) {
									for (c = []; ; d || (d = !0)) {
										b = ea();
										if ("]" == b) break;
										d && ("," == b ? (b = ea(), "]" == b && Q()) : Q());
										"," == b && Q();
										c.push(na(b))
									}
									return c
								}
								if ("{" == b) {
									for (c = {}; ; d || (d = !0)) {
										b = ea();
										if ("}" == b) break;
										d && ("," == b ? (b = ea(), "}" == b && Q()) : Q());
										"," != b && "string" == typeof b && "@" == (fa ? b.charAt(0) : b[0]) && ":" == ea() || Q();
										c[b.slice(1)] = na(ea())
									}
									return c
								}
								Q()
							}
							return b
						}, ja = function (b, c, d) {
							d = oa(b,
								c, d);
							d === X ? delete b[c] : b[c] = d
						}, oa = function (b, c, d) {
							var e = b[c], g;
							if ("object" == typeof e && e) if ("[object Array]" == K.call(e)) for (g = e.length; g--;) ja(e, g, d); else I(e, function (b) {
								ja(e, b, d)
							});
							return d.call(b, c, e)
						};
					c.parse = function (b, c) {
						var d, e;
						z = 0;
						m = "" + b;
						d = na(ea());
						"$" != ea() && Q();
						z = m = null;
						return c && "[object Function]" == K.call(c) ? oa((e = {}, e[""] = d, e), "", c) : d
					}
				}
			}
			c.runInContext = w;
			return c
		}

		var g = "function" === typeof define && define.amd, l = {"function": !0, object: !0},
			p = l[typeof exports] && exports && !exports.nodeType && exports,
			d = l[typeof window] && window || this,
			e = p && l[typeof module] && module && !module.nodeType && "object" == typeof global && global;
		!e || e.global !== e && e.window !== e && e.self !== e || (d = e);
		if (p && !g) var c = w(d, p); else var h = d.JSON, I = d.JSON3, u = !1, c = w(d, d.JSON3 = {
			noConflict: function () {
				u || (u = !0, d.JSON = h, d.JSON3 = I, h = I = null);
				return c
			}
		});
		$_TAWK_JSON = {parse: c.parse, stringify: c.stringify}
	}).call(this);
	(function (w) {
		"function" !== typeof Array.isArray && (Array.isArray = function (g) {
			return "[object Array]" === Object.prototype.toString.call(g)
		});
		Array.prototype.indexOf || (Array.prototype.indexOf = function (g) {
			for (var p = 0, d = this.length; p < d; p++) if (this[p] === g) return p;
			return -1
		});
		w = w.EventEmitter = function () {
		};
		var g = Array.isArray;
		w.prototype.emit = function (l) {
			var p;
			if ("error" === l && (!this._events || !this._events.error || g(this._events.error) && !this._events.error.length)) {
				if (arguments[1] instanceof Error) throw arguments[1];
				throw Error("Uncaught, unspecified 'error' event.");
			}
			if (!this._events) return !1;
			var d = this._events[l];
			if (!d) return !1;
			if ("function" == typeof d) {
				switch (arguments.length) {
					case 1:
						d.call(this);
						break;
					case 2:
						d.call(this, arguments[1]);
						break;
					case 3:
						d.call(this, arguments[1], arguments[2]);
						break;
					default:
						p = Array.prototype.slice.call(arguments, 1), d.apply(this, p)
				}
				return !0
			}
			if (g(d)) {
				p = Array.prototype.slice.call(arguments, 1);
				for (var d = d.slice(), e = 0, c = d.length; e < c; e++) d[e].apply(this, p);
				return !0
			}
			return !1
		};
		w.prototype.addListener =
			function (l, p) {
				if ("function" !== typeof p) throw Error("addListener only takes instances of Function");
				this._events || (this._events = {});
				this._events[l] ? g(this._events[l]) ? this._events[l].push(p) : this._events[l] = [this._events[l], p] : this._events[l] = p;
				return this
			};
		w.prototype.on = w.prototype.addListener;
		w.prototype.once = function (g, p) {
			var d = this;
			d.on(g, function c() {
				d.removeListener(g, c);
				p.apply(this, arguments)
			})
		};
		w.prototype.removeListener = function (l, p) {
			if ("function" !== typeof p) throw Error("removeListener only takes instances of Function");
			if (!this._events || !this._events[l]) return this;
			var d = this._events[l];
			if (g(d)) {
				var e = d.indexOf(p);
				if (0 > e) return this;
				d.splice(e, 1);
				0 === d.length && delete this._events[l]
			} else this._events[l] === p && delete this._events[l];
			return this
		};
		w.prototype.removeAllListeners = function (g) {
			g ? g && (this._events && this._events[g]) && (this._events[g] = null) : this._events = {};
			return this
		};
		w.prototype.listeners = function (l) {
			this._events || (this._events = {});
			this._events[l] || (this._events[l] = []);
			g(this._events[l]) || (this._events[l] =
				[this._events[l]]);
			return this._events[l]
		}
	})(window);
	(function (w) {
		function g(d, e) {
			if (!e.engineIo) throw Error("You must specify engineIo");
			e.timestampRequests = !0;
			e.timestampParam = "__t";
			this.__callbackIndex = 0;
			this.__callbacks = {};
			this.state = p.OPENING;
			this.socket = new e.engineIo(d, e);
			this.debug = !1;
			if (document.getElementById("tawk__dmz")) {
				var c = this;
				w.getSocketTransport = function () {
					if (c.socket.transport) return c.socket.transport.name
				}
			}
			document.location && "#!tawk-debug" === document.location.hash && (this.debug = !0);
			EventEmitter.call(this);
			this.attachListeners()
		}

		var l, p = {OPENING: "opening", OPEN: "open", CLOSING: "closing", CLOSED: "closed"};
		for (l in EventEmitter.prototype) "function" === typeof EventEmitter.prototype[l] && Object.prototype.hasOwnProperty.call(EventEmitter.prototype, l) && (g.prototype[l] = EventEmitter.prototype[l]);
		g.prototype.attachListeners = function () {
			var d = this;
			this.socket.on("open", function () {
				d.state = p.OPEN;
				d.emit("connect")
			});
			this.socket.on("close", function (e, c) {
				d.emit("disconnect", e, c);
				d.doClose()
			});
			this.socket.on("error", function (e) {
				d.emit("error",
					e)
			});
			this.socket.on("message", function (e) {
				d.onMessage(e)
			})
		};
		g.prototype.close = g.prototype.disconnect = function () {
			var d = this;
			this.state === p.OPENING && setTimeout(function () {
				d.close()
			}, 1E3);
			this.state === p.OPEN && (this.state = p.CLOSING, this.clearCallbacks(), this.socket.close())
		};
		g.prototype.doClose = function () {
			this.clearCallbacks();
			this.state = p.CLOSED;
			this.socket.removeAllListeners();
			this.removeAllListeners();
			this.socket = null
		};
		g.prototype.clearCallbacks = function () {
			this.__callbacks = {}
		};
		g.prototype.onMessage =
			function (d) {
				(d = this.decode(d)) && ("__callback__" === d.c ? this.executeCallback(d) : this.emit.apply(this, [d.c].concat(d.p)))
			};
		g.prototype.executeCallback = function (d) {
			var e = this.__callbacks[d.cb];
			delete this.__callbacks[d.cb];
			e.apply(null, d.p)
		};
		g.prototype.decode = function (d) {
			var e;
			this.debug && (console && console.log) && (data = new Date, console.log("received " + data.toUTCString() + " : " + d));
			try {
				e = $_TAWK_JSON.parse(d)
			} catch (c) {
				this.emit("error", c);
				return
			}
			if (e.c) if ("error" === e.c || "connect" === e.c || "disconnect" === e.c) this.emit("error",
				Error("server returned reserved command : `" + e.cmd + "`")); else if (e.p && "[object Array]" !== Object.prototype.toString.call(e.p)) this.emit("error", Error("data is expected to be an array")); else {
				if ("__callback__" !== e.c) return e;
				d = parseInt(e.cb, 10);
				if (isNaN(d)) this.emit("error", Error("received callback command but there was no valid callback id(`" + d + "`")); else {
					if (this.__callbacks[d]) return e.cb = d, e;
					this.emit("error", Error("received callback command but callback isnt present (`" + e.cb + "`)"))
				}
			} else this.emit("error",
				Error("no command was sent by the server"))
		};
		g.prototype.send = function () {
			var d = this.encode(arguments);
			this.debug && (console && console.log) && (data = new Date, console.log("send " + data.toUTCString() + " : " + d));
			this.state !== p.OPEN ? this.emit("error", Error("Socket isnt open its state is `" + this.state + "` tried to send `" + d + "`")) : d && this.socket.send(d)
		};
		g.prototype.encode = function (d) {
			var e = {};
			d = Array.prototype.slice.call(d);
			if (d[0]) {
				e.c = d[0];
				"function" === typeof d[d.length - 1] && (e.cb = this.enqueuCallback(d.pop()));
				e.p = d.slice(1);
				var c;
				try {
					c = $_TAWK_JSON.stringify(e)
				} catch (g) {
					this.emit("error", g);
					return
				}
				return c
			}
			this.emit("error", Error("now command specified"))
		};
		g.prototype.enqueuCallback = function (d) {
			this.__callbacks[this.__callbackIndex] = d;
			return this.__callbackIndex++
		};
		w.$__TawkSocket = g
	})(window);
	(function (w) {
		var g, l, p, d, e, c = {}, h = this, I = (new Date).getTime(), u = h.navigator, b = {viewHandler: null};
		w.startTime = I.toString();
		w.loaded = !1;
		w.connected = !1;
		w.ready = !1;
		"undefined" !== typeof Tawk_LoadStart && ($_Tawk_LoadStart = Tawk_LoadStart);
		try {
			b.ResetStyle = "html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}body{line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}ins{background-color:#ff9;color:#000;text-decoration:none}mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}html,body{height:100%;width:100%}body{background:transparent;height:100%;width:100%;font:13px Helvetica,Arial,sans-serif;position:relative}.clear{clear:both}.clearfix:after{content:'';display:block;height:0;clear:both;visibility:hidden}";
			b.MaximizedStyle = ".rtl-direction{direction:rtl !important}#tawkchat-maximized-wrapper{width:100%;height:100%;position:relative}#borderWrapper{position:absolute;top:0;bottom:0;z-index:-10;background-color:#e1e1e1;width:100%;height:100%}.noCookies #borderWrapper{background-color:transparent}#innerWrapper{background:#fff;left:2px;position:absolute;right:2px;top:2px;bottom:0;*height:expression(this.parentNode.offsetHeight - 4+'px');*width:expression(this.parentNode.offsetWidth - 4+'px');-webkit-box-shadow:rgba(0,0,0,0.0980392) 0 0 1px 2px;-moz-box-shadow:rgba(0,0,0,0.0980392) 0 0 1px 2px;box-shadow:rgba(0,0,0,0.0980392) 0 0 1px 2px}.embedded #innerWrapper{left:0 !important;right:0 !important;top:0 !important;bottom:0 !important}#headerBoxWrapper{height:45px}#expandableLink{height:5px;width:100%;font-size:0;cursor:s-resize;visibility:hidden;position:absolute;top:56px;z-index:30}#expandableIcon{width:30px;height:4px;margin:0 auto;background:#a1a1a1}#expandableLink.expanded{cursor:n-resize}#headerBox{height:45px;position:relative;z-index:30}.noCookies #headerBox{-webkit-background-clip:padding-box;-moz-background-clip:padding;background-clip:padding-box;border-radius:8px 8px 0 0 !important;-moz-border-radius:8px 8px 0 0 !important;-webkit-border-radius:8px 8px 0 0 !important}.noCookies.embed #headerBox{border-radius:0 !important;-moz-border-radius:0 !important;-webkit-border-radius:0 !important}#agentBar{position:absolute;bottom:32px;top:70px;width:100%;background-color:#eee;display:none;overflow:auto;z-index:10003}.noCookies #headerBoxControlsContainer{float:right;margin-left:0;width:28px}#headerBoxControlsContainer{height:45px;float:left;width:83px;margin-left:-83px}.embedded #headerBoxControlsContainer{display:none;width:30px;margin-left:-30px}.embedded #headerAccountState{margin-right:28px;margin-left:0}.embedded.rtl-direction #headerAccountState{margin-right:0;margin-left:28px}.rtl-direction #headerBoxControlsContainer{margin-left:-100%}#popupLink{float:right;display:inline;margin:15px 6px 0 0;background:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-repeat:no-repeat;background-position:-213px 0;width:20px;height:20px;cursor:pointer}.noCookies #minimizeChat{width:15px;margin:20px 0;cursor:pointer}.noCookies.white #minimizeChat{background-position:-95px 0}.noCookies.black #minimizeChat{background-position:-32px 0}#minimizeLink{display:inline;background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-188px 0;width:20px;height:20px;background-repeat:no-repeat;float:right;margin:15px 6px 0 0;cursor:pointer}#headerAccountStateContainer{float:left;width:100%;height:45px}#headerAccountState{vertical-align:baseline;font-size:17px;padding:0 15px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-right:80px;margin-left:0;line-height:45px}.rtl-direction #headerAccountState{margin-right:0;margin-left:80px}#chatContainerWrapper{position:absolute;bottom:109px;top:3px;width:100%;background-color:#fcfcfc}#chatContainerWrapper.chat-ended{bottom:118px;*height:expression(this.parentNode.offsetHeight - 200+'px')}#chatContainer{overflow:auto;position:absolute;font-size:14px;font-family:Arial;color:#6c6c6c;min-width:270px;left:3px;right:3px;height:auto;overflow-x:hidden;top:0;bottom:0}#maxFileNotificationContainer,#maxSizeNotificationContainer{color:#8a6d3b;background-color:#fcf8e3;border:#faebcc 1px solid;margin:5px 10px;padding:5px 10px;border-radius:6px;font-size:13px}.closeButtonContainer{margin:10px auto auto auto;text-align:right}.closeNotification{cursor:pointer;text-transform:uppercase}#maxFileSizeList,#maxFileNumberList{margin:10px}#maxFileSizeList li,#maxFileNumberList li{word-wrap:break-word}#maxFileSizeList a,#maxFileNumberList a{color:#00E}#chatContainer .hidden{display:none}.actionRetry{cursor:pointer;float:right}#actionsContainer{z-index:99998;height:107px;background-color:#fff;border-top:2px solid #e1e1e1;position:absolute;bottom:0;width:100%}#status-message{font-weight:bold;font-style:normal}#resizeBox{width:52px;height:52px;position:absolute;top:0;background-color:#000;z-index:5}body.right #resizeBox{left:0;float:left;-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px}body.left #resizeBox{right:0;float:right;-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px}#resizeInnerBox{background-color:#fefefe;width:47px;height:47px}body.right #resizeInnerBox{-webkit-border-top-left-radius:3px;-moz-border-radius-topleft:3px;border-top-left-radius:3px;margin:5px 0 0 5px}body.left #resizeInnerBox{-webkit-border-top-right-radius:3px;-moz-border-radius-topright:3px;border-top-right-radius:3px;margin:5px 5px 0 0}#pluginsBar{height:23px;background-color:#c2c2c2;min-width:278px}#ratingContainer{position:absolute;width:38px;margin:0;right:30px;top:10px}.rtl-direction #ratingContainer{right:auto;left:30px;-ms-transform:rotateY(180deg);-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-o-transform:rotateY(180deg);transform:rotateY(180deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2)}#ratingContainer a{float:left;margin:0 5px 0 0;width:14px;height:13px;cursor:pointer;background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-repeat:no-repeat}.rtl-direction #ratingContainer a{margin:0 0 0 5px}#ratingContainer a:active,#ratingContainer a:focus{outline:0}#ratePositive{background-position:-145px 0}#rateNegative{background-position:-126px 0}#ratePositive:hover,#ratePositive.selected{background-position:-164px 0}#ratePositive:hover,#rateNegative:hover{transform:scale(1.5,1.5);// This is the enlarged size scale of the image. transition-duration:500ms;transition-timing-function:ease-out;-webkit-transform:scale(1.5,1.5);// This is the enlarged size scale of the image. -webkit-transition-duration:500ms;-webkit-transition-timing-function:ease-out;-moz-transform:scale(1.5,1.5);// This is the enlarged size scale of the image. -moz-transition-duration:500ms;-moz-transition-timing-function:ease-out;-ms-transform:scale(1.5,1.5);// This is the enlarged size scale of the image. -ms-transition-duration:500ms;-ms-transition-timing-function:ease-out;-o-transform:scale(1.5,1.5);// This is the enlarged size scale of the image. -o-transition-duration:500ms;-o-transition-timing-function:ease-out}#rateNegative:hover,#rateNegative.selected{background-position:-183px 0}.activeSound{background-position:0 0;background-repeat:no-repeat}.disabledSound{background-position:-21px 0;background-repeat:no-repeat}#textareaWrapper{display:block;background-color:#fff;position:relative}#textareaContainer{height:52px;padding:10px;padding-right:30px}.rtl-direction #textareaContainer{padding:10px;padding-left:30px}#chatTextarea{padding:0;margin:0;height:100%;width:100%;overflow:hidden;resize:none;border:0;vertical-align:top;font-size:14px !important;background-color:#fff;color:#000}#chatTextarea:active,#chatTextarea:focus{outline:0}#textareaContainer textarea::-webkit-input-placeholder{color:#b3b3b3;font-style:italic;font-family:Arial}#textareaContainer textarea::-moz-placeholder{color:#b3b3b3;font-style:italic;font-family:Arial}#textareaContainer textarea:-ms-input-placeholder{color:#b3b3b3;font-style:italic;font-family:Arial}#greetingsContainer{margin:7px 45px 0 45px;padding:5px;text-align:center;white-space:pre-wrap;word-wrap:break-word;color:black;font-size:15px !important}#formContainer #greetingsContainer{margin:0 !important}.embedded{width:100%;height:100%}.embedded #headerBox{-webkit-border-top-left-radius:0 !important;-moz-border-radius-topleft:0 !important;border-top-left-radius:0 !important;-webkit-border-top-right-radius:0 !important;-moz-border-radius-topright:0 !important;border-top-right-radius:0 !important}#agentBar.expanded{height:auto;overflow-y:auto;display:block;max-height:153px}#agentList{padding:0 5px}#agentList .agentWrapper{border-radius:0;margin:10px 0}#profileDetail .agentContainer{margin-left:50px}.agentContainer{height:50px}.rtl-direction #profileDetail .agentContainer{margin-right:50px;margin-left:0}#agentBar .agentContainer{height:50px;width:100%;float:left}.agentContainerNoImage{height:45px}.agentWrapper{width:100%;min-width:280px;clear:both;position:relative;-webkit-border-top-left-radius:10px;-webkit-border-top-right-radius:10px;-moz-border-radius-topleft:10px;-moz-border-radius-topright:10px;border-top-left-radius:10px;border-top-right-radius:10px}#headerBox .agentInformationContainer{padding:10px 0}#agentBar .agentInformationContainer{padding:10px 0;margin-left:50px;margin-right:0}.rtl-direction #agentBar .agentInformationContainer{margin-right:50px;margin-left:0}.agentInformationContainerNoImage{padding-top:13px;padding-bottom:13px;font-size:16px}.agentInformationContainer{font-size:14px}.position-label{font-size:12px}.agentNameCentered{margin-top:8px;font-weight:bold}.noImageAgentProfileDetail{padding-left:5px}.rtl-direction .noImageAgentProfileDetail{padding:0 5px 0 0}.agentInformationContainer p{height:16px;white-space:nowrap;overflow:hidden;box-sizing:border-box;text-overflow:ellipsis}.agentInformationContainer .agentName{font-weight:bold}#headerBox .alias-image{-moz-animation:profileShow .5 ease-in;-webkit-animation:profileShow .5s ease-in;-o-animation:profileShow .5 ease-in;-ms-animation:profileShow .5 ease-in;animation:profileShow .5s ease-in}@-ms-keyframes profileShow{0%{-ms-transform:scale(0)}6.25%{-ms-transform:scale(0.1)}12.5%{-ms-transform:scale(0.2)}18.75%{-ms-transform:scale(0.3)}25%{-ms-transform:scale(0.4)}31.25%{-ms-transform:scale(0.5)}37.5%{-ms-transform:scale(0.6)}43.75%{-ms-transform:scale(0.7)}50%{-ms-transform:scale(0.8)}56.25%{-ms-transform:scale(0.9)}62.5%{-ms-transform:scale(1)}68.75%{-ms-transform:scale(1.1)}75%{-ms-transform:scale(1.2)}81.25%{-ms-transform:scale(1.3)}87.5%{-ms-transform:scale(1.2)}93.75%{-ms-transform:scale(1.1)}100%{-ms-transform:scale(1)}}@-webkit-keyframes profileShow{0%{-webkit-transform:scale(0)}6.25%{-webkit-transform:scale(0.1)}12.5%{-webkit-transform:scale(0.2)}18.75%{-webkit-transform:scale(0.3)}25%{-webkit-transform:scale(0.4)}31.25%{-webkit-transform:scale(0.5)}37.5%{-webkit-transform:scale(0.6)}43.75%{-webkit-transform:scale(0.7)}50%{-webkit-transform:scale(0.8)}56.25%{-webkit-transform:scale(0.9)}62.5%{-webkit-transform:scale(1)}68.75%{-webkit-transform:scale(1.1)}75%{-webkit-transform:scale(1.2)}81.25%{-webkit-transform:scale(1.3)}87.5%{-webkit-transform:scale(1.2)}93.75%{-webkit-transform:scale(1.1)}100%{-webkit-transform:scale(1)}}@-moz-keyframes profileShow{0%{-moz-transform:scale(0)}6.25%{-moz-transform:scale(0.1)}12.5%{-moz-transform:scale(0.2)}18.75%{-moz-transform:scale(0.3)}25%{-moz-transform:scale(0.4)}31.25%{-moz-transform:scale(0.5)}37.5%{-moz-transform:scale(0.6)}43.75%{-moz-transform:scale(0.7)}50%{-moz-transform:scale(0.8)}56.25%{-moz-transform:scale(0.9)}62.5%{-moz-transform:scale(1)}68.75%{-moz-transform:scale(1.1)}75%{-moz-transform:scale(1.2)}81.25%{-moz-transform:scale(1.3)}87.5%{-moz-transform:scale(1.2)}93.75%{-moz-transform:scale(1.1)}100%{-moz-transform:scale(1)}}@-o-keyframes profileShow{0%{-o-transform:scale(0)}6.25%{-o-transform:scale(0.1)}12.5%{-o-transform:scale(0.2)}18.75%{-o-transform:scale(0.3)}25%{-o-transform:scale(0.4)}31.25%{-o-transform:scale(0.5)}37.5%{-o-transform:scale(0.6)}43.75%{-o-transform:scale(0.7)}50%{-o-transform:scale(0.8)}56.25%{-o-transform:scale(0.9)}62.5%{-o-transform:scale(1)}68.75%{-o-transform:scale(1.1)}75%{-o-transform:scale(1.2)}81.25%{-o-transform:scale(1.3)}87.5%{-o-transform:scale(1.2)}93.75%{-o-transform:scale(1.1)}100%{-o-transform:scale(1)}}@keyframes profileShow{0%{transform:scale(0)}6.25%{transform:scale(0.1)}12.5%{transform:scale(0.2)}18.75%{transform:scale(0.3)}25%{transform:scale(0.4)}31.25%{transform:scale(0.5)}37.5%{transform:scale(0.6)}43.75%{transform:scale(0.7)}50%{transform:scale(0.8)}56.25%{transform:scale(0.9)}62.5%{transform:scale(1)}68.75%{transform:scale(1.1)}75%{transform:scale(1.2)}81.25%{transform:scale(1.3)}87.5%{transform:scale(1.2)}93.75%{transform:scale(1.1)}100%{transform:scale(1)}}#agentBar .alias-image,#headerBox .alias-image{width:40px;height:40px;margin:0;background-repeat:no-repeat;border-radius:20px;margin:5px 0;background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-624px 0;float:left;margin-left:-100%}.rtl-direction #agentBar .alias-image,.rtl-direction #headerBox .alias-image{float:right}.agentChatContainer .messageBody{margin:-12px 0 0 0;max-width:100%}.rtl-direction .agentChatContainer .messageBody{float:right;margin:-12px 00px 0 0}.agentChatContainer .message{background:#eee;color:#333;margin-right:40px;margin-left:0;padding:5px 10px;border-radius:0 15px 15px 15px}.rtl-direction .agentChatContainer .message{margin:0 0 0 40px;border-radius:15px 0 15px 15px}.ie9.rtl-direction .agentChatContainer .message{border-radius:0 15px 15px 15px !important}.agentChatContainer .messageStatusContainer{margin-left:-40px;position:absolute;top:5px;left:100%}.rtl-direction .agentChatContainer .messageStatusContainer{margin:0 -40px 0 0;left:auto;right:100%}.messageContainer.agentChatContainer{margin:10px 0 10px 12px}.rtl-direction .messageContainer.agentChatContainer{margin:10px 8px 10px 0}.messageContainer.visitorChatContainer{margin:10px 12px 10px 0}.rtl-direction .messageContainer.visitorChatContainer{margin:10px 0 10px 12px}.visitorChatContainer .messageBody{margin:2px 0 0 0;float:right;max-width:100%}.rtl-direction .visitorChatContainer .messageBody{float:left}.visitorChatContainer .messageWrapper .message{color:#333;text-align:left;border-radius:15px 0 15px 15px;background:#e5e5e5;margin-left:40px}.rtl-direction .visitorChatContainer .messageWrapper .message{text-align:right;margin:0 30px 0 0;border-radius:0 15px 15px 15px}.ie9.rtl-direction .visitorChatContainer .messageWrapper .message{border-radius:15px 0 15px 15px !important}.visitorChatContainer .messageStatusContainer.errorInMessage{width:100%;position:relative;right:auto}.visitorChatContainer .messageStatusContainer.errorInMessage a{float:right;font-size:11px;text-decoration:none;color:#ec6368;width:100%;background:0;text-align:right;top:0;margin:0;line-height:10px}.rtl-direction .visitorChatContainer .messageStatusContainer.errorInMessage a{float:left;text-align:left}.visitorChatContainer .messageStatusContainer{position:absolute;right:100%;top:5px;margin-right:-40px}.rtl-direction .visitorChatContainer .messageStatusContainer.errorInMessage{left:auto;margin:0}.rtl-direction .visitorChatContainer .messageStatusContainer{right:auto;left:100%;margin:0 0 0 -40px}.messageHead{position:absolute;z-index:10001}.messageHeadLine{position:relative;top:10px;z-index:1}.messageContainer .messageHead .messageTitle{text-align:center;width:100%}.messageBody{line-height:1.5em;margin:5px 0 0 42px;float:left;position:relative}.notification{margin-left:0;width:100%}.ownerNameContainer,.notificationContainer{float:left}.rtl-direction .notificationContainer{direction:rtl !important;float:right}.notificationContainer .message{margin-right:40px;font-size:14px !important;font-style:italic}.rtl-direction .notificationContainer .message{margin:0 0 0 40px}.message{white-space:pre-wrap;word-wrap:break-word}.messageContainer .messageHead.agent .messageTime,.notificationTime{color:#b3b3b3}.notificationTime{width:40px;float:left;margin-left:-40px;text-align:right;font-size:12px !important}.rtl-direction .notificationTime{float:right;margin:0 -40px 0 0;text-align:left}.messageStatusContainer{position:relative;z-index:2;width:40px;float:left}.messageTime{padding:0 2px 0 8px;font-size:11px !important;color:#777;display:none}.rtl-direction .messageTime{padding:0 8px 0 2px}.messageTime.visitor{padding:0 8px 0 2px}.rtl-direction .messageTime.visitor{padding:0 2px 0 8px}.show-time .messageTime{display:block}.messageWrapper{background:0;position:relative;width:100%;float:left}.messageStatus{width:16px;height:16px}.messageStatus:active,.messageStatus:focus{outline:0}.messageStatusContainer.pending .messageStatus{background-image:url('https://static-v.VOOChat/a-v3-39/images/ajax-loader.gif');background-position:0 0;background-repeat:no-repeat;float:right;margin-top:5px;width:13px;height:13px;margin-right:5px}.messageWrapper.pending{font-style:italic}.messageWrapper.error{font-style:italic;color:red;cursor:pointer;float:right;width:auto}.rtl-direction .messageWrapper.error{max-width:100%;float:left}.messageWrapper.error .message{background-color:#ec6368 !important;color:#fff !important}.messageWrapper .message{font-size:14px !important;padding:5px 10px}.longFormContainer::-webkit-scrollbar-thumb,#chatContainer::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background-color:#d4d4d4}.longFormContainer::-webkit-scrollbar,#chatContainer::-webkit-scrollbar{width:10px}.messageTitle span{text-transform:uppercase;font-weight:bold;padding:0 10px;color:#ccc;background-color:#fff;z-index:1;position:relative}#formContainer{position:absolute;z-index:20;display:none;left:0;right:0;bottom:32px;top:70px;overflow:hidden;background-color:#fcfcfc;*width:expression(this.parentNode.offsetWidth+'px');*height:expression(this.parentNode.offsetHeight - 102+'px');z-index:99999}.noCookies #formContainer{top:45px}.formMessageField{padding:10px 20px;line-height:1.2em;color:#616161;font-size:15px;text-align:center;word-wrap:break-word}.form{margin:0 20px;font-size:13px;color:#a1a1a1;height:100%}.form fieldset{padding:0}.longFormContainer{position:absolute;left:5px;right:5px;bottom:50px;top:0;overflow-y:auto;padding-bottom:10px}.longFormBottomContainer{position:absolute;bottom:0;left:0;right:0}.form .textareaFieldset{padding:0 33px 0 0;margin:0 0 7px 0;position:relative;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;background-color:#fff;border:1px solid #ccc}.rtl-direction .form .textareaFieldset{padding:0 0 0 33px}.form textarea{resize:none;display:block;height:40px;width:100%;overflow:auto;padding:0 15px;color:#707070;font-size:13px;font-weight:bold;border:0;background-color:#fff;font-family:Arial;margin:13px 0}.form textarea:active,.form textarea:focus,.inputContainer select:active,.inputContainer select:focus{outline:0}.inputContainer{padding:0 15px;border:1px solid #ccc;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;border-radius:3px;background-color:#fff;margin:0 0 7px 0;position:relative}.inputContainer input,.inputContainer select{width:100%;margin:0;border:0;display:block;line-height:1.2em;padding:10px 0;color:#707070;font-family:Arial;font-size:13px;font-weight:bold}.inputContainer input{padding:11px 0}.inputContainer.other-fix{padding:0}.inputContainer select{background-color:#fff;outline:0}#departmentFieldFieldset.safari-fix .inputContainer select{-webkit-appearance:none}#departmentFieldFieldset.safari-fix .inputContainer{position:relative}#departmentFieldFieldset.safari-fix .inputContainer:after{position:absolute;right:24px;top:12px;cursor:pointer;width:10px;height:10px;font-size:10px;padding:0;background:#fff;color:#000;content:'\u25bc';pointer-events:none;cursor:pointer}.inputContainer.error,.form .textareaFieldset.error{border-color:#ef5656;color:#ef5656}.inputContainer.error input,.form .textareaFieldset.error textarea,.inputContainer.error select,.error .form-field-label{color:#ef5656}.inputContainer.error input::-webkit-input-placeholder,.form .textareaFieldset.error textarea::-webkit-input-placeholder{color:#ef5656}.inputContainer.valid,.form .textareaFieldset.valid{border-color:#92ed9d}.inputContainer.valid{padding-right:30px}.inputContainer.selection.valid{padding:0}.inputContainer input:active,.inputContainer input:focus{margin:0;border:0;outline:0}.inputContainer input:active+.form-field-label,.inputContainer input:focus+.form-field-label,.textareaFieldset textarea:active+.form-field-label,.textareaFieldset textarea:focus+.form-field-label{display:block}.inputContainer input:active::-webkit-input-placeholder,.inputContainer input:focus::-webkit-input-placeholder,.textareaFieldset textarea:active::-webkit-input-placeholder,.textareaFieldset textarea:focus::-webkit-input-placeholder{color:transparent !important}.inputContainer input:focus::-moz-placeholder,.inputContainer input:active::-moz-placeholder,.textareaFieldset textarea:focus::-moz-placeholder,.textareaFieldset textarea:active::-moz-placeholder{color:transparent !important;opacity:0 !important}.formErrorContainer{display:none;margin:0 0 7px 15px;color:#ef5656}.rtl-direction .formErrorContainer{margin:0 15px 7px 0}#preChatForm .formErrorContainer,#offlineForm .formErrorContainer{margin:-6px 15px 7px 0}.rtl-direction #preChatForm .formErrorContainer,.rtl-direction #offlineForm .formErrorContainer{margin:-6px 0 7px 15px}#formSavingStatus.errorMessage{color:#ef5656;border:0;visibility:visible}#formSavingStatus{font-size:13px;visibility:hidden;margin:0 auto;max-width:260px}#formSavingStatus img{margin:0 0 0 5px}.formButtonContainer{margin:20px 0 0 0}button{display:inline;zoom:1;vertical-align:baseline;outline:0 none;cursor:pointer;text-align:center;text-decoration:none;overflow:visible;margin:0;padding:7px 15px 8px 15px;font:bold 14px/100% Arial,sans-serif;background-color:#c1c1c1;color:#3d3d3d;border:0;float:left}button::-moz-focus-inner{border:0}button:focus{outline:0}button:active{background-color:#ddd}button:hover{background-color:#a9a9a9}.formButton{width:100%;height:50px}#agentTypingContainer .messageBody{font-size:16px !important;font-weight:bold;min-width:auto;line-height:normal}#offlineOverlay,#inactivityOverlay,#maintenanceOverlay{text-align:center;margin-top:100px;font-size:40px;font-weight:bold;height:auto}#greetingsOverlay{width:100%;height:100%}#greetingsOverlay #greetingsContainer{font-size:14px;color:#777;font-weight:bold}#greetingsWrapper{transform:translate(0%,-50%);-webkit-transform:translate(0%,-50%);-moz-transform:translate(0%,-50%);-ms-transform:translate(0%,-50%);-o-transform:translate(0%,-50%);top:50%;position:absolute;left:0;right:0;*position:static;*margin-top:expression(this.offsetHeight < this.parentNode.offsetHeight ? parseInt((this.parentNode.offsetHeight - this.offsetHeight) / 2)+'px':'0')}#embedArrow{background-position:-318px 0;width:22px;height:26px;background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-repeat:no-repeat;margin:5px auto}.cookieOff #formContainer{display:block;width:100%;height:100%;left:0;right:0;top:0}#formInnerHeight{margin:0 auto;max-width:260px}#tawktoLink{color:#000;font-size:15px;text-decoration:none;line-height:24px}#tawktoLink .thin{font-size:11px;font-weight:100}#bottomContainer{text-align:right;left:157px;position:absolute;bottom:0;height:30px;right:6px;background:#fff;z-index:100001;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:30px}.noCookies #bottomContainer{position:absolute;bottom:0;text-align:right;height:32px;line-height:32px;background-color:#fcfcfc;right:0;left:0;padding:0 6px;margin:auto;font-weight:700}.noCookies #shortMessage{display:inline-block;padding-left:15px;font-size:17px;line-height:45px}.noCookies #tawktoLink{color:#000;font-weight:700}.rtl-direction #bottomContainer{left:6px;right:157px;text-align:left}#headerBoxControlsContainer .icon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');display:block}#endChat,#minimizeChat,#popoutChat{width:16px;height:16px;margin:14px 5px 15px 5px;display:inline-block}#endChat{margin-right:10px;margin-left:5px}.embedded #endChat{margin-right:6px;margin-left:6px}.rtl-direction #endChat{margin-right:5px;margin-left:10px}#endChat .icon{width:11px;height:11px;float:right;margin:2.5px}.black #endChat .icon{background-position:0 0}.white #endChat .icon{background-position:-63px 0}#minimizeChat .icon{width:11px;height:7px;margin:4.5px 2.5px}.black #minimizeChat .icon{background-position:-32px 0}.white #minimizeChat .icon{background-position:-95px 0}#popoutChat .icon{width:10px;height:10px;margin:3px}.black #popoutChat .icon{background-position:-48px 0}.white #popoutChat .icon{background-position:-111px 0}#openMenu{position:absolute;left:10px;bottom:0;color:#bdbdbd;font-size:13px;font-weight:700;text-decoration:none;line-height:28px;z-index:100001;cursor:pointer;*bottom:7px;text-transform:lowercase}.rtl-direction #openMenu{right:10px;left:auto}#options{height:32px;margin-left:110px;text-overflow:ellipsis}.rtl-direction #options{margin:0 110px 0 0}#closeMenu{position:absolute;left:10px;bottom:8px;display:none;cursor:pointer}.rtl-direction #closeMenu{right:10px;left:auto}#closeMenu span{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:0 0;width:11px;height:11px;float:right;margin:2px 5px}.rtl-direction #closeMenu span{float:left}.profileImageContainer .agentProfileImage{width:28px;height:28px;background-repeat:no-repeat;border-radius:14px;background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-566px 0;position:absolute;left:0;right:0}.profileImageContainer .visitorProfileImage{width:28px;height:28px;background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-202px 0;float:left;margin-left:-100%}#tawkToContent{display:none;position:absolute;top:45px;bottom:0;width:100%;background:#fcfcfc;z-index:100001}#tawkToContent .contentContainer{position:absolute;top:0;bottom:43px;width:auto;left:10%;right:10%;*bottom:100px}#tawkToContent .buttonContainer{position:absolute;height:50px;bottom:0;width:100%}#tawkToContent .buttonContainer button{width:50%;height:50px}#tawkHeader{font-size:22px;font-weight:bold;text-align:center;padding:20px 0 12px 0;color:#343434;border-bottom:2px solid #ddd;width:150px;margin:0 auto}#tawkContent{font-size:15px;text-align:center;color:#6c6c6c;margin:12px 30px 0 30px}#tawkImage{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-235px 0;width:78px;height:83px;margin:0 auto}#tawkToContent .wrapper{position:absolute;width:100%;margin:5px 0}#optionsContainer{position:absolute;left:0;width:155px;bottom:0;z-index:1000001;padding:3px;text-align:left}.rtl-direction #optionsContainer{left:auto;right:0}#optionsContainer .item{padding:0 3px;color:#696969;cursor:pointer;font-size:12px;font-weight:bold;line-height:30px;display:inline-block;vertical-align:middle;position:relative;height:30px}.rtl-direction #optionsContainer .item{float:right}#optionsContainer .tooltip{position:absolute;top:0;left:0;background:#333;color:#fff;padding:2px;transform:translate(-50%,-100%);min-width:100px;border-radius:3px;display:none;line-height:20px;position:absolute;left:50%;text-align:center}#soundOption .tooltip{left:0;transform:translate(0%,-100%)}#emailTranscriptOption .tooltip{left:-26px;transform:translate(0%,-100%)}#optionsContainer .item:hover .tooltip{display:block}#emailTranscriptForm,#changeNameForm,#endChatForm{position:absolute;width:100%;bottom:0;height:164px;margin:0}#endChatForm{height:109px}#emailTranscriptForm #formInnerHeight,#changeNameForm #formInnerHeight,#endChatForm #formInnerHeight{max-width:100%;width:100%;height:100%;background:#fff}#emailTranscriptForm .longFormBottomContainer,#changeNameForm .longFormBottomContainer,#endChatForm .longFormBottomContainer{bottom:0}#emailTranscriptForm .formButton,#changeNameForm .formButton,#endChatForm .formButton{width:50%}#emailTranscriptForm .inputContainer,#changeNameForm .inputContainer,#endChatForm .inputContainer{border:0;margin:0}#offlineForm #messageField{height:85px}#formContainer.success #offlineForm #overlayOfflineForm{display:block}#formContainer #offlineForm #overlayOfflineForm{position:absolute;top:0;bottom:0;left:0;right:0;display:none;z-index:1;background-color:#fff;color:#000;text-align:center;padding:30px 15px;font-size:15px}#formContainer #offlineForm #overlayOfflineForm #resendButton{margin-top:15px;padding:7px 12px;display:inline-block;font-weight:700;cursor:pointer}#emailTranscriptFormMessageContainer,#changeNameFormMessageContainer{background:#ddd;margin:0;padding:10px;text-align:left}.rtl-direction #emailTranscriptFormMessageContainer,.rtl-direction #changeNameFormMessageContainer{text-align:right}.rtl-direction .longFormBottomContainer #formCancel{float:right}.rtl-direction .longFormBottomContainer #formSubmit{float:left}#submitWrapper{position:absolute;bottom:50px;height:0;width:auto;right:0;background:#000;border-radius:4px 4px 0 0;color:#fff;-webkit-transition:height .25s ease;-moz-transition:height .25s ease;-ms-transition:height .25s ease;-o-transition:height .25s ease;transition:height .25s ease;*height:30px;*display:none}#submitWrapper.visible{height:30px;*display:block}#submitWrapper p{line-height:30px;padding:0 10px;float:left}.rtl-direction #submitWrapper p{float:right}#submitWrapper div{background-image:url('https://static-v.VOOChat/a-v3-39/images/ajax-loader-3.gif');width:16px;height:16px;float:right;margin:7px}#printIcon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-418px 0;width:18px;height:17px;margin-top:4px}#emailIcon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-418px 0;width:20px;height:14px;margin-top:9px}#soundOnIcon{background-repeat:no-repeat;background-position:0 0;width:20px;height:20px;margin-top:6px;background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png')}.activeSound #soundOnIcon{background-position:-370px 0}.disabledSound #soundOnIcon{background-position:-345px 0;height:18px;margin-top:7px}#videoCallIcon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-820px 0;width:24px;height:12px;margin-top:8.5px}#voiceCallIcon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');width:13px;height:21px;background-position:-849px 0;margin-top:4px}#screenShareIcon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');width:22px;height:20px;background-position:-867px 0;margin-top:4px}.optionTitle{margin-left:35px}.rtl-direction .optionTitle{margin:0 35px 0 0}#agentProfileContainer{height:50px !important;cursor:pointer;position:relative;margin-right:80px;margin-left:0;padding-left:5px}.rtl-direction #agentProfileContainer,.rtl-direction #agentListBack{margin-left:80px;margin-right:0;padding:0 5px 0 0}#stickyIcon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-459px 0;width:15px;height:16px;margin:4px}#waitTimeContainer{margin:20px 7px}#stickyContainer{position:absolute;margin-left:-14px;margin-top:-12px;background-color:#fcfcfc;width:23px;height:24px;padding:2px;top:50%}.rtl-direction #stickyContainer{margin-left:0;margin-right:-14px}#waitTimeContainer .messageWrapper{border:1px solid;border-radius:5px;text-align:center;margin:0 auto;float:none}#waitTimeContainer .message{margin:0;padding:12px 10px 12px 14px;font-size:15px !important;color:#7b7a7a;font-weight:bold}#waitTimeContainer .messageBody{width:100%;position:relative;margin:0;line-height:100%;float:none}#profileDetail{height:50px;position:static;width:100%;float:left}#profileDetailNoImage{height:45px;position:static;margin-left:0}#agentWrapper{height:0;display:none;float:left;width:100%;height:45px}#agentListBack{display:none;cursor:pointer;height:70px}#listBack{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-479px 0;width:7px;height:11px;margin-top:29px;float:left;margin-left:20px;margin-right:20px}.black #listBack{background-position:-491px 0}#agentListBack p{font-size:16px;font-weight:bold;margin-top:25px;float:left;height:20px;line-height:20px}.rtl-direction #listBack,.rtl-direction #agentListBack p{float:right}.rtl-direction #listBack{transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2)}.message-success{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-503px 0;width:16px;height:15px;padding:0 8px}.messageStatusContainer.pending .message-success,.messageStatusContainer.pending .messageTime{display:none}.errorInMessage .messageStatus{display:block;float:right;margin-right:5px}#chatPanel{position:absolute;top:45px;bottom:0;width:100%;z-index:0}#chatEnded{position:absolute;left:0;bottom:32px;height:87px;width:100%;background:#fff;display:none;z-index:10}#chatEnded .title{text-align:center;font-size:14px;margin:10px 0}#chatEnded .buttonContainer{width:100%;height:50px}#newChat{width:50%;height:50px;padding:0;float:left;margin-left:-1px}.rtl-direction #newChat{float:right;margin:0 -1px 0 0}#emailTranscript{width:50%;height:50px;padding:0;float:right;margin-right:-1px}.rtl-direction #emailTranscript{float:left;margin:0 0 0 -1px}.validInputIcon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-545px 0;width:16px;height:15px;display:none;position:absolute;right:10px;top:50%;margin-top:-7.5px}.rtl-direction .validInputIcon{right:auto;left:10px}#prechatButtonContainer{top:auto}.additionalPadding{padding-right:75px !important}.rtl-direction .additionalPadding{padding-right:10px !important;padding-left:50px !important}#newMessageDivider{margin-top:4px;font-size:.7rem;line-height:.6rem}#newMessageDividerLine{border-top:2px solid #e4c0b6;border-bottom:0;margin:0 0 -1px}#newMessageDividerLabel{background:#fcfcfc;margin:-0.3rem 0;float:right;padding:0 .5rem;color:#e4c0b6}.offlineMessageSuccess{color:#6db626}#newMessageContainer{position:relative;left:-50%;cursor:pointer;display:none}#newMessagesBar{position:absolute;bottom:33px;height:0;width:auto;left:50%;color:#fff;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;visibility:hidden;cursor:pointer;z-index:0}#newMessagesBar.theme-background-color{background-color:transparent !important}#notificationMessageText{font-weight:700}#newMessageArrowDown{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-778px 0;width:16px;height:6px;margin:-1px auto}#newMessagesNotificationLink{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-757px 0;width:16px;height:16px;float:left;margin:7px 7px auto auto}.rtl-direction #newMessagesNotificationLink{float:right;-ms-transform:rotateY(180deg);-webkit-transform:rotateY(180deg);transform:rotateY(180deg);margin:7px auto auto 7px}#newMessagesBar.visible{height:27px;z-index:99997;bottom:118px;visibility:visible}#newMessagesBar.visible #newMessageContainer{display:block}#newMessagesBar p{line-height:27px;padding:0 10px;text-align:center;background-color:#81bd1d;border-radius:5px}.uploaded-image{max-width:100%;max-height:220px;display:block}.download-file{color:#3276b1;text-decoration:none;margin-top:3px;display:block}.download-image{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-669px 0;width:16px;height:18px;padding:1px 8px;vertical-align:middle}.progress{height:14px;position:relative;background:#eee;box-shadow:0 1px 0 transparent,0 0 0 1px #e3e3e3 inset;width:200px;margin:5px 0;display:inline-block;vertical-align:middle}.progress-bar{display:block;height:100%;background-color:#71a06a;box-shadow:inset 0 2px 9px rgba(255,255,255,0.3),inset 0 -2px 6px rgba(0,0,0,0.4);position:relative;overflow:hidden;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.upload-data{margin:7px 12px 0 20px;min-width:250px}.upload-data span{font-style:italic;margin-right:3px}#uploadFileIcon{background:url('https://static-v.VOOChat/a-v3-39/images/icons.png') no-repeat top left;background-position:-709px 0;vertical-align:middle;width:20px;height:21px;margin-top:5px}.image-loader{width:30px;height:30px;background:url('https://static-v.VOOChat/a-v3-39/images/image-load.gif');background-repeat:no-repeat;background-position:center}#nameIcon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-734px 0;width:18px;height:19px;margin-top:3px}.upload-error{margin:5px}.upload-error span{font-size:16px;color:red;font-weight:bold;vertical-align:middle}.drag-over #textareaWrapper:before{text-align:center;margin:0;font-size:25px;height:auto;line-height:68px;color:#ccc;background:#fff;position:absolute;top:0;bottom:0;right:0;left:0;border:3px dashed #ccc;content:'';white-space:pre-line}#drop-text{text-align:center;font-size:25px;height:auto;color:#ccc;position:absolute;top:2px;bottom:2px;right:2px;left:2px;white-space:pre-line;display:none}.drag-over #drop-text{display:block}#drop-text span{display:block;vertical-align:middle;line-height:normal;top:50%;margin-top:-15px;position:relative}.drag-over .drop-text{display:block}.drag-over #ratingContainer{display:none !important}.drag-over #chatTextarea{opacity:0}#upload-form{position:absolute;top:-100000px}#uploadFileOption label{display:block;cursor:pointer}.form-field-label.small{color:#b3b3b3;padding:1px 0 0 0;display:none;font-size:10px;position:absolute;top:0;left:4px;font-weight:bold}.rtl-direction .form-field-label.small{left:auto;right:4px}.form-field-label{color:#707070;font-family:Arial;font-size:13px;font-weight:bold}.selection-label{vertical-align:middle;cursor:pointer}.selection-container{margin:3px}.selections-container{margin:3px 3px 7px 3px}.selections-container.error{border:1px solid #ef5656;border-radius:3px}.agentInfoNoImage{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.messageContainer,#agentTypingContainer{position:relative;margin:10px 12px}.messageContainer{clear:both}.profileImageContainer{height:28px;float:left;width:28px;margin-left:-100%}.ownerNameContainer{float:left;width:100%}.messageOwnerName{color:#a7a7a7;font-weight:bold;text-decoration:none;font-size:12px !important;margin:0;padding:0;line-height:14px;display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-left:30px}.rtl-direction .messageOwnerName{margin-left:0;margin-right:30px}.messageOwnerName.visitor{text-align:right;margin-right:0;margin-left:0}.rtl-direction .messageOwnerName.visitor{text-align:left}#chatTableWrapper{display:table;height:100%;width:100%;table-layout:fixed}#chatRowWrapper{display:table-row;vertical-align:bottom}#chatCellWrapper{overflow:auto;position:relative;display:table-cell;vertical-align:bottom}.single-agent .profileImageContainer,.single-agent .agentChatContainer .ownerNameContainer{display:none}.single-agent .agentChatContainer .ownerNameContainer.trigger{display:block}.ownerNameContainer.trigger .messageOwnerName{margin-left:0;margin-right:0}.multi-agent .ownerNameContainer.trigger .messageOwnerName{margin-left:30px;margin-right:0}.multi-agent .agentChatContainer .message{margin-left:30px}.rtl-direction .multi-agent .agentChatContainer .message{margin-right:30px;margin-left:40px}.rtl-direction .multi-agent .ownerNameContainer.trigger .messageOwnerName{margin-right:30px;margin-left:0}.single-agent .visitorChatContainer .messageBody,.single-agent .messageOwnerName.visitor{margin-right:0;margin-left:0}.single-agent .visitorChatContainer .messageBody,.single-agent .agentChatContainer .messageBody.trigger{margin-top:2px}.single-agent .agentChatContainer .messageBody,.single-agent .agentChatContainer .ownerNameContainer{margin-left:0;margin-right:0;margin-top:0}#agentTypingContainer .agentChatContainer{margin-bottom:5px}.has-profile-image #headerBoxWrapper,.has-profile-image #headerBox,.has-profile-image #agentWrapper,.has-profile-image #headerBoxControlsContainer,.has-profile-image #agentListBack{height:50px}.has-profile-image #endChat,.has-profile-image #popoutChat,.has-profile-image #minimizeChat{margin-top:17px;margin-bottom:17px}.has-profile-image #agentBar,.has-profile-image #chatPanel,.has-profile-image #tawkToContent{top:50px}.has-profile-image #listBack{margin-top:21px}.has-profile-image #agentListLabel{margin-top:17px}.selection-container input{margin:0 3px 0 5px}@keyframes typing{0%{opacity:0}100%{opacity:1}}@-ms-keyframes typing{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes typing{0%{opacity:0}100%{opacity:1}}@-moz-keyframes typing{0%{opacity:0}100%{opacity:1}}@-o-keyframes typing{0%{opacity:0}100%{opacity:1}}.agentTypingIndicator span{-moz-animation:typing 1.2s infinite;-webkit-animation:typing 1.2s infinite;-o-animation:typing 1.2s infinite;-ms-animation:typing 1.2s infinite;animation:typing 1.2s infinite;animation-fill-mode:both;margin:0 1px;font-size:20px;line-height:0}.agentTypingIndicator span:nth-child(2){animation-delay:400ms;-webkit-animation-delay:400ms;-moz-animation-delay:400ms;-ms-animation-delay:400ms;-o-animation-delay:400ms}.agentTypingIndicator span:nth-child(3){animation-delay:800ms;-webkit-animation-delay:800ms;-moz-animation-delay:800ms;-ms-animation-delay:800ms;-o-animation-delay:800ms}.rtl-direction .message{min-width:45px !important}.message a{color:inherit}#formContainer .inputContainer.selection:before{content:\"\";position:absolute;right:14px;top:13px;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #707070;z-index:0}#formContainer .inputContainer{background-color:#fff;overflow:hidden;position:relative;height:33px}#formContainer .inputContainer select{position:absolute;height:100%;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:90%;background:transparent;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;line-height:1;-webkit-appearance:none;-moz-appearance:none;text-indent:.01px;text-overflow:'';-ms-appearance:none}#formContainer .inputContainer select::-ms-expand{display:none}#endChatOption{display:none}#viewEmoji{position:absolute;top:9px;right:10px;opacity:.4}.drag-over #viewEmoji{display:none}#viewEmoji.active{opacity:1}#viewEmoji .icon{background:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-repeat:no-repeat;background-position:-799px 0;width:16px;height:16px;display:block}#emoji-selection-container{position:absolute;bottom:100px;left:5px;right:5px;height:200px;background:#fff;border:1px solid #ddd;border-radius:3px;display:none;z-index:10001}#tabs-selection{border-bottom:1px solid #ddd;list-style:none}.open-tab{opacity:.4;float:left;margin-bottom:-1px;position:relative;display:block;cursor:pointer;width:11%;text-align:center}.open-tab.active{opacity:1}#tab-content{position:absolute;top:32px;bottom:0;overflow:auto;left:0;right:0;padding:10px}.header-title{text-align:center;margin:5px 0;font-weight:bold;font-size:14px}.emoji-select{display:inline-block;margin:9px}.emoji-select:hover .emojione{transform:scale(2);-ms-transform:scale(2);-webkit-transform:scale(2);-moz-transform:scale(2);-o-transform:scale(2)}.emoji-header{display:block;background-color:#fff;cursor:default;padding:5px 3px;cursor:pointer}.emoji-header:hover{background:#eee}.open-tab.active .emoji-header{-webkit-box-shadow:0 -2px 0 #57889c;-moz-box-shadow:0 -2px 0 #57889c;box-shadow:0 -2px 0 #57889c;border-top-width:0 !important;margin-top:1px !important;border:1px solid #ddd;border-bottom-color:transparent;border-radius:3px 3px 0 0;cursor:default}#people.open-tab.active .emoji-header{border-left:0}.open-tab.active .emoji-header:hover{background:#fff}.emojionly .emojione{height:4.5ex !important}.emojionly .messageWrapper .message{background:transparent !important}#emoji-selection-container .emojione{min-width:auto;min-height:auto;height:3.2ex}#emoji-selection-container .inputContainer{padding:0 6px}#emoji-selection-container .textInput{padding:6px 0}.rtl-direction #viewEmoji{position:absolute;top:9px;left:10px;right:auto;opacity:.4}#incoming-call-container{margin:0;text-align:center;background:#333;color:#fff;padding:5px 5px 10px 5px}#icoming-call-buttons{width:100%;text-align:center;height:42px}#decline-call{background:#f92222;color:#fff;display:inline-block;float:none;margin:0 5px;border-radius:50%;width:42px;height:42px;padding:0;box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-moz-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-webkit-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);border:1px solid #b91717}#decline-call .icon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-919px 0;width:32px;height:14px;margin:4px auto}#accept-call{background:#2e9c05;color:white;float:none;display:inline-block;margin:0 5px;border-radius:50%;width:42px;height:42px;padding:0;box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-moz-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);-webkit-box-shadow:inset 0 -2px 0 rgba(0,0,0,.05);border:1px solid #1f6b03}#accept-call .icon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-894px 0;width:20px;height:20px;margin:1px auto}#tooLongMsgNotification{position:absolute;bottom:35px;z-index:100000;width:100%;text-align:center;display:none;color:red;font-size:12px}#tooLongMsgNotification.visible{display:block}.callInfoContainer,.callErrorContainer{border:1px solid #ddd;border-radius:5px;padding:10px 8px;display:none;background:#fff}.callIconContainer{display:table-cell;width:35px;vertical-align:middle}.callIconWrapper{width:35px;height:35px;background:#eee;border-radius:50%;vertical-align:middle;display:inline-block}.callIconContainer .voiceCallIcon{background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');width:13px;height:21px;background-position:-849px 0;margin:7px auto}.callIconContainer .videoCallIcon{margin:11.5px auto;background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');background-position:-820px 0;width:24px;height:12px}.callIconContainer .screenShareIcon{margin:8px auto;background-image:url('https://static-v.VOOChat/a-v3-39/images/icons.png');width:22px;height:20px;background-position:-867px 0}.callDetailsContainer{display:table-cell;vertical-align:middle;padding-left:5px}.callTitle{font-size:15px;font-weight:bold}.callTitle.missed{color:#a90329}.callEndDetails{display:none}.callErrorContainer .callEndDetails{display:block}.callInfoWrapper{display:table}.callRetryContainer{padding-left:5px;vertical-align:middle;display:table-cell}.retry-load{float:none;background:#fafafa;color:#717171;border:1px solid #d3d3d3}";
			var s = {
				"chat-notification-container": '<div id="__MESSAGE_ID__" class="messageBody notification clearfix"><div class="notificationContainer"><div class="message">__MESSAGE__</div></div><div class="notificationTime">__TIME__</div><div class="clear"></div></div>',
				"chat-resend-link": '<a id="resendMessage-__MESSAGE_ID__" href="javascript:void(0);" class="messageStatus" title="Resend">__NOT_DELIVERED__</a>',
				"tawk-survey-wrapper": '<div class="surveyContainer"><div class="surveyQuestion">__QUESTION__</div><div class="survey-options-wrapper">__OPTIONS__</div></div>',
				departmentOfflineNotification: '<div class="messageBody notification"><div class="messageWrapper"><div class="message">__MESSAGE__</div></div><div class="clear"></div></div>',
				"survey-option": '<input type="radio" id="__RADIO_ID__" name="__RADIO_NAME__" value="__RADIO_VALUE__" /><label for="__RADIO_ID__">__RADIO_VALUE__</label><br />',
				"file-upload": '<div>__FILE_DISPLAY__<a class="download-file" href="__DOWNLOAD_URL__" title="__DOWNLOAD_TEXT__" target="_blank"><p class="uploaded-file-name"><b>__FILE_NAME__</b></p><span class="download-image"> </span>__FILE_SIZE__ <span>__FILE_TYPE__</span></a></div>',
				"chat-divider": '    <hr id="newMessageDividerLine">    <span id="newMessageDividerLabel">__NEW_MESSAGES__</span>',
				"default-branding": '<span class="thin">Powered by</span> <b>VOOChat</b>',
				fileUploadProgress: '    <div id="upload-__HANDLE__" class="upload-data">        <span class="upload-icon"></span> <span>__FILE_NAME__</span>        <div class="progress">            <div class="progress-bar" role="progressbar" style="width: 0.5%"></div>        </div>    </div>',
				incomingCallRequest: '<div id="incoming-call-container""><p style="margin: 5px 0; font-size: 14px; font-weight: bold;">__INCOMING_CALL__</p><div id="icoming-call-buttons"><button id="decline-call"><div class="icon"></div></button><button id="accept-call"><div class="icon"></div></button></div><div class="clear"></div></div>',
				callInfo: '<div class="loader"><img alt="" title="loading" src="https://static-v.VOOChat/a-v3-39/images/ajax-loader.gif" /></div><div class="callInfoContainer"><div class="callInfoWrapper"><div class="callIconContainer"><div class="callIconWrapper"></div></div><div class="callDetailsContainer"><p class="callTitle"></p><p class="callEndDetails"></p></div></div></div>',
				callError: '<div class="callInfoWrapper"><div class="callDetailsContainer"><p class="callTitle missed">__HEADER__</p><p class="callEndDetails">__MESSAGE__</p></div><div class="callRetryContainer"><button class="retry-load">__ACTION__</button></div></div>',
				"emoji-selection": '<ul id="tabs-selection">__TAB_LIST__<li id="search" class="open-tab"><a href="javascript:void(0);" class="emoji-header"><img class="emojione only-emoji" alt="search" title=":mag:" src="https://cdn.jsdelivr.net/emojione/assets/png/1f50d.png?v=2.2.7" /></a></li><div class="clearfix"></div></ul><div id="tab-content"></div>',
				"emoji-tab-pane": '<div class="tab-pane"><div class="emoji-list">__EMOJIS__</div></div>',
				"emoji-search-pane": '<div class="tab-pane"><div class="inputContainer"><input id="search-emoji" type="text" class="textInput" placeholder="Search Emoji" /></div><div id="search-list"></div></div>',
				"emoji-tab-select": '<li class="open-tab" id="__ID__"><a href="javascript:void(0);" class="emoji-header">__IMAGE__</a></li>',
				"emoji-list": '<a href="javascript:void(0);" class="emoji-select" id="__SHORTNAME__" title="__SHORTNAME__">__IMAGE__</a>',
				changeNameForm: '<div id="formInnerHeight"><div id="changeNameFormMessageContainer" class="formMessageField">__TITLE__</div><fieldset><div class="inputContainer"><input type="text" id="nameField" value="__NAME__" title="__NAME_PLACEHOLDER__" class="textInput" maxlength="40" placeholder="__NAME_PLACEHOLDER__" /></div></fieldset><div id="nameFieldError" class="formErrorContainer"></div><div id="submitWrapper"><p id="submitWrapperMessage">__SAVING_INDICATOR__</p><div id="submitWrapperIcon"></div></div><div class="longFormBottomContainer__IE6__"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton  theme-background-color theme-text-color">__SAVE_BUTTON__</button></div></div>',
				emailTranscriptForm: '<div id="formInnerHeight"><div id="emailTranscriptFormMessageContainer" class="formMessageField">__EMAIL_TRANSCRIPT_TO__:</div><fieldset><div class="inputContainer"><input type="email" id="transcriptEmailField" title="__TRANSCRIPTEMAIL_PLACEHOLDER__" value="__TRANSCRIPTEMAIL__" class="textInput" maxlength="150" placeholder="__TRANSCRIPTEMAIL_PLACEHOLDER__" /></div></fieldset><div id="transcriptEmailFieldError" class="formErrorContainer"></div><div id="submitWrapper"><p id="submitWrapperMessage">__SENDING_INDICATOR__</p>            <div id="submitWrapperIcon"></div></div><div class="longFormBottomContainer__IE6__"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__SEND_BUTTON__</button></div><div class="clear"></div></div>',
				offlineForm: '<div id="overlayOfflineForm">__OFFLINE_MESSAGE_SUCCESSFULY_SENT__</br><div id="resendButton" class="theme-background-color theme-text-color">__SEND_AGAIN__</div></div>    <div class="longFormContainer">        <div id="offlineFormMessageContainer" class="formMessageField">__TITLE__</div>        <div id="formInnerHeight">__FIELDS__</div>    </div><div id="submitWrapper"><p id="submitWrapperMessage">__SENDING_INDICATOR__</p>        <div id="submitWrapperIcon"></div></div><div class="longFormBottomContainer__IE6__"><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__SEND_BUTTON__</button></div><div class="clear"></div>',
				preChatForm: '<div class="longFormContainer">        <div id="preChatFormMessageContainer" class="formMessageField">__TITLE__</div><div id="formInnerHeight">__FIELDS__</div><div id="formSavingStatus"><span id="savingStatus">__STATUS__</span></div></div><div id="submitWrapper"><p id="submitWrapperMessage">__SUBMITTING_INDICATOR__</p>        <div id="submitWrapperIcon"></div></div><div id="prechatButtonContainer" class="longFormBottomContainer__IE6__"><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__START_CHAT_BUTTON__</button>__CLOSE_BUTTON_CONTAINER__<div class="clear"></div></div>',
				departmentSelection: '<fieldset><label class="form-field-label">__REQUIRED__ __LABEL__</label><div class="inputContainer selection "><select id="__ID__Field" title="__LABEL__">__VALUE__</select></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
				inputTextFieldType: '<fieldset><div class="inputContainer"><input type="__INPUT_TYPE__" id="__ID__Field" title="__LABEL__" value="__VALUE__" class="textInput" maxlength="__MAXLENGTH__"placeholder="__REQUIRED__ __LABEL__" /><label class="form-field-label small">__REQUIRED__ __LABEL__</label><span id="__ID__FieldValid" class="validInputIcon"></span></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
				textAreaFieldType: '<fieldset class="textareaFieldset"><textarea id="__ID__Field" title="__LABEL__" maxlength="__MAXLENGTH__" placeholder="__REQUIRED__ __LABEL__"></textarea><label class="form-field-label small">__REQUIRED__ __LABEL__</label><span id="__ID__FieldValid" class="validInputIcon"></span></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
				selectionsType: '<fieldset><label class="form-field-label">__REQUIRED__ __LABEL__</label><div><div class="selections-container" id="__ID__Container">__VALUE__</div></div></fieldset><div id="__ID__FieldError" class="formErrorContainer"></div>',
				checkboxSelectionType: '<div class="selection-container"><input type="checkbox" name="__FIELD_ID__group" id="__ID__" value="__VALUE__" /><label class="selection-label" for="__ID__">__VALUE__</label></div>',
				radioSelectionType: '<div class="selection-container"><input type="radio" name="__FIELD_ID__group" id="__ID__" value="__VALUE__" /><label class="selection-label" for="__ID__">__VALUE__</label></div>',
				"close-form-button": '<button id="formCloseChat" class="declineButton formButton">__CLOSE_BUTTON__</button>',
				inactivityOverlay: "<div>__OVERLAY__</div>",
				maintenanceOverlay: "<div>__OVERLAY__</div>",
				endChatForm: '<div id="formInnerHeight"><div id="endChatFormMessageContainer" class="formMessageField">__TITLE__</div><div id="submitWrapper"><p id="submitWrapperMessage">__ENDING_INDICATOR__</p>            <div id="submitWrapperIcon"></div></div><div class="longFormBottomContainer"><button id="formCancel" class="declineButton formButton">__CANCEL_BUTTON__</button><button id="formSubmit" class="approveButton formButton theme-background-color theme-text-color">__END_CHAT_BUTTON__</button></div></form>',
				"tawkchat-maximized-wrapper": '<div id="innerWrapper" class="border-corner"><div id="headerBoxWrapper"><div id="headerBox" class="theme-background-color theme-text-color border-corner"><div id="headerAccountStateContainer"><p id="headerAccountState"><span id="shortMessage"></span></p></div><div id="agentWrapper"><div id="agentProfileContainer"></div><div id="agentListBack"><div id="listBack"></div><p id="agentListLabel">__AGENT_LIST__</p></div></div><div id="headerBoxControlsContainer"><a id="minimizeChat" href="javascript:void(0);" title="__MINIMIZE__"><span class="icon"></span></a><a id="popoutChat" href="javascript:void(0);" title="__POPOUT__"><span class="icon"></span></a><a id="endChat" href="javascript:void(0);" title="__END__"><span class="icon"></span></a></div></div></div><div id="agentBar"><div id="agentList" class="__IE6__"></div></div><div id="chatPanel"><div id="chatContainerWrapper"><div id="chatContainer" class="__IE6__">__GREETINGS__<div id="chatTableWrapper"><div id="chatRowWrapper"><div id="chatCellWrapper"><div id="chatWrapper" class="single-agent"><div id="agentTypingContainer" class="__IE6__"></div></div></div></div></div><div id="maxFileNotificationContainer" class="hidden"><div id="maxFileNotificationMessage"></div><div id="maxFileNumberList"></div><div class="closeButtonContainer"><span id="closeNumberNotification" class="closeNotification"></span></div></div><div id="maxSizeNotificationContainer" class="hidden"><div id="maxSizeNotificationMessage"></div><div id="maxFileSizeList"></div><div class="closeButtonContainer"><span id="closeSizeNotification" class="closeNotification"></span></div></div></div></div><div id="tooLongMsgNotification">__TOO_LONG_MESSAGE__</div><div id="actionsContainer" class="__IE6__"><fieldset id="textareaWrapper"><div id="drop-text"><span></span></div><div id="ratingContainer"><a id="ratePositive" href="javascript:void(0);" title="__RATE_POSITIVE__"></a><a id="rateNegative" href="javascript:void(0);" title="__RATE_NEGATIVE__"></a></div><div id="textareaContainer" class="additionalPadding"></div><a href="javascript:void(0);" id="viewEmoji"><span class="icon"></span></a></fieldset><div id="optionsContainer" style="display: block;"><div class="item" id="soundOption" class="activeSound"><div id="soundOnIcon" class="icon"></div><div id="soundTitle" class="tooltip">Disable Sound</div></div><div class="item" id="emailTranscriptOption"><div id="emailIcon" class="icon"></div><div class="tooltip"></div></div><div class="item" id="uploadFileOption"><label for="fileInput"><div id="uploadFileIcon" class="icon"></div></label><div class="tooltip"></div></div><div id="videoCall" class="item" style="display: none;"><div id="videoCallIcon" class="icon"></div><div class="tooltip"></div></div><div id="voiceCall"  class="item" style="display: none;"><div id="voiceCallIcon" class="icon"></div><div class="tooltip"></div></div><div id="screenShare" class="item" style="display: none;"><div id="screenShareIcon" class="icon"></div><div class="tooltip"></div></div></div></div><form enctype="multipart/form-data" id="upload-form" method="post"><input type="file" class="hidden file-input" name="file[]" multiple="multiple" id="fileInput" /><label class="upload-file sprite-background" title="Upload File" for="test"></label></form></div><div id="emoji-selection-container"><img alt="" title="loading" src="https://static-v.VOOChat/a-v3-39/images/ajax-loader.gif" /></div><div id="formContainer"></div><div id="newMessagesBar"><div id="newMessageContainer"><p id="newMessagesNotification"><a id="newMessagesNotificationLink" title=""></a><span id="notificationMessageText"></span></p><div id="newMessageArrowDown"></div></div></div><div id="__BOTTOM_CONTAINER__"><a id="__TAWK_TO_LINK__" tabindex="-1"></a></div><div id="tawkToContent"><div class="longFormContainer"><div class="wrapper"><div id="tawkImage"></div><p id="tawkHeader">VOOChat</p><p id="tawkContent"></p></div></div><div class="buttonContainer"><button id="cancelTawkRedirect"></button><button id="tawkRedirect" class="theme-background-color theme-text-color"></button></div></div></div>',
				greetingsOverlay: '<div id="greetingsOverlay"><div id="greetingsWrapper"><div id="greetingsContainer"></div><div id="embedArrow"></div></div></div>',
				chatEnded: '<p class="title">__CHAT_ENDED__</p><div class="buttonContainer"><button id="newChat">__START_CHAT__</button><button id="emailTranscript">__EMAIL_TRANCRIPT__</button></div>',
				"chat-message-container": '__OWNER_TPL__<div class="clearfix"></div><div class="messageBody clearfix">__CONTENT__</div>',
				"chat-message-owner-agent": '<div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__; __IE_IMAGE_SCALE__;" class="agentProfileImage"></div></div>',
				"chat-message-owner-visitor": '<div class="ownerNameContainer"><a class="messageOwnerName visitor" href="#">__NAME__</a></div>',
				"agent-typing": '<div id="agentTyping-__MESSAGE_ID__" class="agentChatContainer clearfix"><div class="ownerNameContainer"><div class="messageOwnerName agent">__NAME__</div></div><div class="profileImageContainer"><div class="agentProfileImage"></div><div style="background-image : __IMAGE_URL__; __IE_IMAGE_SCALE__;" class="agentProfileImage"></div></div><div class="clearfix"></div><div class="messageBody clearfix"><div class="message agentTypingIndicator"><span>.</span><span>.</span><span>.</span></div></div></div>',
				"agent-profile": "__AGENT_PROFILE_DETAIL____AGENT_PROFILE_IMAGE__",
				"agent-profile-image": '    <div class="alias-image"></div><div class="alias-image" style="__IMAGE_URL__; __IE_IMAGE_SCALE__;"></div>',
				"agent-profile-description": '<div class="agentContainer"><div class="agentInformationContainer"><p class="__POSITION_CLASS__">__NAME__</p><p class="position-label">__POSITION__</p></div></div>',
				"agent-profile-description-noimage": '<div class="agentContainerNoImage"><div class="agentInformationContainerNoImage"><p class="agentInfoNoImage"><b>__NAME__</b><i>__POSITION__</i></p></div></div>',
				"agent-profile-description-single": '<div class="agentContainer"><div class="agentInformationContainer"><p class="__POSITION_CLASS__">__NAME__&nbsp;-&nbsp;__POSITION__</p></div></div>',
				"wait-time-container": '<div class="messageBody notification"><div class="messageWrapper"><div id="stickyContainer"><div id="stickyIcon"></div></div><div class="message">__MESSAGE__</div></div><div class="clear"></div></div>',
				"extra-profile": '<div class="alias-image"></div><div class="overlay"></div><p id="totalExtra"></p>',
				"chat-message-row": '<div class="messageWrapper __PENDING__"><div class="message">__MESSAGE__</div></div>__MESSAGE_STATUS_ROW__<div class="clear"></div>',
				"chat-message-status-row": '    <div class="messageStatusContainer">        <span class="messageTime __TIME_CLASS__">__TIME__</span>    </div>',
				"chat-message-pending-row": '    <div class="messageStatusContainer pending">        <span class="messageStatus"></span>    </div>',
				"chat-message-success": '<span class="message-success"></span>'
			};
			Function.prototype.bind ||
			(Function.prototype.bind = function (a) {
				if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
				var b = Array.prototype.slice.call(arguments, 1), f = this, q = function () {
				}, c = function () {
					return f.apply(this instanceof q && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
				};
				q.prototype = this.prototype;
				c.prototype = new q;
				return c
			});
			Object.keys || (Object.keys = function () {
				var a = Object.prototype.hasOwnProperty, b = !{toString: null}.propertyIsEnumerable("toString"),
					f = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
					q = f.length;
				return function (c) {
					if ("object" !== typeof c && ("function" !== typeof c || null === c)) throw new TypeError("Object.keys called on non-object");
					var d = [], e;
					for (e in c) a.call(c, e) && d.push(e);
					if (b) for (e = 0; e < q; e++) a.call(c, f[e]) && d.push(f[e]);
					return d
				}
			}());
			Array.prototype.forEach || (Array.prototype.forEach = function (a) {
				if (void 0 === this || null === this) throw new TypeError;
				var b = Object(this), f = b.length >>>
					0;
				if ("function" !== typeof a) throw new TypeError;
				for (var q = 2 <= arguments.length ? arguments[1] : void 0, c = 0; c < f; c++) c in b && a.call(q, b[c], c, b)
			});
			"function" !== typeof String.prototype.trim && (String.prototype.trim = function () {
				return this.replace(/^\s+|\s+$/g, "")
			});
			var G = {undefined: 1, "boolean": 1, number: 1, string: 1}, r = {
				exportProperty: function (a, b, f) {
					a[b] = f
				}
			};
			r.dependencyDetection = function () {
				var a = [];
				return {
					begin: function (b) {
						a.push(b && {callback: b, distinctDependencies: []})
					}, end: function () {
						a.pop()
					}, registerDependency: function (b) {
						if (!r.isSubscribable(b)) throw Error("Only subscribable things can act as dependencies");
						if (0 < a.length) {
							var f = a[a.length - 1];
							!f || 0 <= r.utils.arrayIndexOf(f.distinctDependencies, b) || (f.distinctDependencies.push(b), f.callback(b))
						}
					}, ignore: function (b, f, q) {
						try {
							return a.push(null), b.apply(f, q || [])
						} finally {
							a.pop()
						}
					}
				}
			}();
			r.observable = function (a) {
				function b() {
					if (0 < arguments.length) return b.equalityComparer && b.equalityComparer(f, arguments[0]) || (b.valueWillMutate(), f = arguments[0], b.valueHasMutated()), this;
					r.dependencyDetection.registerDependency(b);
					return f
				}

				var f = a;
				r.subscribable.call(b);
				b.peek =
					function () {
						return f
					};
				b.valueHasMutated = function () {
					b.notifySubscribers(f)
				};
				b.valueWillMutate = function () {
					b.notifySubscribers(f, "beforeChange")
				};
				r.utils.extend(b, r.observable.fn);
				r.exportProperty(b, "peek", b.peek);
				r.exportProperty(b, "valueHasMutated", b.valueHasMutated);
				r.exportProperty(b, "valueWillMutate", b.valueWillMutate);
				return b
			};
			r.subscribable = function () {
				this._subscriptions = {};
				r.utils.extend(this, r.subscribable.fn);
				r.exportProperty(this, "subscribe", this.subscribe);
				r.exportProperty(this, "getSubscriptionsCount",
					this.getSubscriptionsCount)
			};
			r.subscribable.fn = {
				subscribe: function (a, b, f) {
					f = f || "change";
					a = b ? a.bind(b) : a;
					var q = new r.subscription(this, a, function () {
						r.utils.arrayRemoveItem(this._subscriptions[f], q)
					}.bind(this));
					this._subscriptions[f] || (this._subscriptions[f] = []);
					this._subscriptions[f].push(q);
					return q
				}, notifySubscribers: function (a, b) {
					b = b || "change";
					if (this.hasSubscriptionsForEvent(b)) {
						var f = this._subscriptions[b], q;
						q = 0;
						for (var c = this._subscriptions[b].length; q < c; ++q) f = this._subscriptions[b].slice(0),
						(f = f[q]) && !0 !== f.isDisposed && f.callback(a)
					}
				}, hasSubscriptionsForEvent: function (a) {
					return this._subscriptions[a] && this._subscriptions[a].length
				}, getSubscriptionsCount: function () {
					var a = 0;
					r.utils.objectForEach(this._subscriptions, function (b, f) {
						a += f.length
					});
					return a
				}, unsubscribe: function (a, b) {
					r.utils.arrayRemoveItem(this._subscriptions[b || "change"], a)
				}
			};
			r.isSubscribable = function (a) {
				return null !== a && "function" === typeof a.subscribe && "function" === typeof a.notifySubscribers
			};
			r.subscription = function (a, b,
			                           f) {
				this.target = a;
				this.callback = b;
				this.disposeCallback = f;
				r.exportProperty(this, "dispose", this.dispose)
			};
			r.subscription.prototype.dispose = function () {
				this.isDisposed = !0;
				this.disposeCallback()
			};
			r.observable.fn = {
				equalityComparer: function (a, b) {
					return null === a || typeof a in G ? a === b : !1
				}
			};
			var V = r.observable.protoProperty = "__tw_proto__";
			r.observable.fn[V] = r.observable;
			r.hasPrototype = function (a, b) {
				return null === a || void 0 === a || void 0 === a[V] ? !1 : a[V] === b ? !0 : r.hasPrototype(a[V], b)
			};
			r.isObservable = function (a) {
				return r.hasPrototype(a,
					r.observable)
			};
			r.utils = {
				arrayIndexOf: function (a, b) {
					if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
					for (var f = 0, q = a.length; f < q; f++) if (a[f] === b) return f;
					return -1
				}, extend: function (a, b) {
					if (b) for (var f in b) b.hasOwnProperty(f) && (a[f] = b[f]);
					return a
				}, arrayRemoveItem: function (a, b) {
					var f = r.utils.arrayIndexOf(a, b);
					0 <= f && a.splice(f, 1)
				}, objectForEach: function (a, b) {
					for (var f in a) a.hasOwnProperty(f) && b(f, a[f])
				}
			};
			(function (a) {
				function b(a, n) {
					var f = a.split("@"), q = "";
					1 < f.length &&
					(q = f[0] + "@", a = f[1]);
					a = a.replace(s, ".");
					for (var f = a.split("."), c = f.length, ia = []; c--;) ia[c] = n(f[c]);
					f = ia.join(".");
					return q + f
				}

				function f(a) {
					for (var b = [], n = 0, f = a.length, q, c; n < f;) q = a.charCodeAt(n++), 55296 <= q && 56319 >= q && n < f ? (c = a.charCodeAt(n++), 56320 == (c & 64512) ? b.push(((q & 1023) << 10) + (c & 1023) + 65536) : (b.push(q), n--)) : b.push(q);
					return b
				}

				function q(a) {
					var b, n, q, r, s, x, y, z, A, B = [], C, D, E;
					a = f(a);
					C = a.length;
					b = m;
					n = 0;
					s = l;
					for (x = 0; x < C; ++x) A = a[x], 128 > A && B.push(w(A));
					for ((q = r = B.length) && B.push(p); q < C;) {
						y = c;
						for (x = 0; x <
						C; ++x) A = a[x], A >= b && A < y && (y = A);
						D = q + 1;
						if (y - b > u((c - n) / D)) throw new RangeError(t.overflow);
						n += (y - b) * D;
						b = y;
						for (x = 0; x < C; ++x) {
							A = a[x];
							if (A < b && ++n > c) throw new RangeError(t.overflow);
							if (A == b) {
								z = n;
								for (y = d; ; y += d) {
									A = y <= s ? e : y >= s + g ? g : y - s;
									if (z < A) break;
									E = z - A;
									z = d - A;
									B.push(w(A + E % z + 22 + 75 * (26 > A + E % z) - 0));
									z = u(E / z)
								}
								B.push(w(z + 22 + 75 * (26 > z) - 0));
								s = D;
								y = 0;
								n = q == r ? u(n / h) : n >> 1;
								for (n += u(n / s); n > v * g >> 1; y += d) n = u(n / v);
								s = u(y + (v + 1) * n / (n + k));
								n = 0;
								++q
							}
						}
						++n;
						++b
					}
					return B.join("")
				}

				var c = 2147483647, d = 36, e = 1, g = 26, k = 38, h = 700, l = 72, m = 128, p = "-", r =
					/[^\x20-\x7E]/, s = /[\x2E\u3002\uFF0E\uFF61]/g, t = {
					overflow: "Overflow: input needs wider integers to process",
					"not-basic": "Illegal input >= 0x80 (not a basic code point)",
					"invalid-input": "Invalid input"
				}, v = d - e, u = Math.floor, w = String.fromCharCode;
				a.punycode = {
					version: "1.4.1", ucs2: {decode: f}, encode: q, toASCII: function (a) {
						return b(a, function (a) {
							return r.test(a) ? "xn--" + q(a) : a
						})
					}
				}
			})(b);
			h.$_Tawk = h.$_Tawk || {};
			h.Tawk_API = h.Tawk_API || {};
			if ("object" === typeof h.$_Tawk_API) for (var v in h.$_Tawk_API) h.$_Tawk_API.hasOwnProperty(v) &&
			(h.Tawk_API[v] = h.$_Tawk_API[v]);
			w.begin = function (a) {
				b.main.begin(a)
			};
			w.init = function (a) {
				b.main.init(a)
			};
			c = {
				onLoad: function () {
				}, onStatusChange: function () {
				}, onBeforeLoad: function () {
				}, onChatMaximized: function () {
				}, onChatMinimized: function () {
				}, onChatHidden: function () {
				}, onChatStarted: function () {
				}, onChatEnded: function () {
				}, onPrechatSubmit: function () {
				}, onOfflineSubmit: function () {
				}, onChatMessageVisitor: function () {
				}, onChatMessageAgent: function () {
				}, onChatMessageSystem: function () {
				}, onAgentJoinChat: function () {
				},
				onAgentLeaveChat: function () {
				}, onChatSatisfaction: function () {
				}, onVisitorNameChanged: function () {
				}, onFileUpload: function () {
				}
			};
			w.maximize = Tawk_API.maximize = function () {
				w.ready && b.sessionHandler.notifyWindowState("max")
			};
			w.minimize = Tawk_API.minimize = function () {
				w.ready && b.sessionHandler.notifyWindowState("min")
			};
			w.toggle = Tawk_API.toggle = function () {
				w.ready && b.viewHandler.toggleWidget()
			};
			w.popup = Tawk_API.popup = function () {
				w.ready && b.viewHandler.popoutWidget()
			};
			w.getWindowType = Tawk_API.getWindowType = function () {
				if (w.ready) return k.isEmbedded ?
					"embed" : k.isPopup ? "popup" : "inline"
			};
			w.showWidget = Tawk_API.showWidget = function () {
				w.ready && b.viewHandler.showWidget()
			};
			w.hideWidget = Tawk_API.hideWidget = function () {
				w.ready && b.viewHandler.hideWidget()
			};
			w.toggleVisibility = Tawk_API.toggleVisibility = function () {
				w.ready && b.viewHandler.toggleVisibility()
			};
			w.getStatus = Tawk_API.getStatus = function () {
				if (w.ready) return t.pageStatus()
			};
			w.isChatMaximized = Tawk_API.isChatMaximized = function () {
				if (w.ready) return "max" === t.chatWindowState()
			};
			w.isChatMinimized = Tawk_API.isChatMinimized =
				function () {
					if (w.ready) return "min" === t.chatWindowState()
				};
			w.isChatHidden = Tawk_API.isChatHidden = function () {
				if (w.ready) return b.viewHandler.isWidgetHidden()
			};
			w.isChatOngoing = Tawk_API.isChatOngoing = function () {
				if (w.ready) return b.chatHandler.isChatOngoing()
			};
			w.isVisitorEngaged = Tawk_API.isVisitorEngaged = function () {
				if (w.ready) return b.chatHandler.isVisitorEngaged()
			};
			w.endChat = Tawk_API.endChat = function () {
				w.ready && b.chatHandler.triggerEndChat()
			};
			w.setForeignKey = Tawk_API.setForeignKey = function (a, n) {
				b.sessionHandler.setForeignKey(a,
					n)
			};
			w.setConversion = Tawk_API.setConversion = function (a, n) {
				b.sessionHandler.setConversionId(a, n)
			};
			w.addEvent = Tawk_API.addEvent = function (a, n, f) {
				b.sessionHandler.addEvent(a, n, f)
			};
			w.setAttributes = Tawk_API.setAttributes = function (a, n) {
				b.sessionHandler.setAttributes(a, !0, n)
			};
			w.addTags = Tawk_API.addTags = function (a, n) {
				b.sessionHandler.addTags(a, n)
			};
			w.removeTags = Tawk_API.removeTags = function (a, n) {
				b.sessionHandler.removeTags(a, n)
			};
			var E = "", F = 0, N = !1, L = !1, M = !1, K = null, x = null, ya, X, Y, va, fa, T = !0, k = {
					widgetId: "default",
					isPopup: !1,
					isEmbedded: !1,
					soundOn: r.observable(!0),
					showAgentBar: !0,
					showWaitTime: !0,
					showPreChatForm: !1,
					showOfflineForm: !0,
					hideWidget: !1,
					hideWidgetOnLoad: !1,
					hideWidgetOnOffline: !1,
					greetings: {},
					prechatOptions: {},
					headerBgColor: null,
					headerTxtColor: null,
					whiteLabel: r.observable(),
					mobileWidget: r.observable("round"),
					desktopWidget: r.observable("full"),
					chatBubble: r.observable(),
					chatPosition: r.observable("br"),
					maximizedDimensions: r.observable({width: 0, height: 0}),
					minimizedDimensions: r.observable({
						width: 0, height: 0,
						position: "br"
					}),
					onClickAction: "max",
					widgetVersion: 0,
					locale: "en",
					schedule: null,
					scheduleTimezone: null,
					isTopPositioned: function () {
						return "tr" === this.chatPosition() || "tl" === this.chatPosition()
					},
					isBottomPositioned: function () {
						return "br" === this.chatPosition() || "bl" === this.chatPosition()
					},
					isCenterPositioned: function () {
						return "cr" === this.chatPosition() || "cl" === this.chatPosition()
					},
					isRightPositioned: function () {
						return "cr" === this.chatPosition() || "tr" === this.chatPosition() || "br" === this.chatPosition()
					},
					isLeftPositioned: function () {
						return "cl" ===
							this.chatPosition() || "tl" === this.chatPosition() || "bl" === this.chatPosition()
					},
					isDesktopRectangle: function () {
						return "min" !== this.desktopWidget()
					},
					agentTextBgColor: null,
					agentTextColor: null,
					visitorTextBgColor: null,
					visitorTextColor: null,
					topCorner: null,
					bottomCorner: null,
					maxStyle: r.observable(),
					minStyle: r.observable(),
					mobMaxStyle: r.observable(),
					mobMinStyle: r.observable(),
					isRTL: r.observable(!1),
					webRTCSettings: r.observable(),
					brandingRedirect: r.observable()
				}, A = {
					uuid: null, uuidVer: 0, visitorId: "", name: r.observable(),
					displayName: r.observable(), email: r.observable(), transcriptEmail: "", uuids: []
				}, W = {pageId: null, tawkId: "", pageName: r.observable(), isStable: !0}, y = {
					chatSynced: !1,
					chatBuffer: [],
					chatVersion: 0,
					chatDepartment: "any",
					agents: {},
					agentProfiles: {},
					profiles: {},
					rating: r.observable(0),
					chatHistory: [],
					chatOrder: 0,
					chatEndVersion: 1
				}, t = {
					transferKey: "",
					sessionKey: "",
					transferedSession: !1,
					currentVersion: 573,
					criticalVersion: 0,
					serverVersion: 0,
					agentImgUrl: "https://s3.amazonaws.com/tawk-to-pi",
					visitorAppServer: "https://va.VOOChat",
					visitorSocketServer: "",
					chatWindowState: r.observable("min"),
					pageStatus: r.observable(),
					pageStatusVersion: 0,
					prechatFormSubmitted: !1,
					waitTime: 6E4,
					chatBubbleClosed: r.observable(!1),
					restarted: !1,
					departments: []
				}, ra = {chat_sound: "https://static-v.VOOChat/a-v3-39/audio/chat_sound.mp3"},
				Ca = {chat_sound: "https://static-v.VOOChat/a-v3-39/audio/chat_sound.ogg"},
				Da = {chat_sound: "https://static-v.VOOChat/a-v3-39/audio/chat_sound.wav"},
				z = {chat_sound: "https://static-v.VOOChat/a-v3-39/audio/chat_sound.aac"};
			(function () {
				var a =
					!1, b = /xyz/.test(function () {
					xyz
				}) ? /\b_super\b/ : /.*/;
				this.TawkClass = function () {
				};
				TawkClass.extend = function (f) {
					function q() {
						!a && this.init && this.init.apply(this, arguments)
					}

					var c = this.prototype;
					a = !0;
					var d = new this;
					a = !1;
					for (var e in f) d[e] = "function" === typeof f[e] && "function" === typeof c[e] && b.test(f[e]) ? function (a, b) {
						return function () {
							var n = this._super;
							this._super = c[a];
							var f = b.apply(this, arguments);
							this._super = n;
							return f
						}
					}(e, f[e]) : f[e];
					q.prototype = d;
					q.prototype.constructor = q;
					q.extend = arguments.callee;
					return q
				}
			})();
			v = function () {
				this.br = "<br/>";
				this.regAlphaNumeric = /^[a-z0-9\-]{1,50}$/i;
				this.regNameMach = /^V[0-9]{16}$/;
				this.regTrim = /^\s+|\s+$/g;
				this.regDate = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
				this.regEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/i;
				this.regSurvey = /\[option\](.*?)(<br\/>|$)/g;
				this.regSurveyQuestion = /^(.*?)\[option\]/g;
				this.regOption = /\[option\]/g;
				this.regBr = /<br\/>/;
				this.regMatchUrl = RegExp('(?:^(?:(?:[a-z]+:)?//)?(?:\\S+(?::\\S*)?@)?(?:localhost|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)', "i");
				this.regMatchIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\/([a-zA-Z0-9!$&'()*+.=-_~:@\/\?#]+)+)\b/gi;
				this.regEmailMatch = /^((mailto:){0,1}[a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]+)$/;
				this.regLineBreaks = /(\r\n|\n|\r)/gm;
				this.decodedAmp = "&";
				this.decodedQuote = '"';
				this.decodedApos = "'";
				this.decodedLess = "<";
				this.decodedGreat = ">";
				this.encodedQuote = "&quot;";
				this.encodedApos = "&#39;";
				this.encodedLess = "&lt;";
				this.encodedGreat = "&gt;";
				this.encodedAmp = "&amp;";
				this.rtlLangTab = ["ar", "he", "fa"];
				this.decodedAmpRegex = RegExp(this.decodedAmp, "g");
				this.decodedQuoteRegex = RegExp(this.decodedQuote, "g");
				this.decodedAposRegex =
					RegExp(this.decodedApos, "g");
				this.decodedLessRegex = RegExp(this.decodedLess, "g");
				this.decodedGreatRegex = RegExp(this.decodedGreat, "g");
				this.encodedQuoteRegex = RegExp(this.encodedQuote, "g");
				this.encodedAposRegex = RegExp(this.encodedApos, "g");
				this.encodedLessRegex = RegExp(this.encodedLess, "g");
				this.encodedGreatRegex = RegExp(this.encodedGreat, "g");
				this.encodedAmpRegex = RegExp(this.encodedAmp, "g");
				this.connectionUrl = "https://video.VOOChat"
			};
			v.prototype.createElement = function (a, b, f, q, c) {
				var d;
				a = a.createElement(b);
				f = f || {};
				for (d in f) a[d] = f[d];
				c && "iframe" !== b && (a.innerHTML = c);
				q && (a.style.cssText = q);
				return a
			};
			v.prototype.getDocument = function (a) {
				return a.contentWindow ? a.contentWindow.document : a.contentDocument ? a.contentDocument : a.document ? a.document : null
			};
			v.prototype.parseQueryString = function (a) {
				var b, f, q, c = {};
				q = (a ? a.replace(/(.*)\?/, "") : h.location.search.substring(1)).split("&");
				a = 0;
				for (b = q.length; a < b; a += 1) f = q[a].split("="), c[f[0]] = f[1];
				return c
			};
			v.prototype.createQueryString = function (a) {
				var b, f = [];
				for (b in a) a.hasOwnProperty(b) &&
				f.push(encodeURIComponent(b) + "=" + encodeURIComponent(a[b]));
				return f.join("&")
			};
			v.prototype.getReloadedScript = function () {
				var a, b, f = document.getElementsByTagName("script"), q = null;
				a = 0;
				for (b = f.length; a < b; a++) f[a].id && -1 !== f[a].id.indexOf("TawkScript") && (q = f[a]);
				return q
			};
			v.prototype.parseApi = function () {
				var a = Tawk_API;
				"function" === typeof a.onBeforeLoad && (c.onBeforeLoad = function () {
					"function" === typeof a.onBeforeLoad && (a.onBeforeLoad(), delete a.onBeforeLoad)
				});
				"function" === typeof a.onLoad && (c.onLoad = function () {
					"function" ===
					typeof a.onLoad && (a.onLoad(), delete a.onLoad)
				});
				"function" === typeof a.onStatusChange && (c.onStatusChange = function (b) {
					try {
						a.onStatusChange(b)
					} catch (f) {
					}
				});
				"function" === typeof a.onChatMaximized && (c.onChatMaximized = function () {
					try {
						a.onChatMaximized()
					} catch (b) {
					}
				});
				"function" === typeof a.onChatMinimized && (c.onChatMinimized = function () {
					try {
						a.onChatMinimized()
					} catch (b) {
					}
				});
				"function" === typeof a.onChatHidden && (c.onChatHidden = function () {
					try {
						a.onChatHidden()
					} catch (b) {
					}
				});
				"function" === typeof a.onChatStarted && (c.onChatStarted =
					function () {
						try {
							a.onChatStarted()
						} catch (b) {
						}
					});
				"function" === typeof a.onChatEnded && (c.onChatEnded = function () {
					try {
						a.onChatEnded()
					} catch (b) {
					}
				});
				"function" === typeof a.onPrechatSubmit && (c.onPrechatSubmit = function (b) {
					try {
						a.onPrechatSubmit(b)
					} catch (f) {
					}
				});
				"function" === typeof a.onOfflineSubmit && (c.onOfflineSubmit = function (b) {
					try {
						a.onOfflineSubmit(b)
					} catch (f) {
					}
				});
				"function" === typeof a.onChatMessageVisitor && (c.onChatMessageVisitor = function (b) {
					try {
						a.onChatMessageVisitor(b)
					} catch (f) {
					}
				});
				"function" === typeof a.onChatMessageAgent &&
				(c.onChatMessageAgent = function (b) {
					try {
						a.onChatMessageAgent(b)
					} catch (f) {
					}
				});
				"function" === typeof a.onChatMessageSystem && (c.onChatMessageSystem = function (b) {
					try {
						a.onChatMessageSystem(b)
					} catch (f) {
					}
				});
				"function" === typeof a.onAgentJoinChat && (c.onAgentJoinChat = function (b) {
					try {
						a.onAgentJoinChat(b)
					} catch (f) {
					}
				});
				"function" === typeof a.onAgentLeaveChat && (c.onAgentLeaveChat = function (b) {
					try {
						a.onAgentLeaveChat(b)
					} catch (f) {
					}
				});
				"function" === typeof a.onChatSatisfaction && (c.onChatSatisfaction = function (b) {
					try {
						a.onChatSatisfaction(b)
					} catch (f) {
					}
				});
				"function" === typeof a.onVisitorNameChanged && (c.onVisitorNameChanged = function (b) {
					try {
						a.onVisitorNameChanged(b)
					} catch (f) {
					}
				});
				"function" === typeof a.onFileUpload && (c.onFileUpload = function (b) {
					try {
						a.onFileUpload(b)
					} catch (f) {
					}
				});
				c.disableSound = !!a.disableSound;
				c.embedded = a.embedded || null;
				c.profileName = a.profileName || null;
				c.visitor = a.visitor || null;
				c.disableMobileBackHistory = !!a.disableMobileBackHistory
			};
			v.prototype.trim = function (a) {
				return this.isString(a) ? String.prototype.trim ? a.trim().toString() : a.replace(this.regTrim,
					"") : null
			};
			v.prototype.isString = function (a) {
				return void 0 === a || "string" !== typeof a ? !1 : !0
			};
			v.prototype.isEmail = function (a) {
				return this.regEmail.test(a)
			};
			v.prototype.isArray = Array.isArray || function (a) {
				return "[object Array]" === Object.prototype.toString.call(a)
			};
			v.prototype.parseVisitorName = function (a) {
				return this.isGeneratedName(a) ? b.languageParser.translate("chat", "defaultName") : a
			};
			v.prototype.generateRandomString = function (a) {
				var b, f = [];
				a = a || 6;
				for (b = 0; b < a; b++) f.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 *
					Math.random())));
				return f.join("")
			};
			v.prototype.computedStyle = function (a, b) {
				var f;
				if (!a || !b) return null;
				if (a.currentStyle) f = a.currentStyle[b]; else try {
					f = getComputedStyle(a, null).getPropertyValue(b)
				} catch (q) {
					f = "none"
				}
				"width" === b && "auto" === f && (f = a.clientWidth);
				return "" + f
			};
			v.prototype.parseChatTime = function (a) {
				var b = this.getDateFromUTC(a);
				a = b.getHours();
				b = b.getMinutes();
				10 > a && (a = "0" + a);
				10 > b && (b = "0" + b);
				return a + ":" + b
			};
			v.prototype.getDateFromUTC = function (a) {
				if (a instanceof Date) return a;
				a = this.regDate.exec(a);
				return new Date(Date.UTC(a[1], a[2] - 1, a[3], a[4], a[5], a[6], a[7]))
			};
			v.prototype.rawEncode = function (a) {
				return a.replace(this.decodedAmpRegex, this.encodedAmp).replace(this.decodedQuoteRegex, this.encodedQuote).replace(this.decodedAposRegex, this.encodedApos).replace(this.decodedLessRegex, this.encodedLess).replace(this.decodedGreatRegex, this.encodedGreat)
			};
			v.prototype.rawDecode = function (a) {
				return a.replace(this.encodedQuoteRegex, this.decodedQuote).replace(this.encodedAposRegex, this.decodedApos).replace(this.encodedLessRegex,
					this.decodedLess).replace(this.encodedGreatRegex, this.decodedGreat).replace(this.encodedAmpRegex, this.decodedAmp)
			};
			v.prototype.getMilliseconds = function (a) {
				a instanceof Date || (a = this.regDate.exec(a), a = new Date(Date.UTC(a[1], a[2] - 1, a[3], a[4], a[5], a[6], a[7])));
				return a.getTime()
			};
			v.prototype.capitalize = function (a) {
				return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
			};
			v.prototype.getDepartmentStatus = function (a) {
				var b, f, q = t.departments, c = "", d = !0, e = "";
				if ("any" === a) return {status: "", isOnline: !0, name: ""};
				b = 0;
				for (f = q.length; b < f; b++) if (q[b].did === a) {
					d = "online" === q[b].st;
					c = q[b].st;
					e = q[b].n;
					break
				}
				return {status: c, isOnline: d, name: e}
			};
			v.prototype.getElementsByClassName = function (a, b) {
				var f, q, c, d;
				if (a.getElementsByClassName) return a.getElementsByClassName(b);
				c = a.getElementsByTagName("*");
				d = [];
				f = 0;
				for (q = c.length; f < q; f++) -1 !== c[f].className.indexOf(b) && d.push(c[f]);
				return d
			};
			v.prototype.insertBeaconIframe = function () {
				N || this.insertStaticIframe("https://va.VOOChat/update/" + W.pageId + "/" + $_Tawk_WidgetId + "?v=" + (t.serverVersion ||
					(new Date).getTime()) + "&$_tawk_beacon=true")
			};
			v.prototype.insertStaticIframe = function (a) {
				var b = document.createElement("iframe");
				b.style.display = "none";
				b.src = a;
				document.body && document.body.appendChild(b)
			};
			v.prototype.insertScript = function (a, b, f) {
				var q = document.getElementsByTagName("script")[0], c = document.createElement("script");
				c.async = !0;
				c.src = a;
				c.charset = "UTF-8";
				c.setAttribute("crossorigin", "*");
				b && (c.id = b);
				f ? q.parentNode.insertBefore(c, q) : q.parentNode.appendChild(c)
			};
			v.prototype.isPlaceholderSupported =
				function () {
					return "placeholder" in document.createElement("input")
				};
			v.prototype.togglePlaceholderText = function (a, n, f) {
				b.eventHandler.listen(a, "focus", function (a) {
					this.value === n && (this.value = "")
				}, f + "inputfocus");
				b.eventHandler.listen(a, "blur", function () {
					"" === this.value && (this.value = n)
				}, f + "inputblur")
			};
			v.prototype.redraw = function (a) {
				var b = a.style.display;
				a.style.display = "none";
				a.style.display = b
			};
			v.prototype.isTouchDevice = function () {
				try {
					return document.createEvent("TouchEvent"), !0
				} catch (a) {
					return !1
				}
			};
			v.prototype.shadeColor = function (a, b) {
				var f = "#", q, c;
				a = String(a).replace(/[^0-9a-f]/gi, "");
				6 > a.length && (a = a.charAt(0) + a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2));
				b = b || 0;
				for (c = 0; 6 > c; c += 2) q = parseInt(a[c] + "" + a[c + 1], 16), q = Math.round(Math.min(Math.max(0, q + q * b), 255)).toString(16), f += ("00" + q).substring(q.length);
				return f
			};
			v.prototype.getContrast = function (a) {
				a = a.replace("#", "");
				6 > a.length && (a = a.charAt(0) + a.charAt(0) + a.charAt(1) + a.charAt(1) + a.charAt(2) + a.charAt(2));
				return 8388607.5 < parseInt(a,
					16) ? "white" : "black"
			};
			v.prototype.getElementsByTagName = function (a, b) {
				for (var f = [], q = a.getElementsByTagName(b), c = 0; c < q.length; c++) f.push(q[c]);
				return f
			};
			v.prototype.chatElementInView = function (a) {
				var n = b.viewHandler.chatContainer.getElementById("chatContainer");
				return a.offsetTop >= n.scrollTop && a.offsetTop <= n.scrollTop + n.offsetHeight ? !0 : !1
			};
			v.prototype.formatFileSize = function (a) {
				var b = "Bytes KB MB GB TB PB EB ZB YB".split(" ");
				a = parseInt(a, 10);
				if (!a) return "0Bytes";
				for (var f = 1; f < b.length; f++) if (a < Math.pow(1024,
						f)) return Math.round(100 * (a / Math.pow(1024, f - 1))) / 100 + b[f - 1];
				return a
			};
			v.prototype.isFileInputSupported = function () {
				if (u.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
				var a = document.createElement("input");
				a.type = "file";
				return !a.disabled
			};
			v.prototype.escapeTemplateReplacement = function (a, b) {
				for (var f = 0; f < b.length; f++) {
					var q = b[f], c = q.textReplace;
					"string" === typeof c && (c = c.replace(/\$/g, "$$$"));
					a = a.replace(q.placeholder, c)
				}
				return a
			};
			v.prototype.getGenericStyle = function (a) {
				return ["outline                     : " + (a.outline ? a.outline : "none") + " !important; ", "visibility                  : " + (a.visibility ? a.visibility : "visible") + " !important; ", "resize                      : " + (a.resize ? a.resize : "none") + " !important; ", "box-shadow                  : " + (a.boxshadow ? a.boxshadow : "none") + " !important; ", "overflow                    : " + (a.overflow ? a.overflow : "visible") + " !important; ", "background                  : " +
				(a.background ? a.background : "none") + " !important; ", "opacity                     : " + (a.opacity ? a.opacity : "1") + " !important; ", "filter                      : alpha(opacity=" + (a.opacity ? 100 * a.opacity : "100") + ") !important; ", "-ms-filter                  : progid:DXImageTransform.Microsoft.Alpha(Opacity" + (a.opacity ? a.opacity : "1") + ") !important; ", "-moz-opacity                : " + (a.opacity ? a.opacity : "1") + " !important; ", "-khtml-opacity              : " + (a.opacity ? a.opacity : "1") + " !important; ", "top                         : " +
				(a.top ? a.top : "auto") + " !important; ", "right                       : " + (a.right ? a.right : "auto") + " !important; ", "bottom                      : " + (a.bottom ? a.bottom : "auto") + " !important; ", "left                        : " + (a.left ? a.left : "auto") + " !important; ", "position                    : " + (a.position ? a.position : "absolute") + " !important; ", "border                      : " + (a.border ? a.border : "0") + " !important; ", "min-height                  : " + (a.minheight ? a.minheight : "auto") + " !important; ", "min-width                   : " +
				(a.minwidth ? a.minwidth : "auto") + " !important; ", "max-height                  : " + (a.maxheight ? a.maxheight : "none") + " !important; ", "max-width                   : " + (a.maxwidth ? a.maxwidth : "none") + " !important; ", "padding                     : " + (a.padding ? a.padding : "0") + " !important; ", "margin                      : " + (a.margin ? a.margin : "0") + " !important; ", "-moz-transition-property    : " + (a.transition ? a.transition : "none") + " !important; ", "-webkit-transition-property : " + (a.transition ? a.transition :
					"none") + " !important; ", "-o-transition-property      : " + (a.transition ? a.transition : "none") + " !important; ", "transition-property         : " + (a.transition ? a.transition : "none") + " !important; ", "transform                   : " + (a.transform ? a.transform : "none") + " !important; ", "-webkit-transform           : " + (a.transform ? a.transform : "none") + " !important; ", "-ms-transform               : " + (a.transform ? a.transform : "none") + " !important; ", "width                       : " + (a.width ? a.width : "auto") + " !important; ",
					"height                      : " + (a.height ? a.height : "auto") + " !important; ", "display                     : " + (a.display ? a.display : "block") + " !important; ", "z-index                     : " + (a.zindex ? a.zindex : "none") + " !important; ", "background-color            : " + (a.backgroundcolor ? a.backgroundcolor : "transparent") + " !important; ", "cursor                      : " + (a.cursor ? a.cursor : "auto") + " !important; ", "float                       : " + (a["float"] ? a["float"] : "none") + " !important; "].join("")
			};
			v.prototype.isGeneratedName =
				function (a) {
					return this.regNameMach.test(a)
				};
			v.prototype.getRotateStyling = function (a, b) {
				var f = "rotate(" + a + "deg) translateZ(0px)";
				return {
					transform: f,
					"-moz-transform": f,
					"-webkit-transform": f,
					"-o-transform": f,
					"-ms-transform": f,
					"transform-origin": b,
					"-moz-transform-origin": b,
					"-webkit-transform-origin": b,
					"-o-transform-origin": b,
					"-ms-transform-origin": b
				}
			};
			v.prototype.blurElements = function (a) {
				for (var b = 0; b < a.length; b++) a[b].blur()
			};
			v.prototype.transformGreetings = function (a) {
				for (var b = /\[([^)]+)\]/, f = /\(([^)]+)\)/,
					     q = /\[[^\]\(\)]+\]\((\bhttp:\/\/\b|\bhttps:\/\/\b|\bmailto:\b){1}[^\]\(\)]+\)/i, c = "_blank", d = a, e, g; null !== (e = q.exec(d)) && (g = b.exec(e[0]), e = f.exec(e[0]), e[0].indexOf("(mailto:") || (c = "_top"), d = d.replace(g[0] + e[0], '<a target="' + c + '" href="' + e[1] + '" class="link">' + g[1] + "</a>"), d !== a);) ;
				return d
			};
			v.prototype.checkWhiteLabelLink = function (a, n) {
				var f = 1E4 * Math.random(), q = this, c = b.viewHandler.chatContainer, d, e;
				this.checkWhiteLabelRef = setTimeout(function () {
					if (n.label !== a.innerHTML || n.url && n.url !== a.href || !n.url &&
						a.href || n.id !== a.id || !c.getElementById(a.id) || n.cssText !== a.style.cssText) q.whiteLabelUnexpectedIssueLogged || (b.loggingHandler.logIncident("White label element has changed unexpectedly", {pageId: A.uuid}), q.whiteLabelUnexpectedIssueLogged = !0), a.id = n.id, a.innerHTML = n.label, a.style.cssText = n.cssText, null !== n.url ? a.href = n.url : a.removeAttribute("href"), !c.getElementById(n.parentElem.id) && n.grandParentName && (d = c.getElementById(n.grandParentName), n.siblingName && (e = c.getElementById(n.siblingName)) && d && d.insertBefore(n.parentElem,
						e)), d = c.getElementById(n.parentElem.id), !c.getElementById(a.id) && d && d.appendChild(a);
					q.checkWhiteLabelLink(a, n)
				}, f)
			};
			v.prototype.applyWhiteLabelSettings = function (a, b) {
				clearTimeout(this.checkWhiteLabelRef);
				null === b.url ? a.removeAttribute("href") : (a.href = b.url, b.url = a.href);
				k.whiteLabel() && null !== b.url && (a.target = "_blank");
				a.innerHTML = b.label;
				a.style.cssText += ";color:" + b.textColor + " !important";
				b.cssText = a.style.cssText;
				this.checkWhiteLabelLink(a, b)
			};
			v.prototype.transformLabel = function (a) {
				var b;
				(b = a.match(/_[^_]+_/gi)) &&
				0 < b.length && b.forEach(function (b) {
					var n;
					n = b.indexOf("_");
					var c = b.lastIndexOf("_");
					n = b.substring(0, n) + "<i>" + b.substring(n + 1, c) + "</i>" + b.substring(c + 1, b.length);
					a = a.replace(b, n)
				});
				(b = a.match(/\*[^*]+\*/gi)) && 0 < b.length && b.forEach(function (b) {
					var n;
					n = b.indexOf("*");
					var c = b.lastIndexOf("*");
					n = b.substring(0, n) + "<b>" + b.substring(n + 1, c) + "</b>" + b.substring(c + 1, b.length);
					a = a.replace(b, n)
				});
				return a
			};
			v.prototype.getRandomName = function () {
				return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(52 *
					Math.random()) + this.generateRandomString() + "-" + (new Date).getTime()
			};
			v.prototype.insertRandomTagsBeforeAndAfter = function (a, b, f) {
				var q = Math.floor(3 * Math.random() + 1), c;
				for (c = 0; c < q; c++) {
					var d = document.createElement(f);
					d.id = m.getRandomName();
					b.insertBefore(d, a)
				}
				q = Math.floor(3 * Math.random() + 1);
				for (c = 0; c < q; c++) a = document.createElement(f), a.id = m.getRandomName(), b.appendChild(a)
			};
			v.prototype.getWebRTCToken = function (a, n, f) {
				var q = this;
				a = {video: a, screen: n};
				f = f || function () {
				};
				this.webrtcWin = h.open("", "");
				b.socketManager.sendToConnector("getWebRTCToken",
					a, function (a, b) {
						if (a) return q.webrtcWin.close(), f(!0, a);
						q.webrtcWin.location.href = q.connectionUrl + "/v2/call?token=" + b.data.token;
						f()
					})
			};
			v.prototype.rejectCall = function (a, n) {
				var f = {callId: a};
				n = n || function () {
				};
				b.socketManager.sendToConnector("declineCall", f, function (a, b) {
					n()
				})
			};
			v.prototype.disconnectWebRTC = function () {
				this.webrtcWin && this.webrtcWin.close()
			};
			v.prototype.isDescendent = function (a, b) {
				for (var f = b.parentNode; null !== f;) {
					if (f === a) return !0;
					f = f.parentNode || null
				}
				return !1
			};
			v.prototype.getTimeDifference =
				function (a, n) {
					var f, q;
					f = new Date(a);
					endTimeFmt = new Date(n);
					diff = endTimeFmt.getTime() - f.getTime();
					36E5 <= diff ? (f = Math.round(diff / 36E5), q = "hours") : 6E4 <= diff ? (f = Math.round(diff / 6E4), q = "minutes") : (f = Math.round(diff / 1E3), q = "seconds");
					return b.languageParser.translate("chat", q, {num: f})
				};
			Inheritance_Manager = {
				extend: function (a, b) {
					function f() {
					}

					f.prototype = b.prototype;
					a.prototype = new f;
					a.prototype.constructor = a;
					a.prototype.parent = b.prototype;
					a.baseConstructor = b;
					a.superClass = b.prototype
				}
			};
			var m = new v;
			"undefined" !==
			typeof module && module.exports && (module.exports.Utils = v);
			var Q = [{
					string: u.userAgent,
					subString: "Edge",
					identity: "explorer",
					versionSearch: "Edge"
				}, {
					string: u.userAgent,
					subString: "Trident/7.0",
					identity: "explorer",
					versionSearch: "rv"
				}, {
					string: u.userAgent,
					subString: "(Opera|OPR)",
					identity: "opera",
					versionSearch: "Version"
				}, {
					string: u.userAgent,
					subString: "Chrome",
					identity: "chrome",
					versionSearch: "Chrome"
				}, {string: u.userAgent, subString: "Mobile Safari", identity: "android", versionSearch: "Version"}, {
					string: u.userAgent,
					subString: "Firefox", identity: "firefox", versionSearch: "Firefox"
				}, {
					string: u.userAgent,
					subString: "MSIE",
					identity: "explorer",
					versionSearch: "MSIE"
				}, {
					string: u.userAgent,
					subString: "IEMobile",
					identity: "explorer",
					versionSearch: "IEMobile"
				}, {
					string: u.userAgent,
					subString: "Safari",
					identity: "safari",
					versionSearch: "Version"
				}, {string: u.userAgent, subString: "Gecko", identity: "mozilla", versionSearch: "rv"}],
				ea = [{string: u.userAgent, subString: "Windows Phone", identity: "windows_phone"}, {
					string: u.platform, subString: "Win",
					identity: "windows"
				}, {string: u.platform, subString: "Mac", identity: "mac"}, {
					string: u.userAgent,
					subString: "iPhone",
					identity: "iphone"
				}, {string: u.userAgent, subString: "Android", identity: "android"}, {
					string: u.platform,
					subString: "Linux",
					identity: "linux"
				}, {string: u.userAgent, subString: "iPad", identity: "ipad"}], na = {
					google: "q",
					yahoo: "p",
					baidu: "wd",
					yandex: "text",
					bing: "q",
					soso: "w",
					ask: "q",
					aol: "q",
					sogou: "query",
					mywebsearch: "searchfor",
					youdao: "q",
					lycos: "q",
					infospace: "q",
					blekko: "q",
					info: "q",
					dogpile: "q",
					duckduckgo: "q",
					webcrawler: "q"
				}, ja = {
					src: "about:blank",
					border: "0",
					cellspacing: "0",
					frameBorder: "0",
					scrolling: "no",
					horizontalscrolling: "no",
					verticalscrolling: "no",
					allowTransparency: "true",
					title: "chat widget"
				}, oa = {
					nokia: [/(NokiaBrowser)\/(\d+)\.(\d+).(\d+)\.(\d+)/, /^(Nokia)/, /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)/, /(NokiaBrowser)\/(\d+)\.(\d+)/, /(BrowserNG)\/(\d+)\.(\d+).(\d+)/, /(Series60)\/5\.0/, /(Series60)\/(\d+)\.(\d+)/, /(S40OviBrowser)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Nokia)[EN]?(\d+)/],
					blackberry: [/(BB10);/, /(PlayBook).+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/,
						/(Black[bB]erry).+Version\/(\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry)\s?(\d+)/],
					chrome: [/(CrMo)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Android).*(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) (Mobile)?/],
					ie: [/(IEMobile)[ \/](\d+)\.(\d+)/],
					firefox: [/Mobile.*(Firefox)\/(\d+)\.(\d+)/, /Tablet.*(Firefox)\/(\d+)\.(\d+)/],
					operamini: [/(Opera Mini)(?:\/att)?\/(\d+)\.(\d+)/],
					opera: [/(Opera Tablet).*Version\/(\d+)\.(\d+)(?:\.(\d+))?/, /(?:Mobile Safari).*(OPR)\/(\d+)\.(\d+)\.(\d+)'/, /(Opera)\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/,
						/(Opera)\/(\d+)\.(\d+).+Opera Mobi/, /Opera Mobi.+(Opera)\/(\d+)\.(\d+)/, /Opera Mobi/, /(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/],
					safari: [/(iPod|iPhone|iPad);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/],
					uc: [/(UCBrowser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser)[ \/](\d+)\.(\d+)\.(\d+)/, /(UC Browser|UCBrowser|UCWEB)(\d+)\.(\d+)\.(\d+)/],
					"android2.3": [/(Android) 2\.3(?:[.\-]([a-z0-9]+))?/],
					android2: [/(Android) 2\.(\d+)(?:[.\-]([a-z0-9]+))?/],
					android: [/Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; WOWMobile (.+) Build/,
						/Android[\- ][\d]+\.[\d]+\-update1; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+;[A-Za-z]{2}\-[A-Za-z]{0,2};(.+) Build/, /Android[\- ][\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{0,2}; (.+) Build/, /Android[\- ][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android[\- ][\d]+\.[\d]+; (.+) Build/]
				};
			v = function () {
				this.versionSearchString = this.browserObj = null;
				this.init()
			};
			v.prototype.init = function () {
				var a = this.getBrowserVersion();
				x = this.getMobileBrowser();
				F = a.version;
				E = a.vendor;
				ya = this.hasHtmlAudio("mp3");
				X = this.hasHtmlAudio("ogg");
				Y = this.hasHtmlAudio("wav");
				va = this.hasHtmlAudio("aac");
				fa = void 0;
				fa = ya || X || Y || va;
				T = m.isPlaceholderSupported();
				"explorer" === E && (N = !0, 6 === F ? L = !0 : 8 <= F && 9 > F && (M = !0))
			};
			v.prototype.getBrowserVersion = function () {
				return this.browserObj ? this.browserObj : this.browserObj = {
					vendor: this.searchString(Q) || "other",
					version: this.searchVersion(u.userAgent) || this.searchVersion(u.appVersion) || "other",
					os: this.searchString(ea) ||
					"other",
					plugins: this.getPlugins()
				}
			};
			v.prototype.getPlugins = function () {
				var a, b, f = [];
				a = 0;
				for (b = u.plugins.length; a < b; a++) u.plugins[a].name && f.push(u.plugins[a].name);
				return f
			};
			v.prototype.searchString = function (a) {
				var b, f, q;
				for (b = 0; b < a.length; b++) if (f = a[b].string, q = RegExp(a[b].subString), this.versionSearchString = a[b].versionSearch || a[b].identity, q.test(f)) return a[b].identity
			};
			v.prototype.searchVersion = function (a) {
				var b = a.indexOf(this.versionSearchString);
				if (-1 !== b) return parseFloat(a.substring(b + this.versionSearchString.length +
					1))
			};
			v.prototype.getMobileBrowser = function () {
				for (var a = !1, b = u.userAgent, f = Object.keys(oa), q = 0; !a && q < f.length;) {
					for (var c = f[q], d = 0; d < oa[c].length; d++) if (b.match(oa[c][d])) {
						a = c;
						break
					}
					q++
				}
				return a
			};
			v.prototype.getReferredSearchEngine = function () {
				var a, b, f = "";
				if (document.referrer && (b = this.getHostname(document.referrer))) for (a in b = b.toLowerCase(), na) if (0 <= b.indexOf(a)) {
					queryString = this.getQuerystring(document.referrer, na[a]);
					"blekko" === a && "" === queryString && (queryString = this.getQuerystring(document.referrer.replace("/ws/",
						"/?q="), "q"));
					f = a;
					break
				}
				return f
			};
			v.prototype.getQuerystring = function (a, b) {
				var f;
				b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				f = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
				return null === f || !m.isArray(f) || 2 > f.length ? null : f[1] ? unescape(f[1].replace(/\+/g, " ")) : null
			};
			v.prototype.getHostname = function (a) {
				a = a.match(/^(?:f|ht)tp(?:s)?:\/\/([^/]+)/im);
				return null === a || !m.isArray(a) || 2 > a.length ? null : a[1] ? a[1].toString() : null
			};
			v.prototype.hasHtmlAudio = function (a) {
				var b = document.createElement("audio");
				try {
					if (!b.canPlayType ||
						"no" === b.canPlayType("audio/" + a) || "" === b.canPlayType("audio/" + a)) return !1
				} catch (f) {
					return !1
				}
				return !0
			};
			b.browserData = new v;
			v = function () {
				this.unloading = !1
			};
			v.prototype.logPerformance = function (a) {
				this.postForm("log-performance/v3", $_TAWK_JSON.stringify(a))
			};
			v.prototype.logIncident = function (a, b) {
				var f = p.getBrowserData();
				f.visitorId = A.visitorId || "";
				f.message = a;
				f.data = b;
				this.log("warning", f)
			};
			v.prototype.log = function (a, b) {
				var f;
				b && a && (b.uiVersion = "v3", b.buildVersion = "573", b.buildCommit = "14d56c17d3265862a5ffd139df415edbd5b9fc2d",
					f = {type: a, data: b}, this.postForm("log", $_TAWK_JSON.stringify(f)))
			};
			v.prototype.postForm = function (a, b) {
				var f, q, c;
				q = document.createElement("iframe");
				if (!document.body) return !1;
				q.src = "about:blank";
				q.style.cssText = ";display:none !important;";
				q.title = "chat widget logging";
				document.body.appendChild(q);
				try {
					f = m.getDocument(q)
				} catch (d) {
					return !1
				}
				N && (f.open(), f.writeln('<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body><iframe name="form-receiver" id="form-receiver"></iframe></body></html>'),
					f.close());
				q = f.createElement("form");
				q.method = "POST";
				q.action = "https://va.VOOChat/" + a;
				q.enctype = "application/x-www-form-urlencoded";
				q.acceptCharset = "UTF-8";
				c = f.createElement("input");
				c.type = "text";
				c.name = "logData";
				c.value = b;
				q.appendChild(c);
				N && (q.target = "form-receiver");
				f.body.appendChild(q);
				q.submit();
				q.parentNode.removeChild(q)
			};
			h.onbeforeunload = function () {
				this.unloading = !0
			};
			h.onunload = function () {
				this.unloading = !0
			};
			var ba = function () {
				this.originalErrorHandlerFn = h.onerror;
				this.beaconSent = !1
			};
			ba.prototype.getBrowserData =
				function () {
					var a = b.browserData.getBrowserVersion();
					return {
						site: h.location.href,
						browser: a.vendor || "",
						version: a.version || "",
						os: a.os || "",
						plugins: a.plugins || ""
					}
				};
			ba.prototype.handleError = function (a, n, f, q, c) {
				var d;
				if (!(n && f || "Script error." !== a && "Script error" !== a)) {
					if (this.beaconSent) return !1;
					this.beaconSent = !0;
					m.insertBeaconIframe();
					return !1
				}
				if ("string" !== typeof n || -1 === n.indexOf("VOOChat") && -1 === n.indexOf("tawk.js")) return !1;
				d = this.getBrowserData();
				d.visitorId = A.visitorId || "";
				d.message = a || "";
				d.file =
					n || "";
				d.line = f || "";
				d.column = q || "";
				d.stack = c ? JSON.stringify(c) : "";
				d.stack = d.stack.replace(m.regLineBreaks, "");
				b.loggingHandler.log("error", d);
				if (this.beaconSent) return !0;
				m.insertBeaconIframe();
				return this.beaconSent = !0
			};
			p = new ba;
			h.onerror = function () {
				var a;
				if (!p) return !1;
				a = p.handleError.apply(this, arguments);
				return "function" === typeof p.originalErrorHandlerFn ? p.originalErrorHandlerFn.apply(this, arguments) : a
			};
			ba = function () {
				this.events = {}
			};
			ba.prototype.attachEvent = function (a, b, f) {
				var q = this, c = function (b) {
					f.call(a,
						q.getEvent(b))
				};
				a.attachEvent("on" + b, c);
				return c
			};
			ba.prototype.listen = function (a, b, f, q) {
				var c;
				if (q) {
					this.events[q] && (c = this.events[q], this.events[q] = null, this.removeEventHandler(c.element, c.eventName, c.eventListener));
					if (a.addEventListener) a.addEventListener(b, f, !1); else if (document.attachEvent) f = this.attachEvent(a, b, f); else return null;
					this.events[q] = {element: a, eventName: b, eventListener: f};
					return f
				}
			};
			ba.prototype.cancelEvent = function (a) {
				document.attachEvent && (a = this.getEvent(a));
				a.preventDefault ?
					a.preventDefault() : a.returnValue = !1
			};
			ba.prototype.removeEventHandler = function (a, b, f) {
				document.removeEventListener ? a.removeEventListener(b, f, !1) : a.detachEvent("on" + b, f)
			};
			ba.prototype.getEvent = function (a) {
				var b = a || h.event;
				if (!b) for (a = this.getEvent.caller; a && (!(b = a.arguments[0]) || Event != b.constructor);) a = a.caller;
				return b
			};
			ba.prototype.clearEvents = function () {
				var a = this;
				Object.keys(this.events).forEach(function (b) {
					b = a.events[b];
					a.removeEventHandler(b.element, b.eventName, b.eventListener)
				});
				this.events =
					{}
			};
			ba.prototype.getTargetElement = function (a) {
				document.attachEvent && (a = this.getEvent(a));
				a = a.target || a.srcElement;
				3 === a.nodeType && (a = a.parentNode);
				return a
			};
			var H = function () {
				this.hasCORS = ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof XDomainRequest) && function () {
					var a;
					if ("undefined" !== typeof XDomainRequest) return "https" === location.protocol;
					try {
						a = new XMLHttpRequest
					} catch (b) {
						return !1
					}
					return void 0 !== a.withCredentials
				}()
			};
			H.prototype.jsonpLoad = function (a, b, f) {
				var q = document.getElementsByTagName("script")[0],
					c = document.createElement("script"), d = !1;
				b = b || {};
				b = "?" + m.createQueryString(b);
				c.src = a + b;
				c.async = !0;
				c.charset = "UTF-8";
				c.onload = c.onreadystatechange = function () {
					d || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, c.onload = c.onreadystatechange = null, c && c.parentNode && c.parentNode.removeChild(c))
				};
				c.onerror = function () {
					f(null, $_TAWK_JSON.stringify({error: "SERVER_DOWN"}))
				};
				q.parentNode.insertBefore(c, q);
				return {type: "jsonp", req: c}
			};
			H.prototype.jsonp = function (a, b, f) {
				var q;
				b = b ||
					{};
				b = "?" + m.createQueryString(b);
				q = "$_Tawk_json" + ++this.counter;
				f && (h[q] = function (a) {
					f(a);
					try {
						delete h[q]
					} catch (b) {
					}
					h[q] = null
				});
				return this.jsonpLoad(a + b + (f ? "callback=" + q : ""))
			};
			H.prototype.xhrRequest = function (a, b, f) {
				var q = this.getRequestObject();
				if (!q) return this.jsonpLoad(a, b, f);
				b = b || {};
				q.onerror = f;
				q.open("POST", a, !0);
				q.withCredentials = !0;
				q.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				q.onreadystatechange = function () {
					q.passed || 4 !== q.readyState || (q.passed = !0, f(null, q.responseText))
				};
				q.send(m.createQueryString(b));
				return {type: "xhr", req: q}
			};
			H.prototype.getRequestObject = function () {
				if ("undefined" !== typeof XMLHttpRequest) return new XMLHttpRequest;
				if ("undefined" !== typeof XDomainRequest) return new XDomainRequest
			};
			H.prototype.abort = function (a) {
				a && ("xhr" === a.type ? a.req.abort() : (a = a.req) && a.parentNode && a.parentNode.removeChild(a))
			};
			var pa = new H, H = function () {
				this.isCookieEnabled = this.checkCookieEnabled();
				this.alphaNumericReg = /[^0-9a-zA-Z]/g;
				this.hasSessionStorage = this.isCookieEnabled &&
					!!h.sessionStorage;
				this.clearOldCookies("TawkCookie")
			};
			H.prototype.setHTTPCookie = function (a, b, f, q) {
				var c = "";
				f || (f = new Date, f.setTime(f.getTime() + 31536E7), c = "; expires=" + f.toGMTString());
				document.cookie = a + "=" + b + c + "; path=/" + (q ? ";domain=" + q : "")
			};
			H.prototype.getHTTPCookie = function (a) {
				var b, f, c = [], d = a + "=", e = document.cookie.split(";");
				a = 0;
				for (b = e.length; a < b; a++) {
					for (f = e[a]; " " === f.charAt(0);) f = f.substring(1, f.length);
					0 === f.indexOf(d) && c.push(f.substring(d.length, f.length))
				}
				return c
			};
			H.prototype.setSessionStorage =
				function (a, b) {
					if (this.hasSessionStorage && sessionStorage.setItem) try {
						sessionStorage.setItem(a, b)
					} catch (f) {
					}
				};
			H.prototype.getSessionStorage = function (a) {
				return this.hasSessionStorage && sessionStorage.getItem ? sessionStorage.getItem(a) : null
			};
			H.prototype.setWindowName = function (a) {
				h.name && 0 !== h.name.indexOf("TawkWindowName-") || (h.name = "TawkWindowName-" + a)
			};
			H.prototype.getWindowName = function () {
				var a, b, f;
				if (!h.name) return null;
				if (0 !== h.name.indexOf("TawkWindowName-")) {
					f = h.name.substring(0, 5);
					b = f.length;
					if (6 >
						b) for (a = 0, b = 6 - b; a < b; a++) f += "0";
					return f.replace(/[^0-9a-zA-Z]/g, "0").replace(" ", "0")
				}
				return h.name.substring(15, 21)
			};
			H.prototype.handleWindowId = function () {
				var a = this.getSessionStorage("TawkWindowName");
				"null" === a && (a = null);
				a || this.hasSessionStorage || (a = this.getWindowName());
				"null" === a && (a = null);
				a || (a = m.generateRandomString(), this.hasSessionStorage ? this.setSessionStorage("TawkWindowName", a) : this.setWindowName(a));
				K = a
			};
			H.prototype.storeUUID = function () {
				var a = this;
				t.transferedSession || A.uuids && 0 < A.uuids.length &&
				A.uuids.forEach(function (b) {
					var f = (b.isExact ? "e::" : "p::") + b.domain + "::" + b.uuid + "::" + A.uuidVer;
					a.isCookieEnabled && a.setHTTPCookie("__tawkuuid", f, !1, b.domain)
				});
				this.handleWindowId();
				this.storeSessionInformation()
			};
			H.prototype.getSessionInformation = function () {
				var a;
				this.sessionInformation && (a = this.sessionInformation);
				a || (a = this.getHTTPCookie("Tawk_" + W.pageId)[0]);
				return this.parseSessionInformation(a)
			};
			H.prototype.storeSessionInformation = function (a) {
				a ? a = t.visitorSocketServer + "::" + b.viewHandler.indicator.unansweredMessages :
					(a = this.getSessionInformation()[1] || 0, b.main.previousSessionKey !== t.sessionKey && (a = 0), a = t.visitorSocketServer + "::" + a);
				this.setHTTPCookie("Tawk_" + W.pageId, a, !1);
				this.sessionInformation = a
			};
			H.prototype.parseSessionInformation = function (a) {
				var b = [];
				a && (b = a.split("::"), 1 >= b.length && (b = a.split("||")));
				return b
			};
			H.prototype.clearOldCookies = function (a) {
				document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
			};
			H.prototype.checkCookieEnabled = function () {
				var a = u.cookieEnabled ? !0 : !1;
				"undefined" != typeof u.cookieEnabled ||
				a || (document.cookie = "testcookie", a = -1 != document.cookie.indexOf("testcookie") ? !0 : !1);
				return a
			};
			H.prototype.getStoredUUID = function () {
				var a;
				this.isCookieEnabled && (a = this.getHTTPCookie("__tawkuuid"));
				return a && 0 < a.length ? a : []
			};
			var da = new H, Ha = function (a) {
				var b;
				"symbian" === x ? this.play = function () {
				} : ("safari" === x ? (b = document.createElement("audio"), b.src = a, b.style.cssText = "position: absolute; position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;", document.body.appendChild(b)) : b = new Audio(a),
					b.addEventListener("timeupdate", function () {
						0.2 <= b.currentTime && b.pause()
					}, !1), b.load(), this.soundEl = b, this.play = function () {
					try {
						b.currentTime = 0, b.autoplay = !0, b.load(), b.play()
					} catch (a) {
					}
				})
			}, Ia = function (a, b, f) {
				this.sourcePath = a;
				this.buffer = null;
				this.name = b;
				this.audioPlayer = f;
				this.source = null;
				this.volume = 1;
				this.play = function () {
					if (this.buffer) {
						var a = this.audioPlayer.audioContext.createGain();
						a.gain.value = this.volume;
						this.source = this.audioPlayer.audioContext.createBufferSource();
						this.source.buffer = this.buffer;
						this.source.connect(a);
						a.connect(this.audioPlayer.audioContext.destination);
						this.source.start(0)
					}
				};
				this.loadBuffer = function () {
					var a = new XMLHttpRequest, b = this;
					a.open("GET", b.sourcePath, !0);
					a.responseType = "arraybuffer";
					a.onload = function () {
						b.audioPlayer.audioContext.decodeAudioData(a.response, function (a) {
							a && (b.buffer = a, b.audioPlayer.isReadyForInit || (b.audioPlayer.eventUsedForInit = b.name, b.audioPlayer.isReadyForInit = !0))
						}, function (a) {
							throw Error(a);
						})
					};
					a.onerror = function (a) {
						throw Error("BufferLoader: XHR error for " +
							b.sourcePath);
					};
					a.send()
				};
				this.loadBuffer()
			}, H = function () {
				this.sounds = {};
				this.audioContext = null;
				this.isReadyForInit = !1;
				this.eventUsedForInit = null
			};
			H.prototype.initAudioPlayer = function () {
				var a, n = {};
				if (fa) {
					this.audioContext || (/Firefox/.test(u.userAgent) || "undefined" === typeof AudioBuffer || void 0 === h.AudioContext && void 0 === h.webkitAudioContext) || (h.AudioContext = h.AudioContext || h.webkitAudioContext, this.audioContext = new AudioContext);
					X ? n = Ca : ya && !/Edge/.test(u.userAgent) ? n = ra : va ? n = z : Y && (n = Da);
					for (a in n) this.sounds[a] =
						this.audioContext ? new Ia(n[a], a, this) : new Ha(n[a]);
					if (this.audioContext) {
						var f = this, c;
						initSourceFunction = function (a) {
							f.isReadyForInit && (f.eventUsedForInit && !f.touchstartInited) && (f.sounds[f.eventUsedForInit].volume = 0, f.sounds[f.eventUsedForInit].play(), f.sounds[f.eventUsedForInit].source.stop(0), f.sounds[f.eventUsedForInit].volume = 1, h && "function" === typeof h.removeEventListener && h.removeEventListener("touchstart", initSourceFunction, !1), c && "function" === typeof c.removeEventListener && c.removeEventListener("touchstart",
								initSourceFunction, !1), f.touchstartInited = !0)
						};
						if (x && "ontouchstart" in h) {
							if (a = k.isPopup ? b.viewHandler.chatContainer.elementReferrer : b.viewHandler.maximizedWidget.container.elementReferrer) c = a.contentWindow ? a.contentWindow : a.contentDocument.defaultView, c.addEventListener("touchstart", initSourceFunction, !1);
							h.addEventListener("touchstart", initSourceFunction, !1)
						}
					}
				}
			};
			H.prototype.play = function (a) {
				c.disableSound || k.soundOn() && this.sounds[a] && this.sounds[a].play()
			};
			var Ja = {
				init: function () {
					this.iframeContainerName =
						m.getRandomName();
					b.languageParser.language = w.language;
					this.message = '<div id="formContainer" style="display: block;"><div id="greetingsOverlay"><div id="greetingsWrapper"><div id="greetingsContainer">' + b.languageParser.translate("overlay", "cookiesOff") + "</div></div></div></div>";
					x ? this.showMobileFix() : (this.showDesktopFix(), this.iframeContainer.restyle("display", "block"))
				}, showDesktopFix: function () {
					var a, n;
					a = m.getContrast(k.headerTxtColor);
					var f = this;
					this.iframeContainer = new B(f.iframeContainerName,
						m.getGenericStyle({
							display: "none",
							right: "10px",
							bottom: "0px",
							zindex: "2000000000",
							position: "fixed"
						}));
					if (k.isEmbedded) {
						var q, d = "100%", e = "100%";
						q = document.getElementById(c.embedded);
						if (!q) return;
						q.appendChild(this.iframeContainer.buildView());
						if (k.maximizedDimensions().width || k.maximizedDimensions().height) d = k.maximizedDimensions().width + "px", e = k.maximizedDimensions().height + "px"; else {
							n = parseInt(m.computedStyle(q, "width").replace("px", ""), 10);
							q = parseInt(m.computedStyle(q, "height").replace("px", ""), 10);
							if (!n || 280 > n) d = "280px";
							if (!q || 330 > q) e = "330px"
						}
						this.iframeContainer.restyle("width", d);
						this.iframeContainer.restyle("height", e)
					} else document.body.appendChild(this.iframeContainer.buildView());
					if (k.isEmbedded || k.isPopup) n = '<div id="tawkchat-maximized-wrapper"><div id="borderWrapper"></div><div id="headerBoxWrapper"><div class="theme-background-color theme-text-color" id="headerBox"><div id="shortMessage">' + b.languageParser.translate("chat", "live_chat") + "</div></div></div>" + this.message + '<div id="bottomContainer"><a id="tawktoLink" href="https://www.VOOChat/?utm_source=magento&utm_medium=link&utm_campaign=signup" target="_blank"><span class="thin">Powered by</span> VOOChat</a></div>',
						k.isPopup ? (a = document.getElementsByTagName("head")[0], d = document.createDocumentFragment(), e = m.createElement(document, "style", {type: "text/css"}), q = document.createTextNode(b.ResetStyle + "" + b.MaximizedStyle + k.maxStyle()), e.styleSheet ? e.styleSheet.cssText = q.nodeValue : e.appendChild(q), d.appendChild(e), a.appendChild(d), this.maximizedContainer = new B(m.getRandomName(), m.getGenericStyle({
							width: "100%",
							height: "100%"
						})), document.getElementById(this.iframeContainerName).appendChild(this.maximizedContainer.buildView()),
							this.maximizedContainer.elementReferrer.innerHTML = n, this.iframeContainer.restyle("width", "100%"), this.iframeContainer.restyle("height", "100%")) : (this.maximizedContainer = new ca(m.getRandomName(), m.getGenericStyle({
							zindex: "999999",
							height: "100%",
							width: "100%",
							position: "static"
						}), ja, "iframe"), document.getElementById(this.iframeContainerName).appendChild(this.maximizedContainer.buildView()), this.maximizedContainer.buildIframe(b.MaximizedStyle + k.maxStyle()), this.maximizedContainer.documentRef.body.classList.add("noCookies"),
							this.maximizedContainer.documentRef.body.classList.add(a), this.maximizedContainer.documentRef.body.classList.add("embed"), this.maximizedContainer.documentRef.body.innerHTML = n, this.iframeContainer.restyle("position", "static"), c.onLoad()); else if (this.maximizedContainer = new ca(m.getRandomName(), m.getGenericStyle({
							zindex: "999999",
							display: "none",
							height: "400px",
							width: "320px",
							position: "static"
						}), ja, "iframe"), this.minimizedContainer = new ca(m.getRandomName(), m.getGenericStyle({
							zindex: "1000001",
							bottom: "0px",
							display: "none",
							height: "40px",
							width: "320px",
							maxheight: "40px",
							maxwidth: "320px",
							right: "0px",
							minheight: "40px",
							minwidth: "320px",
							position: "fixed"
						}), ja, "iframe"), this.minimizedContainer.template = s["tawkchat-minified-iframe-element-rectangle"], n = '<div id="tawkchat-maximized-wrapper"><div id="borderWrapper"></div><div id="headerBoxWrapper"><div class="theme-background-color theme-text-color" id="headerBox"><div id="shortMessage">' + b.languageParser.translate("chat", "live_chat") + '</div><div id="headerBoxControlsContainer"><div id="minimizeChat" class="icon"></div></div></div></div>' +
							this.message + '<div id="bottomContainer"><a id="tawktoLink" href="https://www.VOOChat/?utm_source=magento&utm_medium=link&utm_campaign=signup" target="_blank"><span class="thin">Powered by</span> VOOChat</a></div>', document.getElementById(this.iframeContainerName).appendChild(this.minimizedContainer.buildView()), document.getElementById(this.iframeContainerName).appendChild(this.maximizedContainer.buildView()), this.minimizedContainer.buildIframe(b.MinifiedStyle + k.minStyle()), this.maximizedContainer.buildIframe(b.MaximizedStyle +
							k.maxStyle()), this.maximizedContainer.documentRef.body.classList.add("noCookies"), this.maximizedContainer.documentRef.body.classList.add(a), this.minimizedContainer.documentRef.body.classList.add("noCookies"), this.minimizedContainer.documentRef.body.classList.add(a), this.maximizedContainer.documentRef.body.innerHTML = n, this.maximizedContainer.getElementById("formContainer").style.display = "block", this.minimizedContainer.restyle("display", "block"), this.minimizedContainer.attachUserEventListener("click",
							function (a) {
								f.minimizedContainer.restyle("display", "none");
								f.maximizedContainer.restyle("display", "block");
								b.eventHandler.cancelEvent(a)
							}, "tawkchat-minified-wrapper", "minifiedclick"), this.maximizedContainer.attachUserEventListener("click", function (a) {
							f.minimizedContainer.restyle("display", "block");
							f.maximizedContainer.restyle("display", "none");
							b.eventHandler.cancelEvent(a)
						}, "minimizeChat", "minlinkclick"), a = this.minimizedContainer.getElementById("short-message")) a.innerHTML = b.languageParser.translate("chat",
						"live_chat")
				}, showMobileFix: function () {
					if (k.isPopup) {
						var a = document.getElementsByTagName("head")[0], n = document.createDocumentFragment(),
							f = m.createElement(document, "style", {type: "text/css"}),
							c = document.createTextNode(b.ResetStyle + "" + b.MaximizedMobileStyle);
						f.styleSheet ? f.styleSheet.cssText = c.nodeValue : f.appendChild(c);
						n.appendChild(f);
						a.appendChild(n);
						this.iframeContainer = new B(self.iframeContainerName, m.getGenericStyle({
							display: "block",
							right: "0px",
							bottom: "0px",
							zindex: "2000000000",
							position: "fixed"
						}));
						this.iframeContainer.restyle("width", "100%");
						this.iframeContainer.restyle("height", "100%");
						document.getElementById(this.iframeContainerName).innerHTML = '<div id="mainContainer" style="display: block">' + this.message + "</div>"
					} else if (b.main.initRenderer(x), b.formHandler = new O, b.viewHandler.begin(), b.viewHandler.show(), a = b.viewHandler.chatContainer.getElementById("chatPanel")) a.innerHTML = '<div id="greetingsWrapper">' + b.languageParser.translate("overlay", "cookiesOff") + "</div>"
				}
			}, za = function () {
				var a = this;
				this.uploads = {};
				b.eventEmitter.on("fileUploadProgress", function (a) {
					b.viewHandler.updateFileProgress(a)
				});
				b.eventEmitter.on("fileUploadFinished", function (n) {
					a.uploads[n.handle] && (delete a.uploads[n.handle], b.viewHandler.fileUploaded(n.handle), b.chatHandler.sendFileMessage(n))
				});
				b.eventEmitter.on("fileUploadError", function (n) {
					var f = a.uploads[n.handle];
					f && b.viewHandler.handleUploadError(null, f, n.handle)
				})
			};
			za.prototype.getUploadHandler = function (a) {
				var b = "https://upload.VOOChat/upload/handle?_t=" + (new Date).getTime(),
					f;
				"XDomainRequest" in h && null !== h.XDomainRequest ? (f = new XDomainRequest, f.onload = function () {
					var b = new ActiveXObject("Microsoft.XMLDOM"), f = $.parseJSON(this.responseText);
					b.async = !1;
					if (null === f || "undefined" === typeof f) f = $.parseJSON(this.firstChild.textContent);
					a(f)
				}) : (f = new XMLHttpRequest, f.onreadystatechange = function () {
					4 === this.readyState && (200 <= this.status && 400 > this.status ? a(JSON.parse(this.responseText)) : a(!0))
				});
				f.open("GET", b);
				f.onerror = function () {
					a(!0)
				};
				f.send();
				f = null
			};
			za.prototype.uploadFile =
				function (a, b, f, c, d) {
					var e,
						g = "https://upload.VOOChat/upload/visitor-chat/visitor?handle=" + a + "&visitorSessionId=" + t.sessionKey;
					this.uploads[a] = f;
					if (c) {
						var k;
						a += "-iframe";
						try {
							k = document.createElement("iframe")
						} catch (h) {
							return d(!0)
						}
						k.setAttribute("src", "about:blank");
						k.setAttribute("name", a);
						k.setAttribute("id", a);
						k.setAttribute("width", "0");
						k.setAttribute("height", "0");
						k.setAttribute("border", "0");
						k.setAttribute("style", "width: 0; height: 0; border: none; display: none !important;");
						b.setAttribute("target",
							a);
						b.setAttribute("action", g);
						document.body.appendChild(k);
						try {
							e = m.getDocument(k)
						} catch (l) {
							return !1
						}
						"explorer" === E && (e.open(), e.writeln('<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body></body></html>'), e.close());
						b.submit()
					} else {
						if (52428800 < b.size) return d(!0, "limit50");
						if (x && 2097152 < b.size) return d(!0, "limit2");
						e = new FormData;
						e.append("upload", b, b.name || b.filename);
						b = pa.getRequestObject();
						b.open("POST", g);
						b.onload = function () {
							return d($_TAWK_JSON.parse(this.responseText))
						};
						b.onerror = function () {
							return d(!0)
						};
						b.send(e)
					}
				};
			var wa, P, qa, la = 0, Aa = {
					people: {
						header: ":smiley:",
						content: ":grinning: :grin: :joy: :rofl: :smiley: :smile: :sweat_smile: :laughing: :wink: :blush: :yum: :sunglasses: :heart_eyes: :kissing_heart: :kissing: :kissing_smiling_eyes: :kissing_closed_eyes: :relaxed: :slight_smile: :hugging: :thinking: :neutral_face: :expressionless: :no_mouth: :rolling_eyes: :smirk: :persevere: :disappointed_relieved: :open_mouth: :zipper_mouth: :hushed: :sleepy: :tired_face: :sleeping: :relieved: :nerd: :stuck_out_tongue: :stuck_out_tongue_winking_eye: :stuck_out_tongue_closed_eyes: :drooling_face: :unamused: :sweat: :pensive: :confused: :upside_down: :money_mouth: :astonished: :frowning2: :slight_frown: :confounded: :disappointed: :worried: :triumph: :cry: :sob: :frowning: :anguished: :fearful: :weary: :grimacing: :cold_sweat: :scream: :flushed: :dizzy_face: :rage: :angry: :innocent: :cowboy: :clown: :lying_face: :mask: :thermometer_face: :head_bandage: :nauseated_face: :sneezing_face: :smiling_imp: :imp: :japanese_ogre: :japanese_goblin: :skull: :ghost: :alien: :robot: :poop: :smiley_cat: :smile_cat: :joy_cat: :heart_eyes_cat: :smirk_cat: :kissing_cat: :scream_cat: :crying_cat_face: :pouting_cat: :boy: :boy_tone1: :boy_tone2: :boy_tone3: :boy_tone4: :boy_tone5: :girl: :girl_tone1: :girl_tone2: :girl_tone3: :girl_tone4: :girl_tone5: :man: :man_tone1: :man_tone2: :man_tone3: :man_tone4: :man_tone5: :woman: :woman_tone1: :woman_tone2: :woman_tone3: :woman_tone4: :woman_tone5: :older_man: :older_man_tone1: :older_man_tone2: :older_man_tone3: :older_man_tone4: :older_man_tone5: :older_woman: :older_woman_tone1: :older_woman_tone2: :older_woman_tone3: :older_woman_tone4: :older_woman_tone5: :baby: :baby_tone1: :baby_tone2: :baby_tone3: :baby_tone4: :baby_tone5: :angel: :angel_tone1: :angel_tone2: :angel_tone3: :angel_tone4: :angel_tone5: :cop: :cop_tone1: :cop_tone2: :cop_tone3: :cop_tone4: :cop_tone5: :spy: :spy_tone1: :spy_tone2: :spy_tone3: :spy_tone4: :spy_tone5: :guardsman: :guardsman_tone1: :guardsman_tone2: :guardsman_tone3: :guardsman_tone4: :guardsman_tone5: :construction_worker: :construction_worker_tone1: :construction_worker_tone2: :construction_worker_tone3: :construction_worker_tone4: :construction_worker_tone5: :man_with_turban: :man_with_turban_tone1: :man_with_turban_tone2: :man_with_turban_tone3: :man_with_turban_tone4: :man_with_turban_tone5: :person_with_blond_hair: :person_with_blond_hair_tone1: :person_with_blond_hair_tone2: :person_with_blond_hair_tone3: :person_with_blond_hair_tone4: :person_with_blond_hair_tone5: :santa: :santa_tone1: :santa_tone2: :santa_tone3: :santa_tone4: :santa_tone5: :mrs_claus: :mrs_claus_tone1: :mrs_claus_tone2: :mrs_claus_tone3: :mrs_claus_tone4: :mrs_claus_tone5: :princess: :princess_tone1: :princess_tone2: :princess_tone3: :princess_tone4: :princess_tone5: :prince: :prince_tone1: :prince_tone2: :prince_tone3: :prince_tone4: :prince_tone5: :bride_with_veil: :bride_with_veil_tone1: :bride_with_veil_tone2: :bride_with_veil_tone3: :bride_with_veil_tone4: :bride_with_veil_tone5: :man_in_tuxedo: :man_in_tuxedo_tone1: :man_in_tuxedo_tone2: :man_in_tuxedo_tone3: :man_in_tuxedo_tone4: :man_in_tuxedo_tone5: :pregnant_woman: :pregnant_woman_tone1: :pregnant_woman_tone2: :pregnant_woman_tone3: :pregnant_woman_tone4: :pregnant_woman_tone5: :man_with_gua_pi_mao: :man_with_gua_pi_mao_tone1: :man_with_gua_pi_mao_tone2: :man_with_gua_pi_mao_tone3: :man_with_gua_pi_mao_tone4: :man_with_gua_pi_mao_tone5: :person_frowning: :person_frowning_tone1: :person_frowning_tone2: :person_frowning_tone3: :person_frowning_tone4: :person_frowning_tone5: :person_with_pouting_face: :person_with_pouting_face_tone1: :person_with_pouting_face_tone2: :person_with_pouting_face_tone3: :person_with_pouting_face_tone4: :person_with_pouting_face_tone5: :no_good: :no_good_tone1: :no_good_tone2: :no_good_tone3: :no_good_tone4: :no_good_tone5: :ok_woman: :ok_woman_tone1: :ok_woman_tone2: :ok_woman_tone3: :ok_woman_tone4: :ok_woman_tone5: :information_desk_person: :information_desk_person_tone1: :information_desk_person_tone2: :information_desk_person_tone3: :information_desk_person_tone4: :information_desk_person_tone5: :raising_hand: :raising_hand_tone1: :raising_hand_tone2: :raising_hand_tone3: :raising_hand_tone4: :raising_hand_tone5: :bow: :bow_tone1: :bow_tone2: :bow_tone3: :bow_tone4: :bow_tone5: :face_palm: :face_palm_tone1: :face_palm_tone2: :face_palm_tone3: :face_palm_tone4: :face_palm_tone5: :shrug: :shrug_tone1: :shrug_tone2: :shrug_tone3: :shrug_tone4: :shrug_tone5: :massage: :massage_tone1: :massage_tone2: :massage_tone3: :massage_tone4: :massage_tone5: :haircut: :haircut_tone1: :haircut_tone2: :haircut_tone3: :haircut_tone4: :haircut_tone5: :walking: :walking_tone1: :walking_tone2: :walking_tone3: :walking_tone4: :walking_tone5: :runner: :runner_tone1: :runner_tone2: :runner_tone3: :runner_tone4: :runner_tone5: :dancer: :dancer_tone1: :dancer_tone2: :dancer_tone3: :dancer_tone4: :dancer_tone5: :man_dancing: :man_dancing_tone1: :man_dancing_tone2: :man_dancing_tone3: :man_dancing_tone4: :man_dancing_tone5: :dancers: :speaking_head: :bust_in_silhouette: :busts_in_silhouette: :couple: :two_men_holding_hands: :two_women_holding_hands: :couplekiss: :kiss_mm: :kiss_ww: :couple_with_heart: :couple_mm: :couple_ww: :family: :family_mwg: :family_mwgb: :family_mwbb: :family_mwgg: :family_mmb: :family_mmg: :family_mmgb: :family_mmbb: :family_mmgg: :family_wwb: :family_wwg: :family_wwgb: :family_wwbb: :family_wwgg: :muscle: :muscle_tone1: :muscle_tone2: :muscle_tone3: :muscle_tone4: :muscle_tone5: :selfie: :selfie_tone1: :selfie_tone2: :selfie_tone3: :selfie_tone4: :selfie_tone5: :point_left: :point_left_tone1: :point_left_tone2: :point_left_tone3: :point_left_tone4: :point_left_tone5: :point_right: :point_right_tone1: :point_right_tone2: :point_right_tone3: :point_right_tone4: :point_right_tone5: :point_up: :point_up_tone1: :point_up_tone2: :point_up_tone3: :point_up_tone4: :point_up_tone5: :point_up_2: :point_up_2_tone1: :point_up_2_tone2: :point_up_2_tone3: :point_up_2_tone4: :point_up_2_tone5: :middle_finger: :middle_finger_tone1: :middle_finger_tone2: :middle_finger_tone3: :middle_finger_tone4: :middle_finger_tone5: :point_down: :point_down_tone1: :point_down_tone2: :point_down_tone3: :point_down_tone4: :point_down_tone5: :v: :v_tone1: :v_tone2: :v_tone3: :v_tone4: :v_tone5: :fingers_crossed: :fingers_crossed_tone1: :fingers_crossed_tone2: :fingers_crossed_tone3: :fingers_crossed_tone4: :fingers_crossed_tone5: :vulcan: :vulcan_tone1: :vulcan_tone2: :vulcan_tone3: :vulcan_tone4: :vulcan_tone5: :metal: :metal_tone1: :metal_tone2: :metal_tone3: :metal_tone4: :metal_tone5: :call_me: :call_me_tone1: :call_me_tone2: :call_me_tone3: :call_me_tone4: :call_me_tone5: :hand_splayed: :hand_splayed_tone1: :hand_splayed_tone2: :hand_splayed_tone3: :hand_splayed_tone4: :hand_splayed_tone5: :raised_hand: :raised_hand_tone1: :raised_hand_tone2: :raised_hand_tone3: :raised_hand_tone4: :raised_hand_tone5: :ok_hand: :ok_hand_tone1: :ok_hand_tone2: :ok_hand_tone3: :ok_hand_tone4: :ok_hand_tone5: :thumbsup: :thumbsup_tone1: :thumbsup_tone2: :thumbsup_tone3: :thumbsup_tone4: :thumbsup_tone5: :thumbsdown: :thumbsdown_tone1: :thumbsdown_tone2: :thumbsdown_tone3: :thumbsdown_tone4: :thumbsdown_tone5: :fist: :fist_tone1: :fist_tone2: :fist_tone3: :fist_tone4: :fist_tone5: :punch: :punch_tone1: :punch_tone2: :punch_tone3: :punch_tone4: :punch_tone5: :left_facing_fist: :left_facing_fist_tone1: :left_facing_fist_tone2: :left_facing_fist_tone3: :left_facing_fist_tone4: :left_facing_fist_tone5: :right_facing_fist: :right_facing_fist_tone1: :right_facing_fist_tone2: :right_facing_fist_tone3: :right_facing_fist_tone4: :right_facing_fist_tone5: :raised_back_of_hand: :raised_back_of_hand_tone1: :raised_back_of_hand_tone2: :raised_back_of_hand_tone3: :raised_back_of_hand_tone4: :raised_back_of_hand_tone5: :wave: :wave_tone1: :wave_tone2: :wave_tone3: :wave_tone4: :wave_tone5: :clap: :clap_tone1: :clap_tone2: :clap_tone3: :clap_tone4: :clap_tone5: :writing_hand: :writing_hand_tone1: :writing_hand_tone2: :writing_hand_tone3: :writing_hand_tone4: :writing_hand_tone5: :open_hands: :open_hands_tone1: :open_hands_tone2: :open_hands_tone3: :open_hands_tone4: :open_hands_tone5: :raised_hands: :raised_hands_tone1: :raised_hands_tone2: :raised_hands_tone3: :raised_hands_tone4: :raised_hands_tone5: :pray: :pray_tone1: :pray_tone2: :pray_tone3: :pray_tone4: :pray_tone5: :handshake: :handshake_tone1: :handshake_tone2: :handshake_tone3: :handshake_tone4: :handshake_tone5: :nail_care: :nail_care_tone1: :nail_care_tone2: :nail_care_tone3: :nail_care_tone4: :nail_care_tone5: :ear: :ear_tone1: :ear_tone2: :ear_tone3: :ear_tone4: :ear_tone5: :nose: :nose_tone1: :nose_tone2: :nose_tone3: :nose_tone4: :nose_tone5: :footprints: :eyes: :eye: :tongue: :lips: :kiss: :zzz: :eyeglasses: :dark_sunglasses: :necktie: :shirt: :jeans: :dress: :kimono: :bikini: :womans_clothes: :purse: :handbag: :pouch: :school_satchel: :mans_shoe: :athletic_shoe: :high_heel: :sandal: :boot: :crown: :womans_hat: :tophat: :mortar_board: :helmet_with_cross: :lipstick: :ring: :closed_umbrella: :briefcase:".split(" ")
					},
					nature: {
						header: ":four_leaf_clover:",
						content: ":see_no_evil: :hear_no_evil: :speak_no_evil: :sweat_drops: :dash: :monkey_face: :monkey: :gorilla: :dog: :dog2: :poodle: :wolf: :fox: :cat: :cat2: :lion_face: :tiger: :tiger2: :leopard: :horse: :racehorse: :deer: :unicorn: :cow: :ox: :water_buffalo: :cow2: :pig: :pig2: :boar: :pig_nose: :ram: :sheep: :goat: :dromedary_camel: :camel: :elephant: :rhino: :mouse: :mouse2: :rat: :hamster: :rabbit: :rabbit2: :chipmunk: :bat: :bear: :koala: :panda_face: :feet: :turkey: :chicken: :rooster: :hatching_chick: :baby_chick: :hatched_chick: :bird: :penguin: :dove: :eagle: :duck: :owl: :frog: :crocodile: :turtle: :lizard: :snake: :dragon_face: :dragon: :whale: :whale2: :dolphin: :fish: :tropical_fish: :blowfish: :shark: :octopus: :shell: :crab: :shrimp: :squid: :butterfly: :snail: :bug: :ant: :bee: :beetle: :spider: :spider_web: :scorpion: :bouquet: :cherry_blossom: :rosette: :rose: :wilted_rose: :hibiscus: :sunflower: :blossom: :tulip: :seedling: :evergreen_tree: :deciduous_tree: :palm_tree: :cactus: :ear_of_rice: :herb: :shamrock: :four_leaf_clover: :maple_leaf: :fallen_leaf: :leaves: :mushroom: :chestnut: :earth_africa: :earth_americas: :earth_asia: :new_moon: :waxing_crescent_moon: :first_quarter_moon: :waxing_gibbous_moon: :full_moon: :waning_gibbous_moon: :last_quarter_moon: :waning_crescent_moon: :crescent_moon: :new_moon_with_face: :first_quarter_moon_with_face: :last_quarter_moon_with_face: :sunny: :full_moon_with_face: :sun_with_face: :star: :star2: :cloud: :partly_sunny: :thunder_cloud_rain: :white_sun_small_cloud: :white_sun_cloud: :white_sun_rain_cloud: :cloud_rain: :cloud_snow: :cloud_lightning: :cloud_tornado: :fog: :wind_blowing_face: :umbrella2: :umbrella: :zap: :snowflake: :snowman2: :snowman: :comet: :fire: :droplet: :ocean: :jack_o_lantern: :christmas_tree: :sparkles: :tanabata_tree: :bamboo:".split(" ")
					},
					food: {
						header: ":hamburger:",
						content: ":grapes: :melon: :watermelon: :tangerine: :lemon: :banana: :pineapple: :apple: :green_apple: :pear: :peach: :cherries: :strawberry: :kiwi: :tomato: :avocado: :eggplant: :potato: :carrot: :corn: :hot_pepper: :cucumber: :peanuts: :bread: :croissant: :french_bread: :pancakes: :cheese: :meat_on_bone: :poultry_leg: :bacon: :hamburger: :fries: :pizza: :hotdog: :taco: :burrito: :stuffed_flatbread: :egg: :cooking: :shallow_pan_of_food: :stew: :salad: :popcorn: :bento: :rice_cracker: :rice_ball: :rice: :curry: :ramen: :spaghetti: :sweet_potato: :oden: :sushi: :fried_shrimp: :fish_cake: :dango: :icecream: :shaved_ice: :ice_cream: :doughnut: :cookie: :birthday: :cake: :chocolate_bar: :candy: :lollipop: :custard: :honey_pot: :baby_bottle: :milk: :coffee: :tea: :sake: :champagne: :wine_glass: :cocktail: :tropical_drink: :beer: :beers: :champagne_glass: :tumbler_glass: :fork_knife_plate: :fork_and_knife: :spoon:".split(" ")
					},
					objects: {
						header: ":bulb:",
						content: ":skull_crossbones: :love_letter: :bomb: :hole: :shopping_bags: :prayer_beads: :gem: :knife: :amphora: :map: :barber: :frame_photo: :bellhop: :door: :sleeping_accommodation: :bed: :couch: :toilet: :shower: :bathtub: :hourglass: :hourglass_flowing_sand: :watch: :alarm_clock: :stopwatch: :timer: :clock: :thermometer: :beach_umbrella: :balloon: :tada: :confetti_ball: :dolls: :flags: :wind_chime: :ribbon: :gift: :joystick: :postal_horn: :microphone2: :level_slider: :control_knobs: :radio: :iphone: :calling: :telephone: :telephone_receiver: :pager: :fax: :battery: :electric_plug: :computer: :desktop: :printer: :keyboard: :mouse_three_button: :trackball: :minidisc: :floppy_disk: :cd: :dvd: :movie_camera: :film_frames: :projector: :tv: :camera: :camera_with_flash: :video_camera: :vhs: :mag: :mag_right: :microscope: :telescope: :satellite: :candle: :bulb: :flashlight: :izakaya_lantern: :notebook_with_decorative_cover: :closed_book: :book: :green_book: :blue_book: :orange_book: :books: :notebook: :ledger: :page_with_curl: :scroll: :page_facing_up: :newspaper: :newspaper2: :bookmark_tabs: :bookmark: :label: :moneybag: :yen: :dollar: :euro: :pound: :money_with_wings: :credit_card: :envelope: :e-mail: :incoming_envelope: :envelope_with_arrow: :outbox_tray: :inbox_tray: :package: :mailbox: :mailbox_closed: :mailbox_with_mail: :mailbox_with_no_mail: :postbox: :ballot_box: :pencil2: :black_nib: :pen_fountain: :pen_ballpoint: :paintbrush: :crayon: :pencil: :file_folder: :open_file_folder: :dividers: :date: :calendar: :notepad_spiral: :calendar_spiral: :card_index: :chart_with_upwards_trend: :chart_with_downwards_trend: :bar_chart: :clipboard: :pushpin: :round_pushpin: :paperclip: :paperclips: :straight_ruler: :triangular_ruler: :scissors: :card_box: :file_cabinet: :wastebasket: :lock: :unlock: :lock_with_ink_pen: :closed_lock_with_key: :key: :key2: :hammer: :pick: :hammer_pick: :tools: :dagger: :crossed_swords: :gun: :shield: :wrench: :nut_and_bolt: :gear: :compression: :alembic: :scales: :link: :chains: :syringe: :pill: :smoking: :coffin: :urn: :moyai: :oil: :crystal_ball: :shopping_cart: :triangular_flag_on_post: :crossed_flags: :flag_black: :flag_white: :rainbow_flag:".split(" ")
					},
					activity: {
						header: ":football:",
						content: ":space_invader: :levitate: :fencer: :horse_racing: :horse_racing_tone1: :horse_racing_tone2: :horse_racing_tone3: :horse_racing_tone4: :horse_racing_tone5: :skier: :snowboarder: :golfer: :surfer: :surfer_tone1: :surfer_tone2: :surfer_tone3: :surfer_tone4: :surfer_tone5: :rowboat: :rowboat_tone1: :rowboat_tone2: :rowboat_tone3: :rowboat_tone4: :rowboat_tone5: :swimmer: :swimmer_tone1: :swimmer_tone2: :swimmer_tone3: :swimmer_tone4: :swimmer_tone5: :basketball_player: :basketball_player_tone1: :basketball_player_tone2: :basketball_player_tone3: :basketball_player_tone4: :basketball_player_tone5: :lifter: :lifter_tone1: :lifter_tone2: :lifter_tone3: :lifter_tone4: :lifter_tone5: :bicyclist: :bicyclist_tone1: :bicyclist_tone2: :bicyclist_tone3: :bicyclist_tone4: :bicyclist_tone5: :mountain_bicyclist: :mountain_bicyclist_tone1: :mountain_bicyclist_tone2: :mountain_bicyclist_tone3: :mountain_bicyclist_tone4: :mountain_bicyclist_tone5: :cartwheel: :cartwheel_tone1: :cartwheel_tone2: :cartwheel_tone3: :cartwheel_tone4: :cartwheel_tone5: :wrestlers: :wrestlers_tone1: :wrestlers_tone2: :wrestlers_tone3: :wrestlers_tone4: :wrestlers_tone5: :water_polo: :water_polo_tone1: :water_polo_tone2: :water_polo_tone3: :water_polo_tone4: :water_polo_tone5: :handball: :handball_tone1: :handball_tone2: :handball_tone3: :handball_tone4: :handball_tone5: :juggling: :juggling_tone1: :juggling_tone2: :juggling_tone3: :juggling_tone4: :juggling_tone5: :circus_tent: :performing_arts: :art: :slot_machine: :bath: :bath_tone1: :bath_tone2: :bath_tone3: :bath_tone4: :bath_tone5: :reminder_ribbon: :tickets: :ticket: :military_medal: :trophy: :medal: :first_place: :second_place: :third_place: :soccer: :baseball: :basketball: :volleyball: :football: :rugby_football: :tennis: :8ball: :bowling: :cricket: :field_hockey: :hockey: :ping_pong: :badminton: :boxing_glove: :martial_arts_uniform: :goal: :dart: :golf: :ice_skate: :fishing_pole_and_fish: :running_shirt_with_sash: :ski: :video_game: :game_die: :musical_score: :microphone: :headphones: :saxophone: :guitar: :musical_keyboard: :trumpet: :violin: :drum: :clapper: :bow_and_arrow:".split(" ")
					},
					travel: {
						header: ":red_car:",
						content: ":race_car: :motorcycle: :japan: :mountain_snow: :mountain: :volcano: :mount_fuji: :camping: :beach: :desert: :island: :park: :stadium: :classical_building: :construction_site: :homes: :cityscape: :house_abandoned: :house: :house_with_garden: :office: :post_office: :european_post_office: :hospital: :bank: :hotel: :love_hotel: :convenience_store: :school: :department_store: :factory: :japanese_castle: :european_castle: :wedding: :tokyo_tower: :statue_of_liberty: :church: :mosque: :synagogue: :shinto_shrine: :kaaba: :fountain: :tent: :foggy: :night_with_stars: :sunrise_over_mountains: :sunrise: :city_dusk: :city_sunset: :bridge_at_night: :milky_way: :carousel_horse: :ferris_wheel: :roller_coaster: :steam_locomotive: :railway_car: :bullettrain_side: :bullettrain_front: :train2: :metro: :light_rail: :station: :tram: :monorail: :mountain_railway: :train: :bus: :oncoming_bus: :trolleybus: :minibus: :ambulance: :fire_engine: :police_car: :oncoming_police_car: :taxi: :oncoming_taxi: :red_car: :oncoming_automobile: :blue_car: :truck: :articulated_lorry: :tractor: :bike: :scooter: :motor_scooter: :busstop: :motorway: :railway_track: :fuelpump: :rotating_light: :traffic_light: :vertical_traffic_light: :construction: :anchor: :sailboat: :canoe: :speedboat: :cruise_ship: :ferry: :motorboat: :ship: :airplane: :airplane_small: :airplane_departure: :airplane_arriving: :seat: :helicopter: :suspension_railway: :mountain_cableway: :aerial_tramway: :rocket: :satellite_orbital: :stars: :rainbow: :fireworks: :sparkler: :rice_scene: :checkered_flag:".split(" ")
					},
					symbols: {
						header: ":hash:",
						content: ":100: :1234: :eye_in_speech_bubble: :cupid: :heart: :heartbeat: :broken_heart: :two_hearts: :sparkling_heart: :heartpulse: :blue_heart: :green_heart: :yellow_heart: :purple_heart: :black_heart: :gift_heart: :revolving_hearts: :heart_decoration: :heart_exclamation: :anger: :boom: :dizzy: :speech_balloon: :speech_left: :anger_right: :thought_balloon: :white_flower: :globe_with_meridians: :hotsprings: :octagonal_sign: :clock12: :clock1230: :clock1: :clock130: :clock2: :clock230: :clock3: :clock330: :clock4: :clock430: :clock5: :clock530: :clock6: :clock630: :clock7: :clock730: :clock8: :clock830: :clock9: :clock930: :clock10: :clock1030: :clock11: :clock1130: :cyclone: :spades: :hearts: :diamonds: :clubs: :black_joker: :mahjong: :flower_playing_cards: :mute: :speaker: :sound: :loud_sound: :loudspeaker: :mega: :bell: :no_bell: :musical_note: :notes: :chart: :currency_exchange: :heavy_dollar_sign: :atm: :put_litter_in_its_place: :potable_water: :wheelchair: :mens: :womens: :restroom: :baby_symbol: :wc: :passport_control: :customs: :baggage_claim: :left_luggage: :warning: :children_crossing: :no_entry: :no_entry_sign: :no_bicycles: :no_smoking: :do_not_litter: :non-potable_water: :no_pedestrians: :no_mobile_phones: :underage: :radioactive: :biohazard: :arrow_up: :arrow_upper_right: :arrow_right: :arrow_lower_right: :arrow_down: :arrow_lower_left: :arrow_left: :arrow_upper_left: :arrow_up_down: :left_right_arrow: :leftwards_arrow_with_hook: :arrow_right_hook: :arrow_heading_up: :arrow_heading_down: :arrows_clockwise: :arrows_counterclockwise: :back: :end: :on: :soon: :top: :place_of_worship: :atom: :om_symbol: :star_of_david: :wheel_of_dharma: :yin_yang: :cross: :orthodox_cross: :star_and_crescent: :peace: :menorah: :six_pointed_star: :aries: :taurus: :gemini: :cancer: :leo: :virgo: :libra: :scorpius: :sagittarius: :capricorn: :aquarius: :pisces: :ophiuchus: :twisted_rightwards_arrows: :repeat: :repeat_one: :arrow_forward: :fast_forward: :track_next: :play_pause: :arrow_backward: :rewind: :track_previous: :arrow_up_small: :arrow_double_up: :arrow_down_small: :arrow_double_down: :pause_button: :stop_button: :record_button: :eject: :cinema: :low_brightness: :high_brightness: :signal_strength: :vibration_mode: :mobile_phone_off: :recycle: :name_badge: :fleur-de-lis: :beginner: :trident: :o: :white_check_mark: :ballot_box_with_check: :heavy_check_mark: :heavy_multiplication_x: :x: :negative_squared_cross_mark: :heavy_plus_sign: :heavy_minus_sign: :heavy_division_sign: :curly_loop: :loop: :part_alternation_mark: :eight_spoked_asterisk: :eight_pointed_black_star: :sparkle: :bangbang: :interrobang: :question: :grey_question: :grey_exclamation: :exclamation: :wavy_dash: :copyright: :registered: :tm: :hash: :asterisk: :zero: :one: :two: :three: :four: :five: :six: :seven: :eight: :nine: :keycap_ten: :capital_abcd: :abcd: :symbols: :abc: :a: :ab: :b: :cl: :cool: :free: :information_source: :id: :m: :new: :ng: :o2: :ok: :parking: :sos: :up: :vs: :koko: :sa: :u6708: :u6709: :u6307: :ideograph_advantage: :u5272: :u7121: :u7981: :accept: :u7533: :u5408: :u7a7a: :congratulations: :secret: :u55b6: :u6e80: :black_small_square: :white_small_square: :white_medium_square: :black_medium_square: :white_medium_small_square: :black_medium_small_square: :black_large_square: :white_large_square: :large_orange_diamond: :large_blue_diamond: :small_orange_diamond: :small_blue_diamond: :small_red_triangle: :small_red_triangle_down: :diamond_shape_with_a_dot_inside: :radio_button: :black_square_button: :white_square_button: :white_circle: :black_circle: :red_circle: :blue_circle: :regional_indicator_z: :regional_indicator_y: :regional_indicator_x: :regional_indicator_w: :regional_indicator_v: :regional_indicator_u: :regional_indicator_t: :regional_indicator_s: :regional_indicator_r: :regional_indicator_q: :regional_indicator_p: :regional_indicator_o: :regional_indicator_n: :regional_indicator_m: :regional_indicator_l: :regional_indicator_k: :regional_indicator_j: :regional_indicator_i: :regional_indicator_h: :regional_indicator_g: :regional_indicator_f: :regional_indicator_e: :regional_indicator_d: :regional_indicator_c: :regional_indicator_b: :regional_indicator_a:".split(" ")
					},
					flags: {
						header: ":flag_black:",
						content: ":flag_ac: :flag_ad: :flag_ae: :flag_af: :flag_ag: :flag_ai: :flag_al: :flag_am: :flag_ao: :flag_aq: :flag_ar: :flag_as: :flag_at: :flag_au: :flag_aw: :flag_ax: :flag_az: :flag_ba: :flag_bb: :flag_bd: :flag_be: :flag_bf: :flag_bg: :flag_bh: :flag_bi: :flag_bj: :flag_bl: :flag_bm: :flag_bn: :flag_bo: :flag_bq: :flag_br: :flag_bs: :flag_bt: :flag_bv: :flag_bw: :flag_by: :flag_bz: :flag_ca: :flag_cc: :flag_cd: :flag_cf: :flag_cg: :flag_ch: :flag_ci: :flag_ck: :flag_cl: :flag_cm: :flag_cn: :flag_co: :flag_cp: :flag_cr: :flag_cu: :flag_cv: :flag_cw: :flag_cx: :flag_cy: :flag_cz: :flag_de: :flag_dg: :flag_dj: :flag_dk: :flag_dm: :flag_do: :flag_dz: :flag_ea: :flag_ec: :flag_ee: :flag_eg: :flag_eh: :flag_er: :flag_es: :flag_et: :flag_eu: :flag_fi: :flag_fj: :flag_fk: :flag_fm: :flag_fo: :flag_fr: :flag_ga: :flag_gb: :flag_gd: :flag_ge: :flag_gf: :flag_gg: :flag_gh: :flag_gi: :flag_gl: :flag_gm: :flag_gn: :flag_gp: :flag_gq: :flag_gr: :flag_gs: :flag_gt: :flag_gu: :flag_gw: :flag_gy: :flag_hk: :flag_hm: :flag_hn: :flag_hr: :flag_ht: :flag_hu: :flag_ic: :flag_id: :flag_ie: :flag_il: :flag_im: :flag_in: :flag_io: :flag_iq: :flag_ir: :flag_is: :flag_it: :flag_je: :flag_jm: :flag_jo: :flag_jp: :flag_ke: :flag_kg: :flag_kh: :flag_ki: :flag_km: :flag_kn: :flag_kp: :flag_kr: :flag_kw: :flag_ky: :flag_kz: :flag_la: :flag_lb: :flag_lc: :flag_li: :flag_lk: :flag_lr: :flag_ls: :flag_lt: :flag_lu: :flag_lv: :flag_ly: :flag_ma: :flag_mc: :flag_md: :flag_me: :flag_mf: :flag_mg: :flag_mh: :flag_mk: :flag_ml: :flag_mm: :flag_mn: :flag_mo: :flag_mp: :flag_mq: :flag_mr: :flag_ms: :flag_mt: :flag_mu: :flag_mv: :flag_mw: :flag_mx: :flag_my: :flag_mz: :flag_na: :flag_nc: :flag_ne: :flag_nf: :flag_ng: :flag_ni: :flag_nl: :flag_no: :flag_np: :flag_nr: :flag_nu: :flag_nz: :flag_om: :flag_pa: :flag_pe: :flag_pf: :flag_pg: :flag_ph: :flag_pk: :flag_pl: :flag_pm: :flag_pn: :flag_pr: :flag_ps: :flag_pt: :flag_pw: :flag_py: :flag_qa: :flag_re: :flag_ro: :flag_rs: :flag_ru: :flag_rw: :flag_sa: :flag_sb: :flag_sc: :flag_sd: :flag_se: :flag_sg: :flag_sh: :flag_si: :flag_sj: :flag_sk: :flag_sl: :flag_sm: :flag_sn: :flag_so: :flag_sr: :flag_ss: :flag_st: :flag_sv: :flag_sx: :flag_sy: :flag_sz: :flag_ta: :flag_tc: :flag_td: :flag_tf: :flag_tg: :flag_th: :flag_tj: :flag_tk: :flag_tl: :flag_tm: :flag_tn: :flag_to: :flag_tr: :flag_tt: :flag_tv: :flag_tw: :flag_tz: :flag_ua: :flag_ug: :flag_um: :flag_us: :flag_uy: :flag_uz: :flag_va: :flag_vc: :flag_ve: :flag_vg: :flag_vi: :flag_vn: :flag_vu: :flag_wf: :flag_ws: :flag_xk: :flag_ye: :flag_yt: :flag_za: :flag_zm: :flag_zw:".split(" ")
					}
				},
				Ba = function () {
					var a;
					clearTimeout(qa);
					!x && k.isPopup ? a = h : (a = x ? k.isPopup ? b.viewHandler.chatContainer.elementId : b.viewHandler.maximizedWidget.container.elementId : g.container.elementId, a = document.getElementById(a), a = a.contentWindow || a.contentDocument || a);
					"undefined" === typeof a.emojione ? (la++, 20 === la ? (clearTimeout(qa), la = 0) : qa = setTimeout(function () {
						Ba()
					}, 20)) : (clearTimeout(qa), la = 0, P = a.emojione, P.ascii = !0)
				}, Ea = function (a) {
					var n, f = "";
					n = s["emoji-selection"];
					var c = s["emoji-tab-select"];
					if (wa) wa.style.display =
						"block"; else if (a.style.display = "block", "undefined" === typeof P) 20 === la ? a.innerHTML = "Unable to load emojis" : (0 === la && Ba(), setTimeout(function () {
						Ea(a)
					}, 20)); else {
						clearTimeout(qa);
						wa = a;
						Object.keys(Aa).forEach(function (a, b) {
							f += c.replace(/__ID__/, a).replace(/__IMAGE__/, P.shortnameToImage(Aa[a].header)).replace(/__IS_ACTIVE__/, "")
						});
						n = n.replace(/__TAB_LIST__/, f);
						a.innerHTML = n;
						n = m.getElementsByClassName(a, "open-tab");
						Fa(a, {target: n[0]});
						for (var d = 0; d < n.length; d++) b.eventHandler.listen(n[d], b.viewHandler.clickEvent,
							function (b) {
								b.stopPropagation();
								Fa(a, b)
							}, n[d].id + "OpenTab")
					}
				}, Fa = function (a, n) {
					var f, c, d = "", e = s["emoji-tab-pane"], h = s["emoji-list"];
					tabElements = m.getElementsByClassName(a, "open-tab");
					if (c = x ? k.isPopup ? b.viewHandler.chatContainer.getElementById("tab-content") : b.viewHandler.maximizedWidget.container.getElementById("tab-content") : g.container.getElementById("tab-content")) {
						f = "open-tab" === n.target.className ? n.target : n.target.offsetParent;
						f = f.id;
						for (var l = 0; l < tabElements.length; l++) tabElements[l].className =
							tabElements[l].id === f ? "open-tab active" : "open-tab";
						if ("search" === f) c.innerHTML = s["emoji-search-pane"], c = x ? k.isPopup ? b.viewHandler.chatContainer.getElementById("search-emoji") : b.viewHandler.maximizedWidget.container.getElementById("search-emoji") : g.container.getElementById("search-emoji"), b.eventHandler.listen(c, "keyup", function (a) {
							var f = b.eventHandler.getTargetElement(a).value.trim().toLowerCase(), n = s["emoji-list"];
							results = "";
							shortnames = P.shortnames.split("|");
							if (a = x ? k.isPopup ? b.viewHandler.chatContainer.getElementById("search-list") :
									b.viewHandler.maximizedWidget.container.getElementById("search-list") : g.container.getElementById("search-list")) {
								if (f) for (var c = 0; c < shortnames.length; c++) {
									var q = shortnames[c];
									-1 !== q.indexOf(f) && (results += n.replace(/__IMAGE__/, P.shortnameToImage(q)).replace(/__SHORTNAME__/g, q))
								}
								a.innerHTML = results;
								Ga()
							}
						}, "searchEmojiKeyup"); else if (f = Aa[f]) f.content.forEach(function (a) {
							d += h.replace(/__IMAGE__/, P.shortnameToImage(a)).replace(/__SHORTNAME__/g, a)
						}), c.innerHTML = e.replace(/__EMOJIS__/, d).replace(/__ID__/,
							"people"), Ga()
					}
				}, Ga = function () {
					for (var a = m.getElementsByClassName(wa, "emoji-select"), n = 0; n < a.length; n++) b.eventHandler.listen(a[n], b.viewHandler.clickEvent, function (a) {
						a = b.eventHandler.getTargetElement(a);
						a = P.shortnameToUnicode(a.title);
						x ? k.isPopup ? b.viewHandler.addEmojiToInput(a) : b.viewHandler.maximizedWidget.addEmojiToInput(a) : g.addEmojiToInput(a)
					}, a[n].id + "SelectEmoji")
				}, ma = function () {
					this.chatWindowStates = {min: !0, max: !0};
					this.selfOrigin = this.socket = null;
					this.forceDisconnected = this.banned = this.ready =
						this.disconnect = !1;
					this.clearRegisterRetryTimeout = null
				};
			ma.prototype = new EventEmitter;
			ma.prototype.init = function () {
				var a, n = !1, f = this, c = (new Date).getTime();
				this.forceDisconnected = this.disconnect = w.connected = !1;
				this.removeAllListeners();
				this.socket && (this.socket.removeAllListeners(), this.socket.disconnect());
				null === K && da.handleWindowId();
				null !== K && "null" !== K || b.loggingHandler.logIncident("windowId is null", {
					windowId: K,
					type: typeof K
				});
				if ("symbian" === x || "android" === x || "safari" === x && 7 > F || N && 9 >= F && "https" !==
					location.protocol) n = !0;
				a = {
					k: t.sessionKey,
					u: A.uuid,
					uv: A.uuidVer,
					a: W.pageId,
					cver: y.chatVersion,
					pop: k.isPopup,
					w: K,
					jv: t.currentVersion,
					asver: t.pageStatusVersion,
					ust: $_Tawk_Unstable,
					p: k.isPopup ? W.pageName() : document.title,
					r: document.referrer
				};
				a.p && 255 < a.p.length && (a.p = a.p.substring(0, 255));
				this.socket = new $__TawkSocket("wss://" + t.visitorSocketServer + "/", {
					engineIo: $__TawkEngine,
					path: "/s",
					query: a,
					forceJSONP: n
				});
				this.socket.on("disconnect", function () {
					f.disconnectHandler()
				});
				this.socket.on("error", function (a) {
					var n,
						c = "socket on error";
					if (a instanceof Error) {
						n = {toString: a.toString(), stack: a.stack, lineNumber: a.lineNumber, fileName: a.fileName};
						if (b.loggingHandler.unloading && -1 === n.toString.indexOf("post")) return;
						"TransportError" === a.type && (n.description = a.description);
						-1 !== n.toString.indexOf("post") && (c = "socket post error")
					} else n = a;
					b.loggingHandler.logIncident(c, n);
					f.socket.disconnect();
					f.disconnectHandler()
				});
				this.socket.on("connect", function () {
					f.disconnect = !1
				});
				this.socket.on("ready", function (a, n, e) {
					if (!b) return f.disconnectSocket();
					f.selfOrigin = a;
					w.connected = !0;
					f.ready || (w.loaded = !0, "undefined" !== typeof $_Tawk_LoadStart && b.loggingHandler.logPerformance({
						socket: (new Date).getTime() - c,
						register: d.registerTime,
						widget: (new Date).getTime() - $_Tawk_LoadStart,
						script: (new Date).getTime() - I,
						download: I - $_Tawk_LoadStart
					}));
					f.ready = !0;
					try {
						b.eventEmitter.emit("syncConversation", n)
					} catch (g) {
						p.handleError("Unable to emit syncConversation", g.fileName, g.lineNumber, g.stack)
					}
					try {
						b.eventEmitter.emit("pageStatusUpdated", e)
					} catch (k) {
						p.handleError("Unable to emit pageStatusUpdated",
							k.fileName, k.lineNumber, k.stack)
					}
					try {
						b.eventEmitter.emit("socketReady")
					} catch (h) {
						p.handleError("Unable to emit socketReady", h.fileName, h.lineNumber, h.stack)
					}
					clearTimeout(f.clearRegisterRetryTimeout);
					f.clearRegisterRetryTimeout = setTimeout(function () {
						f.disconnect || d.resetRetryCount();
						f.clearRegisterRetryTimeout = null
					}, 5E3)
				});
				this.socket.on("remoteDisconnect", function (a) {
					a = a || {};
					if ("BANNED" === a.msg) {
						f.banned = !0;
						try {
							f.socket.disconnect()
						} catch (n) {
							p.handleError("Unable to emit disconnect socket on ban",
								n.fileName, n.lineNumber, n.stack)
						}
						b.main.hideWidget()
					} else f.socket.disconnect(), f.disconnectHandler()
				});
				this.addEventListeners()
			};
			ma.prototype.addEventListeners = function () {
				function a(a, n) {
					try {
						b.eventEmitter.emit(a, n)
					} catch (c) {
						p.handleError("Unable to emit socket event : " + a + " with data : " + $_TAWK_JSON.stringify(n), c.fileName, c.lineNumber, c.stack)
					}
				}

				var n = this;
				this.socket.on("visitorChatWindowState", function (b) {
					n.selfOrigin !== b.origin && a("windowStateUpdated", b)
				});
				this.socket.on("visitorDataUpdate",
					function (b) {
						n.selfOrigin !== b.origin && a("visitorDataUpdate", b)
					});
				this.socket.on("visitorSound", function (a) {
					a.origin !== n.selfOrigin && b.chatHandler.toggleSound(!!a.sdo)
				});
				this.socket.on("visitorMessage", function (b) {
					n.selfOrigin !== b.origin && a("incomingMessage", b)
				});
				this.socket.on("visitorConversationPresenceUpdate", function (b) {
					a("incomingMessage", b)
				});
				this.socket.on("pageStatus", function (b) {
					a("pageStatusUpdated", b)
				});
				this.socket.on("newCriticalUpdate", function (a) {
					a = a || 0;
					a != t.criticalVersion && b.main.criticalRefresh(a,
						!0)
				});
				this.socket.on("newUnstableCriticalUpdate", function (a) {
					a = a || 0;
					$_Tawk_Unstable && a != t.criticalVersion && b.main.criticalRefresh(a, !0)
				});
				this.socket.on("visitorPopupFocus", function (b) {
					b = b || {};
					a("visitorPopupFocus", !!b.hasFocus)
				});
				this.socket.on("chatBubbleClosed", function (b) {
					b.origin !== n.selfOrigin && a("chatBubbleClosed", b)
				});
				this.socket.on("agentIsTyping", function (b) {
					a("agentIsTyping", b)
				});
				this.socket.on("agentStopedTyping", function (b) {
					a("agentStopedTyping", b)
				});
				this.socket.on("pageDisable", function () {
					a("removeWidget")
				});
				this.socket.on("widgetScheduleUpdate", function (b) {
					a("scheduleUpdate", b)
				});
				this.socket.on("uploadProgress", function (b) {
					a("fileUploadProgress", b)
				});
				this.socket.on("uploadFinished", function (b) {
					a("fileUploadFinished", b)
				});
				this.socket.on("uploadError", function (b) {
					a("fileUploadError", b)
				});
				this.socket.on("vCallStatus", function (b) {
					a("webrtcCallStatus", b)
				});
				this.on("notifyWindowState", function (a) {
					n.chatWindowStates[a] && n.socket.send("chatWindowState", a)
				});
				this.on("notifyChatBubbleClosed", function () {
					n.socket.send("chatBubbleClose")
				});
				this.on("notifyMessagePreview", function (a) {
					n.socket.send("messagePreview", a, (new Date).getTime())
				});
				this.on("sendChatMessage", function (a, b) {
					n.socket.send("chatMessage", a, b)
				});
				this.on("notifyNameChange", function (a, b) {
					n.socket.send("saveNameChangeForm", a, b)
				});
				this.on("notifyEmailTranscript", function (a, b) {
					n.socket.send("saveTranscriptEmailForm", a, b)
				});
				this.on("notifyEndChatTranscript", function (a, b) {
					n.socket.send("sendTranscript", a, b)
				});
				this.on("notifyOfflineMessage", function (a, b) {
					n.socket.send("service",
						"visitor-chat", "/v1/visitor/offline-form", a, b)
				});
				this.on("notifyPrechat", function (a, b) {
					n.socket.send("savePrechatForm", a, b)
				});
				this.on("setRating", function (a) {
					n.socket.send("visitorRating", a)
				});
				this.on("toggleSound", function (a) {
					n.socket.send("visitorSound", a)
				});
				this.on("notifyWidgetResized", function () {
					n.socket.send("chatWindowResize")
				});
				this.on("popupOnFocus", function (a) {
					n.socket.send("visitorPopupFocus", a)
				});
				this.on("notifySocketStatusUpdate", function (a) {
					n.socket.send("socketStatusUpdate", a)
				});
				this.on("saveForeignKey",
					function (a, b) {
						n.socket.send("saveForeignKey", a, b)
					});
				this.on("saveConversion", function (a, b) {
					n.socket.send("saveConversion", a, b)
				});
				this.on("submitMultipleOptions", function (a, b) {
					n.socket.send("saveMultipleOptions", a, b)
				});
				this.on("endVisitorChat", function (a, b) {
					n.socket.send("endChat", b)
				});
				this.on("fileUploadMessage", function (a, b) {
					n.socket.send("fileUploadMessage", a, b)
				});
				this.on("addEvent", function (a, b) {
					n.socket.send("addEvent", a, b)
				});
				this.on("setAttributes", function (a, b) {
					n.socket.send("setAttributes",
						a, b)
				});
				this.on("addTags", function (a, b) {
					n.socket.send("addTags", a, b)
				});
				this.on("removeTags", function (a, b) {
					n.socket.send("removeTags", a, b)
				});
				this.on("getWebRTCToken", function (a, b) {
					this.socket.send("service", "webrtc", "/v1/vcall/init/visitor", a, b)
				});
				this.on("getCallStatus", function (a, b) {
					this.socket.send("service", "webrtc", "/v1/vcall/status/visitor", a, b)
				});
				this.on("declineCall", function (a, b) {
					this.socket.send("service", "webrtc", "/v1/vcall/reject/visitor", a, b)
				})
			};
			ma.prototype.disconnectSocket = function () {
				this.forceDisconnected =
					!0;
				this.socket && (this.socket.disconnect(), this.disconnectHandler())
			};
			ma.prototype.disconnectHandler = function () {
				w.connected = !1;
				this.socket.removeAllListeners();
				this.removeAllListeners();
				b.scheduler.clearTimer();
				this.banned || (this.forceDisconnected || this.disconnect) || (this.disconnect = !0, d.retryRegister())
			};
			var B = function (a, b, f, c, d) {
				var e = this;
				this.elementId = a || "";
				this.style = b || "";
				this.tagName = c || "div";
				this.childViews = [];
				this.template = a && s[a] ? s[a] : "";
				this.elementReferrer = null;
				this.documentRef = d || document;
				this.attributes = {};
				this.isVisible = !1;
				this.classNames = [];
				"iframe" === c && (this.isIframe = !0);
				this.elementId && (this.attributes.id = this.elementId);
				f && Object.keys(f).forEach(function (a) {
					e.attributes[a] = f[a]
				})
			};
			B.prototype.addChildViews = function (a) {
				var b = this;
				a.forEach(function (a) {
					b.childViews.push(a)
				})
			};
			B.prototype.buildView = function (a) {
				this.documentRef = a || this.documentRef;
				this.elementReferrer = m.createElement(this.documentRef, this.tagName, this.attributes, this.style, this.template);
				this.elementReferrer.className +=
					this.classNames.join(" ");
				this.isIframe || this.buildChildViews();
				return this.elementReferrer
			};
			B.prototype.buildChildViews = function (a) {
				var b = this;
				this.childViews.length && (this.documentRef = a || this.documentRef, this.childViews.forEach(function (a) {
					b.elementReferrer.appendChild(a.buildView(b.documentRef))
				}))
			};
			B.prototype.restyle = function (a, b) {
				b && (-1 === b.indexOf("!important") && (b += " !important"), this.elementReferrer ? this.elementReferrer.style.cssText += ";" + a + ":" + b : this.style += ";" + a + ":" + b)
			};
			B.prototype.attachUserEventListener =
				function (a, n, f, c) {
					var d;
					if (d = f ? this.getElementById(f) : this.elementReferrer) f = a.split(" "), 1 < f.length ? f.forEach(function (a) {
						b.eventHandler.listen(d, a, n, a + c)
					}) : b.eventHandler.listen(d, a, n, c)
				};
			B.prototype.toggle = function () {
				this.isVisible ? (this.restyle("display", "none !important"), this.isVisible = !1) : (this.restyle("display", "block !important"), this.isVisible = !0)
			};
			B.prototype.getElementById = function (a) {
				return this.elementReferrer ? this.documentRef.getElementById(a) : null
			};
			B.prototype.insertHtml = function (a) {
				this.elementReferrer.innerHTML =
					a
			};
			B.prototype.clear = function () {
				this.elementReferrer && (this.elementReferrer.outerHTML = "", this.elementReferrer = null)
			};
			B.prototype.addClass = function (a) {
				this.classNames.push(a);
				this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" "))
			};
			B.prototype.removeClass = function (a) {
				for (; -1 !== this.classNames.indexOf(a);) this.classNames.splice(this.classNames.indexOf(a), 1);
				this.elementReferrer && (this.elementReferrer.className = this.classNames.join(" "))
			};
			B.prototype.hide = function () {
				this.restyle("display",
					"none !important");
				this.isVisible = !1
			};
			B.prototype.show = function () {
				this.restyle("display", "block !important");
				this.isVisible = !0
			};
			B.prototype.insertCssFile = function (a, n) {
				var f = this.documentRef.getElementsByTagName("head")[0], c = this.documentRef.createDocumentFragment(),
					d = m.createElement(this.documentRef, "style", {type: "text/css"}),
					e = this.documentRef.createTextNode(n ? a : b.ResetStyle + "" + a);
				c.appendChild(d);
				f.appendChild(c);
				d.styleSheet ? d.styleSheet.cssText = e.nodeValue : d.appendChild(e)
			};
			B.prototype.massRestyle =
				function (a) {
					for (var b in a) this.restyle(b, a[b])
				};
			var ca = function () {
				B.apply(this, arguments)
			};
			ca.prototype = new B;
			ca.prototype.constructor = ca;
			ca.prototype.parent = B.prototype;
			ca.prototype.buildIframe = function (a, b) {
				this.documentRef = m.getDocument(this.elementReferrer);
				this.documentRef.open();
				this.documentRef.writeln('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" /></head><body></body></html>');
				this.documentRef.close();
				this.insertCssFile(a);
				this.insertContent();
				this.buildChildViews()
			};
			ca.prototype.insertContent = function () {
				this.documentRef.body.innerHTML = this.template
			};
			ca.prototype.buildChildViews = function () {
				var a = this;
				this.childViews.forEach(function (b) {
					a.documentRef.body.appendChild(b.buildView(a.documentRef))
				})
			};
			var ga = function (a) {
				this.template = (this.elementId = (this.formData = a) ? a.id : null) && s[this.elementId] ? s[this.elementId] : "";
				this.elementReferrer = null;
				this.documentRef = document;
				this.attributes =
					{className: "form"};
				this.elementId && (this.attributes.id = this.elementId)
			};
			ga.prototype.buildForm = function () {
				this.formData.additionalFields = [];
				this.insertTranslatedTexts()
			};
			ga.prototype.buildView = function (a) {
				this.documentRef = a || this.documentRef;
				return this.elementReferrer = m.createElement(this.documentRef, "div", this.attributes, null, this.template)
			};
			ga.prototype.addPlaceholderText = function (a, n, f, c, d) {
				d = RegExp("__" + a.toUpperCase() + "_PLACEHOLDER__", "gm");
				a.toUpperCase();
				a = RegExp("__" + a.toUpperCase() + "__",
					"gm");
				var e = b.languageParser.translate("form", f + "Placeholder");
				T || n || (n = e);
				e && e !== f + "Placeholder" || (e = n, n = "");
				if (c) return m.escapeTemplateReplacement(c, [{placeholder: d, textReplace: e}, {
					placeholder: a,
					textReplace: n
				}]);
				this.template = m.escapeTemplateReplacement(this.template, [{
					placeholder: d,
					textReplace: e
				}, {placeholder: a, textReplace: n}])
			};
			ga.prototype.addPlaceholderHandler = function () {
				var a, n = this;
				T || (a = this.formData.fields) && a.forEach(function (a) {
					var c, d, e;
					"input" !== a.type || a.isEnabled && !a.isEnabled() ||
					(e = a.getValue ? a.getValue() : "", "input" === a.type && m.isArray(e) ? e.forEach(function (b, e) {
						c = n.documentRef.getElementById(a.fieldName + e);
						d = b;
						m.togglePlaceholderText(c, d, a.fieldName + e);
						"textarea" !== c.tagName.toLowerCase() || m.trim(c.value) || (c.value = d)
					}) : a.hiddenIE8 || (c = n.documentRef.getElementById(a.fieldName + "Field"), d = b.languageParser.translate("form", a.languageKey + "Placeholder"), m.togglePlaceholderText(c, d, a.fieldName + "Field"), "textarea" !== c.tagName.toLowerCase() || m.trim(c.value) || (c.value = d)))
				})
			};
			ga.prototype.insertTranslatedTexts =
				function () {
					var a = this, n = "";
					(this.formData.fields || []).forEach(function (b) {
						var n;
						n = b.getValue ? b.getValue() : "";
						a.addPlaceholderText(b.fieldName, n, b.languageKey, null, b.labelText)
					});
					this.template = m.escapeTemplateReplacement(this.template, [{
						placeholder: "__TITLE__",
						textReplace: this.formData.getTitle ? this.formData.getTitle() : b.languageParser.translate("form", this.formData.title)
					}, {
						placeholder: "__OVERLAY__",
						textReplace: b.languageParser.translate("overlay", this.formData.overlayMessage)
					}, {
						placeholder: "__CANCEL_BUTTON__",
						textReplace: b.languageParser.translate("form", "CancelButton")
					}, {
						placeholder: "__SAVE_BUTTON__",
						textReplace: b.languageParser.translate("form", "SaveButton")
					}, {
						placeholder: "__SEND_BUTTON__",
						textReplace: b.languageParser.translate("form", "SendButton")
					}, {
						placeholder: "__SUBMIT_BUTTON__",
						textReplace: b.languageParser.translate("form", "SubmitButton")
					}, {
						placeholder: "__START_CHAT_BUTTON__",
						textReplace: b.languageParser.translate("form", "StartChatButton")
					}, {
						placeholder: "__END_CHAT_BUTTON__", textReplace: b.languageParser.translate("rollover",
							"end")
					}, {
						placeholder: "__SUBMITTING_INDICATOR__",
						textReplace: b.languageParser.translate("form", "SubmittingProcess")
					}, {
						placeholder: "__ENDING_INDICATOR__",
						textReplace: b.languageParser.translate("form", "EndingProcess")
					}, {
						placeholder: "__SENDING_INDICATOR__",
						textReplace: b.languageParser.translate("form", "SendingProcess")
					}, {
						placeholder: "__SAVING_INDICATOR__",
						textReplace: b.languageParser.translate("form", "SavingProcess")
					}, {
						placeholder: "__EMAIL_TRANSCRIPT_TO__", textReplace: b.languageParser.translate("form",
							"EmailTranscriptTo")
					}, {
						placeholder: "__OFFLINE_MESSAGE_SUCCESSFULY_SENT__",
						textReplace: b.languageParser.translate("form", "OfflineMessageSent")
					}, {
						placeholder: "__SEND_AGAIN__",
						textReplace: b.languageParser.translate("form", "sendAgain")
					}, {
						placeholder: /__STATUS__/gm,
						textReplace: b.languageParser.translate("form", "saving")
					}, {placeholder: /__IE6__/gm, textReplace: L ? "-ie6" : ""}, {
						placeholder: /__SAFARI__/gm,
						textReplace: "safari" === E ? "safari-fix" : ""
					}]);
					this.template = "safari" === E || "chrome" === E || "firefox" === E || "mozilla" ===
					E || N && 8 <= F ? this.template.replace("__NON_MODERN__", "") : this.template.replace("__NON_MODERN__", "other-fix");
					x && (n = m.escapeTemplateReplacement(s["close-form-button"], [{
						placeholder: "__CLOSE_BUTTON__",
						textReplace: b.languageParser.translate("form", "CloseButton")
					}]));
					this.template = m.escapeTemplateReplacement(this.template, [{
						placeholder: "__CLOSE_BUTTON_CONTAINER__",
						textReplace: n
					}])
				};
			var aa = function (a, b) {
				ga.apply(this, [a]);
				this.formName = b
			};
			aa.prototype = new ga;
			aa.prototype.constructor = aa;
			aa.prototype.parent =
				ga.prototype;
			aa.prototype.buildForm = function () {
				var a, n = [];
				a = "preChatForm" == this.formName ? "prechat" : "offline";
				this.formData.additionalFields = [];
				this.insertTranslatedTexts();
				if (null === this.formData.dynamicFields) {
					for (var f = 0, c = k[a + "Options"].fields.length; f < c; f++) {
						var d = {}, e = k[a + "Options"].fields[f];
						e.id = a + f;
						d.label = e.label;
						d.instantValidation = !1;
						d.isRequired = e.isRequired;
						d.fieldName = a + f;
						d.fieldType = e.type;
						d.validation = "isValidString";
						"name" === e.type ? (d.valueMaxLength = 40, d.getValue = b.visitorHandler.getNameValue,
							d.languageKey = "Name") : "email" === e.type ? (d.valueMaxLength = 150, d.getValue = b.visitorHandler.getEmailValue, d.validation = "isValidEmail", d.languageKey = "Email") : "message" === e.type || "textArea" === e.type ? d.valueMaxLength = 500 : "inputText" === e.type ? d.valueMaxLength = 150 : "department" === e.type ? d.getValue = b.sessionHandler.getDeparmentOptions : "choice" === e.type || "option" === e.type ? (d.type = "options", d.selections = e.selections) : "phone" === e.type && (d.valueMaxLength = 20, d.validation = "isValidPhone", d.languageKey = "Phone");
						d.isRequired &&
						!d.languageKey && (d.languageKey = "Required");
						n.push(d)
					}
					this.formData.dynamicFields = n
				}
				this.generateDynamicFields()
			};
			aa.prototype.generateDynamicFields = function () {
				for (var a = "", b = RegExp("__LABEL__", "gm"), f = RegExp("__ID__", "gm"), c = RegExp("__MAXLENGTH__", "gm"), d = 0, e = this.formData.dynamicFields.length; d < e; d++) {
					var g, k = "", h = this.formData.dynamicFields[d];
					if ("name" === h.fieldType || "email" === h.fieldType || "phone" === h.fieldType || "inputText" === h.fieldType) g = s.inputTextFieldType, g = "email" === h.fieldType ? g.replace("__INPUT_TYPE__",
						"email") : g.replace("__INPUT_TYPE__", "text"); else if ("message" === h.fieldType || "textArea" === h.fieldType) g = s.textAreaFieldType; else if ("department" === h.fieldType) g = s.departmentSelection; else if ("choice" === h.fieldType || "option" === h.fieldType) g = s.selectionsType, k = "choice" === h.fieldType ? this.generateCheckboxOptions(h.fieldName, h.selections) : this.generateRadioOptions(h.fieldName, h.selections);
					g && (g = g.replace(b, h.label), g = g.replace(f, h.fieldName), g = g.replace(c, h.valueMaxLength), g = h.isRequired ? g.replace(/__REQUIRED__/gm,
						"*") : g.replace(/__REQUIRED__/gm, ""), h.getValue && ("department" === h.fieldType ? (k = this.generateDropDownOptions(h.getValue(), h.isRequired)) || (g = "") : k = h.getValue()), g = g.replace("__VALUE__", k), a += g)
				}
				this.template = this.template.replace("__FIELDS__", a)
			};
			aa.prototype.generateDropDownOptions = function (a, b) {
				var f = "";
				if (0 === a.length) return !1;
				b || (f += '<option value="0"></option>');
				for (var c = 0, d = a.length; c < d; c++) f += '<option value="' + a[c].value + '"' + (a[c].selected ? 'selected="selected"' : "") + ">" + a[c].text + "</option>";
				return f
			};
			aa.prototype.generateRadioOptions = function (a, b) {
				for (var f = "", c = s.radioSelectionType, d = 0, e = b.length; d < e; d++) f += c.replace(/__ID__/gm, a + "radio" + d).replace(/__FIELD_ID__/gm, a).replace(/__VALUE__/gm, b[d]);
				return f
			};
			aa.prototype.generateCheckboxOptions = function (a, b) {
				for (var f = "", c = s.checkboxSelectionType, d = 0, e = b.length; d < e; d++) f += c.replace(/__ID__/gm, a + "check" + d).replace(/__FIELD_ID__/gm, a).replace(/__VALUE__/gm, b[d]);
				return f
			};
			aa.prototype.updateName = function (a) {
				for (var n, f = 0, c = this.formData.dynamicFields.length; f <
				c; f++) {
					var d = this.formData.dynamicFields[f];
					if ("name" === d.fieldType) {
						n = b.viewHandler.chatContainer.getElementById(d.fieldName + "Field");
						break
					}
				}
				n && (n.value = a)
			};
			aa.prototype.updateEmail = function (a) {
				for (var n, f = 0, c = this.formData.dynamicFields.length; f < c; f++) {
					var d = this.formData.dynamicFields[f];
					if ("email" === d.fieldType) {
						n = b.viewHandler.chatContainer.getElementById(d.fieldName + "Field");
						break
					}
				}
				n && (n.value = a)
			};
			aa.prototype.addPlaceholderHandler = function () {
				var a, b;
				if (!T) for (var f = 0, c = this.formData.dynamicFields.length; f <
				c; f++) b = this.formData.dynamicFields[f], "department" !== b.fieldType && ("choice" !== b.fieldType && "option" !== b.fieldType) && (this.formData.dynamicFields[f].placeholderText = (b.isRequired ? "* " : "") + b.label, a = this.documentRef.getElementById(b.fieldName + "Field"), m.togglePlaceholderText(a, this.formData.dynamicFields[f].placeholderText, b.fieldName + "Field"), m.trim(a.value) || (a.value = this.formData.dynamicFields[f].placeholderText))
			};
			var C = TawkClass.extend({
				init: function () {
					this.chatContainer = null;
					this.removeAgentNotification =
						!1;
					this.lastRadioButton = null;
					this.clickEvent = "click";
					this.isPopupFocused = !1;
					this.indicator = null;
					this.newMessageNotSeen = !1;
					this.notSeenMessages = [];
					this.lastMessageTime = this.lastFocusedElement = null;
					this.unseenMessageNumber = 0;
					this.retryUploadList = this.removeDividerTimeout = null;
					this.tawktoLinkName = m.getRandomName();
					this.bottomContainerName = m.getRandomName();
					this.incomingCallTimeout = null;
					this.callData = {}
				}, show: function () {
				}, appendAgent: function () {
				}, removeAgent: function () {
				}, clearAgentFooter: function () {
				},
				clearAgentHeader: function () {
				}, handleAcknowledgment: function (a) {
					var n, f, c, d, e, g, k, h, l = this.chatContainer;
					if (l && a.messageId && (d = l.getElementById(a.messageId))) {
						c = d.parentNode;
						f = 0;
						for (var p = d.childNodes.length; f < p; f++) {
							var r = d.childNodes[f];
							-1 !== r.className.indexOf("messageBody") && (n = m.getElementsByClassName(r, "messageWrapper"), h = m.getElementsByClassName(r, "messageStatusContainer"))
						}
						n && (n.length && h && h.length) && (h = h[0], n = n[0], a.error ? h && (c = s["chat-resend-link"].replace("__MESSAGE_ID__", a.messageId).replace("__NOT_DELIVERED__",
							b.languageParser.translate("chat", "message_not_delivered")), n.className = "messageWrapper error", h.className = "messageStatusContainer errorInMessage", h.innerHTML = c, e = m.rawDecode(n.childNodes[0].textContent || n.childNodes[0].innerText), this.scrollToBottom(), k = b.eventHandler.listen(h, b.viewHandler.clickEvent, function (f) {
							b.eventHandler.cancelEvent(f);
							b.chatHandler.sendMessageToServer(e, a.messageId);
							if (g = l.getElementById("errorFor" + a.messageId)) n.className = "messageWrapper pending";
							h.className = "messageStatusContainer pending";
							h.childNodes[0].innerHTML = '<span class="messageStatus"></span>';
							b.eventHandler.removeEventHandler(n, "click", k)
						}, "resend" + a.messageId + "click")) : (f = b.chatHandler.messages[a.order], b.viewHandler.addWaitTime(), c.removeChild(d), b.chatHandler.prepareMessage(f, !0, !1, !0)))
					}
				}, handleEndChat: function () {
				}, clearAgents: function () {
				}, handleRestartChat: function () {
				}, appendMessage: function (a, n) {
					var f, c, d, e = a.reDisplay ? a.reDisplay : !1;
					f = !1;
					var g = null, h = a.message, l = a.time, r = a.senderType, s = this.chatContainer.documentRef,
						v = this.ifScrollbarDown(), x = s.getElementById("chatWrapper"),
						u = "messageId-" + (new Date).getTime().toString() + Object.keys(b.chatHandler.messages).length,
						w = L ? "messageContainer-ie6" : "messageContainer clearfix", l = m.parseChatTime(l);
					"undefined" !== typeof P && (h = P.unifyUnicode(h), 0 === h.replace(P.regUnicode, "").trim().length && (w += " emojionly"), h = P.toImage(h));
					1 >= y.chatOrder && this.hideEmbeddedGreetings();
					!t.prechatFormSubmitted && k.showPreChatForm && (t.prechatFormSubmitted = !0, "preChatForm" === b.formHandler.currentForm &&
					b.formHandler.closeForm());
					"a" === r ? (f = this.parseSurvey(h, u), h = f.message, f = f.isSurvey, b.chatHandler.handleAgentStoppedTyping(a.data.rsc)) : b.chatHandler.visitorHasMessaged || "s" === r || (b.chatHandler.visitorHasMessaged = !0);
					a.data && a.data.file && (h = this.parseUploadedFile(a.data.file));
					"c" === a.type && (d = m.escapeTemplateReplacement(n["chat-message-row"], [{
						placeholder: "__MESSAGE_STATUS_ROW__",
						textReplace: n["chat-message-status-row"]
					}, {placeholder: /__MESSAGE_ID__/gm, textReplace: u}, {
						placeholder: "__MESSAGE__",
						textReplace: h
					}, {
						placeholder: "__PENDING__",
						textReplace: a.isPending ? "pending" : ""
					}]), w = "v" === r ? w + " visitorChatContainer " : w + " agentChatContainer ");
					g = new B(u, null, {className: w}, null, s);
					this.lastMessageTime = a.isPending ? this.lastMessageTime : l;
					"c" === a.type ? (b.chatHandler.lastMessageOwner = "s" === r ? "server" : a.isPending ? b.chatHandler.lastMessageOwner : a.ownerId, "a" === r || "s" === r ? ("a" === r && (b.chatHandler.agentHasMessaged = !0, this.removeWaitTime()), c = m.escapeTemplateReplacement(n["chat-message-owner-agent"], [{
						placeholder: "__NAME__",
						textReplace: a.name
					}])) : c = m.isGeneratedName(A.name()) && n["chat-message-owner-visitor"] ? m.escapeTemplateReplacement(n["chat-message-owner-visitor"], [{
						placeholder: "__NAME__",
						textReplace: a.name
					}]) : "", c = m.escapeTemplateReplacement(n["chat-message-container"], [{
						placeholder: "__OWNER_TPL__",
						textReplace: c
					}, {
						placeholder: "__CONTENT__",
						textReplace: d
					}]), "s" === r && (c = c.replace("ownerNameContainer", "ownerNameContainer trigger"), c = c.replace("messageBody", "messageBody trigger"))) : "n" === a.type && (b.chatHandler.lastMessageOwner =
						"notif", c = n["chat-notification-container"], c = m.escapeTemplateReplacement(n["chat-notification-container"], [{
						placeholder: "__MESSAGE_ID__",
						textReplace: u
					}, {placeholder: "__MESSAGE__", textReplace: h}, {placeholder: "__TIME__", textReplace: l}]));
					g.template = c;
					g.buildView();
					try {
						x.insertBefore(g.elementReferrer, s.getElementById("agentTypingContainer")), b.eventHandler.listen(g.elementReferrer, "mouseover", function () {
							g.elementReferrer.className = w + " show-time"
						}, u + "mouseover"), b.eventHandler.listen(g.elementReferrer,
							"mouseout", function () {
								g.elementReferrer.className = w
							}, u + "mouseout")
					} catch (z) {
						p.handleError("Chat wrapper is null to append message : " + $_TAWK_JSON.stringify(a), z.fileName, z.lineNumber, z.stack)
					}
					a.dontPlaySound || ("v" === r || a.isPending) || this.popoutWin && !this.popoutWin.closed || b.audioPlayer.play("chat_sound");
					v && this.scrollToBottom();
					!e && ("v" !== r && !v) && (this.setDivider(u, n["chat-divider"], g), this.unseenMessageNumber && (d = this.chatContainer.documentRef.getElementById("newMessagesBar"))) && (this.chatContainer.getElementById("notificationMessageText").innerHTML =
						b.languageParser.translate("chat", "newMessage", {num: this.unseenMessageNumber}));
					v && this.scrollToBottom();
					f && this.addSurveyHandlers(u);
					return u
				}, parseSurvey: function (a, b) {
					var f, c, d, e, g, k, h = a.match(m.regSurvey), l = "";
					if (!h) return {message: a, isSurvey: !1};
					e = a.match(m.regSurveyQuestion);
					g = "survey-" + (new Date).getTime();
					f = 0;
					for (c = h.length; f < c; f++) d = h[f].replace(m.regOption, ""), d = d.replace(m.regBr, ""), d = m.trim(d), k = g + f, l += m.escapeTemplateReplacement(s["survey-option"], [{
						placeholder: /__RADIO_ID__/gm,
						textReplace: k
					},
						{placeholder: "__RADIO_NAME__", textReplace: b}, {
							placeholder: /__RADIO_VALUE__/gm,
							textReplace: d
						}]);
					return {
						message: m.escapeTemplateReplacement(s["tawk-survey-wrapper"], [{
							placeholder: "__QUESTION__",
							textReplace: e[0].replace(m.regOption, "")
						}, {placeholder: "__OPTIONS__", textReplace: l}]), isSurvey: !0
					}
				}, updateViewByStatus: function (a) {
					b.formHandler.closeForm();
					if (k.isPopup) {
						var n = e.getShortMessage(a);
						document.title = n ? c.profileName + " - " + m.rawDecode(n) : c.profileName
					}
					"online" === a || "away" === a ? (k.showPreChatForm &&
					!t.prechatFormSubmitted && b.formHandler.openForm("preChatForm"), this.showWidget(), l && l.toggleBubble()) : "offline" === a && (k.hideWidgetOnOffline ? this.hideWidget() : (b.formHandler.openForm("offlineForm"), this.showWidget()), l && l.toggleBubble())
				}
			});
			C.prototype.resetView = function () {
			};
			C.prototype.styleAgentBar = function () {
			};
			C.prototype.expandAgentList = function () {
			};
			C.prototype.hideWidget = function () {
			};
			C.prototype.showWidget = function () {
			};
			C.prototype.toggleWidget = function () {
				x && b.viewHandler.maximize()
			};
			C.prototype.popoutWidget =
				function () {
					x && b.viewHandler.popup()
				};
			C.prototype.handleIndicatorToggle = function () {
			};
			C.prototype.begin = function () {
			};
			C.prototype.getViewportDimensions = function (a) {
				var b, f = {};
				a ? (a = h, b = document) : (a = g.container.elementReferrer, b = g.container.documentRef);
				if ("undefined" !== typeof a.innerWidth) return f.height = a.innerHeight, f.width = a.innerWidth, f;
				if ("undefined" !== typeof b.documentElement && "undefined" !== typeof b.documentElement.clientWidth && 0 !== b.documentElement.clientWidth) return f.height = b.documentElement.clientHeight,
					f.width = b.documentElement.clientWidth, f;
				f.height = b.getElementsByTagName("body")[0].clientHeight;
				f.width = b.getElementsByTagName("body")[0].clientWidth;
				return f
			};
			C.prototype.getActualViewportDimensions = function () {
				var a = this.getViewportDimensions(!0);
				return {
					width: this.isVerticalScrollbar() ? a.width - this.getScrollerWidth() : a.width,
					height: this.isHorizontalScrollbar() ? a.height - this.getScrollerWidth() : a.height
				}
			};
			C.prototype.isVerticalScrollbar = function () {
				return this.getViewportDimensions(!0).height < document.body.scrollHeight
			};
			C.prototype.isHorizontalScrollbar = function () {
				var a = this.getViewportDimensions(!0).width;
				return document.documentElement && a < document.documentElement.scrollWidth || a < document.body.scrollWidth
			};
			C.prototype.getScrollerWidth = function () {
				var a = null, b = null, f = 0, a = 0, a = document.createElement("div");
				a.style.cssText = "position: absolute; top: -10000px; left: -10000px; width: 100px; height: 50px; overflow: hidden";
				b = document.createElement("div");
				b.style.cssText = "width: 100%; height: 200px";
				a.appendChild(b);
				document.body.appendChild(a);
				f = b.offsetWidth;
				a.style.overflow = "auto";
				a = b.offsetWidth;
				document.body.removeChild(document.body.lastChild);
				return f - a
			};
			C.prototype.addSurveyHandlers = function (a) {
				var c, f = this;
				this.chatContainer && (c = this.chatContainer.getElementById(a), c = m.getElementsByTagName(c, "input"), c.forEach(function (c, n) {
					c.id && f.chatContainer.attachUserEventListener("click", function (a) {
						f.lastRadioButton !== c.id && (f.lastRadioButton = c.id, b.chatHandler.sendMessage(c.value))
					}, c.id, "survey" + a + n + "click")
				}))
			};
			C.prototype.ifScrollbarDown =
				function () {
					var a, c, f;
					if (!this.chatContainer || !this.chatContainer.elementReferrer) return !1;
					a = this.chatContainer.getElementById("chatContainer");
					f = this.chatContainer.getElementById("chatPanel");
					if (a && f) {
						if (b.formHandler.currentForm) return f.style.display = "block", c = a.offsetHeight + 10, a = 30 > a.scrollHeight - (a.scrollTop + c), f.style.display = "none", a;
						c = a.offsetHeight + 10;
						return 30 > a.scrollHeight - (a.scrollTop + c)
					}
				};
			C.prototype.scrollToBottom = function () {
				if (this.chatContainer && this.chatContainer.elementReferrer) {
					var a =
							this.chatContainer.getElementById("chatContainer"),
						b = this.chatContainer.getElementById("chatPanel");
					if (a) {
						var f = a.style.display, c = b.style.display;
						"none" === f && (a.style.display = "block");
						"none" === c && (b.style.display = "block");
						this.chatContainer.getElementById("chatContainer").scrollTop = 1E8;
						"none" === f && (a.style.display = f);
						"none" === c && (b.style.display = c)
					}
				}
			};
			C.prototype.isChatScrollbar = function () {
				var a;
				if (this.chatContainer && this.chatContainer.elementReferrer && (a = this.chatContainer.getElementById("chatContainer"))) return a.scrollHeight >
					this.getViewportDimensions(k.isPopup).height - 139
			};
			C.prototype.addWaitTime = function () {
				var a, c, f, d;
				d = x ? s.estimatedWaitTime : s["wait-time-container"];
				var e = this.chatContainer;
				b.chatHandler.agentHasMessaged || (!k.showWaitTime || e.getElementById("waitTimeContainer")) || (a = e.getElementById("chatWrapper"), c = Math.ceil(t.waitTime / 6E4), c = b.languageParser.translate("chat", "messageQueuedText", {
					t: c,
					strongStart: "<b>",
					strongEnd: "</b>"
				}), f = L ? "<center><span>" + b.languageParser.translate("chat", "messageQueuedTitile") + "</span></center>" :
					"<span>" + b.languageParser.translate("chat", "messageQueuedTitile") + "</span>", d = m.escapeTemplateReplacement(d, [{
					placeholder: "__TITLE__",
					textReplace: f
				}, {
					placeholder: "__MESSAGE__",
					textReplace: c
				}]), c = new B("waitTimeContainer", null, null, null, e.documentRef), c.template = d, c.buildView(), (d = e.getElementById("departmentOfflineNotification")) ? a.insertBefore(c.elementReferrer, d.nextSibling) : a.insertBefore(c.elementReferrer, a.firstChild), this.waitTimeUpdater(!0), "explorer" === E && 9 > F && (e.documentRef.body.className =
					e.documentRef.body.className))
			};
			C.prototype.removeWaitTime = function () {
				var a;
				this.chatContainer && this.chatContainer.elementReferrer && (a = this.chatContainer.getElementById("waitTimeContainer")) && (a.parentNode.removeChild(a), "explorer" === E && 9 > F && (g.container.documentRef.body.className = g.container.documentRef.body.className))
			};
			C.prototype.waitTimeUpdater = function (a) {
				var b, f, c = this;
				if (this.chatContainer && this.chatContainer.elementReferrer && (f = this.chatContainer.getElementById("waitTime")) && !(6E4 >= t.waitTime)) {
					b =
						t.waitTime % 6E4 || 6E4;
					if (a) return setTimeout(function () {
						c.waitTimeUpdater()
					}, b);
					t.waitTime -= b;
					f.innerHTML = Math.ceil(t.waitTime / 6E4);
					setTimeout(function () {
						c.waitTimeUpdater()
					}, 6E4)
				}
			};
			C.prototype.appendAgentIsTypingElement = function (a) {
				var c, f, d, e, g = this.ifScrollbarDown(), k = y.agentProfiles[a];
				this.chatContainer && (d = (c = k && k.pi ? t.agentImgUrl + "/" + k.pi : "default") ? "url('" + c + "')" : "transparent", e = "explorer" === E && 9 > F ? "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + c + "',sizingMethod='scale');" :
					"", "transparent" !== d && (e += "background-position:0 0;background-size:28px 28px"), x ? (f = b.languageParser.translate("chat", "mobileAgentIsTyping", k), c = s["mobile-agent-typing"]) : (k.strongStart = "<b>", k.strongEnd = "</b>", f = b.languageParser.translate("chat", "agentIsTyping", k), c = s["agent-typing"]), c = m.escapeTemplateReplacement(c, [{
					placeholder: "__MESSAGE_ID__",
					textReplace: a
				}, {placeholder: "__MESSAGE__", textReplace: f}, {
					placeholder: /__NAME__/gm,
					textReplace: k.n
				}, {placeholder: "__IMAGE_URL__", textReplace: d}, {
					placeholder: "__IE_IMAGE_SCALE__",
					textReplace: e
				}]), this.chatContainer.getElementById("agentTypingContainer").innerHTML += c, g && this.scrollToBottom())
			};
			C.prototype.removeAgentTypingElement = function (a) {
				this.chatContainer && (a = this.chatContainer.getElementById("agentTyping-" + a)) && a.parentNode.removeChild(a)
			};
			C.prototype.changeRating = function (a) {
				var c, f;
				this.chatContainer && (c = this.chatContainer.getElementById("ratePositive"), f = this.chatContainer.getElementById("rateNegative"), c.className = "", f.className = "", 0 > a ? (f.className = "selected", a = b.languageParser.translate("chat",
					"dislike")) : 0 < a ? (c.className = "selected", a = b.languageParser.translate("chat", "like")) : a = b.languageParser.translate("chat", "remove_rate"), b.viewHandler.appendMessage({
					message: a,
					type: "n",
					time: new Date,
					senderType: "v",
					ownerId: A.visitorId
				}))
			};
			C.prototype.notifiyDepartmentIsNotOnline = function (a, c) {
				var f, d, e = this.chatContainer;
				e && (f = e.getElementById("chatWrapper")) && (d = m.escapeTemplateReplacement(s.departmentOfflineNotification, [{
					placeholder: "__TITLE__", textReplace: L ? "<span>" + b.languageParser.translate("chat",
						"notificationTitle") + "</span>" : "<center><span>" + b.languageParser.translate("chat", "notificationTitle") + "</span></center>"
				}, {
					placeholder: "__MESSAGE__",
					textReplace: b.languageParser.translate("chat", "offline" === c ? "departmentIsOffline" : "departmentIsAway", {
						departmentName: a,
						strongStart: "<b>",
						strongEnd: "</b>"
					})
				}]), elem = m.createElement(e.documentRef, "div", {
					id: "departmentOfflineNotification",
					className: "messageContainer"
				}, null, d), f.insertBefore(elem, f.firstChild))
			};
			C.prototype.setDivider = function (a, c, f) {
				var d,
					e, g, h, l = this;
				this.chatContainer.documentRef.getElementById("newMessageDivider") ? 0 < this.unseenMessageNumber && this.unseenMessageNumber++ : (e = this.chatContainer.documentRef.getElementById(a), h = this.chatContainer.documentRef.getElementById("chatWrapper"), g = new B("newMessageDivider"), this.newMessageNotSeen || !b.formHandler.currentForm && (k.isEmbedded || k.isPopup || "min" !== t.chatWindowState()) && m.chatElementInView(e) || (this.newMessageNotSeen = !0, d = this.chatContainer.documentRef.getElementById("newMessagesBar"),
					this.unseenMessageNumber = 1, d && (d.className = "visible", this.chatContainer.getElementById("newMessagesNotificationLink").title = b.languageParser.translate("chat", "newMessages"), b.eventHandler.listen(d, this.clickEvent, function () {
					l.unseenMessageNumber = 0;
					l.scrollToSeeMessage(a)
				}, "newmessagedivider"))), !b.formHandler.currentForm && (k.isEmbedded || k.isPopup || "min" !== t.chatWindowState()) && m.chatElementInView(e) || this.notSeenMessages.push(e), g.template = m.escapeTemplateReplacement(c, [{
					placeholder: /__NEW_MESSAGES__/gm,
					textReplace: b.languageParser.translate("chat", "newMessages").toUpperCase()
				}]), g.buildView(), h.insertBefore(g.elementReferrer, f.elementReferrer))
			};
			C.prototype.removeDivider = function () {
				var a, b = this;
				clearTimeout(this.removeDividerTimeout);
				this.removeDividerTimeout = setTimeout(function () {
					(a = b.chatContainer.documentRef.getElementById("newMessageDivider")) && a.parentNode.removeChild(a)
				}, 2E3)
			};
			C.prototype.scrollToSeeMessage = function (a) {
				var b = this.chatContainer.documentRef.getElementById("chatContainer");
				(a =
					this.chatContainer.documentRef.getElementById(a)) && b && (b.scrollTop = a.offsetTop - b.offsetHeight + 40)
			};
			C.prototype.checkUnseenMessages = function () {
				var a;
				if (!this.newMessageNotSeen || !this.notSeenMessages.length) return !1;
				for (var b = 0; b < this.notSeenMessages.length; b++) m.chatElementInView(this.notSeenMessages[b]) && (this.notSeenMessages.splice(b, 1), b--);
				if (!this.notSeenMessages.length || x && this.ifScrollbarDown()) this.newMessageNotSeen = !1, (a = this.chatContainer.documentRef.getElementById("newMessagesBar")) && setTimeout(function () {
					a.className =
						""
				}, 250), this.removeDivider()
			};
			C.prototype.parseUploadedFile = function (a) {
				var c = "https://tawk.link/" + a.name, f = this, d = s["file-upload"];
				if (-1 !== ["jpeg", "png", "gif"].indexOf(a.type) && 2E6 >= a.size) {
					var e = new Image;
					e.onload = function () {
						var b = m.createElement(f.chatContainer.documentRef, "a", {href: c, target: "_blank"}),
							d = f.chatContainer.getElementById("placeholder-" + a.name), q = f.ifScrollbarDown();
						d && (b.appendChild(e), b.className = "clearfix", d.parentNode.insertBefore(b, d), d.parentNode.removeChild(d), q && f.scrollToBottom())
					};
					e.setAttribute("src", c);
					e.setAttribute("class", "uploaded-image");
					d = m.escapeTemplateReplacement(d, [{
						placeholder: "__FILE_DISPLAY__",
						textReplace: '<div class="image-loader" id="placeholder-' + a.name + '"></div>'
					}]);
					showDetails = !1
				} else d = -1 !== ["video/mp4", "video/ogg", "video/webm"].indexOf(a.mimeType) ? m.escapeTemplateReplacement(d, [{
					placeholder: "__FILE_DISPLAY__",
					textReplace: '<video width="auto" height="auto" controls style="display: block; max-width: 420px; width: 100%;"><source src="' + c + '" type="' + a.mimeType +
					'"></source></video>'
				}]) : -1 !== ["audio/mp3", "audio/ogg"].indexOf(a.mimeType) ? m.escapeTemplateReplacement(d, [{
					placeholder: "__FILE_DISPLAY__",
					textReplace: '<audio controls style="display: block; max-width : 220px;"><source src="' + c + '" type="' + a.mimeType + '"></source></audio>'
				}]) : d.replace("__FILE_DISPLAY__", "");
				return d = m.escapeTemplateReplacement(d, [{
					placeholder: "__FILE_NAME__",
					textReplace: a.fileName
				}, {placeholder: "__DOWNLOAD_URL__", textReplace: c}, {
					placeholder: "__DOWNLOAD_TEXT__", textReplace: b.languageParser.translate("chat",
						"downloadFile")
				}, {placeholder: "__FILE_SIZE__", textReplace: m.formatFileSize(a.size)}, {
					placeholder: "__FILE_TYPE__",
					textReplace: a.type
				}])
			};
			C.prototype.startUpload = function (a, c, f) {
				var d, e, g, k = this, h = s.fileUploadProgress, l = this.ifScrollbarDown();
				f = f || function () {
				};
				g = this.chatContainer.getElementById("fileInput");
				d = c ? g.value.replace(/^.*\\/, "") : a.name || a.fileName;
				e = m.getElementsByClassName(k.chatContainer.elementReferrer, "upload-error");
				if (e.length) for (var p = 0; p < e.length; p++) e[p].parentNode.removeChild(e[p]);
				b.fileUploadHandler.getUploadHandler(function (e) {
					var ia;
					e.handle ? (ia = e.handle, h = m.escapeTemplateReplacement(h, [{
						placeholder: "__HANDLE__",
						textReplace: ia
					}, {
						placeholder: "__FILE_NAME__",
						textReplace: m.rawEncode(d)
					}]), k.chatContainer.getElementById("chatWrapper").innerHTML += h, 1 >= y.chatOrder && (x ? b.viewHandler.hideEmbeddedGreetings() : k.hideEmbeddedGreetings()), l && k.scrollToBottom(), b.fileUploadHandler.uploadFile(ia, a, d, c, function (b, e) {
						b.success ? f() : (k.handleUploadError(a, d, ia, c, e), g.value = "")
					})) : (k.handleUploadError(a,
						d, ia, c), g.value = "")
				})
			};
			C.prototype.handleUploadError = function (a, c, f, d, e) {
				var g = this.ifScrollbarDown(), k = this, h = document.createElement("a"),
					l = document.createElement("div");
				e = e || "generalUploadError";
				c = "<span>!</span> " + b.languageParser.translate("chat", e, {fileName: m.rawEncode(c)});
				l.setAttribute("class", "upload-error");
				l.innerHTML = c;
				if (a || d) {
					if (f) {
						c = this.chatContainer.getElementById("upload-" + f);
						if (!c) return;
						c.parentNode.removeChild(c);
						if (a && !(d || e && "generalUploadError" !== e)) {
							h.innerHTML = b.languageParser.translate("chat",
								"retry");
							h.setAttribute("href", "javascript:void(0);");
							h.setAttribute("id", "retry-" + f);
							l.appendChild(h);
							var p;
							p = b.eventHandler.listen(h, this.clickEvent, function () {
								b.eventHandler.removeEventHandler(h, this.clickEvent, p);
								l.parentNode.removeChild(l);
								k.startUpload(a)
							}, "retry-" + f)
						}
					}
					this.chatContainer.getElementById("chatContainer").appendChild(l);
					g && this.scrollToBottom()
				}
			};
			C.prototype.updateFileProgress = function (a) {
				var b = this.chatContainer.getElementById("upload-" + a.handle);
				b && (b.getElementsByClassName("progress-bar")[0].style.width =
					a.progress + "%")
			};
			C.prototype.fileUploaded = function (a) {
				(a = this.chatContainer.getElementById("upload-" + a)) && a.parentNode.removeChild(a)
			};
			C.prototype.retryUploadFile = function (a) {
				var b = this, f, c;
				this.retryUploadList[a] && this.startUpload(this.retryUploadList[a], null, function () {
					f = b.chatContainer.getElementById(a);
					c = f.parentNode;
					c.removeChild(f);
					c.parentNode.removeChild(c);
					delete b.retryUploadList[a];
					Object.keys(b.retryUploadList).length || b.chatContainer.getElementById("maxFileNotificationContainer").classList.add("hidden");
					f = null
				})
			};
			C.prototype.checkUploadFileWarning = function (a, c) {
				var f = this.chatContainer.getElementById("maxFileNotificationContainer"),
					d = this.chatContainer.getElementById("maxSizeNotificationContainer"),
					e = this.chatContainer.getElementById("maxFileSizeList"),
					g = this.chatContainer.getElementById("maxFileNumberList"), k = this, h;
				if (c.length) {
					h = "<ul>";
					this.retryUploadList = {};
					for (var l = 0; l < c.length; l++) this.retryUploadList["retry_upload_" + l] = c[l], h += "<li>" + c[l].name + ' <a id="retry_upload_' + l + '" class="actionRetry">' +
						b.languageParser.translate("notifications", "retry") + "</a></li>";
					g.innerHTML = h + "</ul>";
					h = m.getElementsByClassName(g, "actionRetry");
					for (g = 0; g < h.length; g++) h[g].addEventListener(k.clickEvent, function () {
						this.classList.add("hidden");
						k.retryUploadFile(this.id)
					});
					f.classList.remove("hidden")
				}
				if (a.length) {
					h = "<ul>";
					for (f = 0; f < a.length; f++) h += "<li>" + a[f].name + "</li>";
					e.innerHTML = h + "</ul>";
					d.classList.remove("hidden")
				}
				h && this.scrollToBottom()
			};
			C.prototype.applyWhiteLabelSettings = function () {
				var a, b, f;
				this.chatContainer &&
				(a = this.chatContainer.documentRef.getElementById(this.tawktoLinkName), b = this.chatContainer.documentRef.getElementById(this.bottomContainerName), f = {
					id: this.tawktoLinkName,
					parentElem: b,
					siblingName: b.nextSibling ? b.nextSibling.id : null,
					grandParentName: b.parentNode.id
				}, k.whiteLabel() ? (f.url = k.whiteLabel().url || null, f.label = m.transformLabel(m.rawEncode(k.whiteLabel().label)), f.textColor = k.whiteLabel().textColor || "#000000") : (f.url = "javascript:void(0);", f.label = s["default-branding"]), m.insertRandomTagsBeforeAndAfter(b,
					b.parentNode, "div"), m.insertRandomTagsBeforeAndAfter(a, a.parentNode, "a"), m.applyWhiteLabelSettings(a, f))
			};
			C.prototype.showCallRequest = function (a, c, f) {
				var d, e, g = this;
				d = s.incomingCallRequest;
				var h = (new Date).getTime();
				f = (new Date(f)).getTime();
				h = c - (h - f);
				f = this.chatContainer.getElementById("incoming-call");
				f || (c = this.ifScrollbarDown(), b.chatHandler.webrtcWin && !b.chatHandler.webrtcWin.closed ? b.chatHandler.webrtcWin.focus() : (d = d.replace(/__INCOMING_CALL__/, b.languageParser.translate("chat", "incoming_call_message")),
					d = d.replace(/__ACCEPT_CALL__/, b.languageParser.translate("chat", "accept_call")).replace(/__DECLINE_CALL__/, b.languageParser.translate("chat", "decline_call")), clearTimeout(this.incomingCallTimeout), f = new B("incoming-call"), f.template = d, f.buildView(), d = this.chatContainer.getElementById("chatContainer"), e = d.parentNode, d && e && (e.insertBefore(f.elementReferrer, d), d.style.top = f.elementReferrer.offsetHeight + "px", d = this.chatContainer.getElementById("accept-call"), f = this.chatContainer.getElementById("decline-call"),
				c && this.scrollToBottom(), b.eventHandler.listen(d, this.clickEvent, function () {
					clearTimeout(g.incomingCallTimeout);
					m.getWebRTCToken(!1, !1, function () {
						g.removeCallRequest()
					})
				}, "acceptVideoCall"), b.eventHandler.listen(f, this.clickEvent, function () {
					clearTimeout(g.incomingCallTimeout);
					m.rejectCall(a, function () {
						g.removeCallRequest()
					})
				}, "declineVideoCall"), this.incomingCallTimeout = setTimeout(function () {
					g.removeCallRequest()
				}, h), k.isPopup || (b.viewHandler.isMaximized || k.isEmbedded) || ("max" !== k.onClickAction ||
				this.agentHasMessaged || x || this.hasBeenMaximizedOnce ? k.hideWidgetOnLoad || b.viewHandler.indicator.show() : (b.viewHandler.userAction = !1, b.sessionHandler.notifyWindowState("max"), this.hasBeenMaximizedOnce = !0)), b.audioPlayer.play("chat_sound"))))
			};
			C.prototype.removeCallRequest = function () {
				var a = this.chatContainer.getElementById("incoming-call"),
					b = this.chatContainer.getElementById("chatContainer");
				a && (a.parentNode.removeChild(a), b.style.top = "0px")
			};
			C.prototype.subscribeCallUpdate = function (a) {
				var c, f, d, e,
					g, h, k, l = this, p = this.chatContainer.documentRef, r = this.callData[a],
					t = this.ifScrollbarDown();
				r ? c = r.callView : (c = new B(a, null, {className: "webrtcCallContainer messageContainer clearfix"}, null, p), c.template = s.callInfo, c.buildView(), p.getElementById("chatWrapper").insertBefore(c.elementReferrer, p.getElementById("agentTypingContainer")), 1 >= y.chatOrder && this.hideEmbeddedGreetings(), this.callData[a] = {callView: c});
				f = m.getElementsByClassName(c.elementReferrer, "loader");
				d = m.getElementsByClassName(c.elementReferrer,
					"callInfoContainer");
				e = m.getElementsByClassName(c.elementReferrer, "callIconWrapper");
				g = m.getElementsByClassName(c.elementReferrer, "callErrorContainer");
				f && f.length && (f[0].style.display = "block");
				g && g.length && (g[0].style.display = "none");
				b.socketManager.sendToConnector("getCallStatus", {callId: a}, function (p, r) {
					f && f.length && (f[0].style.display = "none");
					p ? (d && d.length && (d[0].style.display = "none"), g && g.length ? g[0].style.display = "block" : (k = s.callError.replace("__HEADER__", b.languageParser.translate("chat",
						"error_title")).replace("__MESSAGE__", b.languageParser.translate("chat", "call_error_load")).replace("__ACTION__", b.languageParser.translate("notifications", "retry")), g = m.createElement(l.chatContainer.documentRef, "div", null, null, k), g.className = "callErrorContainer", g.style.display = "block", c.elementReferrer.appendChild(g)), (h = m.getElementsByClassName(c.elementReferrer, "retry-load")) && h.length && b.eventHandler.listen(h[0], l.clickEvent, function () {
						l.subscribeCallUpdate(a)
					}, "retryCallLoad" + a)) : (d && d.length &&
					(d[0].style.display = "block"), callIcon = r.data.call.f.vid ? '<div class="videoCallIcon icon"></div>' : r.data.call.f.scrn ? '<div class="screenShareIcon icon"></div>' : '<div class="voiceCallIcon icon"></div>', e && e.length && (e[0].innerHTML = callIcon), l.callData[a].ver = r.data.call.ver, t && l.scrollToBottom(), l.updateCallView(r.data.call))
				})
			};
			C.prototype.updateCallView = function (a) {
				var c, f, d, e, g, h = !!a.mssd;
				d = !!a.rjctd;
				f = this.callData[a.clid];
				if (!f) return this.subscribeCallUpdate(a.clid);
				f.ver > a.ver || (g = this.ifScrollbarDown(),
					f = f.callView, "ringing" === a.stts ? ("v" !== a.cllr.t && this.showCallRequest(a.clid, a.rt, a.so), c = b.languageParser.translate("chat", ("v" === a.cllr.t ? "visitor_" : "agent_") + "ringing")) : "in-progress" === a.stts ? (this.removeCallRequest(), c = b.languageParser.translate("chat", "ongoing_call")) : "completed" === a.stts && (e = m.parseChatTime(a.so), this.removeCallRequest(), h || d ? (c = d ? b.languageParser.translate("chat", "rejected_call") : b.languageParser.translate("chat", "missed_" + ("v" === a.cllr.t ? "agent" : "visitor")), d = b.languageParser.translate("chat",
					"call_started_on", {startedOn: e})) : (d = "<b> " + m.getTimeDifference(a.so, a.eo) + "</b>", c = b.languageParser.translate("chat", "completed_call"), d = b.languageParser.translate("chat", "call_end_details", {
					startedOn: e,
					duration: d
				})), (e = m.getElementsByClassName(f.elementReferrer, "callEndDetails")) && e.length && (e[0].innerHTML = d, e[0].style.display = "block")), (f = m.getElementsByClassName(f.elementReferrer, "callTitle")) && f.length && (f[0].innerHTML = c, h && (f[0].className += " missed")), this.callData[a.clid].ver = a.ver, g && this.scrollToBottom())
			};
			var O = function () {
				var a = this;
				this.currentForm = "";
				this.formView = null;
				this.forms = {
					nameForm: {
						id: "changeNameForm",
						title: "NameFormMessage",
						fields: [{
							fieldName: "name",
							valueMaxLength: 40,
							languageKey: "Name",
							getValue: b.visitorHandler.getNameValue,
							validation: "isValidString",
							type: "input",
							isRequired: !0
						}],
						publish: "notifyNameChange",
						afterSave: b.visitorHandler.setNameFromForm,
						resize: "164px"
					},
					emailTranscriptForm: {
						id: "emailTranscriptForm",
						title: "EmailTranscriptFormMessage",
						fields: [{
							fieldName: "name",
							valueMaxLength: 40,
							languageKey: "Name",
							getValue: b.visitorHandler.getNameValue,
							validation: "isValidString",
							type: "input",
							hiddenIE8: !0,
							isRequired: !0
						}, {
							fieldName: "transcriptEmail",
							valueMaxLength: 150,
							languageKey: "Email",
							getValue: b.visitorHandler.getTranscriptEmailValue,
							validation: "isValidEmail",
							type: "input",
							instantValidation: !1,
							isRequired: !0
						}],
						saveFunc: "requestEmailTranscript",
						afterSave: b.visitorHandler.setTranscriptValue,
						resize: "164px"
					},
					offlineForm: {
						id: "offlineForm",
						getTitle: function () {
							return m.transformGreetings(k.offlineOptions.text)
						},
						dynamicFields: null,
						saveFunc: "submitOfflineForm",
						dontCloseForm: !0,
						afterSave: a.showOfflineOverlay
					},
					preChatForm: {
						id: "preChatForm",
						getTitle: function () {
							return k.prechatOptions.text ? m.transformGreetings(k.prechatOptions.text) : k.isEmbedded && "page" === $_Tawk_WidgetId && pageType && "profile" === pageType ? b.languageParser.translate("form", "PreChatFormMessageProfile") : b.languageParser.translate("form", "PreChatFormMessage")
						},
						dynamicFields: null,
						saveFunc: "submitPrechatForm",
						afterSave: a.handlePrechatForm,
						dontCloseForm: !1
					},
					inactivityOverlay: {
						id: "inactivityOverlay",
						overlayMessage: "inactive",
						otherEvent: {
							eventName: "click",
							elementName: "inactivityOverlay",
							executedFunc: b.main.criticalRefresh
						}
					},
					maintenanceOverlay: {id: "maintenanceOverlay", overlayMessage: "maintenance"},
					endChatForm: {
						id: "endChatForm",
						publish: "endVisitorChat",
						afterSave: a.handleChatEnded,
						dontCloseForm: !1,
						resize: "109px",
						getTitle: function () {
							return b.languageParser.translate("form", "EndChatTitle")
						}
					}
				};
				b.eventEmitter.on("localeChanged", function () {
					var b = a.currentForm;
					b && (a.closeForm(), a.openForm(b))
				});
				A.displayName.subscribe(function (b) {
					!a.currentForm || "preChatForm" !== a.currentForm && "offlineForm" !== a.currentForm || a.formView.updateName(b)
				});
				A.email.subscribe(function (b) {
					!a.currentForm || "preChatForm" !== a.currentForm && "offlineForm" !== a.currentForm || a.formView.updateEmail(b)
				})
			};
			O.prototype.openForm = function (a) {
				var c = this, f = b.viewHandler.chatContainer.getElementById("formContainer"), d = this.forms[a];
				d && (this.currentForm !== a && f) && (this.formView = null, this.formView = "preChatForm" ===
				a || "offlineForm" === a ? new aa(d, a) : new ga(d), this.formView.buildForm(), this.currentForm = a, this.formView.buildView(b.viewHandler.chatContainer.documentRef), f.innerHTML = "", f.appendChild(this.formView.elementReferrer), f.style.display = "block", this.attachEventListeners(), this.formView.addPlaceholderHandler(), x || (d.resize ? (f.style.height = d.resize, f.style.top = "auto") : (f.style.height = "auto", f.style.top = "45px")), b.eventHandler.listen(h, "resize", function () {
					c.resize()
				}, "windowresizeform"), this.resize(), m.redraw(f),
					b.eventEmitter.emit("formOpened"))
			};
			O.prototype.showOfflineOverlay = function (a) {
				b.viewHandler.chatContainer.getElementById("formContainer").className += " success"
			};
			O.prototype.resize = function () {
				var a, c, f, d, e;
				null !== this.formView && x && (d = b.viewHandler.chatContainer.getElementById("formContainer"), f = b.viewHandler.chatContainer.getElementById("formInnerHeight"), e = b.viewHandler.chatContainer.getElementById("topBarContainer"), d && (a = m.getElementsByClassName(d, "formMessageField"), c = m.getElementsByClassName(d,
					"longFormContainer"), a && (a.length && c && c.length) && (longFormBottomContainerHeight = m.getElementsByClassName(d, "longFormBottomContainer")[0].clientHeight, c[0].style.height = b.viewHandler.iframeContainer.clientHeight - e.clientHeight - longFormBottomContainerHeight + "px"), !f || "android" !== x && "android2" !== x && "android2.3" !== x || (f.style.overflow = "hidden", b.viewHandler.addOverflowScroll(f))))
			};
			O.prototype.closeForm = function () {
				var a = b.viewHandler.chatContainer.getElementById("formContainer"),
					c = b.viewHandler.chatContainer.getElementById("submitWrapper");
				a && (this.formView && this.currentForm) && (this.formView = null, this.currentForm = "", a.innerHTML = "", a.style.display = "none", a.className.substring("success", ""), c && (c.className = ""), b.eventEmitter.emit("formClosed"))
			};
			O.prototype.attachEventListeners = function () {
				var a = this, c = this.formView.formData, f = b.viewHandler.chatContainer.getElementById("formCancel"),
					d = b.viewHandler.chatContainer.getElementById("formSubmit"),
					e = b.viewHandler.chatContainer.getElementById("formCloseChat"),
					g = b.viewHandler.chatContainer.getElementById("resendButton"),
					h = this.formView.formData.fields || [];
				this.formView.formData.dynamicFields && (h = this.formView.formData.dynamicFields);
				f && b.eventHandler.listen(f, b.viewHandler.clickEvent, function () {
					a.closeForm()
				}, "formcancelclick");
				d && b.eventHandler.listen(d, b.viewHandler.clickEvent, function () {
					a.submitForm()
				}, "formsubmitclick");
				e && b.eventHandler.listen(e, b.viewHandler.clickEvent, function () {
					b.viewHandler.maximizedWidget ? (b.viewHandler.maximizedWidget.container.hide(), b.viewHandler.isMaximized = !1, b.viewHandler.show()) :
						b.main.hideWidget()
				}, "formcloseclick");
				g && b.eventHandler.listen(g, b.viewHandler.clickEvent, function () {
					b.viewHandler.chatContainer.getElementById("submitWrapper").className = b.viewHandler.chatContainer.getElementById("submitWrapper").className.substring("visible", "");
					b.viewHandler.chatContainer.getElementById("formContainer").className = b.viewHandler.chatContainer.getElementById("formContainer").className.substring("success", "")
				}, "resendButtonClick");
				x && b.eventHandler.listen(b.viewHandler.chatContainer.getElementById("formContainer"),
					b.viewHandler.clickEvent, function (a) {
						var c = a.target, c = c && c.tagName ? c.tagName.toLowerCase() : null;
						(!c || "input" !== c && "select" !== c && "textarea" !== c) && b.eventHandler.cancelEvent(a)
					}, "formclick");
				h.forEach(function (c) {
					if (!c.disabled) {
						var f = b.viewHandler.chatContainer.getElementById(c.fieldName + "Field"),
							d = b.viewHandler.chatContainer.getElementById(c.fieldName + "FieldError"),
							n = b.languageParser.translate("form", c.languageKey + "Placeholder"),
							e = b.viewHandler.chatContainer.getElementById(c.fieldName + "FieldValid");
						if (f) {
							if (c.instantValidation) if (-1 === (" " + f.parentNode.className + " ").indexOf("valid") && -1 === (" " + f.parentNode.className + " ").indexOf("error")) {
								var q = f.value;
								if (q = n === q ? null : m.trim(q)) a[c.validation](q, c.valueMaxLength, c.isRequired) ? (d.innerHTML = "", d.style.display = "none", f.parentNode.className += " valid", e && (e.style.display = "block")) : (d.innerHTML = b.languageParser.translate("form", c.languageKey + "ErrorMessage"), d.style.display = "block", f.parentNode.className += " error")
							} else f.parentNode.className = f.parentNode.className.replace(" valid",
								""), f.parentNode.className = f.parentNode.className.replace(" error", "");
							"textarea" !== f.nodeName.toLowerCase() && b.eventHandler.listen(f, "keypress", function (b) {
								13 === b.keyCode && a.submitForm()
							}, "formkeypress" + c.fieldName);
							"options" === c.type && c.instantValidation && (f.parentNode.style.paddingRight = "15px", b.eventHandler.listen(f, "change", function (q) {
								q = n === f.value ? null : m.trim(f.value);
								q = a[c.validation](q, c.valueMaxLength, c.isRequired);
								f.parentNode.className = f.parentNode.className.replace(" error", "");
								q ? (d.innerHTML =
									"", d.style.display = "none", -1 === (" " + f.parentNode.className + " ").indexOf("valid") && (f.parentNode.className += " valid", -1 < (" " + f.parentNode.className + " ").indexOf("other-fix") && (f.parentNode.style.paddingRight = "0px")), e && (e.style.display = "block")) : (d.innerHTML = b.languageParser.translate("form", c.languageKey + "ErrorMessage"), d.style.display = "block", f.parentNode.className += " error", f.parentNode.className = f.parentNode.className.replace(" valid", ""), e && (e.style.display = "none"))
							}, "formselectchange" + c.fieldName));
							b.eventHandler.listen(f, "keydown", function (q) {
								setTimeout(function () {
									var q;
									c.instantValidation ? (q = n === f.value ? null : m.trim(f.value), q = a[c.validation](q, c.valueMaxLength, c.isRequired), f.parentNode.className = f.parentNode.className.replace(" error", ""), q ? (d.innerHTML = "", d.style.display = "none", -1 === (" " + f.parentNode.className + " ").indexOf("valid") && (f.parentNode.className += " valid"), e && (e.style.display = "block")) : (d.innerHTML = b.languageParser.translate("form", c.languageKey + "ErrorMessage"), d.style.display =
										"block", f.parentNode.className += " error", f.parentNode.className = f.parentNode.className.replace(" valid", ""), e && (e.style.display = "none"))) : "" !== d.innerHTML && (d.innerHTML = "", d.style.display = "none", f.parentNode.className = f.parentNode.className.replace(" error", ""))
								}, 1)
							}, "formkeydown" + c.fieldName)
						}
					}
				});
				if (c.otherEvent) {
					var k = c.otherEvent;
					(c = b.viewHandler.chatContainer.getElementById(k.elementName)) && b.eventHandler.listen(c, k.eventName, function (a) {
						k.executedFunc()
					}, "formother")
				}
			};
			O.prototype.submitForm =
				function () {
					var a, c = this, f = b.viewHandler.chatContainer.getElementById("formSubmit"),
						d = b.viewHandler.chatContainer.getElementById("formCancel"),
						e = b.viewHandler.chatContainer.getElementById("formCloseChat"),
						g = b.viewHandler.chatContainer.getElementById("submitWrapper");
					g.innerHTML = '<p id="submitWrapperMessage">' + b.languageParser.translate("form", "SubmittingProcess") + '</p><div id="submitWrapperIcon"></div>';
					g.className = "visible";
					a = this.validateForm();
					if (null === a) g.className = ""; else {
						f.setAttribute("disabled",
							"disabled");
						d && d.setAttribute("disabled", "disabled");
						e && e.setAttribute("disabled", "disabled");
						if (this.formView.formData.publish) return b.socketManager.sendToConnector(this.formView.formData.publish, a, function (b, f) {
							a.serverData = f;
							c.handleAfterSave(b, a)
						});
						if (this.formView.formData.saveFunc) try {
							b.eventEmitter.emit(this.formView.formData.saveFunc, a, function (b, f) {
								a.serverData = f;
								c.handleAfterSave(b, a)
							})
						} catch (h) {
							c.handleAfterSave(!0), p.handleError("Unable to emit form handler save func : " + this.formView.formData.saveFunc +
								" with data : " + $_TAWK_JSON.stringify(a), h.fileName, h.lineNumber, h.stack)
						}
					}
				};
			O.prototype.handleAfterSave = function (a, c) {
				var f, d, e, g;
				if (b && b.formHandler.formView && b.formHandler.formView.formData) {
					f = b.formHandler.formView.formData.afterSave;
					d = b.viewHandler.chatContainer.getElementById("formSubmit");
					e = b.viewHandler.chatContainer.getElementById("formCancel");
					g = b.viewHandler.chatContainer.getElementById("formCloseChat");
					b.viewHandler.chatContainer.getElementById("submitWrapper");
					d.removeAttribute("disabled");
					e && e.removeAttribute("disabled");
					g && g.removeAttribute("disabled");
					if (a) return this.updateFormStatus(a);
					f && f(c);
					this.formView.formData.dontCloseForm ? this.updateFormStatus() : this.closeForm()
				}
			};
			O.prototype.updateFormStatus = function (a) {
				var c, f, d;
				b.viewHandler.chatContainer && (c = b.viewHandler.chatContainer.getElementById("formSavingStatus"), f = b.viewHandler.chatContainer.getElementById("savingStatus"), d = b.viewHandler.chatContainer.getElementById("submitWrapper"), c && f ? a ? (c.className = "errorMessage", f.innerHTML =
					b.languageParser.translate("form", "errorSaving"), a = m.getElementsByClassName(b.viewHandler.chatContainer.documentRef, "longFormContainer"), a.length && (a[0].scrollTop = 999999999999)) : (c.className = "", f.innerHTML = b.languageParser.translate("form", "saved")) : this.currentForm && "offlineForm" === this.currentForm ? a ? (d.className = "visible", d.innerHTML = "<p>" + b.languageParser.translate("form", "OfflineMessageNotSent") + "</p>", setTimeout(function () {
					d.className = ""
				}, 3E3)) : (d.className = "", this.clearForm()) : d.className = "")
			};
			O.prototype.validateForm = function () {
				var a, c = {}, f = 0, d = this;
				if (this.formView) return a = this.formView.formData.fields || [], this.formView.formData.dynamicFields && (a = this.formView.formData.dynamicFields), a.forEach(function (a) {
					var e, g, h, k;
					"additionalQuestion" === a.fieldName && a.getValue && m.isArray(a.getValue()) ? (c.additionalQuestion = {}, a.getValue().forEach(function (f, d) {
						(g = b.viewHandler.chatContainer.getElementById(a.fieldName + d)) && (c.additionalQuestion[d] = f === g.value ? null : m.trim(g.value))
					})) : "choice" === a.fieldType ||
					"option" === a.fieldType ? (k = b.viewHandler.chatContainer.documentRef.getElementsByName(a.fieldName + "group"), h = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldError"), e = b.viewHandler.chatContainer.getElementById(a.fieldName + "Container"), k = "choice" === a.fieldType ? d.getSelectedCheckbox(k, a.isRequired) : d.getSelectedRadio(k, a.isRequired), h.innerHTML = "", h.style.display = "none", e.className = e.className.replace("error", ""), null === k ? (f++, k = !1, h.innerHTML = b.languageParser.translate("form", a.languageKey +
						"ErrorMessage"), h.style.display = "block", e.className += " error") : c[a.fieldName] = k) : (g = b.viewHandler.chatContainer.getElementById(a.fieldName + "Field"), h = b.viewHandler.chatContainer.getElementById(a.fieldName + "FieldError"), g && (e = a.placeholderText === g.value ? null : m.trim(g.value), k = d[a.validation](e, a.valueMaxLength, a.isRequired), h.innerHTML = "", h.style.display = "none", g.parentNode.className = g.parentNode.className.replace("error", ""), k ? c[a.fieldName] = e : (f++, h.innerHTML = b.languageParser.translate("form", a.languageKey +
						"ErrorMessage"), h.style.display = "block", g.parentNode.className += " error")))
				}), 0 < f ? null : c
			};
			O.prototype.isValidString = function (a, b, c) {
				return c || a ? !(!a || !m.isString(a) || b && !(b && a.length <= b)) : !0
			};
			O.prototype.isValidEmail = function (a, b, c) {
				return c || a ? !!(a && m.isEmail(a) && m.isString(a) && a.length <= b) : !0
			};
			O.prototype.isValidDepartment = function (a, b, c) {
				var d;
				b = t.departments;
				if (!(c || a && "0" !== a)) return !0;
				for (d in b) if (b[d].did === a) return !0;
				return !1
			};
			O.prototype.getSelectedCheckbox = function (a, b) {
				for (var c = [], d =
					0, e = a.length; d < e; d++) a[d].checked && c.push(a[d].value);
				return !c.length && b ? null : c
			};
			O.prototype.getSelectedRadio = function (a, b) {
				for (var c = "", d = 0, e = a.length; d < e; d++) if (a[d].checked) {
					c = a[d].value;
					break
				}
				return !c && b ? null : c
			};
			O.prototype.isValidPhone = function (a, b, c) {
				if (!c && !a) return !0;
				"+" === a.charAt(0) && (a = a.replace("+", ""));
				return !!(a.length && 7 <= a.length && a.match(/[0-9]/im))
			};
			O.prototype.handlePrechatForm = function (a) {
				a = m.getDepartmentStatus(a.department);
				a.isOnline || b.viewHandler.notifiyDepartmentIsNotOnline(a.name,
					a.status);
				b.formHandler.formView.formData.dontCloseForm = !1
			};
			O.prototype.handleChatEnded = function (a) {
				b.formHandler.formView.formData.dontCloseForm = !1;
				b.chatHandler.endChat(a.serverData.chatEndVersion)
			};
			O.prototype.clearForm = function () {
				var a = this.formView.formData.fields || [];
				this.formView.formData.dynamicFields && (a = this.formView.formData.dynamicFields);
				a.forEach(function (a, c) {
					var d;
					if ("name" !== a.fieldType && "email" !== a.fieldType && "department" !== a.fieldType) if ("choice" === a.fieldType || "option" === a.fieldType) {
						d =
							b.viewHandler.chatContainer.documentRef.getElementsByName(a.fieldName + "group");
						for (var e = 0, g = d.length; e < g; e++) d[e].checked = !1
					} else if (d = b.viewHandler.chatContainer.getElementById(a.fieldName + "Field")) d.value = "", "choice" === a.fieldType || "option" === a.fieldType || T || (d.value = a.placeholderText)
				})
			};
			var S = TawkClass.extend({
				init: function (a, c) {
					var f = this;
					this.inDocument = !1;
					this.maxNumberFileUpload = 5;
					f.maxSizeFileUpload = 52428800;
					this.frameWidth = k.maximizedDimensions().width + "px";
					this.frameHeight = k.maximizedDimensions().height +
						"px";
					this.container = k.isPopup ? new B(m.getRandomName(), "display: none;") : new ca(m.getRandomName(), m.getGenericStyle({
						zindex: "999999",
						position: "static",
						display: "none",
						height: this.frameHeight,
						width: this.frameWidth
					}), ja, "iframe");
					this.wrapper = new B("tawkchat-maximized-wrapper");
					this.wrapper.template = this.wrapper.template.replace(/__IE6__/gm, L ? "ie6" : "");
					b.MaximizedStyle = b.MaximizedStyle.replace(/#tawktoLink/g, "#" + a);
					b.MaximizedStyle = b.MaximizedStyle.replace(/#bottomContainer/g, "#" + c);
					this.wrapper.template =
						this.wrapper.template.replace(/__TAWK_TO_LINK__/gm, a);
					this.wrapper.template = this.wrapper.template.replace(/__BOTTOM_CONTAINER__/gm, c);
					this.wrapper.template = this.wrapper.template.replace("__TOO_LONG_MESSAGE__", b.languageParser.translate("chat", "message_too_long"));
					N && 10 > F && this.wrapper.addClass("ie9");
					this.chatTextarea = new B("chatTextarea", null, null, "textarea");
					this.container.addChildViews([this.wrapper]);
					k.maximizedDimensions.subscribe(function (a) {
						k.isEmbedded || k.isPopup || (f.frameHeight = a.height +
							"px", f.frameWidth = a.width + "px", f.container.restyle("height", f.frameHeight + " !important"), f.container.restyle("width", f.frameWidth + " !important"))
					});
					t.pageStatus.subscribe(function (a) {
						f.updateGreetings(a)
					});
					k.soundOn.subscribe(function () {
						f.toggleSound()
					});
					b.eventEmitter.on("localeChanged", function () {
						f.container && f.updateGreetings()
					});
					k.isRTL.subscribe(function () {
						f.addClassName()
					});
					A.name.subscribe(function () {
						if (!m.isGeneratedName(A.name())) for (var a = m.getElementsByClassName(f.container.documentRef,
							"messageOwnerName visitor"), b = 0; b < a.length; b++) a[b].style.display = "none"
					});
					k.webRTCSettings.subscribe(function () {
						f.toggleWebRTCActions()
					})
				}, buildView: function () {
					k.isPopup || this.container.buildIframe(b.MaximizedStyle + k.maxStyle(), !0);
					this.container.documentRef.getElementById("textareaContainer").appendChild(this.chatTextarea.buildView(this.container.documentRef));
					k.isEmbedded || k.isPopup ? this.restyleEmbed() : "br" == k.chatPosition() ? this.container.documentRef.body.className = "right" : this.container.documentRef.body.className =
						"left";
					this.addClassName();
					this.updateGreetings();
					this.toggleSound();
					this.attachEvents();
					m.redraw(this.container.elementReferrer);
					var a = this.container.documentRef, c = a.getElementsByTagName("head")[0],
						f = a.createElement("script"), a = a.createElement("link");
					f.type = "text/javascript";
					f.src = "https://cdn.jsdelivr.net/emojione/2.2.7/lib/js/emojione.min.js";
					f.async = !0;
					a.type = "text/css";
					a.rel = "stylesheet";
					a.href = "https://cdn.jsdelivr.net/emojione/2.2.7/assets/css/emojione.min.css";
					c.appendChild(a);
					c.appendChild(f);
					Ba();
					this.inDocument = !0;
					this.toggleWebRTCActions();
					this.chatTextarea.elementReferrer.maxLength = 5E3
				}, attachEvents: function () {
					var a = this, c = this.container.documentRef.getElementById("emoji-selection-container"),
						f = this.container.documentRef.getElementById("tooLongMsgNotification");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						b.eventHandler.cancelEvent(a);
						b.sessionHandler.notifyWindowState("min")
					}, "minimizeChat", "minlinkclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent,
						function () {
							b.viewHandler.popoutWidget()
						}, "popoutChat", "poplinkclick");
					this.chatTextarea.attachUserEventListener("keyup", function (a) {
						f.className = 5E3 > this.value.length ? "" : "visible"
					}, null, "chatinputkeyup");
					this.chatTextarea.attachUserEventListener("keydown", function (a) {
						if (13 === a.keyCode) {
							if (5E3 < this.value.length) {
								a.preventDefault();
								return
							}
							f.className = ""
						}
						b.chatHandler.sendTextPreview(a)
					}, null, "chatinputkeydown");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						var c = b.eventHandler.getTargetElement(a);
						-1 !== c.className.indexOf("messageOwnerName") && -1 !== c.className.indexOf("visitor") && (b.formHandler.openForm("nameForm"), b.eventHandler.cancelEvent(a))
					}, "chatWrapper", "chatWrapperclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
						b.formHandler.openForm("emailTranscriptForm");
						a.closeMenu();
						b.eventHandler.cancelEvent(c)
					}, "emailTranscriptOption", "emailclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
							b.chatHandler.changeRating(1);
							b.eventHandler.cancelEvent(a)
						},
						"ratePositive", "ratepveclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						b.chatHandler.changeRating(-1);
						b.eventHandler.cancelEvent(a)
					}, "rateNegative", "ratenveclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						b.eventHandler.cancelEvent(a);
						b.chatHandler.toggleSound()
					}, "soundOption", "soundclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
							b.eventHandler.cancelEvent(a);
							b.viewHandler.expandAgentList(a)
						},
						"expandableIcon", "expandclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						var c = b.languageParser.translate("chat", "video_call_error");
						m.getWebRTCToken(!0, !1, function (a, f) {
							a && b.viewHandler.appendMessage({senderType: "s", message: c, time: new Date, type: "n"})
						})
					}, "videoCall", "videoCallClick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						var c = b.languageParser.translate("chat", "voice_call_error");
						m.getWebRTCToken(!1, !1, function (a) {
							a && b.viewHandler.appendMessage({
								senderType: "s",
								message: c, time: new Date, type: "n"
							})
						})
					}, "voiceCall", "voiceCallClick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
						var c = b.languageParser.translate("chat", "screen_share_error");
						m.getWebRTCToken(!1, !0, function (a) {
							a && b.viewHandler.appendMessage({senderType: "s", message: c, time: new Date, type: "n"})
						})
					}, "screenShare", "screenShareClick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (b) {
							a.container.getElementById("maxFileNotificationContainer").classList.add("hidden")
						},
						"closeNumberNotification", "closeNumberNotification");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (b) {
						a.container.getElementById("maxSizeNotificationContainer").classList.add("hidden")
					}, "closeSizeNotification", "closeSizeNotification");
					this.container.attachUserEventListener("mousedown", function (a) {
						!(a = h.document.activeElement) || "input" !== a.tagName.toLowerCase() && "textarea" !== a.tagName.toLowerCase() || (b.viewHandler.lastFocusedElement = a)
					}, "innerWrapper", "maximizedWidgetMouseDown");
					this.container.attachUserEventListener("change", function (c) {
						b.eventHandler.cancelEvent(c);
						a.closeMenu();
						var f = b.eventHandler.getTargetElement(c), d = 0, n = 0, e = [], g = [], k = function () {
							n++;
							n === d && (f.value = "")
						};
						if (void 0 === h.FormData) a.container.getElementById("upload-form")[0].value && (d = 1, b.viewHandler.startUpload(a.container.getElementById("upload-form"), !0, k)); else if ((c = f.files) && c.length) {
							for (var l = 0; l < c.length; l++) c[l].size > a.maxSizeFileUpload ? e.push(c[l]) : l >= a.maxNumberFileUpload ? g.push(c[l]) : b.viewHandler.startUpload(c[l],
								null, k);
							b.viewHandler.checkUploadFileWarning(e, g)
						}
					}, "fileInput", "fileInputChanged");
					this.container.attachUserEventListener("click", function (b) {
						b.preventDefault();
						a.chatTextarea && a.chatTextarea.elementReferrer && a.chatTextarea.elementReferrer.focus()
					}, "textareaContainer", "textareaContainerClick");
					this.container.attachUserEventListener("dragover", function (b) {
						b.preventDefault();
						b.stopPropagation && b.stopPropagation();
						a.wrapper.addClass("drag-over")
					}, "innerWrapper", "textareaContainerDragOver");
					this.container.attachUserEventListener("dragleave",
						function (b) {
							b.preventDefault();
							b.stopPropagation && b.stopPropagation();
							a.wrapper.removeClass("drag-over")
						}, "innerWrapper", "textareaContainerDragLeave");
					this.container.attachUserEventListener("dragend", function (b) {
						b.preventDefault();
						b.stopPropagation && b.stopPropagation();
						a.wrapper.removeClass("drag-over")
					}, "innerWrapper", "textareaContainerDragEnd");
					this.container.attachUserEventListener("drop", function (c) {
						c.preventDefault();
						c.stopPropagation && c.stopPropagation();
						a.wrapper.removeClass("drag-over");
						c =
							c.target.files || c.dataTransfer.files;
						var f = 0, d = [], n = [], e = function () {
							f++
						};
						if (c && 0 !== c.length) {
							for (var g = 0; g < c.length; g++) c[g].size > a.maxSizeFileUpload ? d.push(c[g]) : g >= a.maxNumberFileUpload ? n.push(c[g]) : b.viewHandler.startUpload(c[g], null, e);
							b.viewHandler.checkUploadFileWarning(d, n)
						}
					}, "innerWrapper", "textareaContainerDrop");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
						b.formHandler.openForm("nameForm");
						a.closeMenu();
						b.eventHandler.cancelEvent(c)
					}, "changeNameOption", "changenameclick");
					this.container.attachUserEventListener("paste", function (a) {
						var c, f = !1, d = null;
						if ((c = (a.originalEvent || a).clipboardData) && (c = c.items) && c.length) {
							for (var n = 0; n < c.length; n++) {
								if ("text/plain" === c[n].type) {
									f = !0;
									break
								}
								if (-1 !== c[n].type.indexOf("image")) {
									var e = c[n].getAsFile();
									null !== e && (d = e, d.name = b.languageParser.translate("chat", "pasted_image_title", {dateTime: m.parseChatTime(new Date)}))
								}
							}
							d && !f && (b.viewHandler.startUpload(d, null), a.preventDefault())
						}
					}, "chatTextarea", "chatTextareaPaste");
					this.container.attachUserEventListener(b.viewHandler.clickEvent,
						function (b) {
							b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0;
							"active" === a.container.getElementById("viewEmoji").className ? a.closeEmojiSelection() : (a.container.getElementById("viewEmoji").className = "active", Ea(c))
						}, "viewEmoji", "viewEmojiClick");
					this.wrapper.attachUserEventListener(b.viewHandler.clickEvent, function (f) {
						f = b.eventHandler.getTargetElement(f);
						"function" === typeof c.contains ? c.contains(f) || a.closeEmojiSelection() : m.isDescendent(c, f) && a.closeEmojiSelection()
					}, null, "maxWidgetClick");
					this.wrapper.attachUserEventListener("keydown", function (b) {
						27 === b.keyCode && a.closeEmojiSelection()
					}, null, "maxWidgetKeydown");
					this.chatTextarea.attachUserEventListener("keydown", function (b) {
						a.resizeTextArea()
					}, null, "chatinputkeyupresize");
					this.chatTextarea.attachUserEventListener("change", function (b) {
						a.resizeTextArea()
					}, null, "chatinputchangeresize");
					this.chatTextarea.attachUserEventListener("input", function (b) {
						a.resizeTextArea()
					}, null, "chatinputinputresize");
					this.chatTextarea.attachUserEventListener("paste",
						function (c) {
							b.chatHandler.sendTextPreview(c);
							a.resizeTextArea()
						}, null, "chatinputpasteresize");
					this.chatTextarea.attachUserEventListener("cut", function (c) {
						b.chatHandler.sendTextPreview(c);
						a.resizeTextArea()
					}, null, "chatinputcutresize")
				}, toggleSound: function () {
					var a, b = this.container.getElementById("soundOption");
					b && (a = b.getElementsByClassName ? b.getElementsByClassName("tooltip")[0] : m.getElementsByClassName(b, "tooltip")[0]);
					b.className = k.soundOn() ? "item activeSound" : "item disabledSound";
					a && (a.innerHTML =
						k.soundOn() ? "Disable Sound" : "Enable Sound")
				}
			});
			S.prototype.hide = function () {
				this.container.restyle("display", "none !important")
			};
			S.prototype.show = function () {
				this.container.restyle("display", "block !important")
			};
			S.prototype.restyleEmbed = function () {
				var a = document.getElementById(c.embedded);
				this.wrapper.addClass("embedded");
				this.container.getElementById("minimizeChat").outerHTML = "";
				this.container.getElementById("popoutChat").outerHTML = "";
				this.container.getElementById("endChat").setAttribute("title", b.languageParser.translate("rollover",
					"end"));
				if (k.isEmbedded) return a ? b.viewHandler.onEmbeddedWindowResize() : void 0;
				this.container.restyle("width", "100% !important");
				this.container.restyle("height", "100% !important")
			};
			S.prototype.updateGreetings = function (a) {
				var c, f, d, g;
				if (this.container.elementReferrer) {
					if (c = this.container.getElementById("drop-text")) c.childNodes[0].innerHTML = b.languageParser.translate("chat", "dragDropText");
					if (a = a || t.pageStatus()) c = this.container.getElementById("shortMessage"), f = this.container.getElementById("greetingsContainer"),
					c && (this.chatTextarea && f) && (d = e.getShortMessage(a), g = e.getLongMessage(a), null !== d && null !== g && (c.innerHTML = d, f.innerHTML = g, "online" === a && k.onlineGreeting && (a = m.rawDecode(k.onlineGreeting.actionMessage), T ? this.chatTextarea.elementReferrer.placeholder = a : (this.chatTextarea.elementReferrer.value = a, m.togglePlaceholderText(this.chatTextarea.elementReferrer, a, "chatTextarea")))))
				}
			};
			S.prototype.addClassName = function () {
				this.wrapper && this.wrapper.elementReferrer && (k.isRTL() ? (this.wrapper.addClass("rtl-direction"),
					this.wrapper.removeClass("ltr-direction")) : (this.wrapper.addClass("ltr-direction"), this.wrapper.removeClass("rtl-direction")))
			};
			S.prototype.toggleEndChatOption = function (a) {
				var b;
				if (b = k.isEmbedded || k.isPopup ? this.container.getElementById("headerBoxControlsContainer") : this.container.getElementById("endChatOption")) b.style.display = a ? "block" : "none"
			};
			S.prototype.addEmojiToInput = function (a) {
				T || this.chatTextarea.elementReferrer.value !== m.rawDecode(k.onlineGreeting.actionMessage) || (this.chatTextarea.elementReferrer.value =
					"");
				this.chatTextarea.elementReferrer.value += a;
				this.chatTextarea.elementReferrer.focus();
				this.closeEmojiSelection()
			};
			S.prototype.closeEmojiSelection = function () {
				this.container.getElementById("viewEmoji").className = "";
				this.container.getElementById("emoji-selection-container").style.display = "none"
			};
			S.prototype.resizeTextArea = function () {
				var a = this.chatTextarea.elementReferrer.value, c = this.chatTextarea.elementReferrer.scrollHeight,
					f = this.container.documentRef.getElementById("textareaContainer"),
					d = this.container.documentRef.getElementById("actionsContainer"),
					e = this.container.documentRef.getElementById("chatContainerWrapper"),
					g = b.viewHandler.ifScrollbarDown();
				a && 52 < c ? (c = 150 < c ? 150 : c, f.style.height = c + "px", d.style.height = c + 69 + "px", e.style.bottom = c + 73 + "px", g && b.viewHandler.scrollToBottom()) : (f.style.height = "52px", d.style.height = "105px", e.style.bottom = "109px")
			};
			S.prototype.toggleWebRTCActions = function () {
				this.inDocument && (k.webRTCSettings() && k.webRTCSettings().en ? (this.container.documentRef.getElementById("videoCall").style.display = k.webRTCSettings().v ? "inline-block" :
					"none", this.container.documentRef.getElementById("voiceCall").style.display = "inline-block", this.container.documentRef.getElementById("screenShare").style.display = k.webRTCSettings().s ? "inline-block" : "none") : (this.container.documentRef.getElementById("videoCall").style.display = "none", this.container.documentRef.getElementById("voiceCall").style.display = "none", this.container.documentRef.getElementById("screenShare").style.display = "none"))
			};
			var sa = S.extend({
				init: function () {
					var a = this;
					this._super.apply(this,
						arguments);
					this.wrapper.template = this.wrapper.template.replace("__GREETINGS__", s.greetingsOverlay);
					b.eventEmitter.on("formClosed", function () {
						var c = a.container.getElementById("chatPanel");
						if (c) if (k.showPreChatForm && !t.prechatFormSubmitted) b.formHandler.openForm("preChatForm"); else if (c.style.display = "block", b.viewHandler.newMessageNotSeen && b.viewHandler.checkUnseenMessages(), !x && a.container.getElementById("chatTextarea") && "max" === t.chatWindowState() && b.viewHandler.userAction) {
							var f = m.getDocument(m.getDocument(h).getElementById(a.container.elementId));
							if (f && f.getElementById("chatTextarea")) try {
								setTimeout(function () {
									f.getElementById("chatTextarea").focus()
								}, 0)
							} catch (d) {
							}
						}
					});
					b.eventEmitter.on("formOpened", function () {
						a.container && a.container.getElementById("chatPanel") && (a.container.getElementById("chatPanel").style.display = "none")
					});
					b.eventEmitter.on("localeChanged", function () {
						a.insertText();
						a.setLinkTitle();
						a.toggleSound()
					})
				}, buildView: function () {
					this._super(this);
					this.container.documentRef.getElementById("chatTableWrapper").style.display = "none";
					this.setLinkTitle();
					this.insertText();
					this.wrapper && this.wrapper.addClass(m.getContrast(k.headerTxtColor));
					this.attachEvents()
				}, insertText: function () {
					var a;
					if (this.container) {
						this.container.getElementById("tawkContent").innerHTML = b.languageParser.translate("overlay", "tawkContent");
						this.container.getElementById("cancelTawkRedirect").innerHTML = b.languageParser.translate("form", "CancelButton");
						this.container.getElementById("tawkRedirect").innerHTML = b.languageParser.translate("form", "visitButton");
						this.container.getElementById("emailTranscriptOption").childNodes[1].innerHTML =
							b.languageParser.translate("rollover", "emailTranscriptOption");
						this.container.getElementById("agentListLabel").innerHTML = b.languageParser.translate("menu", "AgentList");
						this.container.getElementById("maxFileNotificationMessage").innerHTML = b.languageParser.translate("notifications", "maximum_file_upload_warning", {
							strongStart: "<strong>",
							strongEnd: "</strong>",
							limitFileNumber: "5"
						});
						this.container.getElementById("maxSizeNotificationMessage").innerHTML = b.languageParser.translate("notifications", "maximum_size_upload_warning",
							{strongStart: "<strong>", strongEnd: "</strong>", limitFileSize: "50mb"});
						this.container.getElementById("videoCall").childNodes[1].innerHTML = b.languageParser.translate("rollover", "videoCall");
						this.container.getElementById("voiceCall").childNodes[1].innerHTML = b.languageParser.translate("rollover", "voiceCall");
						this.container.getElementById("screenShare").childNodes[1].innerHTML = b.languageParser.translate("rollover", "screenShare");
						a = m.getElementsByClassName(this.container.getElementById("chatContainer"),
							"closeNotification");
						for (var c = 0; c < a.length; c++) a[c].innerHTML = b.languageParser.translate("form", "CloseButton");
						a = this.container.getElementById("uploadFileOption");
						m.isFileInputSupported ? a.childNodes[1].innerHTML = b.languageParser.translate("rollover", "uploadFile") : a.parentNode.removeChild(a)
					}
				}, attachEvents: function () {
					var a = this, c = null;
					this.container.attachUserEventListener("scroll", function (a) {
						null !== c && clearTimeout(c);
						c = setTimeout(function () {
							!b.formHandler.currentForm && (b.viewHandler.newMessageNotSeen &&
								("max" === t.chatWindowState() || k.isEmbedded || k.isPopup)) && b.viewHandler.checkUnseenMessages()
						}, 300)
					}, "chatContainer", "chatScroll");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (b) {
						k.whiteLabel() || (k.brandingRedirect() ? h.open("https://ref.VOOChat/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + W.pageId) : a.container.getElementById("tawkToContent").style.display = "block")
					}, b.viewHandler.tawktoLinkName, "tawktoclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent,
						function (b) {
							a.container.getElementById("tawkToContent").style.display = "none"
						}, "cancelTawkRedirect", "cancelTawkRedirectclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (b) {
						a.container.getElementById("tawkToContent").style.display = "none";
						h.open("https://www.VOOChat/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=" + W.pageId)
					}, "tawkRedirect", "tawkRedirectClicn");
					this.chatTextarea.attachUserEventListener("keydown", function (c) {
						var d = b.eventHandler.getTargetElement(c);
						setTimeout(function () {
							d.value ? (a.container.getElementById("ratingContainer").style.display = "none", a.container.getElementById("textareaContainer").className = "") : (a.container.getElementById("ratingContainer").style.display = "block", a.container.getElementById("textareaContainer").className = "additionalPadding")
						}, 0)
					}, null, "chatinputfocus");
					this.chatTextarea.attachUserEventListener("blur", function (c) {
						b.eventHandler.getTargetElement(c).value || (a.container.getElementById("ratingContainer").style.display = "block",
							a.container.getElementById("textareaContainer").className = "additionalPadding")
					}, null, "chatinputblur");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
						b.formHandler.openForm("emailTranscriptForm");
						a.closeMenu();
						b.eventHandler.cancelEvent(c)
					}, "emailTranscriptOption", "emailclick");
					this.container.attachUserEventListener(b.viewHandler.clickEvent, function (c) {
						"preChatForm" !== b.formHandler.currentForm && "offlineForm" !== b.formHandler.currentForm && "none" !== a.container.getElementById("chatTableWrapper").style.display &&
						b.chatHandler.isVisitorEngaged() ? (b.formHandler.openForm("endChatForm"), b.eventHandler.cancelEvent(c)) : (b.eventHandler.cancelEvent(c), b.sessionHandler.notifyWindowState("min"))
					}, "endChat", "endChatclick");
					this._super(this)
				}, toggleSound: function () {
					this._super();
					this.container.getElementById("soundTitle").innerHTML = k.soundOn() ? b.languageParser.translate("menu", "sound_on") : b.languageParser.translate("menu", "sound_off")
				}
			});
			sa.prototype.closeMenu = function () {
			};
			sa.prototype.setLinkTitle = function () {
				this.container &&
				(this.container.getElementById("ratePositive").setAttribute("title", b.languageParser.translate("rollover", "positiveRating")), this.container.getElementById("rateNegative").setAttribute("title", b.languageParser.translate("rollover", "negativeRating")), k.isEmbedded || k.isPopup || (this.container.getElementById("minimizeChat").setAttribute("title", b.languageParser.translate("rollover", "minimize")), this.container.getElementById("popoutChat").setAttribute("title", b.languageParser.translate("rollover", "popOut")),
					this.container.getElementById("endChat").setAttribute("title", b.languageParser.translate("rollover", "end"))))
			};
			sa.prototype.chatEnded = function () {
				var a, c = this, f = this.container.getElementById("agentWrapper"),
					d = this.container.getElementById("endChat"), e = this.container.getElementById("agentBar"),
					g = this.container.getElementById("agentList"),
					h = this.container.getElementById("headerAccountStateContainer"),
					k = this.container.getElementById("chatContainerWrapper"),
					l = this.container.getElementById("agentProfileContainer"),
					p = this.container.getElementById("options");
				a = new B("chatEnded");
				a.template = m.escapeTemplateReplacement(a.template, [{
					placeholder: "__CHAT_ENDED__",
					textReplace: b.languageParser.translate("chat", "chatEnded")
				}, {
					placeholder: "__START_CHAT__",
					textReplace: b.languageParser.translate("chat", "newChat")
				}, {
					placeholder: "__EMAIL_TRANCRIPT__",
					textReplace: b.languageParser.translate("rollover", "emailTranscriptOption")
				}]);
				a.restyle("display", "block");
				this.container.getElementById("innerWrapper").appendChild(a.buildView());
				this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
					b.formHandler.openForm("emailTranscriptForm");
					c.closeMenu();
					b.eventHandler.cancelEvent(a)
				}, "emailTranscript", "emailTranscript");
				this.container.attachUserEventListener(b.viewHandler.clickEvent, function (a) {
					c.chatStarted();
					b.chatHandler.startNewChat()
				}, "newChat", "newChat");
				f && (f.style.display = "none");
				l && (l.innerHTML = "");
				e && (e.style.display = "none");
				g && (g.innerHTML = "");
				h && (h.style.display = "block");
				d && (d.style.visibility = "hidden");
				k && (k.className += " chat-ended");
				p && (p.style.display = "none")
			};
			sa.prototype.chatStarted = function () {
				var a = this.container.getElementById("chatEnded"), b = this.container.getElementById("endChat"),
					c = this.container.getElementById("chatContainerWrapper"),
					d = this.container.getElementById("options");
				a && a.parentNode.removeChild(a);
				b && (b.style.visibility = "visible");
				c && (c.className = c.className.replace("chat-ended", ""));
				d && (d.style.display = "block")
			};
			var D = C.extend({
				init: function () {
					var a = this, c = function () {
						a.dragElement &&
						(k.isRTL() ? a.dragElement.massRestyle({
							left: "96px !important",
							right: "0px !important"
						}) : a.dragElement.massRestyle({left: "0px ", right: "96px !important"}))
					};
					this._super(this);
					this.iframeXOffsetPosition = 10;
					this.startY = this.startX = this.iframeYOffsetPosition = 0;
					this.userAction = !1;
					this.dragElement = new B(m.getRandomName(), m.getGenericStyle({
						height: "45px",
						top: "1px",
						backgroundcolor: "#fff",
						zindex: "999997",
						cursor: "move",
						opacity: "0"
					}) + 'width: expression(this.parentNode.offsetWidth - 306 + "px") !important;');
					c();
					this.overlayElement = new B(null, m.getGenericStyle({
						left: "0px",
						top: "0px",
						zindex: "1000001",
						cursor: "move",
						width: "100%",
						height: "100%",
						display: "none",
						"float": "left"
					}));
					this.iframeContainer = new B(m.getRandomName(), m.getGenericStyle({
						display: "none",
						bottom: "0",
						minwidth: "0",
						minheight: "0",
						right: "10px",
						zindex: N && 9 > F ? "none" : "2000000000",
						position: "fixed"
					}));
					this.resizeFromLeft = new B(m.getRandomName(), m.getGenericStyle({
						height: "100%",
						left: "0px",
						right: "96px",
						top: "0px",
						zindex: "999998",
						cursor: "w-resize",
						width: "6px"
					}));
					this.resizeFromRight = new B(m.getRandomName(), m.getGenericStyle({
						height: "100%",
						width: "6px",
						right: "0px",
						top: "0px",
						zindex: "999998",
						cursor: "e-resize"
					}));
					this.resizeFromTop = new B(m.getRandomName(), m.getGenericStyle({
						height: "6px",
						width: "100%",
						right: "0px",
						top: "0px",
						zindex: "999998",
						cursor: "n-resize"
					}));
					this.resizeFromBottom = new B(m.getRandomName(), m.getGenericStyle({
						height: "6px",
						width: "100%",
						right: "0px",
						bottom: "0px",
						zindex: "999998",
						cursor: "s-resize"
					}));
					this.resizeTopLeft = new B(m.getRandomName(), m.getGenericStyle({
						height: "12px",
						width: "12px", left: "0px", top: "0px", zindex: "999998", cursor: "nw-resize"
					}));
					this.resizeTopRight = new B(m.getRandomName(), m.getGenericStyle({
						height: "12px",
						width: "12px",
						right: "0px",
						top: "0px",
						zindex: "999998",
						cursor: "ne-resize"
					}));
					this.resizeBottomLeft = new B(m.getRandomName(), m.getGenericStyle({
						height: "12px",
						width: "12px",
						bottom: "0px",
						left: "0px",
						zindex: "999998",
						cursor: "sw-resize"
					}));
					this.resizeBottomRight = new B(m.getRandomName(), m.getGenericStyle({
						height: "12px", width: "12px", bottom: "0px", right: "0px", zindex: "999999",
						cursor: "se-resize"
					}));
					g = new sa(this.tawktoLinkName, this.bottomContainerName);
					this.iframeContainer.addChildViews([g.container]);
					k.isPopup || k.isEmbedded || (l = new ThemeMinimizedWidget, this.indicator = new Indicator(l.chatIndicator), this.iframeContainer.addChildViews([l.container, l.chatIndicator, l.bubbleContainer, this.dragElement, this.resizeFromLeft, this.resizeFromRight, this.resizeFromTop, this.resizeFromBottom, this.resizeTopLeft, this.resizeTopRight, this.resizeBottomLeft, this.resizeBottomRight, this.overlayElement]));
					this.chatContainer = g.container;
					this.iframeContainer.buildView();
					t.pageStatus.subscribe(function (b) {
						a.updateViewByStatus(b)
					});
					y.rating.subscribe(function (b) {
						a.changeRating(b)
					});
					k.isPopup || k.isEmbedded || t.chatWindowState.subscribe(function (b) {
						"max" === b ? a.maximizeWidget() : a.minimizeWidget()
					});
					k.minStyle.subscribe(function () {
						l && l.container.elementReferrer && (l.container.insertCssFile(k.minStyle(), !0), l.container.documentRef.getElementById("tawkchat-minified-wrapper").className = m.getContrast(k.headerTxtColor))
					});
					k.maxStyle.subscribe(function () {
						g && g.container.elementReferrer && (g.container.insertCssFile(k.maxStyle(), !0), g.wrapper.removeClass("black"), g.wrapper.removeClass("white"), g.wrapper.addClass(m.getContrast(k.headerTxtColor)))
					});
					k.isRTL.subscribe(function () {
						c()
					});
					b.chatHandler.hasChatStarted.subscribe(function (a) {
						g.toggleEndChatOption(a)
					})
				}, show: function () {
					g.hide();
					k.isEmbedded || k.isPopup ? (this.iframeContainer.restyle("position", "static"), this.iframeContainer.restyle("right", ""), this.iframeContainer.restyle("left",
						""), this.iframeContainer.restyle("width", "100%"), this.iframeContainer.restyle("height", "100%"), g.show()) : (this.indicator.initIndicator(), L && this.fixContainerBorder(), b.main.maximize ? this.maximizeWidget() : this.minimizeWidget());
					this.updateViewByStatus(t.pageStatus());
					this._super();
					m.redraw(this.iframeContainer.elementReferrer)
				}, showEmbeddedGreetings: function () {
				}, hideEmbeddedGreetings: function () {
				}
			});
			D.prototype.maximizeWidget = function () {
				this.indicator && this.indicator.hide();
				if ("max" !== k.onClickAction) return this.popoutWidget();
				k.hideWidgetOnOffline && "offline" === t.pageStatus() && b.formHandler.openForm("offlineForm");
				(k.hideWidgetOnLoad || k.hideWidgetOnOffline) && this.showWidget();
				this.iframeContainer.restyle("bottom", this.iframeYOffsetPosition + "px");
				"br" === k.chatPosition() || "tr" === k.chatPosition() || "cr" === k.chatPosition() ? (this.iframeContainer.restyle("right", this.iframeXOffsetPosition + "px"), this.iframeContainer.restyle("left", "auto")) : (this.iframeContainer.restyle("left", this.iframeXOffsetPosition + "px"), this.iframeContainer.restyle("right",
					"auto"));
				g.show();
				l && l.container && l.hide();
				c.onChatMaximized();
				this.wasScrollbarDown && this.scrollToBottom();
				b.viewHandler.newMessageNotSeen && b.viewHandler.checkUnseenMessages();
				if (!x && this.chatContainer.getElementById("chatTextarea") && "max" === t.chatWindowState() && !b.formHandler.currentForm && b.viewHandler.userAction) {
					var a = m.getDocument(m.getDocument(h).getElementById(g.container.elementId));
					if (a && a.getElementById("chatTextarea")) try {
						setTimeout(function () {
							a.getElementById("chatTextarea").focus();
							b.viewHandler.userAction =
								!1
						}, 0)
					} catch (d) {
					}
				}
			};
			D.prototype.minimizeWidget = function () {
				var a;
				if (!k.isPopup && !k.isEmbedded) {
					g.container.elementReferrer.blur();
					g.hide();
					b.viewHandler.lastFocusedElement && setTimeout(function () {
						b.viewHandler.lastFocusedElement.focus()
					}, 0);
					if (k.hideWidgetOnLoad) return this.hideWidget();
					this.wasScrollbarDown = this.ifScrollbarDown();
					this.iframeYOffsetPosition = parseInt(this.iframeContainer.elementReferrer.style.bottom.replace("px", ""), 10);
					a = "br" == k.chatPosition() ? parseInt(this.iframeContainer.elementReferrer.style.right.replace("px",
						""), 10) : parseInt(this.iframeContainer.elementReferrer.style.left.replace("px", ""), 10);
					isNaN(a) || (this.iframeXOffsetPosition = a);
					"br" === k.chatPosition() || "tr" === k.chatPosition() || "cr" === k.chatPosition() ? (this.iframeContainer.restyle("bottom", "0px"), this.iframeContainer.restyle("right", "0px"), this.iframeContainer.restyle("left", "auto")) : (this.iframeContainer.restyle("bottom", "0px"), this.iframeContainer.restyle("left", "0px"), this.iframeContainer.restyle("right", "auto"));
					l.show();
					c.onChatMinimized()
				}
			};
			D.prototype.popoutWidget = function () {
				this.indicator.hide();
				this.popoutWin && !this.popoutWin.closed && this.popoutWin.focus ? this.popoutWin.focus() : (this.popoutWin = h.open("https://VOOChat/chat/" + W.pageId + "/" + $_Tawk_WidgetId + "/?$_tawk_popout=true&$_tawk_sk=" + t.sessionKey + "&$_tawk_tk=" + t.transferKey + "&v=" + t.serverVersion, "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no"), t.chatWindowState("min"))
			};
			D.prototype.toggleWidget = function () {
				var a = t.chatWindowState();
				t.chatWindowState("min" === a ? "max" : "min")
			};
			D.prototype.removeBubble = function () {
				try {
					b.eventEmitter.emit("notifyBubbleClosed")
				} catch (a) {
					p.handleError("Unable to emit notifyBubbleClosed", a.fileName, a.lineNumber, a.stack)
				}
			};
			D.prototype.insertPopupStyle = function () {
				var a = document.getElementsByTagName("head")[0], c = document.createDocumentFragment(),
					f = m.createElement(document, "style", {type: "text/css"}), d;
				d = document.createTextNode(b.ResetStyle + "" + b.MaximizedStyle + k.maxStyle());
				f.styleSheet ? f.styleSheet.cssText =
					d.nodeValue : f.appendChild(d);
				c.appendChild(f);
				a.appendChild(c);
				document.body.className = "popup"
			};
			D.prototype.begin = function () {
				var a = this, d = document.getElementById(c.embedded), f;
				b.main.started || (this.iframeContainer && (f = document.getElementById(this.iframeContainer.elementId)), f && f.parentNode.removeChild(f), k.isEmbedded && d ? (d.appendChild(this.iframeContainer.elementReferrer), b.eventHandler.listen(h, "resize", function () {
					a.onEmbeddedWindowResize()
				}, "windowresize")) : (document.body.appendChild(this.iframeContainer.elementReferrer),
					k.isPopup ? this.insertPopupStyle() : (l.buildView(), this.dragElement.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b)
					}, null, "dragfocus"), this.resizeFromLeft.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, "left")
					}, null, "resizeLeftfocus"), this.resizeFromRight.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, "right")
					}, null, "resizeRightfocus"), this.resizeFromTop.attachUserEventListener("mousedown", function (b) {
							a.onHeaderMouseDown(b, null, "top")
						},
						null, "resizeTopfocus"), this.resizeFromBottom.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, null, "bottom")
					}, null, "resizeBottomfocus"), this.resizeTopLeft.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, "left", "top")
					}, null, "resizeTopLeftfocus"), this.resizeTopRight.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, "right", "top")
					}, null, "resizeTopRightfocus"), this.resizeBottomLeft.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b,
							"left", "bottom")
					}, null, "resizeBottomLeftfocus"), this.resizeBottomRight.attachUserEventListener("mousedown", function (b) {
						a.onHeaderMouseDown(b, "right", "bottom")
					}, null, "resizeBottomRightfocus"), b.eventHandler.listen(h, "resize", function () {
						a.onWindowResize()
					}, "windowresize"))), g.buildView(), "br" != k.chatPosition() && this.iframeContainer.restyle("left", "10px"))
			};
			D.prototype.fixContainerBorder = function () {
				var a, c = this;
				this.iframeContainer.restyle("position", "absolute");
				b.eventHandler.listen(h, "scroll", function () {
					clearTimeout(a);
					c.iframeContainer.restyle("bottom", "0px");
					c.iframeContainer.restyle("visibility", "hidden");
					c.iframeContainer.restyle("visibility", "visible");
					a = setTimeout(function () {
						document.body.className = document.body.className;
						document.body.style.visibility = "hidden";
						document.body.style.visibility = "visible"
					}, 50)
				}, "windowscroll")
			};
			D.prototype.hideWidget = function () {
				this.iframeContainer.hide();
				c.onChatHidden()
			};
			D.prototype.showWidget = function () {
				this.scrollToBottom();
				this.iframeContainer.show()
			};
			D.prototype.toggleVisibility =
				function () {
					this.scrollToBottom();
					this.iframeContainer.toggle()
				};
			D.prototype.isWidgetHidden = function () {
				return !this.iframeContainer.isVisible
			};
			D.prototype.onDragMove = function (a) {
				this.setChatWindowXPosition(a.clientX);
				this.setChatWindowYPosition(a.clientY)
			};
			D.prototype.onHeaderMouseUp = function () {
				this.overlayElement.restyle("display", "none !important");
				this.resetFrameDimensions();
				this.isResized && (this.isResized = !1, b.socketManager.sendToConnector("notifyWidgetResized"));
				b.eventHandler.removeEventHandler(document,
					"mousemove", this.mouseMovehandler);
				b.eventHandler.removeEventHandler(document, "mouseup", this.mouseUpHandler)
			};
			D.prototype.onHeaderMouseDown = function (a, c, f) {
				var d = this, e = b.eventHandler.getTargetElement(a);
				e.id !== this.resizeFromLeft.elementId && e.id !== this.resizeFromRight.elementId && e.id !== this.resizeFromTop.elementId && e.id !== this.resizeFromBottom.elementId && e.id !== this.resizeTopLeft.elementId && e.id !== this.resizeBottomLeft.elementId && e.id !== this.resizeTopRight.elementId && e.id !== this.resizeBottomRight.elementId &&
				e.id !== this.dragElement.elementId || (1 === a.button && !h.event && !g.documentRef.event || 1 < a.button) || (b.eventHandler.cancelEvent(a), this.overlayElement.restyle("display", "block !important"), a = this.getActualViewportDimensions(), this.actualViewPortWidth = a.width, this.actualViewPortHeight = a.height, this.startOffsetY = this.startOffsetX = 0, this.mouseMovehandler = e.id === this.dragElement.elementId ? b.eventHandler.listen(document, "mousemove", function (a) {
					d.onDragMove(a);
					d.redrawIE()
				}, "dragmove") : b.eventHandler.listen(document,
					"mousemove", function (a) {
						d.setResizedDimensions(a, c, f);
						d.isResized = !0;
						d.redrawIE()
					}, "dragmove"), this.mouseUpHandler = b.eventHandler.listen(document, "mouseup", function (a) {
					d.onHeaderMouseUp(a)
				}, "dragleave"))
			};
			D.prototype.redrawIE = function () {
				"explorer" === E && (this.iframeContainer.restyle("visibility", "hidden !important"), this.iframeContainer.restyle("visibility", "visible !important"))
			};
			D.prototype.setResizedDimensions = function (a, c, f) {
				var d, e = this.iframeContainer.elementReferrer;
				parseInt(g.frameWidth.replace("px",
					""), 10);
				parseInt(g.frameHeight.replace("px", ""), 10);
				var h = this.ifScrollbarDown();
				this.isRight && "undefined" !== typeof this.isRight || (this.isRight = k.isRightPositioned());
				this.startX = a.clientX;
				this.startY = a.clientY;
				if (c) {
					d = this.isRight ? "right" : "left";
					var l = parseInt(m.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
						p = parseInt(e.style[d].replace("px", "")),
						r = this.isRight ? this.actualViewPortWidth - a.clientX : a.clientX, r = 0 > r ? 0 : r;
					this.isRight && "right" === c || !this.isRight && "left" ===
					c ? (c = l - (r - p), 280 > c ? c = 280 : (r > this.actualViewPortWidth - c - 1 && (r = this.actualViewPortWidth - c - 1), e.style.cssText += ";" + d + ":" + r + "px !important", this.startOffsetX = c)) : this.startOffsetX = c = this.isRight ? this.actualViewPortWidth - a.clientX - p : a.clientX - p;
					280 <= c && 0 < this.actualViewPortWidth - (c + parseInt(e.style[d].replace("px", ""), 10)) && this.setWidth(c)
				}
				f && ("bottom" === f ? (f = parseInt(e.style.bottom.replace("px", "")), a = this.actualViewPortHeight - a.clientY, 0 > a && (a = 0), f = parseInt(m.computedStyle(this.chatContainer.elementReferrer,
					"height").replace("px", ""), 10) - (a - f), 330 > f ? f = 330 : (a > this.actualViewPortHeight - f - 1 && (a = this.actualViewPortHeight - f - 1), e.style.cssText += ";bottom:" + a + "px !important", this.startOffsetY = f)) : (startOffsetY = parseInt(e.style.bottom.replace("px", ""), 10), f = this.actualViewPortHeight - a.clientY - startOffsetY, this.startOffsetY = this.startY - startOffsetY), 330 <= f && 0 < this.actualViewPortHeight - (f + parseInt(e.style.bottom.replace("px", ""), 10)) && this.setHeight(f));
				h && this.scrollToBottom();
				b && b.formHandler && b.formHandler.resize()
			};
			D.prototype.setChatWindowXPosition = function (a) {
				var b, c, d = parseInt(g.frameWidth.replace("px", ""), 10);
				"undefined" === typeof this.isRight && (this.isRight = k.isRightPositioned());
				this.isRight ? (b = "right", c = parseInt(this.iframeContainer.elementReferrer.style.right, 10)) : (b = "left", c = -parseInt(this.iframeContainer.elementReferrer.style.left, 10));
				this.startOffsetX || (this.startOffsetX = a + c);
				a = this.isRight ? this.startOffsetX - a : a - this.startOffsetX;
				20 > a ? a = 0 : 20 > this.actualViewPortWidth - (a + d) && (a = this.actualViewPortWidth -
					d);
				this.iframeContainer.restyle(b, a + "px !important")
			};
			D.prototype.setChatWindowYPosition = function (a) {
				var b, c, d = parseInt(g.frameHeight.replace("px", ""), 10);
				"auto" === this.iframeContainer.elementReferrer.style.bottom ? (styleKey = "top", b = -parseInt(this.iframeContainer.elementReferrer.style.top, 10), c = !1) : (styleKey = "bottom", b = parseInt(this.iframeContainer.elementReferrer.style.bottom, 10), c = !0);
				this.startOffsetY || (this.startOffsetY = a + b);
				a = c ? this.startOffsetY - a : a - this.startOffsetY;
				20 > a ? a = 0 : 20 > this.actualViewPortHeight -
					(a + d) && (a = this.actualViewPortHeight - d);
				this.iframeContainer.restyle(styleKey, a + "px !important")
			};
			D.prototype.onWindowResize = function () {
				var a = this;
				clearTimeout(this.resizeTimeout);
				this.wasScrollbarDown = this.ifScrollbarDown();
				this.resizeTimeout = setTimeout(function () {
					a.onWindowResizeTimeout()
				}, 100)
			};
			D.prototype.onWindowResizeTimeout = function () {
				var a = this.getActualViewportDimensions(), b = a.width, a = a.height,
					c = this.iframeContainer.elementReferrer,
					d = this.isBottom ? parseInt(c.style.bottom.replace("px", ""),
						10) : parseInt(c.style.top.replace("px", ""), 10),
					e = this.isRight ? parseInt(c.style.right.replace("px", ""), 10) : parseInt(c.style.left.replace("px", ""), 10),
					h = parseInt(g.frameWidth.replace("px", ""), 10), k = parseInt(g.frameHeight.replace("px", ""), 10);
				h + e > b && (e = b - h, 0 > e && (h += e, e = 0, this.setWidth(h)), this.isRight ? c.style.right = e + "px" : c.style.left = e + "px");
				k + d > a && (d = a - k, 0 > d && (k += d, d = 0, this.setHeight(k)), this.isBottom ? c.style.bottom = d + "px" : c.style.top = d + "px");
				this.wasScrollbarDown && this.scrollToBottom();
				this.resetFrameDimensions()
			};
			D.prototype.setWidth = function (a) {
				if (!a || 300 > a) a = 300;
				L && this.dragElement.restyle("width", a - 102 + "px !important");
				this.chatContainer.restyle("width", a + "px !important")
			};
			D.prototype.setHeight = function (a) {
				if (!a || 350 > a) a = 350;
				this.chatContainer.restyle("height", a + "px !important")
			};
			D.prototype.onEmbeddedWindowResize = function () {
				null === this.isWidgetElementDimensionsNull && this.setWidgetElementDimensions();
				this.isWidgetElementDimensionsNull ? (this.setWidth(k.maximizedDimensions().width), this.setHeight(k.maximizedDimensions().height)) :
					(this.chatContainer.restyle("width", "100%"), this.chatContainer.restyle("height", "100%"))
			};
			D.prototype.setWidgetElementDimensions = function () {
				var a = document.getElementById(c.embedded);
				this.isWidgetElementDimensionsNull = 280 > a.clientWidth || 330 > a.clientHeight ? !0 : !1
			};
			D.prototype.resetFrameDimensions = function () {
				var a = parseInt(m.computedStyle(this.chatContainer.elementReferrer, "width").replace("px", ""), 10),
					b = parseInt(m.computedStyle(this.chatContainer.elementReferrer, "height").replace("px", ""), 10);
				g.frameWidth =
					a + "px";
				g.frameHeight = b + "px"
			};
			D.prototype.isWidgetElementDimensionsNull = null;
			D.prototype.styleAgentBar = function () {
				var a, c = this.chatContainer;
				if (c) {
					a = c.getElementById("agentWrapper");
					try {
						0 < b.agents.agentsCount ? (c.getElementById("headerAccountStateContainer").style.display = "none", a.style.display = "block") : (c.getElementById("headerAccountStateContainer").style.display = "block", a.style.display = "none")
					} catch (f) {
						p.handleError("headerAccountStateContainer is null", f.fileName, f.lineNumber, f.stack)
					}
				}
			};
			D.prototype.expandAgentList =
				function (a) {
					var b, c;
					if (c = this.chatContainer) b = c.getElementById("agentBar"), c = c.getElementById("expandableLink"), 1 === a.button && !h.event || 1 < a.button || (-1 === b.className.indexOf("expanded") ? (b.className += " expanded", c.className = "expanded") : (b.className = b.className.replace("expanded", ""), c.className = ""), this.styleAgentBar())
				};
			D.prototype.resetView = function () {
				var a, b, c, d, e, g;
				if (g = this.chatContainer) a = g.getElementById("chatWrapper"), c = g.getElementById("agentList"), e = g.getElementById("agentBar"), d = g.getElementById("expandableLink"),
					g = g.getElementById("headerAccountStateContainer"), a && (b = a.lastChild, a.innerHTML = "", a.appendChild(b)), c && (c.innerHTML = ""), e && (a = e.parentNode.childNodes[0], e.className = "", a && -1 !== a.className.indexOf("agentWrapper") && a.parentNode.removeChild(a)), d && (d.style.visibility = "hidden", d.className = ""), g && (g.style.display = "block"), this.showEmbeddedGreetings(), this.show()
			};
			D.prototype.handleIndicatorToggle = function (a) {
				l && (l.container && l.chatIndicator) && (a = l.chatIndicator.getElementById("tawkchat-chat-indicator"),
					a.style.visibility = "visible")
			};
			var xa = D.extend({
				init: function () {
					this._super(this);
					this.mainAgent = null
				}, appendMessage: function (a) {
					var b, c, d = {
						"chat-message-row": s["chat-message-row"],
						"chat-resend-link": s["chat-resend-link"],
						"chat-message-owner-agent": s["chat-message-owner-agent"],
						"chat-message-owner-visitor": s["chat-message-owner-visitor"],
						"chat-message-container": s["chat-message-container"],
						"chat-notification-container": s["chat-notification-container"],
						"chat-message-status-row": s["chat-message-status-row"],
						"chat-divider": s["chat-divider"]
					}, e = m.parseChatTime(a.time);
					"a" === a.senderType ? (c = (b = (c = y.agentProfiles[a.ownerId]) && c.pi ? t.agentImgUrl + "/" + y.agentProfiles[a.ownerId].pi : "") ? "url('" + b + "')" : "transparent", b = "explorer" === E && 9 > F ? "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + b + "',sizingMethod='scale');" : "", "transparent" !== c && (b += "background-position:0 0;background-size:28px 28px"), d["chat-message-owner-agent"] = d["chat-message-owner-agent"].replace("__IMAGE_URL__", c).replace("__IE_IMAGE_SCALE__",
						b)) : "s" === a.senderType && (d["chat-message-owner-agent"] = d["chat-message-owner-agent"].replace("__IMAGE_URL__", "").replace("__IE_IMAGE_SCALE__", ""));
					d["chat-message-status-row"] = a.isPending ? s["chat-message-pending-row"] : d["chat-message-status-row"].replace("__TIME__", e).replace("__TIME_CLASS__", "v" === a.senderType ? "visitor" : "agent");
					return this._super(a, d)
				}, showEmbeddedGreetings: function () {
					var a;
					g.container && (a = g.container.getElementById("greetingsOverlay"), chatWrapper = g.container.getElementById("chatTableWrapper"),
					a && chatWrapper && (chatWrapper.style.display = "none", a.style.display = "block", this._super(this)))
				}, hideEmbeddedGreetings: function () {
					var a, b;
					g.container && (a = g.container.getElementById("greetingsOverlay"), b = g.container.getElementById("chatTableWrapper"), a && b && (a.style.display = "none", b.style.display = "table", this._super(this)))
				}, appendAgent: function (a) {
					var c, f, d, e, h, k, l = this;
					e = this.chatContainer;
					c = e.getElementById("agentProfileContainer");
					var p = e.getElementById("agentList");
					f = e.getElementById("chatWrapper");
					e && (c && p) && (b.agents.agentsCount++, 1 === b.agents.agentsCount ? (this.mainAgent = a, this.renderAgentHeader(a.pid), this.renderAgentMinimizedWidget(a.pid), f.className = "single-agent") : (g.container.getElementById("profileDetailNoImage") && (this.renderAgentHeader(this.mainAgent.pid), this.renderAgentMinimizedWidget(this.mainAgent.pid)), this.changeDragElementSize(50), f.className = "multi-agent", this.expandAgentList = b.eventHandler.listen(c, "click", function (a) {
						l.openAgentList()
					}, "expandClick")), c = s["agent-profile"],
						f = s["agent-profile-image"], d = s["agent-profile-description"], e = new B("agentProfile-" + a.pid, null, {className: "agentWrapper clearfix"}, null, e.documentRef), h = a.pi ? t.agentImgUrl + "/" + a.pi : "", k = (k = "explorer" === E && 9 > F) ? "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + h + "',sizingMethod='scale');" : "", h = h ? "background-image : url('" + h + "'); background-size : 40px 40px; background-position : 0px 0px;" : "", d = m.escapeTemplateReplacement(d, [{
						placeholder: "__POSITION_CLASS__", textReplace: a.pst ? "agentName" :
							"agentNameCentered"
					}, {placeholder: "__POSITION__", textReplace: a.pst}, {
						placeholder: "__NAME__",
						textReplace: a.n
					}]), f = f.replace("__PROFILE_ID__", a.pid).replace("__IMAGE_URL__", h).replace("__IE_IMAGE_SCALE__", k), e.template = m.escapeTemplateReplacement(c, [{
						placeholder: "__AGENT_PROFILE_DETAIL__",
						textReplace: d
					}, {placeholder: "__AGENT_PROFILE_IMAGE__", textReplace: f}, {
						placeholder: "__ID__",
						textReplace: ""
					}]), p.appendChild(e.buildView()), this.styleAgentBar())
				}, changeDragElementSize: function (a) {
					k.isRTL() ? this.dragElement.restyle("right",
						a + "px !important") : this.dragElement.restyle("left", a + "px !important")
				}, removeAgent: function (a) {
					var c, f;
					if (f = g.container.elementReferrer ? g.container : null) b.agents.agentsCount--, c = f.getElementById("agentProfileContainer"), f = f.getElementById("agentProfile-" + a), 0 === b.agents.agentsCount ? (this.clearAgentHeader(), this.clearAgentFooter(), this.changeDragElementSize(0)) : 1 === b.agents.agentsCount && (b.eventHandler.removeEventHandler(c, "click", this.expandAgentList), this.changeDragElementSize(0)), 0 < b.agents.agentsCount &&
					this.mainAgent.pid === a && (this.mainAgent = y.agentProfiles[Object.keys(y.agentProfiles)[0]], this.renderAgentHeader(this.mainAgent.pid), this.renderAgentMinimizedWidget(this.mainAgent.pid)), f && f.parentNode.removeChild(f), 1 === b.agents.agentsCount && (this.renderAgentHeader(this.mainAgent.pid), this.renderAgentMinimizedWidget(this.mainAgent.pid));
					this.styleAgentBar();
					f = this.chatContainer;
					c = f.getElementById("agentProfileContainer");
					k.chatPosition();
					a = k.minimizedDimensions().height;
					k.minimizedDimensions();
					k.chatBubble();
					f.getElementById("agentList");
					c && 0 === b.agents.agentsCount && (this.clearAgentHeader(), this.clearAgentFooter(), l && l.agentBarChanged(a))
				}, renderAgentHeader: function (a) {
					var c, f;
					f = "";
					var d = this.chatContainer, e = d.getElementById("agentProfileContainer");
					d && (e && a) && (a = y.agentProfiles[a], c = a.pi ? t.agentImgUrl + "/" + a.pi : "", this.clearAgentHeader(), this.addProfileDetail(a), c || 1 < b.agents.agentsCount) && (f = "background-image : url('" + c + "'); background-size : 40px 40px; background-position : 0px 0px;", "explorer" === E &&
					9 > F && (f += "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + c + "',sizingMethod='scale');"), d.getElementById("innerWrapper").className = "border-corner has-profile-image ", d.getElementById("headerBoxControlsContainer") && this.dragElement.restyle("height", "50px !important"), c = new B("profileFallbackImage", null, {className: "alias-image"}, null, d.documentRef), f = new B("profileImage-" + a.pid, f, {className: "alias-image"}, null, d.documentRef), e.appendChild(c.buildView()), e.appendChild(f.buildView()))
				},
				clearAgentHeader: function () {
					var a = this.chatContainer, b = a.getElementById("agentProfileContainer");
					b.innerHTML = "";
					a.getElementById("innerWrapper").className = "border-corner";
					a.getElementById("headerBoxControlsContainer") && this.dragElement.restyle("height", "45px !important");
					b.style.height = "45px"
				}, renderAgentMinimizedWidget: function (a) {
					var c, f, d, e, g, h, p, r = l && l.container && l.container.elementReferrer ? l.container : null;
					if (r && (this.chatContainer && a) && (e = y.agentProfiles[a], a = r.getElementById("tawkchat-minified-agent-container"),
							f = r.getElementById("tawkchat-status-text-container"), d = r.getElementById("tawkchat-minified-link-container"), p = r.getElementById("tawkchat-chat-indicator"), k.chatBubble(), c = k.minimizedDimensions().height, k.minimizedDimensions(), chatIndicatorHeight = 37, heightDifference = 60 - c, a)) {
						this.clearAgentFooter();
						c = e.pi ? t.agentImgUrl + "/" + e.pi : "";
						g = new B("profileDetail", null, null, null, r.documentRef);
						c || 1 < b.agents.agentsCount ? g.template = m.escapeTemplateReplacement(s["agent-profile-description"], [{
							placeholder: "__POSITION_CLASS__",
							textReplace: e.pst ? "agentName" : "agentNameCentered"
						}, {placeholder: "__POSITION__", textReplace: e.pst}, {
							placeholder: "__NAME__",
							textReplace: e.n
						}]) : (h = e.pst ? "&nbsp-&nbsp" + e.pst : "", g.template = m.escapeTemplateReplacement(s["agent-profile-description-noimage"], [{
							placeholder: "__POSITION__",
							textReplace: h
						}, {placeholder: "__NAME__", textReplace: e.n}]));
						a.appendChild(g.buildView());
						if (c || 1 < b.agents.agentsCount) 0 < heightDifference && l.agentBarChanged(60), g = "background-image : url('" + c + "'); background-position: 0; background-size: 40px 40px;",
						"explorer" === E && 9 > F && (g += "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + c + "',sizingMethod='scale');"), e = new B("profileImage-" + e.pid, g, {className: "alias-image"}, null, r.documentRef), fallbackView = new B("profileFallbackImage", null, {className: "alias-image"}, null, r.documentRef), a.appendChild(fallbackView.buildView()), a.appendChild(e.buildView());
						a.style.display = "block";
						f.style.display = "none";
						c || 1 < b.agents.agentsCount ? (d.style.marginTop = "17px", M && (a.style.marginTop = "2px")) : M && (a.style.marginTop =
							"10px");
						p && "block" === p.style.display && b.viewHandler.handleIndicatorToggle(!0)
					}
				}, clearAgentFooter: function () {
					var a, b, c;
					(c = l && l.container && l.container.elementReferrer ? l.container : null) && (this.chatContainer && k.isDesktopRectangle()) && (a = c.getElementById("tawkchat-minified-agent-container"), b = c.getElementById("tawkchat-status-text-container"), c = c.getElementById("tawkchat-minified-link-container"), l.agentBarChanged(k.minimizedDimensions().height), a.innerHTML = "", a.style.display = "none", b.style.display = "block",
						c.style.marginTop = M ? "10px" : "3px")
				}, handleEndChat: function () {
					g.chatEnded();
					l && l.container && l.chatEnded();
					this.clearAgentHeader();
					k.isEmbedded || (k.isPopup ? (b.socketManager.sendToConnector("popupOnFocus", !1), setTimeout(function () {
						1 < h.history.length ? h.history.back() : h.close()
					}, 200)) : b.sessionHandler.notifyWindowState("min"))
				}, handleRestartChat: function () {
					b.formHandler.closeForm();
					g.chatStarted()
				}
			});
			xa.prototype.addProfileDetail = function (a) {
				var c, f, d, e = this.chatContainer.getElementById("agentProfileContainer");
				a.pi || 1 < b.agents.agentsCount ? (c = new B("profileDetail", null, null, null, this.chatContainer.documentRef), d = s["agent-profile-description"], c.template = m.escapeTemplateReplacement(d, [{
					placeholder: "__POSITION_CLASS__",
					textReplace: a.pst ? "agentName" : "agentNameCentered"
				}, {placeholder: "__POSITION__", textReplace: a.pst}, {
					placeholder: "__NAME__",
					textReplace: a.n
				}])) : (c = new B("profileDetailNoImage", null, {className: "noImageAgentProfileDetail"}, null, this.chatContainer.documentRef), f = a.pst ? "&nbsp-&nbsp" + a.pst : "", d = s["agent-profile-description-noimage"],
					c.template = m.escapeTemplateReplacement(d, [{
						placeholder: "__POSITION__",
						textReplace: f
					}, {placeholder: "__NAME__", textReplace: a.n}]));
				e.appendChild(c.buildView())
			};
			xa.prototype.openAgentList = function () {
				var a = this;
				this.chatContainer.getElementById("agentProfileContainer").style.display = "none";
				this.chatContainer.getElementById("agentListBack").style.display = "block";
				this.chatContainer.getElementById("agentBar").style.display = "block";
				b.eventHandler.listen(this.chatContainer.getElementById("agentListBack"),
					"click", function (b) {
						a.closeAgentList()
					}, "backClick")
			};
			xa.prototype.closeAgentList = function () {
				this.chatContainer.getElementById("agentProfileContainer").style.display = "block";
				this.chatContainer.getElementById("agentListBack").style.display = "none";
				this.chatContainer.getElementById("agentBar").style.display = "none"
			};
			C = function () {
				var a = this, c = !1;
				this.onActivityHandler = function () {
					b && (a.away && w.connected && b.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), a.active = !0, a.away = !1)
				};
				this.popupOnFocusHandler =
					function () {
						b && (!w.connected && b.socketManager.isForcedDisconnect() ? b.main.criticalRefresh(t.serverVersion, !1, !0) : (a.hasFocus || (a.active = !0, a.hasFocus = !0, w.connected && b.socketManager.sendToConnector("popupOnFocus", !0)), a.away && w.connected && b.socketManager.sendToConnector("notifySocketStatusUpdate", "online"), a.away = !1))
					};
				this.popupOnBlurHandler = function () {
					b && (a.hasFocus = !1, w.connected && b.socketManager.sendToConnector("popupOnFocus", !1))
				};
				this.reconnectOnActivity = function () {
					b && !c && (c = !0, b.main.criticalRefresh(t.serverVersion))
				};
				this.away = this.active = this.hasFocus = !1;
				this.interval = this.awayTimeout = this.inactivityTimeout = null;
				this.initActivityReset = function () {
					a.resetTimeout();
					a.setupListeners();
					a.interval = setInterval(function () {
						a.active && (a.resetTimeout(), a.active = !1)
					}, 1E4)
				}
			};
			C.prototype.resetTimeout = function () {
				var a = this;
				clearTimeout(this.inactivityTimeout);
				clearTimeout(this.awayTimeout);
				this.awayTimeout = setTimeout(function () {
					!a.away && b && (a.away = !0, b && (b.socketManager && w.connected) && b.socketManager.sendToConnector("notifySocketStatusUpdate",
						"away"))
				}, 6E5);
				b && !b.socketManager.isForcedDisconnect() && (this.inactivityTimeout = setTimeout(function () {
					a.inactivityTimeoutHandler()
				}, 12E5))
			};
			C.prototype.inactivityTimeoutHandler = function () {
				b && (b.socketManager.disconnectConnector(), k.isEmbedded ? b.formHandler.openForm("inactivityOverlay") : t.chatWindowState("min"), x ? (b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, "touchmove", this.reconnectOnActivity, "acitmmousemove"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, b.viewHandler.clickEvent,
					this.reconnectOnActivity, "acitmclick"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, "keydown", this.reconnectOnActivity, "acitmkeydown"), b.eventHandler.listen(document, "touchmove", this.reconnectOnActivity, "acitmousemove"), b.eventHandler.listen(document, b.viewHandler.clickEvent, this.reconnectOnActivity, "acitclick"), b.eventHandler.listen(document, "keydown", this.reconnectOnActivity, "acitkeydown")) : (b.eventHandler.listen(document, "mousemove", this.reconnectOnActivity, "acitmousemove"), b.eventHandler.listen(document,
					"click", this.reconnectOnActivity, "acitclick"), b.eventHandler.listen(document, "keydown", this.reconnectOnActivity, "acitkeydown"), document.onfocusin ? b.eventHandler.listen(document, "focusin", this.reconnectOnActivity, "acitfocus") : b.eventHandler.listen(h, "focus", this.reconnectOnActivity, "acitfocus")))
			};
			C.prototype.cleanUp = function () {
				clearInterval(this.interval);
				clearTimeout(this.inactivityTimeout);
				clearTimeout(this.awayTimeout)
			};
			C.prototype.setupListeners = function () {
				x ? (b.eventHandler.listen(b.viewHandler.chatContainer.documentRef,
					"touchmove", this.onActivityHandler, "acmmousemove"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, b.viewHandler.clickEvent, this.onActivityHandler, "acmclick"), b.eventHandler.listen(b.viewHandler.chatContainer.documentRef, "keydown", this.onActivityHandler, "acmkeydown"), b.eventHandler.listen(document, "touchmove", this.onActivityHandler, "acmousemove"), b.eventHandler.listen(document, b.viewHandler.clickEvent, this.onActivityHandler, "acclick"), b.eventHandler.listen(document, "keydown", this.onActivityHandler,
					"ackeydown")) : k.isPopup ? (document.onfocusin ? (b.eventHandler.listen(document, "focusin", this.popupOnFocusHandler, "acfocus"), b.eventHandler.listen(document, "focusout", this.popupOnBlurHandler, "acblur")) : (b.eventHandler.listen(h, "focus", this.popupOnFocusHandler, "acfocus"), b.eventHandler.listen(h, "blur", this.popupOnBlurHandler, "acblur")), b.eventHandler.listen(document, "click", this.popupOnFocusHandler, "acphclick"), b.eventHandler.listen(document, "keydown", this.popupOnFocusHandler, "acphkeydown")) : (b.eventHandler.listen(document,
					"mousemove", this.onActivityHandler, "acmousemove"), b.eventHandler.listen(document, "click", this.onActivityHandler, "acclick"), b.eventHandler.listen(document, "keydown", this.onActivityHandler, "ackeydown"))
			};
			S = function () {
				var a = this;
				this.originalPageStatus = this.agentCountSubscription = this.setupTimeout = null;
				this.utcOffset = 0;
				b.eventEmitter.on("scheduleUpdate", function (b) {
					k.widgetId === b.wdgt && (k.schedule = null !== b.ws ? b.ws.sch : null, k.scheduleTimezone = {}, null !== b.wstz && (k.scheduleTimezone = {
						utc: b.wstz.utc,
						tzo: b.wstz.offset
					}),
						a.setup())
				})
			};
			S.prototype.setup = function () {
				clearTimeout(this.setupTimeout);
				null === this.originalPageStatus && (this.originalPageStatus = t.pageStatus());
				k.schedule ? (this.utcOffset = -1 * ((new Date).getTime() - k.scheduleTimezone.utc), this.calculate()) : t.pageStatus(this.originalPageStatus)
			};
			S.prototype.calculate = function () {
				var a, b, c = this;
				k.schedule && (clearTimeout(this.setupTimeout), a = new Date, localOffset = -6E4 * a.getTimezoneOffset(), b = k.scheduleTimezone.tzo - localOffset, a = new Date(a.getTime() + this.utcOffset + b),
					b = a.getDay(), todayStartValue = k.schedule[b].start, todayEndValue = k.schedule[b].end, tomorrow = 6 === b ? 0 : b + 1, tomorrowStartValue = k.schedule[tomorrow].start, since = 36E5 * a.getHours() + 6E4 * a.getMinutes(), 0 === todayStartValue && 0 === todayEndValue ? (this.goOffline(), this.setupTimeout = setTimeout(function () {
					c.calculate()
				}, 864E5 - since + tomorrowStartValue)) : since < todayStartValue ? (this.goOffline(), this.setupTimeout = setTimeout(function () {
					c.calculate()
				}, todayStartValue - since)) : since >= todayEndValue ? (this.goOffline(), this.setupTimeout =
					setTimeout(function () {
						c.calculate()
					}, 864E5 - since + tomorrowStartValue)) : (this.goOnline(), this.setupTimeout = setTimeout(function () {
					c.calculate()
				}, todayEndValue - since)))
			};
			S.prototype.goOnline = function () {
				"offline" !== this.originalPageStatus && (t.pageStatus(this.originalPageStatus), null !== this.agentCountSubscription && (b.agents.totalAgents.unsubscribe(this.agentCountSubscription), this.agentCountSubscription = null))
			};
			S.prototype.goOffline = function () {
				0 !== b.agents.totalAgents() ? this.agentCountSubscription = b.agents.totalAgents.subscribe(function (a) {
					0 ===
					a && t.pageStatus("offline")
				}) : t.pageStatus("offline")
			};
			S.prototype.clearTimer = function () {
				clearTimeout(this.setupTimeout);
				this.originalPageStatus = this.setupTimeout = null
			};
			D = function () {
				this.registerTime = 0;
				this.registerStart = null;
				this.maxRetrycount = 3;
				this.retryCount = 0;
				this.registerData = this.registerDelayTimeout = this.connectionCookieInterval = this.requestCancelTimeout = this.previousRegisterCall = null;
				this.registerStarted = !1;
				this.retryDelay = null;
				this.retryInitialDelay = 30;
				this.retryMultiplier = 1.5;
				this.minRandom =
					0.5;
				this.maxRandom = 1.5;
				this.maxDelay = 120;
				this.retryRegisterTimeout = null
			};
			D.prototype.register = function () {
				this.registerStarted = !0;
				this.clearTimers();
				this.prepareData()
			};
			D.prototype.prepareData = function () {
				var a, c, f, d = "", e = "";
				if (b) {
					a = da.getSessionInformation();
					c = t.sessionKey || void 0;
					a.length && (e = a[0]);
					f = (new Date).getTimezoneOffset();
					if (-900 > f || 900 < f) f = 0;
					this.registerData ? (this.registerData.k = c, this.registerData.d = e) : (d = b.browserData.getReferredSearchEngine(), a = "undefined" === typeof $_Tawk_WidgetId ? "default" :
						$_Tawk_WidgetId, this.registerData = {
						a: W.pageId || "",
						k: c,
						w: a,
						d: e,
						mb: x ? 1 : 0,
						m: f,
						s: d,
						q: "",
						r: document.referrer
					});
					b.main.maximize && (this.registerData.h = "max");
					this.registerData.wv = k.widgetVersion;
					k.isPopup && (t.transferKey && t.sessionKey) && (this.registerData.tk = t.transferKey);
					b.main.previousSessionKey = this.registerData.k;
					this.getUUID()
				}
			};
			D.prototype.getUUID = function () {
				var a, c, d, e = !1, g = Infinity, k = b.punycode.toASCII(h.location.hostname);
				"www." === k.substring(0, 4) && (k = k.replace("www.", ""));
				a = da.getStoredUUID();
				for (var l = 0, m = a.length; l < m; l++) {
					var p, r, s, t;
					t = da.parseSessionInformation(a[l]);
					if (4 === t.length) if (p = t[0], r = t[1], s = t[2], t = t[3], "e" === p) {
						if (k === r) {
							c = s;
							d = t;
							break
						}
					} else "p" === p && (p = k.match(r)) && (k.substr(p.index) === r && p.index < g) && (g = p.index, c = s, d = t, e = !0)
				}
				this.registerData && (this.registerData.u = c, this.registerData.uv = d, e && (this.registerData.uw = !0));
				this.startRegister()
			};
			D.prototype.abort = function () {
				null !== this.previousRegisterCall && (pa.abort(this.previousRegisterCall), this.previousRegisterCall = null)
			};
			D.prototype.setupRegisterTimeout =
				function () {
					var a = this;
					clearTimeout(this.requestCancelTimeout);
					this.requestCancelTimeout = setTimeout(function () {
						a.abort();
						a.retryRegister()
					}, 9E4)
				};
			D.prototype.startRegister = function () {
				var a = da.getHTTPCookie("TawkConnectionTime"), a = parseInt(a.length ? a[0] : null, 10);
				!a || 1E3 < (new Date).getTime() - (new Date(a)).getTime() ? (da.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0), this.connectionCookieInterval = setInterval(function () {
						da.setHTTPCookie("TawkConnectionTime", (new Date).getTime(), !0)
					}, 100), this.doRegister()) :
					this.delayRegister()
			};
			D.prototype.delayRegister = function () {
				var a = this;
				clearTimeout(this.registerDelayTimeout);
				this.registerDelayTimeout = setTimeout(function () {
					a.register()
				}, 1E3)
			};
			D.prototype.doRegister = function () {
				var a = t.visitorAppServer + "/register/", c = this, d = function (a, d) {
					if (!a && !d) return c.clearTimers(), c.retryRegister();
					b && (d = m.trim(d), b.main.begin($_TAWK_JSON.parse(d)))
				};
				this.registerStart = (new Date).getTime();
				this.setupRegisterTimeout();
				a += this.registerStart;
				this.previousRegisterCall = !pa.hasCORS ||
				"symbian" === x || "android" === x && 4 === F ? pa.jsonpLoad(a, this.registerData, d) : pa.xhrRequest(a, this.registerData, d)
			};
			D.prototype.retryRegister = function () {
				var a, c = this;
				null === this.retryRegisterTimeout && (this.retryCount >= this.maxRetrycount ? (this.clearTimers(), b && b.main.hideWidget()) : (this.retryCount++, a = this.getRetryWaitDelay(), this.retryRegisterTimeout = setTimeout(function () {
					c.register()
				}, a)))
			};
			D.prototype.resetRetryCount = function () {
				this.retryCount = 0;
				this.retryDelay = 10
			};
			D.prototype.getRetryWaitDelay = function () {
				var a,
					b = Math.random() * (this.maxRandom - this.minRandom) + this.minRandom;
				null === this.retryDelay ? this.retryDelay = this.retryInitialDelay : (a = this.retryDelay * this.retryMultiplier, this.retryDelay = this.retryDelay > this.maxDelay || a > this.maxDelay ? this.maxDelay : a);
				return 1E3 * Math.round(this.retryDelay * b)
			};
			D.prototype.clearTimers = function () {
				this.abort();
				clearTimeout(this.requestCancelTimeout);
				clearTimeout(this.registerDelayTimeout);
				clearTimeout(this.retryRegisterTimeout);
				clearInterval(this.connectionCookieInterval);
				da.setHTTPCookie("TawkConnectionTime",
					0, !0);
				this.connectionCookieInterval = this.requestCancelTimeout = this.registerDelayTimeout = this.retryRegisterTimeout = null
			};
			var R = function () {
			};
			R.prototype.processSettings = function (a) {
				var c, d, e, g = "", h = d = "", l = "";
				if (!(a.wv < k.widgetVersion)) {
					k.widgetVersion = a.wv;
					k.chatPosition(a.pos);
					x ? k.mobileWidget(a.mw || "round") : k.desktopWidget(a.dw || "full");
					k.maximizedDimensions({width: parseInt(a.w, 10) || 320, height: parseInt(a.h, 10) || 400});
					k.isDesktopRectangle() ? (c = parseInt(a.minw, 10) || 320, e = parseInt(a.minh, 10) || 40) : (c =
						62, e = 66);
					k.minimizedDimensions({width: c, height: e, position: a.pos});
					k.chatBubble(a.bbl);
					k.headerBgColor = a.thm.hbg || "#7fb06f";
					k.headerTxtColor = a.thm.htx || "#ffffff";
					k.agentTextBgColor = a.thm.aBblBg || m.shadeColor(k.headerBgColor, -0.1);
					k.agentTextColor = a.thm.aBblTx || "#ffffff";
					k.visitorTextBgColor = a.thm.vBblBg || "#e5e5e5";
					k.visitorTextColor = a.thm.vBblTx || "#333333";
					"undefined" !== typeof a.thm.topc ? k.topCorner = a.thm.topc : k.isTopPositioned() ? k.topCorner = 0 : k.topCorner = 8;
					"undefined" !== typeof a.thm.btmc ? k.bottomCorner =
						a.thm.btmc : k.isTopPositioned() ? k.bottomCorner = 8 : k.bottomCorner = 0;
					if (k.isEmbedded || k.isPopup) k.topCorner = 0, k.bottomCorner = 0;
					k.onClickAction = a.woc;
					k.hideWidgetOnLoad = a.hwol;
					k.hideWidgetOnOffline = a.hwof;
					k.hideWidget = !!a.dsw;
					k.showAgentBar = !a.hab;
					k.showWaitTime = !a.hwt;
					k.locale = a.lc;
					k.onlineGreeting = a.onlineGreeting;
					k.awayGreeting = a.awayGreeting;
					k.schedule = a.ws;
					k.soundOn(!a.dws);
					0 <= m.rtlLangTab.indexOf(k.locale) ? k.isRTL(!0) : k.isRTL(!1);
					this.processPrechatForm(a);
					this.processOfflineForm(a, a.grt);
					b && (a =
						".theme-background-color{background-color: " + k.headerBgColor + ";}", c = ".theme-text-color{color: " + k.headerTxtColor + ";}", b.MinifiedStyle && (e = k.topCorner + "px " + k.topCorner + "px " + k.bottomCorner + "px " + k.bottomCorner + "px !important;", d = d + a + c, d += ".border-corner{border-radius : " + e + "-moz-border-radius : " + e + "-webkit-border-radius : " + e + "};", d += ".bubble-text-color{color:" + (k.chatBubble() ? k.chatBubble().fgc : "#ffffff") + ";}", k.minStyle(d)), b.MaximizedStyle && (e = k.topCorner + "px " + k.topCorner + "px 0px 0px !important;",
						d = ".border-corner{border-radius : " + e + "-moz-border-radius : " + e + "-webkit-border-radius : " + e + "};", g = g + a + c, g += "button.theme-background-color:hover{background-color: " + m.shadeColor(k.headerBgColor, -0.3) + ";}", g += ".agentChatContainer .message{background-color: " + k.agentTextBgColor + " !important; color : " + k.agentTextColor + " !important;}", g += ".visitorChatContainer .message{background-color: " + k.visitorTextBgColor + " !important; color : " + k.visitorTextColor + " !important;}", g += d, k.maxStyle(g)), b.MinifiedMobileStyle &&
					(l = l + a + c, k.mobMinStyle(l)), b.MaximizedMobileStyle && (h = h + a + c, h += ".theme-background-color .button:hover, button.approveButton:active{background-color: " + m.shadeColor(k.headerBgColor, -0.3) + ";}", h += "#topBarContainer{border-color: " + m.shadeColor(k.headerBgColor, -0.3) + ";}", h += ".agentChatContainer .message{background-color: " + k.agentTextBgColor + " !important; color : " + k.agentTextColor + " !important;}", h += ".visitorChatContainer .message{background-color: " + k.visitorTextBgColor + " !important; color : " + k.visitorTextColor +
						" !important;}", k.mobMaxStyle(h)))
				}
			};
			R.prototype.processPrechatForm = function (a) {
				k.showPreChatForm = null !== a.prechatForm;
				k.showPreChatForm && (k.prechatOptions = a.prechatForm)
			};
			R.prototype.processOfflineForm = function (a) {
				a = a.offlineForm ? a.offlineForm : {
					text: b.languageParser.translate("form", "OfflineFormMessage"),
					shortMessage: b.languageParser.translate("status", "offline"),
					fields: [{label: b.languageParser.translate("form", "name"), isRequired: !0, type: "name"}, {
						label: b.languageParser.translate("form", "email"),
						isRequired: !0, type: "email"
					}, {label: b.languageParser.translate("form", "message"), isRequired: !0, type: "message"}]
				};
				k.offlineOptions = a
			};
			R.prototype.getPrechatFields = function () {
				return k.prechatOptions.fields
			};
			R.prototype.getOfflineFields = function () {
				return k.offlineOptions.fields
			};
			R.prototype.getShortMessage = function (a) {
				var b = null;
				"online" === a && k.onlineGreeting ? b = k.onlineGreeting.shortMessage : "away" === a && k.awayGreeting ? b = k.awayGreeting.shortMessage : "offline" === a && k.offlineOptions && (b = k.offlineOptions.shortMessage);
				return b
			};
			R.prototype.getLongMessage = function (a) {
				var b = null;
				"online" === a ? k.onlineGreeting && (b = k.onlineGreeting.longMessage) : "away" === a ? k.awayGreeting && (b = k.awayGreeting.longMessage) : k.offlineOptions && (b = k.offlineOptions.text);
				return m.transformGreetings(b)
			};
			e = new R;
			R = function () {
				var a = this;
				A.name.subscribe(function (a) {
					A.displayName(m.parseVisitorName(a))
				});
				b.eventEmitter.on("localeChanged", function () {
					A.displayName(m.parseVisitorName(A.name()))
				});
				b.eventEmitter.on("visitorDataUpdate", function (b) {
					a.updateVisitorInformation(b)
				});
				b.eventEmitter.on("requestEmailTranscript", function (a, c) {
					a.chatEndVersion = y.chatEndVersion;
					b.chatHandler.hasChatEnded ? b.socketManager.sendToConnector("notifyEndChatTranscript", a, c) : b.socketManager.sendToConnector("notifyEmailTranscript", a, c)
				})
			};
			R.prototype.updateVisitorUUID = function (a) {
				var b = $_TAWK_JSON.parse(a.uuids);
				A.uuid = a.uuid;
				A.uuidVer = a.uver || 0;
				b && (Object.keys(b.e).forEach(function (a) {
					A.uuids.push({isExact: !0, domain: a, uuid: b.e[a]})
				}), Object.keys(b.p).forEach(function (a) {
					A.uuids.push({
						isExact: !1,
						domain: a, uuid: b.p[a]
					})
				}));
				da.storeUUID()
			};
			R.prototype.updateVisitorInformation = function (a) {
				a.n && m.isString(a.n) && A.name(a.n);
				a.te && m.isString(a.te) && (A.transcriptEmail = a.te);
				a.e && m.isString(a.e) && A.email(a.e);
				a.vid && (A.visitorId = a.vid);
				a.dpt && m.isString(a.dpt) && (y.chatDepartment = a.dpt)
			};
			R.prototype.setNameFromForm = function (a) {
				b.visitorHandler.setNameValue(a);
				c.onVisitorNameChanged(a.name)
			};
			R.prototype.getNameValue = function () {
				return A.name() === A.displayName() ? A.name() : ""
			};
			R.prototype.setNameValue =
				function (a) {
					A.name(m.rawEncode(a.name))
				};
			R.prototype.getTranscriptEmailValue = function () {
				return A.transcriptEmail
			};
			R.prototype.getEmailValue = function () {
				return A.email() || A.transcriptEmail
			};
			R.prototype.setEmailValue = function (a) {
				A.email(a.email)
			};
			R.prototype.setTranscriptValue = function (a) {
				a.name && A.name(m.rawEncode(a.name));
				A.transcriptEmail = a.transcriptEmail
			};
			var U = function () {
				var a = this;
				b.eventEmitter.on("chatBubbleClosed", function () {
					t.chatBubbleClosed(!0)
				});
				b.eventEmitter.on("windowStateUpdated", function (a) {
					t.chatWindowState(a.cw)
				});
				b.eventEmitter.on("pageStatusUpdated", function (a) {
					var c;
					a && (c = a.ast) && (m.isString(c) && m.isArray(a.dptst)) && a.asver > t.pageStatusVersion && (b.scheduler.originalPageStatus = a.ast, t.pageStatusVersion = a.asver, t.departments = a.dptst, t.pageStatus(a.ast), b.scheduler.calculate())
				});
				b.eventEmitter.on("submitPrechatForm", function (b, c) {
					a.formatPrechatData(b, c)
				});
				b.eventEmitter.on("submitOfflineForm", function (b, c) {
					a.formatOfflineData(b, c)
				});
				t.pageStatus.subscribe(function (a) {
					c.onStatusChange(a)
				})
			};
			U.prototype.closeBubble =
				function () {
					t.chatBubbleClosed(!0);
					b.socketManager.sendToConnector("notifyChatBubbleClosed")
				};
			U.prototype.getDeparmentOptions = function () {
				var a, c, d, e = [], g = t.departments;
				a = 0;
				for (c = g.length; a < c; a++) d = g[a], e.push({
					text: m.rawDecode(d.n) + " (" + b.languageParser.translate("status", d.st) + ")",
					value: d.did,
					selected: y.chatDepartment === d.did
				});
				return e
			};
			U.prototype.getDeparmentName = function (a) {
				var b, c, d = t.departments;
				b = 0;
				for (c = d.length; b < c; b++) if (d[b].did === a) return m.rawDecode(d[b].n);
				return a
			};
			U.prototype.formatFormData =
				function (a, b) {
					var c, d, e, g = {questions: []};
					c = 0;
					for (d = b.length; c < d; c++) {
						e = b[c];
						"name" === e.type && (g.name = a[e.id]);
						"email" === e.type && (g.email = a[e.id]);
						if ("department" === e.type) {
							if (!a[e.id] || "0" == a[e.id]) continue;
							g.department = a[e.id];
							a[e.id] = this.getDeparmentName(a[e.id])
						}
						a[e.id] && 0 !== a[e.id].length && (m.isArray(a[e.id]) ? g.questions.push({
							label: e.label,
							answer: a[e.id].join(", ")
						}) : g.questions.push({label: e.label, answer: a[e.id]}))
					}
					return g
				};
			U.prototype.formatPrechatData = function (a, d) {
				var f = this, g = this.formatFormData(a,
					e.getPrechatFields());
				b.socketManager.sendToConnector("notifyPrechat", g, function (a) {
					if (a) return d(a, g);
					c.onPrechatSubmit(g.questions);
					f.handlePrechatSave(g, d)
				})
			};
			U.prototype.handlePrechatSave = function (a, c) {
				var d, e, g = "";
				a.name && b.visitorHandler.setNameValue(a);
				a.email && b.visitorHandler.setEmailValue(a);
				t.prechatFormSubmitted = !0;
				if (0 === a.questions.length) return c(null, a);
				if (0 < a.questions.length) for (d = 0, e = a.questions.length; d < e; d++) g += m.rawDecode(a.questions[d].label) + " : " + a.questions[d].answer, d !==
				e - 1 && (g += "\r\n");
				b.chatHandler.sendMessageToServer(g, null, function (d) {
					d.error || (b.chatHandler.prepareMessage({
						ut: "v",
						t: "c",
						m: m.rawEncode(g),
						co: new Date,
						uid: A.visitorId
					}, !1, !1, !0), b.viewHandler.addWaitTime());
					c(d.error, a)
				})
			};
			U.prototype.formatOfflineData = function (a, d) {
				var f = this.formatFormData(a, e.getOfflineFields());
				f.questions.unshift({
					label: b.languageParser.translate("form", "SubmittedFrom"),
					answer: h.location.href
				});
				b.socketManager.sendToConnector("notifyOfflineMessage", f, function (a) {
					if (a) return d(a,
						f);
					c.onOfflineSubmit(f);
					d(null, f)
				})
			};
			U.prototype.notifyWindowState = function (a) {
				t.chatWindowState(a);
				b.socketManager.sendToConnector("notifyWindowState", a)
			};
			U.prototype.addEvent = function (a, c, d) {
				var e;
				"function" === typeof c && (d = c, c = null);
				d = d || function () {
				};
				e = this.secureWrapper({});
				e.name = a;
				e.data = c;
				b.socketManager.sendToConnector("addEvent", e, d)
			};
			U.prototype.setAttributes = function (a, d, f) {
				f = f || function () {
				};
				if (d && (a.name || a.email)) {
					if (!a.name || !a.email || !a.hash) return f("UNAUTHORIZED_API_CALL");
					c.visitor =
						{name: a.name, email: a.email, hash: a.hash}
				} else a = this.secureWrapper(a);
				b.socketManager.sendToConnector("setAttributes", a, function (c) {
					c || (a.name && b.visitorHandler.setNameValue(a), a.email && b.visitorHandler.setEmailValue(a));
					f(c)
				})
			};
			U.prototype.addTags = function (a, c) {
				var d;
				c = c || function () {
				};
				d = this.secureWrapper({});
				d.tags = a;
				b.socketManager.sendToConnector("addTags", d, c)
			};
			U.prototype.removeTags = function (a, c) {
				var d;
				c = c || function () {
				};
				d = this.secureWrapper({});
				d.tags = a;
				b.socketManager.sendToConnector("removeTags",
					d, c)
			};
			U.prototype.secureWrapper = function (a) {
				"undefined" === a && (a = {});
				c && (c.visitor && "undefined" !== typeof c.visitor.hash && null !== c.visitor.hash && "undefined" !== typeof c.visitor.email && null !== c.visitor.email) && (a.email = c.visitor.email, a.hash = c.visitor.hash);
				return a
			};
			U.prototype.setForeignKey = function (a, c) {
				var d;
				c = c || function () {
				};
				d = this.secureWrapper({});
				d.key = a;
				b.socketManager.sendToConnector("saveForeignKey", d, c)
			};
			U.prototype.setConversionId = function (a, c) {
				var d;
				c = c || function () {
				};
				d = this.secureWrapper({});
				d.key = a;
				b.socketManager.sendToConnector("saveConversion", d, c)
			};
			U.prototype.setVisitorAttributes = function () {
				var a = {};
				c && c.visitor && (c.visitor.name && (a.name = c.visitor.name), c.visitor.email && (a.email = c.visitor.email), this.setAttributes(a, !1))
			};
			var J = function () {
				var a = this;
				this.agentHasMessaged = this.visitorHasMessaged = !1;
				this.messageBuffer = [];
				this.messages = {};
				this.agentsTyping = [];
				this.agentProfilesTyping = [];
				this.previousTextTime = this.previousText = this.lastMessageOwner = null;
				this.hasChatEnded = !1;
				this.hasChatStarted =
					r.observable(!1);
				this.hasWebRTCall = this.hasBeenMaximizedOnce = !1;
				b.eventEmitter.on("syncConversation", function (b) {
					a.conversationUpdate(b)
				});
				b.eventEmitter.on("incomingMessage", function (b) {
					a.handleMessageFromServer(b)
				});
				b.eventEmitter.on("agentIsTyping", function (b) {
					a.handleAgentTyping(b.rsc)
				});
				b.eventEmitter.on("agentStopedTyping", function (b) {
					a.handleAgentStoppedTyping(b.rsc)
				});
				b.eventEmitter.on("newChatRating", function (b) {
					parseInt(b.rt, 10);
					a.changeRating(b.rsc, !0)
				});
				b.eventEmitter.on("webrtcCallStatus",
					function (a) {
						b.viewHandler.subscribeCallUpdate(a.clid)
					})
			};
			J.prototype.parseHistory = function () {
				var a, c, d;
				(new Date).getTime();
				var e = d = 0;
				this.noRedraw = !0;
				y.chatEndVersion = 1;
				a = 0;
				for (c = y.chatHistory.length; a < c; a++) "CHAT_ENDED" === y.chatHistory[a].m && (d = a + 1, y.chatEndVersion++);
				a = d;
				for (c = y.chatHistory.length; a < c; a++) if (d = y.chatHistory[a], !d.md || d.md && !d.md.ao) "v" !== d.ut || (this.visitorHasMessaged || "c" !== d.t) || (e = (new Date).getTime() - m.getMilliseconds(d.co)), "WEBRTC_CALL" === d.m && d.md && d.md.webrtc ? (this.hasWebRTCall =
					!0, b.viewHandler.subscribeCallUpdate(d.md.clid)) : this.prepareMessage(d, !0, !1, !1);
				this.noRedraw = !1;
				this.visitorHasMessaged && (!this.agentHasMessaged && k.showWaitTime) && (t.waitTime = t.waitTime < e ? 6E4 : t.waitTime - e, b.viewHandler.addWaitTime());
				this.hasChatStarted(this.visitorHasMessaged)
			};
			J.prototype.handleIndicator = function () {
				b.viewHandler.indicator.show();
				x && (b.viewHandler.hasChatStarted = !0)
			};
			J.prototype.handleMessageFromServer = function (a) {
				var d = null;
				if (a.md && a.md.ao) return y.chatVersion = a.cver;
				if ("offline" ===
					t.pageStatus()) if ("a" === a.ut) t.pageStatus("online"); else return;
				if (!y.chatSynced) return y.chatBuffer.push(a);
				this.hasChatEnded && this.startNewChat();
				if ("WEBRTC_CALL" === a.m && a.md && a.md.webrtc) this.hasWebRTCall = !0; else if ("CHAT_ENDED" !== a.m || this.hasChatEnded) {
					"v" === a.ut && "c" === a.t && b.viewHandler.addWaitTime();
					k.isPopup || ("c" !== a.t || b.viewHandler.isMaximized || "v" === a.ut || k.isEmbedded) || ("max" !== k.onClickAction || this.agentHasMessaged || x || this.hasBeenMaximizedOnce ? k.hideWidgetOnLoad || (b.viewHandler.indicator.show(),
					x && (b.viewHandler.hasChatStarted = !0)) : (b.viewHandler.userAction = !1, b.sessionHandler.notifyWindowState("max"), this.hasBeenMaximizedOnce = !0));
					y.chatVersion = a.cver;
					"s" === a.ut || ("c" !== a.t || this.hasChatStarted()) || (this.hasChatStarted("v" === a.ut), c.onChatStarted());
					if ("c" === a.t) if ("a" === a.ut) if (a.md && a.md.file) c.onFileUpload("https://tawkto.link/" + a.md.file.name); else c.onChatMessageAgent(a.m); else {
						if ("s" === a.ut) c.onChatMessageSystem(a.m)
					} else if ("n" === a.t) if ("AGENT_JOIN_CONVERSATION" === a.m) a.md && (a.md.pi &&
						a.md.pi.length) && (d = "https://s3.amazonaws.com/talk-pi/" + a.md.pi), c.onAgentJoinChat({
						name: a.n,
						position: a.md.pst,
						image: d,
						id: a.uid
					}); else if ("AGENT_LEFT_CONVERSATION" === a.m) c.onAgentLeaveChat({name: a.n, id: a.uid});
					this.prepareMessage(a, !1);
					b.scheduler.calculate();
					k.showPreChatForm && "preChatForm" === b.formHandler.currentForm && b.formHandler.closeForm()
				} else this.endChat(a.md.cev)
			};
			J.prototype.prepareMessage = function (a, c, d, e) {
				var g, h, k, l, m = !0;
				"n" === a.t && "v" === a.ut ? "VISITOR_RATING" === a.m && this.changeRating(a.md.rt,
					!0) : ("v" === a.ut ? (g = A.displayName(), h = a.uid) : (g = a.n, "a" === a.ut && (h = y.profiles[a.md.rsc])), "n" !== a.t || "AGENT_JOIN_CONVERSATION" !== a.m && "AGENT_LEFT_CONVERSATION" !== a.m || (this.hasChatStarted() || this.visitorHasMessaged || this.agentHasMessaged || Object.keys(this.messages).length || this.hasWebRTCall ? (m = !1, b.agents.updateAgentPresence(a.m, a.md, a.n, a.md.rsc, !d)) : (m = b.agents.updateAgentPresence(a.m, a.md, a.n, a.md.rsc, !d), k = b.languageParser.translate("chat", a.m, {n: "<b>" + a.n + "</b>"}))), x && (h && y.agentProfiles[h]) &&
				(l = y.agentProfiles[h].pi), m && (k || (k = this.parseText(a.m)), void 0 === c && (c = !0), a.messageId = b.viewHandler.appendMessage({
					message: k,
					name: g,
					type: a.t,
					time: a.co,
					data: a.md,
					isPending: !1,
					senderType: a.ut,
					ownerId: h,
					dontPlaySound: c,
					profileImg: l,
					reDisplay: e
				}), e || y.chatOrder++, this.messages[y.chatOrder] = a))
			};
			J.prototype.parseText = function (a) {
				if (a) return a = a.replace(m.regLineBreaks, m.br), a = this.createUrl(a.split(/\s/), " ")
			};
			J.prototype.createUrl = function (a, c) {
				function d(a) {
					return b.chatHandler.parseUrl(a)
				}

				function e(a) {
					return b.chatHandler.parseEmail(a)
				}

				var g, h, k;
				h = 0;
				for (k = a.length; h < k; h++) -1 !== a[h].indexOf(m.br) ? (g = a[h].split(m.regBr), a[h] = this.createUrl(g, m.br)) : a[h].match(m.regEmailMatch) ? a[h] = a[h].replace(m.regEmailMatch, e) : (a[h] = a[h].replace(m.regMatchUrl, d), a[h] = a[h].replace(m.regMatchIp, d));
				return a.join(c)
			};
			J.prototype.parseUrl = function (a) {
				var b, c = "";
				if ("undefined" !== typeof P && P.unifyUnicode(a) !== a) return a;
				a.match(m.regEmailMatch) && (c = "mailto:");
				if ("mailto:" === c) return b = a.match(m.regEmailMatch)[0], -1 !== b.indexOf("mailto") && (c = ""), a.replace(m.regEmailMatch,
					'<a href="' + (c + b) + '" title="' + (c + b) + '" style="word-wrap:break-word; white-space:normal;>' + b + "</a> ");
				0 !== a.toLowerCase().indexOf("http") && 0 !== a.toLowerCase().indexOf("ftp") && (c = "http://");
				return '<a target="_blank" href="' + (c + a) + '" title="' + (c + a) + '" style="word-wrap:break-word; white-space:normal;">' + a + "</a> "
			};
			J.prototype.parseEmail = function (a) {
				var b = "";
				if ("undefined" !== typeof P && P.unifyUnicode(a) !== a) return a;
				-1 === a.indexOf("mailto") && (b = "mailto:");
				return '<a href="' + (b + a) + '" title="' + (b + a) + '">' +
					a + "</a> "
			};
			J.prototype.sendTextPreview = function (a) {
				var c, d, e = this;
				c = b.eventHandler.getTargetElement(a);
				if (13 === a.keyCode && !a.shiftKey) return b.eventHandler.cancelEvent(a), d = m.trim(c.value), c.value = "", this.sendMessage(d);
				this.keyDownTimeout || (this.keyDownTimeout = setTimeout(function () {
					d = m.trim(c.value);
					"undefined" !== typeof P && (d = P.toShort(d));
					b.socketManager.sendToConnector("notifyMessagePreview", d);
					clearTimeout(e.keyDownTimeout);
					e.keyDownTimeout = 0
				}, 1E3))
			};
			J.prototype.sendMessage = function (a, c, d) {
				var e =
					(new Date).getTime();
				a = m.trim(a);
				clearTimeout(this.keyDownTimeout);
				this.keyDownTimeout = 0;
				if (!a) return d ? d() : !1;
				"undefined" !== typeof P && (a = P.toShort(a));
				this.previousText && (this.previousTextTime && this.previousText === a && 500 > e - this.previousTextTime) && b.loggingHandler.logIncident("Double message occured", {
					previousText: this.previousText,
					currentText: a,
					currentT: e,
					previousT: this.previousTextTime
				});
				this.previousTextTime = e;
				this.previousText = a;
				c = !!c;
				c = b.viewHandler.appendMessage({
					message: this.parseText(m.rawEncode(a)),
					name: A.displayName(),
					type: "c",
					time: new Date,
					isPending: !0,
					senderType: "v",
					ownerId: A.visitorId,
					dontPlaySound: c
				});
				this.sendMessageToServer(a, c, d)
			};
			J.prototype.sendMessageToServer = function (a, d, f) {
				var e = this, g;
				f = f || function (a) {
					b.viewHandler.handleAcknowledgment(a)
				};
				b.socketManager.sendToConnector("sendChatMessage", a, function (b, h, k) {
					b || (g = ++y.chatOrder, e.messages[g] = {
						ut: "v",
						t: "c",
						m: m.rawEncode(a),
						co: h,
						messageId: d,
						uid: A.visitorId
					}, y.chatVersion = k, e.hasChatStarted() || "offline" === t.pageStatus() || (e.hasChatStarted(!0),
						c.onChatStarted()), c.onChatMessageVisitor(a));
					f({error: b, messageId: d, order: g})
				})
			};
			J.prototype.conversationUpdate = function (a) {
				a = a || {};
				var c, d, e = a.cver || 0, g = a.c || [];
				d = y.chatBuffer;
				y.chatSynced = !0;
				if (!(y.chatVersion >= e)) {
					a = 0;
					for (c = d.length; a < c; a++) d[a].cver > e && g.push(d[a]);
					a = 0;
					for (c = g.length; a < c; a++) d = g[a], d.md && d.md.ao || this.prepareMessage(d, !1);
					this.visitorHasMessaged && (!this.agentHasMessaged && k.showWaitTime) && b.viewHandler.addWaitTime();
					y.chatVersion = e;
					this.isScrollbar = b.viewHandler.isChatScrollbar();
					b.viewHandler.scrollToBottom()
				}
			};
			J.prototype.handleAgentTyping = function (a) {
				var c = y.profiles[a];
				c && (y.agentProfiles[c] && !this.agentsTyping[a]) && (this.agentsTyping[a] = !0, this.agentProfilesTyping[c] ? this.agentProfilesTyping[c]++ : (this.agentProfilesTyping[c] = 1, b.viewHandler.appendAgentIsTypingElement(c)))
			};
			J.prototype.handleAgentStoppedTyping = function (a) {
				var c = y.profiles[a];
				this.agentsTyping[a] && delete this.agentsTyping[a];
				!this.agentProfilesTyping[c] || 0 < --this.agentProfilesTyping[c] || (delete this.agentProfilesTyping[c],
					b.viewHandler.removeAgentTypingElement(c))
			};
			J.prototype.changeRating = function (a, d) {
				y.rating() === a && (a = 0);
				y.rating(a);
				d || (b.socketManager.sendToConnector("setRating", a), c.onChatSatisfaction(y.rating()))
			};
			J.prototype.toggleSound = function (a) {
				var c = !k.soundOn();
				void 0 !== a && (c = a);
				k.soundOn(c);
				void 0 === a && b.socketManager.sendToConnector("toggleSound", c)
			};
			J.prototype.clearChatMessages = function () {
				this.agentHasMessaged = this.visitorHasMessaged = !1;
				this.messageBuffer = [];
				this.messages = {};
				this.agentsTyping = [];
				this.agentProfilesTyping = [];
				this.lastMessageOwner = null;
				y.chatOrder = 0;
				y.chatSynced = !1;
				y.chatBuffer = []
			};
			J.prototype.startNewChat = function () {
				this.clearChatMessages();
				b.viewHandler.resetView();
				b.viewHandler.handleRestartChat();
				y.chatSynced = !0;
				x || ("max" === t.chatWindowState() ? b.viewHandler.maximizeWidget() : b.viewHandler.minimizeWidget());
				this.hasChatEnded = !1
			};
			J.prototype.endChat = function (a) {
				b.viewHandler.handleEndChat();
				b.agents.clearAgents();
				this.hasChatEnded = !0;
				this.hasChatStarted(!1);
				y.chatEndVersion =
					a;
				c.onChatEnded()
			};
			J.prototype.sendFileMessage = function (a) {
				var d = this,
					f = {fileName: a.filename, name: a.name, type: a.extension, mimeType: a.mimeType, size: a.size};
				b.socketManager.sendToConnector("fileUploadMessage", f, function (e, g, h) {
					e || (b.viewHandler.fileUploaded(a.handle), f.fileName = m.rawEncode(f.fileName), messageId = b.viewHandler.appendMessage({
						message: "FILE",
						name: A.displayName(),
						type: "c",
						time: g,
						isPending: !1,
						senderType: "v",
						ownerId: A.visitorId,
						dontPlaySound: !0,
						data: {file: f}
					}), chatOrder = ++y.chatOrder, d.messages[chatOrder] =
						{
							ut: "v",
							t: "c",
							m: "FILE",
							co: g,
							messageId: messageId,
							uid: A.visitorId,
							md: {file: f}
						}, y.chatVersion = h, c.onFileUpload("https://tawkto.link/" + f.name))
				})
			};
			J.prototype.isChatOngoing = function () {
				return !this.hasChatEnded && this.visitorHasMessaged && 0 < b.agents.totalAgents()
			};
			J.prototype.isVisitorEngaged = function () {
				return !this.hasChatEnded && this.visitorHasMessaged
			};
			J.prototype.triggerEndChat = function () {
				var a = this;
				b.socketManager.sendToConnector("endVisitorChat", {}, function (b, c) {
					b || a.endChat(c.chatEndVersion)
				})
			};
			var ka =
				function () {
					this.agentsCount = 0;
					this.totalAgents = r.observable(0)
				};
			ka.prototype.updateAgentPresence = function (a, b, c, d, e) {
				if (!k.showAgentBar) return !0;
				if ("AGENT_JOIN_CONVERSATION" !== a && "AGENT_LEFT_CONVERSATION" !== a) return !1;
				switch (a) {
					case "AGENT_JOIN_CONVERSATION":
						return this.addAgentToList(b, c, d, e);
					case "AGENT_LEFT_CONVERSATION":
						return this.removeAgentFromList(b, d, e)
				}
			};
			ka.prototype.addAgentToList = function (a, c, d, e) {
				var g = y.agents[d];
				if (g) if (g.seq.time < a.seq.time || g.seq.time === a.seq.time && g.seq.inc < a.seq.inc) {
					g.seq =
						a.seq;
					if (g.pid === a.pid) return !1;
					this.changeAgentProfile(g.pid, e);
					g.pid = a.pid;
					y.profiles[d] = a.pid
				} else return !1; else y.agents[d] = a, y.profiles[d] = a.pid;
				if (!a.pid) return !1;
				this.totalAgents(this.totalAgents() + 1);
				if ("undefined" !== typeof y.agentProfiles[a.pid]) return y.agentProfiles[a.pid].pi = a.pi, y.agentProfiles[a.pid].count++, !1;
				c = {pi: a.pi, pst: a.pst || "", pid: a.pid, n: c, count: 1};
				y.agentProfiles[a.pid] = c;
				e && b.viewHandler.appendAgent(c);
				return !0
			};
			ka.prototype.changeAgentProfile = function (a, c) {
				var d;
				d = y.agentProfiles[a];
				this.decrementProfileCount(a, c) && c && (d = {
					message: b.languageParser.translate("chat", "AGENT_LEFT_CONVERSATION", {n: "<b>" + d.n + "</b>"}),
					name: "",
					type: "n",
					time: new Date,
					isPending: !1,
					senderType: "a",
					ownerId: "",
					dontPlaySound: !0
				}, y.chatOrder++, b.chatHandler.messages[y.chatOrder] = d, b.viewHandler.appendMessage(d))
			};
			ka.prototype.removeAgentFromList = function (a, b, c) {
				var d = y.agents[b];
				if (!d) return y.agents[b] = a, !1;
				b = d.pid;
				if (d.seq.time < a.seq.time || d.seq.time === a.seq.time && d.seq.inc < a.seq.inc) d.seq = a.seq, d.pid = null;
				else return !1;
				this.totalAgents(this.totalAgents() - 1);
				return this.decrementProfileCount(b, c)
			};
			ka.prototype.decrementProfileCount = function (a, c) {
				var d = y.agentProfiles[a];
				if (d) return d.count--, 1 > d.count ? (delete y.agentProfiles[a], c && b.viewHandler.removeAgent(a), !0) : !1
			};
			ka.prototype.clearAgents = function () {
				this.agentsCount = 0;
				this.totalAgents(0);
				y.agentProfiles = {};
				y.agents = {};
				y.profiles = {};
				b.viewHandler.clearAgentFooter();
				b.viewHandler.clearAgentHeader()
			};
			var ha = function () {
				var a = this;
				this.stack = [];
				this.socketConnector =
					new ma;
				this.stackLock = !1;
				b.eventEmitter.on("socketReady", function () {
					a.clearStack()
				})
			};
			ha.prototype.initConnector = function () {
				this.socketConnector.init()
			};
			ha.prototype.sendToConnector = function (a, b, c) {
				if (w.connected) if (void 0 !== c || "function" === typeof b) this.safeCallback(a, b, c); else try {
					this.socketConnector.emit(a, b, c)
				} catch (d) {
					p.handleError("Unable to emit to socket connector in sendToConnector for command : " + a + " with data :" + $_TAWK_JSON.stringify(b), d.fileName, d.lineNumber, d.stack)
				} else this.addToStack(a,
					b, c)
			};
			ha.prototype.addToStack = function (a, b, c) {
				var d = this;
				if (this.stackLock) return setTimeout(function () {
					d.addToStack(a, b, c)
				}, 100);
				this.stack.push({command: a, data: b, callback: c})
			};
			ha.prototype.clearStack = function () {
				var a = this;
				this.stackLock = !0;
				this.stack.forEach(function (b) {
					a.sendToConnector(b.command, b.data, b.callback)
				});
				this.stack = [];
				this.stackLock = !1
			};
			ha.prototype.safeCallback = function (a, b, c) {
				var d, e;
				"function" === typeof b && (c = b, b = null);
				d = setTimeout(function () {
					c(!0);
					throw Error("Socket server did not execute the callback for " +
						a + " with data : " + $_TAWK_JSON.stringify(b));
				}, 35E3);
				e = function () {
					clearTimeout(d);
					e = function () {
					};
					c.apply(null, arguments)
				};
				try {
					null === b ? this.socketConnector.emit(a, e) : this.socketConnector.emit(a, b, e)
				} catch (g) {
					p.handleError("Unable to emit to socket connector in safeCallback for command : " + a + " with data :" + $_TAWK_JSON.stringify(b), g.fileName, g.lineNumber, g.stack)
				}
			};
			ha.prototype.disconnectConnector = function () {
				this.socketConnector.disconnectSocket()
			};
			ha.prototype.connectorListeningOn = function (a) {
				return 0 !==
					this.socketConnector.listeners(a).length
			};
			ha.prototype.isForcedDisconnect = function () {
				return this.socketConnector.forceDisconnected
			};
			var Z = function () {
				this.started = this.maximize = this.isDocumentReady = !1;
				this.previousSessionKey = null;
				this.waitingForLanguage = !1;
				this.startTime = w.startTime;
				this.versionReloadTimeout = null;
				this.dataIsReady = this.viewIsReady = !1
			};
			Z.prototype.load = function () {
				var a = this;
				W.pageId = $_Tawk_AccountKey;
				"undefined" !== typeof W.pageId && (e.processSettings(w.widgetSettings), this.init(), this.isDocumentReady ||
				(b.eventHandler.listen(document, "DOMContentLoaded", function () {
					a.init()
				}, "domloaded"), b.eventHandler.listen(document, "readystatechange", function () {
					("complete" === document.readyState || "interactive" === document.readyState && document.body) && a.init()
				}, "domstatechange"), b.eventHandler.listen(h, "load", function () {
					a.init()
				}, "windowload")), b.eventEmitter.on("removeWidget", function (b) {
					a.removeWidget()
				}))
			};
			Z.prototype.init = function () {
				var a;
				if (!this.isDocumentReady && (this.isDocumentReady = !0, a = m.parseQueryString(),
					!a.$_tawk_beacon && "operamini" !== x)) {
					a.$_tawk_popout && (t.transferKey = a.$_tawk_tk, t.sessionKey = a.$_tawk_sk, k.isPopup = !0);
					if (a = m.getReloadedScript()) a = m.parseQueryString(a.src), t.restarted = a.restarted, this.maximize = a.maximized;
					m.parseApi();
					c.embedded && (k.isEmbedded = !0, x = null);
					if (!da.isCookieEnabled) return Ja.init();
					x ? (k.isPopup ? b.viewHandler = new PopoutMobileViewHandler : this.initRenderer(x), b.formHandler = new O) : (b.formHandler = new O, b.viewHandler = new xa, b.audioPlayer.initAudioPlayer());
					b.viewHandler &&
					(b.sessionHandler.setVisitorAttributes(), c.onBeforeLoad(), this.bootStrap())
				}
			};
			Z.prototype.bootStrap = function () {
				var a = this;
				this.dataIsReady = this.viewIsReady = !1;
				setTimeout(function () {
					b.viewHandler.begin();
					a.viewIsReady = !0;
					a.setupDone()
				}, 0);
				setTimeout(function () {
					d.register()
				}, 0)
			};
			Z.prototype.initRenderer = function (a) {
				switch (a) {
					case "chrome":
						b.viewHandler = new ChromeRenderer(a);
						break;
					case "safari":
						b.viewHandler = new SafariRenderer(a);
						break;
					case "opera":
						b.viewHandler = new OperaRenderer(a);
						break;
					case "android":
						b.viewHandler =
							new AndroidRenderer(a);
						break;
					case "android2.3":
						b.viewHandler = new Android2Renderer(a);
						break;
					case "android2":
						b.viewHandler = new PopupRenderer(a);
						break;
					case "firefox":
						b.viewHandler = new FirefoxRenderer(a);
						break;
					case "ie":
						b.viewHandler = 10 > F ? new PopupRenderer(a) : new IEModernRenderer(a);
						break;
					case "blackberry":
						b.viewHandler = new PopupRenderer(a);
						break;
					case "nokia":
						b.viewHandler = new PopupRenderer(a);
						break;
					case "uc":
						b.viewHandler = new AndroidRenderer(a)
				}
				b.viewHandler && b.viewHandler.init()
			};
			Z.prototype.begin =
				function (a) {
					var c = this;
					d.registerStarted = !1;
					d.clearTimers();
					d.registerTime = (new Date).getTime() - d.registerStart;
					d.registerStart = null;
					a.error ? "USER_ERROR" === a.error || "SERVER_DOWN" === a.error ? this.hideWidget() : d.retryRegister() : a.cjsv > t.currentVersion ? (h.$_Tawk_VMRC = "undefined" !== typeof h.$_Tawk_VMRC ? h.$_Tawk_VMRC : 0, 10 > h.$_Tawk_VMRC && (this.versionReloadTimeout = setTimeout(function () {
						c.criticalRefresh(a.cjsv, !0)
					}, 1E3 * h.$_Tawk_VMRC), h.$_Tawk_VMRC++)) : (h.$_Tawk_VMRC = 0, b.activityManager.initActivityReset(),
						this.started ? this.reinited(a) : (this.started = !0, this.extractRegisterData(a), this.dataIsReady = !0, this.setupDone()))
				};
			Z.prototype.extractRegisterData = function (a) {
				a.wdgt && (a.wdgt.lc !== w.widgetSettings.lc && (this.waitingForLanguage = !0, m.insertScript("https://static-v.VOOChat/573/languages/" + a.wdgt.lc + ".js")), e.processSettings(a.wdgt));
				"max" !== k.onClickAction || x || (this.maximize = "max" === a.cw, t.chatWindowState(a.cw));
				t.criticalVersion = a.cjsv || 0;
				t.visitorSocketServer = a.vss;
				t.sessionKey = a.sk;
				t.transferKey = a.tk;
				t.transferedSession = !!a.ts;
				t.serverVersion = a.jsv || 0;
				b.visitorHandler.updateVisitorUUID(a);
				b.visitorHandler.updateVisitorInformation(a);
				k.soundOn(a.sdo);
				k.whiteLabel(a.wl);
				k.scheduleTimezone = a.wstz;
				t.prechatFormSubmitted = !!a.pcfs;
				t.departments = m.isArray(a.dptst) ? a.dptst.reverse() : [];
				t.pageStatusVersion = a.asver || 0;
				t.waitTime = void 0 !== a.ewt && 0 !== a.ewt ? 1E3 * a.ewt : 6E4;
				t.pageStatus(a.ast || "offline");
				t.chatBubbleClosed(!!a.bblc);
				W.tawkId = a.twid;
				W.pageName(a.pgn);
				y.chatVersion = a.cver || 0;
				y.chatDepartment = a.dpt ||
					"any";
				y.chatHistory = a.c || [];
				y.rating(a.rt || 0);
				k.webRTCSettings(a.webrtc);
				k.brandingRedirect(a.otl)
			};
			Z.prototype.initBuildChat = function () {
				b.chatHandler.parseHistory();
				b.viewHandler.applyWhiteLabelSettings();
				this.showWidget();
				b.socketManager.initConnector();
				w.ready = !0;
				c.onLoad();
				delete w.init;
				(t.currentVersion < t.serverVersion || t.restarted) && m.insertBeaconIframe()
			};
			Z.prototype.reinited = function (a) {
				var c = t.sessionKey;
				this.extractRegisterData(a);
				c !== a.sk ? (b.chatHandler.clearChatMessages(), b.viewHandler.resetView(),
					b.agents.clearAgents()) : (t.visitorSocketServer = a.vss, t.sessionKey = a.sk, t.transferKey = a.tk, t.transferedSession = !!a.ts, t.serverVersion = a.jsv || 0, b.visitorHandler.updateVisitorUUID(a));
				b.scheduler.setup();
				b.viewHandler.updateViewByStatus(t.pageStatus());
				b.socketManager.initConnector()
			};
			Z.prototype.criticalRefresh = function (a, c, d) {
				var e = this, g = (new Date).getTime(),
					l = "https://embed.VOOChat/" + W.pageId + "/" + $_Tawk_WidgetId + "?refresh=true&";
				if (k.isPopup) return h.location.reload(!!c);
				this.dataIsReady = this.viewIsReady =
					!1;
				this.removeWidget();
				c && (l += "restarted=true&");
				d && (l += "maximized=true&");
				l += "v=" + a || t.serverVersion || t.currentVersion;
				delete w.downloaded;
				m.insertScript(l, "TawkScript-" + g);
				var p = setInterval(function () {
					h.$_Tawk.startTime !== e.startTime && (b = null, clearInterval(p), clearTimeout(e.versionReloadTimeout))
				}, 200)
			};
			Z.prototype.removeWidget = function () {
				var a;
				b && (b.viewHandler && b.viewHandler.iframeContainer) && (a = document.getElementById(b.viewHandler.iframeContainer.elementId));
				d.clearTimers();
				b.eventHandler.clearEvents();
				b.activityManager.cleanUp();
				b.socketManager.disconnectConnector();
				b.eventEmitter.removeAllListeners();
				b.scheduler.clearTimer();
				clearTimeout(m.checkWhiteLabelRef);
				a && a.parentNode.removeChild(a)
			};
			Z.prototype.setupDone = function (a) {
				a && (b.languageParser.language = w.language, this.waitingForLanguage = !1);
				this.viewIsReady && (this.dataIsReady && !this.waitingForLanguage) && this.initBuildChat()
			};
			Z.prototype.showWidget = function () {
				b.scheduler.setup();
				!k.isPopup && k.hideWidgetOnLoad || b.viewHandler.show()
			};
			Z.prototype.hideWidget =
				function () {
					b && b.viewHandler && b.viewHandler.hideWidget()
				};
			w.languageUpdater = function () {
				if (b && b.main && b.main.waitingForLanguage) {
					b.main.setupDone(!0);
					try {
						b.eventEmitter.emit("localeChanged")
					} catch (a) {
						p.handleError("Unable to emit locale changed", a.fileName, a.lineNumber, a.stack)
					}
				}
			};
			var ta = function (a, b) {
				this.language = a;
				this.notFoundCallback = "function" === typeof b ? b : function () {
				}
			};
			ta.prototype.translate = function (a, b, c, d) {
				var e, g;
				e = [];
				var h = this.language || d;
				if (!h[a]) return this.notFoundCallback(Error("Missing context : {" +
					a + "}, {" + b + "}")), b;
				d = h[a][b];
				if (!d) return this.notFoundCallback(Error("Missing key : {" + a + "}, {" + b + "}")), b;
				b = d.pluralVars ? d.pluralVars.length : 0;
				g = d.vars ? d.vars.length : 0;
				if (0 < b) {
					for (a = 0; a < b; a++) e.push(h.pluralFormFunction(c[d.pluralVars[a]]));
					e = d.message[e.join("_")];
					for (a = 0; a < b; a++) e = e.replace(RegExp("#" + d.pluralVars[a], "g"), this.escapeStringReplacePlacement(c[d.pluralVars[a]]))
				} else e = d.message;
				if (0 < g) for (a = 0; a < g; a++) e = e.replace(RegExp("#" + d.vars[a], "g"), this.escapeStringReplacePlacement(c[d.vars[a]]));
				return e
			};
			ta.prototype.escapeStringReplacePlacement = function (a) {
				return "string" === typeof a ? a.replace(/\$/g, "$$$") : a
			};
			ta.prototype.hasTranslation = function (a, b, c) {
				c = c || this.language;
				return !!(c && c[a] && c[a][b])
			};
			"undefined" !== typeof module && (module.exports = ta);
			b.eventEmitter = new EventEmitter;
			b.eventEmitter.on("error", function (a) {
				p.handleError("EventEmitter on error", a.fileName, a.lineNumber, a.stack)
			});
			b.loggingHandler = new v;
			b.eventHandler = new ba;
			b.activityManager = new C;
			b.scheduler = new S;
			b.main = new Z;
			b.languageParser =
				new ta(w.language);
			b.socketManager = new ha;
			b.sessionHandler = new U;
			b.chatHandler = new J;
			b.agents = new ka;
			b.visitorHandler = new R;
			b.audioPlayer = new H;
			d = new D;
			b.fileUploadHandler = new za;
			void 0 !== w.downloaded ? (b.eventHandler.clearEvents(), b.eventEmitter.removeAllListeners(), b = null) : (w.downloaded = !0, b.main.load())
		} catch (ua) {
			if (p) p.handleError(ua.message, "tawk.js", ua.lineNumber || ua.line, ua.stack); else throw Error("tawk : " + ua.message);
		}
	}).call(this, window.$_Tawk);

})(window, jQuery);