let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
    
  {word:"Accomplish",hint: "Achieve or complete successfully" },
  {word:"Attain",hint: "Succeed in achieving" },
  {word:"Adapt",hint: "Make something suitable for a new use or purpose" },
  {word:"Affordable",hint: "Reasonably priced" },
  {word:"Accompany",hint: "go somewhere with someone as a companion" },
  {word:"Analyse",hint: "examine methodically and in detail" },
  {word:"Admire",hint: "regard an object quality or person with respect or warm approval" },
  {word:"Associate",hint: "connect someone or something with something else in one’s mind" },
  {word:"Artificial",hint: "made by human beings rather than occurring naturally" },
  {word:"Apparently",hint: "as far as one knows or can see" },
  {word:"Beside",hint: "at the side of; next to" },
  {word:"Benefit",hint: "an advantage or profit gained from something" },
  {word:"Boundary",hint: "a line that marks the limits of an area" },
  {word:"Better",hint: "of a more excellent or effective type or quality" },
  {word:"Babysitting",hint: "the care of a child or children while the parents are out" },
  {word:"Backup",hint: "help or support" },
  {word:"Backdrop",hint: "provide a background or setting for" },
  {word:"Categorise",hint: "place in a particular class or group" },
  {word:"Calculate",hint: "determine the amount or number of something mathematically" },
  {word:"Conclusion",hint: "the end or finish of an event or process" },
  {word:"Collide",hint: "hit with force when moving" },
  {word:"Confuse",hint: "cause someone to become bewildered or perplexed" },
  {word:"Cordially",hint: "in a warm and friendly way" },
  {word:"Chase",hint: "pursue in order to catch or catch up with" },
  {word:"Cast",hint: "register" },
  {word:"Conference",hint: "a formal meeting for discussion" },
  {word:"Challenge",hint: "a call to take part in a contest or competition especially a duel" },
  {word:"Dare",hint: "have the courage to do something" },
  {word:"Delete",hint: "remove or obliterate" },
  {word:"Defend",hint: "resist an attack made on someone or something" },
  {word:"Detect",hint: "discover or identify the presence or existence of" },
  {word:"Detach",hint: "leave or separate oneself from" },
  {word:"Destroy",hint: "put an end to the existence of something by damaging or attacking it" },
  {word:"Differentiate",hint: "recognize or ascertain what makes someone or something different" },
  {word:"Distinguish",hint: "recognize or treat someone or something as different" },
  {word:"Efficient",hint: "achieving maximum productivity with minimum wasted effort or expense" },
  {word:"Effective",hint: "successful in producing a desired or intended result" },
  {word:"Enormous",hint: "very large in size quantity or extent" },
  {word:"Eliminate",hint: "completely remove or get rid of something" },
  {word:"Engagement",hint: "an arrangement to do something or go somewhere at a fixed time" },
  {word:"Elementary",hint: "relating to the basic elements of a subject" },
  {word:"Enigmatic",hint: "difficult to interpret or understand" },
  {word:"Friction",hint: "conflict or animosity caused by a clash of wills temperaments or opinions" },
  {word:"Fraction",hint: "a small or tiny part of something" },
  {word:"Function",hint: "an activity or purpose natural to or intended for a person or thing" },
  {word:"Fund",hint: "a sum of money saved or made available for a particular purpose" },
  {word:"Frequent",hint: "happening often" },
  {word:"Fable",hint: "a short story typically with animals as characters conveying a moral" },
  {word:"Fabulous",hint: "extraordinary" },
  {word:"Fantastic",hint: "extraordinarily good or attractive" },
  {word:"Foreign",hint: "belonging to a country other than one’s own" },
  {word:"General",hint: "affecting or concerning all or most people places or things" },
  {word:"Generous",hint: "showing kindness toward others" },
  {word:"Gratitude",hint: "the quality of being thankful" },
  {word:"Grateful",hint: "feeling or showing an appreciation of kindness" },
  {word:"Genetic",hint: "relating to genes or heredity" },
  {word:"Gigantic",hint: "of very great size" },
  {word:"Gaze",hint: "look steadily and intently" },
  {word:"Gorgeous",hint: "very attractive" },
  {word:"Genre",hint: "a style or category of art music or literature" },
  {word:"Hurry",hint: "move or act with great speed" },
  {word:"Holy",hint: "dedicated to God or a religious purpose" },
  {word:"Hallucination",hint: "an experience involving the apparent perception of something not present" },
  {word:"Heavenly",hint: "of heaven divine" },
  {word:"Harmony",hint: "the quality of forming a pleasing and consistent whole" },
  {word:"Hilarious",hint: "extremely amusing" },
  {word:"Heartfelt",hint: "sincere" },
  {word:"Harvest",hint: "the product or result of an action" },
  {word:"Humanitarian",hint: "concerned with or seeking to promote human welfare" },
  {word:"Highlight",hint: "an outstanding part of an event or period of time" },
  {word:"Illuminate",hint: "make something visible or bright by shining light on it" },
  {word:"Illustrate",hint: "provide with pictures" },
  {word:"Inferior",hint: "lower in rank status or quality" },
  {word:"Impactful",hint: "having a major effect" },
  {word:"Interior",hint: "relating to the inside" },
  {word:"Improper",hint: "not in accordance with accepted rules or standards" },
  {word:"Impossible",hint: "not able to occur exist or be done" },
  {word:"Invisible",hint: "unable to be seen" },
  {word:"Incentive",hint: "a thing that motivates or encourages one to do something" },
  {word:"Iconic",hint: "relating to or of the nature of an icon" },
  {word:"Jolly",hint: "happy and cheerful" },
  {word:"Justice",hint: "just behaviour or treatment" },
  {word:"Judicial",hint: "relating to or done by a court or judge" },
  {word:"Judgement",hint: "the ability to make considered decisions or come to sensible conclusions" },
  {word:"Junior",hint: "denoting young or younger people" },
  {word:"Knowledge",hint: "the theoretical or practical understanding of a subject" },
  {word:"Kind",hint: "having or showing a friendly generous and considerate nature" },
  {word:"Keen",hint: "having or showing eagerness or enthusiasm" },
  {word:"Keep",hint: "have or retain possession of" },
  {word:"Lavish",hint: "spending or using things that are more than necessary" },
  {word:"Long-lasting",hint: "enduring or having endured for a long period of time" },
  {word:"Lovable",hint: "inspiring or deserving love or affection" },
  {word:"Late",hint: "doing something or taking place after the expected proper or usual time" },
  {word:"Linguistic",hint: "relating to language" },
  {word:"Legend",hint: "an extremely famous or notorious person especially in a particular field" },
  {word:"Loot",hint: "goods especially private property taken from an enemy in war" },
  {word:"Loud",hint: "producing or capable of producing much noise" },
  {word:"Luminous",hint: "giving off light" },
  {word:"Leave",hint: "go away from" },
  {word:"Marginal",hint: "relating to or situated at the edge of something" },
  {word:"Majestic",hint: "having or showing impressive beauty" },
  {word:"Magnetic",hint: "the ability to attract substances possessing a magnetic quality (eg: iron)" },
  {word:"Masculine",hint: "having qualities or appearance traditionally associated with men" },
  {word:"Maternal",hint: "relating to a mother" },
  {word:"Minimal",hint: "of a minimum amount quantity or degree" },
  {word:"Manufacturing",hint: "producing something on a large scale using machinery" },
  {word:"Materialistic",hint: "excessively concerned with material possessions" },
  {word:"Neighbour",hint: "a person living near or next door" },
  {word:"Native",hint: "associated with the place or circumstances of a person’s birth" },
  {word:"Narration",hint: "the action or process of narrating a story" },
  {word:"Normal",hint: "the usual or typical state or condition" },
  {word:"National",hint: "relating to a nation" },
  {word:"Optimistic",hint: "hopeful and confident about the future" },
  {word:"Optional",hint: "available to be chosen but not obligatory" },
  {word:"Objective",hint: "something that is planned aimed at or sought" },
  {word:"Ordinary",hint: "Without any special or distinctive features" },
  {word:"Opportunity",hint: "a set of circumstances that makes it possible to do something" },
  {word:"Publish",hint: "prepare and issue for public sale distribution or readership" },
  {word:"Permit",hint: "give authorization or consent to someone to do something" },
  {word:"Ultimately",hint: "in the end" },
  {word:"Victory",hint: "an act of defeating an enemy or opponent in a battle" }
]
