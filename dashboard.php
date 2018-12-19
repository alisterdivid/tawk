<?php
require_once("common/header.php");
?>
<div id="main" class="ember-view">
	<div id="ember372" class="ember-view dynamic-view" style="display: block;">
		<div id="dashboard" class="ember-view">
			<div class="content">
				<div class="row view-header">
					<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<h1 class="page-title txt-color-blueDark"><i class="fa fa-dashboard"></i> Dashboard</h1></div>
					<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<ul id="sparks">
							<li id="ember14430" class="ember-view sparks-info">
								<h5 data-placement="bottom" data-original-title="Visitors Today" data-bindattr-14433="14433">Visitors&nbsp;<span class="txt-color-tawk-dark-blue" data-bindattr-14435="14435"><i class="fa fa-user" data-bindattr-14437="14437"></i>&nbsp;5</span></h5>
								<div class="sparkline">
									<canvas width="47" height="26" style="display: inline-block; width: 47px; height: 26px; vertical-align: top;"></canvas>
								</div>
							</li>
							<li id="ember14431" class="ember-view sparks-info">
								<h5 data-placement="bottom" data-original-title="Visits Today" data-bindattr-14438="14438">Visits&nbsp;<span class="txt-color-tawk-green" data-bindattr-14440="14440"><i class="fa fa-exchange" data-bindattr-14442="14442"></i>&nbsp;5</span></h5>
								<div class="sparkline">
									<canvas width="47" height="26" style="display: inline-block; width: 47px; height: 26px; vertical-align: top;"></canvas>
								</div>
							</li>
							<li id="ember14432" class="ember-view sparks-info">
								<h5 data-placement="bottom" data-original-title="Chats Today" data-bindattr-14443="14443">Chats&nbsp;<span class="txt-color-tawk-pink" data-bindattr-14445="14445"><i class="fa fa-comments" data-bindattr-14447="14447"></i>&nbsp;1</span></h5>
								<div class="sparkline">
									<canvas width="47" height="26" style="display: inline-block; width: 47px; height: 26px; vertical-align: top;"></canvas>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="innerContent">
					<div id="analytics-section" class="ember-view">
						<section id="widget-analytics" class="col-sm-12">
							<article>
								<div class="jarviswidget" id="wid-id-0" data-widget-togglebutton="false" data-widget-editbutton="false" data-widget-fullscreenbutton="false" data-widget-colorbutton="false" data-widget-deletebutton="false">
									<header><span class="widget-icon"> <i class="glyphicon glyphicon-stats txt-color-darken"></i> </span>
										<h2>Analytics</h2>
										<ul class="nav nav-tabs pull-right in">
											<li role="presentation" class="active"><a data-toggle="tab" role="tab" href="#latest"><i class="fa fa-dashboard"></i>&nbsp;<span class="hidden-mobile hidden-tablet">Latest</span></a></li>
											<li role="presentation"><a data-toggle="tab" role="tab" href="#historical"><i class="fa fa-calendar"></i>&nbsp;<span class="hidden-mobile hidden-tablet">Historical</span></a></li>
										</ul>
									</header>
									<div class="no-padding" role="content">
										<div class="widget-body">
											<div id="analyticsTabContent" class="tab-content">
												<div id="latest" class="ember-view tab-pane fade active in padding-10 no-padding-bottom">
													<div class="" data-bindattr-14448="14448">
														<div class="row no-space">
															<div id="live-graph-container" class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
																<h4 class="text-center">Live Visitors</h4>
																<div class="yaxisLabel">
																	<div style="padding : 0 5px;">Visitors count</div>
																</div>
																<div id="live-graph" class="chart-large txt-color-blue" style="width: 100%; height: 235px; padding: 0px; position: relative;">
																	<canvas class="flot-base" width="865" height="235" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 865px; height: 235px;"></canvas>
																	<div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);">
																		<div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; display: block;">
																			<div class="flot-tick-label tickLabel" style="position: absolute; top: 215px; left: 10px; text-align: right;">0</div>
																			<div class="flot-tick-label tickLabel" style="position: absolute; top: 174px; left: 10px; text-align: right;">2</div>
																			<div class="flot-tick-label tickLabel" style="position: absolute; top: 133px; left: 10px; text-align: right;">4</div>
																			<div class="flot-tick-label tickLabel" style="position: absolute; top: 92px; left: 10px; text-align: right;">6</div>
																			<div class="flot-tick-label tickLabel" style="position: absolute; top: 51px; left: 10px; text-align: right;">8</div>
																			<div class="flot-tick-label tickLabel" style="position: absolute; top: 10px; left: 10px; text-align: right;">10</div>
																		</div>
																	</div>
																	<canvas class="flot-overlay" width="865" height="235" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 865px; height: 235px;"></canvas>
																</div>
															</div>
															<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 show-stats">
																<div class="row">
																	<div id="ember14449" class="ember-view col-xs-6 col-sm-6 col-md-12 col-lg-12"><span class="text">Missed Chats<span class="pull-right">0/1</span></span>
																		<div class="progress">
																			<div class="progress-bar bg-color-red" style="width: 0%" data-bindattr-14461="14461"></div>
																		</div>
																	</div>
																	<div id="ember14450" class="ember-view col-xs-6 col-sm-6 col-md-12 col-lg-12"><span class="text">Positive Sentiment<span class="pull-right">0%</span></span>
																		<div class="progress">
																			<div class="progress-bar bg-color-blue" style="width: 0%" data-bindattr-14465="14465"></div>
																		</div>
																	</div>
																	<div id="ember14451" class="ember-view col-xs-6 col-sm-6 col-md-12 col-lg-12"><span class="text">Return Visitors<span class="pull-right">60%</span></span>
																		<div class="progress">
																			<div class="progress-bar bg-color-blue" style="width: 60%" data-bindattr-14468="14468"></div>
																		</div>
																	</div>
																	<div id="ember14452" class="ember-view col-xs-6 col-sm-6 col-md-12 col-lg-12"><span class="text">Engagement<span class="pull-right">20%</span></span>
																		<div class="progress">
																			<div class="progress-bar bg-color-blue" style="width: 20%" data-bindattr-14471="14471"></div>
																		</div>
																	</div>
																	<div id="ember14453" class="ember-view col-xs-6 col-sm-6 col-md-12 col-lg-12"><span class="text">Availability<span class="pull-right">68%</span></span>
																		<div class="progress">
																			<div class="progress-bar bg-color-blue" style="width: 68%" data-bindattr-14474="14474"></div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="show-stat-microcharts">
															<div id="ember14454" class="ember-view col-xs-12 col-sm-3 col-md-3 col-lg-3">
																<div class="microcharts-container">
																	<div class="pie-chart-container">
																		<div class="easy-pie-chart" data-percent="1" data-bindattr-14476="14476" data-original-title="Daily average visitors VS last 24 hours visitors" data-bindattr-14477="14477"><span class="percent percent-sign">1</span>
																			<canvas height="50" width="50"></canvas>
																		</div>
																	</div>
																	<div class="microchart-sparkline-container">
																		<div class="sparkline">
																			<canvas width="70" height="33" style="display: inline-block; width: 70px; height: 33px; vertical-align: top;"></canvas>
																		</div>
																		<ul class="smaller-stat">
																			<li><span class="label bg-color-greenLight text-center" data-placement="bottom" data-original-title="Highest visitor count per day in last 7 days" data-bindattr-14479="14479"><i class="fa fa-caret-up"></i>20</span></li>
																			<li><span class="label bg-color-blueLight text-center" data-placement="bottom" data-original-title="Lowest visitor count per day in last 7 days" data-bindattr-14481="14481"><i class="fa fa-caret-down"></i>5</span></li>
																		</ul>
																	</div>
																</div>
																<p class="easy-pie-title text-center">Visitors</p>
															</div>
															<div id="ember14455" class="ember-view col-xs-12 col-sm-3 col-md-3 col-lg-3">
																<div class="microcharts-container">
																	<div class="pie-chart-container">
																		<div class="easy-pie-chart" data-percent="1" data-bindattr-14484="14484" data-original-title="Daily average visits VS last 24 hours visits" data-bindattr-14485="14485"><span class="percent percent-sign">1</span>
																			<canvas height="50" width="50"></canvas>
																		</div>
																	</div>
																	<div class="microchart-sparkline-container">
																		<div class="sparkline">
																			<canvas width="70" height="33" style="display: inline-block; width: 70px; height: 33px; vertical-align: top;"></canvas>
																		</div>
																		<ul class="smaller-stat">
																			<li><span class="label bg-color-greenLight text-center" data-placement="bottom" data-original-title="Highest visit per day in last 7 days" data-bindattr-14487="14487"><i class="fa fa-caret-up"></i>22</span></li>
																			<li><span class="label bg-color-blueLight text-center" data-placement="bottom" data-original-title="Lowest visit per day in last 7 days" data-bindattr-14489="14489"><i class="fa fa-caret-down"></i>5</span></li>
																		</ul>
																	</div>
																</div>
																<p class="easy-pie-title text-center">Visits</p>
															</div>
															<div id="ember14456" class="ember-view col-xs-12 col-sm-3 col-md-3 col-lg-3">
																<div class="microcharts-container">
																	<div class="pie-chart-container">
																		<div class="easy-pie-chart" data-percent="-8" data-bindattr-14492="14492" data-original-title="Daily average page views VS last 24 hours page views" data-bindattr-14493="14493"><span class="percent percent-sign">-8</span>
																			<canvas height="50" width="50"></canvas>
																		</div>
																	</div>
																	<div class="microchart-sparkline-container">
																		<div class="sparkline">
																			<canvas width="70" height="33" style="display: inline-block; width: 70px; height: 33px; vertical-align: top;"></canvas>
																		</div>
																		<ul class="smaller-stat">
																			<li><span class="label bg-color-greenLight text-center" data-placement="bottom" data-original-title="Highest page views per day in last 7 days" data-bindattr-14495="14495"><i class="fa fa-caret-up"></i>24</span></li>
																			<li><span class="label bg-color-blueLight text-center" data-placement="bottom" data-original-title="Lowest page views per day in last 7 days" data-bindattr-14497="14497"><i class="fa fa-caret-down"></i>5</span></li>
																		</ul>
																	</div>
																</div>
																<p class="easy-pie-title text-center">Page Views</p>
															</div>
															<div id="ember14457" class="ember-view col-xs-12 col-sm-3 col-md-3 col-lg-3">
																<div class="microcharts-container">
																	<div class="pie-chart-container">
																		<div class="easy-pie-chart" data-percent="329" data-bindattr-14500="14500" data-original-title="Daily average chats VS last 24 hours chats" data-bindattr-14501="14501"><span class="percent percent-sign">329</span>
																			<canvas height="50" width="50"></canvas>
																		</div>
																	</div>
																	<div class="microchart-sparkline-container">
																		<div class="sparkline">
																			<canvas width="70" height="33" style="display: inline-block; width: 70px; height: 33px; vertical-align: top;"></canvas>
																		</div>
																		<ul class="smaller-stat">
																			<li><span class="label bg-color-greenLight text-center" data-placement="bottom" data-original-title="Highest chats per day in last 7 days" data-bindattr-14503="14503"><i class="fa fa-caret-up"></i>5</span></li>
																			<li><span class="label bg-color-blueLight text-center" data-placement="bottom" data-original-title="Lowest chats per day in last 7 days" data-bindattr-14505="14505"><i class="fa fa-caret-down"></i>0</span></li>
																		</ul>
																	</div>
																</div>
																<p class="easy-pie-title text-center">Chats</p>
															</div>
														</div>
													</div>
													<div class="load-container text-center hidden" data-bindattr-14458="14458">
														<button class="btn btn-danger reload-view">Error loading view. Click here to reload</button>
													</div>
													<div class="load-container text-center hidden" data-bindattr-14459="14459"><img src="a34/images/ajax-loader-big.gif"></div>
												</div>
												<div id="historical" class="ember-view tab-pane fade">
													<div class="widget-body-toolbar bg-color-white" style="position: relative;">
														<div class="btn-group pull-left" style="margin-right: 15px; position : static;">
															<button class="btn dropdown-toggle btn-xs btn-primary" data-toggle="dropdown" aria-expanded="false" style="margin-top: 0px;">Mar 22nd, 2018 - Mar 28th, 2018 <i class="fa fa-caret-down"></i></button>
															<div class="dropdown-menu smart-form" role="menu" style="position: absolute; top : 30px; left : 10px;" id="date-range-form">
																<form>
																	<fieldset>
																		<section class="col col-6">
																			<label class="input"> <i class="icon-append fa fa-calendar"></i>
																				<input type="text" class="form-control input-sm hasDatepicker" id="historical-from" placeholder="Date From">
																			</label>
																		</section>
																		<section class="col col-6">
																			<label class="input"> <i class="icon-append fa fa-calendar"></i>
																				<input type="text" class="form-control input-sm hasDatepicker" id="historical-to" placeholder="Date To">
																			</label>
																		</section>
																	</fieldset>
																</form>
																<footer>
																	<button type="submit" class="btn btn-primary" id="applyFilter">Apply</button>
																	<button type="submit" class="btn btn-default" id="closeFilter">Close</button>
																</footer>
															</div>
														</div>
														<div class="smart-form pull-right">
															<div id="legends" class="pull-left"></div>
															<div class="inline-group pull-left">
																<label for="gra-chats" class="checkbox">
																	<input type="checkbox" class="graph-filters" name="gra-chats" id="gra-chats" data-segment="chats" checked="checked"><i></i>Chats</label>
																<label for="gra-page-views" class="checkbox">
																	<input type="checkbox" class="graph-filters" name="gra-page-views" id="gra-page-views" data-segment="pageViews" checked="checked"><i></i>Page Views</label>
																<label for="gra-visits" class="checkbox">
																	<input type="checkbox" class="graph-filters" name="gra-visits" id="gra-visits" data-segment="visits" checked="checked"><i></i>Visits</label>
																<label for="gra-visitors" class="checkbox">
																	<input type="checkbox" class="graph-filters" name="gra-visitors" id="gra-visitors" data-segment="visitors" checked="checked"><i></i>Visitors</label>
															</div>
															<div class="clearfix"></div>
														</div>
														<div class="clearfix"></div>
													</div>
													<div id="historical-graph-container" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 hidden">
														<div id="historical-graph"></div>
													</div>
													<div class="load-container text-center reload-view hidden">
														<button class="btn btn-danger reload-button">Error loading view. Click here to reload</button>
													</div>
													<div class="load-container text-center loading-view"><img src="a34/images/ajax-loader-big.gif"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</article>
						</section>
					</div>
					<section>
						<div id="history-section" class="ember-view view-section">
							<article class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
								<div class="jarviswidget" id="wid-id-1" data-widget-togglebutton="false" data-widget-editbutton="false" data-widget-fullscreenbutton="false" data-widget-colorbutton="false" data-widget-deletebutton="false">
									<header><span class="widget-icon"> <i class="fa fa-history"></i> </span>
										<h2>History</h2>
										<div class="widget-toolbar" role="menu">
											<div class="btn-group">
												<button class="btn dropdown-toggle btn-xs btn-default" data-toggle="dropdown" aria-expanded="false">Site / VOOChat Page&nbsp;:&nbsp;frank&nbsp;<i class="fa fa-caret-down"></i></button>
												<ul class="dropdown-menu pull-right" style="max-height : 200px; overflow: auto;">
													<li id="5a60123e3098e70e78bf9fad" data-bindattr-14520="14520" class="change-history-list"><a href="javascript:void(0);">frank</a></li>
													<li id="5a67ac584b401e45400c5653" data-bindattr-14522="14522" class="change-history-list"><a href="javascript:void(0);">Pickering Toyota Live Video Chat</a></li>
													<li id="5a55196ed7591465c7069586" data-bindattr-14524="14524" class="change-history-list"><a href="javascript:void(0);">Uniqks</a></li>
												</ul>
											</div>
										</div>
									</header>
									<div role="content">
										<table id="history-list" class="table table-striped table-bordered table-hover dataTable no-footer" width="100%" role="grid" aria-describedby="dt_basic_info" style="width: 100%;">
											<thead>
											<tr role="row">
												<th tabindex="0" aria-controls="dt_basic" class="text-center" style="width: 30%; max-width : 30%">Visitor</th>
												<th tabindex="0" aria-controls="dt_basic" class="text-center" style="width: 30%; max-width : 30%">Agent</th>
												<th tabindex="0" aria-controls="dt_basic" class="text-center" style="width: 15%; max-width : 15%">Time</th>
											</tr>
											</thead>
											<tbody class="test"></tbody>
											<tfoot class="hidden" data-bindattr-14509="14509">
											<tr>
												<td colspan="3"><a id="next-page" class="btn btn-default next pull-right disabled" data-bindattr-14510="14510" href="javascript:void(0);" data-placement="top" data-original-title="Older">Load More</a></td>
											</tr>
											</tfoot>
										</table>
										<div class="alert alert-info text-center fade hidden" data-bindattr-14511="14511" id="new-history" style="position:absolute; top : 0; width: 100%">
											<button class="close" data-dismiss="alert">×</button><a id="retrieveHistory" href="javascript:void(0);" style="text-decoration:underline" title="Retrieve new history"><h4 class="alert-heading message">New Message : 0</h4></a></div>
										<div class="no-data" data-bindattr-14513="14513">
											<p class="no-history">No chat history</p>
										</div>
									</div>
								</div>
							</article>
						</div>
						<div id="feeds-section" class="ember-view">
							<article class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
								<div class="jarviswidget" id="wid-id-1" data-widget-togglebutton="false" data-widget-editbutton="false" data-widget-fullscreenbutton="false" data-widget-colorbutton="false" data-widget-deletebutton="false">
									<header><span class="widget-icon"> <i class="fa fa-rss-square"></i> </span>
										<h2>Blog Posts</h2></header>
									<div id="feed-content" role="content">
										<ul>
											<li><a href="https://www.VOOChat/events/meet-tawk-to-usa/" data-bindattr-14527="14527" target="_blank">Meet VOOChat &gt; USA</a></li>
											<li><a href="https://www.VOOChat/integrations/update-shopify-integration/" data-bindattr-14529="14529" target="_blank">Update : Shopify integration</a></li>
											<li><a href="https://www.VOOChat/events/meet-tawk-to-apac/" data-bindattr-14531="14531" target="_blank">Meet VOOChat &gt; APAC</a></li>
											<li><a href="https://www.VOOChat/customer-happiness/you-are-one-in-a-million/" data-bindattr-14533="14533" target="_blank">You are One in a Million</a></li>
											<li><a href="https://www.VOOChat/reference/9-things-you-probably-didnt-know-you-could-do-with-tawk-to/" data-bindattr-14535="14535" target="_blank">9 Things you probably didn’t know you could do with VOOChat</a></li>
											<li><a href="https://www.VOOChat/customer-happiness/what-we-learned-in-the-first-180-days-of-the-hired-agents-beta/" data-bindattr-14537="14537" target="_blank">What we learned in the first 180 days of the “Hired Agents Beta”</a></li>
											<li><a href="https://www.VOOChat/events/meet-us-in-nyc-at-ase17-this-week/" data-bindattr-14539="14539" target="_blank">Meet us in NYC at #ASE17 this week</a></li>
											<li><a href="https://www.VOOChat/updates/new-ios-android-mobile-apps/" data-bindattr-14541="14541" target="_blank">New iOS &amp; Android Mobile Apps</a></li>
											<li><a href="https://www.VOOChat/customer-happiness/what-we-learned-in-the-first-90-days-of-the-hired-agents-beta/" data-bindattr-14543="14543" target="_blank">What we learned in the first 90 days of the “Hired Agents Beta”</a></li>
											<li><a href="https://www.VOOChat/updates/update-mail-notifications/" data-bindattr-14545="14545" target="_blank">Update : Mail Notifications</a></li>
										</ul>
									</div>
								</div>
							</article>
						</div>
					</section>
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
																<div class="pull-right"><span class="visitor-ip hover-location" rel="popover" title="" data-placement="top" data-content="" data-bindattr-6173="6173" data-original-title="">104.255.12.73</span><span class="visitor-time hover-location" rel="popover" title="" data-placement="bottom" data-content="Visitor's current local time" data-original-title="">12:43 AM</span></div>
																<div class="clearfix"></div>
															</div>
														</div>
													</div>
													<div class="fields-container">
														<div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0.1 Safari/604.3.5" data-bindattr-6176="6176" data-original-title="" title=""><span class="sprite-background safari-browser" data-bindattr-6177="6177" style="margin : 0 2px; vertical-align: middle;"></span><span class="sprite-background mac-os" data-bindattr-6178="6178" style="vertical-align: middle;"></span>
																<div class="clearfix"></div>
															</div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Duration" data-original-title="" title="">00:37:47</div>
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