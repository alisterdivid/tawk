<?php
require_once("common/header.php");
?>
<div id="main" class="ember-view">
	<div id="ember372" class="ember-view dynamic-view" style="display: block;">
		<div id="conversations" class="ember-view">
			<div class="content">
				<div class="row view-header">
					<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<h1 class="page-title txt-color-blueDark"><i class="fa fa-inbox"></i> Messaging</h1></div>
					<div id="search-list-container" class="col-xs-8 col-sm-8 col-md-8 col-lg-8" data-bindattr-16114="16114">
						<form id="conversations-search" class="" data-bindattr-16115="16115">
							<fieldset>
								<div class="input-group">
									<div id="property-selected-name"><span id="property-label">in:frank</span><span class="chevron"></span></div>
									<input type="text" class="form-control" placeholder="Search" id="search-text">
									<div class="input-group-btn">
										<button id="openFilter" type="button" class="btn btn-default" tabindex="-1" aria-expanded="false"><span class="caret"></span></button>
										<button type="button" class="btn btn-primary search" tabindex="-1"><i class="fa fa-search"></i></button>
										<div class="dropdown-menu pull-right smart-form">
											<fieldset>
												<section class="col col-6">
													<label class="input">
														<input type="text" placeholder="Min # of Msg" id="min-messages">
													</label>
												</section>
												<section class="col col-6">
													<label class="select custom-select">
														<div>
															<p>Status : <span class="selected-value">All</span></p>
														</div><i></i>
														<select id="search-status">
															<option value="0">All</option>
															<option value="1000">Open</option>
															<option value="2000">Pending</option>
															<option value="3000">Closed</option>
														</select>
													</label>
												</section>
												<section class="col col-6">
													<label class="input"> <i class="icon-append fa fa-calendar"></i>
														<input type="text" name="from-date" id="from-date" placeholder="Date From" class="hasDatepicker">
													</label>
												</section>
												<section class="col col-6">
													<label class="input"> <i class="icon-append fa fa-calendar"></i>
														<input type="text" name="to-date" id="to-date" placeholder="Date To" class="hasDatepicker">
													</label>
												</section>
												<section class="col col-6">
													<label class="select custom-select">
														<div>
															<p>Agent / Department : <span class="selected-value">All</span></p>
														</div><i></i>
														<select id="assignee">
															<option value="0">All</option>
															<option value="1">Assigned</option>
															<option value="-1">Unassigned</option>
															<option value="5a60123e3098e70e78bf9fac" data-bindattr-16117="16117">Me (frank)</option>
														</select>
													</label>
												</section>
												<section class="col col-6">
													<label class="input">
														<input type="text" name="tags" id="tags" data-role="tagsinput" placeholder="Tags" style="display: none;">
														<div class="bootstrap-tagsinput"><span class="twitter-typeahead" style="position: relative; display: inline-block;"><input type="text" style="width: 4em !important; position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);" class="tt-hint" readonly="" autocomplete="off" spellcheck="false" tabindex="-1" dir="ltr"><input type="text" placeholder="Tags" style="width: 4em !important; position: relative; vertical-align: top; background-color: transparent;" class="tt-input" autocomplete="off" spellcheck="false" dir="auto"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Open Sans&quot;, Helvetica, Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><div class="tt-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;"><div class="tt-dataset tt-dataset-2"></div></div></span></div>
													</label>
												</section>
											</fieldset>
											<footer>
												<button type="submit" class="btn btn-primary search">Search</button>
												<button type="submit" class="btn bg-color-teal txt-color-white" id="resetFilter">Reset</button>
												<button type="submit" class="btn btn-default" id="closeFilter">Close</button>
											</footer>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
						<form id="contacts-search" class="hidden" data-bindattr-16119="16119">
							<fieldset>
								<div class="input-group">
									<div id="property-selected-name"><span id="property-label">in:frank</span><span class="chevron"></span></div>
									<input type="text" class="form-control" placeholder="Search Contact" id="contact-query">
									<div class="input-group-btn">
										<button type="button" class="btn btn-primary search-contact-btn" tabindex="-1"><i class="fa fa-search"></i></button>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
				<div class="innerContent" data-bindattr-16121="16121"><a id="open-properties-list" href="javascript:void(0);"><i class="fa fa-arrow-circle-right"></i></a><a id="close-properties-list" href="javascript:void(0);" style="display: none;"><i class="fa fa-arrow-circle-left"></i></a>
					<div id="list-opacity-block" class="opacity-block" style="display: none;"></div>
					<div id="conversations-properties" class="ember-view">
						<div id="add-button-container">
							<button id="create-ticket" class="btn btn-primary"><i class="fa fa-plus"></i> New Ticket</button>
						</div>
						<ul class="properties-list">
							<li id="5a60123e3098e70e78bf9fad" data-bindattr-16122="16122" class="get-tickets active open" data-bindattr-16123="16123">
								<p class="property-name"><i class="fa"></i><span class="title-section">frank</span></p>
								<ul class="inner-list list-unstyled" data-bindattr-16125="16125">
									<li class="get-contacts" data-bindattr-16126="16126">Contacts</li>
									<li class="get-spam" data-bindattr-16127="16127">Spam</li>
									<li class="get-trash" data-bindattr-16128="16128">Trash</li>
								</ul>
							</li>
							<li id="5a67ac584b401e45400c5653" data-bindattr-16129="16129" class="get-tickets active" data-bindattr-16130="16130">
								<p class="property-name"><i class="fa"></i><span class="title-section">Pickering Toyota Live Video Chat</span><span class="badge bg-color-red txt-color-white">9</span></p>
								<ul class="inner-list list-unstyled hidden" data-bindattr-16132="16132">
									<li class="get-contacts" data-bindattr-16133="16133">Contacts</li>
									<li class="get-spam" data-bindattr-16134="16134">Spam</li>
									<li class="get-trash" data-bindattr-16135="16135">Trash</li>
								</ul>
							</li>
							<li id="5a55196ed7591465c7069586" data-bindattr-16136="16136" class="get-tickets active" data-bindattr-16137="16137">
								<p class="property-name"><i class="fa"></i><span class="title-section">Uniqks</span><span class="badge bg-color-red txt-color-white">9</span></p>
								<ul class="inner-list list-unstyled hidden" data-bindattr-16139="16139">
									<li class="get-contacts" data-bindattr-16140="16140">Contacts</li>
									<li class="get-spam" data-bindattr-16141="16141">Spam</li>
									<li class="get-trash" data-bindattr-16142="16142">Trash</li>
								</ul>
							</li>
						</ul>
					</div>
					<div id="conversations-list" class="ember-view">
						<div id="conversation-list-container">
							<div id="list-wrapper">
								<div class="clear"></div>
								<table class="table">
									<thead>
									<tr>
										<th class="column-head-details inner-wrapper smart-form">
											<ul class="" data-bindattr-16143="16143">
												<li>
													<div id="filter-assignee" class="dropdown"><a role="button" data-toggle="dropdown" class="" data-bindattr-16144="16144" href="javascript:void(0);"><span class="filter-value">All&nbsp;<span class="badge bg-color-red txt-color-white"></span></span>&nbsp;<i class="fa fa-sort"></i></a>
														<ul class="dropdown-menu multi-level">
															<li id="0"><a class="submenu-title" href="javascript:void(0);">All</a></li>
															<li id="1"><a class="submenu-title" href="javascript:void(0);">Assigned</a></li>
															<li id="-1"><a class="submenu-title" href="javascript:void(0);">Unassigned</a></li>
														</ul>
													</div>
												</li>
												<li id="select-my-message" class="inactive" data-bindattr-16146="16146">Mine</li>
											</ul>
										</th>
										<th class="hidden-xs column-head-icons text-right">
											<ul class="smart-form inline-group" style="float: right; margin: 0;">
												<li>
													<label class="checkbox" style="margin-right: 15px;">
														<input type="checkbox" checked="checked" data-bindattr-16147="16147" id="only-chats"><i></i><span class="hidden-lg"><i class="icon fa fa-comment-o"></i>&nbsp;</span><span class="visible-lg">Chats</span></label>
												</li>
												<li>
													<label class="checkbox" style="margin-right: 15px;">
														<input type="checkbox" checked="checked" data-bindattr-16148="16148" id="only-tickets"><i></i><span class="hidden-lg"><i class="icon fa fa-ticket"></i>&nbsp;</span><span class="visible-lg">Tickets</span></label>
												</li>
											</ul>
										</th>
										<th class="hidden-xs hidden-sm column-head-assign text-center smart-form">
											<ul>
												<li>
													<div id="status-container" class="dropdown"><a role="button" data-toggle="dropdown" class="" data-bindattr-16149="16149" href="javascript:void(0);"><span class="filter-value">Any</span>&nbsp;<i class="fa fa-sort"></i></a>
														<ul class="dropdown-menu multi-level pull-right">
															<li id="0"><a class="submenu-title" href="javascript:void(0);">Any</a></li>
															<li id="2000"><a class="submenu-title" href="javascript:void(0);">Pending</a></li>
															<li id="3000"><a class="submenu-title" href="javascript:void(0);">Closed</a></li>
														</ul>
													</div>
												</li>
												<li id="select-open-status" class="inactive" data-bindattr-16151="16151">Open</li>
											</ul>
										</th>
										<th class="column-head-sort text-center">
											<div id="sort-container" class="dropdown"><a id="sortby" role="button" data-toggle="dropdown" class="btn btn-default btn-sm" href="javascript:void(0);" data-original-title="" title=""><span class="sort-value">Updated On&nbsp;<i class="fa fa-sort-numeric-desc"></i></span>&nbsp;<span class="caret"></span></a>
												<ul class="dropdown-menu multi-level pull-right">
													<li class="dropdown-submenu"><a class="submenu-title" href="javascript:void(0);">Updated On</a>
														<ul class="dropdown-menu">
															<li><a class="change-sort" href="javascript:void(0);" id="uo-new-old"><i class="fa fa-sort-numeric-desc"></i> Newest to Oldest</a></li>
															<li><a class="change-sort" href="javascript:void(0);" id="uo-old-new"><i class="fa fa-sort-numeric-asc"></i> Oldest to Newest</a></li>
														</ul>
													</li>
													<li class="dropdown-submenu"><a class="submenu-title" href="javascript:void(0);">Created On</a>
														<ul class="dropdown-menu">
															<li><a class="change-sort" href="javascript:void(0);" id="co-new-old"><i class="fa fa-sort-numeric-desc"></i> Newest to Oldest</a></li>
															<li><a class="change-sort" href="javascript:void(0);" id="co-old-new"><i class="fa fa-sort-numeric-asc"></i> Oldest to Newest</a></li>
														</ul>
													</li>
													<li class="dropdown-submenu"><a class="submenu-title" href="javascript:void(0);">Priority</a>
														<ul class="dropdown-menu">
															<li><a class="change-sort" href="javascript:void(0);" id="p-high-low"><i class="fa fa-sort-numeric-desc"></i> Highest to Lowest</a></li>
															<li><a class="change-sort" href="javascript:void(0);" id="p-low-high"><i class="fa fa-sort-numeric-asc"></i> Lowest to Highest</a></li>
														</ul>
													</li>
													<li class="dropdown-submenu" data-bindattr-16152="16152"><a class="submenu-title" href="javascript:void(0);">Status</a>
														<ul class="dropdown-menu">
															<li><a class="change-sort" href="javascript:void(0);" id="st-open-closed"><i class="fa fa-sort-numeric-desc"></i> Open to Closed</a></li>
															<li><a class="change-sort" href="javascript:void(0);" id="st-closed-open"><i class="fa fa-sort-numeric-asc"></i> Closed to Open</a></li>
														</ul>
													</li>
												</ul>
											</div>
										</th>
										<th class="column-head-setting">
											<div class="smart-form hidden" data-bindattr-16161="16161" style="height : 30px;">
												<label class="checkbox">
													<input class="all-bulk-check" type="checkbox"><i class="mark-select" style="top: 6px; right: 15px; left: auto;"></i></label>
											</div>
										</th>
									</tr>
									</thead>
								</table>
								<div id="conversation-list" class="view-section">
									<table class="table">
										<tbody></tbody>
									</table>
									<div class="alert alert-info text-center fade hidden" data-bindattr-16153="16153" id="new-history">
										<button class="close" data-dismiss="alert">×</button><a id="retrieveHistory" href="javascript:void(0);" title="Retrieve new history"><h4 class="alert-heading message">New Message : 0</h4></a></div>
								</div>
								<div id="bulk-action-container" class="hidden" data-bindattr-16155="16155">
									<div id="bulk-action-wrapper">
										<p id="bulk-total-selected"></p>
										<ul id="bulk-list-container">
											<li class="padding-10" data-bindattr-16156="16156">
												<button class="btn btn-danger" id="bulk-conversations-delete" data-original-title="" title="">Delete messages</button>
											</li>
											<li class="hidden padding-10" data-bindattr-16157="16157">
												<button class="btn btn-default" id="bulk-conversations-unspam" data-original-title="" title="">Unspam messages</button>
											</li>
											<li class="hidden padding-10" data-bindattr-16158="16158">
												<button class="btn btn-default" id="bulk-conversations-restore" data-original-title="" title="">Restore messages</button>
											</li>
											<li class="hidden padding-10" data-bindattr-16159="16159">
												<button class="btn btn-default" id="bulk-conversations-purge" data-original-title="" title="">Purge messages</button>
											</li>
											<li class="padding-10">
												<button id="clear-bulk-selection" class="btn bg-color-teal txt-color-white" data-original-title="" title="">Clear selection</button>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="" data-bindattr-16162="16162">
							<div id="default-greeting" class="" data-bindattr-16163="16163">
								<div style="width : 50%;vertical-align: middle;display: inline-block; padding : 20px; height : 100%;">
									<p> Hi frank, </p>
									<p> Messaging is like a shared inbox, it's where your tickets and chat history will be stored.</p>
									<p> You can forward email to the address below so that they arrive in this inbox :</p>
									<div class="smart-form">
										<label class="input" style="display: block;margin-bottom: 9px;">
											<input type="input" readonly="" data-bindattr-16165="16165" style="cursor : text;">
										</label>
									</div>
									<p> Checkout the video for a quick tutorial on Messaging. </p>
									<p> Congratulations on getting the conversation started! </p>
								</div>
								<div style="width : 50%;vertical-align: middle;display: inline-block; border-left: 1px solid #ddd; height : 100%;">
									<div id="youtube-container" style="position: relative; min-height: 300px; height: 100%;">
										<iframe src="https://www.youtube.com/embed/f0KsdPXGzzY?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen=""></iframe>
									</div>
								</div>
							</div>
							<div id="no-conversations" class="well well-light text-center hidden" data-bindattr-16166="16166">
								<h3>No Messages</h3></div>
						</div>
					</div>
				</div>
				<div id="list-loading" style="display: none;">
					<h5><i class="fa fa-refresh fa-spin"></i></h5></div>
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
																<div class="pull-right"><span class="visitor-ip hover-location" rel="popover" title="" data-placement="top" data-content="" data-bindattr-6173="6173" data-original-title="">104.255.12.73</span><span class="visitor-time hover-location" rel="popover" title="" data-placement="bottom" data-content="Visitor's current local time" data-original-title="">12:45 AM</span></div>
																<div class="clearfix"></div>
															</div>
														</div>
													</div>
													<div class="fields-container">
														<div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0.1 Safari/604.3.5" data-bindattr-6176="6176" data-original-title="" title=""><span class="sprite-background safari-browser" data-bindattr-6177="6177" style="margin : 0 2px; vertical-align: middle;"></span><span class="sprite-background mac-os" data-bindattr-6178="6178" style="vertical-align: middle;"></span>
																<div class="clearfix"></div>
															</div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Duration" data-original-title="" title="">00:40:03</div>
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