<?php
require_once("common/header.php");
?>
<div id="main" class="ember-view">
    <div id="ember372" class="ember-view dynamic-view" style="display: none;">
        <div id="conversations" class="ember-view">
            <div class="content">
                <div class="row view-header">
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <h1 class="page-title txt-color-blueDark"><i class="fa fa-inbox"></i> Messaging</h1></div>
                    <div id="search-list-container" class="col-xs-8 col-sm-8 col-md-8 col-lg-8" data-bindattr-979="979">
                        <form id="conversations-search" class="" data-bindattr-980="980">
                            <fieldset>
                                <div class="input-group">
                                    <div id="property-selected-name"><span id="property-label">in:Pickering Toyota Live Video Chat</span><span class="chevron"></span></div>
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
                                                            <option value="5a60123e3098e70e78bf9fac" data-bindattr-982="982">Me (frank)</option>
                                                            <optgroup label="Agents" id="agent">
                                                                <option value="5a87536023af486d55e305f9" data-bindattr-1011="1011">JOHN</option>
                                                                <option value="5a54ed99f721561639dbfc89" data-bindattr-1013="1013">Mahan</option>
                                                                <option value="5a8c5e324c3c5d0e7f5915ce" data-bindattr-1015="1015">Qaise Sherdel</option>
                                                            </optgroup>
                                                        </select>
                                                    </label>
                                                </section>
                                                <section class="col col-6">
                                                    <label class="input">
                                                        <input type="text" name="tags" id="tags" data-role="tagsinput" placeholder="Tags" style="display: none;">
                                                        <div class="bootstrap-tagsinput"><span class="twitter-typeahead" style="position: relative; display: inline-block;"><input type="text" style="width: 4em !important; position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);" class="tt-hint" readonly="" autocomplete="off" spellcheck="false" tabindex="-1" dir="ltr"><input type="text" placeholder="Tags" style="width: 4em !important; position: relative; vertical-align: top; background-color: transparent;" class="tt-input" autocomplete="off" spellcheck="false" dir="auto"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: &quot;Open Sans&quot;, Helvetica, Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><div class="tt-menu" style="position: absolute; top: 100%; left: 0px; z-index: 100; display: none;"><div class="tt-dataset tt-dataset-0"></div></div></span></div>
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
                        <form id="contacts-search" class="hidden" data-bindattr-984="984">
                            <fieldset>
                                <div class="input-group">
                                    <div id="property-selected-name"><span id="property-label">in:Pickering Toyota Live Video Chat</span><span class="chevron"></span></div>
                                    <input type="text" class="form-control" placeholder="Search Contact" id="contact-query">
                                    <div class="input-group-btn">
                                        <button type="button" class="btn btn-primary search-contact-btn" tabindex="-1"><i class="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div class="innerContent is-message-view" data-bindattr-986="986"><a id="open-properties-list" href="javascript:void(0);"><i class="fa fa-arrow-circle-right"></i></a><a id="close-properties-list" href="javascript:void(0);" style="display: none;"><i class="fa fa-arrow-circle-left"></i></a>
                    <div id="list-opacity-block" class="opacity-block" style="display: none;"></div>
                    <div id="conversations-properties" class="ember-view">
                        <div id="add-button-container">
                            <button id="create-ticket" class="btn btn-primary"><i class="fa fa-plus"></i> New Ticket</button>
                        </div>
                        <ul class="properties-list">
                            <li id="5a60123e3098e70e78bf9fad" data-bindattr-989="989" class="get-tickets active" data-bindattr-990="990">
                                <p class="property-name"><i class="fa"></i><span class="title-section">frank</span></p>
                                <ul class="inner-list list-unstyled hidden" data-bindattr-992="992">
                                    <li class="get-contacts" data-bindattr-993="993">Contacts</li>
                                    <li class="get-spam" data-bindattr-994="994">Spam</li>
                                    <li class="get-trash" data-bindattr-995="995">Trash</li>
                                </ul>
                            </li>
                            <li id="5a67ac584b401e45400c5653" data-bindattr-996="996" class="get-tickets active open" data-bindattr-997="997">
                                <p class="property-name"><i class="fa"></i><span class="title-section">Pickering Toyota Live Video Chat</span><span class="badge bg-color-red txt-color-white">9</span></p>
                                <ul class="inner-list list-unstyled" data-bindattr-999="999">
                                    <li class="get-contacts" data-bindattr-1000="1000">Contacts</li>
                                    <li class="get-spam" data-bindattr-1001="1001">Spam</li>
                                    <li class="get-trash" data-bindattr-1002="1002">Trash</li>
                                </ul>
                            </li>
                            <li id="5a55196ed7591465c7069586" data-bindattr-1003="1003" class="get-tickets active" data-bindattr-1004="1004">
                                <p class="property-name"><i class="fa"></i><span class="title-section">Uniqks</span><span class="badge bg-color-red txt-color-white">9</span></p>
                                <ul class="inner-list list-unstyled hidden" data-bindattr-1006="1006">
                                    <li class="get-contacts" data-bindattr-1007="1007">Contacts</li>
                                    <li class="get-spam" data-bindattr-1008="1008">Spam</li>
                                    <li class="get-trash" data-bindattr-1009="1009">Trash</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div id="conversations-list" class="ember-view hidden">
                        <div id="conversation-list-container">
                            <div id="list-wrapper">
                                <div class="clear"></div>
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th class="column-head-details inner-wrapper smart-form">
                                            <ul class="" data-bindattr-1019="1019">
                                                <li>
                                                    <div id="filter-assignee" class="dropdown"><a role="button" data-toggle="dropdown" class="" data-bindattr-1020="1020" href="javascript:void(0);"><span class="filter-value">All&nbsp;<span class="badge bg-color-red txt-color-white">9</span></span>&nbsp;<i class="fa fa-sort"></i></a>
                                                        <ul class="dropdown-menu multi-level">
                                                            <li id="0"><a class="submenu-title" href="javascript:void(0);">All</a></li>
                                                            <li id="1"><a class="submenu-title" href="javascript:void(0);">Assigned</a></li>
                                                            <li id="-1"><a class="submenu-title" href="javascript:void(0);">Unassigned</a></li>
                                                            <li><a href="javascript:void(0);" class="submenu submenu-title">Agents</a>
                                                                <ul class="dropdown-menu">
                                                                    <li id="5a87536023af486d55e305f9" data-bindattr-1037="1037"><a class="submenu-title" href="javascript:void(0);">JOHN</a></li>
                                                                    <li id="5a54ed99f721561639dbfc89" data-bindattr-1039="1039"><a class="submenu-title" href="javascript:void(0);">Mahan</a></li>
                                                                    <li id="5a8c5e324c3c5d0e7f5915ce" data-bindattr-1041="1041"><a class="submenu-title" href="javascript:void(0);">Qaise Sherdel</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li id="select-my-message" class="inactive" data-bindattr-1022="1022">Mine</li>
                                            </ul>
                                        </th>
                                        <th class="hidden-xs column-head-icons text-right">
                                            <ul class="smart-form inline-group" style="float: right; margin: 0;">
                                                <li>
                                                    <label class="checkbox" style="margin-right: 15px;">
                                                        <input type="checkbox" checked="checked" data-bindattr-1023="1023" id="only-chats"><i></i><span class="hidden-lg"><i class="icon fa fa-comment-o"></i>&nbsp;</span><span class="visible-lg">Chats</span></label>
                                                </li>
                                                <li>
                                                    <label class="checkbox" style="margin-right: 15px;">
                                                        <input type="checkbox" checked="checked" data-bindattr-1024="1024" id="only-tickets"><i></i><span class="hidden-lg"><i class="icon fa fa-ticket"></i>&nbsp;</span><span class="visible-lg">Tickets</span></label>
                                                </li>
                                            </ul>
                                        </th>
                                        <th class="hidden-xs hidden-sm column-head-assign text-center smart-form">
                                            <ul>
                                                <li>
                                                    <div id="status-container" class="dropdown"><a role="button" data-toggle="dropdown" class="" data-bindattr-1025="1025" href="javascript:void(0);"><span class="filter-value">Any</span>&nbsp;<i class="fa fa-sort"></i></a>
                                                        <ul class="dropdown-menu multi-level pull-right">
                                                            <li id="0"><a class="submenu-title" href="javascript:void(0);">Any</a></li>
                                                            <li id="2000"><a class="submenu-title" href="javascript:void(0);">Pending</a></li>
                                                            <li id="3000"><a class="submenu-title" href="javascript:void(0);">Closed</a></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li id="select-open-status" class="inactive" data-bindattr-1027="1027">Open</li>
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
                                                    <li class="dropdown-submenu" data-bindattr-1028="1028"><a class="submenu-title" href="javascript:void(0);">Status</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="change-sort" href="javascript:void(0);" id="st-open-closed"><i class="fa fa-sort-numeric-desc"></i> Open to Closed</a></li>
                                                            <li><a class="change-sort" href="javascript:void(0);" id="st-closed-open"><i class="fa fa-sort-numeric-asc"></i> Closed to Open</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </th>
                                        <th class="column-head-setting">
                                            <div class="smart-form" data-bindattr-1043="1043" style="height : 30px;">
                                                <label class="checkbox">
                                                    <input class="all-bulk-check" type="checkbox"><i class="mark-select" style="top: 6px; right: 15px; left: auto;"></i></label>
                                            </div>
                                        </th>
                                    </tr>
                                    </thead>
                                </table>
                                <div id="conversation-list" class="view-section">
                                    <table class="table">
                                        <tbody>
                                        <tr id="54997400-3277-11e8-8cd3-df980654d25e" data-bindattr-1072="1072" class="open-conversation entry-read" data-bindattr-1073="1073">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-us" data-bindattr-1074="1074"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1522234713524796</p><small class="entry-metadata">1 message, 1 seconds </small></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-1000" data-bindattr-1076="1076" style="text-transform : uppercase;">Open</span></td>
                                            <td class="text-center conversation-sort">28/Mar 19:03</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="8f356ba0-3277-11e8-9c94-f910d458e1be" data-bindattr-1081="1081" class="open-conversation" data-bindattr-1082="1082">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-us" data-bindattr-1083="1083"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1522234971990730</p><small class="entry-metadata">1 message, 1 seconds </small></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-1000" data-bindattr-1085="1085" style="text-transform : uppercase;">Open</span></td>
                                            <td class="text-center conversation-sort">28/Mar 19:03</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="7c8857c0-3276-11e8-9200-cd57add7ebe8" data-bindattr-1090="1090" class="open-conversation" data-bindattr-1091="1091">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1092="1092"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1522234300724288</p><small class="entry-metadata">2 messages, 1 seconds </small></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-1000" data-bindattr-1094="1094" style="text-transform : uppercase;">Open</span></td>
                                            <td class="text-center conversation-sort">28/Mar 18:55</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="ff97e430-325a-11e8-8160-55347ae0817e" data-bindattr-1099="1099" class="open-conversation entry-closed" data-bindattr-1100="1100">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-us" data-bindattr-1101="1101"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">Alister Daivd</p><small class="entry-metadata">15 messages, 21 minutes </small><span class="agent-name-item">Mahan</span><span class="agent-name-item">frank</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1103="1103" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">28/Mar 15:58</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="3d18e710-321e-11e8-a3ff-a9c03b2d37e8" data-bindattr-1110="1110" class="open-conversation entry-closed" data-bindattr-1111="1111">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1112="1112"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1517421279146504</p><small class="entry-metadata">6 messages, 4 minutes </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1114="1114" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">28/Mar 08:27</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="b326dc50-2eef-11e8-a274-4dee6276b9f8" data-bindattr-1120="1120" class="open-conversation entry-closed" data-bindattr-1121="1121">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1122="1122"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521846264175111</p><small class="entry-metadata">3 messages, 1 minute </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1124="1124" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">24/Mar 07:14</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="368caba0-2ebf-11e8-ab90-63ca9fc13b9f" data-bindattr-1130="1130" class="open-conversation entry-closed" data-bindattr-1131="1131">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1132="1132"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521825942358655</p><small class="entry-metadata">10 messages, 7 minutes </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1134="1134" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">24/Mar 01:33</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="84eead90-2e86-11e8-ad31-554676d905fb" data-bindattr-1140="1140" class="open-conversation entry-closed" data-bindattr-1141="1141">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-us" data-bindattr-1142="1142"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">Alister David</p><small class="entry-metadata">37 messages, 4 minutes </small><span class="agent-name-item">frank</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1144="1144" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">23/Mar 18:43</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="3c9c9d00-2dfe-11e8-912f-6393b3a9819d" data-bindattr-1150="1150" class="open-conversation entry-closed" data-bindattr-1151="1151">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1152="1152"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521743059657870</p><small class="entry-metadata">6 messages, 3 minutes </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1154="1154" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">23/Mar 02:27</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="ff1186b0-2d37-11e8-88d7-95b5b663fdef" data-bindattr-1160="1160" class="open-conversation entry-closed" data-bindattr-1161="1161">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1162="1162"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521657916056802</p><small class="entry-metadata">1 message, 1 seconds </small></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1164="1164" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">22/Mar 02:45</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="6a19c5d0-2cca-11e8-8b25-0bad4d3a662c" data-bindattr-1169="1169" class="open-conversation entry-closed" data-bindattr-1170="1170">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ua" data-bindattr-1171="1171"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521610819726966</p><small class="entry-metadata">1 message, 1 seconds </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1173="1173" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">21/Mar 13:41</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="57787c50-2cca-11e8-a346-e1d18a33ef4c" data-bindattr-1179="1179" class="open-conversation entry-closed" data-bindattr-1180="1180">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ua" data-bindattr-1181="1181"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521610819726966</p><small class="entry-metadata">2 messages, 1 seconds </small></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1183="1183" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">21/Mar 13:40</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="6dbb3220-29ee-11e8-a5bd-cda5997637b6" data-bindattr-1188="1188" class="open-conversation entry-closed" data-bindattr-1189="1189">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1190="1190"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521296465470587</p><small class="entry-metadata">11 messages, 13 minutes </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1192="1192" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">17/Mar 22:34</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="c91bae20-297f-11e8-ba70-dd078f114b87" data-bindattr-1198="1198" class="open-conversation entry-closed" data-bindattr-1199="1199">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1200="1200"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521248944639624</p><small class="entry-metadata">20 messages, 11 minutes </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1202="1202" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">17/Mar 09:20</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="8f675b30-292e-11e8-a088-51fbb63c887b" data-bindattr-1208="1208" class="open-conversation entry-closed" data-bindattr-1209="1209">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1210="1210"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521214058591677</p><small class="entry-metadata">20 messages, 8 minutes </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1212="1212" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">16/Mar 23:35</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="7e245e10-28be-11e8-8a7f-f352c5165022" data-bindattr-1218="1218" class="open-conversation entry-closed" data-bindattr-1219="1219">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1220="1220"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521165925998838</p><small class="entry-metadata">1 message, 1 seconds </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1222="1222" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">16/Mar 10:05</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="c74ecbf0-2843-11e8-aa38-ed9d7ba37968" data-bindattr-1228="1228" class="open-conversation entry-closed" data-bindattr-1229="1229">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1230="1230"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521113220652238</p><small class="entry-metadata">6 messages, 4 minutes </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1232="1232" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">15/Mar 19:31</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="9226edb0-27ec-11e8-9792-b7534c95a7dc" data-bindattr-1238="1238" class="open-conversation entry-closed" data-bindattr-1239="1239">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1240="1240"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1521075765256342</p><small class="entry-metadata">1 message, 1 seconds </small></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1242="1242" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">15/Mar 09:03</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="9e597960-26ff-11e8-a3dc-f9064dc3c3d3" data-bindattr-1247="1247" class="open-conversation entry-closed" data-bindattr-1248="1248">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-au" data-bindattr-1249="1249"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1520967557384622</p><small class="entry-metadata">6 messages, 2 minutes <i class="fa fa-thumbs-o-up"></i></small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1251="1251" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">14/Mar 04:49</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="01732120-2658-11e8-8903-b375c79c5c74" data-bindattr-1257="1257" class="open-conversation entry-closed" data-bindattr-1258="1258">
                                            <td class="text-center conversation-intro" style="font-style: normal;">
                                                <div class="circle flag flag-ca" data-bindattr-1259="1259"></div>
                                            </td>
                                            <td class="conversation-details">
                                                <p class="entry-info">V1520902005807587</p><small class="entry-metadata">5 messages, 3 minutes </small><span class="agent-name-item">Mahan</span></td>
                                            <td class="hidden-xs text-center conversation-icon"><i class="fa fa-comment-o"></i></td>
                                            <td class="hidden-xs hidden-sm text-center conversation-status"><span class="label label-default status-3000" data-bindattr-1261="1261" style="text-transform : uppercase;">Closed</span></td>
                                            <td class="text-center conversation-sort">13/Mar 08:50</td>
                                            <td class="text-center delete-cell">
                                                <div class="smart-form">
                                                    <label class="checkbox">
                                                        <input class="bulk-check" type="checkbox"><i class="mark-select"></i></label>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div class="alert alert-info text-center fade hidden" data-bindattr-1029="1029" id="new-history">
                                        <button class="close" data-dismiss="alert">×</button><a id="retrieveHistory" href="javascript:void(0);" title="Retrieve new history"><h4 class="alert-heading message">New Message : 0</h4></a></div>
                                </div>
                                <div id="bulk-action-container" class="hidden" data-bindattr-1031="1031">
                                    <div id="bulk-action-wrapper">
                                        <p id="bulk-total-selected"></p>
                                        <ul id="bulk-list-container">
                                            <li class="padding-10" data-bindattr-1032="1032">
                                                <button class="btn btn-danger" id="bulk-conversations-delete" data-original-title="" title="">Delete messages</button>
                                            </li>
                                            <li class="hidden padding-10" data-bindattr-1033="1033">
                                                <button class="btn btn-default" id="bulk-conversations-unspam" data-original-title="" title="">Unspam messages</button>
                                            </li>
                                            <li class="hidden padding-10" data-bindattr-1034="1034">
                                                <button class="btn btn-default" id="bulk-conversations-restore" data-original-title="" title="">Restore messages</button>
                                            </li>
                                            <li class="hidden padding-10" data-bindattr-1035="1035">
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
                    </div>
                    <article id="visitor-conversation-transcript" class="ember-view visitor-chat-container chat-container conversation-transcript">
                        <div class="jarviswidget" data-widget-editbutton="false" data-widget-custombutton="false" data-widget-fullscreenbutton="false">
                            <header class="chat-header" style="position: relative;">
                                <ul class="header-list">
                                    <li class="name-text-container" style="width: 437px;">
                                        <div class="details-flag-container"><span class="flag flag-us" data-bindattr-1362="1362"></span></div>
                                        <h2 class="name-text">Alister Daivd</h2></li>
                                    <li class="menu-container">
                                        <div class="jarviswidget-ctrls" role="menu"><a id="prev-conversation" data-ember-action="1364" class="button-icon jarviswidget-delete-btn prev hidden disabled" data-bindattr-1365="1365" href="javascript:void(0);" data-placement="bottom" data-original-title="Newer"><i class="fa fa-chevron-left"></i></a><a id="next-conversation" data-ember-action="1366" class="button-icon jarviswidget-delete-btn next hidden disabled" data-bindattr-1367="1367" href="javascript:void(0);" data-placement="bottom" data-original-title="Older"><i class="fa fa-chevron-right"></i></a><a id="close-conversation" href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title="" data-placement="bottom" data-original-title="Back to list"><i class="fa fa-times"></i></a></div>
                                        <ul class="menu nav nav-tabs" style="border : 0;">
                                            <li class="open-view active" data-bindattr-1369="1369" data-id="t0" data-bindattr-1370="1370" data-type="chat_details" data-bindattr-1371="1371"><a href="javascript:void(0);" class="tab" data-bindattr-1372="1372" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="Details" data-bindattr-1373="1373"><i class="fa fa-info" data-bindattr-1374="1374"></i></a></li>
                                            <li class="open-view" data-bindattr-1375="1375" data-id="t1" data-bindattr-1376="1376" data-type="shortcuts" data-bindattr-1377="1377"><a href="javascript:void(0);" class="tab" data-bindattr-1378="1378" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="Shortcuts" data-bindattr-1379="1379"><i class="fa fa-cut" data-bindattr-1380="1380"></i></a></li>
                                            <li class="open-view" data-bindattr-1381="1381" data-id="t2" data-bindattr-1382="1382" data-type="knowledge_base" data-bindattr-1383="1383"><a href="javascript:void(0);" class="tab" data-bindattr-1384="1384" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="Knowledge Base" data-bindattr-1385="1385"><i class="fa fa-book" data-bindattr-1386="1386"></i></a></li>
                                            <li class="open-view" data-bindattr-1387="1387" data-id="t3" data-bindattr-1388="1388" data-type="history" data-bindattr-1389="1389"><a href="javascript:void(0);" class="tab" data-bindattr-1390="1390" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="History" data-bindattr-1391="1391"><i class="fa fa-history" data-bindattr-1392="1392"></i></a></li>
                                        </ul>
                                        <div class="minimized-tab hidden jarviswidget-ctrls"><a href="javascript:void(0);" class="button-icon minimized-dropdown" data-toggle="dropdown" style="height: 32px; width: 36px;" data-original-title="" title=""><i class="fa fa-reorder"></i><span class="caret"></span></a>
                                            <ul class="minimized-dropdown-menu dropdown-menu dropdown-menu-right" role="dropdown">
                                                <li data-id="t0" data-bindattr-1393="1393" class="open-view active" data-bindattr-1394="1394"><a href="javascript:void(0);" class="text-left"><i class="fa fa-info" data-bindattr-1395="1395"></i>&nbsp;Details</a></li>
                                                <li data-id="t1" data-bindattr-1397="1397" class="open-view" data-bindattr-1398="1398"><a href="javascript:void(0);" class="text-left"><i class="fa fa-cut" data-bindattr-1399="1399"></i>&nbsp;Shortcuts</a></li>
                                                <li data-id="t2" data-bindattr-1401="1401" class="open-view" data-bindattr-1402="1402"><a href="javascript:void(0);" class="text-left"><i class="fa fa-book" data-bindattr-1403="1403"></i>&nbsp;Knowledge Base</a></li>
                                                <li data-id="t3" data-bindattr-1405="1405" class="open-view" data-bindattr-1406="1406"><a href="javascript:void(0);" class="text-left"><i class="fa fa-history" data-bindattr-1407="1407"></i>&nbsp;History</a></li>
                                                <li><a href="javascript:void(0);" class="copy-select text-left"><i class="fa fa-clipboard"></i> Copy Transcript</a></li>
                                                <li><a href="javascript:void(0);" class="print-select text-left"><i class="fa fa-print"></i> Print</a></li>
                                                <li><a href="javascript:void(0);" class="add-note text-left"><i class="fa fa-edit"></i> Add Note</a></li>
                                                <li><a href="javascript:void(0);" class="tag-visitor text-left"><i class="fa fa-tags"></i> Tag Chat</a></li>
                                                <li><a href="javascript:void(0);" class="ban-visitor text-left"><i class="fa fa-ban"></i> Ban</a></li>
                                            </ul>
                                        </div>
                                        <div class="clearfix"></div>
                                    </li>
                                </ul>
                            </header>
                            <div class="chat-message-container">
                                <div class="chat-content-container" role="content" style="right: 301px; width: auto;">
                                    <div class="chat-body custom-scroll">
                                        <div id="conversation-started">Wednesday, March 28 2018, 15:38&nbsp;</div>
                                        <div class="current-transcript">
                                            <div class="chat-table-wrapper">
                                                <div class="chat-row-wrapper">
                                                    <div class="chat-wrapper">
                                                        <div class="chat-content padding-10">
                                                            <div class="conversation-participant">
                                                                <div class="msg-time">15:38</div>
                                                                <div class="conversation-content italic">Visitor navigated to <a target="_blank" href="https://tawk.to/4eac043aab24bb0bfbc302fec70f86625215ca18/popout/default/?$_tawk_popout=true" title="https://tawk.to/4eac043aab24bb0bfbc302fec70f86625215ca18/popout/default/?$_tawk_popout=true">Pickering Toyota Live Video Chat</a> </div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block visitor">
                                                                <p class="visitor-name">Alister Daivd</p>
                                                                <div class="msg-time">15:38</div>
                                                                <div class="conversation-content">hello</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-participant">
                                                                <div class="msg-time">15:39</div>
                                                                <div class="conversation-content italic"><b>Mahan (Mahan)</b> has joined the conversation.</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block">
                                                                <p class="agent-name" agent="5a54ed99f721561639dbfc89">Mahan (Mahan)</p>
                                                                <div class="msg-time">15:40</div>
                                                                <div class="conversation-content">Hello</div>
                                                                <div class="conversation-content">How may I assist you</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block visitor">
                                                                <p class="visitor-name">Alister Daivd</p>
                                                                <div class="msg-time">15:41</div>
                                                                <div class="conversation-content">I am looking for toyota camry.</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block">
                                                                <p class="agent-name" agent="5a54ed99f721561639dbfc89">Mahan (Mahan)</p>
                                                                <div class="msg-time">15:42</div>
                                                                <div class="conversation-content">Yes please let me know if I can have your contact information</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block visitor">
                                                                <p class="visitor-name">Alister Daivd</p>
                                                                <div class="msg-time">15:43</div>
                                                                <div class="conversation-content">I am testing now</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block">
                                                                <p class="agent-name" agent="5a54ed99f721561639dbfc89">Mahan (Mahan)</p>
                                                                <div class="msg-time">15:43</div>
                                                                <div class="conversation-content">Thank you thank you testing testing</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block visitor">
                                                                <p class="visitor-name">Alister Daivd</p>
                                                                <div class="msg-time">15:46</div>
                                                                <div class="conversation-content">I will go on testing</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block">
                                                                <p class="agent-name" agent="5a54ed99f721561639dbfc89">Mahan (Mahan)</p>
                                                                <div class="msg-time">15:51</div>
                                                                <div class="conversation-content">Thanks testing with you</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block visitor">
                                                                <p class="visitor-name">Alister Daivd</p>
                                                                <div class="msg-time">15:51</div>
                                                                <div class="conversation-content">test message1</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block">
                                                                <p class="agent-name" agent="5a60123e3098e70e78bf9fac">frank (Me)</p>
                                                                <div class="msg-time">15:53</div>
                                                                <div class="conversation-content">test message</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block visitor">
                                                                <p class="visitor-name">Alister Daivd</p>
                                                                <div class="msg-time">15:53</div>
                                                                <div class="conversation-content">test message</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block">
                                                                <p class="agent-name" agent="5a54ed99f721561639dbfc89">Mahan (Mahan)</p>
                                                                <div class="msg-time">15:53</div>
                                                                <div class="conversation-content">Test it out to test</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block">
                                                                <p class="agent-name" agent="5a60123e3098e70e78bf9fac">frank (Me)</p>
                                                                <div class="msg-time">15:56</div>
                                                                <div class="conversation-content">testing message</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="conversation-block visitor">
                                                                <p class="visitor-name">Alister Daivd</p>
                                                                <div class="msg-time">15:58</div>
                                                                <div class="conversation-content">testing message</div>
                                                            </div>
                                                            <div class="clear"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat-footer">
                                        <div class="textarea-div tab-content" style="height : 100%;">
                                            <div class="tab-pane active reply-tab">
                                                <div class="join-container">
                                                    <div class="profile-overlay"></div>
                                                    <div class="transcript-button-container">
                                                        <button class="btn btn-primary create-ticket-history" data-original-title="" title="">Convert to ticket</button>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-details-container ui-resizable" style="white-space: normal;">
                                    <div class="details-container">
                                        <div class="details-view menu-content" style="display: block;">
                                            <div id="ember1425" class="ember-view visitor-details-view">
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
                                                                    <input type="text" value="Alister Daivd" data-bindattr-1426="1426" class="required visitor-name-input" placeholder="Visitor Name" style="padding-right : 38px;">
                                                                </label>
                                                            </section>
                                                            <section>
                                                                <label class="input">
                                                                    <button class="icon-append btn btn-primary btn-xs save-visitor-attributes"><i class="fa fa-save"></i></button>
                                                                    <input type="text" value="" data-bindattr-1427="1427" class="email visitor-email-input" placeholder="Visitor Email" style="padding-right : 38px;">
                                                                </label>
                                                            </section>
                                                            <div class="clearfix"></div>
                                                        </form>
                                                        <div style="position: relative; word-wrap: break-word; white-space: pre-line; border : 1px solid #BDBDBD; padding: 5px 10px; min-height: 22px; line-height: 22px;">
                                                            <div class="location-details">
                                                                <div class="country-name hover-location" rel="popover" title="" data-placement="right" data-content="76-164-216.unassigned.userdns.com" data-bindattr-1428="1428" data-original-title="">Las Vegas,&nbsp;United States</div>
                                                                <div class="pull-right"><span class="visitor-ip hover-location" rel="popover" title="" data-placement="top" data-content="76-164-216.unassigned.userdns.com" data-bindattr-1430="1430" data-original-title="">76.164.216.25</span><span class="visitor-time hover-location" rel="popover" title="" data-placement="bottom" data-content="Visitor's current local time" data-original-title=""></span></div>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="fields-container">
                                                        <div>
                                                            <div class="device-detail" rel="popover" data-placement="right" data-content="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36" data-bindattr-1433="1433" data-original-title="" title=""><span class="chrome-browser sprite-background" data-bindattr-1434="1434" style="margin : 0 2px; vertical-align: middle;"></span><span class="windows-os sprite-background" data-bindattr-1435="1435" style="vertical-align: middle;"></span>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                            <div class="device-detail" rel="popover" data-placement="right" data-content="Last Visit" data-original-title="" title="">1d</div>
                                                            <div class="device-detail" rel="popover" data-placement="top" data-content="Chat Duration" data-original-title="" title="">20m</div>
                                                        </div>
                                                    </div>
                                                    <div class="fields-container" style="border-bottom : 0;">
                                                        <div class="chat-timeline-container tree">
                                                            <li class="parent_li">
                                                                <div class="timeline-label"><span class="label">15:58</span>&nbsp;</div>
                                                                <div class="timeline-data">Chat ended</div>
                                                            </li>
                                                            <li class="parent_li">
                                                                <div class="timeline-label"><span class="label">15:38</span>&nbsp;</div>
                                                                <div class="timeline-data">Chat started</div>
                                                            </li>
                                                            <li class="parent_li">
                                                                <div class="timeline-label"><span class="label">15:38</span>&nbsp;</div>
                                                                <div class="timeline-data">Visitor navigated to <a target="_blank" href="https://tawk.to/4eac043aab24bb0bfbc302fec70f86625215ca18/popout/default/?$_tawk_popout=true" title="https://tawk.to/4eac043aab24bb0bfbc302fec70f86625215ca18/popout/default/?$_tawk_popout=true">Pickering Toyota Live Video Chat</a> </div>
                                                            </li>
                                                            <div style="padding: 0 5px;"><i class="fa fa-chevron-right"></i>&nbsp;<a href="https://dashboard.tawk.to/" data-bindattr-1445="1445" target="_blank" class="linkable">https://dashboard.tawk.to/</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="shortcuts-view menu-content hidden" style="display: block;"></div>
                                        <div class="history-view menu-content hidden" style="display: block;"></div>
                                        <div class="knowledgebase-view menu-content hidden" style="white-space: normal; display: block;"></div>
                                        <div class="menu-content shopify-data-view hidden" style="word-wrap: break-word; white-space: normal; display: block;"></div>
                                        <div class="menu-content client-data-view hidden" style="word-wrap: break-word; white-space: normal; display: block;"></div>
                                        <div class="menu-content custom-view hidden" style="word-wrap: break-word; white-space: normal; display: block;"></div>
                                        <div class="floating-view hidden" style="white-space: normal;"></div>
                                    </div>
                                    <div class="details-button-container">
                                        <button class="btn btn-default button-icon create-ticket-history open-subview" rel="tooltip" data-placement="top" data-original-title="Convert to ticket"><i class="fa fa-ticket"></i></button>
                                        <button class="btn btn-default button-icon copy-select" rel="tooltip" data-placement="top" data-original-title="Copy Transcript"><i class="fa fa-clipboard"></i></button>
                                        <button class="btn btn-default email-transcript" data-placement="bottom" data-original-title="Email"><i class="fa fa-envelope-o"></i></button>
                                        <button class="btn btn-default button-icon print-transcript" rel="tooltip" data-placement="top" data-original-title="Print"><i class="fa fa-print"></i></button>
                                        <br>
                                        <button class="btn btn-default button-icon add-note" rel="tooltip" data-placement="top" data-original-title="Add Note"><i class="fa fa-edit"></i></button>
                                        <button class="btn btn-primary tag-transcript button-icon" rel="tooltip" data-placement="top" data-original-title="Tag Chat"><i class="fa fa-tags"></i></button>
                                        <button class="btn btn-danger ban-visitor button-icon" rel="tooltip" data-placement="top" data-original-title="Ban"><i class="fa fa-ban"></i></button>
                                        <button class="btn btn-default single-conversation-delete" data-placement="top" data-original-title="Delete"><i class="fa fa-trash-o"></i></button>
                                    </div><i class="fa fa-ellipsis-v"></i>
                                    <div class="ui-resizable-handle ui-resizable-w" style="z-index: 90;"></div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div id="list-loading" style="display: none;">
                    <h5><i class="fa fa-refresh fa-spin"></i></h5></div>
            </div>
        </div>
    </div>
    <div id="visitor-chat-view" class="ember-view" style="visibility: visible;">
        <div class="content">
            <div class="row view-header">
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <h1 class="page-title txt-color-blueDark">
                        <i class="fa-fw fa fa-comments"></i>
                        <p id="view-title">Chats</p>
                    </h1>
                </div>
                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                    <div style="display: table;">
                        <div style="display: table-cell; width: 1%">
                            <div id="visitor-chat-action-container">
                                <i id="button-details-toggle" class="fa fa-columns active" data-bindattr-793="793" aria-hidden="true" data-original-title="Toggle OFF All Chat Details" data-bindattr-794="794" data-placement="bottom"></i>
                                <div class="btn-group"><a id="prev-chat" class="btn btn-default btn-circle disabled prev" href="javascript:void(0);" data-placement="bottom" data-original-title="Previous"><i class="fa fa-chevron-left"></i></a><a id="next-chat" class="btn btn-default btn-circle disabled next" href="javascript:void(0);" data-placement="bottom" data-original-title="Next"><i class="fa fa-chevron-right"></i></a></div>
                                <div class="slider-container">
                                    <div id="slider" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false"><a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 100%;"></a></div>
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
            <div id="inner-content" class="innerContent col-1" data-bindattr-795="795">
                <div id="chat-scroller">
                    <div id="no-chat-message" class="well text-center hidden" data-bindattr-796="796">
                        <div id="simulate-chat-text">
                            <h5> You are not part of any active chats from any of your <a href="javascript:void(0);" id="view-sites"> sites </a> or <a href="javascript:void(0);" id="view-pages"> tawk.to pages </a> . </h5>
                            <h5> Click <a href="javascript:void(0);" id="simulate-chat"> here </a> to simulate a visitor and initiate a chat to test the application. </h5>
                        </div>
                    </div>
                    <article id="c857ecf4a0ebc3328d3bb6cc9540823da94907f47abb7d0b4a1a3011264b51de" class="ember-view visitor-chat-container chat-container">
                        <div class="jarviswidget focus-chat" data-bindattr-1306="1306" data-widget-editbutton="false" data-widget-custombutton="false" data-widget-fullscreenbutton="false">
                            <header class="chat-header" data-bindattr-1307="1307" style="position: relative;">
                                <ul class="header-list">
                                    <li class="name-text-container" style="width: 609px;">
                                        <div class="details-flag-container"><span class="flag flag-us" data-bindattr-1308="1308"></span></div>
                                        <h2 class="name-text">104.194.0.35 - Pickering Toyota Live Video Chat</h2>
                                    </li>
                                    <li class="menu-container">
                                        <div class="jarviswidget-ctrls" role="menu"><a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn end-chat" rel="tooltip" title="" data-placement="bottom" data-original-title="End"><i class="fa fa-times"></i></a></div>
                                        <ul class="menu nav nav-tabs" style="border : 0;">
                                            <li class="open-view active" data-bindattr-1323="1323" data-id="t0" data-bindattr-1324="1324" data-type="chat_details" data-bindattr-1325="1325"><a href="javascript:void(0);" class="tab" data-bindattr-1326="1326" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="Details" data-bindattr-1327="1327"><i class="fa fa-info" data-bindattr-1328="1328"></i></a></li>
                                            <li class="open-view" data-bindattr-1329="1329" data-id="t1" data-bindattr-1330="1330" data-type="shortcuts" data-bindattr-1331="1331"><a href="javascript:void(0);" class="tab" data-bindattr-1332="1332" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="Shortcuts" data-bindattr-1333="1333"><i class="fa fa-cut" data-bindattr-1334="1334"></i></a></li>
                                            <li class="open-view" data-bindattr-1335="1335" data-id="t2" data-bindattr-1336="1336" data-type="knowledge_base" data-bindattr-1337="1337"><a href="javascript:void(0);" class="tab" data-bindattr-1338="1338" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="Knowledge Base" data-bindattr-1339="1339"><i class="fa fa-book" data-bindattr-1340="1340"></i></a></li>
                                            <li class="open-view" data-bindattr-1341="1341" data-id="t3" data-bindattr-1342="1342" data-type="history" data-bindattr-1343="1343"><a href="javascript:void(0);" class="tab" data-bindattr-1344="1344" rel="tooltip" data-toggle="dropdown" data-placement="bottom" data-original-title="History" data-bindattr-1345="1345"><i class="fa fa-history" data-bindattr-1346="1346"></i></a></li>
                                        </ul>
                                        <div class="minimized-tab hidden jarviswidget-ctrls">
                                            <a href="javascript:void(0);" class="button-icon minimized-dropdown" data-toggle="dropdown" style="height: 32px; width: 36px;" data-original-title="" title=""><i class="fa fa-reorder"></i><span class="caret"></span></a>
                                            <ul class="minimized-dropdown-menu dropdown-menu dropdown-menu-right" role="dropdown">
                                                <li data-id="t0" data-bindattr-1347="1347" class="open-view active" data-bindattr-1348="1348"><a href="javascript:void(0);" class="text-left"><i class="fa fa-info" data-bindattr-1349="1349"></i>&nbsp;Details</a></li>
                                                <li data-id="t1" data-bindattr-1351="1351" class="open-view" data-bindattr-1352="1352"><a href="javascript:void(0);" class="text-left"><i class="fa fa-cut" data-bindattr-1353="1353"></i>&nbsp;Shortcuts</a></li>
                                                <li data-id="t2" data-bindattr-1355="1355" class="open-view" data-bindattr-1356="1356"><a href="javascript:void(0);" class="text-left"><i class="fa fa-book" data-bindattr-1357="1357"></i>&nbsp;Knowledge Base</a></li>
                                                <li data-id="t3" data-bindattr-1359="1359" class="open-view" data-bindattr-1360="1360"><a href="javascript:void(0);" class="text-left"><i class="fa fa-history" data-bindattr-1361="1361"></i>&nbsp;History</a></li>
                                                <li><a href="javascript:void(0);" class="ticket-create open-subview text-left"><i class="fa fa-ticket"></i> Create Ticket</a></li>
                                                <li><a href="javascript:void(0);" class="copy-select text-left"><i class="fa fa-clipboard"></i> Copy Transcript</a></li>
                                                <li><a href="javascript:void(0);" class="print-select text-left"><i class="fa fa-print"></i> Print</a></li>
                                                <li><a href="javascript:void(0);" class="add-note text-left"><i class="fa fa-edit"></i> Add Note</a></li>
                                                <li><a href="javascript:void(0);" class="tag-transcript text-left"><i class="fa fa-tags"></i> Tag Chat</a></li>
                                                <li><a href="javascript:void(0);" class="ban-visitor text-left"><i class="fa fa-ban"></i> Ban</a></li>
                                                <li><a href="javascript:void(0);" class="ignore-current-chat text-left" data-bindattr-1385="1385"><i class="fa fa-eye-slash"></i> Ignore</a></li>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="select2-drop select2-drop-active hidden">
                                        <ul class="select2-results" role="listbox"></ul>
                                    </div>
                                    <div class="chat-footer" data-bindattr-1311="1311" style="height: 105px;">
                                        <ul class="nav nav-tabs" style="position:absolute; bottom : 100%;">
                                            <li data-id="reply-tab" class="open-tab-pane active"><a href="javascript:void(0);">Message</a></li>
                                            <li data-id="whisper-tab" class="open-tab-pane whisper-tab"><a href="javascript:void(0);">Whisper</a></li>
                                        </ul>
                                        <div class="textarea-div tab-content" style="height : 100%;">
                                            <div class="tab-pane active reply-tab">
                                                <div style="width: 100%; height: 100%;">
                                                    <div class="drop-text"><span>Drop files here to upload</span></div>
                                                    <div class="typearea">
                                                        <a class="open-emoji" href="javascript:void(0);"><i class="fa fa-smile-o"></i></a>
                                                        <form enctype="multipart/form-data" class="upload-form" method="post"><input type="file" class="hidden file-input" name="file[]" multiple="multiple" id="file-5abd0a217129b6b82b5a50fd" data-bindattr-1432="1432"><label class="upload-file fa fa-paperclip fa-lg fa-flip-vertical input-tooltip" title="" for="file-5abd0a217129b6b82b5a50fd" data-bindattr-1433="1433" data-original-title="Upload File" data-placement="left"></label></form>
                                                        <div style="position: absolute;right: 28px;bottom: 10px;text-align: right;"><a class="video-call-visitor padding-5  input-tooltip" href="javascript:void(0);" style="color: rgb(204, 204, 204);" data-original-title="Video Call"><i class="fa fa-video-camera fa-lg" style="font-weight: bold"></i></a><a class="phone-call-visitor padding-5 input-tooltip" href="javascript:void(0);" style="color: rgb(204, 204, 204);" data-original-title="Voice Call"><i class="fa fa-phone fa-lg" style="font-weight: bold"></i></a><a class="screen-share-visitor padding-5  input-tooltip" href="javascript:void(0);" style="color: rgb(204, 204, 204);" data-original-title="Screen Share"><i class="fa fa-desktop fa-lg" style="font-weight: bold;"></i></a></div>
                                                        <textarea placeholder="Write a reply..." id="voochat-editor" class="custom-scroll chat-input message-input" style="height: 40px; min-height : 40px; overflow-y: hidden;"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane whisper-tab">
                                                <div class="profile-overlay hidden" data-bindattr-1312="1312"></div>
                                                <div class="typearea" data-bindattr-1313="1313"><a class="open-emoji" href="javascript:void(0);"><i class="fa fa-smile-o"></i></a><textarea placeholder="Whisper to agents in the chat. The visitor will not see this message." class="custom-scroll chat-input whisper-input" style="height: 60px; min-height : auto; overflow-y: hidden;"></textarea></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat-details-container ui-resizable" style="white-space: normal;">
                                    <div class="details-container">
                                        <div class="details-view menu-content" style="display: block;">
                                            <div id="ember1364" class="ember-view visitor-details-view">
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
                                                            <section><label class="input visitor-name-field"><button class="icon-append btn btn-primary btn-xs save-visitor-attributes"><i class="fa fa-save"></i></button><input type="text" value="V1522338337202838" data-bindattr-1365="1365" class="required visitor-name-input" placeholder="Visitor Name" style="padding-right : 38px;"></label></section>
                                                            <section><label class="input"><button class="icon-append btn btn-primary btn-xs save-visitor-attributes"><i class="fa fa-save"></i></button><input type="text" value="" data-bindattr-1366="1366" class="email visitor-email-input" placeholder="Visitor Email" style="padding-right : 38px;"></label></section>
                                                            <div class="clearfix"></div>
                                                        </form>
                                                        <div style="position: relative; word-wrap: break-word; white-space: pre-line; border : 1px solid #BDBDBD; padding: 5px 10px; min-height: 22px; line-height: 22px;">
                                                            <div class="location-details">
                                                                <div class="country-name hover-location" rel="popover" title="" data-placement="right" data-content="" data-bindattr-1367="1367" data-original-title="">Las Vegas,&nbsp;United States</div>
                                                                <div class="pull-right"><span class="visitor-ip hover-location" rel="popover" title="" data-placement="top" data-content="" data-bindattr-1369="1369" data-original-title="">104.194.0.35</span><span class="visitor-time hover-location" rel="popover" title="" data-placement="bottom" data-content="Visitor's current local time" data-original-title="">11:54 PM</span></div>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="fields-container">
                                                        <div>
                                                            <div class="device-detail" rel="popover" data-placement="right" data-content="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36" data-bindattr-1372="1372" data-original-title="" title="">
                                                                <span class="sprite-background chrome-browser" data-bindattr-1373="1373" style="margin : 0 2px; vertical-align: middle;"></span><span class="sprite-background windows-os" data-bindattr-1374="1374" style="vertical-align: middle;"></span>
                                                                <div class="clearfix"></div>
                                                            </div>
                                                            <div class="device-detail" rel="popover" data-placement="right" data-content="Duration" data-original-title="" title="">00:09:07</div>
                                                            <div class="device-detail" rel="popover" data-placement="right" data-content="Last Visit" data-original-title="" title=""></div>
                                                            <div class="device-detail" rel="popover" data-placement="top" data-content="chats" data-original-title="" title="">0 chats</div>
                                                        </div>
                                                    </div>
                                                    <div class="fields-container" style="border-bottom : 0;">
                                                        <div class="chat-timeline-container tree">
                                                            <li class="parent_li">
                                                                <div class="timeline-label"><span class="label">23:45</span>&nbsp;</div>
                                                                <div class="timeline-data">Chat started</div>
                                                            </li>
                                                            <li class="parent_li">
                                                                <div class="timeline-label"><span class="label">23:45</span>&nbsp;</div>
                                                                <div class="timeline-data">Visitor navigated to <a target="_blank" href="https://tawk.to/4eac043aab24bb0bfbc302fec70f86625215ca18/popout/default/?$_tawk_popout=true" title="https://tawk.to/4eac043aab24bb0bfbc302fec70f86625215ca18/popout/default/?$_tawk_popout=true">Pickering Toyota Live Video Chat</a> </div>
                                                            </li>
                                                            <div style="padding: 0 5px;"><i class="fa fa-chevron-right"></i>&nbsp;<a href="https://dashboard.tawk.to/" data-bindattr-1383="1383" target="_blank" class="linkable">https://dashboard.tawk.to/</a></div>
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
                                    <div class="details-button-container"><button class="btn btn-default button-icon ticket-create open-subview" rel="tooltip" data-placement="top" data-original-title="Create Ticket"><i class="fa fa-ticket"></i></button><button class="btn btn-default button-icon copy-select" rel="tooltip" data-placement="top" data-original-title="Copy Transcript"><i class="fa fa-clipboard"></i></button><button class="btn btn-default button-icon print-select" rel="tooltip" data-placement="top" data-original-title="Print"><i class="fa fa-print"></i></button><button class="btn btn-default button-icon add-note" rel="tooltip" data-placement="top" data-original-title="Add Note"><i class="fa fa-edit"></i></button><br><button class="btn btn-primary tag-transcript button-icon" rel="tooltip" data-placement="top" data-original-title="Tag Chat"><i class="fa fa-tags"></i></button><button class="btn btn-danger ban-visitor button-icon" rel="tooltip" data-placement="top" data-original-title="Ban"><i class="fa fa-ban"></i></button><button class="btn btn-default ignore-current-chat button-icon" data-bindattr-1363="1363" rel="tooltip" data-placement="top" data-original-title="Ignore" style="background : #ddd;"><i class="fa fa fa-eye-slash"></i></button></div>
                                    <i class="fa fa-ellipsis-v"></i>
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
<script src="assets/js/chat.js"></script>
