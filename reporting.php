<?php
require_once("common/header.php");
?>
<div id="main" class="ember-view">
	<div id="ember372" class="ember-view dynamic-view" style="display: block;">
		<div id="reporting-main-view" class="ember-view">
			<div class="content">
				<div class="row view-header">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						<h1 class="page-title txt-color-blueDark"><i class="fa fa-bar-chart"></i> Reporting</h1></div>
					<div class="clearfix"></div>
				</div>
				<div class="innerContent">
					<div id="sidebar-navigation" class="smart-form">
						<label class="select">
							<select id="property-select">
								<optgroup label="Sites">
									<option value="5a67ac584b401e45400c5653" data-bindattr-16222="16222" data-type="site">Pickering Toyota Live Video Chat</option>
									<option value="5a55196ed7591465c7069586" data-bindattr-16224="16224" data-type="site">Uniqks</option>
								</optgroup>
								<optgroup label="VOOChat Pages">
									<option value="5a60123e3098e70e78bf9fad" data-bindattr-16226="16226" data-type="page">frank</option>
								</optgroup>
							</select><i></i></label>
						<div id="view-select-container">
							<h4><strong>Chats</strong></h4>
							<ul>
								<li class="select-graph active" id="chat-volume">Chat Volume</li>
								<li class="select-graph" id="missed-chat-volume">Missed Chats &amp; Offline Messages</li>
								<li class="select-graph" id="chat-duration">Average Chat Duration</li>
								<li class="select-graph" id="chat-satisfaction">User Satisfaction</li>
								<li class="select-graph" id="chat-wait-time">First Response Time</li>
							</ul>
							<h4><strong>Tickets</strong></h4>
							<ul>
								<li class="select-graph" id="ticket-volume">New Ticket Volume</li>
								<li class="select-graph" id="solved-tickets">Solved Tickets</li>
								<li class="select-graph" id="ticket-source">Ticket Source</li>
								<li class="select-graph" id="ticket-resolution-time">Resolution Time</li>
								<li class="select-graph" id="ticket-reopened">Ticket Reopened</li>
								<li class="select-graph" id="ticket-first-time-response">First Response Time</li>
							</ul>
						</div>
					</div>
					<div id="graph-display-container">
						<div id="filter-container" class="smart-form padding-10">
							<button id="openFilter" type="button" class="btn btn-default pull-right" data-toggle="dropdown"><i class="fa fa-filter"></i> Filter <span class="caret"></span></button>
							<div class="dropdown-menu pull-right smart-form" role="menu" id="analytics-filter">
								<form>
									<fieldset>
										<section class="col col-6">
											<label style="font-size: 10px; color: #aaa; text-transform: uppercase;">Agents</label>
											<label class="select">
												<select id="agent-id" class="" data-bindattr-16216="16216">
													<option value="0">All</option>
													<option value="5a60123e3098e70e78bf9fac" data-bindattr-16276="16276">frank</option>
													<option value="5a87536023af486d55e305f9" data-bindattr-16278="16278">JOHN</option>
													<option value="5a54ed99f721561639dbfc89" data-bindattr-16280="16280">Mahan</option>
													<option value="5a8c5e324c3c5d0e7f5915ce" data-bindattr-16282="16282">Qaise Sherdel</option>
												</select><i></i></label>
										</section>
										<section class="col col-6">
											<label style="font-size: 10px; color: #aaa; text-transform: uppercase;">Departments</label>
											<label class="select">
												<select id="department-id">
													<option value="0">All</option>
												</select><i></i></label>
										</section>
										<section class="col col-6">
											<label style="font-size: 10px; color: #aaa; text-transform: uppercase;">Time Frames</label>
											<label class="select">
												<select id="time-frame">
													<option value="custom">Custom</option>
													<option value="day">Day</option>
													<option value="week">Week</option>
													<option value="month">Month</option>
													<option value="7days">7 days</option>
													<option value="30days">30 days</option>
												</select><i></i></label>
										</section>
										<section class="col col-6 time-frame-tool-container hidden" data-bindattr-16217="16217">
											<label style="font-size: 10px; color: #aaa; text-transform: uppercase;">Time Frame Navigation</label>
											<label class="input">
												<div id="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
												<div id="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
												<div class="time-frame-list-container hidden" data-bindattr-16218="16218">
													<label class="select">
														<select id="time-frame-data-list">
															<option class="" value="0" data-bindattr-16284="16284">January</option>
															<option class="" value="1" data-bindattr-16286="16286">February</option>
															<option class="" value="2" data-bindattr-16288="16288">March</option>
															<option class="hidden" value="3" data-bindattr-16290="16290">April</option>
															<option class="hidden" value="4" data-bindattr-16292="16292">May</option>
															<option class="hidden" value="5" data-bindattr-16294="16294">June</option>
															<option class="hidden" value="6" data-bindattr-16296="16296">July</option>
															<option class="hidden" value="7" data-bindattr-16298="16298">August</option>
															<option class="hidden" value="8" data-bindattr-16300="16300">September</option>
															<option class="hidden" value="9" data-bindattr-16302="16302">October</option>
															<option class="hidden" value="10" data-bindattr-16304="16304">November</option>
															<option class="hidden" value="11" data-bindattr-16306="16306">December</option>
														</select><i></i></label>
												</div>
											</label>
										</section>
										<section class="col col-6">
											<label style="font-size: 10px; color: #aaa; text-transform: uppercase;">From</label>
											<label class="input">
												<input type="text" id="analytics-from" class="hasDatepicker">
											</label>
										</section>
										<section class="col col-6">
											<label style="font-size: 10px; color: #aaa; text-transform: uppercase;">To</label>
											<label class="input">
												<input type="text" id="analytics-to" class="hasDatepicker">
											</label>
										</section>
										<section class="col col-6">
											<label style="font-size: 10px; color: #aaa; text-transform: uppercase;">Tags</label>
											<label class="select">
												<select id="tag-id">
													<option value="0">All</option>
												</select><i></i></label>
										</section>
									</fieldset>
								</form>
								<footer>
									<button type="submit" class="btn btn-primary search" id="applyFilter">Filter</button>
									<button type="submit" class="btn btn-default" id="resetFilter">Reset</button>
									<button type="submit" class="btn btn-default" id="closeFilter">Close</button>
								</footer>
							</div>
							<div class="clearfix"></div>
						</div>
						<div id="display-container">
							<div class="inner-container" data-bindattr-16219="16219">
								<div class="yaxisLabel">
									<div style="padding : 0 5px; font-size : 18px;"></div>
								</div>
								<div id="graph-container" style="padding: 0px; position: relative;">
									<canvas class="flot-base" width="1013" height="212" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 1013px; height: 212px;"></canvas>
									<div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);">
										<div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; display: block;">
											<div class="flot-tick-label tickLabel" style="position: absolute; max-width: 144px; top: 197px; left: 1px; text-align: center;">23/Mar</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; max-width: 144px; top: 197px; left: 163px; text-align: center;">24/Mar</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; max-width: 144px; top: 197px; left: 326px; text-align: center;">25/Mar</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; max-width: 144px; top: 197px; left: 488px; text-align: center;">26/Mar</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; max-width: 144px; top: 197px; left: 651px; text-align: center;">27/Mar</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; max-width: 144px; top: 197px; left: 813px; text-align: center;">28/Mar</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; max-width: 144px; top: 197px; left: 976px; text-align: center;">29/Mar</div>
										</div>
										<div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; display: block;">
											<div class="flot-tick-label tickLabel" style="position: absolute; top: 180px; left: 0px; text-align: right;">0</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; top: 150px; left: 0px; text-align: right;">1</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; top: 121px; left: 0px; text-align: right;">2</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; top: 91px; left: 0px; text-align: right;">3</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; top: 62px; left: 0px; text-align: right;">4</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; top: 32px; left: 0px; text-align: right;">5</div>
											<div class="flot-tick-label tickLabel" style="position: absolute; top: 3px; left: 0px; text-align: right;">6</div>
										</div>
									</div>
									<canvas class="flot-overlay" width="1013" height="212" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 1013px; height: 212px;"></canvas>
									<div class="legend">
										<div style="position: absolute; width: 122px; height: 20px; top: -22px; left: 14px; opacity: 1;"> </div>
										<table style="position:absolute;top:-22px;left:14px;;font-size:smaller;color:#545454">
											<tbody>
											<tr>
												<td class="legendColorBox">
													<div style="">
														<div style="border:2px solid #71a06a;overflow:hidden"></div>
													</div>
												</td>
												<td class="legendLabel"><span><span class="legend-title" id="0" "="">Chat Volume</span></span>
												</td>
											</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div id="table-container">
									<table class="table table-striped table-hover dataTable no-footer">
										<thead>
										<tr role="row">
											<th class="text-center">Dates</th>
											<th class="text-center">Chat Volume</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>23/Mar/2018</td>
											<td>2</td>
										</tr>
										<tr>
											<td>24/Mar/2018</td>
											<td>2</td>
										</tr>
										<tr>
											<td>25/Mar/2018</td>
											<td>-</td>
										</tr>
										<tr>
											<td>26/Mar/2018</td>
											<td>-</td>
										</tr>
										<tr>
											<td>27/Mar/2018</td>
											<td>-</td>
										</tr>
										<tr>
											<td>28/Mar/2018</td>
											<td>5</td>
										</tr>
										<tr>
											<td>29/Mar/2018</td>
											<td>-</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div id="list-loading" class="hidden" data-bindattr-16221="16221">
						<h5><i class="fa fa-refresh fa-spin"></i></h5></div>
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
																<div class="pull-right"><span class="visitor-ip hover-location" rel="popover" title="" data-placement="top" data-content="" data-bindattr-6173="6173" data-original-title="">104.255.12.73</span><span class="visitor-time hover-location" rel="popover" title="" data-placement="bottom" data-content="Visitor's current local time" data-original-title="">12:47 AM</span></div>
																<div class="clearfix"></div>
															</div>
														</div>
													</div>
													<div class="fields-container">
														<div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0.1 Safari/604.3.5" data-bindattr-6176="6176" data-original-title="" title=""><span class="sprite-background safari-browser" data-bindattr-6177="6177" style="margin : 0 2px; vertical-align: middle;"></span><span class="sprite-background mac-os" data-bindattr-6178="6178" style="vertical-align: middle;"></span>
																<div class="clearfix"></div>
															</div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Duration" data-original-title="" title="">00:41:39</div>
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