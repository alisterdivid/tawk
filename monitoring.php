<?php
require_once("common/header.php");
?>
<div id="main" class="ember-view">
	<div id="ember372" class="ember-view dynamic-view" style="display: block;">
		<div id="visitor-monitoring-view" class="ember-view">
			<div class="content">
				<div class="row view-header">
					<div class="col-xs-4 col-sm-3 col-md-3 col-lg-3">
						<h1 class="page-title txt-color-blueDark"><span class="fa-stack fa-lg" style="font-size: 24px;width: 24px;height: 24px;line-height: 24px;vertical-align: middle;margin-right: 3px;"><i class="fa fa-desktop fa-stack-2x" style="font-size: 24px;left: -2px;"></i><i class="fa fa-line-chart fa-stack-1x" style="font-size: 16px;left: -5px;bottom: 3px;"></i></span>Monitoring</h1></div>
					<div class="col-xs-8 col-sm-9 col-md-9 col-lg-9 pull-right">
						<form id="searchMonitoring" class="pull-right">
							<fieldset>
								<div class="input-group">
									<div class="input-group-btn">
										<button id="openFilter" type="button" class="btn btn-default pull-right" tabindex="-1" aria-expanded="false"><i class="fa fa-filter"></i> Filter Visitors <span class="caret"></span></button>
										<div class="dropdown-menu pull-right smart-form" role="menu" id="visitors-filter">
											<fieldset>
												<section class="col col-6">
													<label id="properties" class="select custom-select open-selection">
														<div>
															<p>Sites/VOOChat Pages</p>
														</div><i></i></label>
												</section>
												<section class="col col-6">
													<label id="countries" class="select custom-select open-selection">
														<div>
															<p>Countries</p>
														</div><i></i></label>
												</section>
												<section class="col col-6">
													<label id="agents" class="select custom-select open-selection">
														<div>
															<p>Agents</p>
														</div><i></i></label>
												</section>
												<section class="col col-6">
													<label id="tags" class="select custom-select open-selection">
														<div>
															<p>Tags</p>
														</div><i></i></label>
												</section>
												<section class="col col-6">
													<label id="ember12866" class="ember-view select custom-select">
														<div>
															<p>Status&nbsp;:&nbsp;<span class="selected-value">All</span></p>
														</div><i></i>
														<select class="monitoring-status-select" data-bindattr-12912="12912" data-bindattr-12913="12913">
															<option value="all" data-bindattr-12915="12915">All</option>
															<option value="online" data-bindattr-12917="12917">Online</option>
															<option value="away" data-bindattr-12919="12919">Away</option>
														</select>
													</label>
												</section>
											</fieldset>
											<footer>
												<button type="submit" class="btn btn-primary search">Filter</button>
												<button type="submit" class="btn bg-color-teal txt-color-white" id="resetFilter">Reset</button>
												<button type="submit" class="btn btn-default" id="closeFilter">Close</button>
											</footer>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
						<div class="input-group pull-right sleep-button">
							<button id="set-timeout" class="btn btn-default bg-color-blue txt-color-white" data-toggle="dropdown" rel="popover-hover" data-placement="left" data-content="Start sleep mode after I have been inactive for" data-original-title="" title=""><i class="fa fa-clock-o"></i></button>
							<ul class="dropdown-menu">
								<li class="active timeout-select" data-bindattr-14387="14387"><a href="javascript:void(0);" id="10" data-bindattr-14388="14388" class="select-timeout">10 minutes</a></li>
								<li class="timeout-select" data-bindattr-14390="14390"><a href="javascript:void(0);" id="30" data-bindattr-14391="14391" class="select-timeout">30 minutes</a></li>
								<li class="timeout-select" data-bindattr-14393="14393"><a href="javascript:void(0);" id="60" data-bindattr-14394="14394" class="select-timeout">1 hour</a></li>
								<li class="timeout-select" data-bindattr-14396="14396"><a href="javascript:void(0);" id="120" data-bindattr-14397="14397" class="select-timeout">2 hours</a></li>
								<li class="timeout-select" data-bindattr-14399="14399"><a href="javascript:void(0);" id="-1" data-bindattr-14400="14400" class="select-timeout">Disable Sleep Mode</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div id="properties-list-container" class="smart-form selection-main-container">
					<div class="list-header">
						<label class="search-field input pull-right">
							<input type="input" placeholder="Search" id="search-property-input" class="search-input">
							<button><i class="fa fa-search"></i></button>
						</label>
						<label class="checkbox pull-left" data-ember-action="12867">
							<input type="checkbox" name="all-properties-checkbox" id="all-properties-checkbox" checked="checked" data-bindattr-12868="12868"><i></i>All Sites and VOOChat Pages</label>
						<div class="clearfix"></div>
					</div>
					<div class="list-content">
						<ul id="sites-selection-container">
							<li id="all-sites" class="dropdown-header">
								<label class="checkbox" data-ember-action="12869">
									<input type="checkbox" id="all-sites-checkbox" name="all-sites-checkbox" checked="checked" data-bindattr-12870="12870"><i></i>All Sites</label>
							</li>
							<li id="5a67ac584b401e45400c5653" data-bindattr-12921="12921" class="" data-bindattr-12922="12922">
								<label class="checkbox" data-ember-action="12923">
									<input type="checkbox" class="sites-checkbox inner-checkbox" checked="checked" data-bindattr-12924="12924"><i></i>Pickering Toyota Live Video Chat</label>
								<ul class="visible" data-bindattr-12926="12926">
									<li>
										<label class="checkbox" data-ember-action="12927">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12928="12928"><i></i>All Widgets</label>
										<ul>
											<li id="default" data-bindattr-12929="12929" class="hidden" data-bindattr-12930="12930">
												<label class="checkbox" data-bindattr-12931="12931" data-ember-action="12932">
													<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12933="12933"><i></i>default</label>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li id="5a55196ed7591465c7069586" data-bindattr-12935="12935" class="" data-bindattr-12936="12936">
								<label class="checkbox" data-ember-action="12937">
									<input type="checkbox" class="sites-checkbox inner-checkbox" checked="checked" data-bindattr-12938="12938"><i></i>Uniqks</label>
								<ul class="visible" data-bindattr-12940="12940">
									<li>
										<label class="checkbox" data-ember-action="12941">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12942="12942"><i></i>All Widgets</label>
										<ul>
											<li id="default" data-bindattr-12943="12943" class="hidden" data-bindattr-12944="12944">
												<label class="checkbox" data-bindattr-12945="12945" data-ember-action="12946">
													<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12947="12947"><i></i>default</label>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
						<ul id="pages-selection-container">
							<li id="all-pages" class="dropdown-header">
								<label class="checkbox" data-ember-action="12871">
									<input type="checkbox" id="all-pages-checkbox" name="all-pages-checkbox" checked="checked" data-bindattr-12872="12872"><i></i>All VOOChat Pages</label>
							</li>
							<li id="5a60123e3098e70e78bf9fad" data-bindattr-12949="12949" class="" data-bindattr-12950="12950">
								<label class="checkbox" data-ember-action="12951">
									<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12952="12952"><i></i>frank</label>
							</li>
						</ul>
					</div>
					<div class="list-button-container">
						<button id="close-properties-selection" class="btn btn-primary close-selection">Done</button>
					</div>
				</div>
				<div id="countries-list-container" class="smart-form selection-main-container">
					<div id="all-countries" class="list-header">
						<label class="search-field input pull-right">
							<input type="input" placeholder="Search" id="search-country-input" class="search-input">
							<button><i class="fa fa-search"></i></button>
						</label>
						<label class="checkbox pull-left" data-ember-action="12873">
							<input type="checkbox" name="all-countries-checkbox" id="all-countries-checkbox" checked="checked" data-bindattr-12874="12874"><i></i>All Countries</label>
						<div class="clearfix"></div>
					</div>
					<div class="list-content">
						<ul>
							<li id="A" data-bindattr-12954="12954" class="visible" data-bindattr-12955="12955">
								<p class="index-header">A</p>
								<ul>
									<li id="AF" data-bindattr-12957="12957" class="" data-bindattr-12958="12958">
										<label class="checkbox" data-ember-action="12959">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12960="12960"><i></i>Afghanistan</label>
									</li>
									<li id="AL" data-bindattr-12962="12962" class="" data-bindattr-12963="12963">
										<label class="checkbox" data-ember-action="12964">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12965="12965"><i></i>Albania</label>
									</li>
									<li id="DZ" data-bindattr-12967="12967" class="" data-bindattr-12968="12968">
										<label class="checkbox" data-ember-action="12969">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12970="12970"><i></i>Algeria</label>
									</li>
									<li id="AS" data-bindattr-12972="12972" class="" data-bindattr-12973="12973">
										<label class="checkbox" data-ember-action="12974">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12975="12975"><i></i>American Samoa</label>
									</li>
									<li id="AD" data-bindattr-12977="12977" class="" data-bindattr-12978="12978">
										<label class="checkbox" data-ember-action="12979">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12980="12980"><i></i>Andorra</label>
									</li>
									<li id="AO" data-bindattr-12982="12982" class="" data-bindattr-12983="12983">
										<label class="checkbox" data-ember-action="12984">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12985="12985"><i></i>Angola</label>
									</li>
									<li id="AI" data-bindattr-12987="12987" class="" data-bindattr-12988="12988">
										<label class="checkbox" data-ember-action="12989">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12990="12990"><i></i>Anguilla</label>
									</li>
									<li id="AQ" data-bindattr-12992="12992" class="" data-bindattr-12993="12993">
										<label class="checkbox" data-ember-action="12994">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-12995="12995"><i></i>Antarctica</label>
									</li>
									<li id="AG" data-bindattr-12997="12997" class="" data-bindattr-12998="12998">
										<label class="checkbox" data-ember-action="12999">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13000="13000"><i></i>Antigua And Barbuda</label>
									</li>
									<li id="AR" data-bindattr-13002="13002" class="" data-bindattr-13003="13003">
										<label class="checkbox" data-ember-action="13004">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13005="13005"><i></i>Argentina</label>
									</li>
									<li id="AM" data-bindattr-13007="13007" class="" data-bindattr-13008="13008">
										<label class="checkbox" data-ember-action="13009">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13010="13010"><i></i>Armenia</label>
									</li>
									<li id="AW" data-bindattr-13012="13012" class="" data-bindattr-13013="13013">
										<label class="checkbox" data-ember-action="13014">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13015="13015"><i></i>Aruba</label>
									</li>
									<li id="AU" data-bindattr-13017="13017" class="" data-bindattr-13018="13018">
										<label class="checkbox" data-ember-action="13019">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13020="13020"><i></i>Australia</label>
									</li>
									<li id="AT" data-bindattr-13022="13022" class="" data-bindattr-13023="13023">
										<label class="checkbox" data-ember-action="13024">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13025="13025"><i></i>Austria</label>
									</li>
									<li id="AZ" data-bindattr-13027="13027" class="" data-bindattr-13028="13028">
										<label class="checkbox" data-ember-action="13029">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13030="13030"><i></i>Azerbaijan</label>
									</li>
								</ul>
							</li>
							<li id="å" data-bindattr-13032="13032" class="visible" data-bindattr-13033="13033">
								<p class="index-header">å</p>
								<ul>
									<li id="AX" data-bindattr-13035="13035" class="" data-bindattr-13036="13036">
										<label class="checkbox" data-ember-action="13037">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13038="13038"><i></i>åLand Islands</label>
									</li>
								</ul>
							</li>
							<li id="B" data-bindattr-13040="13040" class="visible" data-bindattr-13041="13041">
								<p class="index-header">B</p>
								<ul>
									<li id="BS" data-bindattr-13043="13043" class="" data-bindattr-13044="13044">
										<label class="checkbox" data-ember-action="13045">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13046="13046"><i></i>Bahamas</label>
									</li>
									<li id="BH" data-bindattr-13048="13048" class="" data-bindattr-13049="13049">
										<label class="checkbox" data-ember-action="13050">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13051="13051"><i></i>Bahrain</label>
									</li>
									<li id="BD" data-bindattr-13053="13053" class="" data-bindattr-13054="13054">
										<label class="checkbox" data-ember-action="13055">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13056="13056"><i></i>Bangladesh</label>
									</li>
									<li id="BB" data-bindattr-13058="13058" class="" data-bindattr-13059="13059">
										<label class="checkbox" data-ember-action="13060">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13061="13061"><i></i>Barbados</label>
									</li>
									<li id="BY" data-bindattr-13063="13063" class="" data-bindattr-13064="13064">
										<label class="checkbox" data-ember-action="13065">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13066="13066"><i></i>Belarus</label>
									</li>
									<li id="BE" data-bindattr-13068="13068" class="" data-bindattr-13069="13069">
										<label class="checkbox" data-ember-action="13070">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13071="13071"><i></i>Belgium</label>
									</li>
									<li id="BZ" data-bindattr-13073="13073" class="" data-bindattr-13074="13074">
										<label class="checkbox" data-ember-action="13075">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13076="13076"><i></i>Belize</label>
									</li>
									<li id="BJ" data-bindattr-13078="13078" class="" data-bindattr-13079="13079">
										<label class="checkbox" data-ember-action="13080">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13081="13081"><i></i>Benin</label>
									</li>
									<li id="BM" data-bindattr-13083="13083" class="" data-bindattr-13084="13084">
										<label class="checkbox" data-ember-action="13085">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13086="13086"><i></i>Bermuda</label>
									</li>
									<li id="BT" data-bindattr-13088="13088" class="" data-bindattr-13089="13089">
										<label class="checkbox" data-ember-action="13090">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13091="13091"><i></i>Bhutan</label>
									</li>
									<li id="BO" data-bindattr-13093="13093" class="" data-bindattr-13094="13094">
										<label class="checkbox" data-ember-action="13095">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13096="13096"><i></i>Bolivia, Plurinational State Of</label>
									</li>
									<li id="BQ" data-bindattr-13098="13098" class="" data-bindattr-13099="13099">
										<label class="checkbox" data-ember-action="13100">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13101="13101"><i></i>Bonaire, Sint Eustatius And Saba</label>
									</li>
									<li id="BA" data-bindattr-13103="13103" class="" data-bindattr-13104="13104">
										<label class="checkbox" data-ember-action="13105">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13106="13106"><i></i>Bosnia And Herzegovina</label>
									</li>
									<li id="BW" data-bindattr-13108="13108" class="" data-bindattr-13109="13109">
										<label class="checkbox" data-ember-action="13110">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13111="13111"><i></i>Botswana</label>
									</li>
									<li id="BV" data-bindattr-13113="13113" class="" data-bindattr-13114="13114">
										<label class="checkbox" data-ember-action="13115">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13116="13116"><i></i>Bouvet Island</label>
									</li>
									<li id="BR" data-bindattr-13118="13118" class="" data-bindattr-13119="13119">
										<label class="checkbox" data-ember-action="13120">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13121="13121"><i></i>Brazil</label>
									</li>
									<li id="IO" data-bindattr-13123="13123" class="" data-bindattr-13124="13124">
										<label class="checkbox" data-ember-action="13125">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13126="13126"><i></i>British Indian Ocean Territory</label>
									</li>
									<li id="BN" data-bindattr-13128="13128" class="" data-bindattr-13129="13129">
										<label class="checkbox" data-ember-action="13130">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13131="13131"><i></i>Brunei Darussalam</label>
									</li>
									<li id="BG" data-bindattr-13133="13133" class="" data-bindattr-13134="13134">
										<label class="checkbox" data-ember-action="13135">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13136="13136"><i></i>Bulgaria</label>
									</li>
									<li id="BF" data-bindattr-13138="13138" class="" data-bindattr-13139="13139">
										<label class="checkbox" data-ember-action="13140">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13141="13141"><i></i>Burkina Faso</label>
									</li>
									<li id="BI" data-bindattr-13143="13143" class="" data-bindattr-13144="13144">
										<label class="checkbox" data-ember-action="13145">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13146="13146"><i></i>Burundi</label>
									</li>
								</ul>
							</li>
							<li id="C" data-bindattr-13148="13148" class="visible" data-bindattr-13149="13149">
								<p class="index-header">C</p>
								<ul>
									<li id="KH" data-bindattr-13151="13151" class="" data-bindattr-13152="13152">
										<label class="checkbox" data-ember-action="13153">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13154="13154"><i></i>Cambodia</label>
									</li>
									<li id="CM" data-bindattr-13156="13156" class="" data-bindattr-13157="13157">
										<label class="checkbox" data-ember-action="13158">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13159="13159"><i></i>Cameroon</label>
									</li>
									<li id="CA" data-bindattr-13161="13161" class="" data-bindattr-13162="13162">
										<label class="checkbox" data-ember-action="13163">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13164="13164"><i></i>Canada</label>
									</li>
									<li id="CV" data-bindattr-13166="13166" class="" data-bindattr-13167="13167">
										<label class="checkbox" data-ember-action="13168">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13169="13169"><i></i>Cape Verde</label>
									</li>
									<li id="KY" data-bindattr-13171="13171" class="" data-bindattr-13172="13172">
										<label class="checkbox" data-ember-action="13173">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13174="13174"><i></i>Cayman Islands</label>
									</li>
									<li id="CF" data-bindattr-13176="13176" class="" data-bindattr-13177="13177">
										<label class="checkbox" data-ember-action="13178">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13179="13179"><i></i>Central African Republic</label>
									</li>
									<li id="TD" data-bindattr-13181="13181" class="" data-bindattr-13182="13182">
										<label class="checkbox" data-ember-action="13183">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13184="13184"><i></i>Chad</label>
									</li>
									<li id="CL" data-bindattr-13186="13186" class="" data-bindattr-13187="13187">
										<label class="checkbox" data-ember-action="13188">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13189="13189"><i></i>Chile</label>
									</li>
									<li id="CN" data-bindattr-13191="13191" class="" data-bindattr-13192="13192">
										<label class="checkbox" data-ember-action="13193">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13194="13194"><i></i>China</label>
									</li>
									<li id="CX" data-bindattr-13196="13196" class="" data-bindattr-13197="13197">
										<label class="checkbox" data-ember-action="13198">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13199="13199"><i></i>Christmas Island</label>
									</li>
									<li id="CC" data-bindattr-13201="13201" class="" data-bindattr-13202="13202">
										<label class="checkbox" data-ember-action="13203">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13204="13204"><i></i>Cocos (Keeling) Islands</label>
									</li>
									<li id="CO" data-bindattr-13206="13206" class="" data-bindattr-13207="13207">
										<label class="checkbox" data-ember-action="13208">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13209="13209"><i></i>Colombia</label>
									</li>
									<li id="KM" data-bindattr-13211="13211" class="" data-bindattr-13212="13212">
										<label class="checkbox" data-ember-action="13213">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13214="13214"><i></i>Comoros</label>
									</li>
									<li id="CG" data-bindattr-13216="13216" class="" data-bindattr-13217="13217">
										<label class="checkbox" data-ember-action="13218">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13219="13219"><i></i>Congo</label>
									</li>
									<li id="CD" data-bindattr-13221="13221" class="" data-bindattr-13222="13222">
										<label class="checkbox" data-ember-action="13223">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13224="13224"><i></i>Congo, The Democratic Republic Of The</label>
									</li>
									<li id="CK" data-bindattr-13226="13226" class="" data-bindattr-13227="13227">
										<label class="checkbox" data-ember-action="13228">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13229="13229"><i></i>Cook Islands</label>
									</li>
									<li id="CR" data-bindattr-13231="13231" class="" data-bindattr-13232="13232">
										<label class="checkbox" data-ember-action="13233">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13234="13234"><i></i>Costa Rica</label>
									</li>
									<li id="CI" data-bindattr-13236="13236" class="" data-bindattr-13237="13237">
										<label class="checkbox" data-ember-action="13238">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13239="13239"><i></i>CôTe D'Ivoire</label>
									</li>
									<li id="HR" data-bindattr-13241="13241" class="" data-bindattr-13242="13242">
										<label class="checkbox" data-ember-action="13243">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13244="13244"><i></i>Croatia</label>
									</li>
									<li id="CU" data-bindattr-13246="13246" class="" data-bindattr-13247="13247">
										<label class="checkbox" data-ember-action="13248">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13249="13249"><i></i>Cuba</label>
									</li>
									<li id="CW" data-bindattr-13251="13251" class="" data-bindattr-13252="13252">
										<label class="checkbox" data-ember-action="13253">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13254="13254"><i></i>CuraçAo</label>
									</li>
									<li id="CY" data-bindattr-13256="13256" class="" data-bindattr-13257="13257">
										<label class="checkbox" data-ember-action="13258">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13259="13259"><i></i>Cyprus</label>
									</li>
									<li id="CZ" data-bindattr-13261="13261" class="" data-bindattr-13262="13262">
										<label class="checkbox" data-ember-action="13263">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13264="13264"><i></i>Czech Republic</label>
									</li>
								</ul>
							</li>
							<li id="D" data-bindattr-13266="13266" class="visible" data-bindattr-13267="13267">
								<p class="index-header">D</p>
								<ul>
									<li id="DK" data-bindattr-13269="13269" class="" data-bindattr-13270="13270">
										<label class="checkbox" data-ember-action="13271">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13272="13272"><i></i>Denmark</label>
									</li>
									<li id="DJ" data-bindattr-13274="13274" class="" data-bindattr-13275="13275">
										<label class="checkbox" data-ember-action="13276">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13277="13277"><i></i>Djibouti</label>
									</li>
									<li id="DM" data-bindattr-13279="13279" class="" data-bindattr-13280="13280">
										<label class="checkbox" data-ember-action="13281">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13282="13282"><i></i>Dominica</label>
									</li>
									<li id="DO" data-bindattr-13284="13284" class="" data-bindattr-13285="13285">
										<label class="checkbox" data-ember-action="13286">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13287="13287"><i></i>Dominican Republic</label>
									</li>
								</ul>
							</li>
							<li id="E" data-bindattr-13289="13289" class="visible" data-bindattr-13290="13290">
								<p class="index-header">E</p>
								<ul>
									<li id="EC" data-bindattr-13292="13292" class="" data-bindattr-13293="13293">
										<label class="checkbox" data-ember-action="13294">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13295="13295"><i></i>Ecuador</label>
									</li>
									<li id="EG" data-bindattr-13297="13297" class="" data-bindattr-13298="13298">
										<label class="checkbox" data-ember-action="13299">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13300="13300"><i></i>Egypt</label>
									</li>
									<li id="SV" data-bindattr-13302="13302" class="" data-bindattr-13303="13303">
										<label class="checkbox" data-ember-action="13304">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13305="13305"><i></i>El Salvador</label>
									</li>
									<li id="GQ" data-bindattr-13307="13307" class="" data-bindattr-13308="13308">
										<label class="checkbox" data-ember-action="13309">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13310="13310"><i></i>Equatorial Guinea</label>
									</li>
									<li id="ER" data-bindattr-13312="13312" class="" data-bindattr-13313="13313">
										<label class="checkbox" data-ember-action="13314">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13315="13315"><i></i>Eritrea</label>
									</li>
									<li id="EE" data-bindattr-13317="13317" class="" data-bindattr-13318="13318">
										<label class="checkbox" data-ember-action="13319">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13320="13320"><i></i>Estonia</label>
									</li>
									<li id="ET" data-bindattr-13322="13322" class="" data-bindattr-13323="13323">
										<label class="checkbox" data-ember-action="13324">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13325="13325"><i></i>Ethiopia</label>
									</li>
								</ul>
							</li>
							<li id="F" data-bindattr-13327="13327" class="visible" data-bindattr-13328="13328">
								<p class="index-header">F</p>
								<ul>
									<li id="FK" data-bindattr-13330="13330" class="" data-bindattr-13331="13331">
										<label class="checkbox" data-ember-action="13332">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13333="13333"><i></i>Falkland Islands (Malvinas)</label>
									</li>
									<li id="FO" data-bindattr-13335="13335" class="" data-bindattr-13336="13336">
										<label class="checkbox" data-ember-action="13337">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13338="13338"><i></i>Faroe Islands</label>
									</li>
									<li id="FJ" data-bindattr-13340="13340" class="" data-bindattr-13341="13341">
										<label class="checkbox" data-ember-action="13342">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13343="13343"><i></i>Fiji</label>
									</li>
									<li id="FI" data-bindattr-13345="13345" class="" data-bindattr-13346="13346">
										<label class="checkbox" data-ember-action="13347">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13348="13348"><i></i>Finland</label>
									</li>
									<li id="FR" data-bindattr-13350="13350" class="" data-bindattr-13351="13351">
										<label class="checkbox" data-ember-action="13352">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13353="13353"><i></i>France</label>
									</li>
									<li id="GF" data-bindattr-13355="13355" class="" data-bindattr-13356="13356">
										<label class="checkbox" data-ember-action="13357">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13358="13358"><i></i>French Guiana</label>
									</li>
									<li id="PF" data-bindattr-13360="13360" class="" data-bindattr-13361="13361">
										<label class="checkbox" data-ember-action="13362">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13363="13363"><i></i>French Polynesia</label>
									</li>
									<li id="TF" data-bindattr-13365="13365" class="" data-bindattr-13366="13366">
										<label class="checkbox" data-ember-action="13367">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13368="13368"><i></i>French Southern Territories</label>
									</li>
								</ul>
							</li>
							<li id="G" data-bindattr-13370="13370" class="visible" data-bindattr-13371="13371">
								<p class="index-header">G</p>
								<ul>
									<li id="GA" data-bindattr-13373="13373" class="" data-bindattr-13374="13374">
										<label class="checkbox" data-ember-action="13375">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13376="13376"><i></i>Gabon</label>
									</li>
									<li id="GM" data-bindattr-13378="13378" class="" data-bindattr-13379="13379">
										<label class="checkbox" data-ember-action="13380">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13381="13381"><i></i>Gambia</label>
									</li>
									<li id="GE" data-bindattr-13383="13383" class="" data-bindattr-13384="13384">
										<label class="checkbox" data-ember-action="13385">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13386="13386"><i></i>Georgia</label>
									</li>
									<li id="DE" data-bindattr-13388="13388" class="" data-bindattr-13389="13389">
										<label class="checkbox" data-ember-action="13390">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13391="13391"><i></i>Germany</label>
									</li>
									<li id="GH" data-bindattr-13393="13393" class="" data-bindattr-13394="13394">
										<label class="checkbox" data-ember-action="13395">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13396="13396"><i></i>Ghana</label>
									</li>
									<li id="GI" data-bindattr-13398="13398" class="" data-bindattr-13399="13399">
										<label class="checkbox" data-ember-action="13400">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13401="13401"><i></i>Gibraltar</label>
									</li>
									<li id="GR" data-bindattr-13403="13403" class="" data-bindattr-13404="13404">
										<label class="checkbox" data-ember-action="13405">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13406="13406"><i></i>Greece</label>
									</li>
									<li id="GL" data-bindattr-13408="13408" class="" data-bindattr-13409="13409">
										<label class="checkbox" data-ember-action="13410">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13411="13411"><i></i>Greenland</label>
									</li>
									<li id="GD" data-bindattr-13413="13413" class="" data-bindattr-13414="13414">
										<label class="checkbox" data-ember-action="13415">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13416="13416"><i></i>Grenada</label>
									</li>
									<li id="GP" data-bindattr-13418="13418" class="" data-bindattr-13419="13419">
										<label class="checkbox" data-ember-action="13420">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13421="13421"><i></i>Guadeloupe</label>
									</li>
									<li id="GU" data-bindattr-13423="13423" class="" data-bindattr-13424="13424">
										<label class="checkbox" data-ember-action="13425">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13426="13426"><i></i>Guam</label>
									</li>
									<li id="GT" data-bindattr-13428="13428" class="" data-bindattr-13429="13429">
										<label class="checkbox" data-ember-action="13430">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13431="13431"><i></i>Guatemala</label>
									</li>
									<li id="GG" data-bindattr-13433="13433" class="" data-bindattr-13434="13434">
										<label class="checkbox" data-ember-action="13435">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13436="13436"><i></i>Guernsey</label>
									</li>
									<li id="GN" data-bindattr-13438="13438" class="" data-bindattr-13439="13439">
										<label class="checkbox" data-ember-action="13440">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13441="13441"><i></i>Guinea</label>
									</li>
									<li id="GW" data-bindattr-13443="13443" class="" data-bindattr-13444="13444">
										<label class="checkbox" data-ember-action="13445">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13446="13446"><i></i>Guinea-Bissau</label>
									</li>
									<li id="GY" data-bindattr-13448="13448" class="" data-bindattr-13449="13449">
										<label class="checkbox" data-ember-action="13450">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13451="13451"><i></i>Guyana</label>
									</li>
								</ul>
							</li>
							<li id="H" data-bindattr-13453="13453" class="visible" data-bindattr-13454="13454">
								<p class="index-header">H</p>
								<ul>
									<li id="HT" data-bindattr-13456="13456" class="" data-bindattr-13457="13457">
										<label class="checkbox" data-ember-action="13458">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13459="13459"><i></i>Haiti</label>
									</li>
									<li id="HM" data-bindattr-13461="13461" class="" data-bindattr-13462="13462">
										<label class="checkbox" data-ember-action="13463">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13464="13464"><i></i>Heard Island And Mcdonald Islands</label>
									</li>
									<li id="VA" data-bindattr-13466="13466" class="" data-bindattr-13467="13467">
										<label class="checkbox" data-ember-action="13468">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13469="13469"><i></i>Holy See (Vatican City State)</label>
									</li>
									<li id="HN" data-bindattr-13471="13471" class="" data-bindattr-13472="13472">
										<label class="checkbox" data-ember-action="13473">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13474="13474"><i></i>Honduras</label>
									</li>
									<li id="HK" data-bindattr-13476="13476" class="" data-bindattr-13477="13477">
										<label class="checkbox" data-ember-action="13478">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13479="13479"><i></i>Hong Kong</label>
									</li>
									<li id="HU" data-bindattr-13481="13481" class="" data-bindattr-13482="13482">
										<label class="checkbox" data-ember-action="13483">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13484="13484"><i></i>Hungary</label>
									</li>
								</ul>
							</li>
							<li id="I" data-bindattr-13486="13486" class="visible" data-bindattr-13487="13487">
								<p class="index-header">I</p>
								<ul>
									<li id="IS" data-bindattr-13489="13489" class="" data-bindattr-13490="13490">
										<label class="checkbox" data-ember-action="13491">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13492="13492"><i></i>Iceland</label>
									</li>
									<li id="IN" data-bindattr-13494="13494" class="" data-bindattr-13495="13495">
										<label class="checkbox" data-ember-action="13496">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13497="13497"><i></i>India</label>
									</li>
									<li id="ID" data-bindattr-13499="13499" class="" data-bindattr-13500="13500">
										<label class="checkbox" data-ember-action="13501">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13502="13502"><i></i>Indonesia</label>
									</li>
									<li id="IR" data-bindattr-13504="13504" class="" data-bindattr-13505="13505">
										<label class="checkbox" data-ember-action="13506">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13507="13507"><i></i>Iran, Islamic Republic Of</label>
									</li>
									<li id="IQ" data-bindattr-13509="13509" class="" data-bindattr-13510="13510">
										<label class="checkbox" data-ember-action="13511">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13512="13512"><i></i>Iraq</label>
									</li>
									<li id="IE" data-bindattr-13514="13514" class="" data-bindattr-13515="13515">
										<label class="checkbox" data-ember-action="13516">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13517="13517"><i></i>Ireland</label>
									</li>
									<li id="IM" data-bindattr-13519="13519" class="" data-bindattr-13520="13520">
										<label class="checkbox" data-ember-action="13521">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13522="13522"><i></i>Isle Of Man</label>
									</li>
									<li id="IL" data-bindattr-13524="13524" class="" data-bindattr-13525="13525">
										<label class="checkbox" data-ember-action="13526">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13527="13527"><i></i>Israel</label>
									</li>
									<li id="IT" data-bindattr-13529="13529" class="" data-bindattr-13530="13530">
										<label class="checkbox" data-ember-action="13531">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13532="13532"><i></i>Italy</label>
									</li>
								</ul>
							</li>
							<li id="J" data-bindattr-13534="13534" class="visible" data-bindattr-13535="13535">
								<p class="index-header">J</p>
								<ul>
									<li id="JM" data-bindattr-13537="13537" class="" data-bindattr-13538="13538">
										<label class="checkbox" data-ember-action="13539">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13540="13540"><i></i>Jamaica</label>
									</li>
									<li id="JP" data-bindattr-13542="13542" class="" data-bindattr-13543="13543">
										<label class="checkbox" data-ember-action="13544">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13545="13545"><i></i>Japan</label>
									</li>
									<li id="JE" data-bindattr-13547="13547" class="" data-bindattr-13548="13548">
										<label class="checkbox" data-ember-action="13549">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13550="13550"><i></i>Jersey</label>
									</li>
									<li id="JO" data-bindattr-13552="13552" class="" data-bindattr-13553="13553">
										<label class="checkbox" data-ember-action="13554">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13555="13555"><i></i>Jordan</label>
									</li>
								</ul>
							</li>
							<li id="K" data-bindattr-13557="13557" class="visible" data-bindattr-13558="13558">
								<p class="index-header">K</p>
								<ul>
									<li id="KZ" data-bindattr-13560="13560" class="" data-bindattr-13561="13561">
										<label class="checkbox" data-ember-action="13562">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13563="13563"><i></i>Kazakhstan</label>
									</li>
									<li id="KE" data-bindattr-13565="13565" class="" data-bindattr-13566="13566">
										<label class="checkbox" data-ember-action="13567">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13568="13568"><i></i>Kenya</label>
									</li>
									<li id="KI" data-bindattr-13570="13570" class="" data-bindattr-13571="13571">
										<label class="checkbox" data-ember-action="13572">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13573="13573"><i></i>Kiribati</label>
									</li>
									<li id="KP" data-bindattr-13575="13575" class="" data-bindattr-13576="13576">
										<label class="checkbox" data-ember-action="13577">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13578="13578"><i></i>Korea, Democratic People'S Republic Of</label>
									</li>
									<li id="KR" data-bindattr-13580="13580" class="" data-bindattr-13581="13581">
										<label class="checkbox" data-ember-action="13582">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13583="13583"><i></i>Korea, Republic Of</label>
									</li>
									<li id="KW" data-bindattr-13585="13585" class="" data-bindattr-13586="13586">
										<label class="checkbox" data-ember-action="13587">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13588="13588"><i></i>Kuwait</label>
									</li>
									<li id="KG" data-bindattr-13590="13590" class="" data-bindattr-13591="13591">
										<label class="checkbox" data-ember-action="13592">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13593="13593"><i></i>Kyrgyzstan</label>
									</li>
								</ul>
							</li>
							<li id="L" data-bindattr-13595="13595" class="visible" data-bindattr-13596="13596">
								<p class="index-header">L</p>
								<ul>
									<li id="LA" data-bindattr-13598="13598" class="" data-bindattr-13599="13599">
										<label class="checkbox" data-ember-action="13600">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13601="13601"><i></i>Lao People'S Democratic Republic</label>
									</li>
									<li id="LV" data-bindattr-13603="13603" class="" data-bindattr-13604="13604">
										<label class="checkbox" data-ember-action="13605">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13606="13606"><i></i>Latvia</label>
									</li>
									<li id="LB" data-bindattr-13608="13608" class="" data-bindattr-13609="13609">
										<label class="checkbox" data-ember-action="13610">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13611="13611"><i></i>Lebanon</label>
									</li>
									<li id="LS" data-bindattr-13613="13613" class="" data-bindattr-13614="13614">
										<label class="checkbox" data-ember-action="13615">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13616="13616"><i></i>Lesotho</label>
									</li>
									<li id="LR" data-bindattr-13618="13618" class="" data-bindattr-13619="13619">
										<label class="checkbox" data-ember-action="13620">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13621="13621"><i></i>Liberia</label>
									</li>
									<li id="LY" data-bindattr-13623="13623" class="" data-bindattr-13624="13624">
										<label class="checkbox" data-ember-action="13625">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13626="13626"><i></i>Libya</label>
									</li>
									<li id="LI" data-bindattr-13628="13628" class="" data-bindattr-13629="13629">
										<label class="checkbox" data-ember-action="13630">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13631="13631"><i></i>Liechtenstein</label>
									</li>
									<li id="LT" data-bindattr-13633="13633" class="" data-bindattr-13634="13634">
										<label class="checkbox" data-ember-action="13635">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13636="13636"><i></i>Lithuania</label>
									</li>
									<li id="LU" data-bindattr-13638="13638" class="" data-bindattr-13639="13639">
										<label class="checkbox" data-ember-action="13640">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13641="13641"><i></i>Luxembourg</label>
									</li>
								</ul>
							</li>
							<li id="M" data-bindattr-13643="13643" class="visible" data-bindattr-13644="13644">
								<p class="index-header">M</p>
								<ul>
									<li id="MO" data-bindattr-13646="13646" class="" data-bindattr-13647="13647">
										<label class="checkbox" data-ember-action="13648">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13649="13649"><i></i>Macao</label>
									</li>
									<li id="MK" data-bindattr-13651="13651" class="" data-bindattr-13652="13652">
										<label class="checkbox" data-ember-action="13653">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13654="13654"><i></i>Macedonia, The Former Yugoslav Republic Of</label>
									</li>
									<li id="MG" data-bindattr-13656="13656" class="" data-bindattr-13657="13657">
										<label class="checkbox" data-ember-action="13658">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13659="13659"><i></i>Madagascar</label>
									</li>
									<li id="MW" data-bindattr-13661="13661" class="" data-bindattr-13662="13662">
										<label class="checkbox" data-ember-action="13663">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13664="13664"><i></i>Malawi</label>
									</li>
									<li id="MY" data-bindattr-13666="13666" class="" data-bindattr-13667="13667">
										<label class="checkbox" data-ember-action="13668">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13669="13669"><i></i>Malaysia</label>
									</li>
									<li id="MV" data-bindattr-13671="13671" class="" data-bindattr-13672="13672">
										<label class="checkbox" data-ember-action="13673">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13674="13674"><i></i>Maldives</label>
									</li>
									<li id="ML" data-bindattr-13676="13676" class="" data-bindattr-13677="13677">
										<label class="checkbox" data-ember-action="13678">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13679="13679"><i></i>Mali</label>
									</li>
									<li id="MT" data-bindattr-13681="13681" class="" data-bindattr-13682="13682">
										<label class="checkbox" data-ember-action="13683">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13684="13684"><i></i>Malta</label>
									</li>
									<li id="MH" data-bindattr-13686="13686" class="" data-bindattr-13687="13687">
										<label class="checkbox" data-ember-action="13688">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13689="13689"><i></i>Marshall Islands</label>
									</li>
									<li id="MQ" data-bindattr-13691="13691" class="" data-bindattr-13692="13692">
										<label class="checkbox" data-ember-action="13693">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13694="13694"><i></i>Martinique</label>
									</li>
									<li id="MR" data-bindattr-13696="13696" class="" data-bindattr-13697="13697">
										<label class="checkbox" data-ember-action="13698">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13699="13699"><i></i>Mauritania</label>
									</li>
									<li id="MU" data-bindattr-13701="13701" class="" data-bindattr-13702="13702">
										<label class="checkbox" data-ember-action="13703">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13704="13704"><i></i>Mauritius</label>
									</li>
									<li id="YT" data-bindattr-13706="13706" class="" data-bindattr-13707="13707">
										<label class="checkbox" data-ember-action="13708">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13709="13709"><i></i>Mayotte</label>
									</li>
									<li id="MX" data-bindattr-13711="13711" class="" data-bindattr-13712="13712">
										<label class="checkbox" data-ember-action="13713">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13714="13714"><i></i>Mexico</label>
									</li>
									<li id="FM" data-bindattr-13716="13716" class="" data-bindattr-13717="13717">
										<label class="checkbox" data-ember-action="13718">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13719="13719"><i></i>Micronesia, Federated States Of</label>
									</li>
									<li id="MD" data-bindattr-13721="13721" class="" data-bindattr-13722="13722">
										<label class="checkbox" data-ember-action="13723">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13724="13724"><i></i>Moldova, Republic Of</label>
									</li>
									<li id="MC" data-bindattr-13726="13726" class="" data-bindattr-13727="13727">
										<label class="checkbox" data-ember-action="13728">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13729="13729"><i></i>Monaco</label>
									</li>
									<li id="MN" data-bindattr-13731="13731" class="" data-bindattr-13732="13732">
										<label class="checkbox" data-ember-action="13733">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13734="13734"><i></i>Mongolia</label>
									</li>
									<li id="ME" data-bindattr-13736="13736" class="" data-bindattr-13737="13737">
										<label class="checkbox" data-ember-action="13738">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13739="13739"><i></i>Montenegro</label>
									</li>
									<li id="MS" data-bindattr-13741="13741" class="" data-bindattr-13742="13742">
										<label class="checkbox" data-ember-action="13743">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13744="13744"><i></i>Montserrat</label>
									</li>
									<li id="MA" data-bindattr-13746="13746" class="" data-bindattr-13747="13747">
										<label class="checkbox" data-ember-action="13748">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13749="13749"><i></i>Morocco</label>
									</li>
									<li id="MZ" data-bindattr-13751="13751" class="" data-bindattr-13752="13752">
										<label class="checkbox" data-ember-action="13753">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13754="13754"><i></i>Mozambique</label>
									</li>
									<li id="MM" data-bindattr-13756="13756" class="" data-bindattr-13757="13757">
										<label class="checkbox" data-ember-action="13758">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13759="13759"><i></i>Myanmar</label>
									</li>
								</ul>
							</li>
							<li id="N" data-bindattr-13761="13761" class="visible" data-bindattr-13762="13762">
								<p class="index-header">N</p>
								<ul>
									<li id="NA" data-bindattr-13764="13764" class="" data-bindattr-13765="13765">
										<label class="checkbox" data-ember-action="13766">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13767="13767"><i></i>Namibia</label>
									</li>
									<li id="NR" data-bindattr-13769="13769" class="" data-bindattr-13770="13770">
										<label class="checkbox" data-ember-action="13771">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13772="13772"><i></i>Nauru</label>
									</li>
									<li id="NP" data-bindattr-13774="13774" class="" data-bindattr-13775="13775">
										<label class="checkbox" data-ember-action="13776">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13777="13777"><i></i>Nepal</label>
									</li>
									<li id="NL" data-bindattr-13779="13779" class="" data-bindattr-13780="13780">
										<label class="checkbox" data-ember-action="13781">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13782="13782"><i></i>Netherlands</label>
									</li>
									<li id="NC" data-bindattr-13784="13784" class="" data-bindattr-13785="13785">
										<label class="checkbox" data-ember-action="13786">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13787="13787"><i></i>New Caledonia</label>
									</li>
									<li id="NZ" data-bindattr-13789="13789" class="" data-bindattr-13790="13790">
										<label class="checkbox" data-ember-action="13791">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13792="13792"><i></i>New Zealand</label>
									</li>
									<li id="NI" data-bindattr-13794="13794" class="" data-bindattr-13795="13795">
										<label class="checkbox" data-ember-action="13796">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13797="13797"><i></i>Nicaragua</label>
									</li>
									<li id="NE" data-bindattr-13799="13799" class="" data-bindattr-13800="13800">
										<label class="checkbox" data-ember-action="13801">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13802="13802"><i></i>Niger</label>
									</li>
									<li id="NG" data-bindattr-13804="13804" class="" data-bindattr-13805="13805">
										<label class="checkbox" data-ember-action="13806">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13807="13807"><i></i>Nigeria</label>
									</li>
									<li id="NU" data-bindattr-13809="13809" class="" data-bindattr-13810="13810">
										<label class="checkbox" data-ember-action="13811">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13812="13812"><i></i>Niue</label>
									</li>
									<li id="NF" data-bindattr-13814="13814" class="" data-bindattr-13815="13815">
										<label class="checkbox" data-ember-action="13816">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13817="13817"><i></i>Norfolk Island</label>
									</li>
									<li id="MP" data-bindattr-13819="13819" class="" data-bindattr-13820="13820">
										<label class="checkbox" data-ember-action="13821">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13822="13822"><i></i>Northern Mariana Islands</label>
									</li>
									<li id="NO" data-bindattr-13824="13824" class="" data-bindattr-13825="13825">
										<label class="checkbox" data-ember-action="13826">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13827="13827"><i></i>Norway</label>
									</li>
								</ul>
							</li>
							<li id="O" data-bindattr-13829="13829" class="visible" data-bindattr-13830="13830">
								<p class="index-header">O</p>
								<ul>
									<li id="OM" data-bindattr-13832="13832" class="" data-bindattr-13833="13833">
										<label class="checkbox" data-ember-action="13834">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13835="13835"><i></i>Oman</label>
									</li>
								</ul>
							</li>
							<li id="P" data-bindattr-13837="13837" class="visible" data-bindattr-13838="13838">
								<p class="index-header">P</p>
								<ul>
									<li id="PK" data-bindattr-13840="13840" class="" data-bindattr-13841="13841">
										<label class="checkbox" data-ember-action="13842">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13843="13843"><i></i>Pakistan</label>
									</li>
									<li id="PW" data-bindattr-13845="13845" class="" data-bindattr-13846="13846">
										<label class="checkbox" data-ember-action="13847">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13848="13848"><i></i>Palau</label>
									</li>
									<li id="PS" data-bindattr-13850="13850" class="" data-bindattr-13851="13851">
										<label class="checkbox" data-ember-action="13852">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13853="13853"><i></i>Palestine, State Of</label>
									</li>
									<li id="PA" data-bindattr-13855="13855" class="" data-bindattr-13856="13856">
										<label class="checkbox" data-ember-action="13857">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13858="13858"><i></i>Panama</label>
									</li>
									<li id="PG" data-bindattr-13860="13860" class="" data-bindattr-13861="13861">
										<label class="checkbox" data-ember-action="13862">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13863="13863"><i></i>Papua New Guinea</label>
									</li>
									<li id="PY" data-bindattr-13865="13865" class="" data-bindattr-13866="13866">
										<label class="checkbox" data-ember-action="13867">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13868="13868"><i></i>Paraguay</label>
									</li>
									<li id="PE" data-bindattr-13870="13870" class="" data-bindattr-13871="13871">
										<label class="checkbox" data-ember-action="13872">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13873="13873"><i></i>Peru</label>
									</li>
									<li id="PH" data-bindattr-13875="13875" class="" data-bindattr-13876="13876">
										<label class="checkbox" data-ember-action="13877">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13878="13878"><i></i>Philippines</label>
									</li>
									<li id="PN" data-bindattr-13880="13880" class="" data-bindattr-13881="13881">
										<label class="checkbox" data-ember-action="13882">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13883="13883"><i></i>Pitcairn</label>
									</li>
									<li id="PL" data-bindattr-13885="13885" class="" data-bindattr-13886="13886">
										<label class="checkbox" data-ember-action="13887">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13888="13888"><i></i>Poland</label>
									</li>
									<li id="PT" data-bindattr-13890="13890" class="" data-bindattr-13891="13891">
										<label class="checkbox" data-ember-action="13892">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13893="13893"><i></i>Portugal</label>
									</li>
									<li id="PR" data-bindattr-13895="13895" class="" data-bindattr-13896="13896">
										<label class="checkbox" data-ember-action="13897">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13898="13898"><i></i>Puerto Rico</label>
									</li>
								</ul>
							</li>
							<li id="Q" data-bindattr-13900="13900" class="visible" data-bindattr-13901="13901">
								<p class="index-header">Q</p>
								<ul>
									<li id="QA" data-bindattr-13903="13903" class="" data-bindattr-13904="13904">
										<label class="checkbox" data-ember-action="13905">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13906="13906"><i></i>Qatar</label>
									</li>
								</ul>
							</li>
							<li id="R" data-bindattr-13908="13908" class="visible" data-bindattr-13909="13909">
								<p class="index-header">R</p>
								<ul>
									<li id="RE" data-bindattr-13911="13911" class="" data-bindattr-13912="13912">
										<label class="checkbox" data-ember-action="13913">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13914="13914"><i></i>RéUnion</label>
									</li>
									<li id="RO" data-bindattr-13916="13916" class="" data-bindattr-13917="13917">
										<label class="checkbox" data-ember-action="13918">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13919="13919"><i></i>Romania</label>
									</li>
									<li id="RU" data-bindattr-13921="13921" class="" data-bindattr-13922="13922">
										<label class="checkbox" data-ember-action="13923">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13924="13924"><i></i>Russian Federation</label>
									</li>
									<li id="RW" data-bindattr-13926="13926" class="" data-bindattr-13927="13927">
										<label class="checkbox" data-ember-action="13928">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13929="13929"><i></i>Rwanda</label>
									</li>
								</ul>
							</li>
							<li id="S" data-bindattr-13931="13931" class="visible" data-bindattr-13932="13932">
								<p class="index-header">S</p>
								<ul>
									<li id="BL" data-bindattr-13934="13934" class="" data-bindattr-13935="13935">
										<label class="checkbox" data-ember-action="13936">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13937="13937"><i></i>Saint BarthéLemy</label>
									</li>
									<li id="SH" data-bindattr-13939="13939" class="" data-bindattr-13940="13940">
										<label class="checkbox" data-ember-action="13941">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13942="13942"><i></i>Saint Helena, Ascension And Tristan Da Cunha</label>
									</li>
									<li id="KN" data-bindattr-13944="13944" class="" data-bindattr-13945="13945">
										<label class="checkbox" data-ember-action="13946">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13947="13947"><i></i>Saint Kitts And Nevis</label>
									</li>
									<li id="LC" data-bindattr-13949="13949" class="" data-bindattr-13950="13950">
										<label class="checkbox" data-ember-action="13951">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13952="13952"><i></i>Saint Lucia</label>
									</li>
									<li id="MF" data-bindattr-13954="13954" class="" data-bindattr-13955="13955">
										<label class="checkbox" data-ember-action="13956">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13957="13957"><i></i>Saint Martin (French Part)</label>
									</li>
									<li id="PM" data-bindattr-13959="13959" class="" data-bindattr-13960="13960">
										<label class="checkbox" data-ember-action="13961">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13962="13962"><i></i>Saint Pierre And Miquelon</label>
									</li>
									<li id="VC" data-bindattr-13964="13964" class="" data-bindattr-13965="13965">
										<label class="checkbox" data-ember-action="13966">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13967="13967"><i></i>Saint Vincent And The Grenadines</label>
									</li>
									<li id="WS" data-bindattr-13969="13969" class="" data-bindattr-13970="13970">
										<label class="checkbox" data-ember-action="13971">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13972="13972"><i></i>Samoa</label>
									</li>
									<li id="SM" data-bindattr-13974="13974" class="" data-bindattr-13975="13975">
										<label class="checkbox" data-ember-action="13976">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13977="13977"><i></i>San Marino</label>
									</li>
									<li id="ST" data-bindattr-13979="13979" class="" data-bindattr-13980="13980">
										<label class="checkbox" data-ember-action="13981">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13982="13982"><i></i>Sao Tome And Principe</label>
									</li>
									<li id="SA" data-bindattr-13984="13984" class="" data-bindattr-13985="13985">
										<label class="checkbox" data-ember-action="13986">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13987="13987"><i></i>Saudi Arabia</label>
									</li>
									<li id="SN" data-bindattr-13989="13989" class="" data-bindattr-13990="13990">
										<label class="checkbox" data-ember-action="13991">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13992="13992"><i></i>Senegal</label>
									</li>
									<li id="RS" data-bindattr-13994="13994" class="" data-bindattr-13995="13995">
										<label class="checkbox" data-ember-action="13996">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-13997="13997"><i></i>Serbia</label>
									</li>
									<li id="SC" data-bindattr-13999="13999" class="" data-bindattr-14000="14000">
										<label class="checkbox" data-ember-action="14001">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14002="14002"><i></i>Seychelles</label>
									</li>
									<li id="SL" data-bindattr-14004="14004" class="" data-bindattr-14005="14005">
										<label class="checkbox" data-ember-action="14006">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14007="14007"><i></i>Sierra Leone</label>
									</li>
									<li id="SG" data-bindattr-14009="14009" class="" data-bindattr-14010="14010">
										<label class="checkbox" data-ember-action="14011">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14012="14012"><i></i>Singapore</label>
									</li>
									<li id="SX" data-bindattr-14014="14014" class="" data-bindattr-14015="14015">
										<label class="checkbox" data-ember-action="14016">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14017="14017"><i></i>Sint Maarten (Dutch Part)</label>
									</li>
									<li id="SK" data-bindattr-14019="14019" class="" data-bindattr-14020="14020">
										<label class="checkbox" data-ember-action="14021">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14022="14022"><i></i>Slovakia</label>
									</li>
									<li id="SI" data-bindattr-14024="14024" class="" data-bindattr-14025="14025">
										<label class="checkbox" data-ember-action="14026">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14027="14027"><i></i>Slovenia</label>
									</li>
									<li id="SB" data-bindattr-14029="14029" class="" data-bindattr-14030="14030">
										<label class="checkbox" data-ember-action="14031">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14032="14032"><i></i>Solomon Islands</label>
									</li>
									<li id="SO" data-bindattr-14034="14034" class="" data-bindattr-14035="14035">
										<label class="checkbox" data-ember-action="14036">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14037="14037"><i></i>Somalia</label>
									</li>
									<li id="ZA" data-bindattr-14039="14039" class="" data-bindattr-14040="14040">
										<label class="checkbox" data-ember-action="14041">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14042="14042"><i></i>South Africa</label>
									</li>
									<li id="GS" data-bindattr-14044="14044" class="" data-bindattr-14045="14045">
										<label class="checkbox" data-ember-action="14046">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14047="14047"><i></i>South Georgia And The South Sandwich Islands</label>
									</li>
									<li id="SS" data-bindattr-14049="14049" class="" data-bindattr-14050="14050">
										<label class="checkbox" data-ember-action="14051">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14052="14052"><i></i>South Sudan</label>
									</li>
									<li id="ES" data-bindattr-14054="14054" class="" data-bindattr-14055="14055">
										<label class="checkbox" data-ember-action="14056">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14057="14057"><i></i>Spain</label>
									</li>
									<li id="LK" data-bindattr-14059="14059" class="" data-bindattr-14060="14060">
										<label class="checkbox" data-ember-action="14061">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14062="14062"><i></i>Sri Lanka</label>
									</li>
									<li id="SD" data-bindattr-14064="14064" class="" data-bindattr-14065="14065">
										<label class="checkbox" data-ember-action="14066">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14067="14067"><i></i>Sudan</label>
									</li>
									<li id="SR" data-bindattr-14069="14069" class="" data-bindattr-14070="14070">
										<label class="checkbox" data-ember-action="14071">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14072="14072"><i></i>Surivalue</label>
									</li>
									<li id="SJ" data-bindattr-14074="14074" class="" data-bindattr-14075="14075">
										<label class="checkbox" data-ember-action="14076">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14077="14077"><i></i>Svalbard And Jan Mayen</label>
									</li>
									<li id="SZ" data-bindattr-14079="14079" class="" data-bindattr-14080="14080">
										<label class="checkbox" data-ember-action="14081">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14082="14082"><i></i>Swaziland</label>
									</li>
									<li id="SE" data-bindattr-14084="14084" class="" data-bindattr-14085="14085">
										<label class="checkbox" data-ember-action="14086">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14087="14087"><i></i>Sweden</label>
									</li>
									<li id="CH" data-bindattr-14089="14089" class="" data-bindattr-14090="14090">
										<label class="checkbox" data-ember-action="14091">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14092="14092"><i></i>Switzerland</label>
									</li>
									<li id="SY" data-bindattr-14094="14094" class="" data-bindattr-14095="14095">
										<label class="checkbox" data-ember-action="14096">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14097="14097"><i></i>Syrian Arab Republic</label>
									</li>
								</ul>
							</li>
							<li id="T" data-bindattr-14099="14099" class="visible" data-bindattr-14100="14100">
								<p class="index-header">T</p>
								<ul>
									<li id="TW" data-bindattr-14102="14102" class="" data-bindattr-14103="14103">
										<label class="checkbox" data-ember-action="14104">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14105="14105"><i></i>Taiwan, Province Of China</label>
									</li>
									<li id="TJ" data-bindattr-14107="14107" class="" data-bindattr-14108="14108">
										<label class="checkbox" data-ember-action="14109">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14110="14110"><i></i>Tajikistan</label>
									</li>
									<li id="TZ" data-bindattr-14112="14112" class="" data-bindattr-14113="14113">
										<label class="checkbox" data-ember-action="14114">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14115="14115"><i></i>Tanzania, United Republic Of</label>
									</li>
									<li id="TH" data-bindattr-14117="14117" class="" data-bindattr-14118="14118">
										<label class="checkbox" data-ember-action="14119">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14120="14120"><i></i>Thailand</label>
									</li>
									<li id="TL" data-bindattr-14122="14122" class="" data-bindattr-14123="14123">
										<label class="checkbox" data-ember-action="14124">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14125="14125"><i></i>Timor-Leste</label>
									</li>
									<li id="TG" data-bindattr-14127="14127" class="" data-bindattr-14128="14128">
										<label class="checkbox" data-ember-action="14129">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14130="14130"><i></i>Togo</label>
									</li>
									<li id="TK" data-bindattr-14132="14132" class="" data-bindattr-14133="14133">
										<label class="checkbox" data-ember-action="14134">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14135="14135"><i></i>Tokelau</label>
									</li>
									<li id="TO" data-bindattr-14137="14137" class="" data-bindattr-14138="14138">
										<label class="checkbox" data-ember-action="14139">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14140="14140"><i></i>Tonga</label>
									</li>
									<li id="TT" data-bindattr-14142="14142" class="" data-bindattr-14143="14143">
										<label class="checkbox" data-ember-action="14144">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14145="14145"><i></i>Trinidad And Tobago</label>
									</li>
									<li id="TN" data-bindattr-14147="14147" class="" data-bindattr-14148="14148">
										<label class="checkbox" data-ember-action="14149">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14150="14150"><i></i>Tunisia</label>
									</li>
									<li id="TR" data-bindattr-14152="14152" class="" data-bindattr-14153="14153">
										<label class="checkbox" data-ember-action="14154">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14155="14155"><i></i>Turkey</label>
									</li>
									<li id="TM" data-bindattr-14157="14157" class="" data-bindattr-14158="14158">
										<label class="checkbox" data-ember-action="14159">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14160="14160"><i></i>Turkmenistan</label>
									</li>
									<li id="TC" data-bindattr-14162="14162" class="" data-bindattr-14163="14163">
										<label class="checkbox" data-ember-action="14164">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14165="14165"><i></i>Turks And Caicos Islands</label>
									</li>
									<li id="TV" data-bindattr-14167="14167" class="" data-bindattr-14168="14168">
										<label class="checkbox" data-ember-action="14169">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14170="14170"><i></i>Tuvalu</label>
									</li>
								</ul>
							</li>
							<li id="U" data-bindattr-14172="14172" class="visible" data-bindattr-14173="14173">
								<p class="index-header">U</p>
								<ul>
									<li id="UG" data-bindattr-14175="14175" class="" data-bindattr-14176="14176">
										<label class="checkbox" data-ember-action="14177">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14178="14178"><i></i>Uganda</label>
									</li>
									<li id="UA" data-bindattr-14180="14180" class="" data-bindattr-14181="14181">
										<label class="checkbox" data-ember-action="14182">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14183="14183"><i></i>Ukraine</label>
									</li>
									<li id="AE" data-bindattr-14185="14185" class="" data-bindattr-14186="14186">
										<label class="checkbox" data-ember-action="14187">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14188="14188"><i></i>United Arab Emirates</label>
									</li>
									<li id="GB" data-bindattr-14190="14190" class="" data-bindattr-14191="14191">
										<label class="checkbox" data-ember-action="14192">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14193="14193"><i></i>United Kingdom</label>
									</li>
									<li id="US" data-bindattr-14195="14195" class="" data-bindattr-14196="14196">
										<label class="checkbox" data-ember-action="14197">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14198="14198"><i></i>United States</label>
									</li>
									<li id="UM" data-bindattr-14200="14200" class="" data-bindattr-14201="14201">
										<label class="checkbox" data-ember-action="14202">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14203="14203"><i></i>United States Minor Outlying Islands</label>
									</li>
									<li id="UY" data-bindattr-14205="14205" class="" data-bindattr-14206="14206">
										<label class="checkbox" data-ember-action="14207">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14208="14208"><i></i>Uruguay</label>
									</li>
									<li id="UZ" data-bindattr-14210="14210" class="" data-bindattr-14211="14211">
										<label class="checkbox" data-ember-action="14212">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14213="14213"><i></i>Uzbekistan</label>
									</li>
								</ul>
							</li>
							<li id="V" data-bindattr-14215="14215" class="visible" data-bindattr-14216="14216">
								<p class="index-header">V</p>
								<ul>
									<li id="VU" data-bindattr-14218="14218" class="" data-bindattr-14219="14219">
										<label class="checkbox" data-ember-action="14220">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14221="14221"><i></i>Vanuatu</label>
									</li>
									<li id="VE" data-bindattr-14223="14223" class="" data-bindattr-14224="14224">
										<label class="checkbox" data-ember-action="14225">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14226="14226"><i></i>Venezuela, Bolivarian Republic Of</label>
									</li>
									<li id="VN" data-bindattr-14228="14228" class="" data-bindattr-14229="14229">
										<label class="checkbox" data-ember-action="14230">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14231="14231"><i></i>Viet Nam</label>
									</li>
									<li id="VG" data-bindattr-14233="14233" class="" data-bindattr-14234="14234">
										<label class="checkbox" data-ember-action="14235">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14236="14236"><i></i>Virgin Islands, British</label>
									</li>
									<li id="VI" data-bindattr-14238="14238" class="" data-bindattr-14239="14239">
										<label class="checkbox" data-ember-action="14240">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14241="14241"><i></i>Virgin Islands, U.S.</label>
									</li>
								</ul>
							</li>
							<li id="W" data-bindattr-14243="14243" class="visible" data-bindattr-14244="14244">
								<p class="index-header">W</p>
								<ul>
									<li id="WF" data-bindattr-14246="14246" class="" data-bindattr-14247="14247">
										<label class="checkbox" data-ember-action="14248">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14249="14249"><i></i>Wallis And Futuna</label>
									</li>
									<li id="EH" data-bindattr-14251="14251" class="" data-bindattr-14252="14252">
										<label class="checkbox" data-ember-action="14253">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14254="14254"><i></i>Western Sahara</label>
									</li>
								</ul>
							</li>
							<li id="Y" data-bindattr-14256="14256" class="visible" data-bindattr-14257="14257">
								<p class="index-header">Y</p>
								<ul>
									<li id="YE" data-bindattr-14259="14259" class="" data-bindattr-14260="14260">
										<label class="checkbox" data-ember-action="14261">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14262="14262"><i></i>Yemen</label>
									</li>
								</ul>
							</li>
							<li id="Z" data-bindattr-14264="14264" class="visible" data-bindattr-14265="14265">
								<p class="index-header">Z</p>
								<ul>
									<li id="ZM" data-bindattr-14267="14267" class="" data-bindattr-14268="14268">
										<label class="checkbox" data-ember-action="14269">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14270="14270"><i></i>Zambia</label>
									</li>
									<li id="ZW" data-bindattr-14272="14272" class="" data-bindattr-14273="14273">
										<label class="checkbox" data-ember-action="14274">
											<input type="checkbox" class="pages-checkbox inner-checkbox" checked="checked" data-bindattr-14275="14275"><i></i>Zimbabwe</label>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div id="countries-indexes">
						<ul>
							<li class="select-country-index" data-id="A" data-bindattr-14277="14277" data-bindattr-14278="14278"><a href="javascript:void(0);">A</a></li>
							<li class="select-country-index" data-id="å" data-bindattr-14280="14280" data-bindattr-14281="14281"><a href="javascript:void(0);">å</a></li>
							<li class="select-country-index" data-id="B" data-bindattr-14283="14283" data-bindattr-14284="14284"><a href="javascript:void(0);">B</a></li>
							<li class="select-country-index" data-id="C" data-bindattr-14286="14286" data-bindattr-14287="14287"><a href="javascript:void(0);">C</a></li>
							<li class="select-country-index" data-id="D" data-bindattr-14289="14289" data-bindattr-14290="14290"><a href="javascript:void(0);">D</a></li>
							<li class="select-country-index" data-id="E" data-bindattr-14292="14292" data-bindattr-14293="14293"><a href="javascript:void(0);">E</a></li>
							<li class="select-country-index" data-id="F" data-bindattr-14295="14295" data-bindattr-14296="14296"><a href="javascript:void(0);">F</a></li>
							<li class="select-country-index" data-id="G" data-bindattr-14298="14298" data-bindattr-14299="14299"><a href="javascript:void(0);">G</a></li>
							<li class="select-country-index" data-id="H" data-bindattr-14301="14301" data-bindattr-14302="14302"><a href="javascript:void(0);">H</a></li>
							<li class="select-country-index" data-id="I" data-bindattr-14304="14304" data-bindattr-14305="14305"><a href="javascript:void(0);">I</a></li>
							<li class="select-country-index" data-id="J" data-bindattr-14307="14307" data-bindattr-14308="14308"><a href="javascript:void(0);">J</a></li>
							<li class="select-country-index" data-id="K" data-bindattr-14310="14310" data-bindattr-14311="14311"><a href="javascript:void(0);">K</a></li>
							<li class="select-country-index" data-id="L" data-bindattr-14313="14313" data-bindattr-14314="14314"><a href="javascript:void(0);">L</a></li>
							<li class="select-country-index" data-id="M" data-bindattr-14316="14316" data-bindattr-14317="14317"><a href="javascript:void(0);">M</a></li>
							<li class="select-country-index" data-id="N" data-bindattr-14319="14319" data-bindattr-14320="14320"><a href="javascript:void(0);">N</a></li>
							<li class="select-country-index" data-id="O" data-bindattr-14322="14322" data-bindattr-14323="14323"><a href="javascript:void(0);">O</a></li>
							<li class="select-country-index" data-id="P" data-bindattr-14325="14325" data-bindattr-14326="14326"><a href="javascript:void(0);">P</a></li>
							<li class="select-country-index" data-id="Q" data-bindattr-14328="14328" data-bindattr-14329="14329"><a href="javascript:void(0);">Q</a></li>
							<li class="select-country-index" data-id="R" data-bindattr-14331="14331" data-bindattr-14332="14332"><a href="javascript:void(0);">R</a></li>
							<li class="select-country-index" data-id="S" data-bindattr-14334="14334" data-bindattr-14335="14335"><a href="javascript:void(0);">S</a></li>
							<li class="select-country-index" data-id="T" data-bindattr-14337="14337" data-bindattr-14338="14338"><a href="javascript:void(0);">T</a></li>
							<li class="select-country-index" data-id="U" data-bindattr-14340="14340" data-bindattr-14341="14341"><a href="javascript:void(0);">U</a></li>
							<li class="select-country-index" data-id="V" data-bindattr-14343="14343" data-bindattr-14344="14344"><a href="javascript:void(0);">V</a></li>
							<li class="select-country-index" data-id="W" data-bindattr-14346="14346" data-bindattr-14347="14347"><a href="javascript:void(0);">W</a></li>
							<li class="select-country-index" data-id="Y" data-bindattr-14349="14349" data-bindattr-14350="14350"><a href="javascript:void(0);">Y</a></li>
							<li class="select-country-index" data-id="Z" data-bindattr-14352="14352" data-bindattr-14353="14353"><a href="javascript:void(0);">Z</a></li>
						</ul>
					</div>
					<div class="list-button-container">
						<button id="close-countries-selection" class="btn btn-primary close-selection">Done</button>
					</div>
				</div>
				<div id="agents-list-container" class="smart-form selection-main-container">
					<div class="list-header">
						<label class="search-field input pull-right">
							<input type="input" placeholder="Search" id="search-agent-input" class="search-input">
							<button><i class="fa fa-search"></i></button>
						</label>
						<label class="checkbox pull-left" data-ember-action="12875">
							<input type="checkbox" name="all-agents-checkbox" id="all-agents-checkbox" checked="checked" data-bindattr-12876="12876"><i></i>All Agents</label>
						<div class="clearfix"></div>
					</div>
					<div class="list-content">
						<ul>
							<li id="5a60123e3098e70e78bf9fac" data-bindattr-14355="14355" class="" data-bindattr-14356="14356">
								<label class="checkbox" data-ember-action="14357">
									<input type="checkbox" class="agents-checkbox inner-checkbox" checked="checked" data-bindattr-14358="14358"><i></i>frank</label>
							</li>
							<li id="5a87536023af486d55e305f9" data-bindattr-14360="14360" class="" data-bindattr-14361="14361">
								<label class="checkbox" data-ember-action="14362">
									<input type="checkbox" class="agents-checkbox inner-checkbox" checked="checked" data-bindattr-14363="14363"><i></i>JOHN</label>
							</li>
							<li id="5a54ed99f721561639dbfc89" data-bindattr-14365="14365" class="" data-bindattr-14366="14366">
								<label class="checkbox" data-ember-action="14367">
									<input type="checkbox" class="agents-checkbox inner-checkbox" checked="checked" data-bindattr-14368="14368"><i></i>Mahan</label>
							</li>
							<li id="5a5502f16b38880e815d37a7" data-bindattr-14370="14370" class="" data-bindattr-14371="14371">
								<label class="checkbox" data-ember-action="14372">
									<input type="checkbox" class="agents-checkbox inner-checkbox" checked="checked" data-bindattr-14373="14373"><i></i>Mike</label>
							</li>
							<li id="5a8c5e324c3c5d0e7f5915ce" data-bindattr-14375="14375" class="" data-bindattr-14376="14376">
								<label class="checkbox" data-ember-action="14377">
									<input type="checkbox" class="agents-checkbox inner-checkbox" checked="checked" data-bindattr-14378="14378"><i></i>Qaise Sherdel</label>
							</li>
						</ul>
					</div>
					<div class="list-button-container">
						<button id="close-agents-selection" class="btn btn-primary close-selection">Done</button>
					</div>
				</div>
				<div id="tags-list-container" class="smart-form selection-main-container">
					<div class="list-header">
						<label class="search-field input pull-right">
							<input type="input" placeholder="Search" id="search-tag-input" class="search-input">
							<button><i class="fa fa-search"></i></button>
						</label>
						<label class="checkbox pull-left" data-ember-action="12877">
							<input type="checkbox" name="all-tags-checkbox" id="all-tags-checkbox" checked="checked" data-bindattr-12878="12878"><i></i>All Tags</label>
						<div class="clearfix"></div>
					</div>
					<div class="list-content">
						<ul></ul>
					</div>
					<div class="list-button-container">
						<button id="close-tags-selection" class="btn btn-primary close-selection">Done</button>
					</div>
				</div>
				<div class="inner-content">
					<div id="live-monitoring-view">
						<div id="visitor-list">
							<div id="filters-details" class="hidden" data-bindattr-12879="12879">Filtered By :&nbsp;<span class="badge bg-color-blueLight hidden" data-bindattr-12880="12880" data-toggle="popover" data-placement="bottom" data-bindattr-12881="12881">Sites/VOOChat Pages :&nbsp;<button class="btn btn-default txt-color-red remove-filter" title="Remove Filter" data-placement="bottom" data-type="properties"><i class="fa fa-close"></i></button></span><span class="badge bg-color-blueLight hidden" data-bindattr-12882="12882" data-toggle="popover" data-placement="bottom" data-bindattr-12883="12883">Countries :&nbsp;<button class="btn btn-default txt-color-red remove-filter" title="Remove Filter" data-placement="bottom" data-type="countries"><i class="fa fa-close"></i></button></span><span class="badge bg-color-blueLight hidden" data-bindattr-12884="12884" data-toggle="popover" data-placement="bottom" data-bindattr-12885="12885">Agents :&nbsp;<button class="btn btn-default txt-color-red remove-filter" title="Remove Filter" data-placement="bottom" data-type="agents-include"><i class="fa fa-close"></i></button></span><span class="badge bg-color-blueLight hidden" data-bindattr-12886="12886" data-toggle="popover" data-placement="bottom" data-bindattr-12887="12887">Tags :&nbsp;<button class="btn btn-default txt-color-red remove-filter" title="Remove Filter" data-placement="bottom" data-type="tags-include"><i class="fa fa-close"></i></button></span></div>
							<div id="list-container">
								<div class="hidden" data-bindattr-12888="12888">
									<p class="list-title"><i class="fa fa-chevron-down"></i> Unanswered (0)</p>
									<div>
										<table id="ember12890" class="ember-view table live-list">
											<tbody></tbody>
										</table>
									</div>
								</div>
								<div class="hidden" data-bindattr-12891="12891">
									<p class="list-title"><i class="fa fa-chevron-down"></i> Served (0)</p>
									<div>
										<table id="ember12893" class="ember-view table live-list">
											<tbody></tbody>
										</table>
									</div>
								</div>
								<div class="visible" data-bindattr-12894="12894">
									<p class="list-title"><i class="fa fa-chevron-down"></i> Active (1 / 1)</p>
									<div>
										<table id="ember12897" class="ember-view table live-list">
											<tbody>
											<tr class="in-view" data-bindattr-14404="14404" id="5abc661fcaa40ecb174db67d" data-bindattr-14405="14405">
												<td class="property-name-cell">
													<div class="detail-hover" data-toggle="popover" data-placement="right" data-content="Uniqks" data-bindattr-14406="14406" data-original-title="" title=""><span class="property-box" style="background : rgb(148,122,80)" data-bindattr-14407="14407">U</span></div>
												</td>
												<td class="flag-cell">
													<div class="detail-hover" data-toggle="popover" data-placement="right" data-content="Toronto, Canada" data-bindattr-14409="14409"><span class="flag flag-ca" data-bindattr-14410="14410"></span></div>
												</td>
												<td class="name-cell">
													<div class="detail-hover" data-toggle="popover" data-placement="top" data-content="V1522296351118150" data-bindattr-14411="14411" data-original-title="" title="">V1522296351118150</div>
												</td>
												<td class="ip-cell">
													<div class="detail-hover" data-toggle="popover" data-placement="top" data-content="Unknown hostname" data-original-title="" title="">104.255.12.73</div>
												</td>
												<td class="page-title-cell">
													<div class="detail-hover" data-toggle="popover" data-placement="top" data-content="https://www.uniqks.com/contact.php" data-bindattr-14413="14413"><a href="https://www.uniqks.com/contact.php" data-bindattr-14414="14414" target="_blank">Uniqks - Contact us for Digital Marketing Strategies</a></div>
												</td>
												<td class="referrer-cell">
													<div class="detail-hover" data-toggle="popover" data-placement="top" data-content="https://www.google.ca/" data-bindattr-14426="14426"><a href="https://www.google.ca/" data-bindattr-14427="14427" target="_blank">https://www.google.ca/</a></div>
												</td>
												<td class="device-details-cell">
													<div class="detail-hover" data-toggle="popover" data-placement="top" data-content="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0.1 Safari/604.3.5" data-bindattr-14415="14415"><span class="sprite-background safari-browser" data-bindattr-14416="14416"></span>&nbsp;<span class="sprite-background mac-os" data-bindattr-14417="14417"></span></div>
												</td>
												<td class="duration-cell">
													<div class="detail-hover" data-toggle="popover" data-placement="top" data-content="Duration"><span>00:34:37</span></div>
												</td>
												<td class="counter-cell">
													<div class="detail-hover" data-toggle="popover" data-placement="top" data-content="visits">0</div>
												</td>
												<td class="counter-cell">
													<div class="detail-hover" data-toggle="popover" data-placement="top" data-content="chats">0</div>
												</td>
												<td class="tags-cell">
													<div class="hidden" data-bindattr-14421="14421" data-toggle="bottom" data-placement="top" data-content="Tags"><i class="fa fa-tag"></i>&nbsp;</div>
												</td>
												<td class="button-cell">
													<div class="detail-hover">
														<button class="btn btn-danger btn-sm ban-visitor" data-id="5abc661fcaa40ecb174db67d" data-bindattr-14423="14423" title="Ban" data-placement="bottom"><i class="fa fa-ban"></i></button>
														<button class="btn btn-sm ignore-visitor" data-ember-action="14429" title="Ignore" data-placement="bottom"><i class="fa fa-eye-slash"></i></button>
													</div>
												</td>
											</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="hidden" data-bindattr-12898="12898">
									<p class="list-title"><i class="fa fa-chevron-down"></i> Idle (0 / 0)</p>
									<div>
										<table id="ember12901" class="ember-view table live-list">
											<tbody></tbody>
										</table>
									</div>
								</div>
							</div>
							<div class="hidden" data-bindattr-12902="12902">
								<div class="well text-center">
									<div id="simulate-chat-text">
										<h5> There are currently no visitors from any of your <a href="javascript:void(0);" id="monitoring-view-sites"> sites </a> or <a href="javascript:void(0);" id="monitoring-view-pages"> VOOChat pages </a> . </h5>
										<h5> Click <a href="javascript:void(0);" id="simulate-visitor"> here </a> to simulate a visitor. </h5></div>
								</div>
							</div>
							<div class="hidden" data-bindattr-12903="12903">
								<div class="well text-center">
									<h5>There are no visitors matching your filters</h5></div>
							</div>
						</div>
						<div class="load-container text-center hidden" data-bindattr-12904="12904"><img src="a34/images/ajax-loader-big-black.gif"></div>
						<div class="view-footer">
							<div class="btn-group pull-right"><a id="prev-page" data-ember-action="12905" class="btn btn-default btn-circle prev disabled" data-bindattr-12906="12906" href="javascript:void(0);" data-placement="top" title="Previous"><i class="fa fa-chevron-left"></i></a><a id="next-page" data-ember-action="12907" class="btn btn-default btn-circle next disabled" data-bindattr-12908="12908" href="javascript:void(0);" data-placement="top" title="Next"><i class="fa fa-chevron-right"></i></a></div>
						</div>
					</div>
					<div id="list-block" class="hidden"></div>
				</div>
				<div id="subscription-ended-container" class="hidden">
					<div class="overlay"></div>
					<div class="notification">
						<h1>..looks like you stepped away</h1>
						<div class="counter-container">
							<div class="counter-display">
								<div id="incoming-total" class="counter-block"><span>0</span>
									<p>Unanswered</p>
								</div>
							</div>
							<div class="counter-display">
								<div id="served-total" class="counter-block"><span>1</span>
									<p>Served</p>
								</div>
							</div>
							<div class="counter-display">
								<div id="visitors-total" class="counter-block"><span>1</span>
									<p>Visitors</p>
								</div>
							</div>
						</div>
						<div id="resubscribe-information">
							<h3> You have been inactive for awhile, so we auto enabled sleep mode to save you some <br>processing power and bandwidth, let us know when you are back. </h3>
							<p> (Don't worry, chat notifications still come through) </p>
							<button id="resubscribe-monitor" class="btn btn-primary btn-lg">I'm Back</button>
						</div>
					</div>
				</div>
				<div id="timeout-notification-timer" class="alert alert-block alert-warning text-align-center hidden">
					<p> You have been inactive for awhile, monitoring will be going into sleep mode. </p>
					<p> (Don't worry, chat notifications still come through) </p>
					<p> But if you want to continue receiving events, click on the continue button below. </p>
					<br>
					<button id="continue-monitor" class="btn btn-default"><strong>Continue Subscribing</strong>&nbsp;(<span class="timer-update"></span>)</button>
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
																<div class="pull-right"><span class="visitor-ip hover-location" rel="popover" title="" data-placement="top" data-content="" data-bindattr-6173="6173" data-original-title="">104.255.12.73</span><span class="visitor-time hover-location" rel="popover" title="" data-placement="bottom" data-content="Visitor's current local time" data-original-title="">12:40 AM</span></div>
																<div class="clearfix"></div>
															</div>
														</div>
													</div>
													<div class="fields-container">
														<div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/604.3.5 (KHTML, like Gecko) Version/11.0.1 Safari/604.3.5" data-bindattr-6176="6176" data-original-title="" title=""><span class="sprite-background safari-browser" data-bindattr-6177="6177" style="margin : 0 2px; vertical-align: middle;"></span><span class="sprite-background mac-os" data-bindattr-6178="6178" style="vertical-align: middle;"></span>
																<div class="clearfix"></div>
															</div>
															<div class="device-detail" rel="popover" data-placement="right" data-content="Duration" data-original-title="" title="">00:34:37</div>
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