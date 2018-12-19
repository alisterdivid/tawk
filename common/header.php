<?php
require_once("includes/DB_Connection.php");
require_once("includes/functions.php");
?>
<!DOCTYPE html>
<html style="" class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths cookies filereader usermedia">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>VOOChat | Monitoring</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <!-- FAVICONS -->
    <link rel="shortcut icon" href="a34/images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="a34/images/favicon.ico" type="image/x-icon">

    <!-- GOOGLE FONT -->
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700">

    <!--[if !IE]> -->
    <link rel="stylesheet" href="554/css/style.combined.css">
    <!-- <![endif]-->

    <!--[if IE]>
    <link rel="stylesheet" href="554/css/bootstrap.style.css">
    <link rel="stylesheet" href="554/css/theme.style.css">
    <link rel="stylesheet" href="554/css/style.css">
    <![endif]-->
</head>

<body class="fixed-header fixed-ribbon smart-style-4 en desktop-detected ember-application modal-open">
<div id="back-top" class="hidden">
    <button type="button" class="btn btn-circle bg-color-blueDark txt-color-white" title="Back to top">
        <i class="fa fa-gear fa-arrow-up"></i>
    </button>
</div>
<div id="fixed-notification-container">
</div>

<div id="divSmallBoxes"></div>
<div id="divMiniIcons"></div>
<div id="divbigBoxes"></div>
<div id="main-nav" class="ember-view">
    <div id="profile-nav">
        <div class="dropdown nav-select"><a href="javascript:void(0);" class="nav-item" data-toggle="dropdown"><i class="fa fa-user"></i><div id="profile-image" style="background-image: none;"></div><div style="    position: absolute;    position: absolute;    bottom: -2.5px;    right: -3px;    width: 15px;    height: 15px;    background: #666;    border-radius: 50%;"></div><div id="account-status" class="status-online" data-bindattr-676="676"></div></a>
            <ul id="account-menu-container" class="dropdown-menu multi-level text-left" role="menu" style="min-width : 250px; margin-top : 13px;">
                <li><a tabindex="-1" href="javascript:void(0);" class="navigate-view" id="account-select">My Profile</a></li>
                <li class="dropdown-submenu" id="status-select"><a href="javascript:void(0);"><span class="status-online" data-bindattr-677="677"></span>&nbsp;<span style="display: inline-block; vertical-align: middle">Online</span></a>
                    <ul class="dropdown-menu">
                        <li><a tabindex="-1" href="javascript:void(0);" class="status-select" id="online"><span class="status-online"></span>&nbsp;<span style="display: inline-block; vertical-align: middle">Online</span></a></li>
                        <li><a href="javascript:void(0);" class="status-select" id="away"><span class="status-away"></span>&nbsp;<span style="display: inline-block; vertical-align: middle">Away</span></a></li>
                        <li><a href="javascript:void(0);" class="status-select" id="invisible"><span class="status-invisible"></span>&nbsp;<span style="display: inline-block; vertical-align: middle">Invisible</span></a></li>
                    </ul>
                </li>
                <li class="dropdown-submenu" id="property-status-toggle"><a href="javascript:void(0);">Accept chats from</a>
                    <ul class="dropdown-menu" style="min-width : 420px; max-height : 300px; overflow: auto;">
                        <li class="dropdown-header">Sites</li>
                        <li>
                            <div class="smart-form" style="padding : 5px 20px;">
                                <label class="toggle" style="font-size : inherit">
                                    <input type="checkbox" name="checkbox-toggle" checked="checked" data-property-id="5a67ac584b401e45400c5653" data-bindattr-694="694"><i data-swchon-text="Yes" data-swchoff-text="No"></i>Pickering Toyota Live Video Chat</label>
                            </div>
                        </li>
                        <li>
                            <div class="smart-form" style="padding : 5px 20px;">
                                <label class="toggle" style="font-size : inherit">
                                    <input type="checkbox" name="checkbox-toggle" checked="checked" data-property-id="5a55196ed7591465c7069586" data-bindattr-696="696"><i data-swchon-text="Yes" data-swchoff-text="No"></i>Uniqks</label>
                            </div>
                        </li>
                        <li class="divider"></li>
                        <li class="dropdown-header">VOOChat Pages</li>
                        <li>
                            <div class="smart-form" style="padding : 5px 20px;">
                                <label class="toggle" style="font-size : inherit">
                                    <input type="checkbox" name="checkbox-toggle" checked="checked" data-property-id="5a60123e3098e70e78bf9fad" data-bindattr-698="698"><i data-swchon-text="Yes" data-swchoff-text="No"></i>frank</label>
                            </div>
                        </li>
                    </ul>
                </li>
                <li class="divider"></li>
                <li class="presentation" id="desktop-notification-container">
                    <div class="smart-form" style="padding : 5px 20px;">
                        <section style="margin-bottom : 0;">
                            <label class="toggle" style="font-size : inherit">
                                <input type="checkbox" name="checkbox-toggle" class="desktop-notification-switch"><i data-swchon-text="ON" data-swchoff-text="OFF"></i>Desktop notifications</label>
                        </section>
                    </div>
                </li>
                <li class="presentation" id="sound-notification-container">
                    <div class="smart-form" style="padding : 5px 20px;">
                        <section style="margin-bottom : 0;">
                            <label class="toggle" style="font-size : inherit">
                                <input type="checkbox" name="checkbox-toggle" class="sound-notification-switch" checked="checked"><i data-swchon-text="ON" data-swchoff-text="OFF"></i>Sound notifications</label>
                        </section>
                    </div>
                </li>
                <li class="presentation"><a href="javascript:void(0);" class="manage-sounds">Manage Sounds</a></li>
                <li class="divider"></li>
                <li class="presentation"><a href="javascript:void(0);" class="manage-sessions">Browser &amp; App Sessions</a></li>
                <li class="divider"></li>
                <li class="presentation"><a href="javascript:void(0);" class="support-popout"><i class="fa fa-support"></i>&nbsp;Need Help? Let's chat</a></li>
                <li class="presentation"><a href="https://www.VOOChat/knowledgebase/" target="_blank"><i class="fa fa-book"></i>&nbsp;Knowledgebase</a></li>
                <li class="dropdown-submenu dropup">
                    <a tabindex="-1" href="javascript:void(0);"><img src="a34/images/blank.gif" class="flag flag-en" data-bindattr-699="699" alt="english" data-bindattr-700="700"><span>&nbsp;english&nbsp;</span></a>
                    <ul id="dashboard-lang-selection" class="dropdown-menu">
                        <li>
                            <a href="javascript:void(0);" id="bg" data-bindattr-702="702" class="change-language"><img src="a34/images/blank.gif" class="flag flag-bg" data-bindattr-703="703" alt="български" data-bindattr-704="704">&nbsp;български</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="cat" data-bindattr-706="706" class="change-language"><img src="a34/images/blank.gif" class="flag flag-cat" data-bindattr-707="707" alt="català" data-bindattr-708="708">&nbsp;català</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="cs" data-bindattr-710="710" class="change-language"><img src="a34/images/blank.gif" class="flag flag-cs" data-bindattr-711="711" alt="čeština" data-bindattr-712="712">&nbsp;čeština</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="de" data-bindattr-714="714" class="change-language"><img src="a34/images/blank.gif" class="flag flag-de" data-bindattr-715="715" alt="Deutsch" data-bindattr-716="716">&nbsp;Deutsch</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="en" data-bindattr-718="718" class="change-language"><img src="a34/images/blank.gif" class="flag flag-en" data-bindattr-719="719" alt="english" data-bindattr-720="720">&nbsp;english</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="es" data-bindattr-722="722" class="change-language"><img src="a34/images/blank.gif" class="flag flag-es" data-bindattr-723="723" alt="español" data-bindattr-724="724">&nbsp;español</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="fr" data-bindattr-726="726" class="change-language"><img src="a34/images/blank.gif" class="flag flag-fr" data-bindattr-727="727" alt="français" data-bindattr-728="728">&nbsp;français</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="hi" data-bindattr-730="730" class="change-language"><img src="a34/images/blank.gif" class="flag flag-hi" data-bindattr-731="731" alt="हिंदी" data-bindattr-732="732">&nbsp;हिंदी</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="it" data-bindattr-734="734" class="change-language"><img src="a34/images/blank.gif" class="flag flag-it" data-bindattr-735="735" alt="italiano" data-bindattr-736="736">&nbsp;italiano</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="hu" data-bindattr-738="738" class="change-language"><img src="a34/images/blank.gif" class="flag flag-hu" data-bindattr-739="739" alt="magyar" data-bindattr-740="740">&nbsp;magyar</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="ko" data-bindattr-742="742" class="change-language"><img src="a34/images/blank.gif" class="flag flag-ko" data-bindattr-743="743" alt="한국어" data-bindattr-744="744">&nbsp;한국어</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="nl" data-bindattr-746="746" class="change-language"><img src="a34/images/blank.gif" class="flag flag-nl" data-bindattr-747="747" alt="Nederlands" data-bindattr-748="748">&nbsp;Nederlands</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="pl" data-bindattr-750="750" class="change-language"><img src="a34/images/blank.gif" class="flag flag-pl" data-bindattr-751="751" alt="polski" data-bindattr-752="752">&nbsp;polski</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="pt_br" data-bindattr-754="754" class="change-language"><img src="a34/images/blank.gif" class="flag flag-pt_br" data-bindattr-755="755" alt="português (Brasil)" data-bindattr-756="756">&nbsp;português (Brasil)</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="ro" data-bindattr-758="758" class="change-language"><img src="a34/images/blank.gif" class="flag flag-ro" data-bindattr-759="759" alt="română" data-bindattr-760="760">&nbsp;română</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="ru" data-bindattr-762="762" class="change-language"><img src="a34/images/blank.gif" class="flag flag-ru" data-bindattr-763="763" alt="Русский" data-bindattr-764="764">&nbsp;Русский</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="sk" data-bindattr-766="766" class="change-language"><img src="a34/images/blank.gif" class="flag flag-sk" data-bindattr-767="767" alt="slovenčina" data-bindattr-768="768">&nbsp;slovenčina</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="sv" data-bindattr-770="770" class="change-language"><img src="a34/images/blank.gif" class="flag flag-sv_se" data-bindattr-771="771" alt="svenska" data-bindattr-772="772">&nbsp;svenska</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="tr" data-bindattr-774="774" class="change-language"><img src="a34/images/blank.gif" class="flag flag-tr" data-bindattr-775="775" alt="Türkçe" data-bindattr-776="776">&nbsp;Türkçe</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="vi" data-bindattr-778="778" class="change-language"><img src="a34/images/blank.gif" class="flag flag-vi" data-bindattr-779="779" alt="Tiếng Việt" data-bindattr-780="780">&nbsp;Tiếng Việt</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" id="zh_tw" data-bindattr-782="782" class="change-language"><img src="a34/images/blank.gif" class="flag flag-zh_tw" data-bindattr-783="783" alt="中文" data-bindattr-784="784">&nbsp;中文</a>
                        </li>
                    </ul>
                </li>
                <li class="divider"></li>
                <li><a href="https://dashboard.VOOChat/logout" data-bindattr-690="690"><i class="fa fa-power-off"></i>&nbsp;Logout</a></li>
                <div class="block"></div>
            </ul>
        </div>
    </div>
    <div id="other-nav">
        <ul id="nav-list">
            <li class="navigate-view menu-tooltip nav-select" id="dashboard-select" data-placement="right" data-original-title="Dashboard" style="margin-top: 11px;"><a href="dashboard.php" class="nav-item"><i class="fa fa-dashboard"></i></a></li>
            <li class="navigate-view menu-tooltip nav-select active" id="monitoring-select" data-placement="right" data-original-title="Monitoring"><a href="monitoring.php" class="nav-item"><span class="fa-stack fa-lg" style="font-size: 27px;width: 27px;height: 27px;line-height: 27px;"><i class="fa fa-desktop fa-stack-2x" style="font-size: 27px;left: -1px;"></i><i class="fa fa-line-chart fa-stack-1x" style="font-size: 19px;left: -3px;bottom: 3px;"></i></span></a><span class="badge">1</span></li>
            <li class="navigate-view menu-tooltip nav-select" id="chat-select" data-placement="right" data-original-title="Active Chats"><a href="chat.php" class="nav-item"><i class="fa fa-comments"></i></a></li>
            <li class="navigate-view menu-tooltip nav-select" id="messaging-select" data-placement="right" data-original-title="Messaging"><a href="messaging.php" class="nav-item"><i class="fa fa-inbox"></i></a><span class="badge">18</span></li>
            <li class="navigate-view menu-tooltip nav-select" id="reporting-select" data-placement="right" data-original-title="Reporting"><a href="reporting.php" class="nav-item"><i class="fa fa-bar-chart"></i></a></li>
            <li class="navigate-view menu-tooltip nav-select" id="addon-select" data-placement="right" data-original-title="Add-ons"><a href="javascript: void(0);" class="nav-item"><i class="fa fa-puzzle-piece" style="margin-left: 4px; padding-top: 6px;"></i></a></li>
            <li class="navigate-view menu-tooltip nav-select" id="admin-select" data-placement="right" data-original-title="Admin"><a href="admin.php" class="nav-item"><i class="fa fa-gear"></i></a></li>
        </ul>
    </div>
</div>
<aside id="left-panel" class="ember-view">
    <div id="unseen-top" class="hidden"><span class="text">Unseen</span>&nbsp;<i class="fa fa-arrow-up"></i></div>
    <nav id="visitors">
        <div id="visitorsScrollContainer">
            <div class="list-section hidden" data-bindattr-787="787" style="border-bottom: 1px solid rgb(26, 24, 23) !important;">
                <div id="icr-title" class="sidebar-title" style="padding-right :5px;">
                    <p style="float: left; width: 100%; display: block; margin : 0;"><span class="active-chats full-name">Incoming</span></p><span style="color : #bbc0cf; border : 1px solid #bbc0cf; border-radius : 3px; display: inline-block; width: 24px; text-align: center; font-weight : bold; float: right;margin-left : -100%;">0</span>
                    <div class="clearfix"></div>
                </div>
                <ul id="incomingChats" class="visitor-list" style="display : block;"></ul>
            </div>
            <div class="list-section">
                <ul id="activeVisitors" class="" data-bindattr-789="789">
                    <li class="property-list top-menu-invisible open" data-bindattr-6097="6097">
                        <a class="list-name-container" href="javascript:void(0);" data-id="5a55196ed7591465c7069586" data-bindattr-6098="6098" style="padding-right :5px;">
                            <p style="float: left; width: 100%; display: block; margin : 0;"><span class="property-name full-name">Uniqks</span><span class="property-name-short add-tooltip" data-original-title="Uniqks" data-bindattr-6100="6100" data-placement="right">U</span></p><span style="color : #bbc0cf; border : 1px solid #bbc0cf; border-radius : 3px; display: inline-block; width: 24px; text-align: center; font-weight : bold; float: right;margin-left : -100%;">1</span>
                            <div class="clearfix"></div>
                        </a>
                        <ul class="visitor-list">
                            <li id="ember6103" class="">
                                <a href="javascript:void(0);" class="visitor-name in-view" data-bindattr-6104="6104" data-chat-status="online" data-bindattr-6105="6105" style="padding: 5px;">
                                    <div style="display : table; width : 100%; table-layout: fixed;">
                                        <div style="display : table-row">
                                            <div style="vertical-align: middle;display: table-cell; ">
                                                <div style="display: table; width : 100%; table-layout: fixed;">
                                                    <div style="display: table-row">
                                                        <div style="display: table-cell; width : 16px; text-align : center;vertical-align: middle;"><span class="flag flag-ca" data-bindattr-6106="6106" style="margin : 0; display: block;"></span></div>
                                                        <div style="display: table-cell; vertical-align: middle;"><span class="menu-item-parent" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-left : 5px;">104.255.12.73</span></div>
                                                    </div>
                                                    <div style="display: table-row">
                                                        <div class="status-display" style="vertical-align: middle;display: table-cell; text-align : center;"><i></i></div>
                                                        <div style="display: table-cell; padding-left : 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: middle">Uniqks</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="vertical-align: middle; display: table-cell; width: 67px; text-align: right;">
                                                <button class="hidden ignore-visitor text-right btn btn-default btn-xs" data-bindattr-6109="6109" data-placement="bottom" data-original-title="Ignore Chat"><i class="fa fa-eye-slash fa-lg"></i></button>
                                            </div>
                                        </div>
                                    </div><span class="unseen-count hidden" data-bindattr-6110="6110">0</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul id="myChatsList" class="hidden" data-bindattr-790="790">
                    <li class="property-list top-menu-invisible open" data-bindattr-6112="6112">
                        <a class="list-name-container" href="javascript:void(0);" data-id="5a55196ed7591465c7069586" data-bindattr-6113="6113" style="padding-right :5px;">
                            <p style="float: left; width: 100%; display: block; margin : 0;"><span class="property-name full-name">Uniqks</span><span class="property-name-short add-tooltip" data-original-title="Uniqks" data-bindattr-6115="6115" data-placement="right">U</span></p><span style="color : #bbc0cf; border : 1px solid #bbc0cf; border-radius : 3px; display: inline-block; width: 24px; text-align: center; font-weight : bold; float: right;margin-left : -100%;">1</span>
                            <div class="clearfix"></div>
                        </a>
                        <ul class="visitor-list">
                            <li id="ember6118" class="">
                                <a href="javascript:void(0);" class="visitor-name in-view" data-bindattr-6119="6119" data-chat-status="online" data-bindattr-6120="6120" style="padding: 5px;">
                                    <div style="display : table; width : 100%; table-layout: fixed;">
                                        <div style="display : table-row">
                                            <div style="vertical-align: middle;display: table-cell; ">
                                                <div style="display: table; width : 100%; table-layout: fixed;">
                                                    <div style="display: table-row">
                                                        <div style="display: table-cell; width : 16px; text-align : center;vertical-align: middle;"><span class="flag flag-ca" data-bindattr-6121="6121" style="margin : 0; display: block;"></span></div>
                                                        <div style="display: table-cell; vertical-align: middle;"><span class="menu-item-parent" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-left : 5px;">104.255.12.73</span></div>
                                                    </div>
                                                    <div style="display: table-row">
                                                        <div class="status-display" style="vertical-align: middle;display: table-cell; text-align : center;"><i></i></div>
                                                        <div style="display: table-cell; padding-left : 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; vertical-align: middle">Uniqks</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="vertical-align: middle; display: table-cell; width: 67px; text-align: right;">
                                                <button class="hidden ignore-visitor text-right btn btn-default btn-xs" data-bindattr-6124="6124" data-placement="bottom" data-original-title="Ignore Chat"><i class="fa fa-eye-slash fa-lg"></i></button>
                                            </div>
                                        </div>
                                    </div><span class="unseen-count hidden" data-bindattr-6125="6125">0</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="hoverView" class="ember-view" style="top: 51px; left: 240px; display: none;"><a href="javascript:void(0);" class="visitor-name"><span class="menu-item-parent">V1522296351118150</span></a>
                <ul class="visitor-details" style="display: block;">
                    <li class="property">
                        <p><i class="fa fa-bookmark-o"></i>Uniqks</p>
                    </li>
                    <li>
                        <p><a data-bindattr-801="801" target="_blank" class="linkable" data-bindattr-802="802" href="https://www.uniqks.com/contact.php" alt="https://www.uniqks.com/contact.php">Uniqks - Contact us for Digital Marketing Strategies</a></p>
                    </li>
                    <li>
                        <p><a href="https://www.google.ca/" data-bindattr-2947="2947" target="_blank" class="linkable"> &gt; https://www.google.ca/</a></p>
                    </li>
                    <li>
                        <p>Toronto,&nbsp;Canada&nbsp;(104.255.12.73)</p>
                    </li>
                    <li>
                        <p><span class="pull-left"><span class="sprite-background safari-browser" data-bindattr-805="805"></span>&nbsp;<span class="sprite-background mac-os" data-bindattr-806="806"></span></span><span class="clearfix"></span></p>
                    </li>
                    <li>
                        <p class="device-details"><span class="pull-left ignore-visitor"><i class="fa fa-eye-slash"></i>&nbsp;Ignore&nbsp;</span><span class="pull-left ban-visitor"><i class="fa fa-ban"></i>&nbsp;Ban&nbsp;</span><span class="clearfix"></span></p>
                    </li>
                    <li>
                        <p class="stats-details"><span class="label label-default">0 visits</span><span class="label label-default">0 chats</span><span class="label label-default">00:34:37</span><span class="clearfix"></span></p>
                    </li>
                </ul>
                <div class="ban-form" style="display: none;">
                    <form class="smart-form" novalidate="novalidate">
                        <fieldset>
                            <section>
                                <label class="label">Why do you want to ban this visitor?</label>
                                <label class="textarea">
                                    <textarea name="banReason" class="required banReason" rows="2" placeholder="Ban Reason" maxlength="500"></textarea>
                                </label>
                            </section>
                            <section>
                                <label class="checkbox">
                                    <input type="checkbox" name="banIp" class="banIp"><i></i>Ban IP</label>
                            </section>
                        </fieldset>
                        <footer>
                            <button type="submit" class="btn btn-primary ban-visitor">Ban</button>
                            <button type="button" class="btn btn-default close-ban-form">Close</button>
                        </footer>
                    </form>
                </div>
            </div>
            <div id="channelList" class="list-section nonVisitorsList">
                <div class="sidebar-title">
                    <div class="active-chats-long">
                        <div class="sidebar-search-container">
                            <div style="margin-right: 40px;position: relative;"><i class="icon-append fa fa-search"></i>
                                <a href="javascript:void(0);" class="hidden clear-group-search clear-search"> <i class="fa fa-close"></i></a>
                                <input type="text" class="search-input" id="search-group" placeholder="Groups (0)" data-bindattr-791="791">
                            </div>
                        </div><a id="toggle-inline-group-chat" href="javascript:void(0);" class="dropdown-toggle add-tooltip toggle-agent-chat-view" data-bindattr-792="792" data-toggle="dropdown" data-original-title="Open group chats inline" data-bindattr-793="793" data-placement="bottom" aria-haspopup="true" aria-expanded="false"><span class="fa fa-window-restore" style="font-size: 13px;"></span></a><a id="new-group" href="javascript:void(0);" class="add-tooltip new-group" data-original-title="New Group" data-placement="bottom"><span class="fa-stack"><i class="fa fa-circle-o fa-stack-2x"></i><i class="fa fa-plus fa-stack-1x"></i></span></a>
                        <div class="clearfix"></div>
                    </div>
                    <div class="active-chats-short"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" style="color : inherit;"><i class="fa fa-lg fa-fw fa-group"></i></a>
                        <ul class="dropdown-menu" style="position: fixed; width : 300px; left : 80px;">
                            <li><a href="javascript:void(0);" class="new-group"><i class="fa fa-plus"></i> Create new group</a></li>
                            <li><a href="javascript:void(0);" class="open-group-list"><i class="fa fa-group"></i>  Browse all groups</a></li>
                            <li class="divider"></li>
                            <li class="smart-form" style="padding: 10px 11px;">
                                <label class="checkbox">
                                    <input type="checkbox" id="group-chat-view" name="checkbox-toggle" data-bindattr-794="794"><i></i>Show group chats inline</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul id="channels" class="chat-users">
                    <li>
                        <div class="display-users" style="overflow: auto;"></div>
                    </li>
                </ul>
            </div>
            <div id="agentList" class="list-section nonVisitorsList">
                <div class="sidebar-title">
                    <div class="active-chats-long">
                        <div class="sidebar-search-container">
                            <div style="margin-right: 22px;position: relative;"><i class="icon-append fa fa-search"></i>
                                <a href="javascript:void(0);" class="hidden clear-dm-search clear-search"> <i class="fa fa-close"></i></a>
                                <input type="text" id="search-dm" class="search-input" placeholder="Direct Messages (4)" data-bindattr-811="811">
                            </div>
                        </div><a id="toggle-inline-dm-chat" href="javascript:void(0);" class="dropdown-toggle add-tooltip toggle-agent-chat-view" data-bindattr-812="812" data-toggle="dropdown" data-original-title="Open direct messages inline" data-bindattr-813="813" data-placement="bottom" aria-haspopup="true" aria-expanded="false"><span class="fa fa-window-restore" style="font-size: 13px;"></span></a>
                        <div class="clearfix"></div>
                    </div>
                    <div class="active-chats-short"><a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" style="color : inherit;"><i class="fa fa-lg fa-fw fa-comment-o"></i></a>
                        <ul class="dropdown-menu" style="position: fixed; width : 300px; left : 80px;">
                            <li><a href="javascript:void(0);" class="open-dm-list"><i class="fa fa-comment-o"></i> Browse all direct messages</a></li>
                            <li class="divider"></li>
                            <li class="smart-form" style="padding: 10px 11px;">
                                <label class="checkbox">
                                    <input type="checkbox" id="dm-chat-view" name="checkbox-toggle" data-bindattr-814="814"><i></i>Show direct messages inline</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul id="agents" class="chat-users">
                    <li>
                        <div class="display-users"></div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div id="unseen-bottom" class="hidden"><span class="text">Unseen</span>&nbsp;<i class="fa fa-arrow-down"></i></div><span class="minifyme" data-action="minifyMenu" style="position: absolute; bottom : 10px;"><i class="fa fa-arrow-circle-left hit"></i></span></aside>
