$(document).ready(function() {
	const $gameContainer = $('#game-container');
	const $hintMessage = $('<p id="hint-message"></p>');
	const $feedbackMessage = $('<p id="feedback-message"></p>');
	$feedbackMessage.css({
		'margin-top': '15px',
		'font-weight': 'bold'
	});

	const puzzles = [
		{
			id: 'puzzle1_moon_riddle',
			type: 'two_stage_riddle',
			question: "ある人からすると近くにあり、ある人からすると遠くにある。これはどこでしょう？",
			fakeAnswer: "ファミリーマート", // フェイクの正解
			trueAnswer: "シエラレオネ", // 真の正解
			fakeHint: "解き方は合っています。しかし、私の過去の中に、、、。",
			// ここでHTMLの改行タグを使って表示を調整
			hiddenMessage: "ガラスの中に見える未来、首飾り、指輪",
			setup: function() {
				$gameContainer.html(`
                    <h2>${this.question}</h2>
					<br>
                    <input type="text" id="answer-input" placeholder="答えを入力してください">
                    <button id="submit-button">回答する</button>
                    <div class="hidden-hint" style="display: none;">${this.hiddenMessage}</div>
                `);
				$gameContainer.append($hintMessage);
				$gameContainer.append($feedbackMessage);
				$feedbackMessage.text('');
				$feedbackMessage.css('color', 'red');
			},
			checkAnswer: function(input) {
				const normalizedInput = input.trim().toLowerCase();

				if (normalizedInput === this.fakeAnswer.toLowerCase() || normalizedInput === 'ファミマ') { // '月'と'つき'の両方をフェイクの正解とする
					$feedbackMessage.remove();
					$hintMessage.text(this.fakeHint);
					$hintMessage.css('color', '#e67e22'); // オレンジ系の警告色
					$('.hidden-hint').fadeIn(1000); // 隠しヒントをゆっくり表示
					return false;
				} else if (normalizedInput === this.trueAnswer.toLowerCase()) {
					$feedbackMessage.text("真の正解です！素晴らしい洞察力！");
					$feedbackMessage.css('color', 'green');
					return true;
				} else {
					$gameContainer.append($feedbackMessage);
					$feedbackMessage.text("残念、不正解です。もう一度考えてみましょう。");
					$feedbackMessage.css('color', 'red');
					return false;
				}
			}
		},
		// ここに次の謎を追加していきます
		/*    {
				id: 'puzzle2_example', // これは以前のサンプルのままです
				type: 'text_extract',
				question: "次の文章の各行の頭文字を繋げると、ある言葉になります。<br>" +
						  "一、<b>き</b>らめく星空<br>" +
						  "二、<b>り</b>んごの甘い香り<br>" +
						  "三、<b>ん</b>ごり<br>" +
						  "四、<b>ご</b>飯が美味しい",
				answer: "きりんご",
				hint: "各行の一番最初の文字に注目。",
				setup: function() {
					$gameContainer.html(`
						<h2>${this.question}</h2>
						<br>
						<input type="text" id="answer-input" placeholder="答えを入力してください">
						<button id="submit-button">回答する</button>
					`);
					$gameContainer.append($feedbackMessage);
					$feedbackMessage.text('');
					$feedbackMessage.css('color', 'red');
				},
				checkAnswer: function(input) {
					return input === this.answer;
				}
			} */
	];

	let currentPuzzleIndex = 0;

	function displayCurrentPuzzle() {
		if (currentPuzzleIndex < puzzles.length) {
			const puzzle = puzzles[currentPuzzleIndex];
			puzzle.setup();

			const $submitButton = $('#submit-button');
			const $answerInput = $('#answer-input');

			$submitButton.off('click').on('click', function() {
				const userAnswer = $answerInput.val().trim();
				const isCorrect = puzzle.checkAnswer(userAnswer);

				if (isCorrect) {
					currentPuzzleIndex++;
					setTimeout(() => {
						displayCurrentPuzzle();
					}, 1000);
				}
			});

			// Enterキーのイベントハンドリングを追加
			$answerInput.off('keypress').on('keypress', function(e) {
				// Enterキーが押されたか (キーコード13) を確認
				if (e.which === 13) {
					e.preventDefault(); // デフォルトのEnterキーの挙動（フォーム送信など）をキャンセル
					$submitButton.click(); // 回答ボタンのクリックイベントをプログラムで発生させる
				}
			});

			$answerInput.focus();
		} else {
			$gameContainer.html(`
                <h2>真の謎も含めてすべての謎を解き明かしました！</h2>
				<div id="date"></div>
				<div id="time"></div>
				<h3>おめでとう！！</h3>
                <p>製作者に65536と伝えてね</p>`);
		}
	}
	// <img src="https://via.placeholder.com/300x200?text=Congratulations!" alt="クリアおめでとう" style="max-width: 100%;">

	displayCurrentPuzzle();
});
