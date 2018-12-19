<?php
require_once("common/header.php");
?>
<div id="main" class="ember-view">
	<div id="ember372" class="ember-view dynamic-view" style="display: block;">
		<div id="admin-main-view" class="ember-view" style="visibility: visible;">
			<div class="content">
				<div class="row view-header">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1 class="page-title txt-color-blueDark"><i class="fa fa-gear"></i> Administration&nbsp;<i class="fa fa-angle-right" style="display:inline-block;"></i>&nbsp;Pickering Toyota Live Video Chat</h1></div>
				</div>
				<div class="innerContent">
					<div class="hidden" data-bindattr-16326="16326" id="main-container-loading">
						<h5><i class="fa fa-refresh fa-spin"></i></h5></div>
					<div id="property-container" class="list-container" data-bindattr-16335="16335">
						<div class="smart-form" style="max-width: 450px;margin: 0px auto; height : 100%;">
							<section style="min-height: 49px;">
								<p style="text-transform: uppercase; font-size : 12px">Property</p>
								<div style="display:table; width: 100%; height: 32px;">
									<div class="" data-bindattr-16336="16336" style="display:table-cell; width: 100%; max-width: 300px;vertical-align: middle;">
										<label class="select">
											<select id="property-select">
												<optgroup label="Sites">
													<option value="5a67ac584b401e45400c5653" data-bindattr-16355="16355" data-type="site" selected="selected" data-bindattr-16356="16356">Pickering Toyota Live Video Chat</option>
													<option value="5a55196ed7591465c7069586" data-bindattr-16358="16358" data-type="site" data-bindattr-16359="16359">Uniqks</option>
												</optgroup>
											</select><i></i></label>
									</div>
									<button id="add-property" class="btn btn-primary" style="display:table-cell; margin-left : -2px; height: 32px;">+ Add</button>
								</div>
							</section>
							<section class="" data-bindattr-16337="16337" style="position: absolute; top: 64px;bottom: 15px;width: 100%;overflow: auto;">
								<ul class="list">
									<li class="open-view" data-bindattr-16338="16338" id="settings"><a href="javascript:void(0);"><i class="fa fa-cog"></i><span class="label">Property Settings</span></a></li>
									<li class="open-view" data-bindattr-16339="16339" id="members"><a href="javascript:void(0);"><i class="fa fa-group"></i><span class="label">Property Members</span></a></li>
									<li class="open-view" id="shortcuts"><a href="javascript:void(0);"><i class="fa fa-cut"></i><span class="label">Shortcuts</span></a></li>
									<li class="open-view" data-bindattr-16340="16340" id="triggers"><a href="javascript:void(0);"><i class="fa fa-flash"></i><span class="label">Triggers</span></a></li>
									<li class="open-view" id="ban-list"><a href="javascript:void(0);"><i class="fa fa-ban"></i><span class="label">Ban list</span></a></li>
									<li class="open-view" data-bindattr-16341="16341" id="department"><a href="javascript:void(0);"><i class="fa fa-sitemap"></i><span class="label">Departments</span></a></li>
									<li class="open-view" data-bindattr-16342="16342" id="mail-settings"><a href="javascript:void(0);"><i class="fa fa-envelope-o"></i><span class="label">Mail Notifications</span></a></li>
									<li class="open-view" data-bindattr-16343="16343" id="addon-store"><a href="javascript:void(0);"><i class="fa fa-puzzle-piece"></i><span class="label" style="position: relative;">Add-ons</span></a></li>
									<li class="open-view" data-bindattr-16344="16344" id="billing"><a href="javascript:void(0);"><i class="fa fa-dollar"></i><span class="label" style="position: relative;">Billing<div class="new-label"> </div></span></a></li>
									<li class="open-view" data-bindattr-16345="16345" id="tabs"><a href="javascript:void(0);"><i class="fa fa-folder"></i><span class="label" style="position: relative;">Tabs<div class="new-label"> </div></span></a></li>
									<li class="open-view" data-bindattr-16346="16346" id="alerts"><a href="javascript:void(0);"><i class="fa fa-bell"></i><span class="label" style="position: relative;">Agent Alerts<div class="new-label"> </div></span></a></li>
									<li class="open-view" id="knowledgebase"><a href="javascript:void(0);"><i class="fa fa-book"></i><span class="label" style="position: relative;">Knowledge Base<div class="new-label"> </div></span></a></li>
								</ul>
							</section>
						</div>
					</div>
					<div id="asset-container" class="list-container" data-bindattr-16347="16347">
						<div class="list-container-divider"><i class="fa fa-chevron-right"></i></div>
						<div class="smart-form" style="max-width: 450px;margin: 0px auto;">
							<section style="min-height: 49px;">
								<p style="text-transform: uppercase; font-size : 12px">Asset</p>
								<div style="display:table; width: 100%; height: 32px;">
									<div class="" data-bindattr-16361="16361" style="display:table-cell; width: 100%; max-width: 300px;vertical-align: middle;">
										<label class="label" style="font-size: 16px; margin: 0;">Default</label>
									</div>
									<button class="btn btn-primary" data-bindattr-16362="16362" id="add-widget" style="display:table-cell; margin-left : -2px;  height: 32px;">+ Add</button>
								</div>
							</section>
							<section>
								<ul class="list">
									<li class="" data-bindattr-16348="16348"><a href="javascript:void(0);"><i class="fa fa-code"></i><span class="label">Widget Code</span></a>
										<label class="textarea">
											<textarea id="widget-code-textarea" class="ember-view ember-text-area" readonly="true" rows="7"></textarea>
										</label>
									</li>
									<li class="" data-bindattr-16364="16364">
										<div class="popout-widget-code-tooltip"><i class="fa fa-link"></i><span class="label">Direct Chat Link</span>&nbsp;&nbsp;<a class="label" href="https://www.VOOChat/knowledgebase/chat-widget/direct-chat-link" target="blank" style="text-decoration: underline;color: #71a06a; font-size : 11px;">Learn more</a></div>
										<label class="input">
											<input id="popout-widget-code-textarea" class="ember-view ember-text-field" readonly="true" type="text">
										</label>
									</li>
									<li class="hidden open-view" data-bindattr-16349="16349" id="page-content"><a href="javascript:void(0);"><i class="fa fa-align-justify"></i><span class="label">Page Content</span></a></li>
									<li class="open-view" data-bindattr-16350="16350" id="widget-settings"><a href="javascript:void(0);"><i class="fa fa-cog"></i><span class="label">Widget Settings</span></a></li>
									<li class="open-view" data-bindattr-16351="16351" id="widget-appearance"><a href="javascript:void(0);"><i class="fa fa-picture-o"></i><span class="label">Widget Appearance</span></a></li>
									<li class="open-view" data-bindattr-16352="16352" id="widget-content"><a href="javascript:void(0);"><i class="fa fa-font"></i><span class="label">Widget Content</span></a></li>
									<li class="open-view" data-bindattr-16353="16353" id="widget-domains"><a href="javascript:void(0);"><i class="fa fa-link"></i><span class="label">Domain Restriction</span></a></li>
									<li class="open-view" data-bindattr-16354="16354" id="widget-scheduler"><a href="javascript:void(0);"><i class="fa fa-clock-o"></i><span class="label">Scheduler</span></a></li>
								</ul>
							</section>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</div>
	<div id="visitor-chat-view" class="ember-view" style="visibility: hidden;">
		<div class="content">
			<div class="row view-header">
				<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
					<h1 class="page-title txt-color-blueDark"><i class="fa-fw fa fa-comments"></i><p id="view-title">Chats</p></h1></div>
				<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
					<div style="display: table;">
						<div style="display: table-cell; width: 1%">
							<div id="visitor-chat-action-container"><i id="button-details-toggle" class="fa fa-columns active" data-bindattr-815="815" aria-hidden="true" data-original-title="Toggle OFF All Chat Details" data-bindattr-816="816" data-placement="bottom"></i>
								<div class="btn-group"><a id="prev-chat" class="btn btn-default btn-circle disabled prev" href="javascript:void(0);" data-placement="bottom" data-original-title="Previous"><i class="fa fa-chevron-left"></i></a><a id="next-chat" class="btn btn-default btn-circle disabled next" href="javascript:void(0);" data-placement="bottom" data-original-title="Next"><i class="fa fa-chevron-right"></i></a></div>
								<div class="slider-container">
									<div id="slider" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">
										<a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 100%;"></a>
									</div>
									<div class="tooltip fade bottom" style="top: 20px; left: 100%;">
										<div class="tooltip-arrow" style="left: 0%;"></div>
										<div class="tooltip-inner" style="width: 80px; margin-left: -40px;">View / 4</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="inner-content" class="innerContent col-1" data-bindattr-817="817">
				<div id="chat-scroller">
					<div id="no-chat-message" class="well text-center hidden" data-bindattr-818="818">
						<div id="simulate-chat-text">
							<h5> You are not part of any active chats from any of your <a href="javascript:void(0);" id="view-sites"> sites </a> or <a href="javascript:void(0);" id="view-pages"> VOOChat pages </a> . </h5>
							<h5> Click <a href="javascript:void(0);" id="simulate-chat"> here </a> to simulate a visitor and initiate a chat to test the application. </h5></div>
					</div>
					<article id="5605e829ac3b6d25d702f04322a84ed1b752ec7f046b3c4b5b52ea3db3f6fba1" class="ember-view visitor-chat-container chat-container">
						<div class="jarviswidget focus-chat" data-bindattr-6082="6082" data-widget-editbutton="false" data-widget-custombutton="false" data-widget-fullscreenbutton="false">
							<header class="chat-header" data-bindattr-6083="6083" style="position: relative;">
								<ul class="header-list">
									<li class="name-text-container" style="width: 1175px;">
										<div class="details-flag-container"><span class="flag flag-ca" data-bindattr-6084="6084"></span></div>
										<h2 class="name-text">104.255.12.73 - Uniqks</h2></li>
									<li class="menu-container">
										<div class="jarviswidget-ctrls" role="menu"><a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn end-chat" rel="tooltip" title="" data-placement="bottom" data-original-title="End"><i class="fa fa-times"></i></a></div>
										<ul class="menu nav nav-tabs" style="border : 0;">
											<li class="open-view active" data-bindattr-6127="6127" data-id="t0" data-bindattr-6128="6128" data-type="chat_details" data-bindattr-6129="6129"><a href="javascript:void(0);" class="tab" data-bindattr-6130="6130" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="Details" data-bindattr-6131="6131"><i class="fa fa-info" data-bindattr-6132="6132"></i></a></li>
											<li class="open-view" data-bindattr-6133="6133" data-id="t1" data-bindattr-6134="6134" data-type="shortcuts" data-bindattr-6135="6135"><a href="javascript:void(0);" class="tab" data-bindattr-6136="6136" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="Shortcuts" data-bindattr-6137="6137"><i class="fa fa-cut" data-bindattr-6138="6138"></i></a></li>
											<li class="open-view" data-bindattr-6139="6139" data-id="t2" data-bindattr-6140="6140" data-type="knowledge_base" data-bindattr-6141="6141"><a href="javascript:void(0);" class="tab" data-bindattr-6142="6142" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="Knowledge Base" data-bindattr-6143="6143"><i class="fa fa-book" data-bindattr-6144="6144"></i></a></li>
											<li class="open-view" data-bindattr-6145="6145" data-id="t3" data-bindattr-6146="6146" data-type="history" data-bindattr-6147="6147"><a href="javascript:void(0);" class="tab" data-bindattr-6148="6148" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="History" data-bindattr-6149="6149"><i class="fa fa-history" data-bindattr-6150="6150"></i></a></li>
										</ul>
										<div class="minimized-tab hidden jarviswidget-ctrls"><a href="javascript:void(0);" class="button-icon minimized-dropdown" data-toggle="dropdown" style="height: 32px; width: 36px;" data-original-title="" title=""><i class="fa fa-reorder"></i><span class="caret"></span></a>
											<ul class="minimized-dropdown-menu dropdown-menu dropdown-menu-right" role="dropdown">
												<li data-id="t0" data-bindattr-6151="6151" class="open-view active" data-bindattr-6152="6152"><a href="javascript:void(0);" class="text-left"><i class="fa fa-info" data-bindattr-6153="6153"></i>&nbsp;Details</a></li>
												<li data-id="t1" data-bindattr-6155="6155" class="open-view" data-bindattr-6156="6156"><a href="javascript:void(0);" class="text-left"><i class="fa fa-cut" data-bindattr-6157="6157"></i>&nbsp;Shortcuts</a></li>
												<li data-id="t2" data-bindattr-6159="6159" class="open-view" data-bindattr-6160="6160"><a href="javascript:void(0);" class="text-left"><i class="fa fa-book" data-bindattr-6161="6161"></i>&nbsp;Knowledge Base</a></li>
												<li data-id="t3" data-bindattr-6163="6163" class="open-view" data-bindattr-6164="6164"><a href="javascript:void(0);" class="text-left"><i class="fa fa-history" data-bindattr-6165="6165"></i>&nbsp;History</a></li>
												<li><a href="javascript:void(0);" class="ticket-create open-subview text-left"><i class="fa fa-ticket"></i> Create Ticket</a></li>
												<li><a href="javascript:void(0);" class="copy-select text-left"><i class="fa fa-clipboard"></i> Copy Transcript</a></li>
												<li><a href="javascript:void(0);" class="print-select text-left"><i class="fa fa-print"></i> Print</a></li>
												<li><a href="javascript:void(0);" class="add-note text-left"><i class="fa fa-edit"></i> Add Note</a></li>
												<li><a href="javascript:void(0);" class="tag-transcript text-left"><i class="fa fa-tags"></i> Tag Chat</a></li>
												<li><a href="javascript:void(0);" class="ban-visitor text-left"><i class="fa fa-ban"></i> Ban</a></li>
												<li><a href="javascript:void(0);" class="ignore-current-chat text-left" data-bindattr-6187="6187"><i class="fa fa-eye-slash"></i> Ignore</a></li>
											</ul>
										</div>
										<div class="clearfix"></div>
									</li>
								</ul>
							</header>
							<div class="chat-message-container">
								<div class="chat-content-container" role="content" style="right: 301px; width: auto;">
									<div class="chat-body custom-scroll" style="bottom : 145px;">
										<div class="chat-table-wrapper">
											<div class="chat-row-wrapper">
												<div class="chat-wrapper">
													<div class="chat-content padding-10">
														<div class="conversation-participant">
															<div class="msg-time">12:05</div>
															<div class="conversation-content italic">Visitor navigated to <a target="_blank" href="https://www.uniqks.com/" title="https://www.uniqks.com/">Uniqks - CRM Management Services in Toronto</a> </div>
														</div>
														<div class="clear"></div>
														<div class="conversation-block">
															<p class="">Customer Support (System Message)</p>
															<div class="msg-time">12:06</div>
															<div class="conversation-content">Welcome to our site, if you need help simply reply to this message, we are online and ready to help.</div>
														</div>
														<div class="clear"></div>
														<div class="conversation-participant">
															<div class="msg-time">12:19</div>
															<div class="conversation-content italic">Visitor navigated to <a target="_blank" href="https://www.uniqks.com/services.php" title="https://www.uniqks.com/services.php">Uniqks - Best Web Design Company Toronto</a> </div>
														</div>
														<div class="clear"></div>
														<div class="conversation-participant">
															<div class="msg-time">12:34</div>
															<div class="conversation-content italic">Visitor navigated to <a target="_blank" href="https://www.uniqks.com/contact.php" title="https://www.uniqks.com/contact.php">Uniqks - Contact us for Digital Marketing Strategies</a> </div>
														</div>
														<div class="clear"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="select2-drop select2-drop-active hidden">
										<ul class="select2-results" role="listbox"></ul>
									</div>
									<div class="chat-footer" data-bindattr-6087="6087">
										<ul class="nav nav-tabs" style="position:absolute; bottom : 100%;">
											<li data-id="reply-tab" class="open-tab-pane active"><a href="javascript:void(0);">Message</a></li>
											<li data-id="whisper-tab" class="open-tab-pane whisper-tab"><a href="javascript:void(0);">Whisper</a></li>
										</ul>
										<div class="textarea-div tab-content" style="height : 100%;">
											<div class="tab-pane active reply-tab">
												<div class="join-container">
													<div class="profile-overlay"></div>
													<div class="profile-select smart-form" data-bindattr-6090="6090">
														<div class="warning">Another agent in chat, join anyway?</div>
														<label class="select">
															<select class="profile-id">
																<option value="634c28d1-fbfe-11e7-ad54-570930befdae" data-bindattr-6091="6091" selected="selected" data-bindattr-6092="6092">frank</option>
															</select> <i></i></label><a href="javascript:void(0);" class="btn btn-primary join-chat">Join</a>
														<div><a href="javascript:void(0);" class="cancel-join-chat">No, don't join</a></div>
														<div class="clearfix"></div>
													</div>
												</div>
											</div>
											<div class="tab-pane whisper-tab">
												<div class="profile-overlay hidden" data-bindattr-6088="6088"></div>
												<div class="typearea" data-bindattr-6089="6089"><a class="open-emoji" href="javascript:void(0);"><i class="fa fa-smile-o"></i></a>
													<textarea placeholder="Whisper to agents in the chat. The visitor will not see this message." class="custom-scroll chat-input whisper-input" style="height: 60px; min-height : auto; overflow-y: hidden;"></textarea>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="chat-details-container ui-resizable" style="white-space: normal;">
									<div class="details-container">
										<div class="details-view menu-content" style="display: block;">
											<div id="ember6168" class="ember-view visitor-details-view">
												<div class="section-header" style="display: none;">
													<div class="title-container">
														<p>Details</p>
													</div>
													<div class="icon-container"><a class="back-to-chat btn btn-default btn-sm" href="javascript:void(0);"><i class="fa fa-chevron-left"></i></a></div>
													<div class="clearfix"></div>
												</div>
												<div class="section-content">
													<div class="fields-container">
														<form class="smart-form visitor-attributes" novalidate="novalidate">
															<section>
																<label class="input visitor-name-field">
																	<button class="icon-append btn btn-primary btn-xs save-visitor-attributes"><i class="fa fa-save"></i></button>
																	<input type="text" value="V1522296351118150" data-bindattr-6169="6169" class="required visitor-name-input" placeholder="Visitor Name" style="padding-right : 38px;">
																</label>
															</section>
															<section>
																<label class="input">
																	<button class="icon-append btn btn-primary btn-xs save-visitor-attributes"><i class="fa fa-save"></i></button>
																	<input type="text" value="" data-bindattr-6170="6170" class="email visitor-email-input" placeholder="Visitor Email" style="padding-right : 38px;">
																</label>
															</section>
															<div class="clearfix"></div>
														</form>
														<div style="position: relative; word-wrap: break-word; white-space: pre-line; border : 1px solid #BDBDBD; padding: 5px 10px; min-height: 22px; line-height: 22px;">
															<div class="location-details">
																<div class="country-name hover-location" rel="popover" title="" data-placement="right" data-content="" data-bindattr-6171="6171" data-original-title="">Toronto,&nbsp;Canada</div>
																<div class="pull-right"><span class="visitor-ip hover-location" rel="popover" title="" data-placement="top" data-content="" data-bindattr-6173="6173" data-original-title="">104.255.12.73</span><span class="visitor-time hover-location" rel="popover" title="" data-placement="bottom" data-content="Visitor's current local time" data-original-title="">12:49 AM</span></div>
																<div class="clearfix"></div>
															</div>
														</div>
													</div>
													<div class="fields-container">
														<div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0.1 Safari/604.3.5" data-bindattr-6176="6176" data-original-title="" title=""><span class="sprite-background safari-browser" data-bindattr-6177="6177" style="margin : 0 2px; vertical-align: middle;"></span><span class="sprite-background mac-os" data-bindattr-6178="6178" style="vertical-align: middle;"></span>
																<div class="clearfix"></div>
															</div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Duration" data-original-title="" title="">00:43:37</div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Last Visit" data-original-title="" title=""></div>
															<div class="device-detail" rel="popover" data-placement="top" data-content="chats" data-original-title="" title="">0 chats</div>
														</div>
													</div>
													<div class="fields-container" style="border-bottom : 0;">
														<div class="chat-timeline-container tree">
															<li class="parent_li">
																<div class="timeline-label"><span class="label">12:34</span>&nbsp;</div>
																<div class="timeline-data">Visitor navigated to <a target="_blank" href="https://www.uniqks.com/contact.php" title="https://www.uniqks.com/contact.php">Uniqks - Contact us for Digital Marketing Strategies</a> </div>
															</li>
															<li class="parent_li">
																<div class="timeline-label"><span class="label">12:19</span>&nbsp;</div>
																<div class="timeline-data">Visitor navigated to <a target="_blank" href="https://www.uniqks.com/services.php" title="https://www.uniqks.com/services.php">Uniqks - Best Web Design Company Toronto</a> </div>
															</li>
															<li class="parent_li">
																<div class="timeline-label"><span class="label">12:05</span>&nbsp;</div>
																<div class="timeline-data">Visitor navigated to <a target="_blank" href="https://www.uniqks.com/" title="https://www.uniqks.com/">Uniqks - CRM Management Services in Toronto</a> </div>
															</li>
															<div style="padding: 0 5px;"><i class="fa fa-chevron-right"></i>&nbsp;<a href="https://www.google.ca/" data-bindattr-6185="6185" target="_blank" class="linkable">https://www.google.ca/</a></div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="shortcuts-view menu-content hidden" style="display: block;"></div>
										<div class="history-view menu-content hidden" style="display: block;"></div>
										<div class="knowledgebase-view menu-content hidden" style="white-space: normal; display: block;"></div>
										<div class="menu-content client-data-view hidden" style="word-wrap: break-word; white-space: normal; display: block;"></div>
										<div class="menu-content shopify-data-view hidden" style="word-wrap: break-word; white-space: normal; display: block;"></div>
										<div class="menu-content custom-view hidden" style="word-wrap: break-word; white-space: normal; display: block;"></div>
										<div class="floating-view hidden" style="white-space: normal;"></div>
									</div>
									<div class="details-button-container">
										<button class="btn btn-default button-icon ticket-create open-subview" rel="tooltip" data-placement="top" data-original-title="Create Ticket"><i class="fa fa-ticket"></i></button>
										<button class="btn btn-default button-icon copy-select" rel="tooltip" data-placement="top" data-original-title="Copy Transcript"><i class="fa fa-clipboard"></i></button>
										<button class="btn btn-default button-icon print-select" rel="tooltip" data-placement="top" data-original-title="Print"><i class="fa fa-print"></i></button>
										<button class="btn btn-default button-icon add-note" rel="tooltip" data-placement="top" data-original-title="Add Note"><i class="fa fa-edit"></i></button>
										<br>
										<button class="btn btn-primary tag-transcript button-icon" rel="tooltip" data-placement="top" data-original-title="Tag Chat"><i class="fa fa-tags"></i></button>
										<button class="btn btn-danger ban-visitor button-icon" rel="tooltip" data-placement="top" data-original-title="Ban"><i class="fa fa-ban"></i></button>
										<button class="btn btn-default ignore-current-chat button-icon" data-bindattr-6167="6167" rel="tooltip" data-placement="top" data-original-title="Ignore" style="background : #ddd;"><i class="fa fa fa-eye-slash"></i></button>
									</div><i class="fa fa-ellipsis-v"></i>
									<div class="ui-resizable-handle ui-resizable-w" style="z-index: 90;"></div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
</div>
<?php
require_once("common/footer.php");
?>