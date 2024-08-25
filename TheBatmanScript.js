async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("There is no open chat.")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
THE BATMAN
by Matt Reeves & Peter Craig
BLACK SCREEN
[The quiet hum of CITY TRAFFIC and DISTANT SIRENS, with the strains of AVE MARIA playing softly underneath. A MASSIVE RED TITLE POPS IN:]
["THE BATMAN"]
[HOLD; then SMASH OUT OF THE BLACKNESS TO REVEAL --]
AN OUT OF FOCUS BINOCULAR POV - DUSK
[Gradually, we make out something unnerving, right beside us: SOMEONE BREATHING... We FOCUS, SEARCHING THE FACADE OF AN OPULENT TOWNHOUSE ... The BREATHING SUDDENLY QUIETS as a SHAPE APPEARS IN A WINDOW -- a LITTLE RED NINJA gazes out, clutching a small sword. The ninja spins, brandishing the sword as TWO SHAPES enter behind him -- a WOMAN, late 30s, dressed as a WITCH -- and a MAN, late 50s, in a WELL-CUT SUIT.]
[The little ninja rushes in, "stabbing" the Man, who collapses melodramatically. The Woman smiles -- speaks to the ninja, and he grabs a PUMPKIN CANDY BUCKET as they start to exit. The Man sits up, yells after them; the ninja runs back for a hug. Finally, the ninja and Woman exit, LEAVING THE MAN ALONE. He grows SOBER. As the Man pulls himself up, the BREATHING BESIDE US RESUMES...]
INT. OPULENT TOWNHOUSE - DIMLY-LIGHTED STUDY - NIGHT
TV Announcer: --a dark and stormy Halloween.
[In the light of the flickering TV, we see now the Man is handsome, distinguished. He stands, sipping scotch, watching THE NEWS; a CHYRON reads, "GOTHAM MAYORAL RACE":]
Female News Anchor: Good evening, and welcome to GC1 News Live. Our top story tonight: Just released polls have incumbent Mayor Don Mitchell Jr. and 28-year-old grassroots challenger Bella Réal in a dead heat.
Male News Anchor: Things certainly got hot last night in their final debate before next Tuesday's election.
[As the Man anxiously watches the DEBATE CLIP, we realize: he is MAYOR MITCHELL; his female challenger, BELLA REAL, young, intelligent, a force of nature, shares the stage --]
Don Mitchell Jr.: (On TV) Now, my young opponent here wants to gut the Gotham Renewal program, established by the great Thomas Wayne, cutting funds from vibrant projects like our Sea Wall, and the safety net for those who need it.
Bella Réal: (On TV) The Renewal program is broken. This city's been renewing for twenty years, look where it's gotten us! Crime has skyrocketed, murder and drug use are at historic highs, and we have a masked vigilante running the streets.
Don Mitchell Jr.: (On TV) Under my administration, the Gotham PD has dealt major blows to organized crime and drug trafficking. The Salvatore Maroni case was the biggest drug bust in city history--
Bella Réal: (On TV) But drops and other drugs are still rampant!
Don Mitchell Jr.: (On TV) I'm not saying--
Bella Réal: (On TV) It's gotten worse!
Don Mitchell Jr.: (On TV) I'm not saying there isn't work to do, but listen: I have a beautiful wife and a young son, and I will not rest--
[Mitchell turns, startled, as a PHONE RINGS. As he EXITS FRAME to answer, we STAY on a DARK HALL BEHIND THE STUDY -- on the wall by the doorway, we see a framed headline: "MARONI DRUG BUST! MAYOR'S STING OPERATION HISTORIC".]
[As the TV brightens, we SEE for the first time, SOMEONE IS IN THE HALL. B a rely visible, the Figure wears a DARK, OLIVE GREEN HOOD -- a homemade executioner's mask, with PRESCRIPTION AVIATOR GLASSES bizarrely outside the hood.]
Don Mitchell Jr.: Hey. Yeah, I'm watching it now.
[As Mitchell PACES IN AND OUT OF FRAME, the Figure's hooded head ominously tracks him...]
Don Mitchell Jr.: Why is she still tied? But... But I thought we were getting a bump in the new post poll. Alright, y-you know what? I can't-- I can't watch this any more, just call me in the morning, okay?
[We HEAR the phone hang up, and Mitchell RE-ENTERS FRAME, agitated. He stands there, drink in hand; starts to sip.]
Don Mitchell Jr.: (On TV) --who still believes in everything this city can do.
Bella Réal: (On TV) We need a leader, Mr. Mitchell, not a cheerleader. And someone who will tell the people the truth!
[THE FIGURE LURCHES OUT THE DARK -- FRANTICALLY CLUBBING HIM OVER AND OVER -- suddenly, the WEAPON SLIPS LOOSE -­ it SKITTERS right at us and STOPS. A GLEAMING METAL TOOL. Whatever it is, it's WET with blood. The Figure turns, PANTING, rises off the motionless victim, trudges over to us... A GLOVED HAND retrieves the strange weapon.]
[The Figure walks back, regarding the victim for a long, creepy moment... then stretches its arms as far as they will go, LOUDLY UNSPOOLING a LONG PIECE OF SILVER DUCT TAPE... And with a LOW RUMBLE OF THUNDER, we SLAM INTO --]
[BLACKNESS AGAIN...]
[We HEAR PATTERING RAIN as a HYPNOTIC VOICE OVER begins:]
Bruce Wayne: (Voiceover) Thursday. October 31st.
[A GAS ARC BULB BURNS to life... glowing BRIGHTER... BRIGHTER... REVEALING: We're INSIDE A SEARCHLIGHT...]
XT. ROOFTOP - ON THE RUSTED SEARCHLIGHT - NIGHT
[As the LIGHT INTENSIFIES -- RAINDROPS ILLUMINATE BEATING and DANCING CHAOTICALLY on the hot lens --]
XT. RAINY GOTHAM STREETS - HIGH ANGLE - NIGHT
[A bacchanalian Times Square vibe. COSTUMED HALLOWEEN REVELERS swarm wet sidewalks in the glow of NEON and LED.]
Bruce Wayne: (Voiceover) The city streets are crowded for the holiday. even with the rain.
[MOVING POV - ON THE SIDEWALK We PUSH INTO the sea of COSPLAYERS, CLOBBERS, TOURISTS...]
Bruce Wayne: (Voiceover) Hidden in the chaos is the aliment, waiting to strike like snakes.
[A MALE FIGURE suddenly ENTERS FRAME --]
Bruce Wayne: (Voiceover) But I'm there, too. Watching.
[FOLLOW FROM BEHIND as he WALKS in ARMY JACKET, KNIT CAP, a DUFFEL on his shoulder. He looks like a DRIFTER...]
[SUPER-TIGHT ON THE DRIFTER'S INTENSE EYES AS HE WALKS...]
Bruce Wayne: (Voiceover) Two years of night have turned me into a nocturnal animal.
EXT. BODEGA - MOVING POV TOWARD THE WINDOW - NIGHT
[PEER IN at the few COSTUMED SHOPPERS inside; a GUY in a HOODIE and CRUDE GREEN SAD CLOWN MASK steps to the counter--]
Bruce Wayne: (Voiceover) I must choose my targets carefully.
[INSIDE]
[The Robber NERVOUSLY PULLS A GUN on the CASHIER!]
Robber: C'mon! Give me the money!
Cashier: Okay!
Robber: Let's go, let's go!
Cashier: Alright, alright!
EXT. COLOSSAL GOTHAM BANK - MOVING POV - NIGHT
[We SPY THREE VANDALS, SPRAY-PAINTING the huge pillars --]
Bruce: (Voiceover) It's a big city. I can't be everywhere.
[THE VANDALS wear GUY FAWKES MASKS -- one LIGHTS A MOLOTOV COCKTAIL -- HURLS IT, SHATTERING THE GLASS FRONT DOOR --]
INT. A SPEEDING ELEVATED TRAIN - LURKING POV - NIGHT
[WE PEER THROUGH the CONNECTING DOOR INTO THE CAR AHEAD where EIGHT GANG MEMBERS in SKULL FACE PAINT carouse --]
Bruce: (Voiceover) But they don't know where I am.
[THE CAR AHEAD]
[TIGHT ON THE VIDEO]
[THE GANG striding through a park -- ONE points at a RANDOM JOGGER -- ANOTHER responds, PUNCHING HIM OUT!]
Jokerz Member: Boom!
[THE GANG WATCHING THE CELLPHONE recoils with LAUGHTER -- when THE GANG LEADER notices a LONE PASSENGER rising as the TRAIN SLOWS. He turns to a YOUNGER MEMBER, nodding toward the Passenger with a menacing smile -- as the Young Member looks anxiously --]
EXT. A SHADOWY SPACE - NIGHT
[FINGERS QUICKLY SMEAR BLACK CAMO PAINT around fierce eyes, veiled in darkness -- as we spot THE DRIFTER'S ARMY DUFFLE on wet ground -- inside, we GLIMPSE THE BAT COWL!]
EXT. ROOFTOP - ON THE RUSTED SEARCHLIGHT - NIGHT
REVEAL A SILHOUETTED MAN beside the light, waiting..
Bruce: (Voiceover) We have a signal now, for when I'm needed. But when that light hits the sky, it's not just a call...
[He's perched atop an ABANDONED, HALF-BUILT SKYSCRAPER -­ THE BRIGHT BEAM REACHES UPWARDS, sparkling in the rain --]
Bruce: (Voiceover) It's a warning. To them.
OUTSIDE THE BODEGA
[Sad Emoji BOLTS OUT toward a DARK ALLEY -- when he spots TWO PEDESTRIANS GAPING UP AT THE SKY IN ALARM -- he slows, peering up to SEE -- THE BAT SIGNAL LOOMING!]
Bruce: (Voiceover) Fear... is a tool.
[Sad Emoji stops, panic dawning as he turns to the DARK ALLEY -- he backs away, into the street -- a CAR SKIDS, HITTING HIM!]
Taxi Driver: Are you outta your mind?! Watch where you're goin', drophead!
[He DROPS -- but fear lifts him, and he just keeps running -- the sounds of a HELICOPTER grow as we --]
EXT. COLOSSAL GOTHAM BANK - NIGHT
[ON A VANDAL -- hearing the copter, he peers up at -- A POLICE CHOPPER SOARING PAST THE BAT SIGNAL IN THE CLOUDS!]
Bruce: (Voiceover) They think I'm hiding in the shadows...
[He drops his spray can, startled as it CLATTERS! It rolls ominously under a DARK ARCHWAY -- he stares, chilled --]
Graffiti Artist: C'mon!
Bruce: (Voiceover) But I am the shadows.
[A SIREN APPROACHES -- the VANDAL SPINS -- joining the others as THEY FLEE -- we see the painted letters spell "BROKE!" on the pillars; behind, A FIRE RAGES in the building -- FLAMES RISE as a MENACING LOW RUMBLE BUILDS and with a STARTLING BURST of METALLIC SCREECHING, we --]
EXT. ELEVATED TRAIN PLATFORM - POURING RAIN - NIGHT
[The TRAIN SCREECHES TO A STOP -- our Lone Passenger emerges onto the deserted platform -- when he hears FOOTSTEPS and LAUGHTER behind -- he TURNS, startled.]
[The EIGHT SKULL FACED GANG MEMBERS are behind him. The Young Member stands coiled -- a haunted look in his eyes -- the others watch with PHONES raised, filming.]
Jokerz Leader: C'mon, c'mon.
[He hesitates, losing nerve -- and the Passenger BOLTS!]
Jokerz Leader: Get him! (to the young member) What are you doing?!
[The GANG PLOUGHS FORWARD KNOCKING the YOUNG MEMBER DOWN as they RACE PAST -- ! THEY POUNCE ON THE PASSENGER!]
Gotham Resident: Somebody, help me! Help! Help!
Jokerz Member: Where you goin', huh?!
Jokerz Leader: C'mon.
Jokerz Member: You can't move, huh?
[CLOSE ON THE YOUNG GANG MEMBER -- the TRAIN ROARING OFF beside him -- WHEN HE SPOTS THE BAT SIGNAL IN THE SKY! His EYES DART around -- AS SCREAMS APPROACH; he turns -- The LEADER YANKS the YOUNG MEMBER to his feet -- while the GROUP holds the PASSENGER -- a DREADFUL SILENCE settling over the station as the train roar recedes...]
Jokerz Leader: Now knock his ass out.
Jokerz Member: Showtime! Showtime, man! C'mon, do it, man!
[The Young Member stares, steeling himself WHEN -­]
[SLOW BOOTSTEPS ECHO from somewhere in the station -­ Everyone turns, looking anxiously around -- THE YOUNG MAN'S EYES STARE into a DARK VOID beneath an overhang THE OTHERS LOOK TOO -- AS -- CLICK... CLICK... CLICK...]
[A MASKED FIGURE SHROUDED IN BLACK APPEARS LIKE AN APPARITION FROM THE SHADOWS -- STEPPING INTO THE RAIN -- IT'S THE BATMAN.]
Jokerz Leader: You seeing this guy?
[Everyone stares, unnerved. The Leader smirks, sizing up what he assumes is just another Halloween costume --]
Jokerz Leader: The hell are you supposed to be?!
[THE LEADER raises his hands ready to fight -- but totally unprepared for this fight -- because -- BATMAN'S MOVEMENTS ARE INCONCEIVABLY BRUTAL AND FAST --]
[The LEADER SWINGS -- BATMAN SEIZES HIS ARM -- a martial artist's savage grace -- using his attacker's momentum to WRENCH HIM OFF BALANCE -- SNAPPING HIS ARM SICKENINGLY -­ THE LEADER SCREAMS -- as BATMAN SILENCES HIM AGAIN WITH A RAIN OF HEAD-SNAPPING JACKHAMMER PUNCHES IN THE FACE]
[And like that, the Leader is down, bleeding, moaning --]
[Batman kneels there for a long, scary beat, eyes veiled:]
The Batman: I'm vengeance.
Jokerz Member: Oh, shit. It's him...
[Batman looks up at the others, who gaze back, stunned -­ when a TRIO OF GANG MEMBERS RUSH HIM -- CHAOS -- as BATMAN DISPENSES WITH THEM ALL AT ONCE in a FLUID, BUT TOTALLY STREET-FIGHT REALISTIC ATTACK of KICKS and HARD FIST BLOWS -- BATMAN TAKES HITS TOO -- but his TERRIFYING SKILL keeps impact from landing -- HE'S LIKE A MACHINE]
[Panic rips through the gang -- the YOUNG MEMBER'S eyes widen as he SEES -- SOMEONE PULLING OUT A .38 SPECIAL --]
Young Jokerz Member: Hey, man--! Nonononono--!
[BATMAN SPINS -- SEEING THE GUN -- STARTS RIGHT FOR IT -­ THE GANG MEMBER OPENS FIRE! BATMAN FLINCHES as the BULLETS DISAPPEAR into his suit's BALLISTIC FIBER -- HE ADVANCES GRABBING THE MEMBER'S STILL-FIRING GUN ARM IN ONE HAND -- AND HIS THROAT IN THE OTHER --]
[AS THE GANG SCATTERS FROM THE BULLETS -- A BRIGHT BLUE TASER CURRENT ZAPS FROM BATMAN'S GLOVED FINGERS INTO THE GANG MEMBERS NECK! The Gang Member DROPS, CONVULSING!]
[Batman slowly lifts his head, looking for more comers... The few remaining on their feet gape -- frozen -- Batman watches -- as they BREAK INTO A RUN -- all -- EXCEPT -­ the Youngest Gang Member -- who hesitates briefly under Batman's stone-faced gaze -- in awe -- then, races off...]
[Batman looks down to discover the Passenger, knocked to the ground in the chaos; he RAISES HIS HANDS, terrified --]
Gotham Resident: Please don't hurt me...
[Batman just gazes strangely, cocking his head, taking a step slowly toward him -- the Passenger BRACES HIMSELF -­ as Batman PEERS DOWN at SOMETHING BESIDE THE PASSENGER'S HEAD -- a REFLECTION on the wet ground -- THE BAT SIGNAL! Batman LOOKS UP -- wondering how long it's been there --]
INT. MAYOR'S TOWNHOUSE - MOVING DOWN THE HALL - NIGHT
[FILLED WITH HUSHED COPS now; some turn as they NOTICE US, STARING WITH HARSH EDGE -- like what is he doing here?!]
[REVEAL BATMAN, striding, unfazed, led by LIEUTENANT JAMES GORDON, mid-40s -- the Man we saw by the Bat Signal]
AT THE ENTRANCE TO THE STUDY
[A UNIFORMED OFFICER steps into Batman's path -- ALARMED -­-]
Martinez: Whoa, whoa, whoa, whoa, whoa, whoa, whoa, whoa. Police action.
[Batman glares down at the Officer's hand on his chest -­-]
Gordon: He's with me, officer.
Martinez: Are you kidding me, sir? You're gonna let him in here?
Gordon: Martinez. Let him through.
[The Officer turns in disbelief; steps aside -­-]
Martinez: Goddamn freak…
THE STUDY
[MITCHELL lies dead, HEAD MUMMIFIED IN DUCT TAPE -- over his mouth in red it says: "NO MORE LIES". INVESTIGATORS TURN IN UTTER SHOCK at BATMAN APPROACHING WITH GORDON --]
Gordon: What do we know?
[The LEAD is rattled as Batman stares at the body -­-]
Gordon: Detective.
Lead Detective: Sorry, lieutenant. We got blunt force trauma. Lacerations on the head. He got hit a lot of times, and hard.
Gordon: All this blood was from his head?
Lead Detective: No.
[The Lead walks around, bumping into Batman.]
Lead Detective: Excuse me. Most of it's from his hand.
[CLOSE ON BATMAN staring, as the Detective LIFTS THE HAND INTO FRAME, SOFT FOCUS FOREGROUND -- showing GORDON--]
Lead Detective: Thumb was severed. Killer may have taken it as a trophy.
Batman: He was alive when it was cut off.
[Appalled, they turn to Batman, who stares at the hand -­-]
Batman: Ecchymosis, around the wound.
[He rises to survey the area. Thrown by the interruption, the Detective watches him go -- turns back to Gordon:]
Lead Detective: Security detail upstairs said the family was out trick-or-treating. The Mayor was up here alone. Killer may have come through the skylight.
[Batman sees a PHOTOGRAPHER flash a shot of BLOOD SPATTER on the FRAMED MARONI DRUG BUST HEADLINE on the wall -­ when Batman CLOCKS a FRESH GASH IN THE WOOD FLOOR (the spot where the strange metal tool landed in our opening).]
[He goes to examine it -- the PHOTOGRAPHER suddenly noticing -- it's a detail he obviously missed -- as soon as Batman rises -- he hustles over -- SNAPS A SHOT --]
Gordon: You said there was a card...
Forensic: Yeah.
[The Detective hands over AN ENVELOPE. Gordon pulls out a HALLMARK-STYLE HALLOWEEN CARD: a CREEPY SKELETON SMILES behind a WIDE-EYED OWL, tapping his shoulder --]
Gordon: "From your secret friend: Whoo? Haven't a clue? Let's play a game, just me and you."
[Batman peers, as Gordon reads the KILLER'S SCRAWL -­-]
Gordon: "What does a liar do when he's dead?"
[WEIRD SYMBOLS ARE ETCHED at the bottom -- Gordon pulls a PIECE OF PAPER from the envelope -- MORE WEIRD SYMBOLS --]
Forensic: There's a cipher, too.
Gordon: Any of this mean anything to you?
[Gordon pointedly shows Batman the envelope. Batman stares, struck -- but before he can speak --]
Pete Savage: What's goin' on here?
[Everyone turns to see COMMISSIONER PETE SAVAGE, mid-50s -­ appalled at the sight of Batman --]
Gordon: I asked him to come, Pete.
Savage: This is a crime scene! It's Mitchell, for chrissakes! I got the press downstairs! You know, I cut you a lot of slack, Jim, 'cause we got history, but this is way over the line!
[Gordon hands him the card; Savage reads in horror -­ when, he sees THE ENVELOPE -- where he -- and we -­ DISCOVER it's addressed: "TO THE BATMAN" --]
Savage: Wait. He's involved in this?
Gordon: No, he's not involved--
Savage: How do you know?! He's a goddamn vigilante! He could be a suspect! What are you doin' to me? We used to be partners!
Gordon: I'm just trying to find the connection, Pete!
Batman: "He lies still..."
[They turn -- to see Batman, eyes fixed on the body -­-]
Savage: 'Scuse me?
Gordon: (getting it, nodding) The riddle. "What does a liar do when he's dead? He lies still."
[Unnerved by all this, Savage looks bitterly at Batman --]
Savage: Oh, Jesus... This must be your favorite night of the year, huh, pal? Happy fuckin’ Halloween.
[AN OFFICER appears in the doorway --]
Martinez: Excuse me, commissioner? They're ready for your statement.
[Savage sighs, nods -- turns to Gordon, deadly serious --]
Savage: I want him outta here. Now!
Gordon: C'mon.
[And he leaves. As the POLICE ALL GLARE, Gordon starts to lead Batman out -- but Batman stops, spotting a small bloody footprint on the ground, about the size of a child's.]
Gordon: Yeah. Kid found him.
[Without his mask, we see now it's a TEN-YEAR-OLD BOY. We look through the doorway at him as he stares down, lost, surrounded by COPS.]
Female Detective: (to the boy) Was there anyone else in the house when you arrived?
[Finally, he LOOKS UP at us --]
[REVEAL BATMAN gazing back through the doorway. As MORE COPS BEGIN TO NOTICE HIM -- Gordon, beside him, WHISPERS:]
Gordon: We really gotta go, man.
[Batman stays a moment longer -- the aching, opening chords of NIRVANA'S "SOMETHING IN THE WAY" BEGIN; HOLD as Batman stares from somewhere under that mask... an unspoken connection to this newly fatherless boy...]
Savage: (prelap) Tonight, a son lost a father...
EXT. MAYOR'S MANSION - FRONT STEPS - PRE-DAWN
[A press conference; MITCHELL'S WIFE cries behind Savage --]
Savage: A wife lost a husband. And I lost a friend. Mayor Mitchell was a fighter for the city, and I will not rest until this killer is found. This was a truly senseless crime. And we are actively pursuing every investigative lead we have and hunt him down. I've spoken to the governor...
[As NIRVANA CONTINUES...]
DISTANT PERSPECTIVE ON THE PRESS CONFERENCE - SAME MOMENT
[An ENGINE PURRS; PULL BACK TO REVEAL we're LOOKING PAST A FIGURE -- THE DRIFTER. He watches from the shadows across the street on an old, unpainted CAFE RACER MOTORCYCLE; he pulls on a HELMET... CLOSE ON the dark, full face visor --]
Bruce: (voiceover) I wish I could say I'm making a difference. But I don't know.
EXT. GOTHAM - MOVING THROUGH THE STREETS - PRE-DAWN
[NIRVANA SWELLS as we CHASE the BIKE through LOWER GOTHAM; the PRESS CONFERENCE BLAZES on DECAYING JUMBOTRONS --]
Bruce: (voiceover) Murder. Robbery. Assault. Two years later, they're all up. And now this.
[-- PASSING TENT CITIES, HALTED CONSTRUCTION SITES UNDER SIGNS: "A GOTHAM RENEWAL PROJECT" -- PLASTERED OVER SOME ARE BELLA REAL CAMPAIGN BILLS: "TIME FOR A REAL CHANGE" --]
Bruce: (voiceover) This city's eating itself. Maybe it's beyond saving.
[-- ALONG ONE OF THE BRIDGES SPANNING THE ISLANDS OF GOTHAM -- SKYLINE BEHIND -- A MASSIVE SEA WALL BELOW --]
Bruce: (Voiceover) But I have to try. Push myself.
[-- UNTIL WE SOAR OVER THE BIKE AS IT TEARS THROUGH A ROLLING CITY PARK -- DOWN A NARROW ROAD -- DISAPPEARING INTO A TUNNEL UNDER A BEAUTIFUL, ARCHING BRIDGE -- WE TIP UP TOWARD THE DISTANCE, TO SEE IT'S HEADING TOWARD -- A GOTHIC 1920S BUILDING BELOW THE PARK: WAYNE TOWER --]
INT. NARROW, OLD TUNNEL - PRE-DAWN
[The bike rips down a secret passage from a bygone era -- INTO THE UNDERGROUND FOUNDATION OF WAYNE TOWER 26 The Drifter SKIDS to a stop, HUNDREDS OF CREATURES all along the rock ceiling STIR ANXIOUSLY TO LIFE -- BATS...]
Bruce: (voiceover) These nights all roll together in the rush, behind the mask.
[...as he removes his helmet -- and we finally SEE BRUCE WAYNE handsome, 30, black camo still around his eyes.]
[CUT TO:]
[SUPER TIGHT -- FINGERS REMOVING CONTACT LENSES -- ON THE CURVED SURFACE OF THE LENSES ARE TINY SENSOR BANDS --]
Bruce: (voiceover) Sometimes in the morning, I have to force myself to remember...
[CLOSE ON GRAINY VIDEO FOOTAGE -- the gang member from last night LOOKS AT US as he gets tased in the neck --]
Bruce: (voiceover) ...everything that happened.
[CLOSE ON A HANDWRITTEN JOURNAL -- PHRASES: "THURSDAY, OCT. 31" -- "NOCTURNAL ANIMAL" -- "PUSH MYSELF" -- a PEN FINISHES the entry -- as the journal shuts, we see THE COVER: "NOTES & OBSERVATIONS {GOTHAM PROJECT) YR. 2"]
REVEAL BRUCE - HIGH ANGLE OVER "THE CAVE" - EARLY MORNING
[NIRVANA ECHOES as Bruce REVIEWS FOOTAGE at a work bench in a giant boiler room turned survivalist chop shop -­ PROJECTS IN VARIOUS STATES, including A HALF-BUILT, BLACK MUSCLE CAR, both retro and like nothing we've ever seen. A TV plays GCl; the headline, "MAYOR MITCHELL MURDERED" below it: "ACTING MAYOR TOMLIN TO RUN IN HIS PLACE"]
Male News Anchor: Unbelievable breaking news this hour, everyone. Again, former incumbent Gotham Mayor, Don Mitchell Jr. was found murdered last night inside his home
Female News Anchor: Exact details of the crime have still not been released, but a citywide manhunt is already underway as they search for the brazen killer. And this certainly is not the first time Gotham has been robbed by the murder of a political figure. In fact, in an eerie coincidence, it was twenty years ago this week that celebrated billionaire philanthropist Doctor Thomas Wayne and his wife Martha were slain during Wayne's own mayoral campaign. It was a shocking crime that remains unsolved to this day. Don Mitchell Junior's political career was especially notable for his tough war on drugs when he and city police launched a major sting operation, resulting in the notorious mafia crime figure, Salvatore Maroni with what to this day remains the biggest drug bust in GCPD history. Mitchell is survived by his wife and ten year old son. Reactions to the crime continue to pour in...
[Bruce's eyes go to the TV; when from the FREIGHT ELEVATOR steps ALFRED, 50s, muscular, waistcoat and shirtsleeves -­ he walks on an elegant CANE, SCAR on his face, eyes on the TV -- seeing him, Bruce resumes work -- Alfred turns to Bruce -- an unspoken tension; Bruce avoids his gaze --]
Alfred Pennyworth: I assume you've heard about this.
Bruce: Yeah.
[Alfred suddenly notices the CONTACTS LENS MURDER SCENE FOOTAGE Bruce is hi-speeding through -- moves closer --]
Alfred: Oh, I see.
Forensic: (on the monitor) --it's from his hand.
Alfred: (off Mitchell's body) Dear god...
Forensic: (on the monitor) There's a cipher, too.
Gordon: (on the monitor) Any of this mean anything to you?
[As the CIPHER fills the screen, Alfred looks chilled -- as Bruce works --]
Alfred: The killer left this for the Batman?
Gordon: (on the monitor) I asked him to come, Pete.
Alfred: You're becoming quite the celebrity. Why's he writing to you?
Bruce: I don't know yet.
Alfred: Have a shower. Our accounting friends at Wayne Enterprises are coming for breakfast.
Bruce: Here? Why?
Alfred: Because I couldn't get you to go there!
Bruce: I haven't got time for this--
Alfred: It's getting serious, Bruce. If this continues, it won't be long before you've nothing left.
Bruce: I don't care about that. Any of that.
Alfred: You don't care about your family's legacy?
Bruce: What I'm doing is my family's legacy. I can't change things here. If I can't have an effect, I don't care what happens to me.
Alfred: That's what I'm afraid of.
Bruce: Alfred, stop. You're not my father.
Alfred: I'm well aware.
[Bruce rises -- Alfred watches him go, pained. Then turns to the computer, seeing THUMBNAILS from the lens footage; one is THE BOY IN NINJA COSTUME. He clicks it; the boy looks up, sad. Alfred stares, deeply affected.]
[Alfred's eyes drift to the PRINTED CIPHER. His gaze fixes on words Bruce has written above the eerie symbols in the Halloween card: "HE LIES STILL" . . .]
Gordon: (on the monitor) We really gotta go, man.
INT. WAYNE TOWER - GRAND FOYER - MOVING - MORNING
[Atop the staircase, we start on a SET OF DOUBLE DOORS a THICK CHAIN coiled crudely through the handles, a PADLOCK sealing us off from whatever is beyond -- Bruce moves past, down stairs, wet hair, pulling on a t-shirt muscular but underweight like a rock star -- a street fighter's scars and bruises -- MOVE with him, through the apartment's hotel-like scale -- and neglect that has left dirt and disrepair over former grandeur -- he ENTERS --]
THE DINING ROOM
[-- to find Alfred at the table, irranersed in what looks like a crossword -- without looking up, Alfred points --]
Alfred: There's some fresh berries there.
[Bruce squints, unaccustomed to morning; grabbing berries, he pulls out sunglasses -- when he sees Alfred's working on the CIPHER; Alfred's interest breaks the ice --]
Bruce: What are you doing?
Alfred: Just reminiscing about my days in the Circus. This is actually quite elusive.
Bruce: Where'd you get those o's?
Alfred: "He lies still" is only a partial key. He only gives us "h, e, i, s," and "t", so I'm looking for any double symbols to start, trying letters... See where it leads.
Bruce: That's interesting.
[An ELDERLY MAID appears in the doorway--]
Dory: Mr. Pennyworth?
Alfred: Yes, Dory?
Dory: The accountants are here.
[Alfred discreetly closes his newspaper over the cipher--]
Alfred: See them in, please, Dory.
[We prelap:]
Bruce: What if it's not a partial key?
Alfred: What do you mean?
Bruce: What if this is the whole key? Isolate the symbols we don't have letters for. Use only the letters for "he lies still", leave the rest--
Alfred: Blank, yeah, yeah, I understand. But that would leave most of the cypher unsolved, I don't see how that's gonna-- Oh.
[They gaze at THE LAPTOP: most of the cipher is now blank, but the remaining letters line up like connect-the-dots to form A SINGLE HUGE WORD across the page: "DRIVE".]
INT. MAYOR'S MANSION - FREIGHT ELEVATOR - NIGHT
[Batman and Gordon descend in DARKNESS -- after a beat, Gordon steals a look, studying the visible part of Batman's face -- Batman feels it, turns -- Gordon looks away -- they stare forward again as the DOORS OPEN to --]
[A SUBTERRANEAN GARAGE FILLED WITH PRICELESS EXOTIC CARS --]
[They walk out, scanning the maze of stunning vehicles...]
Gordon: Damn. Yeah, he's got a car. I guess it's good to be the mayor. Where do we even start? You sure this isn't a leap? "Drive" could mean anything.
Batman: You don't trust me?
Gordon: You mean like you trust me? It's been two years now, and I don't even know who you are, man.
Batman: There.
[Gordon looks at an ASTON DB11: one of the tires is flat. They approach. Batman kneels, pulling a PAIR OF POULTRY SHEARS out of the tire -- they're COVERED IN DRIED BLOOD.]
INSIDE THE DB11
[Batman turns on a UV LIGHT BAR searching the console --]
Gordon: What are we looking for?
Batman: USB port.
Gordon: USB?
[Batman stops, struck. Looks at Gordon, who can't see inside the console -- then looks back --]
Gordon: What?
[Batman pulls out a KEY RING USB DRIVE -- attached to it, in a little clear plastic bag, is a SEVERED THUMB...]
Batman: Thumb. Drive.
Gordon: Jesus.
OUTSIDE THE ASTON DB11 - SECONDS LATER
They stare at Gordon's field laptop as it BEEPS --
Gordon: It's encrypted.
Batman: Try this.
[Gordon turns... Batman holds up THE BAG WITH THE SEVERED presses the thumb to the drive -- it OPENS --]
Gordon: Oh, this guy's hilarious...
[SURVEILLANCE PHOTOS pop up: Mayor Mitchell exiting a seedy nightclub with a TWENTY-TWO YEAR OLD IN CLUBWEAR, headed for his Aston DBll, a black eye visible under the Woman's sunglasses; behind them follow UNSAVORY TYPES, a gangster vibe -- one wears a STREET-STYLED, STRIPED TUX --]
Gordon: Oh, well, well, well. So much for family values.
Batman: Who is she?
Gordon: No idea. But that's the Penguin. Carmine Falcone's right hand.
Batman: I know who he is.
[When -- a WHOOSH! sound suddenly emits from the laptop!]
Gordon: What was that? (clicking windows) Shit. Shit, shit! The drive. It sent out photos from my account! Gotham Post, Gazette, GC1, all of 'em. Jesus. I'm gonna catch hell for this, Pete's gonna bust a gasket.
Batman: (looks at photos) "He lies still." About her?
Gordon: Maybe. That's the Iceberg Lounge. It's under the shoreline loss, where Falcone's holed up. Never get in there without a warrant...
Batman: Yeah.
EXT. ICEBERG LOUNGE NIGHTCLUB - MOVING SHOT - NIGHT
[PUSHING toward a deserted warehouse -- a nondescript door in the facade; a LONE SODIUM STREETLAMP FLICKERS, illuminating an old sign: ICEBERG FISH CO -- as BAT BOOTS CLICK purposefully into frame --]
[BLACKNESS]
[SWINGS OPEN to reveal Batman in shadow; CLUB MUSIC booms:]
Batman: You know who I am?
[A HUGE BOUNCER'S eyes give the Bat Suit the once over -­-]
Bouncer: Yeah. I got an idea.
Batman: I wanna see the Penguin.
Bouncer: I dunno what you're talking about, pal.
[Batman just stares. The Bouncer shuts the door. A beat, then it opens again. Now there are two of them -- TWINS.]
Identical Twin Bouncer: What's the problem?
Bouncer: He says he wants to see the Penguin.
Identical Twin Bouncer: The Penguin? There ain't no penguin here.
Bouncer: That's what I tried to tell him.
Identical Twin Bouncer: Get outta here, freak. You hear me? Or that little suit's gonna get all full of blood.
[Batman remains eerily still.]
Batman: Mine, or yours?
[The Twin LUNGES -- blind-sided by Batman's VICIOUS ELBOW STRIKE -- the other Twin CHARGES -- his throat meets the HEEL OF BATMAN'S PALM -- and just like that, WE'RE--]
FOLLOWING BATMAN INSIDE (IN A CONTINUOUS HAND-HELD SHOT)
Clubgoer: I saw that whole thing, I'm gonna call the cops! What is your problem?!
[MUSIC THROBS as we plunge down A CORRIDOR -- CIRCLING BATMAN -- BEHIND HIM we see THE TWINS staggering back in -- SCREAMING to alert MORE BOUNCERS -- who SCRAMBLE as -­ Batman emerges onto the landing above the club -- strobe lights reveal glimpses of SHOWGIRLS ABOVE A DANCE FLOOR--]
[Batman starts downstairs -- when the BOUNCERS POUNCE -- A MARTIAL ARTS BRAWL ERUPTING as they descend -- Batman taking on TWO AT A TIME CRACKING HEADS ON RAILINGS until he LEAPS OVER ONE -- dropping a full story!]
[-- Batman spots ANOTHER BOUNCER with an ALUMINUM BAT who SWINGS -- Batman STEPS IN FAST -- THROWING AN ELBOW TWISTING THE BAT FREE -- DROPPING THE BOUNCER HARD --]
[A MUSTACHED BOUNCER PULLS A GUN --]
Kenzie: Hey! Put the bat down, or I'll blow your head off!
[BATMAN TWIRLS THE BAT under STROBE LIGHTS -- MUSTACHE FIRES -- BULLETS PING OFF THE BAT -- BATMAN LETS IT FLY -- KNOCKING MUSTACHE OUT!]
[BATMAN SEES THE TWINS -- BACK AGAIN -- ONE HAS A SHOTGUN -- CLOBBERS SHRIEK -- AS BATMAN TRIGGERS A QUICK-DRAW SLIDER ON HIS ARM -- WHIPPING A HARPOON GUN TO HIS FIST -­ FIRING THROUGH THE GUNMAN'S LEGS INTO HIS BROTHER'S FOOT BEHIND HIM -- THE LINE RETRACTS -- YANKING HIM FORWARD UPENDING THEM BOTH -- the GUN FIRES into the ceiling!]
[The club in TOTAL CHAOS now -- when SOMEONE comes up behind -- BATMAN SPINS, ready for more -- TO SEE A MAN WITH A MISSHAPED NOSE IN A STRIPED TUX AND LAVENDER BOW TIE -- he puts his hands up -- grinning -- in awe --]
Oswald Cobblepot: Whoa, whoa, whoa, whoa! Take it easy, sweetheart! You looking for me? I see you met the twins. Boy, you're everything they say, ain'tcha? (smiles big, flashing a shiny gold tooth) I guess we both are. How you doin'? I'm Oz.
[He hobbles closer on a CLUBBED FOOT -- sticks out a hand to shake -- Batman doesn't return the gesture --]
INT. DIM CLUB DRESSING ROOM/BACKROOM OFFICE ARE A - NIGHT
[At a desk enclosed by racks of showgirl costumes, Penguin looks at THE PHOTO OF THE TWENTY-TWO YEAR OLD AND MAYOR --]
Batman: Who is she?
Cobblepot: I really don't know, chief. I might've been coming out at the same time, but I wasn't rolling with 'em.
[FOOTSTEPS interrupt -- through a gap in costumes, Batman spies A FIGURE IN A HIGH-SLIT EVENING GOWN -- a STUNNING WOMAN appears streetwise vibe. She stops, uneasy --]
Cobblepot: It's okay, baby. Mister Vengeance here, he, uh... He don't bite. C'mon.
[She hesitates, eyes on Batman; then saunters to Penguin, sets down a drink tray --]
Cobblepot: Thank you, honey.
[He lifts AN ENVELOPE OF CASH off the tray -- Batman watches him hand the Woman A RUBBER-BANDED CLUSTER OF VIALS WITH EYE-DROPPERS -- a.k.a. "DROPS" -- the Woman turns to go, but stops, struck, as she sees THE PHOTO -­ her eyes briefly meet Batman's -- then she heads out -- Penguin hands Batman the photo--]
Cobblepot: Here you go, champ.
Batman: I wanna know who she is. And what she has to do with this murder.
Cobblepot: Whose murder?
Batman: The mayor's.
Cobblepot: Wait, the mayor...? Oh, shit, it is, look at that!
[Batman YANKS HIM from his seat, SLAMS HIM INTO A MIRROR!]
Batman: Don't make me hurt you.
Cobblepot: You better watch it. You know my reputation?
Batman: Yeah. I do. Do you?
[Anger flares suddenly in Penguin's eyes -- a nerve struck. Finally, he pushes it down, smiling, evasive.]
Cobblepot: Look. I'm just a proprietor, okay? I mean, what people do here... it ain't got nothing to do with me.
[Batman senses something in the mirror -- he turns -- to see the Woman in the Evening Gown still watching through the doorway in the distance -- she disappears again --]
Cobblepot: I'll tell you one thing...
[Batman turns back --]
Cobblepot: Whoever she is, she's one hot chick. (smiles cruelly) Why don't you ask Mitchell's wife, maybe she knows? (off Batman's look) What, too soon?
[Batman looks at the photo again -- spots an Evening Gown in the b.g. -- face in shadow, but there's no mistaking that dress -- as Batman moves for the empty doorway --]
Cobblepot: Let me know if there's anything else I can do!
EXT. ICEBERG LOUNGE NIGHTCLUB - POURING RAIN NOW - LATER
[The Woman emerges in a coat, looking anxiously for a cab under the FLICKERING STREET LAMP --]
Selina Kyle: Taxi! Taxi!
[She flags down a NAVY GYPSY CAB -- hand-painted on the door: "We're Not Yellow -- We Go Anywhere". She gets in. PAN with the cab as it speeds off... right by a HELMETED MOTORCYCLIST -- THE DRIFTER. ]
INT. NAVY BLUE GYPSY CAB - BACKSEAT - LATE NIGHT
[The Woman on her cell speaks low as someone picks up:]
Selina: Hey, it's me. Baby, what's wrong? Whoa, whoa, whoa, slow down, slow down, I can't-- On the news? Okay--, no, no, st-- Stay there. Wait for me, okay? Wait for me, I'm on my way home. Listen. Baby, we're gonna get the hell out of here, I promise. If we-- If we have to leave earlier, we'll leave tonight. I-- Goddammit.
[HOLD on her worried face as FOCUS DRIFTS through the rear window to REVEAL THE HELMETED DRIFTER, FOLLOWING HER...]
EXT. RUN-DOWN, EAST END APARTMENT - BINOCULAR POV - NIGHT
[QUIET BREATHING as BINOCULARS SEARCH THE FACADE -- LIGHTS COME ON IN THE SE C OND STORY -- THE WOMAN, entering HER APARTMENT -- CATS SWARM HER as she rushes to THE KITCHEN -- finding a YOUNG WOMAN WITH A BRUISED FACE, eyes on the TV -- who grows hysterical, gesturing to the PHOTOS OF THE MAYOR AND THE TWENTY-TWO YEAR OLD playing on GCl -- and as the Woman in the Gown tries to calm her, we see: THE BRUISED YOUNG WOMAN IS THE TWENTY-TWO YEAR OLD --]
[REVEAL THE DRIFTER (BRUCE HIDDEN IN CAP AND ARMY JACKET) -- watching through binoculars FROM A NEARBY ROOFTOP --]
THE BINOCULAR POV
[FOLLOWS the Woman in Evening Gown to a BATHROOM; she opens a cabinet, getting PILLS -- then rushes back to THE KITCHEN -- distraught, the Bruised Woman takes them -­ the Woman in Gown caresses her head -- the Bruised Woman pushes her away, inconsolable. The Woman in Gown stands, at a loss. Then, resolve building, marches off -­ BINOCULARS FOLLOWING as she -- and all her cats -- head into a BEDROOM -- where she stealthily shuts the door -­ we watch IN SILHOUETTE as she slips out of her dress... and begins sliding into A SKIN-TIGHT, BLACK LEATHER BODYSUIT... as her cats nuzzle against her legs...]
[THE DRIFTER GAZES, STRUCK BY THE SIGHT OF THE WOMAN, AS --]
[THE "CATWOMAN"]
[climbs nimbly out to the fire escape -- swinging like an acrobat to the ground below; she ducks into the garage --]
[THE DRIFTER LOWERS THE GLASSES, ALARMED HE'LL LOSE HER --]
EXT. EAST END APARTMENT - GARAGE FRONT - MOMENTS LATER
A BLACK SPORT BIKE appears -- THE HELMETED CATWOMAN ROARS onto the street -- PAST THE DRIFTER getting on his bike --
EXT. GOTHAM STREETS - MOVING SUPER FAST - NIGHT
[THROTTLING HARD through traffic to keep CATWOMAN in sight as she WEAVES in and out of view a hundred feet ahead -- SLALOMING CARS -- THE DRIFTER RACES JUST TO KEEP PACE!]
INT. MAYOR'S MANSION - LOOKING UP AT SKYLIGHT - NIGHT
A FIGURE LOWERS GRACEFULLY on a rope -- THE CATWOMAN --
INT. MAYOR'S MANSION - STUDY - THE CRIME SCENE - NIGHT
She prowls, a BLACK MOTORCYCLE WIND MASK over her face finds A WALL SAFE -- working tumblers till... it's open --
Batman: You're pretty good at that.
[She turns to see BATMAN IN SHADOW -- she GRABS SOMETHING FROM THE SAFE -- BREAKS for the door -- he STALKS AFTER, GRABS her -- she SPINS, SWINGING A VICIOUS ROUNDHOUSE -­ surprised, he RECOILS, blocking BLINDING KICK AFTER KICK with raised arms -- SHE'S REALLY GODDAMN GOOD!
[Her BRUTAL ASSAULT drives him back -- when suddenly -- he TWISTS, GRABBING HER LEG -- they CRASH over the desk and suddenly she's on her back -- he reaches down -­ SNATCHING whatever she stole -- an ESTONIAN PASSPORT--]
Selina: Hey! Gimme that--
[Batman opens it: it belongs to THE TWENTY-TWO YEAR OLD --]
Batman: "Consula, Annika". He hurt her? That's why you killed him?
Selina: What? Hol-- Just gimme the goddamn--!
[She LUNGES for the passport -- as Batman WRAPS AROUND HER -- pulling her down BEHIND THE DESK -- she's bewildered -­ when she sees A FLASHLIGHT spilling through the doorway -­ it's A SECURITY COP arriving to investigate the noise... he scans the scene -- as they wait, bodies pressed close - - her eyes swim as Batman holds her... Satisfied, the Cop leaves -- Catwoman shrugs Batman off, hard -- standing --]
Selina: Listen, honey. You got the wrong idea, okay? I didn't kill anybody. I'm here for my friend. She's trying to get the hell out of here, and this sonuvabitch stole her passport.
Batman: What does she know?
Selina: Whatever it is, it's got her so spooked that she won't even tell me.
Batman: (wry) She did seem upset.
[She looks at him, confused. He stares back, provocative:]
Batman: Back at your place.
[She can't believe it: He was there...?]
Batman: Let's go talk to her.
[Finally, he offers the passport... She glares at it...]
INT. SELINA'S APARTMENT - NIGHT
[THE PLACE HAS BEEN RANSACKED -- Batman and Catwoman enter distraught, she rushes deeper into the apartment--]
Selina: Anni?! Baby?! Anni! Anni?!
[Batman examines the scene -- hears the TV -- moves to --]
THE DIM KITCHEN
[-- sees UNPAID BILLS on the counter -- picks one up, sees the name: SELINA KYLE -- when the TV steals his attention -- THE GCl HEADLINE: "SERIAL KILLER CLAIMS CREDIT FOR SECOND VICTIM IN TWO DAYS -- GCPD COMMISSIONER MURDERED"]
Male News Anchor: More Breaking News this hour as the city is rocked by second high-profile murder in as many nights, and this time, the killer has come forward to claim credit online--
[Catwoman comes in, now deeply rattled -- guilty --]
Selina: Jesus, what are they gonna do to her? She's just a kid... Shit, they took my phone.
[-- she notices Batman grimly staring, turns to THE TV --]
Female News Anchor: His victim, longtime head of the Gotham PD, Commissioner Pete Savage, was found dead earlier tonight inside the Police Athletic Facilities in the Tri-State Corner Area. The killer posted the following message on social media, and we have to warn you, the video is very disturbing.
[A HAND-HELD VIDEO begins -- a SELFIE of THE OLIVE GREEN HOODED KILLER we saw in the opening -- a new SYMBOL on his chest: a SCRAWLED QUESTION MARK WITHIN CROSSHAIRS --]
The Riddler: Hello, people of Gotham. This is the Riddler speaking. On Halloween Night, I killed your mayor because he was not who he pretended to be, but I am not done. Here is another...
[He swings the camera to A BOUND, NAKED MAN WITH A CAGE­ LIKE BOX OVER HIS HEAD -- the camera presses in to see COMMISSIONER SAVAGE INSIDE, mouth covered in duct tape and words: "NO MORE LIES" -- FERAL RATS circle his face--]
The Riddler: ...who will soon be losing face. I will kill again and again and again until our day of judgement, when the truth about our city will FINALLY! Be unmasked. (leans into view) Goodbye!
[And as we hear MUFFLED SHRIEKS -- the video abruptly ENDS -- a smiling press photo of Commissioner Savage appears --]
Male News Anchor: Commissioner Savage served a distinguished thirty-year career on the GCPD--
Selina: Holy shit, I've seen that guy, too. At the club.
Batman: At the Iceberg Lounge?
Selina: 44 Below.
Batman: What is that?
Selina: The club within the club? The real club. It's a mob hangout.
Batman: Is that where you work? Selina.
Selina: No, I just work the bar upstairs. But I see 'em come in.
Batman: Who.
Selina: A lot of guys that shouldn't be there, I can tell you that. Your basic "upstanding citizen" types.
Batman: You're gonna help me on this. For your friend.
[She warily studies his eyes, when Batman feels something at his feet -- a swarm of cats he looks at her --]
Batman: You got a lot of cats.
Selina: I have a thing about strays.
Batman: You're not safe here.
Selina: I can take care of myself.
[But he just keeps going. She turns grimly to the TV --]
Female News Anchor: ...two public figures dead the last two nights and only days before the election, police and city officials are searching for a killer and hoping to find him before he kills again.
[BLACKNESS]
[SLIDES OPEN -- SCREECHING INTO LIGHT -- we LOOK UP at FLARING FLUORESCENTS as BATMAN AND GORDON PEER DOWN AT US. Gordon has to look away -- Batman coldly assesses --]
Gordon: He waited for him, at the gym. Pete always liked to work out late at night when no one else was around.
Batman: There's a needle mark on his neck.
Gordon: He injected him with arsenic.
Batman: Rat poison.
Gordon: Yeah, that seems to be his theme, here. Look at this thing.
[As Gordon steps angrily away -- we finally REVEAL --]
THE MEDICAL EXAMINER'S ROOM
[SAVAGE'S BODY on a MORGUE DRAWER -- Batman follows Gordon to an EVI DENCE TABLE ... sees the CREEPY HINGED, CAGE-LIKE HEAD BOX -- inside is an elaborate network of channels --]
Batman: It's a maze.
Gordon: What kinda demented sunovabitch does this to a person?
[Gordon gazes inside the bloody MAZE, where a crudely PAINTED CIPHER ends on a QUESTION MARK IN CROSSHAIRS as Batman finds a stack of SURVEILLANCE PHOTOS --]
Batman: More symbols. It's another cypher.
Gordon: He blasted these out after his message went viral. Bastard murders you and your reputation.
[In one of the photos: the COMMISSIONER emerges from the Iceberg Lounge, SHAKES HANDS with a SHADY GUY --]
Batman: That guy pushes drops on the east end.
[Gordon looks on, pained, as Batman stares at another photo: SAVAGE PEEKING INTO A CASH-STUFFED ENVELOPE --]
Gordon: I don't get it, Why would Pete get involved with something like this?
Batman: Looks like he got greedy.
Gordon: You kidding me? After everything we did to take down the Maronis? He busted the entire operation, then he caves to some lowlife dealer?!
Batman: Maybe he's not who you thought.
Gordon: You make it sound like he had it coming.
Batman: He was a cop... That crossed the line.
[Gordon sighs -- when Batman NOTICES SOMETHING TAPED TO THE BACK OF THE HEAD BOX -- AN ENVELOPE: "TO THE BATMAN"]
[Gordon watches Batman open it: ANOTHER GREETING CARD. A CARTOON SCIENTIST mixes beakers:]
Batman: "I'm mad about you. Wanna know my name? Just look inside and see."
[Inside is A CARTOON EXPLOSION; over it: "But, Wait, I Cannot Tell You -- It Might Spoil the Chemistry!" He reads the SCRIBBLE:]
Batman: "Follow the maze 'til you find the rat. Bring him into the light, and you'll find where I'm at."
Gordon: The hell is this? "Bring him into the light?" "Find the rat?"
[Unnerved, Batman stares at HIS NAME on the envelope --]
Batman: I don't know.
[Martinez rushes down the stairs leading into the examiner's room, high-strung--]
Martinez: Lieutenant! They're coming back!
Gordon: (off Martinez) We gotta get out of here. C'mon.
[SMASH TO:]
[SUPER-TIGHT ON BLINKING EYES -- AS CONTACT LENSES GO IN --]
Selina: Ow! I don't know about these things.
Batman: I need to see you in there. It's his hunting ground.
EXT. WAREHOUSE ROOF - ACROSS FROM ICEBERG LOUNGE - NIGHT
[Selina turns to Batman -- who's absorbed in setting up PORTABLE SURVEILLANCE EQUIPMENT -- a man on a mission --]
Selina: Hey, why am I starting to feel like a fish on a hook? I'm just looking for Annika. (watching him work) Boy, you're a real sweetheart. You really don't care what happens to me in there tonight, do you?
[No response -- she looks away, when finally he turns to her -- something significant in his voice as it quiets --]
Batman: Look at me.
[Surprised, she does -- they stare into each others eyes -­ his intensely studying hers, as she gazes back for a long time -- something very intimate in the moment -- when --]
Batman: Looks good. Here.
[He offer s her a TINY EARPIECE; she glares, snatching it.]
INT. ICEBERG LOUNGE - CLOSE ON SELINA - MOVING - NIGHT
HOLD ON HER FACE as she STRIDES through the PACKED CLUB INTENSITY IN HER EYES as DANCE MUSIC BLASTS
HER CONTACT LENS POV - ON BATMAN'S LAPTOP - SIMULTANEOUS
PLUNGING through CHAOS the IMAGE and SOUND STUTTERING-- AS BATMAN works to get a lock on her signal --
CLOSE ON SELINA - MOVING - SIMULTANEOUS
[As she HEADS into a DARKER SPACE, the MUSIC NOW MUFFLED --]
HER CONTACT LENS POV - ON BATMAN'S LAPTOP - SIMULTANEOUS
[The SIGNAL STABILIZES -- we see she is PASSING SHOWGIRLS AT DRESSING MIRRORS -- SOME LOOK RIGHT AT US as we pass --]
Batman: I got you. Can you hear me?
Selina: Yeah.
POV ON THE MOVE AGAIN - BATMAN'S LAPTOP - MOMENTS LATER
[BATMAN watches the POV APPROACH the MUSTACHED BOUNCER -­ ominously guarding an ELEVATOR -- his face now bruised from their earlier fight --]
Kenzie: Hey, where you goin'?
[SELINA holds up her KEYCARD --]
Selina: Hospitality.
Batman: That's one of the guys I got into it with the other night. Looks like I broke his nose.
[The contacts read Kenzie-- provide information--]
Batman: "Kenzie, William". He's an off-duty cop.
[Kenzie suspiciously searches her eyes -- she averts -- he opens the elevator she steps in -- the doors shut --]
Selina: Are you sure no one can see these things in my eyes?
Batman: Don't worry. I'm watching you.
[She takes a tense breath -- somehow not reassured by that idea -- and as the doors open -- she steps --]
INTO THE 44 BELOW
[-- another world down here; a crowded, speak-easy vibe -­ SELINA SEES A LINE OF MEN all turning to size her up Batman sees HER POV DROP QUICKLY off their faces --]
Batman: Don't look away. I need time to make IDs.
Selina: (ugh) Right.
Batman: These guys have a little problem with eye contract, don't they?
[As she turns back, Batman sees FACIAL RECOG SCANS BEGIN -­ when he NOTICES the SEA OF MEN GAZING lewdly at her body.]
Selina: Feels good, doesn't it?
Clubgoer: Yeah, baby, feels real good.
[She passes a LOUNGE AREA where THREE MEN IN SUITS sit with TWO "HOSPITALITY GIRLS" they're all getting high, EYE-DROPPERS over their eyes to administer "drops".]
Selina: Jesus, I hate dropheads.
Batman: Really? 'Cause when I first saw you, it looked like you were dealing for Penguin.
Selina: You don't know what you're talking about. Can we not--
[ONE OF THE MEN turns, mid-drop, THUNDERSTRUCK by Selina -­ recognizing the look, she quickly turns away from him --]
Selina: Can we not do this right now?
Batman: Wait. Who was that?
Selina: Oh, I saw him.
Batman: Look back.
Selina: If I look back, it's gonna be a whole can of worms.
Batman: I need to see his face.
Selina: [sigh] Jesus...
[She turns back and he's still staring; he stumbles over -­]
Batman: That's the DA, Gil Colson.
Selina: And he's coming over, you happy?
Batman: Talk to him.
Gil Colson: Hi, how you doin'?
Selina: Hey.
Colson: I'm Gil.
Selina: Hey, aren't you the DA?
Colson: Yeah!
Selina: Wow! I've seen you on TV!
Colson: Is that right? I haven't seen you around here before... It's-- 's a hell of a time to be the new girl, 'cause people are all... A little on edge.
Selina: Oh, honey, I live on the edge.
Colson: Is that right? I like that! Do you wanna come over?
Selina: Sure.
[He gestures to his table -- leads her over to the group the vibe here is a little tense --]
Colson: Uh, this is Travis!
Travis Cromwell: Hey.
Colson: I think you can sit over there... Ritchie. Glen.
Richard Beckett: Hey.
Batman: That's half the DA's office.
[Gil points to the other Hospitality Girl, who has a CATATONIC SMILE, and a dropper in hand --]
Colson: You know Carla here, huh? This is Sheri, don't mind her. She's just taking a break. Drowning our sorrows. You want a drop?
Selina: Uh, no, I'm good, but you enjoy!
Colson: Hope you don't mind... I got a lot on my shoulders with that psycho running around.
[Batman sees his RED EYES -- he's VERY HIGH, DISTRAUGHT--]
Batman: He's wasted.
Selina: No shit!
[Gil looks at her, thinks she was responding to him--]
Colson: I like this girl!
Selina: Oh, hey, I like you, too!
[She touches his hand -- he looks down, disarmed, suddenly vulnerable --]
Colson: I mean, this Riddler, he's going after the most powerful people in this city, he knows so much--
Glen: He doesn't know shit, man.
Colson: What are you talking about, you guys, what about that rat--
Glen: Hey, hey, Gil, c'mon. Maybe you had a little too much...
Batman: Wait. The rat. Ask him about the rat.
Selina: Hey, what's this about a rat?
Colson: I mean... There was a rat, we had an informant. We had big time information on Salvatore Maroni, that's how we got him out of the drops business.
Batman: He's talking about the Maroni case...
Colson: But if this guy knows... it's gonna come out. And when it does, this whole city's gonna come apart!
Carla: Okay, I don't wanna hear this. This is the kinda pillow talk that got that Russian girl disappeared.
Selina: (turns, struck) What do you know about that?
Carla: (curt, stands up) Does anybody want a drink?
Colson: I want a drink.
[And she's gone Selina watches her cross to THE BAR --]
Batman: Keep him talking.
[When Selina abruptly stands -- starts off after Carla --]
Batman: Wait, where are you going?
Selina: She knows Annika.
Batman: No, stay on the DA!
Selina: I told you, I'm looking for my friend.
[Selina grabs Carla's arm at the bar, speaking HUSHED--]
Selina: Where's Annika?
Carla: Outta my face. I don't know you.
Selina: Yeah, but you know her, you took her! What have you heard, is she okay?!
Carla: Jesus Christ, keep your voice down! What, do you got a death wish?!
Carmine Falcone: Hey, what's the problem, ladies?
[Carla suddenly falls silent... as SELINA TURNS... BATMAN SEES a SILHOUETTED FIGURE staring back, PENGUIN beside him -- the FACIAL SCAN struggles to I.D. the DARK FACE --]
Carla: There's no problem. It's just girl talk.
Cobblepot: Let's keep it festive down here, alright?
[Batman stares as the MAN moves into the light -- he's in his 60s, STRIKING FACE -- it's clear Batman knows him the Man's face lights up as he approaches Selina --]
Carla: Sure thing, boss.
Falcone: Hey.
Selina: (voice quieting) Hey.
Falcone: Been a long time. Nice to see you down here. How you been?
Selina: Yeah, I've been-- I've been okay. I was just, um... I was just headed back upstairs.
[Batman stares as the Man smiles at us, a bit suggestive -­-]
Falcone: Oh. Well... Now, don't be a stranger.
EXT. WAREHOUSE ROOF - BATMAN'S LAPTOP - MOMENTS LATER
[Batman watches as Selina ENTERS A BATHROOM -- stops at a sink, staring down; Batman can't see her, just the sink --]
Batman: You know Carmine Falcone?
Selina: I told you, it's a mob spot.
Batman: You didn't tell me you had a relationship with him.
Selina: I don't have a relationship with him, okay?!
Batman: Well, that's not what it looked like.
Selina: Forget it.
[She glares up at her reflection, removing the contacts--]
Batman: Wait, what are you doing?
Selina: Listen, I can't do this no more.
Batman: No. No!
[And as the lenses come out -- HIS LAPTOP GOES BLACK HOLD ON BATMAN -- INTENSE -- REELING -- THEN --]
EXT. FRONT OF ICEBERG LOUNGE - UNKNOWN POV - NIGHT
[WE WATCH THROUGH FOGGED WINDOWS OF A PARKED SUV as SELINA BURSTS OUT THE CLUB into the FLICKERING LIGHT OF THE LONE STREETLAMP, looks for a cab...]
Selina: Taxi!
[When, we hear BREATHING... AN OLIVE GREEN HOOD EDGES INTO FRAME -- THE BREATHING QUIETS as GIL STUMBLES out of the club too --]
ON THE STREET
[Gil calls after Selina -- still smitten -- still high -­-]
Colson: Hey! I lost you in there...
Selina: Yeah, I gotta go.
Colson: Uh, you need a ride?
BACK INSIDE THE SUV
Colson: That's me right there.
[HE'S POINTING RIGHT AT WHERE THE KILLER IS HIDING -- THE HOOD SLIPS FROM VIEW AGAIN -- as SELINA GLANCES AT US -­ distractedly considering for an instant -- then --]
Selina: Taxi!
[A GYPSY CAB thankfully arrives -- she grabs the handle -­-]
Selina: I'm good.
Colson: I hope, uh... I'll see you around.
[She jumps in -- slamming the door as the CAB SPEEDS OFF -­-]
[Gil watches her go, depressed... the HOOD edges back into frame, watching... Gil looks to the club, considers going in... but turns, starting in our direction -- as the HOOD disappears -- Gil looks right at us, taking out his FOB --]
OVERHEAD ON THE STREET - LOOKING STRAIGHT DOWN
[-- as Gil's lonely figure approaches the waiting SUV --]
THROUGH THE PARTIALLY FOGGED WINDSHIELD
[-- we SEE Gil get in... HOLD, as he fumbles for his seatbelt -- unaware of -- THE HOODED FORM SLOWLY RISING BEHIND HIM -- Gil leans forward -- briefly out of its reach -- as he strains to wipe fog from the windshield THE KILLER REMAINS EERILY STILL as Gil SETTLES BACK further than expected...]
[He feels blindly behind to FIND THE HEADREST GONE -­ confused, he turns -- SUDDENLY FACE TO HOOD WITH THE KILLER -- BEFORE HE CAN REACT -- THE KILLER PUMMELS GIL WITH HIS METAL TOOL -- GIL SLUMPS onto the wheel -- HORN BLARING -- the KILLER YANKS HIM BACK --]
[TIGHT ON GIL IN THE SUV
[-- totally out of it -- BLOOD FANNING down his face -- we hear the KILLER BREATHING HARD -- then the SOUND OF DUCT TAPE RIPPING -- TAPE COVERS GIL'S MOUTH -- AS GIL STARTS TO COME TO -- MOANING IN PANIC -- THE KILLER LIFTS A CRUDELY MADE CLAMP -- Gil feels it SLIDING AROUND HIS NECK -- HIS MOANING INTENSIFIES -- HE BEGINS TO FLAIL]
[THE KILLER'S HOOD UNDULATES with EACH BREATH THE AVIATOR GLASSES OVER HIS HOOD RHYTHMICALLY FOGGING --]
The Riddler: Shhhh, just hold still...
[We hear the SICKENING CLICKS OF METAL CINCHING TIGHTER -­ TIGHTER -- GIL'S MOANING TURNS TO UTTER TERROR -- AS WE --]
EXT. ABANDONED SKYSCRAPER CONSTRUCTION SITE - PRE-DAWN
[A CRUISER pulls past an OLD SIGN: "A GOTHAM RENEWAL PROJECT -- FOR A BRIGHTER TOMORROW." GORDON gets out--]
ON GORDON - RISING IN A CONSTRUCTION ELEVATOR - PRE-DAWN
[As it stops, he emerges onto --]
AN UNFINISHED FLOOR - HIGH ABOVE THE CITY
[walking cautiously through a maze of girders to... THE RUSTED BAT-SIGNAL, BEAM BLAZING into the sky. He shuts it off, thrusting the space further into darkness...]
Batman: What do you know about a confidential informant in the Maroni case?
[Gordon turns, finally spotting BATMAN'S SILHOUETTE; then:]
Gordon: Yeah, sure, there was.
Batman: That's the rat we're looking for. Somehow, Riddler knows who he is. If we find the rat, maybe it'll lead us to him.
Gordon: Where are you getting this?
Batman: I have a source, spoke to the DA tonight. Gil's very nervous. I thinks he's targeting people close to the case.
Gordon: I worked that case.
Batman: Riddler's not after you.
Gordon: How do you know?
Batman: You're not corrupt.
Gordon: Colson's dirty?
[Batman nods. Gordon shakes his head, outrage building --]
Gordon: Maybe I, uh... I go after him, Lean on him to give up the rat.
Batman: It's too dangerous. They made a secret deal with this guy. Who knows how many people it touches? Politicians. Police. The courts. Could tear the whole city apart.
[Gordon reels --]
Gordon: Jesus, this is a powder keg.
Batman: And Riddler's the match...
INT. "THE CAVE" - UNDERNEATH WAYNE TOWER - EARLY MORNING
[VOICES ECHO as we PAN THROUGH THE SPACE -- sweeping past the BLACK MUSCLE KIT CAR, almost complete now...]
Batman: (on monitor) You know Carmine Falcone?
Selina: (on monitor) I told you, it's a mob spot.
Batman: (on monitor) You didn't tell me you had a relationship with him.
Selina: (on monitor) I don't have a relationship with him--
[Bruce REWINDS--]
Batman: (on monitor) You didn't tell me you had a relationship with him.
Selina: (on monitor) I don't have a relationship with him, okay--
[Bruce REWINDS--]
Batman: (on monitor) You didn't tell me you had a relationship with him.
Selina: (on monitor) I don't have a relationship with him--
[We FIND BRUCE at his work bench in A DARK SUIT, examining FOOTAGE from last night -- FREEZING on SELINA'S FACE --]
Alfred: Pretty. She a new friend of yours?
Bruce: I'm not so sure.
Alfred: Looks like you upset her. Shall I take this as a good sign?
[Bruce turns, annoyed. Alfred smiles.]
Bruce: What?
Alfred: Your attire! Is Bruce Wayne making an actual appearance?
Bruce: It's a public memorial for Mayor Mitchell. Serial killers like to follow reactions to their crimes. Riddler might not be able to resist.
Alfred: Ah, that reminds me... I've taken the liberty of doing a little work on this latest cipher. The one from the rat maze?
[Bruce looks Alfred has decoded the SYMBOLS FROM INSIDE THE RAT'S MAZE that was on COMMISSIONER SAVAGE'S head --]
Alfred: I'm afraid his Spanish is not perfect, but I'm fairly certain this translates to "You are el rata alada."
Bruce: "Rata alada"... "Rat with wings"?
Alfred: Slang for "pigeon". Does that mean anything to you?
Bruce: Yeah. A stool pigeon.
Alfred: Where are your cufflinks?
Bruce: Oh, I couldn't find 'em.
[Bruce turns briefly to see Alfred removing his own--]
Alfred: Here, you can't go out like that.
Bruce: Alfred, I don't want your cufflinks.
Alfred: You have to keep up appearances. You're still a Wayne.
[Annoyed, Bruce relents, letting Alfred slip one on -- he sees a MONOGRAMMED W on the link gives Alfred a look --]
Bruce: What about you? Are you a Wayne?
Alfred: Your father gave them to me.
[That catches Bruce off guard -- A DIN OF HORNS AND TRAFFIC SWELLS --]
INT. BRUCE'S VINTAGE SPORTS CAR - DAY
[CLOSE ON THE W CUFFLINK as Bruce drives approaching CITY HALL he gazes at the street PACKED WITH MOURNERS, MAKESHIFT MEMORIALS, PROTESTORS...]
Crowd: [Chanting] No more lies! No more lies!
[A TRAFFIC COP presses to the window, double-takes, seeing Bruce. Bruce strains a smile -- as the Cop waves him in--]
Traffic Cop: Mr. Wayne, alright! Alright, pull forward, straight down here.
EXT. FRONT OF GOTHAM CITY HALL - DAY
[Bruce gets out as a VALET opens his door -- when -­-]
Reporter: Hey, Bruce Wayne?!
[Heads turn -- as news spreads -- CAMERAS BEGIN FLASHING -­-]
[Bruce spins to see BODYGUARDS helping Carmine Falcone out of a car -- Falcone turns as a WOMAN climbs out in a HIGH­ SLIT DRESS -- REMINISCENT OF SELINA'S -- her FACE IS CONCEALED under a VEILED HAT -- she takes Falcone's hand as they Join his PHALANX OF GUARDS -- Bruce's eyes track her: is that Selina?]
Cobblepot: Whoa! Hey, fellas. Right here. We're good, Mr. Falcone.
Valet: Sir?
[Bruce moves after her -- through the thick crowd, bottle­ necking by the entrance -- eyes on the Woman -- pressing into FALCONE'S SECURITY TEAM, trying to glimpse her veiled face -- when A HAND slaps into his chest--]
Cobblepot: Hey, hey, hey! Give us a wide berth here, wouldja, slick?
[Bodyguards grab Bruce too -- hearing the commotion, the Woman turns -- Bruce SEES -- it's CARLA --]
Falcone: Hey, watch it, fellas. You got the prince of the city there.
[They loosen their grip as Falcone steps over, smiles--]
Falcone: Some event, huh? Brought out the one guy in the city more reclusive than me.
[Bruce glares with edge, a sense of history between them --]
Bruce: Thought you'd never leave the shoreline. Aren't you afraid someone'll take a shot at you?
Falcone: Why? 'Cause your father ain't around? Oz, you know Bruce Wayne?
Cobblepot: Wow. Is that right?
Falcone: His father saved my life. I got shot in the chest. Right here. I couldn't go to no hospital, so we showed up on his doorstep, operated right on the dining room table. Kid here, he... He saw the whole thing up on the stairs, looking down. (to Bruce) I remember your face. You don't think that meant something he did there?
Bruce: It means he took the Hippocratic Oath.
Falcone: "Hippocratic Oath". That's good.
Bruce: Excuse me.
Falcone: [laughs] Yes!
[And Bruce abruptly moves on, the bottle-neck opening--]
INT. GOTHAM CITY HALL - MOVING WITH BRUCE - DAY
[A SEXTET PLAYS as MOURNERS continue to flood in -- on the prowl, BRUCE SCANS the crowd -- he CLOCKS RIFLED OFFICERS among SPECTATORS above -- studies the CRUSH OF FACES in the STANDING PUBLIC GALLERY -- some back here in tears --]
P.A. Announcer: Ladies and gentlemen, thank you all for coming to today's memorial for our beloved mayor, Don Mitchell Junior. Our program will begin shortly. As a reminder, the family of those wishing to honor the mayor's memory consider a donation to the cause most dear to his heart: the Gotham Renewal Fund, our city's safety net.
[-- Bruce sees COPS STOPPING a SUSPICIOUS GUY -- when--]
Bitter Nobody: What good's a safety net didn't catch anybody?
[Bruce turns -- to see A BITTER NOBODY in a hooded work jacket, angry eyes on the VIPS as they file past --]
Bitter Nobody: Didn't help my daughter when she needed it, I can tell you that. Guy was just another rich scum-sucker. Got what he deserved.
[Finally, his eyes shift to Bruce, a truly chilling look --]
Bitter Nobody: Know what I mean?
[Bruce studies his acne-scarred face -- nodding -- when -- the man's expression changes trying to place Bruce--]
Bitter Nobody: Hey. Don't I know you?
Bella Reál: Bruce Wayne.
[Startled, Bruce spins to see BELLA REAL coming at him -­-]
Bella: Why haven't you called me back?
Bruce: I'm sorry?
Bella: (no-nonsense) Bella Reál. I'm running for mayor. I wouldn't be bothering you here, but your people keep telling me you're unavailable. Will you walk with me?
[On the spot, Bruce glances back at the man -- who now glowers -- Bella tucks her arm under Bruce's -- stealing him -- he sneaks a look at the BITTER NOBODY who glares as they recede -- then turns, disappearing in the crowd --]
[She leads Bruce to THE SEATED AREA, quiets, still blunt:]
Bella Reál: Mister Wayne. Mister Wayne! You know, you really could be doing more for this city. Your family has a history of philanthropy, but as far as I can tell, you're not doing anything. If I'm elected, I wanna change that.
[She smiles disarmingly as they near the front -- a BOY'S CHOIR on the central steps begins SHUBERT'S "AVE MARIA" --]
Bella Reál: My god. I'm gonna go pay my respects. Will you wait for me? I wanna continue this.
[And she leaves him; struck by her nerve and charisma, Bruce watches her lean into the row to greet the widow when the Mayor's Ten-Year-Old Son glances awkwardly back making brief eye-contact -- a sad moment -- when --]
Gordon: 'scuse me, Chief, can I talk to you?
[Bruce turns to spy GORDON with OFFICERS, a few rows back -- Gordon touches the arm of the seated CHIEF OF POLICE --]
Golson: Gil Colson is missing.
Mackenzie Bock: What?
Gordon: He hasn't been heard from since last night.
Bock: Christ, not again...
[-- when one of the Officers, Martinez, suddenly notices Bruce gazing in their direction -- a surprised smile --]
Martinez: Hey! Mr. Wayne!
[Gordon falls silent -- a strange moment for Bruce as Batman's closest ally glares warily at the billionaire--]
[TIGHT ON BRUCE as he turns away -- still listening --]
Bock: You got people looking for him, too?
Gordon: Sent a couple guys to his house, nothing.
Bock: What'd his wife say?
Gordon: She hadn't heard from him.
[WHEN SUDDENLY -- DISTANT SCREAMS -- an AWFUL GROANING ENGINE WHINES from somewhere outside -- then -- SICKENING THUDS -- BRUCE'S EYES IMMEDIATELY FLIT UP IN ALARM TO --]
[THE SECOND STORY LANDING where SPECTATORS PANIC -- SEEING SOMETHING THROUGH THE WINDOWS -- EVERYONE TURNING -- ALL EXCEPT A SILHOUETTED FIGURE -- GAZING EERILY DOWN IN BRUCE'S DIRECTION -- WAITING FOR SOMETHING -- WHEN --]
[BAMMMMMM!!! THE MAIN ENTRANCE EXPLODES IN A BLIZZARD OF GLASS AND CONCRETE -- AS THE D.A.'S SUV RIPS THROUGH THE DOORS -- FLOWERS PICKED UP IN THE GRILL -- PANDEMONIUM -­ AS THE CROWD SCATTERS -- SOME TOSSED INTO THE AIR -- THE VEHICLE SLAMMING PAST GUARDRAILS INTO THE SEATED AREA--]
[BRUCE SPINS -- TO SEE THE MAYOR'S SON A FEW FEET AWAY FROZEN IN SHOCK AS OTHERS FLEE ALL AROUND HIM -- HE HURLS HIMSELF AT THE BOY -- TACKLING HIM OUT OF THE SUV'S PATH AS IT ROARS PAST -- LAUNCHING SEATS OVER THEIR HEADS -­ FINALLY CRASHING INTO THE CENTRAL STAIRCASE -- BUCKLING UPWARD -- ENGINE GRINDING -- TILL IT... STOPS...]
[A surreal moment of quiet, then screams, tears, panic as Bruce lifts his head off the boy's to look over at the wreck -- then up AT THE SECOND FLOOR: THE FIGURE'S GONE -­ people flee in all directions, a s BRUCE RISES -- watching the boy run to his mother's arms -- BRUCE TURNS TO SEE --]
[GORDON AND TEN COPS SURROUNDING THE SUV -- GUNS RAISED -­ THE SUV IS COVERED IN A SCRAWLED CROSSWORD PUZZLE PATTERN -- THE ENDLESSLY REPEATING MESSAGE: "D.A. -- D.O.A.?"]
[BRUCE edges closer past FLEEING MOURNERS -- WHEN -- THE DENTED DRIVER DOOR SUDDENLY CRACKS OPEN -- THE HALL RINGS WITH THE CLAMOR OF DOZENS OF BULLETS CHAMBERED AT ONCE --]
Gordon: Get outta the car! Get outta the car and show your hands! Get out!
[Bruce watches the driver door slowly open all the way...]
Gordon: Get 'em up! Get out, show 'em!
[A FIGURE staggers out, hands raised, terrified --]
Gordon: Christ, that's Colson!
[The D.A. has a bloody face, tape over his mouth with the words "NO MORE LIES" the CLAMP STILL AROUND HIS NECK -- LIGHTS RAPIDLY FLASH ON IT -- a cop notices, horrified --]
Female Officer: There's a bomb around his neck!
[-- a BEEP-BEEP-BEEP! RINGS OUT -- EVERYONE FREAKS -­ SHIELDING THEMSELVES -- except Bruce who just stares at -­ the D.A. who REMAINS IN ONE PIECE -- everyone looks up, confused... when the D.A. -- sheepishly lifts his hand... Pointing to A CELL TAPED TO HIS PALM -- as BEEP-BEEP-BEEP -- it RINGS again -- Gordon turns, calling to the room --]
Gordon: Let's clear this place out, now!
[Police begin ushering people out -- but Bruce hesitates, chilled, as he notices... taped to the D.A.'s chest is A GREETING CARDi it's addressed: "To The Batman"...]
INSIDE THE EVACUATED CITY HALL -- EVENING
[A SWAT TEAM crouches behind BLAST SHIELDS in the doorway, RIFLES TRAINED ON GIL, sitting alone in the distance -­ the cell on his hand echoing as it JUST KEEPS RINGING... GIL lifts his head, hopeless, as a SMALL, WHIRRING POLICE ROBOT rolls to a stop before him. He stares oddly as a camera slowly extends toward his head --]
CRISIS COMMAND - CONTINUOUS
[GIL STARING SADLY INTO THE ROBOT CAMERA -- when suddenly he turns, struck -- shock beginning to fill his eyes --]
Bock: What's he looking at?
INSIDE CITY HALL
[Gil sits there, frozen -- as -- BATMAN EMERGES FROM THE SHADOWS -- moving slowly across the floor toward him --]
SWAT Officer: Oh, shit...
CHIEF BOCK'S EYES WIDEN
[As Batman appears on the ROBOT'S CAMERAS--]
Bock: Are you kidding me? What the hell is he doing?! GORDON!
[Gordon presses closer to see BATMAN APPROACHING GIL --]
Bock: Your guy's gonna get himself killed in there!
[Gordon watches, with growing concern -- AS --]
INSIDE CITY HALL
[Batman stops, towering over Gil -- who rises, scared... Batman reaches out, peels THE TAPE OFF HIS MOUTH --]
Colson: Please-- He made me do it, I'm so sorry! He told me if I didn't do exactly what he said, he'd kill me, I'm so sorry!
Batman: Looks like a combination lock.
Colson: Can't we just cut it off?
[Batman carefully touches a NASTY SNARL OF TRIP WIRES -­-]
Batman: Not if you wanna keep your head.
[Batman rips the CARD off Gil's chest -- ON THE COVER is a cartoon of an OLD PHONE LITERALLY RINGING OFF THE HOOK: "In These Trying Times, Never Forget..." Batman opens it:]
["...I'm Just A Phone Call Away" -- under that, in ANGRY SCRAWL: "ANSWER". Batman points to the RINGING CELL -­ Gil lifts it -- as Batman reaches to PRESS ANSWER --]
[-- the PHONE'S SCREEN DISPLAYS A LIVE SPLIT­ SCREEN IMAGE: RIDDLER ON ONE SIDE1 BATMAN AND GIL ON THE OTHER -- Riddler stares from under his hood for a beat... then HIS CHILLING VOICE COMES CALMLY THROUGH THE CHANGER:]
Riddler: You came.
Batman: Who are you?
Riddler: Me? I'm nobody. I'm just an instrument, here to unmask the truth about this cesspool we call a city.
Batman: Unmask?
Riddler: Yes. Let's do it together, okay? I've been trying to reach you. You're part of this, too.
Batman: How am I a part of this?
Riddler: You'll see.
CRISIS COMMAND - CONTINUOUS
Female Officer: Hey, chief. You better take a look at this.
[Everyone presses around another MONITOR in horror -- GCl running the FEED FROM RIDDLER'S PHONE, broadcasting live through social media -- "BATMAN TALKS TO KILLER LIVE"--]
The Riddler: Say hello to my followers. We're live. They're here to watch our little trial.
BACK INSIDE CITY HALL
[Riddler gazing back at Batman and Gil through the phone -­]
The Riddler: At the moment, the man across from you, Mister Colson... is dead! But! Wait a minute, I--
Gil Colson: (overlapping) Jesus, can we get somebody out here, this psycho's gonna kill me!
The Riddler: SHUT UP! YOU DESERVE TO BE DEAD AFTER WHAT YOU DID! YOU! HEAR ME?!
Gil Colson: Okay! Okay.
[THE TERRIFYING OUTBURST MAKES GIL FALL SILENT--]
The Riddler: (then, oddly calm) I'm giving you a chance. No one ever gave me a chance. (then) Now... Ever since I was a child, I've always loved little puzzles. For me, they were a retreat from the horrors of our world. Maybe they can bring some comfort to you, too, Mister Colson.
Gil Colson: You want me to do puzzles?
The Riddler: Three riddles in two minutes. You give me the answers, and I'll give you the code for the lock. Do you understand?
Gil Colson: Okay. Okay. Okay, so I just, um, you want me to--
[BEEP! -- GIL SHRIEKS -- A COUNTDOWN APPEARS ON THE COLLAR -- 2:00 MINUTES -- and Riddler starts without warning--]
The Riddler: Riddle number one! It can be cruel, poetic, or blind. But when it's denied, it's your violence you may find.
Gil Colson: Wait, wait, wait, wait, can you repeat that? "Cruel, poetic..."
Batman: Justice.
Gil Colson: Huh?!
Batman: The answer's justice.
Gil Colson: Justice?!
The Riddler: Yes! Justice! And you were supposed to be an arm of justice in this city, along with the late mayor and police commissioner, were you not, Mister Colson?
Gil Colson: Of course, of course! Of course.
The Riddler: Riddle two: If you are justice, please do not lie: What is the price for your blind eye?
Gil Colson: "The price...?"
Batman: The bribes.
Gil Colson: Oh, god, bribes!
Batman: He's asking how much it costs you to turn your back.
Gil Colson: You gotta be kidding me!
The Riddler: Fifty-eight seconds!
Batman: How much.
Gil Colson: Nothing!
Batman: How much?!
Gil Colson: Ten grand! Ten gs per month, I get a monthly payment! Just not to prosecute certain cases!
Batman: What cases?
Gil Colson: He didn't ask me that! C'mon! Ten grand! That's the answer, I swear to God!
The Riddler: Alright! Okay, okay! Don't lose your head, Mister Colson! Just one more to go before your time runs out. Last riddle: Since your justice is so select, please tell us which vermin you're paid to protect.
Gil Colson: "Which vermin?"
Batman: The rat. The informant you all protect, from the Salvatore Maroni Case.
Gil Colson: How do you know about that?!
Batman: What's his name?
The Riddler: Twenty seconds!
Gil Colson: No!
Batman: He's gonna kill you!
Gil Colson: I'm a dead man either way, you're talking to a dead man, okay?! If I go out this way, it's just me, but if I give over that name, I have family, people I love... They’ll kill them!
Batman: Who will?!
Gil Colson: People are watching!
Batman: What people?!
Gil Colson: They're so much bigger than you could ever imagine! It's the whole system!
The Riddler: Five! Four! Three! Two...
Gil Colson: I'm so sorry!
The Riddler: Die.
[TIGHT ON BATMAN -- SEEING THE COUNTER HIT 00:00 -- HE TURNS -- SHIELDING HIMSELF -- AS KA-BOOOOOOOM! -- A BLAST ERUPTS -- PROPELLING BATMAN BACK -- BAT SUIT IN FLAMES -­ AS HE SLAMS TO THE FLOOR -- SMOKE SWALLOWING HIM -- AND US!!! WE HEAR ONLY HIGH-PITCHED RINGING--]
[BATMAN LIES -- DAZED -- HE STRUGGLES TO LIFT HIS EYES -­ AS GORDON RUSHES FORWARD -- OTHER COPS TOO -- GUNS DRAWN -- SOME AROUND GIL'S NOW LIFELESS BODY -- OTHERS AROUND BATMAN -- WHO GAZES BACK, VISION BLURRING -- COPS YELLING ALL AROUND HIM -- AS HE BLACKS OUT --]
INT. GCPD - INTERROGATION ROOM - BATMAN'S POV - NIGHT
[BATMAN COMES TO -- FOCUSING on a TACTICAL MEDIC shining light in his eyes -- VOICES FADE IN -- cops above in debate, gazing down with contempt -- Gordon holding them off --]
Cop 1: Who do you think he is under there?
Gordon: Take it easy--
Cop 1: I wanna see.
Cop 2: What is that thing, leather?
Cop 3: What's he got in his eyes?
Cop 2: Who cares? I wanna see his face.
[One grabs for Batman's mask--]
Cop 3: What are we doing, here? Let's just take it off--
[BATMAN'S HAND SHOOTS UP, GRIPPING MUSCLE COP'S ARM on the verge of violence -- Gordon pushes the cop back giving Batman room to rise off the interrogation table--]
Gordon: Hey! Hey! Hey! Relax, goddammit!
Bock: You're protecting this guy, Jim? He interfered in an active hostage situation. Colson's blood is on his hands.
Batman: Maybe it's on yours.
Bock: What'd you say?
Batman: He would rather die than talk. What was he afraid of? You?
Bock: You son of a bitch. You have any idea what kind of trouble you're in? You could be an accessory to murder.
Muscle Cop: What are we playing games--?
[He GRABS ONTO THE COWL—BATMAN ERUPTS—KNOCKING HIM OFF BALANCE—MORE COPS LAUNCH THEMSELVES at Batman—a WILD MELEE—Batman having his way with them—as the room goes crazy—ALARMED, GORDON TRIES TO BREAK IT UP—]
Gordon: Back off! Back off!
Bock: Great! Now I got you on assaulting an officer!
Batman: (steps at cops again) You got me on assaulting three!
[GORDON PUSHES HIM BACK, SURPRISINGLY HARD—BATMAN STOPS, SHOCKED, eyes flaring.]
Gordon: Hey! What's the matter with you?! This isn't the way to do this!
[Gordon glares back, serious—their eyes locking… until Batman fills with contempt…]
Batman: You, too, now?
Gordon: (dark eyes on Batman) Let me handle this, chief. Just give me a minute.
Bock: You're gonna put yourself on the line for this scumbag, Jim?
Gordon: Just give me a minute! I'll get him to cooperate.
Bock: Okay, give him the room.
[The cops mutter under their breath but disperse into the hall. Bock stays behind a short moment—]
Bock: Two minutes.
[As the cops crowd out to watch from a distance, Gordon shoves a finger in Batman’s face, expression angry.]
Gordon: Now you listen to me...!
[Gordon utters, low—]
Gordon: We gotta get you outta here.
[Batman responds in kind, making it look like an argument.]
Batman: That'll put a lot of heat on you.
Gordon: Well, you punched me in the face...
Batman: (he huffs, a slight laugh) Uh-huh.
Gordon: Take this key. Through that door, hallway to the stairs that go to the roof.
[A voice catches their attention—]
Mackenzie: The hell is going on? Hey, hey, hey what's going on?
[Batman's eye clocks the Detective, --
THE MUSTACHIOED BOUNCER FROM THE ICEBERG LOUNGE! Batman turns back to Gordon—]
Batman: Who's the mustache with the broken nose?
[Gordon spares the other detective a brief glance.]
Gordon: That's Kenzie. Narcotics.
Batman: He's one of the guys I got into it with at the Iceberg Lounge.
James Gordon: What are you saying, Kenzie moonlights for the Penguin?
[Batman turns towards Kenzie, slowly.]
Batman: Or he moonlights as a cop.
[When KENZIE SEES BATMAN staring -- alarmed -- AND WITHOUT WARNING, BATMAN PUNCHES GORDON RIGHT IN THE FACE GORDON GOES DOWN -- BATMAN BREAKS FOR THE STAIRWELL -­ THE COPS STARTING MADLY DOWN THE HALL AFTER HIM -- !]
[BATMAN BLASTS FROM THE STAIRWELL -- TO THE EDGE -- GAZING AT THE HUGE DROP -- THE DIN OF COPS APPROACHING -- HE REACHES DOWN -- YANKING TABS ON EACH HEEL -- ZIPPING HIS CLOAK TO HIS BOOTS -- HIS LEGS -- HIS ARMS --]
[-- THE COPS CHARGE THE ROOF -- AIMING AT BATMAN -- AS HE PLUMMETS OFF THE EDGE -- THE COPS RACE OVER TO SEE -­ BATMAN SOARING WILDLY DOWN HIS CAPE NOW A WINGSUIT--]
[THEIR SHOCKED FACES RECEDE AS WE FLY WITH BATMAN -- DESCENDING RAPIDLY, DANGEROUSLY -- TO THE STREET BELOW WHERE BATMAN HITS INTO A HARD SHOULDER-ROLL -- SPINNING WILDLY TO HIS FEET -- AND DISAPPEARING INTO THE NIGHT...]
EXT. UNFINISHED SKYSCRAPER - HIGH OVER THE CITY - NIGHT
[Batman waits in the RAIN... as the ELEVATOR ARRIVES... Gordon steps out, FACE BRUISED -- shaking his head --]
Gordon: Could've at least pulled that punch, man.
Batman: I did.
Gordon: Bock put out an APB on you. You really think he's in on this?
Batman: I don't trust any of 'em. Do you?
Gordon: I only trust you.
Batman: What's a narcotics cop doing with Falcone's right-hand man?
Gordon: Colson said cops protect the rat. Maybe Kenzie's part of it?
Batman: You think Penguin's the rat?
Gordon: His club caters to the mob. Maroni practically lived there. Penguin would've been privy to a lot of dirt. DA was a regular, too! Maybe Penguin got himself into a jam and working a deal was his only way out.
Batman: The rata allada.
Gordon: The what?
Batman: Riddler's latest. The cipher in the maze. It means "rat with wings", like a stool pigeon.
Gordon: A penguin's got wings, too.
Batman: Time for me to have another conversation with him.
Gordon: What about the Riddler? He's gonna kill again.
Batman: It's all connected. Like it or not, it's his game now. We wanna find Riddler, we gotta find that rat.
EXT. ICEBERG LOUNGE - ALLEY - POV OUT WINDSHIELD - NIGHT
[MENACING BREATHING as we lurk... watching the rear of the club through RAIN and FOG as WIPERS SWISH... The BREATHS STOP as PENGUIN exits with KENZIE and TWINS -- Kenzie has TWO DUFFLES; he opens the trunk of his CAMRY--]
Gordon: (over walkie-talkie) Kenzie and the Twins coming your way.
Batman: There's Penguin.
Gordon: (over walkie-talkie) I wonder what's in the bags. Do you wanna move in?
INT. GORDON'S CRUISER - SAME MOMENT
[Gordon waits tensely with his WALKIE, watching Penguin and Twins get into an ESCALADE -- when an ANSWER COMES:]
Batman: (over walkie-talkie) Let's follow.
[-- the cars take off past Gordon --]
EXT. WATERFRONT STREET - DESERTED WAREHOUSE - NIGHT
[The Camry and Escalade stop by a weathered sign: "GOTHAM RECYCLING -- A RENEWAL CORP" -- Kenzie HONKS his horn -­ a ROLL-DOOR LIFTS -- he and Penguin get out--]
INT. GORDON'S CRUISER - BELOW AN UNDERPASS - SAME MOMENT
[Gordon sees them approach the building; lifts his WALKIE:]
Gordon: It stopped at Waterfront Street. The recycling plant.
[--a beat -- then Batman quietly crackles back--]
Batman: I'm here.
HIGH OVER PENGUIN AND KENZIE - FROM THE WAREHOUSE ROOF
[A COWL presses into frame: BATMAN. The two men enter the building -- MOVE with Batman -- to LOOK IN A SKYLIGHT at the PLANT BELOW -- where WORKERS lead Penguin to a CREW IN SURGICAL MASKS filling VIALS WITH CHEMICALS by BUBBLING COOKERS. Penguin inspects the operation.
[A MAN IN A SUIT arrives, shaking his hand -- Batman watches as EYE-DROPPERS are screwed onto the vials --]
Batman: (whispers to wrist) It's a drug lab. Drops. This is a buy.
Gordon: Looks like they got Maroni's operation up and running again.
Batman: Or they never shut it down at all.
Gordon: What are you saying? The biggest drug bust in GCPD history was a fraud?
[-- Batman spots a GLINT STRAFING from below, moves to the edge -- a DARK FIGURE COASTS ON A MOTORCYCLE in the alley -- SELINA IN HER CATSUIT -- she hops off, uncoiling her MOTORCYCLE LOCK CHAIN -- Batman whispers into his wrist --]
Batman: This just got complicated.
INT. GORDON'S CRUISER - SAME MOMENT
[He cocks his head, quizzical--]
Gordon: What do you mean?
ON THE COBBLESTONES IN FRONT
[The TWINS stand under umbrellas by the Camry -- ONE HEARS a CLINK by his feet -- looks down to see THE LOCK CHAIN LOOPING FROM UNDER THE CAR AROUND HIS ANKLES -- IT YANKS TIGHT -- SENDING HIM FACE-FIRST INTO THE GROUND -- the other twin turns -- confused -- where'd my brother go? He moves around to see -- SELINA WIELDING THE CHAIN LIKE A WHIP -- SNAPPING IT INTO HIS FACE -- HE CRUMPLES TOO --]
[SELINA POPS THE TRUNK -- FLIPS HER VISOR, GAZING INSIDE AT A TRIO OF DUFFLES -- UNZIPS ONE -- STUFFED WITH CASH--]
Batman: Dangerous crowd you're stealing from.
[SELINA SPINS -- READY TO STRIKE -- when she sees BATMAN --]
Selina: Jesus. Is this how you get your kicks, hon? Sneaking up on girls in the dark?
Batman: Is that why you work in the club? It was all just a score?
Selina: You know, I would love to sit and go over every gory detail with you, bad boy. But, uh... Those assholes are coming back--
[She shoulders two duffles, unzips the third -- FALLING SILENT. Batman moves closer... inside is a BODY. Filling with dread, she opens the bag further to see -- ANNIKA'S FACE -- Selina is rocked... eyes well with rage, tears --]
[WHEN SUDDENLY THE CAMRY IS RIDDLED WITH GUNFIRE! BATMAN LUNGES FOR SELINA -- PUSHING HER TO COVER -- AS HE TAKES ON A HAIL OF BULLETS -- SELINA SPINS -- TO SEE BATMAN, MOTIONLESS ON THE GROUND SHE PEEKS OUT TO SEE PENGUIN BY THE ROLL-DOOR FIRING AN UZI PISTOL BACKED UP BY KENZIE AND A CREW OF THUGS -- FIRING TOO--]
INT. GORDON'S CRUISER - SAME MOMENT
Gordon: Jesus!
ON THE COBBLESTONES IN FRONT
[GORDON HITS THE GAS -- SCREECHING CLOSER -- SKIDDING TO A STOP -­- JUMPS BEHIND THE DRIVER DOOR -- RAISING HIS GUN -- AS --]
Cobblepot: Hey, Vengeance! You think you can come after my money, huh?!
[PENGUIN STALKS FOR THE CAMRY, SHOOTING, BERSERK--]
Cobblepot: Kenzie, get the money!
[KENZIE GRABS THE DUFFLES OF MONEY --]
Kenzie: Hey! What the--?!
[AS THE OTHERS FIRE AT GORDON -- SELINA CRAWLS ON HANDS AND KNEES IN TERROR SHE LOOKS BACK TO WHERE BATMAN FELL -- BUT HE IS NO LONGER THERE--]
[SUDDENLY A GUTTERAL, TERRIFYINGLY LOUD ENGINE GROWLS!]
[PENGUIN SPINS TO THE INKY DARKNESS OF THE ALLEY TO SEE FLAMES SHOOTING OMINOUSLY FROM SIDE EXHAUSTS -- RED NITROUS VAPOR BLASTS -- THE FLASHES REVEALING A MENACING FORM -- A VISION FROM A HORROR MOVIE -- THE BATMOBILE!]
[PENGUIN AND THE OTHERS GAPE AT THE EMBLEM OF VENGEANCE! AND PENGUIN JUST BOLTS FOR THE ESCALADE -- DIVING IN --]
[KENZIE ABOUT TO FOLLOW -- WHEN A ROAR COMES FROM THE OPPOSITE DIRECTION -- SELINA CHARGING HIM ON HER BIKE SNATCHING THE DUFFLES RIGHT FROM HIS HAND -- RACING AWAY!]
[PENGUIN'S ESCALADE SCREECHES OUT -- THE BATMOBILE CATAPULTING AFTER HIM -- WITH A CRAZY NITROUS HIT -­ FISHTAILING -- TIRES FINALLY GRIPPING GROUND -- GORDON WATCHING IN AWE AS IT VANISHES INTO THE FOG AND RAIN--]
INT./EXT. DRIVING ON GOTHAM STREETS - IMMEDIATELY
Cobblepot: Whoa!
[TIRES VIOLENTLY DRUMMING ON WET COBBLESTONES -- PENGUIN MANNING THE ESCALADE IN PANIC -- AS -- THE BATMOBILE CHARGES IN AND OUT OF VIEW LIKE A RAGING, HUNGRY SHARK -­ ENGINE SHRIEKING -- BAM-SCREEEEEE!!! -- IT SLAMS BRUTALLY INTO THE ESCALADE -- TRYING TO MUSCLE IT OFF THE ROAD!!!]
Cobblepot: C'mon! C'mon!
[PENGUIN SCRAMBLES FOR HIS UZI -- UNLEASHING IT THROUGH HIS PASSENGER WINDOW -- GLASS AND BULLETS SPRAYING THE BATMOBILE -- HITS SPARKING OFF ITS ARMORED SURFACE AND BULLET-PROOF WINDOWS -- AS IT SLAMS: BAM-SCREEEEEE!!! -­ HARD INTO THE ESCALADE AGAIN!]
Cobblepot: This guy's crazy!
[PENGUIN STRUGGLES FOR CONTROL -- SUDDENLY CRANKING THE WHEEL -- STEERING OFF THE ROAD -- LURCHING WILDLY UP AN EMBANKMENT -- RIGHT ONTO THE HIGHWAY --]
Cobblepot: C'mon!
[90 M.P.H. TRAFFIC SWERVING -- COLLIDING -- AS A MASSIVE DISPLAY OF VEHICLES -- MADLY HYDROPLANE -- THE SUV SPINS ACROSS LANES -- SLOWING JUST ENOUGH TO REGAIN CONTROL -­ PENGUIN SNAPS HIS HEAD TO SEE -- THE BATMOBILE CRESTING THE EMBANKMENT -- PENGUIN PUNCHES IT -- VEERING OFF DOWN THE FLOODED HIGHWAY -- WATER SPRAYING IN HIS WAKE -­ BATMOBILE BARRELLING AFTER -- !!!]
[PENGUIN SLALOMS RECKLESSLY THROUGH SPEEDING TRAFFIC -­ BARELY MAINTAINING CONTROL --]
Cobblepot: Move! Get outta the way! C'mon! Get outta the way!
[HIS CRAZED EYES FLIT TO THE REARVIEW -- THE BATMOBILE RELENTLESSLY MATCHING HIM -­ MOVE FOR MOVE -- DESPERATE, PENGUIN STREAKS AHEAD SUDDENLY WALLED IN BY --]
[A LONG LINE OF EIGHTEEN-WHEELERS CHUGGING AT HIGH SPEED -­ PENGUIN GLANCES BACK -- THE BATMOBILE GAINING -- NOWHERE TO GO NOW -- TRAPPED -- WHEN -- PENGUIN DOES SOMETHING CRAZY -- ACCELARATING EVEN FASTER -- PAST THE LEAD TRUCK -- JERKING RIGHT IN FRONT OF HIM -- THE TRUCK SCREECHES -­ IMMEDIATELY HYDROPLANING -- SETTING OFF A CHAIN REACTION!]
[BATMAN SEES THE HORRIFYING SIGHT OF MASSIVE TRUCKS AHEAD ALL JACK-KNIFING -- ONE AFTER ANOTHER -- THE BATMOBILE HEADING STRAIGHT FOR UNAVOIDABLE, CATACLYSMIC COLLISION!]
[BATMAN SEIZES THE NITROUS LINE TRIGGER -- SQUEEZING IT -­ THE BATMOBILE SUDDENLY LAUNCHING TOWARD THE TRUCKS -­ BATMAN YANKING THE WHEEL -- SKIDDING INTO A CRAZY DRIFT--
[PENGUIN LOOKS BACK AS THE TRUCKS ALL CONVERGE AROUND THE DOOMED, CAREENING BATMOBILE, OBSCURING IT FROM VIEW--]
Cobblepot: I got you! I got you! Take that, you friggin psycho! I got YOU!
[WHEN -- TO PENGUIN'S SHOCK -- THE BATMOBILE RE-APPEARS TWO WHEELS FLIPPING UP ONTO THE CENTER DIVIDER -- THE TILTED CAR SHOOTING THROUGH THE NARROW SPACE ON THE SHOULDER BESIDE THE EXPANDING PILE-UP -- THE BATMOBILE BARELY CLEARING THE DESTRUCTION -- PENGUIN'S EYES WIDEN AS IT SWERVES OFF THE DIVIDER -- RIGHT AT THE ESCALADE --]
[KA-BLAMMMM! THE BATMOBILE RAMS SAVAGELY INTO THE ESCALADE THE TWO VEHICLES LOCKING TOGETHER AS THEY SPINNNN]
[ON BATMAN -- WORLD BLURRING AROUND HIM -- BATMOBILE SHAKING -- AS HE KEEPS HIS FOOT FURIOUSLY ON THE GAS--]
[UNTIL FINALLY THE TWO VEHICLES SMASH STRAIGHT INTO A LINE OF YELLOW OFF-RAMP CRASH BARRELS -- THE BATMOBILE DISENGAGING -- AS THE ESCALADE FLIPS --]
INSIDE THE ESCLADE
THE PENGUIN -- ROLLS OVER -- AND OVER -- AND OVER -- TILL SCRRRRAPE... HE STOPS -- UPSIDE-DOWN. PENGUIN bleeds -­ stunned -- hearing only pounding rain now... He gazes out the window -- disoriented to SEE... UPSIDE-DOWN BAT BOOTS walking surreally into view on the road right outside -­ BATMAN crouches slowly into frame -- Penguin's bloodshot eyes widening -- as Batman leans in eerily --]
EXT. DESERTED GOTHAM TRAIN YARD - NIGHT
PENGUIN'S HEAD SLAMS INTO THE SIDE OF A TRAIN CAR -- THE HOOD is yanked off -- he looks around in panic -- hands and feet bound -- BATMOBILE'S HEADLIGHTS IN HIS FACE -­- Batman looms in near silhouette before him -- as a FIGURE gets out of another car, joining ominously; it's Gordon.]
Cobblepot: The hell is this? Good cop, batshit cop?!
Batman: Who's the Riddler?
Cobblepot: Riddler?! How the hell should I know?!
Gordon: Let's make it easy for you, Oz. Cops caught you doing something. They were gonna shut you down, put you away. So you gave up a bigger fish to save your ass.
Batman: You ratted out Salvatore Maroni. His drops operation.
Gordon: But the cops, the city officials, the mayor, the DA, they got greedy, right? Wasn't enough, a big career-making bust, they wanted to take over the drops business, too, but they needed a minor-league mope like you to run it.
Batman: You don't just work for Carmine Falcone. You work for them, too.
Cobblepot: What are you, crazy?!
Batman: That why you killed the girl?
Cobblepot: I didn't kill no girl!
Batman: We know she worked for you at the 44 Below.
Gordon: But she got too close, right? Found out from Mitchell that you were the rat, so you killed her! But somehow, Riddler found out, too. He knows so much about you. You know about him.
Batman: Who is he?
Cobblepot: Boy, you two are a hell of a duet. You should start harmonizing! There's only one problem with your little scenario, okay? I ain't no rat! You got any idea what Carmine Falcone would do to me, he heard this kinda talk?!
Gordon: Oh, you don't wanna talk about rats, huh? Maybe we can talk about what they did to my partner's face!
[GRUESOME CRIME SCENE PHOTOS are thrust in Penguin's face:]
Cobblepot: Holy god, what are you showing me?!
Gordon: This was around his head!
Cobblepot: C'monnn!
Gordon: OPEN YOUR EYES! Are you el rata allada?
Cobblepot: "El rata alada"?!
Gordon: Yeah, "rat with wings". A stool pigeon. That's not you? The symbols in the maze right here, it says "you are el rata allada!"
Cobblepot: "You are el rata alada", it says that?!
Gordon: Why, you got something to tell us?!
Cobblepot: Yeah! That's, like, the worst Spanish I ever heard.
Gordon: What?
Cobblepot: It's la. La rata. What, is this Riddler stupid, or something?!
[Thrown, Gordon loses steam as Batman silently takes the maze photo -- eyeing the cipher -- Gordon watches him --]
Cobblepot: Jesus! Look at you two! World's greatest detectives! Am I the only one here who knows the difference between el and la?! Jesus! No habla español, fellas?!
Gordon: Do me a favor, shithead, shut up!
[Penguin falls silent; Gordon steps over to Batman--]
Gordon: You think he made a mistake?
Batman: (studying cipher) He doesn't make mistakes.
Cobblepot: "A rat with wings". You know what that sounds like to me? A friggin bat! Huh?! You ever think of that?!
Batman: "You are el rata..." "U. R. L."
EXT. GORDON'S CAR - MOMENTS LATER
[BATMAN AND GORDON gaze at the laptop which sits on the roof -- Batman types "www.rataalada.com" into the browser -- the SCREEN GOES BLACK -- a dead link -- ?]
Gordon: Maybe it was a mistake. Maybe he wasn't as smart as you--
Batman: Wait!
[--A BLINKING PLAIN TEXT CURSOR appears alone on screen:]
["<?>"]
[They watch it PULSE EERILY... when IT STARTS TYPING TEXT. ]
Gordon: Is that him?
[-- their eyes follow the cursor: "did you find him?"]
Gordon: Holy shit.
[Batman reaches for the keys... types: "el rata alada?"]
[The cursor hesitates, blinking -- then TYPES BACK: "yes"]
[Batman writes: "maybe. is a penguin a rat with wings?"]
[Another pause then MORE TEXT comes through: "interesting" -- then -- "you're missing the big picture"]
Gordon: The hell does that mean, is he or isn't he?!
[Batman holds up a quieting hand, as another TEXT BEGINS:]
["i need to show you more for you to understand" -- then: "my next victim is the biggest piece of the puzzle yet"]
[Gordon and Batman exchange a look of dread --]
[Batman types: "victim?" -- then -- "dead?"]
[The cursor pauses creepily; writes back: "he will be soon" -- then -­ "here's a clue to where you can find him..." -- the cursor writes out A RIDDLE -- Gordon reads along:]
Gordon: "I grew up from a seed, tough as a weed. But in a mansion, in a slum. I'll never know where I come from. Do you know what I am?" Any idea?
Batman: Yeah. It's an orphan.
Batman types: "an orphan?" -- the cursor writes: "good bye" and the SCREEN GOES BLACK. Something HAUNTS Batman:]
Batman: A mansion in a slum. He's talking about the old orphanage.
Gordon: The one that burned down?
Batman: It was part of the Wayne Estate. And they donated it, after they built the tower.
Gordon: Let's go.
[They start off -- when a VOICE cries from off-screen --]
Cobblepot: You guys realize I'm still here, right?
[REVEAL PENGUIN -- hands and feet still helplessly bound --]
Cobblepot: You gonna untie me? How the hell am I supposed to get out of here?!
[-- and they get into their cars -- starting off -­-]
Cobblepot: Hey! YOU GODDAMN SONS OF BITCHES!
INT. BATMOBILE - MOVING - NIGHT
[APPROACHING A FADED SIGN: "A GOTHAM RENEWAL PROJECT -­ INVESTING IN OUR FUTURE" BATMAN SLOWS, arriving at THE BURNT-DOWN REMAINS OF THE GOTHAM ORPHANAGE...]
[INT. MAIN ENTRYWAY - GOTHAM ORPHANAGE RUINS - NIGHT
[BLACKNESS SHATTERS as the front doors are KICKED IN Batman and Gordon stare in... Gordon raises his GUN--]
Batman: No guns.
Gordon: Y-Yeah, man, that's your thing.
[And THEY ENTER... scanning black walls and floors rain drips inside -- Gordon's beam lands on WHITE-PAINTED ARROWS FRESHLY SCRAWLED over soot; he pans along them -­ to A GOTHIC STAIRCASE -- Batman and Gordon exchange a look -- begin FOLLOWING MORE ARROWS UP THE STEPS TO --]
A LONG FOREBODING HALLWAY OF DOORS UPSTAIRS
[MORE ARROWS point on. Gordon sweeps his light into empty rooms -- when they notice EERIE ECHOING IN THE DISTANCE --]
Batman: What's that?
[As they move closer, it sounds strangely like... MUSIC -­ a distant BOY'S CHOIR singing SHUBERT'S "AVE MARIA"! WEIRD GIGGLING COMES SUDDENLY FROM VERY CLOSE BY -- THEY LIFT THEIR EYES TO -- A SILHOUETTED FIGURE EMERGING FROM A DOOR -- IT FREEZES, STARTLED TO SEE BATMAN AND GORDON --]
Gordon: Hey! HEY!
[THE FIGURE BOLTS TO ANOTHER ROOM -- SLAMMING THE DOOR -­ BATMAN AND GORDON ALREADY CHASING -- GORDON RAISING HIS GUN -- SMASHING THE DOOR -- THEY LOOK INSIDE TO SEE...]
Gordon: Dropheads.
[...A GROUP OF DROPS ADDICTS SPRAWLED on melted metal bed frames, FACES CONTORTED IN FROZEN GRINS; one GIGGLES in a daze -- Gordon swings his light to the Figure from the hallway, who cowers, gripping A BOTTLE AND EYE-DROPPER --]
[-- the pair hear -- CHEERS and APPLAUSE ring out as the DISTANT SINGING STOPS --]
Gordon: The hell is that?
[A MAN'S VOICE BEGINS ECHOING --]
Thomas Wayne: Thank you. Thank you, so much, thank you, folks!
[SOMETHING IN THE ECHOING VOICE STRIKES BATMAN -- Gordon watches surprised -- AS BATMAN STARTS TOWARD THE SOUND --]
[MOVE WITH HIM to the END OF THE HALL, near the sound of the VOICE -- Batman looks up, haunted; white paint above the doorway says: "WHERE IT ALL BEGAN" -- he STEPS INTO --]
A GRAND HALL - HIGH WIDE ANGLE
[Batman dwarfed by the massive, burnt-out room; he squints at A BEAM OF LIGHT, SPARKLING THROUGH DRIPPING RAIN -­ it's from a cheap, MINI USB PROJECTOR on a tiny tripod -­ Batman looks at the wall where AN OLD GCl CLIP FLICKERS -­ the MAN WITH THE ECHOING VOICE gives a speech in front of a BOY'S CHOIR IN THE VERY ROOM BATMAN NOW STANDS IN -- a CHYRON explains why Batman is so affected -- it's THOMAS WAYNE. Batman watches, unnerved -- staring at a ghost--]
Thomas Wayne: Thank you all, thank you, uh... Thank you for coming today. I believe in Gotham. I believe in its promise. But too many have been left behind, for too long. And that's why I'm here today. To not only announce my candidacy for mayor, but also the creation of the Gotham Renewal Fund. Win or lose, the Wayne Foundation pledges a one billion dollar donation to start a charitable endowment for public works.
[Batman is struck by the sight of TEN-YEAR-OLD BRUCE beside his MOTHER -- Batman's eyes drift to more white painted words on the wall beside the projected image -­ "RENEWAL IS A LIE" -- Batman stares, disturbed --]
Thomas Wayne: I wanna bypass political gridlocking and get money to people and projects who need it now, like these children.
[A VOICE behind startles Batman out of his reverie --]
Gordon: (reading) "Sins of the father..."
[BATMAN SPINS it's GORDON -- he follows Gordon's gaze to MORE WRITING on the wall: "THE SINS OF THE FATHER ... "]
Gordon: Renewal is about rebirth. It is about planting seeds and renewing Gotham's promise.
Batman: "...shall be visited upon the son."
[Gordon walks closer, staring, as he gets it too...]
Gordon: Jesus, his next victim is Bruce Wayne... Hey--!
[He turns for confirmation -- BUT BATMAN IS ALREADY GONE.]
A PHONE RINGING - SOMEWHERE IN WAYNE TOWER - NIGHT
[IT RINGS TWICE -- but no one comes to answer -- the tiny illuminated SCREEN FLASHING -- "NO CALLER ID" --]
INSIDE THE SPEEDING BATMOBILE - NIGHT
[ENGINE ROARING -- WE HEAR RINGING ON HANDS-FREE]
[Batman staring at his phone willing someone to pick up]
[SMASH TO:]
ALFRED ALONE IN THE STUDY - WAYNE TOWER - NIGHT 104
[WE HEAR ONLY THE INSISTENT RINGING OF THE PHONE -- as Alfred opens piles of mail -- when he NOTICES -- A BULGING MANILA MAILER -- he picks it up, curious... reads the SCRAWLED LETTERING: "PERSONAL/CONFIDENTIAL -- FOR BRUCE WAYNE'S EYES ONLY" ...starts to OPEN IT...]
[SMASH TO:]
REFLECTIONS RACING OVER THE BATMOBILE'S WINDSHIELD
[BATMAN NOW SCREAMING -- BUT ALL WE HEAR IS THE RINGING PHONE -- AS THE BATMOBILE RIPS INTO THE ROLLING PARK --]
ALFRED
[pulls a GIFT-WRAPPED BOX from the mailer... sees A SILVER ENVELOPE taped to it -- HIS EYES WIDEN IN SHOCK as he discovers the envelope reads... "FOR THE BATMAN" --]
[THE INSISTENT PHONE GROWING LOUDER -- LIKE A WARNING -­ as he flips the envelope -- PUZZLED TO FIND A LABEL: "FIREPROOF" ALARMED -- ALFRED GLANCES AT THE GIFT- WRAPPED BOX -- SEES WIRES PROTRUDING FROM THE PAPER]
BACK TO THE PHONE
[THE RINGING FINALLY STOPS -- AS A WOMAN'S HAND PICKS UP]
INT. BATMOBILE - IMMEDIATELY
Batman: Dory! I need to speak to Alfred!
Dory: Oh, Mister Wayne--
Batman: Listen to me! Something terrible is gonna happen!
CLOSE ON DORY, HOLDING THE PHONE
[-- for the first time we see her face; she's distraught--]
Dory: I'm afraid it already has, sir.
BATMAN
LIFTS HIS EYES WITH DREAD AS -- WAYNE TOWER COMES INTO VIEW -- BLACK SMOKE PLUMES FROM AN UPPER FLOOR -- FIREMEN AIM HOSES FROM TELESCOPIC LADDERS -- DOUSING FLAMES --]
BACK TO ALFRED IN THE STUDY - FLEETING -- A WIDE SHOT
[STANDING WITH THE PACKAGE ONE LAST SECOND -- TOSSING IT HE DIVES -- AS THE PACKAGE SILENTLY ERUPTS -- WE HEAR --]
Dory: About an hour ago.
BACK TO BATMAN
[rocked, realizing he never had a chance to save him --]
THEN BACK TO DORY
[as anguished tears begin to spill--]
Dory: I'm so sorry. I've been trying to reach you!
[As A BLUR WIPES in front of her TO REVEAL EMERGENCY PERSONNEL SWARMING the stairs of a LOWER TOWER LANDING--]
Hushed GCPD Detective: (prelap) The package was intended for you.
INT. WAYNE TOWER - GRAND FOYER - NIGHT
[Bruce, stunned as DETECTIVES speak in the AFTERMATH:
Hushed GCPD Detective: It was a C4 explosive, sent through the mail. We found this, too.
[He shows Bruce the SILVER ENVELOPE: "TO THE BATMAN"; then pulls out A HEAT-SCORCHED GREETING CARD WITH CARTOON EYES -- Bruce looks -- SCRAWLED inside is "SEE YOU IN HELL"]
INT. HOSPITAL - WINDOW OUTSIDE AN I.C.U. ROOM - NIGHT
[Bruce gazes through the glass at Alfred, bandaged and unconscious, breathing through an oxygen mask as NURSES attend to him; a DOCTOR emerges, moves to Bruce, grave...]
Doctor: We've sedated him. We just have to hope he stabilizes. You should go home, Mr. Wayne, get some sleep.
[Bruce nods, but it's not clear he's even heard what the doctor said; the doctor stares at him... says gently...]
Doctor: Is there anyone else to notify? Next of kin?
[Finally, Bruce turns, disoriented...]
Bruce: No. It's just me.
INT. WAYNE TOWER - DINING ROOM - EARLY MORNING
[A HEAVY TABLE SCRAPES across the tiled floor -- WE HEAR a HISS OF A SPRAY CAN -- AS WHITE LINES SPRAY ON THE TILE--]
[CLOSE ON PHOTOS -- MAYOR AND ANNIKA -- COMMISSIONER AND THE DROPS PUSHER -- SCRAWLED WORDS -- MITCHELL -- SAVAGE -- COLSON -- WHEN THE HISSING STOPS -- AS WE REVEAL -­ BRUCE, shirtless, on hands and knees, spray can in hand, staring down at something on the floor, UTTERLY TORTURED -- as he begins to rise slowly to his feet -- we see -­ THE DINING ROOM FLOOR IS NOW A MASSIVE EVIDENCE BOARD -­ lines connect details -- HE'S FROZEN on one area -- it says: "THE SINS OF MY FATHER", followed by "???"]
[ON BRUCE'S EYES as they bore into the words... then, shift intensely to another phrase -- "RENEWAL IS A LIE"]
INT. WAYNE TOWER - THE STUDY - MOMENTS LATER
[YELLOW CRIME SCENE TAPE BREAKS AS BRUCE ENTERS MOVING past the charred aftermath of the explosion -- to A HUGE ANTIQUE WOOD CABINET -- he opens a LONG DRAWER--]
[CLOSE ON LEGAL FILES -- as FINGERS DIG to FIND a TAB: "RENEWAL" -- BRUCE RIFLES THROUGH -- OPENS THE NEXT DRAWER -- MORE "RENEWAL" FILES -- THE NEXT -- MORE...]
INT. BATCAVE - AFTERNOON
[Bruce sets down Renewal files on his work bench, lifting his laptop screen -- when he notices AN OPEN WINDOW -­ the contact lens interface -- but now there is A LIVE IMAGE -- a HANDWRITTEN SIGN faces camera: "WHERE R U?" Surprised, Bruce picks up the ear piece --]
Bruce: Selina?
[SELINA appears staring blindly at the camera --]
Selina: Can you see me?
Bruce: Yeah, I can see you.
Selina: (harried, urgent) I need to talk to you. Where can we go?
EXT. UNFINISHED SKYSCRAPER - HIGH OVER THE CITY - SUNSET
[Batman's silhouette, gazing darkly at Gotham -- when the elevator arrives -- he turns as Selina emerges in her cat suit, removing her wind mask. He looks at her with edge--]
Batman: Cat burglar pulling another score?
Selina: What?
Batman: Wasn't sure I'd see you again.
Selina: Yeah, well, things are getting a little hot for me, so... (then) How could they do that to her? That piece of shit cop, Kenzie. Her body was in his car! I'm gonna find him, and I'm gonna make him pay. You gonna help me?
Batman: Help you?
Selina: Yeah. I thought you were Vengeance.
Batman: Your friend got involved with the wrong people, she didn't know any better. Maybe you should've explained it to her.
Selina: What the hell is that supposed to mean?
Batman: It means your choices have consequences.
Selina: Jesus Christ, choices? Y'know, whoever the hell you are, you obviously grew up rich.
[He just stares back -- giving nothing away -­-]
Batman: Was it worth it?
Selina: What?
Batman: Compromising yourself for money?
[She glares at him--]
Batman: What'd you have to do to set up that score? How close did you have to get to Penguin? To Falcone?
Selina: You don't know what the hell you're talking about, Falcone owes me that money.
Batman: He owes you.
Selina: Yeah! And a lot more.
Batman: Oh, really? Why's that?
Selina: You know what? I can't even talk to you.
Batman: (grabs her hard) No! I wanna know why a guy like Falcone would owe you anything!
Selina: BECAUSE HE'S MY FATHER!
[Batman falls silent, stunned -- she shrugs him off... stands there, eyes burning... then, quietly:]
Selina: My mother worked at the 44 Below, just like Anni. She used to take me there when I was a little girl.
Batman: To the club?
Selina: Yeah. I hid out in the dressing room while she worked. I used to see him there. He scared the shit outta me. And I could never understand why he looked at me the way he did. Then, one night, my mother told me who he was.
[He studies her as she gazes out at the skyline...]
Selina: When I was 7, my mother was murdered. Strangled. Never found out who. Probably some creep from the club. Anyway, social services came to take me away, and he didn't say a thing. Couldn't even look at me. (looks up at him) He owes me that money.
[He looks at her, taking her in for the first time; nods:]
Batman: I'm sorry. For what I said.
[She smiles. Studies his eyes.]
Selina: Nah, it's alright. You assume the worst in people. Which, well... Maybe we're not so different after all. (running a finger along his mask) Who are you under there? What are you hiding? Are you just... hideously scarred?
Batman: Yeah.
[He smiles. She smiles back. Chemistry between them. Then:]
Selina: Listen to me. If we don't stand up for Annika, no one will. All anyone cares about in this place are these white privileged assholes. The mayor, the commissioner, the DA, now Thomas and Bruce Wayne. As far as I'm concerned, that psycho's right to go after these creeps! I think you'd be on his side.
Batman: What do you mean, "Thomas and Bruce Wayne"?
Selina: What, do you live in a cave? The Riddler's latest, it's all about the Waynes.
[He's silently struck -- but Selina doesn't even notice --]
Selina: Listen! If I can find that dickbag, Kenzie, will you help me?
[He looks at her, reeling -- sees her pleading eyes]
Selina: (quiet, intimate) Please? C'mon, Vengeance...
Batman: Just don't make any moves without me, you understand? It's a lot more dangerous than you know--
[-- she cuts him off with a LONG KISS... then pulls slowly back... staring into his eyes, whispering with a smile --]
Selina: I told you, baby. I can take care of myself.
[And she starts off -- he watches her go... as we hear --]
Thomas Wayne: I'm Thomas Wayne, and I approve this message.
[As Copland's "FANFARE FOR THE COMMON MAN" begins--]
INT. "THE CAVE" - UNDERNEATH WAYNE TOWER - NIGHT
[BATMAN PULLS OFF HIS COWL -- revealing Bruce, BLACK CAMO AND SWEAT running down his face from around his eyes; he stares, rattled, at GCl on the huge LED TV -- the CHYRON reads: "EXPLOSIVE NEW RIDDLER VIDEO GOES VIRAL" -- below that: "Killer's message has over 13 million views"]
[THE VIDEO is A TWENTY YEAR OLD CAMPAIGN AD: THOMAS WAYNE at the orphanage, MARTHA and YOUNG BRUCE beside him --]
Thomas Wayne: From a very young age, my family and Martha's family, the Arkhams, instilled in both of us... That giving back is not just an obligation. It's a passion. That is our family's legacy.
[The IMAGE FREEZES -- EERIE MUSIC swallowing the "Fanfare" as the video takes on the tone of a political attack ad -­ VINTAGE FAMILY PHOTOS of the WAYNES and ARKHAMS appear --]
The Riddler: The Waynes and the Arkhams: Gotham's founding families. But what is their real legacy?
[-- the photos bleed RED -- turning DARKER -- as a GOTHAM GAZETTE REPORTER'S BYLINE PHOTO fades up --]
The Riddler: Twenty years ago, one reporter set out to uncover the dark truth -- he found shocking family secrets.
[FLASHES OF POLICE and AUTOPSY PHOTOS FILL THE SCREEN --]
The Riddler: How, when Martha was just a child, her mother brutally murdered her father, then committed suicide, and how the Arkhams used their power and money to cover it up.
[WE SEE A DEATH CERTIFICATE; "Cause of Death: ACCIDENTAL"]
The Riddler: How Martha herself was in and out of institutions for years, and they didn't want anyone to know!
[SHOTS OF AN INSTITUTION -- spying through a fence at a DISTURBED YOUNG WOMAN, SURROUNDED BY NURSES--]
The Riddler: Thomas Wayne tried to force this crusading reporter into a hush money agreement to save his mayoral campaign...
[AS THOMAS SHAKES HANDS on the campaign trail -- a LEGAL DOCUMENT spins on screen -- THE WORD "HUSH!" APPEARS --]
The Riddler: ...but when the reporter refused?! Wayne turned to long-time secret associate Carmine Falcone and had him MURDERED!
[A GUNSHOT RINGS OUT -- NEWS FOOTAGE of the DEAD REPORTER plays; the HEADLINE: "GANG-LAND STYLE EXECUTION" -- as a SUPER-ENLARGED PHOTO from the orphanage dedication FADES UP: THOMAS and CARMINE FALCONE TALKING CONSPIRATORIALLY --]
The Waynes and the Arkhams! Gotham's longtime legacy of lies and murder!
[We see A CAMPAIGN POSTER; "MAYOR" has been crossed out, it reads: "THOMAS WAYNE FOR MURDERER". RIDDLER appears--]
The Riddler: I hope you're listening, Bruce Wayne, this is your legacy, too. And Gotham needs you to answer for the sins of your father... Goodbye.
[ON BRUCE, absolutely ROCKED -- as CLUB MUSIC RISES --]
[BLACKNESS]
[SWINGS OPEN REVEALING BRUCE -- OUTSIDE THE CLUB -­-]
Bruce: Do you know who I am?
[REVEAL ONE OF THE TWIN BOUNCERS -- staring in shock -­-]
Bouncer: You're Bruce Wayne.
Bruce: I wanna see Carmine Falcone.
[The Bouncer just looks at him -- then SHUTS THE DOOR -­ BEAT -- the DOOR OPENS: BOTH TWINS standing there now --]
Bouncer: (looking at his twin) See?
[The Twin stares in disbelief as Bruce glares; then breaks into an excited smile, like he's seeing a rock star --]
INT. FALCONE'S SHORELINE LOFT - PRIVATE ELEVATOR - NIGHT
The doors open; we FOLLOW BRUCE down a long hallway to A DRAWING ROOM; HOODS and HOSPITALITY WOMEN crowd around a pool table, drinking, playing -- at the table, CARMINE FALCONE--]
Falcone: There was this guy who invented the ball, right? He must've made a fortune. Thinking about the concept, it's new, right? Fresco, you know how much this sweater cost?
Fresco: No, boss.
Falcone: One thousand one hundred and eighty two dollars. You know why communism failed, right? They're all staring! Alright. Alright! Perfect, it's never gonna be that good again.
Cobblepot: Hey! Johnny Slick! What're you doin' here?
[Falcone looks over to see Bruce, the Twins behind him -­ Bruce glowers silently at Falcone, who stares back with a smirk... when the others begin to notice, quieting...]
Falcone: Give us a moment here, fellas.
[The BODYGUARDS usher everyone out.]
Cobblepot: See ya, champ!
Fresco: C'mon, sweetheart.
Falcone: Have a seat.
[But Bruce just stands there.]
Falcone: I thought I might hear from you. This Riddler sonuvabitch is really... Starting things up, huh?
Bruce: Is it true?
Falcone: What? That reporter business?
[A beat. Falcone studies Bruce's rage-filled eyes.]
Falcone: What do you wanna know here, kid?
Bruce: Did you kill him, for my father?
[A beat as they look at each other.]
Falcone: Look. Your father was in trouble. This reporter had some dirt. Some very... personal stuff about your mother. Your family history. Y'know, everybody's got their dirty laundry, that's just how it is. But you don't want none of it coming out, not right before the election. Your father tried to pay the guy off, but he wasn't going for it, so he came to me. I never seen him like that. He said, "Carmine, I want you to put the fear of God in this guy."
[Bruce stares, unnerved...]
Falcone: And when fear isn't enough... Oof, y'know? Your father wanted me to handle it, so I did. (a shark's eyes) I handled it.
[Bruce is truly unmoored; Falcone enjoying his pain...]
Falcone: I know. You thought your father was a boy scout. But you'd be surprised what even a good man like him is capable of in the right situation. (then) Do me a favor, don't lose any sleep over it. This reporter was a... A lowlife. He was on Maroni's payroll.
Bruce: Maroni?
Falcone: Oh, yeah, he could never stand your father and I had history. And after what happened with that reporter, Maroni was worried that your father would be in my pocket. Forever. He would've done anything to keep him from becoming mayor, you understand?
[Bruce shakes his head, reeling, resisting the notion...]
Bruce: Are you saying Salvatore Maroni got my father killed?
[Falcone lets that just hang in the air... then:]
Falcone: Do I know it for a fact? I'm just saying, it sure looked that way to me.
[As the shock hits Bruce... Falcone regards him coldly...]
Falcone: This is what you wanted, huh? This little conversation here?
[Bruce can't even respond...]
Falcone: Ah. It's been a long time coming, huh? I mean, you ain't a kid no more.
INT. WAYNE TOWER - GRAND FOYER - DAWNING LIGHT
[Bruce arrives at the top of the stairs in a daze, stops, staring at... the CHAINED and PADLOCKED SET OF DOORS...]
INT. BRUCE'S PARENTS' DARKENED BEDROOM - MOMENTS LATER
[Untouched in twenty years... a frozen moment, covered in dust. Bruce enters, taking in the unbearable stillness... In the early light, he sees a man's suit jacket draped on a chair... a pair of glasses rest on an old newspaper... He turns, seeing a STAINED TEACUP, askew in its saucer on a woman's dressing table... behind it, on the mirror, are yellowed CHILDREN'S CRAYON DRAWINGS: his... One's a stick- figure, smiling family... a mother, father, and child...]
[A quiet HEART MONITOR BEEPING begins as Bruce stares...]
INT. ALFRED'S HOSPITAL ROOM - TWILIGHT
[Alfred opens his eyes to see BRUCE seated at his bedside, rumpled. Bruces smiles sadly, finally speaking, pained:]
Bruce: You lied to me. My whole life. (long, pregnant beat) I spoke to Carmine Falcone. He told me what he did, for my father. About Salvatore Maroni.
[Alfred's eyes burn... trying to understand...]
Alfred: He told you... Salvatore Maroni--
Bruce: Had my father killed.
[Alfred just gazes, pained.]
Bruce: Why didn't you tell me all this? All these years I've spent fighting for him, believing that he was a good man--
Alfred: He was a good man. You listen to me. Your father was a good man. He made a mistake.
Bruce: Mistake?! He had a man killed. Why? To protect his family image? His political aspirations?
Alfred: It wasn't to protect the family image, and he didn't have anyone killed.
[The forcefulness of that makes Bruce stop -- he looks at Alfred... who continues, simply, emotional...]
Alfred: He was protecting your mother. He didn't care about his image or the campaign, any of that. He cared about her and you. And in a moment of weakness, he turned to Falcone, but he never thought Falcone would kill that man. Your father should've known that he would do anything to finally have something on him that he could use. That's who Falcone is! And that was your father's mistake. (then) But when Falcone told him what he'd done, your father was distraught. He told Falcone that he was going to the police, that he would confess everything. And that night, your father and your mother were killed.
[Bruce is stunned...]
Bruce: It was Falcone.
[Alfred looks at him sadly, so wanting to give Bruce the answer he needs, the answer he's wanted his whole life...]
Alfred: Oh, I wish I knew for sure. Maybe it was some random mugger on the street who needed money, got scared and pulled the trigger too fast, if you don't think I've spent every day searching for that answer... (truly distraught) It was my job to protect 'em, you understand? I know you always blamed yourself, but you were only a boy, Bruce! I could see the fear in your eyes. But I didn't know how to help. I could teach you how to fight, but... I wasn't equipped to take care of you, you needed a father! And all you had was me... I'm sorry.
[Alfred averts his eyes, red with heartbreak and regret. Bruce stares at him, deeply affected...]
Bruce: Don't be sorry, Alfred. God, I... I never thought I'd feel fear like that again. I thought I'd mastered all that. I mean... I'm not afraid to die.
[His unflinching gaze meets Alfred's, who nods, solemn... then, Bruce's eyes shift away again, processing...]
Bruce: But I realize now there's something I haven't got past. This fear of ever going through any of that again. (looking at Alfred) Of losing somebody I care about.
[Alfred watches Bruce, a fleeting glimpse of the man as a boy... He reaches out a hand. Bruce stares, surprised... then lifts his own... clasping Alfred's tightly... Then Bruce darkens... noticing something outside the window... Alfred turns... sees the BAT SIGNAL IN THE SKY.]
EXT. ABANDONED SKYSCRAPER CONSTRUCTION SITE - NIGHT
[The Batmobile arrives -- emerging to see Gordon, getting out of his car too -- they trade confused looks--]
Gordon: Hey...
Batman: I saw the signal. That's not you?
Gordon: I thought it was you!
[They both lift their eyes to the spotlight in the sky--]
INT. RISING CONSTRUCTION ELEVATOR - SECONDS LATER
[We hear SCREAMS as THE UPPER FLOOR COMES INTO VIEW -- and GLIMPSE SELINA IN CAT SUIT, VICIOUSLY KICKING SOMEONE -- Shocked, Batman and Gordon rush from the lift--]
ONTO THE UNFINSHED FLOOR
[Where Selina has a PRISONER BOUND BY HER LOCK CHAIN to the GUARDRAIL AT THE BUILDING'S EDGE -- KENZIE -- HIS FACE SWOLLEN -- she's got his GLOCK in both hands -­ prowling, crazed -- she sees Batman, spins -- FIERCE --]
Selina: I found him!
Batman: I see that.
Selina: He had my shit, my phone. She left a message the night they took her, she called me!
Kenzie: Gordon! Help me out, man, she got my gun!
Selina: SHUT UP!
Batman: Put the gun down.
Selina: I'm telling you, goddammit, she called me!
Selina: Here. Listen.
[She hits PLAY ON A VOICEMAIL -- TOSSES THE PHONE to Batman -- Gordon steps closer -- as THE DISTORTED MESSAGE PLAYS: PANICKED BREATHING as an ANGRY VOICE approaches--]
Kenzie: [voicemail] Hey! Get back here! Where you goin?!
Annika: [voicemail] Nowhere!
Kenzie: [voicemail] C'mere!
[-- ANOTHER MAN'S VOICE joins -- YELLING over them --]
Falcone: [voicemail] Hey! What are you doing, Kenzie? You're scaring her!
Kenzie: [voicemail] I'm s- I'm sorry, Mr. Falcone.
Annika: [voicemail] Please don't hurt me, please, please, please--!
Falcone: [voicemail] (gentler) Hey, don't be scared. C'mere. Now let me ask you again: What did Mitchell tell you?
Annika: [voicemail] N-Nothing! He--
Falcone: [voicemail] Don likes to talk, I know that. Especially to pretty girls like you. That's why I made him take your passport, until we could have this little conversation.
Annika: [voicemail] I promise to get out of here okay? You'll never hear from me again, nobody will, please--!
Falcone: [voicemail] I will get out outta here, I promise! But first, I gotta know... What did he tell you?
Annika: [voicemail] He... He just said they all made a deal with you.
Falcone: [voicemail] Oh. Oh, he told you about that, huh? The deal.
Annika: [voicemail] He-- He said you gave some information on some drops thing, and that's how he became mayor. He said you were a very important man.
Falcone: [voicemail] Right. Mm-hm. Mmm. Okay.
[AND SUDDENLY -- ANNIKA BEGINS SHRIEKING -- IT'S AGONIZING -- BATMAN'S GAZE SHIFTS TO SELINA, WHO STARES OFF, TEARS BEGINNING -- AS ANNIKA'S CRIES TURN TO DESPERATE GASPS --]
Falcone: [voicemail] (strains, eerie calm) Just take it easy...
Gordon: Jesus, he's strangling her...
Falcone: [voicemail] Take it easy...
[SELINA'S EYES LIFT TO BATMAN'S, ALIVE WITH RAGE -- AS THE RECORDING FINALLY ENDS -- EVERYONE SILENT. GORDON TURNS TO BATMAN, REELING -- WHEN BATMAN'S EYES LIFT TO HIS:]
Batman: El Ratta Alada... A falcon has wings, too.
[Gordon turns slowly to Kenzie; they move toward him -­-]
Gordon: Falcone is the rat?! Falcone works for you guys? The mayor? The DA?
[Kenzie looks up at them, terrified... when... he cracks:]
Kenzie: No. We work for him. Everybody does.
Batman: How?
Kenzie: Through Renewal. Renewal is everything.
Gordon: The Renewal Fund?
Kenzie: (shaking, it spills) Yeah. After Thomas Wayne died, they all went after it like vultures. The mayor. Falcone, Maroni, everyone got in on it. It was perfect for making bribes, laundering money. A huge charitable fund with no oversight? Everybody got a piece. But Falcone wanted more. So we orchestrated a play to take Maroni down, big. He ratted out his drops operation. Made the carreers of everybody that went after him. Then installed them all as his puppets. You think this goddamn election matters? Falcone's the mayor. He's been the mayor for the last twenty years.
[Selina turns to Batman: a truly scary look in her eyes--]
Selina: C'mon, Vengeance. Let's go kill that son of a bitch. (gun on Kenzie) This creep, too, let's finish this.
[--when a BLACK GLOVE knocks the gun to the floor!]
Batman: No!
[Selina spins, ready to strike, FACE TO FACE WITH BATMAN -­-]
Batman: We'll get him. But not that way.
Selina: There is no other way! He owns the city!
Batman: Cross that line, you'll become just like him.
[Beside herself, she realizes he's not with her --]
Batman: Listen to me. Don't throw your life away.
[Finally, she turns back to him -- smiles, fatalistic -­-]
Selina: Don't worry, honey. I got nine of 'em.
[With dancer's grace -- she lifts a leg --]
[KENZIE'S EYES WIDEN -- AS SHE KICKS HIM THROUGH THE GUARDRAIL -- KNOCKING HIM OFF THE BUILDING -- !]
[GORDON LURCHES FORWARD ON INSTINCT -- AS BATMAN TRIGGERS HIS QUICK-DRAW SLIDER -- FIRING A HARPOON INTO KENZIE'S ANKLE -- FIERCELY YANKING THE LINE TAUT TO SAVE HIM --]
[-- AS BATMAN -- STRUGGLING TO HOLD ON -- SPINS TO SEE -­-]
[SELINA LEAPING OFF THE EDGE WITH THE GLOCK -- LAUNCHING FOR A CABLE ON A CONSTRUCTION CRANE -- JUST MAKING IT -­ SLIDING DOWN THE LINE -- SWINGING OFF -- DISAPPEARING!]
[-- Gordon helps Batman pull a whimpering Kenzie back up--]
[Gordon turns to Batman -- who's yanking a wired hook from his belt -- securing it on the edge -- no time to lose --]
Gordon: She won't get out of there alive! And if she kills Falcone, we may never find the Riddler!
Batman: I have to stop her.
Gordon: Don't you mean "we"?
Batman: I gotta do this my way.
Gordon: And then what?
[Batman looks up as he finishes--]
Batman: We do what Riddler said: (tosses him Selina's phone) Bring the rat into the light.
[Gordon stares at the phone then nods, suddenly getting it -- as BATMAN JUMPS BACK RAPPELLING OFF THE TOWER --]
EXT. GOTHAM STREETS - AT HIGH SPEED - NIGHT
[HURTLING down a service road under an elevated highway -­ REVEAL SELINA SCREECHING through the maze of columns on her bike -- PAN as she SCREECHES PAST -- heading toward -­ THE ICEBERG LOUNGE -- disappearing behind the building--]
EXT. DESERTED ALLEY BEHIND ICEBERG LOUNGE - SECONDS LATER
[Selina whips off her helmet -- ejects the Glock's clip to inspect rounds; SLAMS it back --]
NT. ICEBERG LOUNGE NIGHTCLUB - MOVING - NIGHT
[MUSIC POUNDS AS WE MOVE TOWARD A GUARD beside A PRIVATE ELEVATOR -- his eyes brazenly check us out, head to toe--]
Selina: (uncomfortable smile) Can you tell Mister Falcone I'd like to come up?
Bouncer: He ain't seein' nobody tonight.
Selina: (leans in, hushed) Tell him it's about Annika.
[He darkens -- nods -- Selina steps aside as he speaks low into a mic on his sleeve. He opens the ELEVATOR DOOR for her -- watches... AS SHE GETS IN... AND THE DOORS CLOSE --]
INT. FALCONE'S SHORELINE LOFT - ELEVATOR HALLWAY - NIGHT
[SELINA STEPS OUT, moving by an INTIMIDATING PHALANX OF GUARDS -- to the DRAWING ROOM -- where FALCONE APPEARS--]
Falcone: Hey! Look who it is, huh?
Selina: Sorry to bother you.
Falcone: Nah, it's all fine, beautiful.
Selina: I was just hoping I could talk to you for a minute?
Falcone: Absolutely.
Selina: Alone?
[-- and as we hear a LOUD POUNDING KNOCK-KNOCK-KNOCK
[BLACKNESS]
[SWINGS OPEN; we SEE OUTSIDE THE CLUB, BUT NO ONE'S THERE.]
[REVEAL THE TWINS staring out the door -- confused -­ FOLLOW THEM OUT as they search for whoever was knocking WHEN BAM! -- they SPIN to SEE THE DOOR SHUTTING THEM OUT!]
Bouncer: Hey--!
INT. HEART OF THE CLUB - MOVING - IMMEDIATELY
[PUSHING THROUGH REVELERS -- A FIGURE ENTERS FRAME STRIDING in ARMY JACKET, CAP, and DUFFEL -­ BATMAN HAS ENTERED AS THE DRIFTER -- EYES SEARCHING -­ HE SPIES what he's been looking for -- A DOOR: "KEEP OUT" ENTERS --]
[A SECURITY GUARD NOTICES -- GIVING CHASE -- MOVE WITH HIM -- to see THE DRIFTER DISAPPEARING ROUND A CORNER -- the GUARD DISAPPEARS AFTER HIM -- HOLD in the empty corridor -- when the GUARD'S BODY CRASHES OUT -- UNCONSCIOUS -- !]
INT. FALCONE'S DRAWING ROOM - SAME TIME
[Selina sits across from Falcone, who leans against the pool table, sizing her up as she grows emotional--]
Selina: I'm just so worried! I don't know where she is... And I know that you're a very important man, I was hoping that maybe you could help me find her, because she's... Because she's been gone so long, I'm beginning to think she's-- I'm sorry.
Falcone: It's okay.
Selina: I'm so sorry!
Falcone: It's okay, I understand. Here.
[He offers her some tissues --]
Selina: No, it's okay, I have a tissue.
[-- as she reaches INTO HER CLUTCH ON HER LAP where THE GLOCK HIDES -- HER FINGERS STARTING TO GRASP IT -- WHEN --]
Vinny: Mister Falcone.
[-- they both turn, startled, as a BALD BODYGUARD enters -­ Selina eases off the gun, taking out a Kleenex instead --]
Falcone: Vinny! Didn't I tell ya--?!
Vinny: I'm sorry, Mister Falcone. I really think you're gonna wanna see this.
[Falcone sees he's serious -- nods -- turns to Selina --]
Falcone: I'm sorry, beautiful. I'm gonna be right back.
[Selina nods, wiping tears as he goes; she hardens as she looks at the Glock, then leans to see...]
[The Guard leading Falcone to a ROOM WHERE A TV PLAYS --]
[BLACKNESS]
[A DOOR CRASHES OPEN REVEALING THE CLUB ELECTRICAL ROOM THE DUFFEL HITS THE FLOOR -- THE DRIFTER'S HANDS REACH IN -- SEIZING A PORTABLE ROTARY SAW --]
INT. FALCONE'S LOFT - TV ROOM - SIMULTANEOUS
[TV light flickers in Falcone's eyes as he gazes in shock:]
Falcone: Holy shit.
Female News Anchor 2: That recording, provided to GC1 by Lieutenant James Gordon of the Gotham PD, and we should warn you -- the contents are extremely graphic, and some of you may find it disturbing.
[ON TV we see THE GCl BREAKING NEWS HEADLINE -- "RECLUSIVE CRIME BOSS RECORDED COMMITTING MURDER -- ADMITS TO BEING MAFIA INFORMANT" -- SELINA'S CELL PHONE VOICEMAIL PLAYS --]
Annika: [voicemail] He... He just said they all made a deal with you.
Falcone: [voicemail] Oh. Oh, he told you about that, huh? The deal.
Annika: [voicemail] He-- He said you gave some information on some drops thing, and that's how he became mayor. He said you were a very important man.
Falcone: [voicemail] Right. Mm-hm. Mmm. Okay.
ON SELINA - IN THE DRAWING ROOM
[WATCHING the two men by the TV, backs to her -- she slips her hand into her clutch -- gripping THE GLOCK -- she RISES, heading for them -- as ANNIKA SCREAMS on TV --]
INT. THE CLUB ELECTRICAL ROOM - SIMULTANEOUS
[THE ROTARY SAW GRINDS INTO METAL AROUND POWER LINES -­- SPARKS FLY -- illuminating THE BAT COWL IN THE DUFFLE!]
INT. FALCONE'S LOFT - TV ROOM - SIMULTANEOUS
[WE SLOWLY MOVE TOWARD THE BACK OF FALCONE'S HEAD when the GLOCK lifts into frame -- we hear a soft voice:]
Selina: Hey, dad.
[Confused, Falcone turns to look at us, startled to see the gun -- REVEAL SELINA, Glock in both hands, trained on Falcone -- the Bald Bodyguard turns, alarmed too --]
Falcone: What?
[CLOSE ON SELINA, emotion under the stillness of her gaze:]
Selina: I'm Maria Kyle's kid. You remember her?
[Falcone looks at her, stunned, unnerved -- then--]
Falcone: Yeah. Just... Just put down the gun, honey.
Selina: This is for my mother.
[Selina about to fire -- WHEN THE LIGHTS GO OUT -- AS BANG -- HER MUZZLE FLASH CATCHES THE BLUR OF FALCONE DUCKING --]
INT. THE CLUB BELOW - IMMEDIATELY
[CROWD reacting to the SUDDEN DARK in panic--]
INT. FALCONE'S DARKENED TV ROOM UPSTAIRS - SIMULTANEOUS
[SILHOUETTED AGAINST THE WINDOW, Selina and Bald Bodyguard FIGHT FOR HER GUN -- SELINA SLAMS A HEEL ON HIS KNEE -­ HOBBLING him with a SICKENING CRACK -- she SPINS -- a BLINDING ROUNDHOUSE -- and he DROPS -- SELINA SPOTS -- A DIM GLIMPSE OF FALCONE DARTING FOR THE DOOR -- SHE FIRES BLINDLY -- BULLETS RIPPING INTO THE WALL -- WHILE --]
OUTSIDE IN THE COMPLETELY DARKENED ELEVATOR HALLWAY
[VOICES OF PANICKED GUARDS react to the GUN SHOTS -­-]
[-- as one turns on a CELL PHONE FLASHLIGHT -- light spills onto THE FIVE ARMED GUARDS -- WHEN AN OMINOUS SCREECHING comes from the end of the hall -- THEY ALL SPIN toward--]
[THE EERILY OPEN DOORS OF THE PITCH-DARK ELEVATOR. They exchange looks, spooked; then, drawing guns, nod to the Guard With The Cell to check it out; he reluctantly moves to the doors, drawing his gun... they watch as he enters:]
THE ELEVATOR
[SCOURING with the GLOW of his cell; sees nothing... when, he hears BREATHING ... dawning dread ... he looks up AT --]
[BATMAN, BRACED UNNATURALLY AGAINST THE CEILING -- light from below DISTORTING HIS FEATURES -- an IMAGE FROM CHILDREN'S NIGHTMARES -- FACE TO FACE with the Guard --]
[BATMAN DROPS -- THE GUARD SHRIEKING IN AGONY -- HIS CELL SMASHING -- THE HALL THRUST AGAIN INTO DARKNESS -- AS BOOTSTEPS POUND -- BATMAN'S PATH THROUGH THE HALL MARKED BY STACCATO MUZZLE FLASHES -- AS HE PUMMELS GUARD, AFTER GUARD, WEAPONS FIRING INVOLUNTARILY AS THEIR BODIES FLY --]
BACK IN THE DARKENED DRAWING ROOM
[MORE FLASHES FROM SELINA'S GUN reveal -- FALCONE CRAWLING DESPERATELY around the pool table -- BARELY EVADING HER SELINA TURNS THE CORNER TO FIND HIM -- ABOUT TO FIRE --]
[WHEN A FORCE YANKS HER -- SLAMMING HER INTO THE TABLE -­ THE BALD BODYGUARD -- SHE KICKS HIM OFF -- AND WITH ANOTHER BRUTAL STOMP HOBBLES HIS OTHER KNEE -- SHE GRABS HIS HEAD -- WHACKING HIM OUT ON THE TABLE EDGE!]
[SELINA SPINS BACK for Falcone -- BUT HE'S GONE -- THWACK! -- FALCONE SLAMS HER HEAD WITH A POOL CUE! CLIMBS ON HER-- AS SHE DROPS -- THRUSTING THE CUE IN BOTH HANDS AGAINST HER NECK, CHOKING HER -- SELINA GASPS -- ARMS PINNED -­ WRITHING -- A EERIE COLDNESS IN HIS EYES AS HE FIGHTS TO SNUFF OUT HER LIFE -- FURIOUS TEARS SPILL FROM HER EYES --]
Falcone: You don't think this hurts me? My own flesh and blood, huh?! You made me do this, just like your mother!
[WHEN A SHAPE LOOMS -- RIPPING FALCONE OFF! IT'S BATMAN -- SHOCKED, SELINA DRINKS IN AIR -- AS BATMAN SLAMS FALCONE DOWN ONTO THE TABLE -- LEAVING HIM IN A STUPID DAZE -­ Selina GRABS THE GUN -- aiming at Falcone distraught, filled with fury Batman holds her back -- she ERUPTS:]
Selina: He has to pay!
[Batman qently puts his hand on the gun -- as she shakes, still panting, adrenaline surging -- he says, quietly:]
Batman: You don't have to pay with him.
[She turns to him -- not understanding -- still frenzied -­-]
Batman: You've paid enough.
[Something in that finally gets through... she relents... Batman watches as her eyes drift down, lost, reeling...]
INT. ICEBERG LOUNGE - LONG ENTRY HALL - MOMENTS LATER
[ONLOOKERS part -- A STUNNED PENGUIN AND TWINS AMONG THEM-- as Batman propels Falcone... who murmurs, undeterred --]
Falcone: Jesus! Look at you, man, what do you-- What do you think this is? You think you're gonna scare me with that mask and that cape? I'm gonna start crying and all of a sudden some big secret's coming out?
[Batman slowly turns, rage now smoldering in his eyes.]
Falcone: Let me tell you something. Whatever I know, whatever I've done... It's all going with me, to my grave.
[Batman gazes into his black eyes, restraining himself -­ then turns to see -- GORDON waiting at the open front door -- Falcone smirks as they reach him --]
Falcone: What, are you with Zorro over here? Don't you know you boys in blue work for me?
[Gordon just glares, as he and Batman both shove Falcone --]
OUTSIDE THE CLUB
[where Falcone's smile immediately fades as he sees a HUGE DISPLAY OF ARMED COPS waiting in stoic silence --]
Gordon: I guess we don't all work for you.
[Falcone's stunned; Gordon nods to Martinez to CUFF him --]
Gordon: You have the right to remain silent. Anything you say can and will be used against you in a court of law. You have the right to an attorney. If you cannot afford one, the City of Gotham will provide one to you, do you understand these rights? Do you understand?
Falcone: Yeah. I'll see you when I walk out.
Gordon: With these rights in mind, is there anything else you wish to tell me?
[Falcone's eyes drift to Penguin and Twins who've emerged with others from the club, all watching in disgust--]v
Cobblepot: Goddamn rat.
Falcone: What'd you just say?
Cobblepot: Enjoy your night at Blackgate, Carmine. Probably be your last.
Falcone: Ooh, so you're a big man now, Oz, huh?
Cobblepot: Maybe I am.
Falcone: Really, Oz? Because to me, you were always just a gimp in an empty suit.
[-- the public humiliation suddenly embarrassing Penguin -- he explodes:]
Cobblepot: I'll spraypaint your ass!
[--whipping out his UZI -- COPS FREAK -- RUSHING HIM -­ WHEN SHOTS RING OUT -- FALCONE'S HIT -- THE COPS PILE ONTO PENGUIN -- WHO SUBMITS IN SUDDEN PANIC --]
Cobblepot: What are you doin', what's the big-- I didn't shoot! I didn't shoot! Get your hands offa me!
[PANDEMONIUM -- EVERYONE SCRAMBLING FOR COVER -- AS BATMAN LOOKS UP TO SEE -- A RIFLE JUTTING OUT A SIX FLOOR WINDOW ACROSS THE STREET -- HE LUNGES FOR FALCONE -- AS THE RIFLE FIRES AGAIN -- BULLETS EXPLODE INTO FALCONE'S CHEST-- AS BATMAN TACKLES HIM -- THEY TUMBLE TO THE GROUND --]
[AND THE GUNFIRE FINALLY STOPS -- Batman rolls off Falcone -- to find him BLEEDING OUT -- when HE NOTICES A BRIGHT REFLECTION in the POOLING BLOOD -- he looks up to see it's fro m the LONE FLICKERING STREET LAMP above -- when SOMETHING QUIETLY DAWNS --]
[His HEAD WHIPS to the DARKENED WINDOW ACROSS THE STREET--]
Batman: "Bring him into the light... and you'll find where I'm at."
Martinez: Here! The shots came from up there!
[Everyone turns to see MARTINEZ POINTING TO THE WINDOW --]
[-- cops pulling out weapons -- Batman turning to Gordon --]
Batman: It's Riddler.
[Gordon struck, snapping into action -- CALLING HIS MEN -­-]
Gordon: Gage, on me. Martinez, 'round back! Nobody gets in there, nobody gets out!
[COPS RUSH THE BUILDING as Batman stalks purposefully alone in the direction of the window itself --]
[A few cops remain, attending to Falcone -- HIS FACE GOES STILL -- when A SHADOW SPILLS over his lifeless eyes -­ REVEAL SELINA above him -- flickering street light flaring around her as she stares at her father, numb...]
[SMASH TO:]
[A GRAPPLING HOOK CRASHES THROUGH a WINDOW -- BATMAN CATAPULTS UP INTO --]
A RUN-DOWN STUDIO APARTMENT
[NO ONE HERE. The WALLS are COVERED IN IMAGES. Batman sees A SNIPER RIFLE by the window. He turns to AN OPEN WINDOW on another wall -- moves to find -- A FIRE ESCAPE OUTSIDE -- leans to scan the grimy alley below -- it's EMPTY --]
[THE FRONT DOOR SMASHES IN -- Gordon and cops charge in--]
Batman: He's gone.
[Batman moves past CAGES OF SCREECHING RATS to photos on the wall -- Savage and the dealer -- Mitchell and Annika struck, Batman gazes out the window -- Gordon does too -- to SEE most of the photos were taken from this spot--]
Gordon: He's been here this whole time!
Detective: Lieutenant! Martinez!
Gordon: Yeah?!
Martinez: Lieutenant, we got a wintess saying she saw someone coming down the fire escape right after the shots, she said he went into the corner diner. The guy's sitting by himself at the counter right now.
[Gordon and Batman exchange a look...]
EXT. PUSHING IN ON THE FRONT OF A LONELY DINER - NIGHT
[Like an Edward Hopper painting -- A LONE, AVERAGE-SIZED MAN sits at the counter, HIS BACK TO THE LARGE WINDOW-- A COUNTERMAN sets A LATTE before him, then disappears into the kitchen -- a TV above plays ELECTION RESULTS as we PUSH CLOSER ARMED COPS CREEP INTO FRAME --]
INT. LONELY CORNER DINER - THE COUNTER - SIMULTANEOUS
[CLOSE ON THE BACK OF THE LONE MAN as he meticulously attends to HIS LATTE with a PLASTIC STIRRER; we HEAR:]
A Crazed Cop: (O.S.) Police! Hands up!
[BUT THE LONE MAN JUST KEEPS STIRRING HIS LATTE--]
Gordon: (O.S.) He said put your goddamn hands up, you son of a bitch!
[The Man FINISHES STIRRING... SLOWLY RAISES HIS HANDS, still pinching the little stirrer... He starts to turn but before we see his face -- REVEAL -- the SHOW OF FORCE AROUND HIM -- THE PLACE IS PACKED--]
[Then, at last, WE SEE HIM FOR THE FIRST TIME -- and his signature PRESCRIPTION AVIATORS; he's pale, unremarkable; a NOBODY. A creepy half-smile forms as he stares at the cops -- like he's been expecting them... when finally, he speaks, gesturing toward the kitchen with the stirrer --]
Riddler: (as if they'll wait) I just ordered a slice of pumpkin pie--
[BAM! -- COPS RUSH HIM SLAMMING HIM ONTO THE COUNTER --]
[CLOSE ON HIS SIDEWAYS FACE, cheek pressed flat beside HIS LATTE -- glasses smashed --]
Martinez: Stay still! Now!
[STRUCK, AS HE SEES SOMETHING -- past the cops, a FIGURE gazes from outside -- BATMAN -­ RIDDLER holds Batman's eyes, smile growing -- when Martinez rips his wallet from his pocket -- finding TWO DRIVER'S LICENSES: "EDWARD NASHTON" and "PATRICK PARKER".]
Martinez: Which one's you?!
Riddler: (a little grin) You tell me!
Martinez: Let's go, pencil-neck!
Officer: Get this sunovabitch outta here!
[As THEY TEAR HIM AWAY, we REMAIN ON HIS STEAMING LATTE -­ MOVING TOWARD THE CUP -- LIFTING TO LOOK INSIDE at what Riddler was working on -- A WORK OF LATTE ART -- A WHITE QUESTION MARK, SCRAWLED IN FOAM -- HOLD, as SIRENS wail --]
Female Reporter: --where even murdered mayor Don Mitchell Junior's wife and son have gathered in an emotional show of city unity...
INT. RIDDLER'S STUDIO APARTMENT - SHORT TIME LATER
[Crawling with INVESTIGATORS -- POLICE PHOTOGRAPERS snap and videotape -- the atmosphere is hushed, electric --]
IN THE DIM HALLWAY RIGHT OUTSIDE
[Martinez posted at the door, watches election results on his phone -- when a DARK SHADOW WIPES RIGHT BY him --]
[Martinez just catches it -- too late--]
Martinez: Hey...
INSIDE THE APARTMENT
[we ROVE toward DETECTIVES poring over a mountain of RIDDLER'S NOTEBOOKS, LEDGERS, PAPERS -- so absorbed in their task they don't notice as we arrive beside them --]
[REVEAL BATMAN -- scanning SCRIBBLED TITLES on the ledgers-- he cocks his head to read one, struck: "RENEWAL" On the other side of the room, Gordon confers with a FORENSIC COP by a PILE OF YELLOWING, RATTY NOTEBOOKS--]
Gordon: What are all these, diaries?
Forensic Cop: They're ledgers. He's got thousands! He scrawled all over 'em, ramblings, ciphers, codes...
[A DETECTIVE ON THE PHONE suddenly shouts excitedly--]
Detective On the Phone: Got something back on one of the IDs: "Edward Nashton", he works at KTMJ, he's a forensic accountant.
Surly Cop: Hey, lieutenant! You really okay with this?
[Gordon turns -- to see the Surly Cop gesturing beside Batman who's now reading the Renewal ledger--]
Surly Cop: What about chain of evidence?
[Ignoring him, Batman looks up at Gordon with a foreboding stare -- Gordon approaches; Batman hands him the ledger--]
Batman: You should see this.
Gordon: (shrugs to Surly Cop) He's wearing gloves.
[Gordon gazes at the ledger -- the top sheet is smothered in WRITING, SCRAWLED right on the columns of numbers -­ as GORDON READS -- we SEE Batman stalk the room, absorbing the CLUTTER -- including a SHRINE OF MANNEQUINS WEARING PROTOTYPES OF THE RIDDLER'S TORTURE DEVICES...]
Gordon: "Friday, July 16th -- My life has been a cruel riddle I could not solve, suffocating my mind, no escape. But then today, I saw it, a single word sitting on this ledger sitting on the desk beside me -- "Renewal". The empty promise they sold to me as a child in that orphanage. One look inside, and finally, I understood. My whole life has been preparing me for this. The moment when I would learn the truth -- when I could finally strike back and expose their lies."
[As Batman passes CAGES OF AGITATED RATS, a SCREECHING grabs his attention; he moves for it as Gordon goes on--]
Gordon: "If you want people to understand, really understand, you can't just give them the answers. You have to confront them. Torture them with the horrifying questions just like they tortured me. I know now what I must become."
[As the SCREECHING ESCALATES, Gordon flips more pages, the Riddler's scrawl becoming illegible, until it's nothing but ANGRY SCARS OF INK -- Gordon is shaken by the display of insanity -- until the intense SCREECHING becomes TOO MUCH -- he glances up, seeing Batman by the cages --]
Gordon: Jesus... I don't think that rat likes you, man.
Batman: This one's not a rat.
[Gordon and the Surly Cop step closer to see... inside the cage is A RABID BAT! It SNARLS, BEARING ITS TEETH, WINGS BEATING -- beneath it is an ENVELOPE: "TO THE BATMAN" -­ attached to a strange BLOODY, METAL TOOL --]
Gordon: What is that?
[As a Photographer FLASHES the cage, the bat HISSES MADLY -- Batman tensely reaches past it, carefully retrieving the envelope and metal object--]
Surly Cop: Some kinda pry tool?
Forensics Head: That a chisel?
Batman: It's the murder weapon. Killed Mitchell with it. The edge'll match the floorboard impression in the Mayor's study.
[Batman opens the envelope -- another GREETING CARD says: "JUST FOR YOU"; inside is SCRAWLED, "MY CONFESSION..."]
Gordon: "My confession"...? What's he confessing to? He already told us he killed Mitchell.
Batman: This isn't over.
[Batman stares at the card with growing dread -­-]
Tech Department Detective: Aw, man, he's been posting all kinds of shit online. He's got, like, five hundred followers, real fringe types.
[They turn to a DIGITAL FORENSICS COP on Riddler's laptop -- Gordon moves to see -- but Batman's eyes go to the wall above... to AN ENORMOUS COLLAGE -- a sea of DEFACED PHOTOS -- scrawled over it: "THE TRUTH ABOUT GOTHAM".]
[Batman steps forward, gazing at IMAGES of city officials, police officers, Riddler's victims -- but most prominent is an image of YOUNG BRUCE WAYNE beside his father at the Orphanage ceremony -- their EYES ETCHED ANGRILY OUT.]
[In the BOY'S CHOIR beside them, a QUESTION MARK encircles the head of a SAD, SCRAWNY BOY IN AVIATOR GLASSES who stares at the Waynes in awe -- next to him are the words: "If only I knew then... what I KNOW now..." --]
[-- Batman sees A CLUSTER OF BATMAN TABLOID HEADLINES in the collage -- among them, a CRUDE POLICE SKETCH, entitled: "GOTHAM TERRORIZED -- WHO IS THE BATMAN?" Next to it, Riddler has written ominously: "I KNOW... I know the REAL you..." Batman stares, unnerved -- WHEN --]
Tech Department Detective: His final post was last night. Some video. Got a lot of views, but it's password protected.
[Batman turns to see what they're looking at -- the post is titled "The Truth UNMASKED" -- Batman hit by a sinking feeling as Gordon anxiously presses toward the screen --]
Gordon: Can you get it?
Tech Department Detective: Copying his drive now. It'll take some time, but we'll get in.
[Batman stares, world closing in reeling -- then --]
Gordon: Show me the post.
Tech Department Detective: It's right here.
Gordon: "Truth Unmasked"?
Batman: I think I'm his last target.
[Gordon turns -- struck--]
Gordon: You?
Batman: Maybe this is all coming to an end.
Gordon: What is?
Batman: The Batman.
[Gordon looks confused, when his phone RINGS. He steps away. Batman watches as Gordon speaks low --]
Gordon: Yeah? (beat) Right.
[His eyes suddenly lift darkly to Batman's. He hangs up, unnerved--]
Gordon: Riddler's asking for you, at Arkham.
[Batman just looks at him; then starts to go but stops-- Gordon looks at him when he says, like a farewell --]
Batman: You're a good cop.
INT. VISITING CELL - ARKHAM PRISON FOR THE INSANE - NIGHT
[Batman waits as the METAL ROLL-UP DOOR RISES... revealing Riddler. Seeing Batman, an EERIE SMILE grows. Finally, Riddler speaks, glancing at the squalid surroundings --]
The Riddler / Edward Nashton: I told you I'd see you in hell.
Batman: What do you want from me?
Nashton: Want? Oh, if only you knew how long I've been waiting for this day. For this moment. I've been invisible my whole life. I guess I won't be any more, will I? They'll remember me now. They'll remember both of us. Bruce... Wayne.
[His smile fades. He looks into Batman's eyes; ominously:]
Nashton: Bruuuuce... Wayne...
[Batman's jaw clenches, betraying nothinq -- Riddler's emotion rises, he looks at the floor, stewing with rage:]
[Batman on edge -- his eyes flit anxiously to a SECURITY CAMERA recording -- when Riddler's eyes snap back to his. The pause between them is excruciating. Then, bitterly:]
Nashton: [sigh] You know, I was there that day. The day the great Thomas Wayne announced he was running for mayor, made all those promises. But a week later, he was dead, and everybody just forgot about us. All they could talk about was poor Bruce Wayne. Bruce Wayne, the orphan. Orphan? Living in some tower over the park isn't being an orphan. Looking down on everyone with all that money, don't you tell me... Do you know what being an orphan is? It's thirty kids to a room, twelve years old and already a drophead, numbing the pain. You wake up screaming, with rats chewing your fingers. And every winter, one of the babies die because it's so cold. But, oh no! Let's talk about the billionaire with the lying dead daddy because it makes the money go down easy, doesn't it? (glaring at Batman) Bruce. Wayne.
[Riddler quiets, ruminating darkly. Walls closing in, Batman looks away to keep from screaming. Riddler sighs:]
Nashton: He's the only one we didn't get.
[Batman lifts his eyes -- stirring almost imperceptibly what'd he just say? Riddler leans in conspiratorially--]
Nashton: But we got the rest of 'em, didn't we? All those slick, sleazy, phony pricks?
[Batman REELS -- Riddler DOESN'T know -- when, Riddler suddenly softens, his tone turning almost vulnerable:]
Riddler: God, look at you... Your mask is amazing. I wish you could've seen me in mine. Ain't it funny? All everyone wants to do is unmask you, but they're missing the point. You and I both know I'm looking at the real you right now. My mask allowed me to be myself completely, no shame. No limits.
Batman: Why did you write me?
Nashton: What do you mean?
Batman: All those cards...
Nashton: I told you. We've been doing this together, you're a part of this.
Batman: We didn't do anything together.
Nashton: We did! What did we just do? I asked you to bring him in the light and you did, we're such a good team.
Batman: We're not a team.
Nashton: I never could've gotten him out of there, I... I'm not physical, my strength is up here, I mean, I... I had all the pieces, I had the answers, but I didn't know how to make them listen, you gave me that!
Batman: I gave you nothing.
Nashton: You showed me what was possible! You showed me all it takes is fear and a little focused violence. You inspired me!
Batman: You're out of your goddamn mind.
Nashton: What?
Batman: This is all in your head, you're sick. Twisted.
Nashton: How can you say that?!
Batman: You think you'll be remembered?! You're a pathetic psychopath, banking on attention! You're gonna die alone in Arkham!
Nashton: No, no, no, no!
Batman: A nobody!
Nashton: No! Ah, this is not how this is supposed to go!
[SILENCE. Batman watches Riddler fume to himself:]
Nashton: I had it all planned out! We were gonna be safe here! We could watch the whole thing together!
Batman: Watch what?
Nashton: Everything!
[He glares up at Batman... and suddenly registers Batman has no idea what he's talking about. Riddler's struck --]
Nashton: It was all there. You mean you didn't figure it out? (relishing) Oh, you're really not as smart as I thought you were. I guess I gave you too much credit,
Batman: What have you done?
[Riddler stands there; he leans in with sadistic pleasure--]
Nashton: What's black and blue and dead all over? (as Batman glares) You. If you think you can stop what's coming.
Batman: What have you done?!
[Riddler sinks silently away, finally retreating into an eerie, off-key "AVE MARIA" by SHUBERT... BATMAN SMASHES A FIST against the glass;]
Batman: WHAT HAVE YOU DONE?!
[But Riddler keeps singing. Batman stands, helpless -- STRAINS OF "AVE MARIA" RISING HAUNTINGLY --]
Batman: WHAT HAVE YOU DONE?!
INT. RIDDLER'S DARKENED APARTMENT - FRONT DOOR - NIGHT
[A BLADE SLASHES the POLICE SEAL on the door -- BATMAN BUSTS IN, PLAGUED, folding his TACTICAL KNIFE -- his eyes rove the unoccupied space -- poring over the details again -- WHAT DID HE MISS? -- mind racing -- WHEN --]
Martinez: Hey! What're you doing in here?
[Batman spins to see MARTINEZ IN THE DOORWAY, hand on his gun. No time for this, Batman shoots a terrifying look. Intimidated, Martinez thinks twice, releases his grip.]
As Batman resumes his search, Martinez steps in, feeling a responsibility to monitor the situation... He watches as Batman moves to the BLOODY METAL TOOL, taking out his UV light bar, shining it. He picks up the GREETING CARD --]
Martinez: Hey, man, I don't think that you should be touching that.
[Another look cuts him off -- Batman studies the card. Martinez glances at the tool, attempting conversation--]
Martinez: Boy, this guy's a real nutjob, huh? Killing Mitchell with a friggin' carpet tool.
[Batman slowly turns, struck. He gives Martinez a crazed look: what did you just say? Martinez smiles, sheepish --]
Martinez: Oh, my uncle's a... He's an installer. Y'know, it's a... Oh, you know... It's a tucker.
[THE TOOL IS THE MISSING PIECE. Batman picks it up, stunned. Looks around frantically, finally spotting... � SUSPICIOUS, SNARLED CORNER OF THE RUG. He puts the tool down -- moving toward the snag -- Martinez watching -- as he crouches to examine... when... with growing dread... he begins TUGGING UP THE RUG -- CARPET TACKS POP-POP-POP! Martinez freaks as EVIDENCE ON THE RUG SPILLS CHAOTCALLY:]
Martinez: Hey, whoa. Whoa, whoa, whoa, whoa, whoa, what are you doing? What are you doing?!
[Batman UNVEILS A GIANT MAP OF GOTHAM, SCRAWLED ONTO THE FLOOR -- it's INCREDIBLY DETAILED. Beside the map are frighteningly carved, huge words: "A REAL CHANGE" -­ Batman STARES at the WORDS, GEARS TURNING -- he lifts his head looking at SOMETHING across the room --]
RIDDLER'S LAPTOP SCREEN - SECONDS LATER
[Batman enters the words, "A REAL CHANGE" -- unlocking the VIDEO... Riddler in his hooded uniform -- his warm tone weirdly incongruous with the ominous VOICE CHANGER:]
The Riddler: Hey, guys. Uh, thanks for all the comments, and, uh, a special thanks to everyone for the tips on detonators.
Martinez: "Detonators"...?
Riddler: I just wanna say, this'll be my last post for a little while. And, uh... (a surge of emotion) What this community has meant to me these weeks, these months... Let's just say that none of us is alone any more, m'kay?
Martinez: Jesus.
[Batman stares -- as Riddler tamps his feelings down --]
Riddler: Tomorrow's election day, [he laughs] and Bella Réal will win. She promised real change. But we know the truth, don't we? You've seen Gotham's face now. Together, we've unmasked it -- its corruption, its perversion masquerading under the guise of renewal. But unmasking is not enough. The day of judgement is finally upon us. And now, it is time for retribution.
[Riddler PICKS THE CAMERA UP, POINTS it at the MAP ON THE FLOOR as he walks; Batman RISES to FOLLOW THE SAME PATH --]
[Batman gazes down, SEES SEVEN "X"'S CARVED INTO THE MAP --]
Riddler: I've parked seven vans all along the city's sea wall, and on the big night, they will go boom.
[ALARMED, BATMAN PEERS DOWN at the "X" on a GOTHAM STREET right under his feet -- ALMOST GASPING -- AS WE --]
[MATCH CUT TO:]
SAME ANGLE - OVER THE ACTUAL GOTHAM STREET - THAT MOMENT
[In the "X"'s place is a VAN ADJACENT SEA WALL CRUMBLING as it ERUPTS, PART OF THE A RUSH OF WATER FLOODS IN!]
BACK TO BATMAN
SPINNING at the sound of MORE EXPLOSIONS; he bolts to the window to SEE FIREBALLS ROILING OVER THE SKYLINE -- !
Riddler: When the vans blow, the flooding will happen so fast, evacuation will not be an option.
NEW DISTANT ANGLE ON THE RISING FIREBALLS - CONTINUOUS
REVEAL RIDDLER peering out his cell window; he smiles --
HIGH ANGLE - OVER ANOTHER GOTHAM STREET - AT THAT MOMENT
[A STARTLING GLIMPSE -- A TSUNAMI WAVE SWEEPS SUDDENLY OVER SHOCKED PEDESTRIANS -- TEARING THE STREET APART --]
RIddler: Those who are not washed away...
RIDDLER'S APARTMENT - AT THAT MOMENT
[Batman's head whips toward ANOTHER SCRAWLED INTERSECTION -- drawn by the sounds of DISTANT, TERRIFIED SCREAMING it's as if the sound is coming from the map--]
Riddler: ...will race through the streets in terror.
SAME ANGLE ON THE ACTUAL INTERSECTION - AT THAT MOMENT
[THE DESTRUCTIVE WAVE -- NOW BLACK WITH DEBRIS -- RIPS UP CARS, TREES, LAMP POSTS -- as PEOPLE'S SCREAMS ECHO --]
BATMAN'S EYES
fiercely search the map -- assessing the crisis
Batman: Call Gordon--
Martinez: Yeah! Yeah, yeah!
STREET OUTSIDE GOTHAM SQUARE GARDEN - THAT VERY MOMENT
[CELEBRATING CROWDS watching Bella's victory on JUMBOTRONS and CELLS -- as EMERGENCY BULLETINS interrupt coverage--]
Riddler: ...as breaking news hits higher ground at Gotham Square Garden, and celebration turns to panic...
[People react -- SCREAMING -- some spot SMOKE IN THE SKY --]
Riddler: ...as the venue becomes the city's shelter of last resort.
BACK TO RIDDLER'S APARTMENT - AT THAT MOMENT
Riddler; And that's where all of you come in.
[BATMAN'S EYES GO TO THE COMMENT BOARD -- finding CHILLING REPLIES: "what gauge? what caliber?" -- "rifles are good"]
Riddler: And when the time arrives, I will already be unmasked, the pigs will have me in their custody, but that's okay. Because then, it will be your turn.
A MOVING SHOT - FOLLOWING A DARK FIGURE
[Walking THE RAFTERS ABOVE GOTHAM SQUARE GARDEN, pulling on a Riddler-style execution hood, rifle in hand...]
Riddler: You'll be there, waiting.
[The Hooded Figure stares ominously below where panicked commotion suggests news of the flooding is spreading -­ when the Figure looks up, SPOTTING...]
[ANOTHER ARMED HOODED FIGURE, staring back at him -- they regard each other oddly... then nod grimly -- when they turn to see... a THIRD Riddler Figure arriving... and behind him, ANOTHER... and ANOTHER... It's A SMALL ARMY OF BITTER NOBODIES IN HOODED RIDDLER OUTFITS, hidden above the crowd, all meeting here for the very first time, as they secretly prepare to strike... ]
Riddler: It's time for the lies to finally end, false promises of Renewal!
BACK TO BATMAN
[watching in horror as Riddler concludes bitterly --]
Riddler: Change?! We'll give 'em a real, real change now! We've spent our lives in this wretched place, SUFFERING! Spending our lives wondering, "Why us?!" Now they will spend their last moments wondering "Why them?!"
[ON MARTINEZ, completely terrified, gazing at his cell -­-]
Martinez: I can't get through, the lines are down!
[He turns to show Batman BUT BATMAN IS ALREADY GONE!]
EXT. OUTSIDE GOTHAM SQUARE GARDEN - NIGHT
[UTTER CHAOS OUTSIDE THE GLASS DOMED BUILDING -- EMERGENCY VEHICLES, SIRENS -- PEOPLE running up the streets -­ FIRST RESPONDERS scream to CROWDS OF TERRIFIED CITIZENS herding them to shelter inside the Garden -- tending to the INJURED -- a crisis escalating by the second--]
[We SPOT a MOTORCYCLE weaving through the madness -- SELINA -- with her leather backpack, saddle bags on the bike -- she stops at a ROAD BLOCK across the intersection -- hops off to move a SAW HORSE herself -- WHEN:]
Traffic Cop: Hey, hey, hey! Road's closed!
Selina: Hey, I'm just trying to get outta town, man!
Traffic Cop: Lady, we got bombs going off! The whole city's flooding! You're gonna have to go inside the garden with everyone else!
[About to protest, Selina suddenly feels something -- she looks down to see BLACK WATER POOLING around her feet --]
INSIDE GOTHAM SQUARE GARDEN - ENTRANCE - SIMULTANEOUS
[The victory celebration turned to crisis mode -- a MAD CRUSH squeezes through the doors -- fighting through, we FIND GORDON, rousted from bed, urgently heading for -- a MAKESHIFT COMMAND POST. UNIFORMED OFFICERS, MED PERSONNEL and FIREMEN all talk at once; Gordon flashes his BADGE --]
Gordon: Lieutenant, who's in charge?
Lieutenant: I really don't know, we're just trying to get a handle here, sir!
Gordon: Right! Hey, listen, QUIET! We got an active situation. We need to sweep the building for explosives and get the mayor-elect outta here now! Where is she?
Cop: I can take you there.
Gordon: Come! (flashes his badge) MCU.
INT. GOTHAM SQUARE GARDEN - HIGH ABOVE - SAME
[A RIFLE SCOPE PROWLS the panicked crowd... FINDING GORDON AND COPS pressing through; CROSSHAIRS follow ominously -­ then SWISH ACROSS TO FIND -- BELLA behind the FESTOONED STAGE, surrounded by her team, peeking in and out of view as she gestures anxiously, arguing with a FIRE MARSHALL--]
[REVEAL A MAGNIFIED EYE -- blinking eerily through the scope -- as the scope lowers, and we see ONE OF THE HOODED GUNMEN lying on his stomach IN THE RAFTERS --]
[Satisfied with his position, he lowers his rifle, opens a PLASTIC AMMO CASE revealing A HUNDRED ROUNDS. He takes one, begins to load -- as we DISCOVER -- OTHER GUNMEN preparing their weapons on the rafters behind him!]
DOWN BELOW - BEHIND THE SCAFFOLDING STAGE - SAME
[Gordon and the cops arrive to find Bella mid-argument with the Fire Marshall -- Gordon notices Mitchell's Wife and Ten-Year-Old Son standing nervously with the group--]
Firefighter: If we don't close those doors soon, we're gonna have huge problems, the water's already starting to breach.
Bella: I thought this was a shelter of last resort.
Firefighter: Yeah, for a hurricane, but not if the whole sea wall comes down.
Bella: I am not gonna let those people die out there! Alright. I'll go calm down the crowd so we can get everyone in.
Gordon: It's not safe for you here. We need to get you out, Miss Réal.
[Bella turns -- seeing Gordon and the cops -­-]
Bella: I'm not going anywhere!
Gordon: We're under attack, m'am!
Bella: Exactly! That's the problem with this city -- everyone's afraid to stand up and do the right thing! Well, I'm not. Excuse me.
Gordon: M'am!
[Gordon watches, frustrated, as she moves to the podium -­-]
Bella: Everyone! Everyone, if I could get your attention--
[The unruly crowd won't quiet -- she starts to call out again --]
Bella: Please, I just need your attention!
[When, in the corner of her eye, she SPOTS]
[THE GLINT OF A RIFLE up behind the lights -- she recoils -- Gordon suddenly reading her fear -- STARTING FOR HER AS -- BANG! GUNFIRE ERUPTS FROM THE RAFTERS!]
[BELLA DROPS AS SHE'S HIT -- GORDON LAUNCHING TO SHIELD HER --]
Gordon: You're okay!
[PANDEMONIUM -- AS MORE SHOTS RING OUT FROM ABOVE GORDON FRANTICALLY DRAGS BELLA INTO COVER OFF-STAGE--]
[HE DRAWS HIS GUN -- PEEKING AT THE RAFTERS -- AS A TORRENT OF MUZZLE FLASHES EXPLODES -- THE GUNMEN FIRING!]
[GORDON PEERS THROUGH THE SCAFFOLDING AT WAVES OF PEOPLE SCREAMING IN PANIC THE SCENE RATCHETING INTO UNBEARABLE TENSION -- GORDON HORRIFIED -- WHEN SUDDENLY EXPLOSIONS RIP PERCUSSIVELY THROUGH THE DOMED CEILING -­ UNLEASHING A HAIL OF GLASS OVER THE GUNMEN -- AS -- A MALEFIC PHANTOM PLUMMETS THROUGH THE ROOF -- BATMAN!!!]
[HE SLAMS INTO THE RAFTERS BARELY IN CONTROL -- TRIGGERING HIS QUICK-DRAW SLIDER -- FIRING A HARPOON LINE INTO THE LEG OF THE SHOOTER ON THE BEAM ACROSS FROM HIM -- THEN A SECOND SLIDER ON HIS OTHER ARM -- HARPOONING ANOTHER --]
[BATMAN FLIPS BACK OFF THE CATWALK -- YANKING BOTH GUNMEN OFF THEIR BEAMS -- COUNTER-BALANCING BATMAN AS HE SWINGS UNDER THE CATWALK AND BACK UP ONTO IT -- THE SHOOTERS DANGLING BELOW -- THIS HAS ALL HAPPENED IN AN INSTANT --]
[IN SHOCK, THE ARMY OF HOODED LOOKALIKES TURNS -- FIRING -- AS BATMAN BOUNDS MADLY THROUGH THEIR ASSAULT -- TAKING HITS -- HE LEAPS OUT ACROSS BEAMS -- WILDLY GRASPING ONE -- CATAPULTING HIMSELF UP INTO -- A GROUP OF SHOOTERS --]
[WITH BLINDING SPEED, BATMAN ATTACKS -- SNAPPING BONES -­ POPPING KNEECAPS -- HE SPOTS A TERRIFIED GUNMAN RELOADING -- STARTS FOR HIM -- SUDDENLY PULLED OFF BALANCE -­ BATMAN SPINS TO SEE TWO OF THE BLOODIED NOBODIES GRIPPING HIS CAPE -- DESPERATELY TRYING TO HEAVE HIM DOWN INTO THE ABYSS BELOW -- BATMAN TWISTS HARD -- WINCHING THE CAPE -­ YANKING THE NOBODIES INTO A FLURRY OF KNOCKOUT BLOWS --]
[BATMAN SEES THE TERRIFIED GUNMAN LIFTING HIS WEAPON -­ SPINS TO SEE ANOTHER SHOOTER -- ABOUT TO FIRE TOO -­ BATMAN DODGING AS -- THE ROUNDS RIP INTO THE TERRIFIED GUNMAN INSTEAD -- AS HE DROPS, THE TERRIFIED GUNMAN FIRES INVOLUNTARILY -- BULLETS TEARING INTO THE OTHER SHOOTER BUT ONE SHOT SMACKS HARD OFF THE SIDE OF BATMAN'S COWL!]
[SEEING HIM DAZED -- THE REMAINING GUNMEN UNLEASH A FIRESTORM -- RABIDLY BLASTING BATMAN -- BATMAN FORCED TO RETREAT, SHIELDING HIMSELF -- AS THEY STALK AFTER HIM]
DOWN BELOW ON THE STAGE
HUNDREDS SCRAMBLE -- GORDON presses against panic to see BATMAN UNDER ATTACK; turns to the Fire Marshall and cops:
Gordon: Hey! HEY! How do I get up there?!
Firefighter: Follow me, sir!
[They leap from the stage into DEEP WATER, WADING URGENTLY PAST SOMEONE in the crowd -- SELINA -- PEOPLE JOSTLE HER as she fights to glimpse Batman -- she pulls herself onto the scaffolding tower by the stage to see -- WORRIED...]
BACK IN THE RAFTERS
[BATMAN STUMBLES, COLLAPSING -- AS THE GUNMEN SHOOT -- HE SEES FIRE EXTINGUISHERS ON THE RAILING -- RIPS A STICKY CHARGE FROM HIS BELT -- SLAPS IT ON ONE -- ROLLS IT AT THE SHOOTERS -- DOES THE SAME TO ANOTHER -- AND ANOTHER -­ WHEN THE CHARGES ALL BLOW! -- HUGE CLOUDS ERUPT INTO THE AIR -- AS BATMAN EVAPORATES INTO THEIR WHITENESS --]
[THE SHOOTERS ANXIOUSLY VENTURE INTO THE FOG -- ONE PROBES BLINDLY WITH HIS RIFLE -- WHEN BATMAN SEIZES THE BARREL -­ HIS FINGER TASER ZAPS THE METAL -- THE GUNMAN COLLAPSES --]
[BATMAN CLUBS THE SHOOTERS ONE BY ONE WITH THE RIFLE -- HE SPOTS ONE CRAWLING FOR A DUFFLE -- GOES FOR HIM -- AS THE GUNMAN LIFTS OUT A SHOTGUN -- FIRING INTO BATMAN'S CHEST!]
[BATMAN CAREENS OFF THE CATWALK -- BARELY CATCHING THE EDGE WITH ONE HAND -- GASPING FOR BREATH -- TRYING TO PULL HIMSELF UP -- BUT THE PAIN IS JUST TOO MUCH --]
[THE SHOTGUN SHOOTER RISES, HALF IN SHOCK -- HANDS SHAKING AS HE RELOADS -- LIMPING TO THE EDGE, WILD EYES PEERING FROM THE EXECUTIONER'S HOOD AT BATMAN, HANGING BELOW --]
[BATMAN LOOKS UP, HELPLESS -- TREMBLING, THE SHOOTER PUTS HIS GUN TO BATMAN'S COWL -- FINGER ON THE TRIGGER -- WHEN OUT OF NOWHERE -- A BLINDING KICK KNOCKS HIS GUN FREE-- IT FIRES INTO THE AIR -- AS THE GUNMAN SPINS TO SEE --]
[SELINA! -- LEAPING FROM THE SCAFFOLDING -- SHE HOOK-KICKS HIS HEAD INTO THE RAILING -- CATCHING HIM AS HE REELS -­ RAMMING HIS FACE DOWN HARD AGAIN -- THE GUNMAN CRUMPLES]
[Selina moves to Batman -- losing his grip, fading -- no time to lose, she leans down, grabs his arm -- braces her heels on the railing -- levering him slowly up -- until she collapses on the catwalk, his body on top of hers.]
[She rolls him onto his back, gazing down, face close to his. He looks up, haunted, as if he doesn't see her as he struggles to breathe -- when she notices HIS CHEST -- the blast has torn his armor, buckshot lodged in exposed skin -- a lot of blood it's unclear how bad the wound is -- he tries to sit up -- she guides him back down -- growing emotional -- cradling his face -- soothing--]
Selina: No, it's okay. It's okay. It's okay. It's done now. It's done. It's over.
[Finally he submits -- his eyes now seeing hers -- holding them -- then, gently closing... Eyes welling, she leans down to kiss his face... his lips... as she pulls back... his eyes open; for a moment, they just stare -- when --]
[-- Batman sees A SHAPE looming above Selina -- IT'S THE BATTERED SHOTGUN SHOOTER -- WHOSE FOOT SLAMS THE BACK OF HER HEAD -- STUNNING HER -- HE DRAGS HER OFF BATMAN -­ UNSHEATHING A HUNTING KNIFE FROM HIS BOOT -- SHE RAISES HER ARMS TO DEFEND HERSELF AS HE STABS WILDLY AT HER!]
[BATMAN FIGHTS TO GET UP -- HE CAN'T -- AS SELINA STRUGGLES -- HE FUMBLES SOMETHING FROM HIS BELT -- AN AUTO-INJECTOR: ADRENALINE -- HE JAMS IT INTO HIS THIGH!
[HE LAUNCHES HIMSELF WITH A JOLT -- RIPPING THE ATTACKER OFF SELINA IN A VIOLENT FRENZY -- LOSING ALL CONTROL -­-]
[SELINA STUNNED BY BATMAN'S UNBRIDLED PRIMAL RAGE -- WHEN -- GORDON AND THE COPS BURST OUT A DOOR TO THE CATWALK GORDON RACES TO BATMAN -- TO STOP HIM FROM KILLING --]
Gordon: Hey! HEY! Hey, man, take it easy! Take it easy...
[Batman stops, mid-strike -- Gordon's voice reaching him -­ he turns, disoriented, as Gordon gently pulls him back -­ Batman slowly stands, breathing hard -- turns -- checking on Selina -- as she rises, looking at him, grateful, surprised, the depth of his feelings for her now exposed.]
[Gordon reaches down, pulling the Hood off the SHOOTER --]
Gordon: Jesus... Who the hell are you?
Bitter Nobody: (grins eerily) Me? I'm vengeance.
[Batman turns, struck by the sound of his own words in this killer's mouth -- WHEN -- A CRASH ECHOES BELOW--]
[Everyone spins -- EXCEPT BATMAN -- who continues to stare at the Man, ROCKED -- HOLD ON HIM as the SOUNDS OF PANIC AND CHAOS FADE AWAY -- when FLICKERING LIGHTS in the arena pull him out of his trance -- Batman turns to the others -- COMPLETE SILENCE as DOWN BELOW he SEES --]
[THE FOUR-STORY GLASS WALL BEHIND THE STAGE SMASHING OPEN AS CASCADING DEBRIS FLOODS INSIDE -- UPROOTED TREES, CARS, AND WAVES OF BLACK WATER SWARMING THE SCAFFOLDING AROUND THE STAGE -- WHICH GIVES WAY ALL AT ONCE --]
[BATMAN AND THE OTHERS WATCH PEOPLE TOSSED INTO SWEEPING MUCK -- SCAFFOLDING TOWERS TOPPLE, SHEARING ELECTRICAL LINES POWERING THE HUGE MONITORS AND LIGHTS -- BATMAN SEES ONE LINE SPARKING ANGRILY OVER THE RAPIDLY RISING WATER -- THE WIRE THREATENING TO MAKE CONTACT WITH THE SURFACE, JEOPARDIZING THE THOUSANDS HALF-SUBMERGED --]
[GORDON, SELINA, AND THE COPS WATCH HELPLESSLY -- BATMAN WITHDRAWS HIS GRAPPLE GUN -- FIRING INTO THE CEILING -­ THEY TURN AGHAST AS HE SWINGS OUT -- ONTO THE POWER LINE!]
[BATMAN PULLS HIS TACTICAL KNIFE -- BRACING HIMSELF -- HE HACKS THE LINE -- SOUND COMES CRASHING BACK -- AS AN ELECTRICAL BLAST SURGES THROUGH HIM -- JOLTING HIM LOOSE -- HE DROPS TO THE WATER BELOW, SPLASHING INTO IT! SELINA AND GORDON WATCH IN HORROR -- AS ALL THE LIGHTS GO OUT--]
[FOR A MOMENT, WE WONDER: IS BATMAN DEAD? WHEN -- HE BREAKS THE SURFACE, GASPING, ALIVE. Scans the darkness around him, pulling something from his belt; it IGNITES, and we see it's A FLARE -- THE SOLE SOURCE OF LIGHT NOW ILLUMINATING THE THOUSANDS IN THE WATER ALL AROUND HIM --]
[He sees BELLA AND OTHERS, trapped in twisted scaffolding in the STILL-RISING WATER -- he starts quickly toward them -- climbs the wreckage -- heaving a truss aside to make an opening to let them all out -- but as he reaches in, Bella and the group hesitate, intimidated by Batman's haunting, wraith-like presence in the flare's light -­ all, except a BOY... MITCHELL'S TEN YEAR OLD SON, who reaches his hand up, unafraid. Batman pulls him up... He turns to Bella, offering a hand again... she takes it. As she clings to him, the others begin climbing out too --]
[NIRVANA'S "SOMETHING IN THE WAY" BEGINS -- as Batman uses HIS FLARE AS A BEACON, leading the masses through water, everyone following to safety -- a mesmerizing sight...]
Bruce: Wednesday, November Sixth. The city is underwater.
EXT. EXTREME HIGH AND WIDE OVER LOWER GOTHAM - SUNRISE
[Light fills the sky; the island is COMPLETELY SUBMERGED--]
Bruce: The National Guard is coming.
EXT. LOWER GOTHAM STREETS - A SERIES OF SHOTS - SUNRISE
[REVISITING KEY LOCATIONS FROM OUR STORY -- the FLOODED SCENES OF AFTERMATH appear serene, surreally beautiful... WE SEE -- the half-sunk CITY HALL -- facade ripped open a lone dog paddles past the tops of traffic lights --]
Bruce: Martial Law is in effect. But the criminal element never sleeps.
[-- THE DINER WHERE RIDDLER WAS CAUGHT -- SUN GLEAMS IN ON 180 A SMALL FLEET OF PYREX COFFEE POTS, WHICH FLOAT EERILY--]
Bruce: Looting and lawlessness will be rampant in the parts of the city no one can get to.
[-- THE ICEBERG LOUNGE -- THE EMPTY DANCE FLOOR NOW SWIMMING IN STILL WATER UNDER SHIMMERING STAGE LIGHTS--]
Bruce: I can already see things will get worse before they get better.
FALCONE'S DRAWING ROOM -- FRESH, WET FOOT PRINTS LEAD TO A LONE FIGURE SEATED IN FALCONE'S CHAIR; PENGUIN--]
Bruce: And some will seize the chance to grab everything they can...
[--Penguin stares out over the city, his mind turning darkly...]
EXT. GOTHAM HOSPITAL TRIAGE CENTER - SUNRISE
[In bandages, BELLA REAL holds a PRESS CONFERENCE; GORDON among the embattled POLICE and OFFICIALS around her --]
Mayor Bella Reál: We will rebuild. But not just our city. We must rebuild people's faith in our institutions. In our elected officials... In each other. Together, we will learn to believe in Gotham again.
[As NIRVANA SWELLS --]
EXT. ABOVE GOTHAM SQUARE GARDEN - SUNRISE
[The roof jammed with EVACUEES waiting to be air-lifted, as FIRST RESPONDERS pull SURVIVORS through the skylight.]
Bruce: I'm starting to see now. I have had an effect here... but not the one I intended. Vengeance won't change the past. Mine, or anyone else's. I have to become more.
[CLOSER: FIREMEN turn, struck by the sight of -- BATMAN, caked in dried mud; he looks like hell -- heads turn as he carries AN INJURED CHILD across the roof in his arms--]
Bruce: People need hope. To know someone's out there for them. The city's angry. Scarred. Like me.
[As Batman puts her into a MED SLED, the child CLUTCHES him, distraught; Batman stiffens, unsure how to respond.]
Bruce: Our scars can destroy us. Even after the physical wounds have healed. But if we survive them...
[Batman leans in... returning the embrace... the sobbing child calms, releasing him... And the sled lifts...]
Bruce: ...they can transform us. They can give us the power to endure, and the strength to fight.
[HOLD ON BATMAN IN SILHOUETTE, watching the child ascend --]
INT. ARKHAM PRISON FOR THE INSANE - SAME
[Our view is a partially obscured, sidelong perspective -- we hear QUIET MOANING--]
[REVEAL RIDDLER -- face smooshed to the security glass of his cell, craning to see the story in complete anguish...]
Arkham Inmate: Isn't that terrible? Him, raining on your parade like that? [tuts] What is it they say? One day, you're on top. The next, you're a clown. Well... Let me tell you, there are worse things to be.
[Riddler shrinks to the floor, totally despondent. Then:]
Arkham Inmate: Hey, hey, hey, don't be sad! You did so well. And, you know... Gotham loves a comeback story.
[Riddler rises, peering out of his cell, but can't see -­-]
The Riddler: Who are you?
Arkham Inmate: Well, that's the question, isn't it? (then) Riddle me this: "The less of them you have, the more one is worth"...
[Riddler ponders... then, finally... smiles hopefully...]
The Riddler: A friend.
[And the Unseen Prisoner begins to LAUGH... in the signature JOKER style... the sound echoing us to --]
EXT. RUN-DOWN GOTHAM CEMETERY - DUSK
[Selina stands at a GRAVE: "MARIA KYLE". After a moment, she turns, tears in her eyes, heading to her bike -- her stray cats poke their heads out of leather saddle bags --]
Batman: You're leaving?
[Selina turns, startled to see A FIGURE IN THE SHADOWS -- BATMAN, his motorcycle behind him. She's self-conscious.]
Selina: Jesus. Don't you ever just say hello?
[He emerges, a sense of unfinished business between them.]
Batman: Where will you go?
Selina: I don't know. Upstate? Bludhaven, maybe. (then, grins) Why? You askin' me to stay?
[But Batman says nothing. She darkens, worry in her voice:]
Selina; You know this place is never gonna change. With Carmine gone, it's only gonna get worse for you. There's gonna be a power grab. It'll be bloody.
Batman: I know. But the city can change.
Selina: It won't.
Batman: I have to try.
Selina: It's gonna kill you eventually, you know that.
[SILENCE. Then, she tries to lighten things -- a smile at an impossible thought --]
Selina: Listen... Why don't you come with me? Get into some trouble? Knock off some CEO Hedge Fund Types, it'll be fun! The Bat and the Cat. It's got a nice ring...
[-- when she sees he's not looking at her; she follows his gaze to the BAT SIGNAL in the clouds -- smiles, rueful --]
Selina: Who am I kidding? You're already spoken for.
[He looks back at her -- she nods at the sky -­-]
Selina: You should go.
[And then she turns, getting on her bike -- when -­-]
Batman: Selina...
[She looks over -- a pregnant silence as they stare finally, he speaks, resigned to letting her go --]
Batman: Take care of yourself.
[She nods a sad smile, starts her bike, heading off. Batman watches her go, mounting his; he revs the engine, accelerating after her -- and for a moment, they chase through the cemetery... until, they split off opposite ways.]
[ON BATMAN, staring hard ahead... finally, HIS EYES MOVE TO HIS SIDE MIRROR, unable to resist one last look, AS SHE RECEDES... His eyes lift again, racing toward his city, a look of sheer determination -- we HOLD, AS OUR VIEW ANGRILY VIBRATES WITH HIS EVER INCREASING SPEED... FASTER... AND FASTER... until, we...]
[CUT TO BLACK.]
[THE END.]
`).then(e => console.log(`Code finished, ${e} messages sent`)).catch(console.error)