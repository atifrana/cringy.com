// MAXIMUM CRINGE JAVASCRIPT
const ultraCringeEmojis = ['😬', '🤪', '🤮', '💀', '🤯', '🙈', '😱', '🤢', '😵', '🥴', '😖', '😩', '🤡', '💩', '🤠', '👻'];
let emojiCount = 0;
let chaosMode = false;

// Create CHAOS floating emojis
function createChaosEmoji()
{
	const emoji = document.createElement('div');
	emoji.className = 'floating-emoji';
	emoji.textContent = ultraCringeEmojis[Math.floor(Math.random() * ultraCringeEmojis.length)];
	emoji.style.left = Math.random() * 100 + 'vw';
	emoji.style.animationDuration = (Math.random() * 15 + 5) + 's';
	emoji.style.animationDelay = Math.random() * 3 + 's';

	document.body.appendChild(emoji);
	emojiCount++;

	// Remove emoji after animation
	setTimeout(() =>
	{
		if (emoji.parentNode)
		{
			emoji.parentNode.removeChild(emoji);
			emojiCount--;
		}
	}, 25000);
}

// Spam emojis everywhere
setInterval(createChaosEmoji, 1000);

// Create initial chaos
for (let i = 0; i < 10; i++)
{
	setTimeout(createChaosEmoji, i * 500);
}

// Add INSANE click effects
document.querySelectorAll('.domain-card').forEach(card =>
{
	card.addEventListener('click', function ()
	{
		// Screen shake
		document.body.classList.add('screen-shake');
		setTimeout(() =>
		{
			document.body.classList.remove('screen-shake');
		}, 500);

		// Spawn emoji explosion
		for (let i = 0; i < 5; i++)
		{
			setTimeout(createChaosEmoji, i * 100);
		}

		// Play random sound effect (if browser allows)
		const audio = new Audio('data:audio/wav;base64,UklGRhABAAAFV0F2RSBmZm10IBAAAAABAAEAQB8BAIAAAQBGAQQM');
		audio.play().catch(() =>
		{}); // Fail silently if no audio
	});
});

// CTA Button ULTIMATE CRINGE
const ctaButton = document.getElementById('cta-button');
let clickCount = 0;

ctaButton.addEventListener('click', function (e)
{
	clickCount++;

	// Screen earthquake
	document.body.classList.add('screen-shake');
	setTimeout(() =>
	{
		document.body.classList.remove('screen-shake');
	}, 1000);

	// Emoji explosion
	for (let i = 0; i < 20; i++)
	{
		setTimeout(createChaosEmoji, i * 50);
	}

	// Change page title to something cringe
	const cringeTitles = [
		'💀 OMG YOU CLICKED IT 💀',
		'🤮 MAXIMUM CRINGE ACHIEVED 🤮',
		'😱 THE CRINGE IS REAL 😱',
		'🚨 CRINGE ALERT ACTIVATED 🚨'
	];
	document.title = cringeTitles[Math.floor(Math.random() * cringeTitles.length)];

	// Chaos mode after 3 clicks
	if (clickCount >= 3 && !chaosMode)
	{
		chaosMode = true;
		document.body.classList.add('chaos-mode');

		// Change button text
		ctaButton.textContent = '🔥 ULTIMATE CRINGE ACHIEVED! 🔥';

		// Spawn continuous emojis
		const chaosInterval = setInterval(createChaosEmoji, 200);

		// Stop chaos after 10 seconds
		setTimeout(() =>
		{
			clearInterval(chaosInterval);
			document.body.classList.remove('chaos-mode');
			ctaButton.textContent = '📧 GIVE ME THE CRINGE! 📧';
			chaosMode = false;
			clickCount = 0;
		}, 10000);
	}
});

// Random page shakes
setInterval(() =>
{
	if (Math.random() < 0.1)
	{ // 10% chance every 5 seconds
		document.body.classList.add('screen-shake');
		setTimeout(() =>
		{
			document.body.classList.remove('screen-shake');
		}, 300);
	}
}, 5000);

// Cursor trail effect
let mouseTrail = [];
document.addEventListener('mousemove', function (e)
{
	mouseTrail.push(
	{
		x: e.clientX,
		y: e.clientY,
		time: Date.now()
	});

	// Remove old trail points
	mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);

	// Occasionally spawn emoji at cursor
	if (Math.random() < 0.02)
	{
		const emoji = document.createElement('div');
		emoji.style.position = 'fixed';
		emoji.style.left = e.clientX + 'px';
		emoji.style.top = e.clientY + 'px';
		emoji.style.fontSize = '2rem';
		emoji.style.pointerEvents = 'none';
		emoji.style.zIndex = '9999';
		emoji.textContent = ultraCringeEmojis[Math.floor(Math.random() * ultraCringeEmojis.length)];
		emoji.style.animation = 'fadeOut 2s ease-out forwards';

		document.body.appendChild(emoji);

		setTimeout(() =>
		{
			if (emoji.parentNode)
			{
				emoji.parentNode.removeChild(emoji);
			}
		}, 2000);
	}
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
            @keyframes fadeOut {
                from { opacity: 1; transform: scale(1); }
                to { opacity: 0; transform: scale(0.5) translateY(-50px); }
            }
        `;
document.head.appendChild(style);

// Console message for extra cringe
console.log(`
            🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮
            
            OMG YOU OPENED THE CONSOLE!
            THAT'S SO CRINGE!
            
            But also... you might be a developer?
            These domains would be PERFECT for your
            next cringe-tastic project!
            
            🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮🤮
        `);