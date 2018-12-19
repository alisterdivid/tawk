(function ($) {
	var array = {
		initialize: 0,
		pollingTime: 0,
		pollingInterval: 1000,
		pollingTimer: 0,
		woowIsWorking: 0
	};
	$["voochat"] = {
		obj: {},
		editor_handler: 0,
		chatClient: 0,
		sendButton: "#voochat-send-message",
		messageEditor: "#voochat-editor",
		messageContainer: "#visitor-chat-view .chat-message-container .chat-wrapper .chat-content",
		messageWrapper: ".voochat-messages-wrapper",
		messageLastChild: "#voochat-messages-container .conversation-block:last",
		preLoadingTime: 2000,
		wildcardsShowTime: 5000,
		send: function (data) {
			var dt = new Date();
			var time = dt.getHours() + ":" + dt.getMinutes();
			var html = '<div class="conversation-block"><p class="agent-name" agent="5a60123e3098e70e78bf9fac">frank (Me)</p><div class="msg-time">'+time+'</div><div class="conversation-content">'+ data+'</div></div><div class="clear"></div>';
			$($["voochat"].messageContainer).append(html);
			$.ajax({
				url: "chat/chat.php",
				dataType: "json",
				type: "POST",
				data: {
					message: data,
					action: "sendMessage",
					chatClient: $["voochat"].chatClient
				},
				success: function (data) {
					if (data.code == "200"){
					}
				},
				error: function (error) {
				}
			});
		},
		received: function (data) {

		},
		initChatClients: function (data) {
			for(var i = 0; i < data.length; i++){
				var html = ''
			}
		}
	};
	$["voochat"]["defaults"] = {

	};

	$($["voochat"].messageEditor).keypress(function (e) {
		if (e.keyCode == 13 || e.which == 13) {
			var data = $(this).val();
			$(this).val("");
			console.log(data);
			$["voochat"].send(data);
			if(e.preventDefault) e.preventDefault();
			return false;
		}
	});

	startPolling();

	function pollingChat() {
		$.ajax({
			url: "chat/chat.php",
			dataType: "json",
			type: "POST",
			data: {pollingTime: array.pollingTime, action: "polling"},
			success: function (data) {
				if (data.code == "200"){
					array.pollingTime = data.data.pollingTime;

					if (data.data.chatClients.length > 0){
						$["voochat"].chatClient = data.data.chatClients[0].id;
					}

					var messages = data.data.messages;
					var html = "";
					for (var i=0; i < messages.length; i++){
						var dt = new Date();
						var time = dt.getHours() + ":" + dt.getMinutes();
						html += '<div class="conversation-block"><p class="visitor-name" agent="'+messages[i].session_id+'">'+messages[i].session_id+'</p><div class="msg-time">'+time+'</div><div class="conversation-content">'+ messages[i].chat_message+'</div></div><div class="clear"></div>';
					}
					if(html){
						$($["voochat"].messageContainer).append(html);
					}
				}
			},
			error: function (error) {
			}
		});
	}

	function startPolling() {
		if (!array.pollingTimer){
			array.pollingTimer = setInterval(pollingChat, array.pollingInterval);
		}
	}

	function endPolling() {
		clearInterval(array.pollingTimer);
	}

})(jQuery)