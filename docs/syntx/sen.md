{% set chap = 28 %}
{% set chap_agr = chap + 1 %}
{% set chap_qdwe = chap + 12 %}
{% set chap_ics = chap + 13 %}
{% set chap_case = chap + 4 %}

# Introduction to Simple Sentences

Below, the basic syntactic principles and concepts that will be relevant in chapters [{{chap_agr}}](agr.md) to {{chap_qdwe}} are discussed. Most of the examples are taken from the Late Quenya corpus, but if the example was adapted from earlier materials, the reference has an additional remark.
{: .ref #{{chap}}}

Chapters {{chap_ics + 1}} to {{chap_ics + 13}} deal with the various types of subordinate constructions found in complex sentences (subordinate clauses, participles, and infinitives): these will be separately introduced in chapter {{chap_ics}}.
{: .ref #{{chap}}}

## The Sentence Core

### Predicate, Subject, Object, Complement ### {: #psoc }

Most sentences (for the exceptions, &rarr;[{{chap}}.12](#olv)) contain at least a **predicate** (nearly always a finite verb) and one or more **obligatory constituents** that belong to that predicate; together these make up the **sentence core**.
{: .ref #{{chap}}}
 
+ Nearly all verbs take at least one obligatory constituent, a **subject**. Subjects are marked by the *common case* (&rarr;[{{chap_case}}.2](cas.md#common)), and predicates agree with it in number (&rarr;[{{chap_agr}}.1](agr.md#sfv)). Some verbs take only a subject:

	+ `tintilar`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `i·eleni`<span style="font-variant:small-caps;"><sub>subject</sub></span> [RGEO/58]. *The stars twinkle*.
	{: .exp}

	+ `i·arcanwar`<span style="font-variant:small-caps;"><sub>subject</sub></span> `tauvar`<span style="font-variant:small-caps;"><sub>predicate</sub></span> [PE22/147]. *The thrones endure*.
	{: .exp}

	+ `ulo`<span style="font-variant:small-caps;"><sub>subject</sub></span> `úva`<span style="font-variant:small-caps;"><sub>predicate</sub></span> [PE22/167]. *The rain is coming*.
	{: .exp}	

+ Many verbs take both a subject and another obligatory constituent. With a majority of such verbs, this second obligatory constituent is the **direct object**, which is also marked by the *common case* (&rarr;@@); some verbs take second obligatory constituents in a different case (such constituents are called **complements**):

	+ `Varda`<span style="font-variant:small-caps;"><sub>subject</sub></span> `máryat`<span style="font-variant:small-caps;"><sub>object</sub></span> `ortane`<span style="font-variant:small-caps;"><sub>predicate</sub></span> [LotR/377]. *Varda has uplifted her hands*.
	{: .exp}

	+ `ilye tier`<span style="font-variant:small-caps;"><sub>object</sub></span> `unduláve`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `lumbule`<span style="font-variant:small-caps;"><sub>subject</sub></span> [LotR/377]. *All paths are drowned deep in shadows*.
	{: .exp}

	+ `ortírielyanna`<span style="font-variant:small-caps;"><sub>complement</sub></span> `rucimme`<span style="font-variant:small-caps;"><sub>predicate</sub></span> [VT44/5]. *We fly to thy patronage*.
	{: .exp}

	+ `i·hyarma`<span style="font-variant:small-caps;"><sub>subject</sub></span> `tentane`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `Melcorello`<span style="font-variant:small-caps;"><sub>object</sub></span> [VT49/7]. *The left hand pointed away from Melkor*.
	{: .exp}	

+ Some verbs take more than two obligatory constituents: a subject, an object, and one (or more) further complements. Often the third obligatory constituent is the **indirect object**, which is marked by the dative case (&rarr;@@); other verbs take a second complement in the common case:

	+ `Varda`<span style="font-variant:small-caps;"><sub>subject</sub></span> `enquantuva`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `i·yulma`<span style="font-variant:small-caps;"><sub>object</sub></span> `nin`<span style="font-variant:small-caps;"><sub>indirect object</sub></span> [VT49/7]. *Varda will fill the cup for me*.
	{: .exp}

	+ `lá navin`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `caritalya·s`<span style="font-variant:small-caps;"><sub>object</sub></span> `mára`<span style="font-variant:small-caps;"><sub>complement</sub></span> [PE22/154]. *I don't advise you to do so*.
	{: .exp}

In the examples above, with one exception, the obligatory constituents are expressed by a noun phrase or a pronoun (these are treated more fully below, &rarr;[26.15-20](#nps)).
{: .ref #{{chap}}}

Such obligatory constituents may also take other forms, however. The most important of these are:


+ **prepositional phrases** (consisting of a preposition and its complement):

	+ `i`<span style="font-variant:small-caps;"><sub>subject</sub></span> `or ilye mahalmar`<span style="font-variant:small-caps;"><sub>complement</sub></span> `ea`<span style="font-variant:small-caps;"><sub>predicate</sub></span> [UT/305]. *Who is above all thrones*.
	{: .exp}
	
+ **adverbs**:

	+ `lende`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `tanna`<span style="font-variant:small-caps;"><sub>complement</sub></span> `Nieliccilis`<span style="font-variant:small-caps;"><sub>subject</sub></span> [PE16/96]. *Thither came little Niéle*.
	{: .exp}
	
+ **subordinate clauses**:

	+ `savin`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `i Elessarno quetie naite`<span style="font-variant:small-caps;"><sub>object</sub></span> [PE22/158]. *I believe that the words of Aragorn are true*. The declarative subordinate clause (&rarr;@@) fulfills the role of object with the predicate `savin`: compare `Elessar` in `savin Elessar` *'I believe Aragorn'*.
	{: .exp}

+ **infinitive constructions**:

	+ `man`<span style="font-variant:small-caps;"><sub>subject</sub></span> `cenuva`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `fána cirya círa`<span style="font-variant:small-caps;"><sub>object</sub></span> [MC/221]. *Who shall see a white ship leave*. The common-and-infinitive construction (&rarr;@@) fulfills the role of object with the predicate `cenuva`: compare `andúne` in `man cenuva métim' andúne?` *'Who shall see the last evening?'*
	{: .exp}
	
+ **participle constructions**:

	+ `lie`<span style="font-variant:small-caps;"><sub>subject</sub></span> `tatallaner`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `i·már ampanaina`<span style="font-variant:small-caps;"><sub>object</sub></span> [MQ: PE22/108]. *While it was being built people marveled at the house*. The common-and-participle construction (&rarr;@@) fulfills the role of object with the predicate `tatallaner`: compare `i·már` in `tatallanen i·már` *'I marveled at the house'*.
	{: .exp}
	
When a constituent is expressed in the form of a subordinate clause or a construction with an infinitive or participle, this is called a **complex sentence**. For complex sentences, &rarr;@@.

!!! note
	The number of obligatory constituents that accompany a verb is called the 'valency' of that verb: thus `firë` *die* has a valency of one, `anta` *give* has a valency of three.
	
	Some verbs have different valencies in different meanings. For instance, the verb `cirë`, when it takes only a subject, means *sail*, but may also take an *object* and then means *cut*.
	
	The subject, object and other obligatory constituents that belong to the predicate are also called 'arguments'. The sentence core is also called the 'nucleus' of a sentence.
	
	It is sometimes difficult to assess whether a constituent should be considered 'obligatory' in the sense given above (i.e. whether they are required with a predicate to form a grammatically correct core sentence). This is true particularly of adverbial complements such as `tanna` in [(11)](#exp.11), and with verbs which may have different valencies. In reality, syntactic 'obligatoriness' is better seen as a scale, with constituents being *more* or *less* obligatory depending on the verb and construction used.

There are a few verbs which do not have a subject ('impersonal' verbs, &rarr;@@), and very few of these take no other obligatory constituents (i.e. have a valency of zero). The sentence core then consists of nothing but the verb: e.g. `úla` *it is raining*.
{: .ref #{{chap}}}

### 'Omission' of the Subject and Other Constituents

That a verb takes a certain number of obligatory constituents does not mean that all those constituents are necessarily expressed every single time that verb is used. A constituent may be omitted if it is sufficiently **clear from the context** who or what is meant:
{: .ref #{{chap}}}

+ `roccor i·Erulingaron máre nár? Nár` [PE22/166]. *The horses of Rohirrim are good, are they not? They are*. The second sentence has no explicit subject — 'horses' has been the subject of the previous sentence and need not be mentioned explicitly again. Note that these constituents have to be supplied in translation ('they').
{: .exp}
	
+ `savin Elessar ar i náne aran Ondóreo` [PE22/158]. *I believe Aragorn, and that he was a King of Gondor*. *Elessar* doesn’t need to be mentioned explicitly again.
{: .exp}
	
+ `á zac' i·fende` [PE22/166]. *Close the door*. English, too, normally omits the subject with imperatives.
{: .exp}
	
+ `h·ore nin carita·s nó namin alasaila` [VT41/13]. *I would like to do so but judge it unwise*. Note how the second sentence has no explicit object, added in the translation ('it')[^cor1].
{: .exp}

The lack of an explicit, separately expressed **subject** is particularly frequent in Quenya, and constitutes a regular feature of the language. Information about the subject of a verb is then *usually* expressed by the **personal ending** of that verb:
{: .ref #{{chap}}}

+ <code><b>merin</b> sa <b>h·aryalye</b> galasse nó <b>vanyalye</b> Ambarello</code> [MS/1]. *I hope that you have happiness before you pass from the world*. The subjects ('I', 'you') are expressed by the first- and second-person singular endings.
{: .exp}

+ <code><b>melinye·s</b> apa lá hé</code> [VT49/15]. *I love him but not him (the other)*. The subjects ('I') is expressed by the first-person singular ending, while the first object ('him') by singular object clitic.
{: .exp}

In the third person, the omission of the subject is regular if the subject of the previous sentence is continued, as in [(15)](#exp.15). If the subject changes, an explicitly expressed subject is normally required [VT49/14-15].

In the first and second person, explicitly expressed subjects (in the form of the personal pronouns `ní`, `lyé`, etc.) are used only for emphasis or contrast. For such 'contrastive' pronouns, &rarr;@@.

!!! note
	The omission of other elements than the subject (such as the object in [(18)](#exp.18)) is much more restricted and infrequent than the lack of an explicitly expressed subject. The object can be substituted for a short clitic form which closely follows the verb [(20)](#exp.20) in third person only.
	
### Linking Verb, Predicative Complement ### {: #lvpc }

A **linking verb** (or **copulative**/**copular verb**, **copula**) 'links' a subject to a nominal constituent, the so-called **predicative complement**, which identifies the subject or assigns a property to it. The predicative complement is usually an **adjective** which agrees in case and number with the subject, or a **noun** which agrees with the subject in case (&rarr;[27.7](agr.md#hmr), @@).
{: .ref #{{chap}}}

Examples of verbs that can function as linking verbs are `na` *be*, `olë` *become*, `larë` *remain, stay*, `nemë` *seem, appear to be, prove to be*, etc.

+ [`vanwa`<span style="font-variant:small-caps;"><sub>predicative adjective</sub></span> `ná`<span style="font-variant:small-caps;"><sub>linking verb</sub></span>]<span style="font-variant:small-caps;"><sub>predicate</sub></span> `Valimar`<span style="font-variant:small-caps;"><sub>subject</sub></span> [LotR/377]. *Lost is Valimar*.
{: .exp}

+ [`nése`<span style="font-variant:small-caps;"><sub>linking verb</sub></span> `nórima rocco`<span style="font-variant:small-caps;"><sub>predicative noun phrase</sub></span>]<span style="font-variant:small-caps;"><sub>predicate</sub></span> [VT49/29]. *He was a horse strong at running*.
{: .exp}

!!! note
	Predicative nouns or adjectives are sometimes called 'predicate nouns/adjectives'. Predicative complements agreeing with a subject are also sometimes called 'subject(ive) complements'.
	
Linking verbs also occur with an adverbial expression of place or circumstance as their complement: e.g. `ná` *be (somewhere), find oneself (somewhere)*. But normally special verbs of position are used instead: `tulë` *get somewhere*, `harë` *stay somewhere*. In many grammatical treatments, such complements are also seen as predicative complements:
{: .ref #{{chap}}}

+ `ní`<span style="font-variant:small-caps;"><sub>subject</sub></span> [`nauva`<span style="font-variant:small-caps;"><sub>linking verb</sub></span> `tanome`<span style="font-variant:small-caps;"><sub>complement</sub></span>]<span style="font-variant:small-caps;"><sub>predicate</sub></span> [VT49/19]. *I will be there*.
{: .exp}

The verb `ná`, unlike its English counterpart, doesn’t occur in the meaning *exist*. An expression like `tasse ná` *'there is'* can have only contrastive meaning 'but not here'. In the '**existential**' use, the verb `ea` with only a subject is used instead. The verb `tule` also has an existential use, and then means *happen*:
{: .ref #{{chap}}}

+ `vahaia` `nóre`<span style="font-variant:small-caps;"><sub>subject</sub></span> `ea`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `i ga·esta Valinor` [MQ: PE22/124]. *Far a way there is a land called Valinor*.
{: .exp}

Some other verbs link an object to a predicative complement that agrees with that object (both are in the common). Examples of such verbs are *consider X (to be) Y, make X Y, appoint X as Y* (for more details, &rarr;@@):
{: .ref #{{chap}}}

+ `alasaila ná lá care` `tai`<span style="font-variant:small-caps;"><sub>object</sub></span> `mo`<span style="font-variant:small-caps;"><sub>subject</sub></span> [`nave`<span style="font-variant:small-caps;"><sub>verb</sub></span> `mára`<span style="font-variant:small-caps;"><sub>predicative adjective</sub></span>]<span style="font-variant:small-caps;"><sub>predicate</sub></span> [PE22/154]. *It is unwise not to do what one judges good*.
{: .exp}

!!! note
	Predicative complements agreeing with an object are sometimes called 'object(ive) complements'.
	
### Omission of a Linking Verb: Nominal Sentences ### {: #olv}

Frequently, a linking verb such as `na` is lacking in a sentence, whose core then contains only nominal elements. This occurs especially in the following cases:
{: .ref #{{chap}}}

+ when predicative adjective follows the subject:
	
	+ `i·roccor`<span style="font-variant:small-caps;"><sub>subject</sub></span> `rindi`<span style="font-variant:small-caps;"><sub>predicate</sub></span> [MQ: PE21/78]. *The horses are swift*.
	{: .exp}
	
	+ `Elessarno quetie`<span style="font-variant:small-caps;"><sub>subject</sub></span> `naite`<span style="font-variant:small-caps;"><sub>predicate</sub></span> [PE22/158]. *The words of Aragorn are true*.
	{: .exp}
	
	Unless the subject is not expressed, or is separated from a predicate:
	
	+ `yá hríve mene,` `ringa`<span style="font-variant:small-caps;"><sub>predicative adjective</sub></span> `ná`<span style="font-variant:small-caps;"><sub>linking verb</sub></span> [VT49/23]. *When winter comes, it is cold*. Impersonal use (lit. 'cold is'); for this, &rarr;@@.
	{: .exp}
	
	+ `vanwa`<span style="font-variant:small-caps;"><sub>predicative adjective</sub></span> `ná`<span style="font-variant:small-caps;"><sub>linking verb</sub></span>`, Rómello vanwa,` `Valimar`<span style="font-variant:small-caps;"><sub>subject</sub></span>`!` [LotR/377]. *Lost, lost to those from the east is Valimar!*
	{: .exp}
	
+ if the subject is postponed, but is separated from a predicate with a definite article:

	+ `mana`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `i·coimas Eldaron`<span style="font-variant:small-caps;"><sub>subject</sub></span> [PM/395]. *What is the 'coimas' of the Eldar?*
	{: .exp}
	
	+ `aistana`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `i·yáve mónalyo`<span style="font-variant:small-caps;"><sub>subject</sub></span> [VT43/31]. *Blessed is the fruit of thy womb*.
	{: .exp}
	
+ with explicit pronouns:

	+ `aistana`<span style="font-variant:small-caps;"><sub>predicate</sub></span> `elye`<span style="font-variant:small-caps;"><sub>subject</sub></span> `imíca nísi` [VT43/28]. *Blessed art thou amongst women*.
	{: .exp}
	
+ with adverbs of position and direction:

	+ `tasse i·osto` [MQ: PE22/124]. ***There*** *is the city*.
	{: .exp}	
	+ `manna lé sinnar` [MQ: PE22/124]. *Where are you going this morning?*
	{: .exp}
	
+ with prepositional phrases:

	+ `i·Héru` `as·elye`<span style="font-variant:small-caps;"><sub>prepositional phrase</sub></span> [VT43/28]. *The Lord is with thee*.
	{: .exp}
	
	+ `quiquie menin coaryanna,` `ar·se`<span style="font-variant:small-caps;"><sub>prepositional phrase</sub></span> [VT49/23]. *Whenever I get to his house, he is out*.
	{: .exp}
	
+ in formulaic questions:

	+ `ma naite?` [PE22/166]. *Is it true?*
	{: .exp}
	
Only the present indicative of `na` *be* is regularly omitted as linking verb in this way: other forms such as imperfect `náne` or future `nauva` are not normally omitted, unless other indications of time are present, especially in expressions of location or direction of movement:

+ `masse lé enar?` [MQ: PE22/124]. *Where will you be tomorrow?*
{: .exp}

[^cor1]: Also, `nai elye hiruva` [LotR/378].

*[MQ]: Middle Quenya

## Optional Constituents

### Adverbial Modifiers and Other Optional Constituents

Many core sentences are elaborated by one or more **optional** (**non-obligatory**) constituents, which can be left out without making the sentence ungrammatical, and which supplement the sentence core in various ways. Most often such constituents are **adverbial modifiers**.
{: .ref #{{chap}}}

Such optional constituents can be expressed by:

+ **adverbs**:

	+ `tas cennen nótime eldali` [PE22/155]. *I saw a few elves there*. Adverbial modifier of place.
	{: .exp}

+ **noun phrases** and **pronouns** (in the common, dative or adverbial case, &rarr;@@):

	+ `á·men anta síra ilaurea massamma` [VT43/12]. *Give us this day our daily bread*. Adverbial modifier of time, expressed by the common, &rarr;@@.
	{: .exp}
	
	+ `sí man i·yulma nin enquantuva?` [LotR/377]. *Who now shall refill the cup for me?* Constituent representing the beneficiary/interested party, expressed by the dative, &rarr;@@. Such constituents are often taken as indirect objects, but unlike indirect objects with verbs of giving, etc. (for which &rarr;[26.3](#psoc)), they are optional.
	{: .exp}
	
+ **prepositional phrases**:

	+ `nai amanya onnalya ter coivierya` [VT49/41]. *May your child be blessed throughout their life*. Adverbial modifier of time.
	{: .exp}
	
And in the case of complex sentences, by:

+ **subordinate clauses**:

	+ `yá hríve mene, ringa ná` [VT49/23]. *When winter comes, it is cold*. The temporal subordinate clause (&rarr;@@) serves as an adverbial modifier of time.
	{: .exp}

+ **participle constructions** (also &rarr;[26.22](#pms)):

	+ `man tiruva fána cirya gear falastala` [MC/222]. *Who shall heed a white ship, while the sea is surging*. The common absolute construction serves as an adverbial modifier of time.
	{: .exp}
	
Adverbial modifiers operate on different 'levels' of the sentence:
{: .ref #{{chap}}}

+ The adverbial modifiers in examples ([39](#exp.39))-([44](#exp.44)) express such semantic categories as the place where, the time when, the circumstance(s) under which, the manner in which, the reasons because of which, etc., the action expressed by a predicate takes place. Adverbial modifiers functioning at this level (i.e. those which have scope over (the verb in) the core sentence) are often called **adjuncts**.

+ Adverbial modifiers may also have scope over a constituent only, modifying nouns,
attributive modifiers, other adverbial modifiers, etc. (such adverbial modifiers are called **subjuncts**):

	+ `yéni únótime ve rámar aldaron` [LotR/377]. *Long years numberless as the wings of trees*. The prepositional phrase `ve rámar aldaron` modifies `únótime` which itself is an attributive modifier with `yéni`.
	{: .exp}
	
+ Some other adverbial modifiers are, syntactically speaking, more detached, and have scope over the sentence as a whole, expressing the attitude of the speaker towards the reality or desirability of the content of his sentence, or his attitude towards the form or style of the sentence (such modifiers are often called **disjuncts**):

	+ `an cé mo querne cendele númenna, ve senya` [VT49/22]. *For if one turned the face westward, as was usual*. The phrase `ve senya` expresses the speaker's attitude towards the reality of the content of the sentence.
	{: .exp}
	
	+ `Melco mardello lende: márie` [MQ: LR/72]. *Melko has gone from Earth: it is good*. The idiomatic phrase `márie` expresses the speaker's attitude towards their utterance.
	{: .exp}
	
+ Finally, grammars typically recognize a fourth type of adverbial modifier, that of **conjuncts**, which indicate how one sentence or larger unit of text relates to its surrounding context,i.e. which play role in structuring a text; such forms are treated in this grammar as **connective discourse particles**, @@:

	+ <code><b>an</b> Varda maryat ortane <b>ar</b> hízie untúpa míri</code> [LotR/377]. *For Varda raised her hands, and mist covers jewels*.
	{: .exp}
	
	+ <code>ála·me tula úsactienna <b>mal</b> á·me etelecta ulcullo</code> [VT43/12]. *Lead us not into temptation, but deliver us from evil*.
	{: .exp}

## Noun Phrases ### {: #nps }

### Elements of the Noun Phrase

In most of the examples above, constituents take the form of a noun phrase. A **noun phrase** consists of (at least) a **head**, and (possibly) various kinds of **modifiers** which are added to the head.
{: .ref #{{chap}}}

For example, in each of the examples below, a noun phrase serves as object to a predicate:

+ `antanen` [`hatal`<span style="font-variant:small-caps;"><sub>head</sub></span>]<span style="font-variant:small-caps;"><sub>object</sub></span> `sena` [VT49/14]. *I cast a spear at him*.
{: .exp}

+ `man` [`i·`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `yulma`<span style="font-variant:small-caps;"><sub>head</sub></span>]<span style="font-variant:small-caps;"><sub>object</sub></span> `nin enquantuva` [LotR/377]. *Who will refill a cup for me?*
{: .exp}

+ `hízie untúpa` [`Calaciryo`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `míri`<span style="font-variant:small-caps;"><sub>head</sub></span>]<span style="font-variant:small-caps;"><sub>object</sub></span> [LotR/377]. *Mist covers the jewels of Calacirya*.
{: .exp}

Sometimes noun phrase can become quite long and nested:

+ `linte`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `yuldar`<span style="font-variant:small-caps;"><sub>head</sub></span> [`lisse`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `miruvóreva`<span style="font-variant:small-caps;"><sub>head</sub></span>]<span style="font-variant:small-caps;"><sub>modifier</sub></span> `mí oromardi Andúne pella Vardo nu luini tellumar`<span style="font-variant:small-caps;"><sub>modifier</sub></span> [LotR/377]. *Swift draughts of sweet nectar in the high halls beyond the West under blue domes of Varda*.
{: .exp} 

### Types of Modifier ### {: #tom }

The following types of modifier agree with the head in number (for the agreement in case, &rarr;[27.7](agr.md#hmr)):
{: .ref #{{chap}}}

+ **numerals**: ordinal numerals such as `minya` *first*, `attea` *second* (for details, &rarr;@@); among the ordinals may also be reckoned adjectives such as `jana` *other* and `ecsa` *other*, `enta` *another*, and several others;

+ **demonstrative**, **indefinite**, **interrogative**, and **possessive pronouns** (for details, &rarr;@@):

	+ `ávatyara mello` [`menye`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `roctar`<span style="font-variant:small-caps;"><sub>head</sub></span>]<span style="font-variant:small-caps;"><sub>noun phrase</sub></span> [*draft*: VT43/11]. *Forgive us our trespasses*. `menye` agrees with `roctar`.
	{: .exp}

+ **quantifiers**: certain adjectives indicating quantity, such as `nótima` *some*, *few*, `ilya` *every*, *each*:

	+ `i Eru i or` [`ilye`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `mahalmar`<span style="font-variant:small-caps;"><sub>head</sub></span>]<span style="font-variant:small-caps;"><sub>noun phrase</sub></span> [UT/305]. *The One who is above all thrones for ever*. `ilye` agrees with `mahalmar`.
	{: .exp}
	
	+ `tas cennen` [`nótimë`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `eldali`<span style="font-variant:small-caps;"><sub>head</sub></span>]<span style="font-variant:small-caps;"><sub>noun phrase</sub></span> [PE22/155]. *I saw a few elves there*.
	{: .exp}
	
+ **attributive genitive II**: noun phrases in the adjectival case act as quasi-adjectives (for details, &rarr;@@):

	+ `Valar ar Maiar fantaner nassentar fanainen ve` [`quenderinwe`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `coar ar larmar`<span style="font-variant:small-caps;"><sub>head</sub></span>]<span style="font-variant:small-caps;"><sub>noun phrase</sub></span> [PE17/174]. *Valar cloaked their true-being like to Elvish bodies and raiment*. `quenderinwe` agrees with `coar ar lamar`.
	{: .exp}
	
	+ `eldarinwe`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `leperi ar notessi`<span style="font-variant:small-caps;"><sub>head</sub></span> [VT47/4]. *The Elvish Fingers and Numerals*. `eldarinwe` agrees with `leperi ar notessi`.
	{: .exp}

	
+ (other) **adjectives** and **participles** (&rarr;@@):

	+ `luini`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `tellumar`<span style="font-variant:small-caps;"><sub>head</sub></span> [LotR/377]. *Blue domes*.
	{: .exp}
	
	+ `racine`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `tengui`<span style="font-variant:small-caps;"><sub>head</sub></span> [VT39/6]. *Stripped signs*.
	{: .exp}
	
!!! note
	In the noun phrase only one (typically, the last) element receives the case ending, for more details, &rarr;@@.
	
	For the relative ordering of such modifiers, particularly with respect to the article, &rarr;@@.
	
	Most of these pronouns and adjectives/participles may also have a predicative relationship with a noun, either as predicative complement (&rarr;[26.8](#lvpc) above) or as predicative modifier (&rarr;[26.22](#pms) below).
	
The following types of modifier do not agree with the head:
{: .ref #{{chap}}}

+ the **definite article** (for a full treatment, &rarr;@@);
+ numerals: **cardinal numbers** such as `min` *one*, `atta` *two* (for details, &rarr;@@);
+ noun phrases/pronouns in the **genitive I** very frequently serve as modifier in a noun phrase (for details, &rarr;@@):

	+ `savin` [`Elessarno`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `quetie`<span style="font-variant:small-caps;"><sub>head</sub></span>]<span style="font-variant:small-caps;"><sub>noun phrase</sub></span> [VT49/28]. *I believe the words of Aragorn*.
	{: .exp}

	+ `zindar` [`i`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `Eldar`<span style="font-variant:small-caps;"><sub>head</sub></span> `Malariando`<span style="font-variant:small-caps;"><sub>modifier</sub></span>]<span style="font-variant:small-caps;"><sub>noun phrase</sub></span> [PE21/77]. *Grey are the Elves of Beleriand*.
	{: .exp}
	
!!! note
	For the relative ordering of such genitives and the article (if present), &rarr;@@.
	
	In several uses, the genitive I may also be used as predicative complement, &rarr;@@.
	
+ **active participles**:

	+ `man cenuva menel acúna rucsal' ambonnar` [MC/222]. *Who shall see the heavens bending upon crumbling hills*.
	{: .exp}
	
+ **adverbs** or **prepositional phrases**:

	+ [`zindanoriello`<span style="font-variant:small-caps;"><sub>modifier</sub></span> `mornie`<span style="font-variant:small-caps;"><sub>head</sub></span>]<span style="font-variant:small-caps;"><sub>noun phrase</sub></span> `caita` [LotR/377]. *Out of a grey country darkness lies*.
	{: .exp}
	
	+ `linte` `yuldar`<span style="font-variant:small-caps;"><sub>head</sub></span> `mí oromardi`<span style="font-variant:small-caps;"><sub>modifier</sub></span> [RGEO/58]. *Swift draughts in lofty draughts*.
	{: .exp}
	
+ **relative clauses** (for a full treatment, @@).

### Types of Head

The head of a noun phrase is typically a noun, such as `yulma`; proper names also belong to this class:
{: .ref #{{chap}}}

+ `a aina María, arca atarme` [VT44/12]. *Holy Mary, pray for us*.
{: .exp}

+ `Elendil Vorondo voronwe` [UT/305]. *Of the faith of Elendil the Faithful*.
{: .exp}

Most of the kinds of modifiers listed above (&rarr;[26.16-17](#tom)) may also serve as head, however, particularly when they are modified by the article (&rarr;@@):
{: .ref #{{chap}}}

+ **adjectives** and **participles**; sometimes with the article, sometimes with other modifiers as well:

	+ `a vanima, vanimálion nostari` [LotR/981]. *O beautiful ones, parents of beautiful children*.
	{: .exp}
	
	+ `ilyain antalto annar lestanen Ilúvatáren` [MQ: LR/72]. *To all they gave in measure the gifts of Ilúvatar*.
	{: .exp}

	+ `nactana ló Túrin` [VT49/24]. *Slain by Turin*.
	{: .exp}
	
!!! note
	If participle had dependent words, the relative clause would be used in its stead:
	
	+ `nai tiruvantes i hárar mahalmassen mi Númen` [UT/305]. *May those who sit upon thrones of the West keep watch over it*.
	{: .exp}
	
	+ `i carir quettar ómainen` [WJ/391] *Those who form words with voices*.
	{: .exp}
	
!!! tip "Assumption"
	+ **attributive genitives**, **adverbs** and **prepositional phrases**; always with the article:
	
		+ `ralá'n Ingaráno'n Ingaranna, mal i·Eruo'n Erunna` *Render to Caesar the things that are Caesar's; and to God the things that are God's*.
		{: .exp}
	
#### Pronominal and Adnominal Use of Pronouns, Quantifiers and Cardinal Numerals

In addition to the types of head treated above, various **pronouns** and **quantifiers** and (occasionally) **cardinal numerals** can serve as head. For these forms, a distinction is made between:
{: .ref #{{chap}}}

+ the **pronominal use**, when the pronoun/quantifier serves as head;
+ the **adnominal use**, when the pronoun/quantifier serves as modifier.

In the pronominal use, such forms typically cannot be modified by the article or other modifiers (there are exceptions, however); in other words, such pronouns/quantifiers then function as noun phrases **by themselves**:

+ `lumbule unduláve ilye tier` [RGEO/59]. *Shadow swallowed all roads*. Adnominal use.
{: .exp}
+ `arimelda ilyaron` [PE17/57]. *Dearest of all*. Pronominal use.
{: .exp}

!!! note
	Personal, reflexive and reciprocal pronouns are used only pronominally (&rarr;@@).
	
	For so-called 'autonomous' relative clauses (i.e. relative clauses serving as noun phrases by themselves), @@.
	
### Apposition ### {: #app }

Apposition is the placement of two words or word groups parallel to each other without any coordinating particle (`ta` or `ar`, @@), with one, the 'appositive' defining or modifying the other. In this way, two noun phrases (each with their own head), may together serve as a single constituent:
{: .ref #{{chap}}}

+ `aistana` [`i` `yáve`<span style="font-variant:small-caps;"><sub>head</sub></span> `mónalyo`] [`Yésus`]<span style="font-variant:small-caps;"><sub>head</sub></span> [VT43/31]. *Blessed is the fruit of thy womb Jesus*. The combined phrase `i yáve mónalyo Yésus` is a subject.
{: .exp}

+ [`Elainen`<span style="font-variant:small-caps;"><sub>head</sub></span>] [`tárin`<span style="font-variant:small-caps;"><sub>head</sub></span> `Periandion`] `ar` [`meldenya`<span style="font-variant:small-caps;"><sub>head</sub></span> `anyáran`] [VT49/40]. *To Elaine, queen of Hobbits and my very old friend*. The whole quote is a combined phrase serving as an indirect object.
{: .exp}

For agreement in apposition, &rarr;[27.15-16](agr.md#app).

## Predicative Modifiers ## {: #pms }

Some constituents simultaneously serve as adverbial modifier and to modify the head of a noun phrase. Such constituents are called **predicative modifiers**: they occur in the form of adjectives and especially participles, which agree with their noun in case. For example:
{: .ref #{{chap}}}

+ `ampanaina i·már ga·tatallane·s` [MQ: PE22/108]. *While it was being built people marveled at the house*. The participle `ampanaina` agrees with the subject `i·már`: it describes the house. At the same time, it serves as an adverbial modifier, describing the circumstances/time of occurence.
{: .exp}


+ `man hlaruva carcar yarra izilme ilcalasse` [MC/222]. *Who shall hear the rocks snarling in the moon gleaming?* The participle `ilcalasse` agrees with `izilme`; it describes the moon. At the same time, it serves as an adverbial modifier, describing the circumstances/time of rocks’ snarling.
{: .exp}

!!! note
	For this so-called 'circumstantial' use of the participle in, @@.
	
	For the position of predicative modifiers relative to their head and the article (if present), &rarr;@@.

## Elements Interrupting or Outside the Syntax of a Sentence

### Parentheses

Sentences may be interrupted by other sentences &mdash; **parentheses**. These are often relatively short, and frequently contain some form of comment, as in:
{: .ref #{{chap}}}

+ <code>lá caritas, <b>navin</b>, alasaila ná</code> [PE22/154]. *Not doing this would be, I think, unwise*.
{: .exp}

+ <code>á zac' i·fende, <b>mecin</b></code> [PE22/166]. *Close the door, please*.
{: .exp}

### Elements 'Outside' the Syntax of a Sentence

Some elements stand 'outside' the sentence, i.e. they are not part of the syntactic structure of predicates, complements and modifiers. The most important of these are:
{: .ref #{{chap}}}

+ **forms of address** (&rarr;@@):

	+ `a Aina Faire, Eru órava o·messë` [VT44/15]. *God, the Holy Spirit, have mercy on us*.
	{: .exp}

+ **exclamations**, **interjections**, etc. (also, in answers, `ná` *yes*):

	+ `mal á·me etelecta ulcullo: násie` [VT43/23]. *But deliver us from evil: Amen*.
	{: .exp}

	+ `Arwen vanimelda, namárie` [LotR/352]. *Arwen beautiful and beloved, farewell*.
	{: .exp}

	+ `e man antaváro` [MQ: LR/63]. *What will he give indeed?*
	{: .exp}