// ============================================================
// CONTENT DATA MODULE
// ============================================================
// This file contains ALL text content for "The Joy Set Before Us".
// To edit any text on the site, modify this file only.
//
// STRUCTURE:
//   SITE_META  — title, subtitle, intro text
//   DAYS       — array of 7 day objects (Mon–Sun), each with:
//       .label        — display name ("Monday", etc.)
//       .fundamental  — the "Life's Fundamental" topic
//       .response     — the "Responding Well" topic
//
//   Each topic has:
//       .title       — topic heading
//       .question    — daily reflection question
//       .description — paragraph description
//       .passages[]  — array of passage objects
//
//   Each passage has:
//       .title     — passage name
//       .ref       — scripture reference
//       .summary   — one-line summary
//       .rq        — reflection question
//       .verses    — array of { num, text } objects
//
// TO ADD A NEW PASSAGE: just push another object into the passages array.
// TO ADD A NEW DAY: add another object to the DAYS array.
// ============================================================

const SITE_META = {
  title: 'The <em>Joy</em> Set Before Us',
  subtitle: 'Our Responsibility to Increasingly Understand Life &amp; Respond Well',
  introText: 'Each day explores a fundamental question of life paired with a practice of responding well. Choose a topic to receive today\'s passage.',
};

const DAYS = [
  // ==================== MONDAY ====================
  {
    label: 'Monday',
    key: 'mon',
    fundamental: {
      title: 'What Is Reality?',
      question: 'Am I growing in God\'s reality?',
      description: 'Reality is the Author that has defined and created the nature, design, context, morality and purpose of everything that exists. We know there is an Author because nothing comes from nothing and nothing in the universe is the source of itself. Our knowledge of reality is only found in and through God, as He engages us through creation, His Word, His law, His rule, the Trinity, the Father, the Son, the Spirit, the Saints, and history.',
      passages: [
        {
          title: 'Creation',
          ref: 'Genesis 1–2',
          summary: 'Reality is designed by God, not negotiated by humans or an endless production.',
          rq: 'Do I live like reality depends on man?',
          verses: [
            { num: 1, text: 'In the beginning God created the heavens and the earth.' },
            { num: 2, text: 'The earth was formless and void, and darkness was over the surface of the deep, and the Spirit of God was moving over the surface of the waters.' },
            { num: 3, text: 'Then God said, "Let there be light"; and there was light.' },
            { num: 26, text: 'Then God said, "Let Us make man in Our image, according to Our likeness; and let them rule over the fish of the sea and over the birds of the sky and over all the earth."' },
            { num: 27, text: 'God created man in His own image, in the image of God He created him; male and female He created them.' },
            { num: 31, text: 'God saw all that He had made, and behold, it was very good.' },
          ],
        },
        {
          title: 'Tower of Babel',
          ref: 'Genesis 11',
          summary: 'Man attempts to define reality and value.',
          rq: 'Do I live believing in God\'s reality or man\'s?',
          verses: [
            { num: 1, text: 'Now the whole earth used the same language and the same words.' },
            { num: 4, text: 'They said, "Come, let us build for ourselves a city, and a tower whose top will reach into heaven, and let us make for ourselves a name."' },
            { num: 5, text: 'The Lord came down to see the city and the tower which the sons of men had built.' },
            { num: 7, text: '"Come, let Us go down and there confuse their language, so that they will not understand one another\'s speech."' },
            { num: 8, text: 'So the Lord scattered them abroad from there over the face of the whole earth; and they stopped building the city.' },
          ],
        },
        {
          title: 'Hagar in the Wilderness',
          ref: 'Genesis 16 & 21',
          summary: 'Reality is found in God even when abandoned by people.',
          rq: 'Do I live knowing that God sees me?',
          verses: [
            { num: 7, text: 'Now the angel of the Lord found her by a spring of water in the wilderness.' },
            { num: 8, text: 'He said, "Hagar, Sarai\'s maid, where have you come from and where are you going?" And she said, "I am fleeing from the presence of my mistress Sarai."' },
            { num: 13, text: 'Then she called the name of the Lord who spoke to her, "You are a God who sees"; for she said, "Have I even remained alive here after seeing Him?"' },
          ],
        },
        {
          title: 'Jacob\'s Dream',
          ref: 'Genesis 28',
          summary: 'The spiritual world is reality and active.',
          rq: 'Do I live from a spiritual reality?',
          verses: [
            { num: 12, text: 'He had a dream, and behold, a ladder was set on the earth with its top reaching to heaven; and behold, the angels of God were ascending and descending on it.' },
            { num: 13, text: 'And behold, the Lord stood above it and said, "I am the Lord, the God of your father Abraham and the God of Isaac; the land on which you lie, I will give it to you and to your descendants."' },
            { num: 16, text: 'Then Jacob awoke from his sleep and said, "Surely the Lord is in this place, and I did not know it."' },
            { num: 17, text: 'He was afraid and said, "How awesome is this place! This is none other than the house of God, and this is the gate of heaven."' },
          ],
        },
        {
          title: 'The Burning Bush',
          ref: 'Exodus 3',
          summary: 'Understanding reality begins with God\'s revelation, not human awareness.',
          rq: 'Do I posture my life so that I can listen to God?',
          verses: [
            { num: 2, text: 'The angel of the Lord appeared to him in a blazing fire from the midst of a bush; and he looked, and behold, the bush was burning with fire, yet the bush was not consumed.' },
            { num: 4, text: 'When the Lord saw that he turned aside to look, God called to him from the midst of the bush and said, "Moses, Moses!" And he said, "Here I am."' },
            { num: 5, text: 'Then He said, "Do not come near here; remove your sandals from your feet, for the place on which you are standing is holy ground."' },
            { num: 6, text: 'He said also, "I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob." Then Moses hid his face, for he was afraid to look at God.' },
          ],
        },
        {
          title: '"I AM"',
          ref: 'Exodus 3:13–15',
          summary: 'Reality is grounded in the eternal God, not shifting circumstance.',
          rq: 'Do I anchor my living, my beliefs and values, in God?',
          verses: [
            { num: 13, text: 'Then Moses said to God, "Behold, I am going to the sons of Israel, and I will say to them, \'The God of your fathers has sent me to you.\' Now they may say to me, \'What is His name?\' What shall I say to them?"' },
            { num: 14, text: 'God said to Moses, "I AM WHO I AM"; and He said, "Thus you shall say to the sons of Israel, \'I AM has sent me to you.\'"' },
          ],
        },
        {
          title: 'Crossing the Red Sea',
          ref: 'Exodus 14',
          summary: 'What appears impossible often becomes the stage for God\'s reality.',
          rq: 'Do I trust God when the path seems closed?',
          verses: [
            { num: 13, text: 'But Moses said to the people, "Do not fear! Stand by and see the salvation of the Lord which He will accomplish for you today."' },
            { num: 14, text: '"The Lord will fight for you while you keep silent."' },
            { num: 21, text: 'Then Moses stretched out his hand over the sea; and the Lord swept the sea back by a strong east wind all night and turned the sea into dry land, so the waters were divided.' },
            { num: 22, text: 'The sons of Israel went through the midst of the sea on the dry land, and the waters were like a wall to them on their right hand and on their left.' },
          ],
        },
        {
          title: 'The Word Became Flesh',
          ref: 'John 1:1–14',
          summary: 'Reality is not abstract, it is personal and recognized by those willing to see.',
          rq: 'Am I open to interpret reality through Jesus?',
          verses: [
            { num: 1, text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
            { num: 3, text: 'All things came into being through Him, and apart from Him nothing came into being that has come into being.' },
            { num: 4, text: 'In Him was life, and the life was the Light of men.' },
            { num: 5, text: 'The Light shines in the darkness, and the darkness did not comprehend it.' },
            { num: 14, text: 'And the Word became flesh, and dwelt among us, and we saw His glory, glory as of the only begotten from the Father, full of grace and truth.' },
          ],
        },
        {
          title: 'The Resurrection',
          ref: 'Matthew 28',
          summary: 'Death is not ultimate reality — God is.',
          rq: 'Do I live with an eternal perspective?',
          verses: [
            { num: 5, text: 'The angel said to the women, "Do not be afraid; for I know that you are looking for Jesus who has been crucified.' },
            { num: 6, text: 'He is not here, for He has risen, just as He said. Come, see the place where He was lying.' },
            { num: 7, text: 'Go quickly and tell His disciples that He has risen from the dead."' },
          ],
        },
        {
          title: 'The Throne Room of Heaven',
          ref: 'Revelation 4–5',
          summary: 'Increasingly worshiping God increasingly understands reality.',
          rq: 'Does my life reflect worship of God?',
          verses: [
            { num: 8, text: 'And the four living creatures, each one of them having six wings, are full of eyes around and within; and day and night they do not cease to say, "Holy, holy, holy is the Lord God, the Almighty, who was and who is and who is to come."' },
            { num: 11, text: '"Worthy are You, our Lord and our God, to receive glory and honor and power; for You created all things, and because of Your will they existed, and were created."' },
          ],
        },
      ],
    },
    response: {
      title: 'Authority We Choose',
      question: 'Do I live by God\'s authority today?',
      description: 'We are all responding to the responsibility of life we have been given as we choose an authority, discipleship, identity, education, and source of life to abide in. Responding well is to increasingly choose God and His character of love in each of these endeavors which governs our life.',
      passages: [
        {
          title: 'The Fall',
          ref: 'Genesis 3',
          summary: 'Rejecting God, for the illusion of man\'s autonomy.',
          rq: 'Who does my life identify as my authority?',
          verses: [
            { num: 1, text: 'Now the serpent was more crafty than any beast of the field which the Lord God had made. And he said to the woman, "Indeed, has God said, \'You shall not eat from any tree of the garden\'?"' },
            { num: 4, text: 'The serpent said to the woman, "You surely will not die!' },
            { num: 5, text: 'For God knows that in the day you eat from it your eyes will be opened, and you will be like God, knowing good and evil."' },
            { num: 6, text: 'When the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was desirable to make one wise, she took from its fruit and ate; and she gave also to her husband with her, and he ate.' },
            { num: 7, text: 'Then the eyes of both of them were opened, and they knew that they were naked.' },
          ],
        },
        {
          title: 'Noah',
          ref: 'Genesis 6',
          summary: 'Belief in God looks insane without cultural support.',
          rq: 'Do I believe God even when I don\'t understand or desire it?',
          verses: [
            { num: 5, text: 'Then the Lord saw that the wickedness of man was great on the earth, and that every intent of the thoughts of his heart was only evil continually.' },
            { num: 8, text: 'But Noah found favor in the eyes of the Lord.' },
            { num: 9, text: 'Noah was a righteous man, blameless in his time; Noah walked with God.' },
            { num: 22, text: 'Thus Noah did; according to all that God had commanded him, so he did.' },
          ],
        },
        {
          title: 'The Ten Commandments',
          ref: 'Exodus 20',
          summary: 'Authority is not restriction but the architecture of freedom.',
          rq: 'Do I view God\'s commands as life-giving?',
          verses: [
            { num: 1, text: 'Then God spoke all these words, saying,' },
            { num: 2, text: '"I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.' },
            { num: 3, text: 'You shall have no other gods before Me.' },
            { num: 12, text: 'Honor your father and your mother, that your days may be prolonged in the land which the Lord your God gives you."' },
          ],
        },
        {
          title: 'The Golden Calf',
          ref: 'Exodus 32',
          summary: 'When we are distant from God, we manufacture substitutes.',
          rq: 'Do I pursue God — or settle for substitutes?',
          verses: [
            { num: 1, text: 'Now when the people saw that Moses delayed to come down from the mountain, the people assembled about Aaron and said to him, "Come, make us a god who will go before us."' },
            { num: 4, text: 'He fashioned it with a graving tool and made it into a molten calf; and they said, "This is your god, O Israel, who brought you up from the land of Egypt."' },
            { num: 7, text: 'Then the Lord spoke to Moses, "Go down at once, for your people have corrupted themselves.' },
            { num: 8, text: 'They have quickly turned aside from the way which I commanded them."' },
          ],
        },
        {
          title: 'The Temptation of Jesus',
          ref: 'Matthew 4:1–11',
          summary: 'God and His Word is our authority far beyond man\'s power.',
          rq: 'Is God and His character increasingly governing my life?',
          verses: [
            { num: 1, text: 'Then Jesus was led up by the Spirit into the wilderness to be tempted by the devil.' },
            { num: 3, text: 'And the tempter came and said to Him, "If You are the Son of God, command that these stones become bread."' },
            { num: 4, text: 'But He answered and said, "It is written, \'Man shall not live on bread alone, but on every word that proceeds out of the mouth of God.\'"' },
            { num: 10, text: 'Then Jesus said to him, "Go, Satan! For it is written, \'You shall worship the Lord your God, and serve Him only.\'"' },
            { num: 11, text: 'Then the devil left Him; and behold, angels came and began to minister to Him.' },
          ],
        },
        {
          title: 'The Good Shepherd',
          ref: 'John 10',
          summary: 'Authority leads with sacrificial care.',
          rq: 'Do I trust the Shepherd\'s voice over competing ones?',
          verses: [
            { num: 11, text: '"I am the good shepherd; the good shepherd lays down His life for the sheep.' },
            { num: 14, text: 'I am the good shepherd, and I know My own and My own know Me.' },
            { num: 27, text: 'My sheep hear My voice, and I know them, and they follow Me;' },
            { num: 28, text: 'and I give eternal life to them, and they will never perish; and no one will snatch them out of My hand."' },
          ],
        },
        {
          title: 'Jesus Before Pilate',
          ref: 'Matthew 27:11–26',
          summary: 'True authority remains unthreatened by man\'s power.',
          rq: 'Do I stand secure in God independent of circumstance?',
          verses: [
            { num: 11, text: 'Now Jesus stood before the governor, and the governor questioned Him, saying, "Are You the King of the Jews?" And Jesus said to him, "It is as you say."' },
            { num: 12, text: 'And while He was being accused by the chief priests and elders, He did not answer.' },
            { num: 14, text: 'And He did not answer him with regard to even a single charge, so the governor was quite amazed.' },
          ],
        },
      ],
    },
  },

  // ==================== TUESDAY ====================
  {
    label: 'Tuesday',
    key: 'tue',
    fundamental: {
      title: 'Who Are We?',
      question: 'Do I live as a personal, spiritual, eternal being today?',
      description: 'We are designed in God\'s image and likeness—spiritual, personal, and eternal persons with a heart, mind, body and soul. Deeply loved and dependent on God\'s authority and grace, we are given great responsibility and dignity to choose our destiny in a world designed with morality and purpose found in God\'s character of love.',
      passages: [
        {
          title: 'Creation of Humanity',
          ref: 'Genesis 1:26–27',
          summary: 'We are image-bearers designed for relationship with God.',
          rq: 'Do I live today as if I am more than physical?',
          verses: [
            { num: 26, text: 'Then God said, "Let Us make man in Our image, according to Our likeness; and let them rule over the fish of the sea and over the birds of the sky and over all the earth."' },
            { num: 27, text: 'God created man in His own image, in the image of God He created him; male and female He created them.' },
            { num: 28, text: 'God blessed them; and God said to them, "Be fruitful and multiply, and fill the earth, and subdue it."' },
          ],
        },
        {
          title: 'Baptism of Jesus',
          ref: 'Matthew 3:13–17',
          summary: 'Identity is received from our creator.',
          rq: 'Do I live from being God\'s beloved — not for it?',
          verses: [
            { num: 16, text: 'After being baptized, Jesus came up immediately from the water; and behold, the heavens were opened, and he saw the Spirit of God descending as a dove and lighting on Him,' },
            { num: 17, text: 'and behold, a voice out of the heavens said, "This is My beloved Son, in whom I am well-pleased."' },
          ],
        },
        {
          title: 'The Prodigal Son',
          ref: 'Luke 15:11–32',
          summary: 'Identity is restored through grace, not earned through effort.',
          rq: 'Do I return quickly when I drift?',
          verses: [
            { num: 20, text: 'So he got up and came to his father. But while he was still a long way off, his father saw him and felt compassion for him, and ran and embraced him and kissed him.' },
            { num: 21, text: 'And the son said to him, "Father, I have sinned against heaven and in your sight; I am no longer worthy to be called your son."' },
            { num: 22, text: 'But the father said to his slaves, "Quickly bring out the best robe and put it on him;' },
            { num: 24, text: 'for this son of mine was dead and has come to life again; he was lost and has been found." And they began to celebrate.' },
          ],
        },
        {
          title: 'Branches of the Vine',
          ref: 'John 15',
          summary: 'Identity is sustained through abiding.',
          rq: 'Do I remain connected to Christ today?',
          verses: [
            { num: 4, text: '"Abide in Me, and I in you. As the branch cannot bear fruit of itself unless it abides in the vine, so neither can you unless you abide in Me.' },
            { num: 5, text: 'I am the vine, you are the branches; he who abides in Me and I in him, he bears much fruit, for apart from Me you can do nothing."' },
          ],
        },
        {
          title: 'Life in the Spirit',
          ref: 'Romans 8',
          summary: 'Children of God are led by the Spirit of God.',
          rq: 'Is my life a reflection of life led by the Spirit?',
          verses: [
            { num: 14, text: 'For all who are being led by the Spirit of God, these are sons of God.' },
            { num: 15, text: 'For you have not received a spirit of slavery leading to fear again, but you have received a spirit of adoption as sons by which we cry out, "Abba! Father!"' },
            { num: 16, text: 'The Spirit Himself testifies with our spirit that we are children of God.' },
          ],
        },
        {
          title: 'Children of God',
          ref: 'John 1:12–13',
          summary: 'Identity is received through belief.',
          rq: 'Do I live as one born of God?',
          verses: [
            { num: 12, text: 'But as many as received Him, to them He gave the right to become children of God, even to those who believe in His name,' },
            { num: 13, text: 'who were born, not of blood nor of the will of the flesh nor of the will of man, but of God.' },
          ],
        },
      ],
    },
    response: {
      title: 'Discipleship We Practice',
      question: 'Do I live as a disciple of God today?',
      description: 'Discipleship is the lifelong practice of following Jesus—learning His ways, embodying His character, and offering our whole lives in responsive obedience. It begins with proximity to Christ and matures through surrender, service, and faithfulness.',
      passages: [
        {
          title: 'Call of Abram',
          ref: 'Genesis 12',
          summary: 'Obedience with no roadmap, no guarantees, just trust.',
          rq: 'Do I follow God beyond my understanding?',
          verses: [
            { num: 1, text: 'Now the Lord said to Abram, "Go forth from your country, and from your relatives and from your father\'s house, to the land which I will show you;' },
            { num: 2, text: 'and I will make you a great nation, and I will bless you, and make your name great; and so you shall be a blessing."' },
            { num: 4, text: 'So Abram went forth as the Lord had spoken to him.' },
          ],
        },
        {
          title: 'Calling the Disciples',
          ref: 'Matthew 4:18–22',
          summary: 'Discipleship begins with leaving the old.',
          rq: 'What do I leave behind to follow?',
          verses: [
            { num: 18, text: 'Now as Jesus was walking by the Sea of Galilee, He saw two brothers, Simon who was called Peter, and Andrew his brother, casting a net into the sea; for they were fishermen.' },
            { num: 19, text: 'And He said to them, "Follow Me, and I will make you fishers of men."' },
            { num: 20, text: 'Immediately they left their nets and followed Him.' },
          ],
        },
        {
          title: 'Counting the Cost',
          ref: 'Luke 14:25–33',
          summary: 'Discipleship requires wholehearted surrender.',
          rq: 'Do I withhold anything from God?',
          verses: [
            { num: 27, text: '"Whoever does not carry his own cross and come after Me cannot be My disciple.' },
            { num: 33, text: 'So then, none of you can be My disciple who does not give up all his own possessions."' },
          ],
        },
        {
          title: 'Washing the Disciples\' Feet',
          ref: 'John 13',
          summary: 'Discipleship expresses itself through humble service.',
          rq: 'Do I lower myself for the good of another?',
          verses: [
            { num: 4, text: 'Jesus got up from supper, and laid aside His garments; and taking a towel, He girded Himself.' },
            { num: 5, text: 'Then He poured water into the basin, and began to wash the disciples\' feet.' },
            { num: 14, text: '"If I then, the Lord and the Teacher, washed your feet, you also ought to wash one another\'s feet.' },
            { num: 15, text: 'For I gave you an example that you also should do as I did to you."' },
          ],
        },
        {
          title: 'Living Sacrifices',
          ref: 'Romans 12',
          summary: 'Discipleship offers the whole self to God.',
          rq: 'Was my life available to Him?',
          verses: [
            { num: 1, text: 'Therefore I urge you, brethren, by the mercies of God, to present your bodies a living and holy sacrifice, acceptable to God, which is your spiritual service of worship.' },
            { num: 2, text: 'And do not be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what the will of God is, that which is good and acceptable and perfect.' },
          ],
        },
        {
          title: 'Parable of the Sower',
          ref: 'Matthew 13',
          summary: 'The condition of the heart determines fruitfulness.',
          rq: 'Was my heart receptive today?',
          verses: [
            { num: 3, text: '"Behold, the sower went out to sow;' },
            { num: 8, text: 'And others fell on the good soil and yielded a crop, some a hundredfold, some sixty, and some thirty.' },
            { num: 23, text: 'And the one on whom seed was sown on the good soil, this is the man who hears the word and understands it; who indeed bears fruit."' },
          ],
        },
      ],
    },
  },

  // ==================== WEDNESDAY ====================
  {
    label: 'Wednesday',
    key: 'wed',
    fundamental: {
      title: 'What Is Our Life About?',
      question: 'Am I pursuing God\'s character in humility today?',
      description: 'We are personal beings responsible for choosing, maturing, believing, and desiring the kind of relationships we will increasingly pursue for eternity. The character we increasingly cultivate identifies what we understand and who we are becoming: either pride rooted in man\'s power or humility rooted in God\'s character of love—life in the Kingdom of God.',
      passages: [
        {
          title: 'Tower of Babel',
          ref: 'Genesis 11',
          summary: 'Man attempts autonomy.',
          rq: 'Do I pursue God\'s character or man\'s desires?',
          verses: [
            { num: 4, text: 'They said, "Come, let us build for ourselves a city, and a tower whose top will reach into heaven, and let us make for ourselves a name."' },
            { num: 8, text: 'So the Lord scattered them abroad from there over the face of the whole earth; and they stopped building the city.' },
          ],
        },
        {
          title: 'Love Your Enemies',
          ref: 'Matthew 5:43–48',
          summary: 'God\'s character loves beyond reciprocity.',
          rq: 'Do I love without requiring return?',
          verses: [
            { num: 44, text: '"But I say to you, love your enemies and pray for those who persecute you,' },
            { num: 45, text: 'so that you may be sons of your Father who is in heaven; for He causes His sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous.' },
            { num: 48, text: 'Therefore you are to be perfect, as your heavenly Father is perfect."' },
          ],
        },
        {
          title: 'The Greatest in the Kingdom',
          ref: 'Matthew 18:1–14',
          summary: 'Childlike dependence defines greatness.',
          rq: 'Do I embrace dependence?',
          verses: [
            { num: 1, text: 'At that time the disciples came to Jesus and said, "Who then is greatest in the kingdom of heaven?"' },
            { num: 2, text: 'And He called a child to Himself and set him before them,' },
            { num: 3, text: 'and said, "Truly I say to you, unless you are converted and become like children, you will not enter the kingdom of heaven.' },
            { num: 4, text: 'Whoever then humbles himself as this child, he is the greatest in the kingdom of heaven."' },
          ],
        },
        {
          title: 'Christ\'s Self-Emptying',
          ref: 'Philippians 2',
          summary: 'Greatness descends before rising.',
          rq: 'Does humility guide my strength?',
          verses: [
            { num: 5, text: 'Have this attitude in yourselves which was also in Christ Jesus,' },
            { num: 6, text: 'who, although He existed in the form of God, did not regard equality with God a thing to be grasped,' },
            { num: 7, text: 'but emptied Himself, taking the form of a bond-servant.' },
            { num: 8, text: 'Being found in appearance as a man, He humbled Himself by becoming obedient to the point of death, even death on a cross.' },
          ],
        },
        {
          title: 'Solomon\'s Prayer for Wisdom',
          ref: '1 Kings 3',
          summary: 'Humility asks before acting.',
          rq: 'Do I seek God\'s wisdom first?',
          verses: [
            { num: 5, text: 'In Gibeon the Lord appeared to Solomon in a dream at night; and God said, "Ask what you wish Me to give you."' },
            { num: 9, text: '"So give Your servant an understanding heart to judge Your people to discern between good and evil."' },
            { num: 10, text: 'It was pleasing in the sight of the Lord that Solomon had asked this thing.' },
          ],
        },
        {
          title: 'Mary\'s Humble Yes',
          ref: 'Luke 1:38',
          summary: 'Great lives begin with surrendered availability.',
          rq: 'Does humility guide my response to God?',
          verses: [
            { num: 28, text: 'And coming in, he said to her, "Greetings, favored one! The Lord is with you."' },
            { num: 30, text: 'The angel said to her, "Do not be afraid, Mary; for you have found favor with God."' },
            { num: 38, text: 'And Mary said, "Behold, the bondslave of the Lord; may it be done to me according to your word."' },
          ],
        },
      ],
    },
    response: {
      title: 'Image We Pursue',
      question: 'Do I live in the name of the Trinity today?',
      description: 'To bear God\'s image is to reflect His character in our relationships, work, and worship. It is communal and relational—we immerse ourselves for the good of the world, directing attention toward Christ rather than ourselves.',
      passages: [
        {
          title: 'Joseph Forgives His Brothers',
          ref: 'Genesis 45',
          summary: 'Immersed in loving for others.',
          rq: 'Do I advance good relationships?',
          verses: [
            { num: 4, text: 'Then Joseph said to his brothers, "I am your brother Joseph, whom you sold into Egypt.' },
            { num: 5, text: 'Now do not be grieved or angry with yourselves, because you sold me here, for God sent me before you to preserve life."' },
            { num: 15, text: 'He kissed all his brothers and wept on them.' },
          ],
        },
        {
          title: 'Salt and Light',
          ref: 'Matthew 5:13–20',
          summary: 'Image-bearing is communal — we immerse for the good of the world.',
          rq: 'Does my life contribute good to my world?',
          verses: [
            { num: 13, text: '"You are the salt of the earth.' },
            { num: 14, text: 'You are the light of the world. A city set on a hill cannot be hidden.' },
            { num: 16, text: 'Let your light shine before men in such a way that they may see your good works, and glorify your Father who is in heaven."' },
          ],
        },
        {
          title: '"Anyone Who Has Seen Me…"',
          ref: 'John 14:9',
          summary: 'Image-bearing reflects the character of God.',
          rq: 'Does my life make God more visible?',
          verses: [
            { num: 9, text: 'Jesus said to him, "Have I been so long with you, and yet you have not come to know Me, Philip? He who has seen Me has seen the Father; how can you say, \'Show us the Father\'?"' },
          ],
        },
        {
          title: 'God Is Love',
          ref: '1 John 4',
          summary: 'To love is to reflect God.',
          rq: 'Do others encounter God through my love?',
          verses: [
            { num: 7, text: 'Beloved, let us love one another, for love is from God; and everyone who loves is born of God and knows God.' },
            { num: 8, text: 'The one who does not love does not know God, for God is love.' },
            { num: 12, text: 'No one has seen God at any time; if we love one another, God abides in us, and His love is perfected in us.' },
          ],
        },
        {
          title: 'Rivers of Living Water',
          ref: 'John 7:37–39',
          summary: 'The Spirit flows through lives open to God.',
          rq: 'Was my life receptive to the Spirit?',
          verses: [
            { num: 37, text: '"If anyone is thirsty, let him come to Me and drink.' },
            { num: 38, text: 'He who believes in Me, as the Scripture said, \'From his innermost being will flow rivers of living water.\'"' },
            { num: 39, text: 'But this He spoke of the Spirit, whom those who believed in Him were to receive.' },
          ],
        },
      ],
    },
  },

  // ==================== THURSDAY ====================
  {
    label: 'Thursday',
    key: 'thu',
    fundamental: {
      title: 'How Are We To Live?',
      question: 'Do I live on the rock today?',
      description: 'The good life—one that is blessed independent of circumstances—is life aligned with and living in the kingdom of God. It is life that is salt and light to a darkened world, reflected in a character increasingly free from anger, lust, manipulation, revenge, and hate.',
      passages: [
        {
          title: 'Wise and Foolish Builders',
          ref: 'Matthew 7:24–29',
          summary: 'Stability comes from obedience, not admiration.',
          rq: 'Do I practice what Christ taught?',
          verses: [
            { num: 24, text: '"Therefore everyone who hears these words of Mine and acts on them, may be compared to a wise man who built his house on the rock.' },
            { num: 25, text: 'And the rain fell, and the floods came, and the winds blew and slammed against that house; and yet it did not fall, for it had been founded on the rock.' },
            { num: 26, text: 'Everyone who hears these words of Mine and does not act on them, will be like a foolish man who built his house on the sand.' },
            { num: 27, text: 'The rain fell, and the floods came, and the winds blew and slammed against that house; and it fell—and great was its fall."' },
          ],
        },
        {
          title: 'Calming the Storm',
          ref: 'Matthew 8:23–27',
          summary: 'Peace is found in the presence of Christ, not the absence of storms.',
          rq: 'Does fear or faith interpret my circumstances?',
          verses: [
            { num: 24, text: 'And behold, there arose a great storm on the sea, so that the boat was being covered with the waves; but Jesus Himself was asleep.' },
            { num: 25, text: 'And they came to Him and woke Him, saying, "Save us, Lord; we are perishing!"' },
            { num: 26, text: 'He said to them, "Why are you afraid, you men of little faith?" Then He got up and rebuked the winds and the sea, and it became perfectly calm.' },
          ],
        },
        {
          title: 'Remaining in the Vine',
          ref: 'John 15',
          summary: 'Stability is found in abiding, not striving.',
          rq: 'Do I remain connected to Christ?',
          verses: [
            { num: 4, text: '"Abide in Me, and I in you. As the branch cannot bear fruit of itself unless it abides in the vine, so neither can you unless you abide in Me.' },
            { num: 5, text: 'I am the vine, you are the branches; he who abides in Me and I in him, he bears much fruit, for apart from Me you can do nothing."' },
          ],
        },
        {
          title: 'Psalm 1 — The Rooted Life',
          ref: 'Psalm 1',
          summary: 'Stability grows through delight in God\'s instruction.',
          rq: 'Was my life deeply rooted?',
          verses: [
            { num: 1, text: 'How blessed is the man who does not walk in the counsel of the wicked, nor stand in the path of sinners, nor sit in the seat of scoffers!' },
            { num: 2, text: 'But his delight is in the law of the Lord, and in His law he meditates day and night.' },
            { num: 3, text: 'He will be like a tree firmly planted by streams of water, which yields its fruit in its season and its leaf does not wither.' },
          ],
        },
        {
          title: 'Steadfast Under Trial',
          ref: 'James 1',
          summary: 'Endurance strengthens the foundation.',
          rq: 'Does testing deepen me?',
          verses: [
            { num: 2, text: 'Consider it all joy, my brethren, when you encounter various trials,' },
            { num: 3, text: 'knowing that the testing of your faith produces endurance.' },
            { num: 4, text: 'And let endurance have its perfect result, so that you may be perfect and complete, lacking in nothing.' },
            { num: 12, text: 'Blessed is a man who perseveres under trial; for once he has been approved, he will receive the crown of life.' },
          ],
        },
        {
          title: 'Noah Builds the Ark',
          ref: 'Genesis 6',
          summary: 'Stability is built before storms arrive.',
          rq: 'Do I advance spiritual maturity?',
          verses: [
            { num: 9, text: 'Noah was a righteous man, blameless in his time; Noah walked with God.' },
            { num: 14, text: '"Make for yourself an ark of gopher wood."' },
            { num: 22, text: 'Thus Noah did; according to all that God had commanded him, so he did.' },
          ],
        },
      ],
    },
    response: {
      title: 'Education We Deepen',
      question: 'Am I deepening my beliefs in God\'s commands today?',
      description: 'Spiritual education is not accumulation of facts but the formation of a heart that increasingly believes and desires God. It happens through Scripture, the Spirit, community, and the rhythm of daily obedience.',
      passages: [
        {
          title: 'The Gospel',
          ref: 'Matthew 5:1–12',
          summary: 'Kingdom learning reshapes what we call blessed.',
          rq: 'Do I value what God calls good over what the world praises?',
          verses: [
            { num: 3, text: '"Blessed are the poor in spirit, for theirs is the kingdom of heaven.' },
            { num: 4, text: 'Blessed are those who mourn, for they shall be comforted.' },
            { num: 5, text: 'Blessed are the gentle, for they shall inherit the earth.' },
            { num: 6, text: 'Blessed are those who hunger and thirst for righteousness, for they shall be satisfied."' },
          ],
        },
        {
          title: 'The Road to Emmaus',
          ref: 'Luke 24:13–35',
          summary: 'Understanding ignites when Scripture is opened.',
          rq: 'Do I allow God\'s Word to interpret my life?',
          verses: [
            { num: 27, text: 'Then beginning with Moses and with all the prophets, He explained to them the things concerning Himself in all the Scriptures.' },
            { num: 32, text: 'They said to one another, "Were not our hearts burning within us while He was speaking to us on the road, while He was opening the Scriptures to us?"' },
          ],
        },
        {
          title: 'Transformed by Renewing the Mind',
          ref: 'Romans 12',
          summary: 'Understanding reshapes living.',
          rq: 'Does truth renew my thinking?',
          verses: [
            { num: 1, text: 'Therefore I urge you, brethren, by the mercies of God, to present your bodies a living and holy sacrifice, acceptable to God, which is your spiritual service of worship.' },
            { num: 2, text: 'And do not be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what the will of God is, that which is good and acceptable and perfect.' },
          ],
        },
        {
          title: 'Ask God for Wisdom',
          ref: 'James 1',
          summary: 'God gladly teaches the seeking heart.',
          rq: 'Do I seek God\'s wisdom?',
          verses: [
            { num: 5, text: 'But if any of you lacks wisdom, let him ask of God, who gives to all generously and without reproach, and it will be given to him.' },
          ],
        },
        {
          title: 'Sanctify Them in Truth',
          ref: 'John 17:17',
          summary: 'Truth shapes holy lives.',
          rq: 'Does truth refine my character?',
          verses: [
            { num: 17, text: '"Sanctify them in the truth; Your word is truth.' },
            { num: 18, text: 'As You sent Me into the world, I also have sent them into the world."' },
          ],
        },
      ],
    },
  },

  // ==================== FRIDAY ====================
  {
    label: 'Friday',
    key: 'fri',
    fundamental: {
      title: 'How Can We Love?',
      question: 'Do I take up my cross today?',
      description: 'The good news—the availability of the kingdom of God—is often neither heard, seen, understood, nor believed. Yet only through humility and seeking God\'s character of love do we begin to mature. As the hidden treasure comes into view—surpassing all else—it increasingly captures our hearts.',
      passages: [
        {
          title: 'Abraham and Isaac',
          ref: 'Genesis 22',
          summary: 'Love trusts God more than outcomes.',
          rq: 'Does love cost me something today?',
          verses: [
            { num: 2, text: 'He said, "Take now your son, your only son, whom you love, Isaac, and go to the land of Moriah, and offer him there as a burnt offering."' },
            { num: 3, text: 'So Abraham rose early in the morning.' },
            { num: 8, text: 'Abraham said, "God will provide for Himself the lamb for the burnt offering, my son." So the two of them walked on together.' },
          ],
        },
        {
          title: 'The Good Samaritan',
          ref: 'Luke 10:25–37',
          summary: 'Love crosses inconvenience and boundary.',
          rq: 'Does love interrupt my comfort?',
          verses: [
            { num: 33, text: 'But a Samaritan, who was on a journey, came upon him; and when he saw him, he felt compassion,' },
            { num: 34, text: 'and came to him and bandaged up his wounds.' },
            { num: 36, text: '"Which of these three do you think proved to be a neighbor to the man who fell into the robbers\' hands?"' },
            { num: 37, text: 'And he said, "The one who showed mercy toward him." Then Jesus said to him, "Go and do the same."' },
          ],
        },
        {
          title: 'Greatest Commandment',
          ref: 'Matthew 22:37–39',
          summary: 'Love of God overflows into love of neighbor.',
          rq: 'Does love order my priorities?',
          verses: [
            { num: 37, text: 'And He said to him, "\'You shall love the Lord your God with all your heart, and with all your soul, and with all your mind.\'' },
            { num: 38, text: 'This is the great and foremost commandment.' },
            { num: 39, text: 'The second is like it, \'You shall love your neighbor as yourself.\'"' },
          ],
        },
        {
          title: 'For God So Loved the World',
          ref: 'John 3:16',
          summary: 'Love gives what is most precious.',
          rq: 'Does love cost me something today?',
          verses: [
            { num: 16, text: '"For God so loved the world, that He gave His only begotten Son, that whoever believes in Him shall not perish, but have eternal life.' },
            { num: 17, text: 'For God did not send the Son into the world to judge the world, but that the world might be saved through Him."' },
          ],
        },
        {
          title: 'The Way of Love',
          ref: '1 Corinthians 13',
          summary: 'Love is maturity revealed.',
          rq: 'Do patience and kindness mark me?',
          verses: [
            { num: 4, text: 'Love is patient, love is kind and is not jealous; love does not brag and is not arrogant,' },
            { num: 5, text: 'does not act unbecomingly; it does not seek its own, is not provoked, does not take into account a wrong suffered.' },
            { num: 7, text: 'Bears all things, believes all things, hopes all things, endures all things.' },
            { num: 8, text: 'Love never fails.' },
          ],
        },
        {
          title: 'Greater Love Has No One',
          ref: 'John 15:13',
          summary: 'Love willingly lays itself down.',
          rq: 'Do I move toward sacrificial love?',
          verses: [
            { num: 12, text: '"This is My commandment, that you love one another, just as I have loved you.' },
            { num: 13, text: 'Greater love has no one than this, that one lay down his life for his friends."' },
          ],
        },
      ],
    },
    response: {
      title: 'Provision We Trust',
      question: 'Do I trust God for provision today?',
      description: 'Abiding in God means receiving His provision with gratitude rather than demanding our own. It is the daily practice of releasing anxiety to trust, knowing that the God who clothes the lilies and feeds the sparrows has not forgotten us.',
      passages: [
        {
          title: 'Do Not Worry',
          ref: 'Matthew 6:25–34',
          summary: 'Anxiety shrinks when trust expands.',
          rq: 'Do I release my desires to God?',
          verses: [
            { num: 25, text: '"Do not be worried about your life, as to what you will eat or what you will drink. Is not life more than food, and the body more than clothing?' },
            { num: 26, text: 'Look at the birds of the air, that they do not sow, nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not worth much more than they?' },
            { num: 33, text: 'But seek first His kingdom and His righteousness, and all these things will be added to you."' },
          ],
        },
        {
          title: 'Manna from Heaven',
          ref: 'Exodus 16',
          summary: 'Abiding receives God\'s way of provision.',
          rq: 'Do I accept God\'s provision even when it\'s not my preference?',
          verses: [
            { num: 4, text: 'Then the Lord said to Moses, "Behold, I will rain bread from heaven for you; and the people shall go out and gather a day\'s portion every day, that I may test them, whether or not they will walk in My instruction."' },
            { num: 15, text: 'And Moses said to them, "It is the bread which the Lord has given you to eat."' },
          ],
        },
        {
          title: 'The Shepherd\'s Care',
          ref: 'Psalm 23',
          summary: 'Provision is relational before material.',
          rq: 'Do I rest in God\'s care?',
          verses: [
            { num: 1, text: 'The Lord is my shepherd, I shall not want.' },
            { num: 2, text: 'He makes me lie down in green pastures; He leads me beside quiet waters.' },
            { num: 3, text: 'He restores my soul.' },
            { num: 4, text: 'Even though I walk through the valley of the shadow of death, I fear no evil, for You are with me.' },
            { num: 6, text: 'Surely goodness and lovingkindness will follow me all the days of my life, and I will dwell in the house of the Lord forever.' },
          ],
        },
        {
          title: 'God Supplies Every Need',
          ref: 'Philippians 4',
          summary: 'Provision meets us in contentment.',
          rq: 'Was I grateful rather than anxious?',
          verses: [
            { num: 6, text: 'Be anxious for nothing, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.' },
            { num: 7, text: 'And the peace of God, which surpasses all comprehension, will guard your hearts and your minds in Christ Jesus.' },
            { num: 19, text: 'And my God will supply all your needs according to His riches in glory in Christ Jesus.' },
          ],
        },
        {
          title: 'Water Into Wine',
          ref: 'John 2',
          summary: 'Abiding trusts God to supply what we lack.',
          rq: 'Do I bring my insufficiency to Christ?',
          verses: [
            { num: 3, text: 'When the wine ran out, the mother of Jesus said to Him, "They have no wine."' },
            { num: 7, text: 'Jesus said to them, "Fill the waterpots with water."' },
            { num: 9, text: 'When the headwaiter tasted the water which had become wine, he called the bridegroom,' },
            { num: 10, text: 'and said, "You have kept the good wine until now."' },
          ],
        },
      ],
    },
  },

  // ==================== SATURDAY ====================
  {
    label: 'Saturday',
    key: 'sat',
    fundamental: {
      title: 'What Is Our Purpose?',
      question: 'Am I reigning with God today?',
      description: 'We are all created to rule with God in humility for good. This happens in and through personal relationships as friends of God, formed in His character of love. We look to the example of Jesus, resisting man\'s perspective of ruling and instead champion God\'s character of love.',
      passages: [
        {
          title: 'Creation of Humanity',
          ref: 'Genesis 1:26–27',
          summary: 'We are created to rule.',
          rq: 'Do I run with God today?',
          verses: [
            { num: 26, text: 'Then God said, "Let Us make man in Our image, according to Our likeness; and let them rule over the fish of the sea and over the birds of the sky and over all the earth."' },
            { num: 28, text: 'God blessed them; and God said to them, "Be fruitful and multiply, and fill the earth, and subdue it."' },
          ],
        },
        {
          title: 'Salt and Light',
          ref: 'Matthew 5:13–16',
          summary: 'Purpose is influence toward goodness.',
          rq: 'Does my presence elevate environments?',
          verses: [
            { num: 13, text: '"You are the salt of the earth.' },
            { num: 14, text: 'You are the light of the world. A city set on a hill cannot be hidden.' },
            { num: 16, text: 'Let your light shine before men in such a way that they may see your good works, and glorify your Father who is in heaven."' },
          ],
        },
        {
          title: 'Serve Rather Than Be Served',
          ref: 'Mark 10:45',
          summary: 'Purpose is fulfilled through self-giving love.',
          rq: 'Do I use influence for good?',
          verses: [
            { num: 43, text: '"Whoever wishes to become great among you shall be your servant;' },
            { num: 45, text: 'For even the Son of Man did not come to be served, but to serve, and to give His life a ransom for many."' },
          ],
        },
        {
          title: 'Bear Much Fruit',
          ref: 'John 15:8',
          summary: 'Purpose is fruitfulness that glorifies God.',
          rq: 'Was my life fruitful today?',
          verses: [
            { num: 5, text: '"I am the vine, you are the branches; he who abides in Me and I in him, he bears much fruit, for apart from Me you can do nothing.' },
            { num: 8, text: 'My Father is glorified by this, that you bear much fruit, and so prove to be My disciples."' },
          ],
        },
        {
          title: 'Created for Good Works',
          ref: 'Ephesians 2',
          summary: 'Purpose is prepared beforehand.',
          rq: 'Do I walk attentively into opportunity?',
          verses: [
            { num: 8, text: 'For by grace you have been saved through faith; and that not of yourselves, it is the gift of God;' },
            { num: 10, text: 'For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand so that we would walk in them.' },
          ],
        },
        {
          title: 'Esther Risks Her Life',
          ref: 'Esther 4–7',
          summary: 'Purpose often emerges in crisis.',
          rq: 'Does courage guide me?',
          verses: [
            { num: 14, text: '"For if you remain silent at this time, relief and deliverance will arise for the Jews from another place and you and your father\'s house will perish. And who knows whether you have not attained royalty for such a time as this?"' },
            { num: 16, text: '"I will go in to the king, which is not according to the law; and if I perish, I perish."' },
          ],
        },
      ],
    },
    response: {
      title: 'Forgiveness We Extend',
      question: 'Forgiven — do I forgive others today?',
      description: 'Forgiveness is the culture of the Kingdom. Because we have been forgiven an unpayable debt, we extend mercy freely—not as weakness, but as the deepest expression of God\'s character of love flowing through our lives.',
      passages: [
        {
          title: 'Joseph Weeps Over His Brothers',
          ref: 'Genesis 45',
          summary: 'Character is displayed in forgiveness.',
          rq: 'Forgiven, do I forgive?',
          verses: [
            { num: 4, text: '"I am your brother Joseph, whom you sold into Egypt.' },
            { num: 5, text: 'Now do not be grieved or angry with yourselves, because you sold me here, for God sent me before you to preserve life."' },
            { num: 15, text: 'He kissed all his brothers and wept on them.' },
          ],
        },
        {
          title: 'Parable of the Unforgiving Servant',
          ref: 'Matthew 18:21–35',
          summary: 'Forgiveness is the culture of the Kingdom.',
          rq: 'Does mercy flow freely from me?',
          verses: [
            { num: 21, text: 'Then Peter came and said, "Lord, how often shall my brother sin against me and I forgive him? Up to seven times?"' },
            { num: 22, text: 'Jesus said to him, "I do not say to you, up to seven times, but up to seventy times seven."' },
          ],
        },
        {
          title: '"Father, Forgive Them"',
          ref: 'Luke 23:34',
          summary: 'Forgiveness releases even the undeserving.',
          rq: 'Does mercy outrun offense?',
          verses: [
            { num: 33, text: 'When they came to the place called The Skull, there they crucified Him.' },
            { num: 34, text: 'But Jesus was saying, "Father, forgive them; for they do not know what they are doing."' },
          ],
        },
        {
          title: 'Bear With One Another',
          ref: 'Colossians 3',
          summary: 'Forgiveness sustains unity.',
          rq: 'Does patience triumph over irritation?',
          verses: [
            { num: 12, text: 'So, as those who have been chosen of God, holy and beloved, put on a heart of compassion, kindness, humility, gentleness and patience;' },
            { num: 13, text: 'bearing with one another, and forgiving each other, whoever has a complaint against anyone; just as the Lord forgave you, so also should you.' },
          ],
        },
        {
          title: 'Peace Be With You',
          ref: 'John 20:19–23',
          summary: 'Forgiven people become carriers of forgiveness.',
          rq: 'Do I extend the mercy I have received?',
          verses: [
            { num: 19, text: 'Jesus came and stood in their midst and said to them, "Peace be with you."' },
            { num: 21, text: '"Peace be with you; as the Father has sent Me, I also send you."' },
            { num: 22, text: 'And when He had said this, He breathed on them and said to them, "Receive the Holy Spirit.' },
            { num: 23, text: 'If you forgive the sins of any, their sins have been forgiven them."' },
          ],
        },
      ],
    },
  },

  // ==================== SUNDAY ====================
  {
    label: 'Sunday',
    key: 'sun',
    fundamental: {
      title: 'Joy We Cultivate',
      question: 'Does my joy in God eclipse temptation today?',
      description: 'Joy is not circumstantial but cultivated through communion with God. It deepens when we stop striving and delight in His presence, when we remember His faithfulness and rest in His love. It is the destiny of God\'s people.',
      passages: [
        {
          title: 'Sabbath Rest',
          ref: 'Genesis 2',
          summary: 'Joy is found in communion, not man\'s power.',
          rq: 'Do I delight in God or reject rest?',
          verses: [
            { num: 2, text: 'By the seventh day God completed His work which He had done, and He rested on the seventh day from all His work.' },
            { num: 3, text: 'Then God blessed the seventh day and sanctified it, because in it He rested from all His work which God had created and made.' },
          ],
        },
        {
          title: 'The Beatitudes',
          ref: 'Matthew 5:1–12',
          summary: 'Life in the kingdom of God is joy.',
          rq: 'Does eternal joy anchor my emotions and actions?',
          verses: [
            { num: 3, text: '"Blessed are the poor in spirit, for theirs is the kingdom of heaven.' },
            { num: 4, text: 'Blessed are those who mourn, for they shall be comforted.' },
            { num: 11, text: 'Blessed are you when people insult you and persecute you, and falsely say all kinds of evil against you because of Me.' },
            { num: 12, text: 'Rejoice and be glad, for your reward in heaven is great."' },
          ],
        },
        {
          title: '"Come to Me… I Will Give You Rest"',
          ref: 'Matthew 11:28–30',
          summary: 'Rest is relational before it is physical.',
          rq: 'Do I receive Christ\'s rest?',
          verses: [
            { num: 28, text: '"Come to Me, all who are weary and heavy-laden, and I will give you rest.' },
            { num: 29, text: 'Take My yoke upon you and learn from Me, for I am gentle and humble in heart, and you will find rest for your souls.' },
            { num: 30, text: 'For My yoke is easy and My burden is light."' },
          ],
        },
        {
          title: '"That My Joy May Be in You"',
          ref: 'John 15:11',
          summary: 'Joy grows from abiding in love.',
          rq: 'Do I remain in God\'s love today?',
          verses: [
            { num: 9, text: '"Just as the Father has loved Me, I have also loved you; abide in My love.' },
            { num: 11, text: 'These things I have spoken to you so that My joy may be in you, and that your joy may be made full."' },
          ],
        },
        {
          title: 'Rejoice in the Lord Always',
          ref: 'Philippians 4',
          summary: 'Joy is cultivated, not circumstantial.',
          rq: 'Do I choose joy?',
          verses: [
            { num: 4, text: 'Rejoice in the Lord always; again I will say, rejoice!' },
            { num: 6, text: 'Be anxious for nothing, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.' },
            { num: 7, text: 'And the peace of God, which surpasses all comprehension, will guard your hearts and your minds in Christ Jesus.' },
          ],
        },
      ],
    },
    response: {
      title: 'Deliverance We Receive',
      question: 'Does abiding position me for deliverance?',
      description: 'Deliverance is not earned by effort but received through trust. It flows through surrendered will, readiness, and the finished work of Christ. Our future restoration shapes how we interpret today.',
      passages: [
        {
          title: '"It Is Finished"',
          ref: 'John 19:30',
          summary: 'Deliverance is accomplished by Christ, not earned by us.',
          rq: 'Do I rest in Christ\'s finished work?',
          verses: [
            { num: 28, text: 'After this, Jesus, knowing that all things had already been accomplished, said, "I am thirsty."' },
            { num: 30, text: 'When Jesus had received the sour wine, He said, "It is finished!" And He bowed His head and gave up His spirit.' },
          ],
        },
        {
          title: 'More Than Conquerors',
          ref: 'Romans 8',
          summary: 'Deliverance is rooted in God\'s love.',
          rq: 'Does security replace fear?',
          verses: [
            { num: 31, text: 'What then shall we say to these things? If God is for us, who is against us?' },
            { num: 37, text: 'But in all these things we overwhelmingly conquer through Him who loved us.' },
            { num: 38, text: 'For I am convinced that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come,' },
            { num: 39, text: 'nor any other created thing, will be able to separate us from the love of God, which is in Christ Jesus our Lord.' },
          ],
        },
        {
          title: 'The Armor of God',
          ref: 'Ephesians 6',
          summary: 'Deliverance requires readiness.',
          rq: 'Do I stand spiritually prepared?',
          verses: [
            { num: 10, text: 'Finally, be strong in the Lord and in the strength of His might.' },
            { num: 11, text: 'Put on the full armor of God, so that you will be able to stand firm against the schemes of the devil.' },
            { num: 13, text: 'Therefore, take up the full armor of God, so that you will be able to resist in the evil day, and having done everything, to stand firm.' },
          ],
        },
        {
          title: 'The New Heaven and New Earth',
          ref: 'Revelation 21–22',
          summary: 'Deliverance ends in total renewal.',
          rq: 'Does future restoration interpret today?',
          verses: [
            { num: 1, text: 'Then I saw a new heaven and a new earth.' },
            { num: 3, text: '"Behold, the tabernacle of God is among men, and He will dwell among them, and they shall be His people.' },
            { num: 4, text: 'And He will wipe away every tear from their eyes; and there will no longer be any death; there will no longer be any mourning, or crying, or pain; the first things have passed away."' },
          ],
        },
        {
          title: '"Peace, Be Still"',
          ref: 'Mark 4:39',
          summary: 'Deliverance often begins with trusting Christ\'s presence.',
          rq: 'Do I rest in God amid turmoil?',
          verses: [
            { num: 37, text: 'And there arose a fierce gale of wind, and the waves were breaking over the boat.' },
            { num: 38, text: 'They woke Him and said, "Teacher, do You not care that we are perishing?"' },
            { num: 39, text: 'And He got up and rebuked the wind and said to the sea, "Hush, be still." And the wind died down and it became perfectly calm.' },
            { num: 40, text: 'And He said to them, "Why are you afraid? Do you still have no faith?"' },
          ],
        },
      ],
    },
  },
];

// Make available for both Node.js and browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SITE_META, DAYS };
}
