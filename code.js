// This file is (C) Carlos Sanchez 2014, released under the MIT license


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// GLOBAL VARIABLES AND CONSTANTS ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// CONSTANTS 
VOCABULARY_ID = 0;
VOCABULARY_WORD = 1;
VOCABULARY_TYPE = 2;

WORDTYPE_VERB = 0;
WORDTYPE_NOUN = 1
WORDTYPE_ADJECT = 2;
WORDTYPE_ADVERB = 3;
WORDTYPE_PRONOUN = 4;
WORDTYPE_CONJUNCTION = 5;
WORDTYPE_PREPOSITION = 6;

TIMER_MILLISECONDS  = 40;

RESOURCE_TYPE_IMG = 1;
RESOURCE_TYPE_SND = 2;

PROCESS_RESPONSE = 0;
PROCESS_DESCRIPTION = 1;
PROCESS_TURN = 2;

DIV_TEXT_SCROLL_STEP = 40;


// Aux
SET_VALUE = 255; // Value assigned by SET condact
EMPTY_WORD = 255; // Value for word types when no match is found (as for  sentences without adjective or name)
MAX_WORD_LENGHT = 10;  // Number of characters considered per word
FLAG_COUNT = 256;  // Number of flags
NUM_CONNECTION_VERBS = 14; // Number of verbs used as connection, from 0 to N - 1
NUM_CONVERTIBLE_NOUNS = 20;
NUM_PROPER_NOUNS = 50; // Number of proper nouns, can't be used as pronoun reference
EMPTY_OBJECT = 255; // To remark there is no object when the action requires a objno parameter
NO_EXIT = 255;  // If an exit does not exist, its value is this value
MAX_CHANNELS = 17; // Number of SFX channels
RESOURCES_DIR='dat/';


//Attributes
ATTR_LIGHT=0;			// Object produces light
ATTR_WEARABLE=1;		// Object is wearable
ATTR_CONTAINER=2;       // Object is a container
ATTR_NPC=3;             // Object is actually an NPC
ATTR_CONCEALED = 4; /// Present but not visible
ATTR_EDIBLE = 5;   /// Can be eaten
ATTR_DRINKABLE=6;
ATTR_ENTERABLE = 7;
ATTR_FEMALE = 8;
ATTR_LOCKABLE = 9;
ATTR_LOCKED = 10;
ATTR_MALE = 11;
ATTR_NEUTER=12;
ATTR_OPENABLE =13;
ATTR_OPEN=14;
ATTR_PLURALNAME = 15;
ATTR_TRANSPARENT=16;
ATTR_SCENERY=17;
ATTR_SUPPORTER = 18;
ATTR_SWITCHABLE=19;
ATTR_ON  =20;
ATTR_STATIC  =21;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// INTERNAL STRINGS ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// General messages & strings
STR_NEWLINE = '<br />';
STR_PROMPT_START = '<span class="feedback">&gt; ';
STR_PROMPT_END = '</span>';
STR_RAMSAVE_FILENAME = 'RAMSAVE_SAVEGAME';



// Runtime error messages
STR_WRONG_SYSMESS = 'WARNING: System message requested does not exist.'; 
STR_WRONG_LOCATION = 'WARNING: Location requested does not exist.'; 
STR_WRONG_MESSAGE = 'WARNING: Message requested does not exist.'; 
STR_WRONG_PROCESS = 'WARNING: Process requested does not exist.' 
STR_RAMLOAD_ERROR= 'WARNING: You can\'t restore game as it has not yet been saved.'; 
STR_RUNTIME_VERSION  = 'ngPAWS runtime (C) 2014 Carlos Sanchez.  Released under {URL|http://www.opensource.org/licenses/MIT| MIT license}.\nBuzz sound libray (C) Jay Salvat. Released under the {URL|http://www.opensource.org/licenses/MIT| MIT license} \n jQuery (C) jQuery Foundation. Released under the {URL|https://jquery.org/license/| MIT license}.';
STR_TRANSCRIPT = 'To copy the transcript to your clipboard, press Ctrl+C, then press Enter';

STR_INVALID_TAG_SEQUENCE = 'Invalid tag sequence: ';
STR_INVALID_TAG_SEQUENCE_EMPTY = 'Invalid tag sequence.';
STR_INVALID_TAG_SEQUENCE_BADPARAMS = 'Invalid tag sequence: bad parameters.';
STR_INVALID_TAG_SEQUENCE_BADTAG = 'Invalid tag sequence: unknown tag.';
STR_BADIE = 'You are using a very old version of Internet Explorer. Some features of this product won\'t be avaliable, and other may not work properly. For a better experience please upgrade your browser or install some other one like Firefox, Chrome or Opera.\n\nIt\'s up to you to continue but be warned your experience may be affected.';
STR_INVALID_OBJECT = 'WARNING: Trying to access object that does not exist'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////     FLAGS     ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


FLAG_LIGHT = 0;
FLAG_OBJECTS_CARRIED_COUNT = 1;
FLAG_AUTODEC2 = 2; 
FLAG_AUTODEC3 = 3;
FLAG_AUTODEC4 = 4;
FLAG_AUTODEC5 = 5;
FLAG_AUTODEC6 = 6;
FLAG_AUTODEC7 = 7;
FLAG_AUTODEC8 = 8;
FLAG_AUTODEC9 = 9;
FLAG_AUTODEC10 = 10;
FLAG_ESCAPE = 11;
FLAG_PARSER_SETTINGS = 12;
FLAG_PICTURE_SETTINGS = 29
FLAG_SCORE = 30;
FLAG_TURNS_LOW = 31;
FLAG_TURNS_HIGH = 32;
FLAG_VERB = 33;
FLAG_NOUN1 =34;
FLAG_ADJECT1 = 35;
FLAG_ADVERB = 36;
FLAG_MAXOBJECTS_CARRIED = 37;
FLAG_LOCATION = 38;
FLAG_TOPLINE = 39;   // deprecated
FLAG_MODE = 40;  // deprecated
FLAG_PROTECT = 41;   // deprecated
FLAG_PROMPT = 42; 
FLAG_PREP = 43;
FLAG_NOUN2 = 44;
FLAG_ADJECT2 = 45;
FLAG_PRONOUN = 46;
FLAG_PRONOUN_ADJECT = 47;
FLAG_TIMEOUT_LENGTH = 48;
FLAG_TIMEOUT_SETTINGS = 49; 
FLAG_DOALL_LOC = 50;
FLAG_REFERRED_OBJECT = 51;
FLAG_MAXWEIGHT_CARRIED = 52;
FLAG_OBJECT_LIST_FORMAT = 53;
FLAG_REFERRED_OBJECT_LOCATION = 54;
FLAG_REFERRED_OBJECT_WEIGHT = 55;
FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES = 56;
FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES = 57;
FLAG_EXPANSION1 = 58;
FLAG_EXPANSION2 = 59;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// SPECIAL LOCATIONS ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

LOCATION_WORN = 253;
LOCATION_CARRIED = 254;
LOCATION_NONCREATED = 252;
LOCATION_HERE = 255;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////  SYSTEM MESSAGES  ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



SYSMESS_ISDARK = 0;
SYSMESS_YOUCANSEE = 1;
SYSMESS_PROMPT0 = 2;
SYSMESS_PROMPT1 = 3;
SYSMESS_PROMPT2 = 4
SYSMESS_PROMPT3= 5;
SYSMESS_IDONTUNDERSTAND = 6;
SYSMESS_WRONGDIRECTION = 7
SYSMESS_CANTDOTHAT = 8;
SYSMESS_YOUARECARRYING = 9;
SYSMESS_WORN = 10;
SYSMESS_CARRYING_NOTHING = 11;
SYSMESS_AREYOUSURE = 12;
SYSMESS_PLAYAGAIN = 13;
SYSMESS_FAREWELL = 14;
SYSMESS_OK = 15;
SYSMESS_PRESSANYKEY = 16;
SYSMESS_TURNS_START = 17;
SYSMESS_TURNS_CONTINUE = 18;
SYSMESS_TURNS_PLURAL = 19;
SYSMESS_TURNS_END = 20;
SYSMESS_SCORE_START= 21;
SYSMESS_SCORE_END =22;
SYSMESS_YOURENOTWEARINGTHAT = 23;
SYSMESS_YOUAREALREADYWEARINGTHAT = 24;
SYSMESS_YOUALREADYHAVEOBJECT = 25;
SYSMESS_CANTSEETHAT = 26;
SYSMESS_CANTCARRYANYMORE = 27;
SYSMESS_YOUDONTHAVETHAT = 28;
SYSMESS_YOUAREALREADYWAERINGOBJECT = 29;
SYSMESS_YES = 30;
SYSMESS_NO = 31;
SYSMESS_MORE = 32;
SYSMESS_CARET = 33;
SYSMESS_TIMEOUT=35;
SYSMESS_YOUTAKEOBJECT = 36;
SYSMESS_YOUWEAROBJECT = 37;
SYSMESS_YOUREMOVEOBJECT = 38;
SYSMESS_YOUDROPOBJECT = 39;
SYSMESS_YOUCANTWEAROBJECT = 40;
SYSMESS_YOUCANTREMOVEOBJECT = 41;
SYSMESS_CANTREMOVE_TOOMANYOBJECTS = 42;
SYSMESS_WEIGHSTOOMUCH = 43;
SYSMESS_YOUPUTOBJECTIN = 44;
SYSMESS_YOUCANTTAKEOBJECTOUTOF = 45;
SYSMESS_LISTSEPARATOR = 46;
SYSMESS_LISTLASTSEPARATOR = 47;
SYSMESS_LISTEND = 48;
SYSMESS_YOUDONTHAVEOBJECT = 49;
SYSMESS_YOUARENOTWEARINGOBJECT = 50;
SYSMESS_PUTINTAKEOUTTERMINATION = 51;
SYSMESS_THATISNOTIN = 52;
SYSMESS_EMPTYOBJECTLIST = 53;
SYSMESS_FILENOTFOUND = 54;
SYSMESS_CORRUPTFILE = 55;
SYSMESS_IOFAILURE = 56;
SYSMESS_DIRECTORYFULL = 57;
SYSMESS_LOADFILE = 58;
SYSMESS_FILENOTFOUND = 59;
SYSMESS_SAVEFILE = 60;
SYSMESS_SORRY = 61;
SYSMESS_NONSENSE_SENTENCE = 62;
SYSMESS_NPCLISTSTART = 63;
SYSMESS_NPCLISTCONTINUE = 64;
SYSMESS_NPCLISTCONTINUE_PLURAL = 65;
SYSMESS_INSIDE_YOUCANSEE = 66;
SYSMESS_OVER_YOUCANSEE = 67;
SYSMESS_YOUPUTOBJECTON = 68;
SYSMESS_YOUCANTTAKEOBJECTFROM = 69;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////// GLOBAL VARS //////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Parser vars
var last_player_orders = [];   // Store last player orders, to be able to restore it when pressing arrow up
var last_player_orders_pointer = 0;
var parser_word_found;
var player_order_buffer = '';
var player_order = ''; // Current player order
var previous_verb = EMPTY_WORD;
var previous_noun = EMPTY_WORD;
var previous_adject = EMPTY_WORD;
var pronoun_suffixes = [];


//Settings
var graphicsON = true; 
var soundsON = true; 
var interruptDisabled = false;
var showWarnings = true;

// waitkey commands callback function
var waitkey_callback_function = [];

//PAUSE
var inPause=false;
var pauseRemainingTime = 0;



// Transcript
var inTranscript = false;
var transcript = '';


// Block
var inBlock = false;
var unblock_process = null;


// END
var inEND = false;

//QUIT
var inQUIT = false;

//ANYKEY
var inAnykey = false;

//GETKEY
var inGetkey = false;
var getkey_return_flag = null;

// Status flags
var done_flag;
var describe_location_flag;
var in_response;
var success;

// doall control
var doall_flag;
var process_in_doall;
var entry_for_doall	= '';
var current_process;


var timeout_progress = 0;
var ramsave_value = null;
var num_objects;


// The flags
var flags = new Array();


// The sound channels
var soundChannels = [];
var soundLoopCount = [];

//The last free object attribute
var nextFreeAttr = 22;

//Autocomplete array
var autocomplete = new Array();
var autocompleteStep = 0;
var autocompleteBaseWord = '';
// PROCESSES

interruptProcessExists = false;

function pro000()
{
process_restart=true;
pro000_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p000e0000:
	{
 		if (skipdoall('p000e0000')) break p000e0000;
 		ACChook(0);
		if (done_flag) break pro000_restart;
		{}

	}

	// AGARR TODO
	p000e0001:
	{
 		if (skipdoall('p000e0001')) break p000e0001;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0001;
			if (!CNDnoun1(20)) break p000e0001;
 		}
		if (!CNDprep(3)) break p000e0001;
 		ACCsynonym(75,255);
		{}

	}

	// PON TODO
	p000e0002:
	{
 		if (skipdoall('p000e0002')) break p000e0002;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0002;
			if (!CNDnoun1(20)) break p000e0002;
 		}
		if (!CNDprep(4)) break p000e0002;
 		ACCsynonym(74,255);
		{}

	}

	// AGARR TODO
	p000e0003:
	{
 		if (skipdoall('p000e0003')) break p000e0003;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0003;
			if (!CNDnoun1(20)) break p000e0003;
 		}
		if (!CNDisnotlight()) break p000e0003;
 		ACCwriteln(1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR TODO
	p000e0004:
	{
 		if (skipdoall('p000e0004')) break p000e0004;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0004;
			if (!CNDnoun1(20)) break p000e0004;
 		}
 		ACCobjat(getFlag(38),13);
		if (!CNDzero(13)) break p000e0004;
 		ACCwriteln(2);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR TODO
	p000e0005:
	{
 		if (skipdoall('p000e0005')) break p000e0005;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0005;
			if (!CNDnoun1(20)) break p000e0005;
 		}
		entry_for_doall = 'p000e0006';
		process_in_doall = 0;
 		ACCdoall(255);
		break pro000_restart;
		{}

	}

	// DEJA TODO
	p000e0006:
	{
 		if (skipdoall('p000e0006')) break p000e0006;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0006;
			if (!CNDnoun1(20)) break p000e0006;
 		}
 		ACCobjat(254,13);
		if (!CNDzero(13)) break p000e0006;
 		ACCwriteln(3);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA TODO
	p000e0007:
	{
 		if (skipdoall('p000e0007')) break p000e0007;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0007;
			if (!CNDnoun1(20)) break p000e0007;
 		}
		if (!CNDat(18)) break p000e0007;
 		ACCprocess(13);
 		ACCwriteln(4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA TODO
	p000e0008:
	{
 		if (skipdoall('p000e0008')) break p000e0008;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0008;
			if (!CNDnoun1(20)) break p000e0008;
 		}
		entry_for_doall = 'p000e0009';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0009:
	{
 		if (skipdoall('p000e0009')) break p000e0009;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0009;
 		}
		if (!CNDnoteq(51,255)) break p000e0009;
		if (!CNDpresent(getFlag(51))) break p000e0009;
		if (!CNDonotzero(getFlag(51),2)) break p000e0009;
 		ACCcopyff(34,44);
 		ACCcopyff(35,45);
 		ACCsynonym(75,20);
 		ACClet(43,3);
		{}

	}

	// EXTRAE _
	p000e0010:
	{
 		if (skipdoall('p000e0010')) break p000e0010;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0010;
 		}
 		ACCwhatox2(13);
		{}

	}

	// EXTRAE TODO
	p000e0011:
	{
 		if (skipdoall('p000e0011')) break p000e0011;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0011;
			if (!CNDnoun1(20)) break p000e0011;
 		}
		if (!CNDprep(3)) break p000e0011;
		if (!CNDnoteq(13,255)) break p000e0011;
		if (!CNDonotzero(getFlag(13),2)) break p000e0011;
		if (!CNDabsent(getFlag(13))) break p000e0011;
 		ACCwriteln(5);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE TODO
	p000e0012:
	{
 		if (skipdoall('p000e0012')) break p000e0012;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0012;
			if (!CNDnoun1(20)) break p000e0012;
 		}
		if (!CNDprep(3)) break p000e0012;
		if (!CNDnoteq(13,255)) break p000e0012;
		if (!CNDonotzero(getFlag(13),18)) break p000e0012;
		if (!CNDabsent(getFlag(13))) break p000e0012;
 		ACCwriteln(6);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE TODO
	p000e0013:
	{
 		if (skipdoall('p000e0013')) break p000e0013;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0013;
			if (!CNDnoun1(20)) break p000e0013;
 		}
		if (!CNDprep(3)) break p000e0013;
		if (!CNDnoteq(13,255)) break p000e0013;
		if (!CNDonotzero(getFlag(13),2)) break p000e0013;
		if (!CNDpresent(getFlag(13))) break p000e0013;
 		ACCobjat(getFlag(13),14);
		if (!CNDzero(14)) break p000e0013;
 		ACCwriteln(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE TODO
	p000e0014:
	{
 		if (skipdoall('p000e0014')) break p000e0014;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0014;
			if (!CNDnoun1(20)) break p000e0014;
 		}
		if (!CNDprep(3)) break p000e0014;
		if (!CNDnoteq(13,255)) break p000e0014;
		if (!CNDonotzero(getFlag(13),18)) break p000e0014;
		if (!CNDpresent(getFlag(13))) break p000e0014;
 		ACCobjat(getFlag(13),14);
		if (!CNDzero(14)) break p000e0014;
 		ACCwriteln(8);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE TODO
	p000e0015:
	{
 		if (skipdoall('p000e0015')) break p000e0015;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0015;
			if (!CNDnoun1(20)) break p000e0015;
 		}
		if (!CNDprep(3)) break p000e0015;
		if (!CNDnoteq(13,255)) break p000e0015;
		if (!CNDonotzero(getFlag(13),2)) break p000e0015;
		if (!CNDpresent(getFlag(13))) break p000e0015;
		entry_for_doall = 'p000e0016';
		process_in_doall = 0;
 		ACCdoall(getFlag(13));
		break pro000_restart;
		{}

	}

	// EXTRAE TODO
	p000e0016:
	{
 		if (skipdoall('p000e0016')) break p000e0016;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0016;
			if (!CNDnoun1(20)) break p000e0016;
 		}
		if (!CNDprep(3)) break p000e0016;
		if (!CNDnoteq(13,255)) break p000e0016;
		if (!CNDonotzero(getFlag(13),18)) break p000e0016;
		if (!CNDpresent(getFlag(13))) break p000e0016;
		entry_for_doall = 'p000e0017';
		process_in_doall = 0;
 		ACCdoall(getFlag(13));
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0017:
	{
 		if (skipdoall('p000e0017')) break p000e0017;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0017;
 		}
		if (!CNDnoteq(51,255)) break p000e0017;
		if (!CNDpresent(getFlag(51))) break p000e0017;
		if (!CNDprep(4)) break p000e0017;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0017;
		if (!CNDpresent(getFlag(13))) break p000e0017;
 		ACCsynonym(74,255);
 		ACClet(43,4);
		{}

	}

	// PON _
	p000e0018:
	{
 		if (skipdoall('p000e0018')) break p000e0018;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0018;
 		}
		if (!CNDnoteq(51,255)) break p000e0018;
		if (!CNDpresent(getFlag(51))) break p000e0018;
		if (!CNDprep(4)) break p000e0018;
 		ACCsynonym(74,255);
		{}

	}

	// ECHA _
	p000e0019:
	{
 		if (skipdoall('p000e0019')) break p000e0019;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0019;
 		}
 		ACCwhatox2(13);
		{}

	}

	// ECHA TODO
	p000e0020:
	{
 		if (skipdoall('p000e0020')) break p000e0020;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0020;
			if (!CNDnoun1(20)) break p000e0020;
 		}
		if (!CNDprep(4)) break p000e0020;
		if (!CNDnoteq(13,255)) break p000e0020;
		if (!CNDonotzero(getFlag(13),2)) break p000e0020;
		if (!CNDabsent(getFlag(13))) break p000e0020;
 		ACCwriteln(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0021:
	{
 		if (skipdoall('p000e0021')) break p000e0021;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0021;
			if (!CNDnoun1(20)) break p000e0021;
 		}
		if (!CNDprep(4)) break p000e0021;
		if (!CNDnoteq(13,255)) break p000e0021;
		if (!CNDonotzero(getFlag(13),18)) break p000e0021;
		if (!CNDabsent(getFlag(13))) break p000e0021;
 		ACCwriteln(10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0022:
	{
 		if (skipdoall('p000e0022')) break p000e0022;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0022;
			if (!CNDnoun1(20)) break p000e0022;
 		}
		if (!CNDprep(4)) break p000e0022;
		if (!CNDnoteq(13,255)) break p000e0022;
		if (!CNDonotzero(getFlag(13),2)) break p000e0022;
		if (!CNDcarried(getFlag(13))) break p000e0022;
 		ACCobjat(254,14);
		if (!CNDeq(14,1)) break p000e0022;
 		ACCwriteln(11);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0023:
	{
 		if (skipdoall('p000e0023')) break p000e0023;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0023;
			if (!CNDnoun1(20)) break p000e0023;
 		}
		if (!CNDprep(4)) break p000e0023;
		if (!CNDnoteq(13,255)) break p000e0023;
		if (!CNDonotzero(getFlag(13),18)) break p000e0023;
		if (!CNDcarried(getFlag(13))) break p000e0023;
 		ACCobjat(254,14);
		if (!CNDeq(14,1)) break p000e0023;
 		ACCwriteln(12);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0024:
	{
 		if (skipdoall('p000e0024')) break p000e0024;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0024;
			if (!CNDnoun1(20)) break p000e0024;
 		}
		if (!CNDprep(4)) break p000e0024;
		if (!CNDnoteq(13,255)) break p000e0024;
		if (!CNDonotzero(getFlag(13),2)) break p000e0024;
		if (!CNDisat(getFlag(13),getFlag(38))) break p000e0024;
 		ACCobjat(254,14);
		if (!CNDzero(14)) break p000e0024;
 		ACCwriteln(13);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0025:
	{
 		if (skipdoall('p000e0025')) break p000e0025;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0025;
			if (!CNDnoun1(20)) break p000e0025;
 		}
		if (!CNDprep(4)) break p000e0025;
		if (!CNDnoteq(13,255)) break p000e0025;
		if (!CNDonotzero(getFlag(13),18)) break p000e0025;
		if (!CNDisat(getFlag(13),getFlag(38))) break p000e0025;
 		ACCobjat(254,14);
		if (!CNDzero(14)) break p000e0025;
 		ACCwriteln(14);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0026:
	{
 		if (skipdoall('p000e0026')) break p000e0026;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0026;
			if (!CNDnoun1(20)) break p000e0026;
 		}
		if (!CNDprep(4)) break p000e0026;
		if (!CNDnoteq(13,255)) break p000e0026;
		if (!CNDonotzero(getFlag(13),2)) break p000e0026;
		if (!CNDpresent(getFlag(13))) break p000e0026;
		entry_for_doall = 'p000e0027';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// ECHA TODO
	p000e0027:
	{
 		if (skipdoall('p000e0027')) break p000e0027;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0027;
			if (!CNDnoun1(20)) break p000e0027;
 		}
		if (!CNDprep(4)) break p000e0027;
		if (!CNDnoteq(13,255)) break p000e0027;
		if (!CNDonotzero(getFlag(13),18)) break p000e0027;
		if (!CNDpresent(getFlag(13))) break p000e0027;
		entry_for_doall = 'p000e0028';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// DESVESTIR TODO
	p000e0028:
	{
 		if (skipdoall('p000e0028')) break p000e0028;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0028;
			if (!CNDnoun1(20)) break p000e0028;
 		}
 		ACCobjat(253,13);
		if (!CNDzero(13)) break p000e0028;
 		ACCwriteln(15);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR TODO
	p000e0029:
	{
 		if (skipdoall('p000e0029')) break p000e0029;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0029;
			if (!CNDnoun1(20)) break p000e0029;
 		}
		entry_for_doall = 'p000e0030';
		process_in_doall = 0;
 		ACCdoall(253);
		break pro000_restart;
		{}

	}

	// PON TODO
	p000e0030:
	{
 		if (skipdoall('p000e0030')) break p000e0030;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0030;
			if (!CNDnoun1(20)) break p000e0030;
 		}
 		ACCobjat(254,13);
		if (!CNDzero(13)) break p000e0030;
 		ACCwriteln(16);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON TODO
	p000e0031:
	{
 		if (skipdoall('p000e0031')) break p000e0031;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0031;
			if (!CNDnoun1(20)) break p000e0031;
 		}
		entry_for_doall = 'p000e0032';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// ARROJA TODO
	p000e0032:
	{
 		if (skipdoall('p000e0032')) break p000e0032;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0032;
			if (!CNDnoun1(20)) break p000e0032;
 		}
 		ACCobjat(254,13);
		if (!CNDzero(13)) break p000e0032;
 		ACCwriteln(17);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA TODO
	p000e0033:
	{
 		if (skipdoall('p000e0033')) break p000e0033;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0033;
			if (!CNDnoun1(20)) break p000e0033;
 		}
		if (!CNDeq(1,1)) break p000e0033;
		entry_for_doall = 'p000e0034';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
		{}

	}

	// ARROJA TODO
	p000e0034:
	{
 		if (skipdoall('p000e0034')) break p000e0034;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0034;
			if (!CNDnoun1(20)) break p000e0034;
 		}
		if (!CNDgt(1,1)) break p000e0034;
 		ACCwriteln(18);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ TODO
	p000e0035:
	{
 		if (skipdoall('p000e0035')) break p000e0035;
 		if (in_response)
		{
			if (!CNDnoun1(20)) break p000e0035;
 		}
 		ACCwriteln(19);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0036:
	{
 		if (skipdoall('p000e0036')) break p000e0036;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0036;
 		}
 		ACCsynonym(103,255);
		{}

	}

	// APAGA _
	p000e0037:
	{
 		if (skipdoall('p000e0037')) break p000e0037;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0037;
 		}
 		ACCsynonym(104,255);
		{}

	}

	// ANDA _
	p000e0038:
	{
 		if (skipdoall('p000e0038')) break p000e0038;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0038;
 		}
		if (!CNDlt(34,14)) break p000e0038;
 		ACCcopyff(34,33);
		{}

	}

	// _ _
	p000e0039:
	{
 		if (skipdoall('p000e0039')) break p000e0039;
		if (!CNDprep(4)) break p000e0039;
		if (!CNDeq(33,255)) break p000e0039;
		if (!CNDeq(34,255)) break p000e0039;
 		ACCsynonym(12,255);
 		ACClet(43,255);
		{}

	}

	// _ _
	p000e0040:
	{
 		if (skipdoall('p000e0040')) break p000e0040;
		if (!CNDprep(13)) break p000e0040;
		if (!CNDeq(33,255)) break p000e0040;
		if (!CNDeq(34,255)) break p000e0040;
 		ACCsynonym(13,255);
 		ACClet(43,255);
		{}

	}

	// D _
	p000e0041:
	{
 		if (skipdoall('p000e0041')) break p000e0041;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0041;
 		}
		if (!CNDnoteq(34,255)) break p000e0041;
		if (!CNDprep(4)) break p000e0041;
 		ACCsynonym(30,255);
		{}

	}

	// D _
	p000e0042:
	{
 		if (skipdoall('p000e0042')) break p000e0042;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0042;
 		}
		if (!CNDnoteq(34,255)) break p000e0042;
 		ACCsynonym(30,255);
		{}

	}

	// D _
	p000e0043:
	{
 		if (skipdoall('p000e0043')) break p000e0043;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0043;
 		}
		if (!CNDbnotzero(12,1)) break p000e0043;
 		ACCsynonym(30,255);
		{}

	}

	// REBUSCA _
	p000e0044:
	{
 		if (skipdoall('p000e0044')) break p000e0044;
 		if (in_response)
		{
			if (!CNDverb(78)) break p000e0044;
 		}
 		ACCsynonym(30,255);
 		ACClet(43,4);
		{}

	}

	// ARRANCA _
	p000e0045:
	{
 		if (skipdoall('p000e0045')) break p000e0045;
 		if (in_response)
		{
			if (!CNDverb(79)) break p000e0045;
 		}
 		ACCsynonym(32,255);
 		ACClet(43,3);
		{}

	}

	// EXITS _
	p000e0046:
	{
 		if (skipdoall('p000e0046')) break p000e0046;
 		if (in_response)
		{
			if (!CNDverb(41)) break p000e0046;
 		}
		if (!CNDeq(34,255)) break p000e0046;
		if (!CNDbnotzero(12,1)) break p000e0046;
 		ACCsynonym(30,255);
		{}

	}

	// EXITS _
	p000e0047:
	{
 		if (skipdoall('p000e0047')) break p000e0047;
 		if (in_response)
		{
			if (!CNDverb(41)) break p000e0047;
 		}
		if (!CNDnoteq(34,255)) break p000e0047;
 		ACCsynonym(30,255);
		{}

	}

	// CONSULTA _
	p000e0048:
	{
 		if (skipdoall('p000e0048')) break p000e0048;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0048;
 		}
		if (!CNDnoteq(34,255)) break p000e0048;
		if (!CNDnoteq(51,255)) break p000e0048;
		if (!CNDonotzero(getFlag(51),3)) break p000e0048;
 		ACCsynonym(31,255);
		{}

	}

	// _ _
	p000e0049:
	{
 		if (skipdoall('p000e0049')) break p000e0049;
		if (!CNDprep(9)) break p000e0049;
		if (!CNDbzero(12,2)) break p000e0049;
		if (!CNDnoteq(34,255)) break p000e0049;
 		ACCwhatox(16);
		if (!CNDnoteq(16,255)) break p000e0049;
		if (!CNDnoteq(44,255)) break p000e0049;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0049;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// _ _
	p000e0050:
	{
 		if (skipdoall('p000e0050')) break p000e0050;
		if (!CNDprep(2)) break p000e0050;
		if (!CNDbzero(12,2)) break p000e0050;
		if (!CNDnoteq(34,255)) break p000e0050;
 		ACCwhatox(16);
		if (!CNDnoteq(16,255)) break p000e0050;
		if (!CNDnoteq(44,255)) break p000e0050;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0050;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// _ _
	p000e0051:
	{
 		if (skipdoall('p000e0051')) break p000e0051;
		if (!CNDprep(4)) break p000e0051;
		if (!CNDbzero(12,2)) break p000e0051;
		if (!CNDnoteq(51,255)) break p000e0051;
		if (!CNDpresent(getFlag(51))) break p000e0051;
		if (!CNDonotzero(getFlag(51),2)) break p000e0051;
		if (!CNDnoteq(44,255)) break p000e0051;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0051;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// _ _
	p000e0052:
	{
 		if (skipdoall('p000e0052')) break p000e0052;
		if (!CNDprep(3)) break p000e0052;
		if (!CNDbzero(12,2)) break p000e0052;
		if (!CNDnoteq(51,255)) break p000e0052;
		if (!CNDpresent(getFlag(51))) break p000e0052;
		if (!CNDonotzero(getFlag(51),2)) break p000e0052;
		if (!CNDnoteq(44,255)) break p000e0052;
 		ACCwhatox2(15);
		if (!CNDnoteq(15,255)) break p000e0052;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// AGARR _
	p000e0053:
	{
 		if (skipdoall('p000e0053')) break p000e0053;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0053;
 		}
		if (!CNDprep(3)) break p000e0053;
 		ACCsynonym(75,255);
		{}

	}

	// _ _
	p000e0054:
	{
 		if (skipdoall('p000e0054')) break p000e0054;
 		ACChook(20);
		if (done_flag) break pro000_restart;
		{}

	}

	// AD _
	p000e0055:
	{
 		if (skipdoall('p000e0055')) break p000e0055;
 		if (in_response)
		{
			if (!CNDverb(115)) break p000e0055;
 		}
 		ACCwriteln(21);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0056:
	{
 		if (skipdoall('p000e0056')) break p000e0056;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0056;
 		}
		if (!CNDat(28)) break p000e0056;
 		ACCprocess(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0057:
	{
 		if (skipdoall('p000e0057')) break p000e0057;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0057;
 		}
		if (!CNDat(9)) break p000e0057;
 		ACCprocess(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0058:
	{
 		if (skipdoall('p000e0058')) break p000e0058;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0058;
 		}
		if (!CNDat(17)) break p000e0058;
 		ACCprocess(8);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0059:
	{
 		if (skipdoall('p000e0059')) break p000e0059;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0059;
 		}
		if (!CNDat(23)) break p000e0059;
 		ACCprocess(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0060:
	{
 		if (skipdoall('p000e0060')) break p000e0060;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0060;
 		}
		if (!CNDat(9)) break p000e0060;
 		ACCprocess(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0061:
	{
 		if (skipdoall('p000e0061')) break p000e0061;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0061;
 		}
		if (!CNDat(17)) break p000e0061;
 		ACCprocess(8);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0062:
	{
 		if (skipdoall('p000e0062')) break p000e0062;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0062;
 		}
		if (!CNDat(17)) break p000e0062;
 		ACCprocess(8);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ASCENDER _
	p000e0063:
	{
 		if (skipdoall('p000e0063')) break p000e0063;
 		if (in_response)
		{
			if (!CNDverb(10)) break p000e0063;
 		}
		if (!CNDat(11)) break p000e0063;
 		ACCgoto(10);
 		ACCclear(0);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// BAJA _
	p000e0064:
	{
 		if (skipdoall('p000e0064')) break p000e0064;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0064;
 		}
		if (!CNDat(10)) break p000e0064;
		if (!CNDcarried(0)) break p000e0064;
		if (!CNDonotzero(0,20)) break p000e0064;
 		ACCclear(0);
 		ACCgoto(11);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// BAJA _
	p000e0065:
	{
 		if (skipdoall('p000e0065')) break p000e0065;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0065;
 		}
		if (!CNDat(10)) break p000e0065;
 		ACCgoto(11);
 		ACCset(0);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// BAJA _
	p000e0066:
	{
 		if (skipdoall('p000e0066')) break p000e0066;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0066;
 		}
		if (!CNDat(12)) break p000e0066;
 		ACCprocess(6);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BAJA _
	p000e0067:
	{
 		if (skipdoall('p000e0067')) break p000e0067;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0067;
 		}
		if (!CNDat(28)) break p000e0067;
 		ACCprocess(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BAJA _
	p000e0068:
	{
 		if (skipdoall('p000e0068')) break p000e0068;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0068;
 		}
		if (!CNDat(9)) break p000e0068;
 		ACCprocess(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0069:
	{
 		if (skipdoall('p000e0069')) break p000e0069;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0069;
 		}
		if (!CNDat(26)) break p000e0069;
		if (!CNDzero(107)) break p000e0069;
 		ACCwrite(22);
 		ACCwrite(23);
 		ACCwriteln(24);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0070:
	{
 		if (skipdoall('p000e0070')) break p000e0070;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0070;
 		}
		if (!CNDat(26)) break p000e0070;
		if (!CNDeq(107,1)) break p000e0070;
 		ACCwrite(25);
 		ACCwrite(26);
 		ACCwriteln(27);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0071:
	{
 		if (skipdoall('p000e0071')) break p000e0071;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0071;
 		}
		if (!CNDat(26)) break p000e0071;
		if (!CNDeq(107,2)) break p000e0071;
 		ACCwrite(28);
 		ACCwriteln(29);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0072:
	{
 		if (skipdoall('p000e0072')) break p000e0072;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0072;
 		}
		if (!CNDat(26)) break p000e0072;
		if (!CNDeq(1,5)) break p000e0072;
		if (!CNDnotzero(105)) break p000e0072;
 		ACCgoto(30);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0073:
	{
 		if (skipdoall('p000e0073')) break p000e0073;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0073;
 		}
		if (!CNDat(26)) break p000e0073;
 		ACCwriteln(30);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0074:
	{
 		if (skipdoall('p000e0074')) break p000e0074;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0074;
 		}
		if (!CNDat(12)) break p000e0074;
 		ACCprocess(6);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0075:
	{
 		if (skipdoall('p000e0075')) break p000e0075;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0075;
 		}
		if (!CNDat(17)) break p000e0075;
 		ACCprocess(8);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0076:
	{
 		if (skipdoall('p000e0076')) break p000e0076;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0076;
 		}
		if (!CNDat(103)) break p000e0076;
 		ACClet(33,125);
		{}

	}

	//  _
	p000e0077:
	{
 		if (skipdoall('p000e0077')) break p000e0077;
 		if (in_response)
		{
			if (!CNDverb(3)) break p000e0077;
 		}
		if (!CNDat(105)) break p000e0077;
 		ACCclear(0);
 		ACCgoto(101);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0078:
	{
 		if (skipdoall('p000e0078')) break p000e0078;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0078;
 		}
		if (!CNDat(100)) break p000e0078;
		if (!CNDeq(1,1)) break p000e0078;
		if (!CNDcarried(24)) break p000e0078;
 		ACCclear(0);
 		ACCgoto(101);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0079:
	{
 		if (skipdoall('p000e0079')) break p000e0079;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0079;
 		}
		if (!CNDat(100)) break p000e0079;
		if (!CNDzero(1)) break p000e0079;
 		ACCclear(0);
 		ACCgoto(101);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0080:
	{
 		if (skipdoall('p000e0080')) break p000e0080;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0080;
 		}
		if (!CNDat(100)) break p000e0080;
 		ACCwriteln(31);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0081:
	{
 		if (skipdoall('p000e0081')) break p000e0081;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0081;
 		}
		if (!CNDat(32)) break p000e0081;
 		ACCclear(0);
 		ACCgoto(31);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0082:
	{
 		if (skipdoall('p000e0082')) break p000e0082;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0082;
 		}
		if (!CNDat(37)) break p000e0082;
		if (!CNDpresent(14)) break p000e0082;
		if (!CNDnotcarr(14)) break p000e0082;
 		ACCdestroy(14);
 		ACCclear(131);
 		ACCclear(114);
		{}

	}

	//  _
	p000e0083:
	{
 		if (skipdoall('p000e0083')) break p000e0083;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0083;
 		}
		if (!CNDat(37)) break p000e0083;
		if (!CNDzero(115)) break p000e0083;
 		ACCclear(160);
 		ACCgoto(38);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0084:
	{
 		if (skipdoall('p000e0084')) break p000e0084;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0084;
 		}
		if (!CNDat(38)) break p000e0084;
		if (!CNDzero(160)) break p000e0084;
 		ACCprocess(22);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0085:
	{
 		if (skipdoall('p000e0085')) break p000e0085;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0085;
 		}
		if (!CNDat(38)) break p000e0085;
		if (!CNDnotzero(160)) break p000e0085;
 		ACCprocess(22);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0086:
	{
 		if (skipdoall('p000e0086')) break p000e0086;
 		if (in_response)
		{
			if (!CNDverb(4)) break p000e0086;
 		}
		if (!CNDat(40)) break p000e0086;
		if (!CNDzero(115)) break p000e0086;
 		ACCset(160);
 		ACCgoto(38);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// SAL _
	p000e0087:
	{
 		if (skipdoall('p000e0087')) break p000e0087;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0087;
 		}
		if (!CNDat(31)) break p000e0087;
		if (!CNDnotzero(152)) break p000e0087;
 		ACCclear(151);
 		ACCcls();
 		ACCwriteln(32);
 		ACCwriteln(33);
 		ACCwriteln(34);
 		ACCwriteln(35);
 		ACCwriteln(36);
 		ACCcommand(0);
 		ACCtime(0,0);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SAL _
	p000e0088:
	{
 		if (skipdoall('p000e0088')) break p000e0088;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0088;
 		}
		if (!CNDat(31)) break p000e0088;
 		ACCwriteln(37);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SAL _
	p000e0089:
	{
 		if (skipdoall('p000e0089')) break p000e0089;
 		if (in_response)
		{
			if (!CNDverb(13)) break p000e0089;
 		}
		if (!CNDat(105)) break p000e0089;
 		ACCclear(0);
 		ACCgoto(101);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0090:
	{
 		if (skipdoall('p000e0090')) break p000e0090;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0090;
 		}
		if (!CNDat(101)) break p000e0090;
		if (!CNDeq(1,1)) break p000e0090;
		if (!CNDcarried(24)) break p000e0090;
 		ACCgoto(100);
 		ACCprocess(26);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0091:
	{
 		if (skipdoall('p000e0091')) break p000e0091;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0091;
 		}
		if (!CNDat(101)) break p000e0091;
		if (!CNDzero(1)) break p000e0091;
 		ACCgoto(100);
 		ACCprocess(26);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0092:
	{
 		if (skipdoall('p000e0092')) break p000e0092;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0092;
 		}
		if (!CNDat(101)) break p000e0092;
 		ACCwriteln(38);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0093:
	{
 		if (skipdoall('p000e0093')) break p000e0093;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0093;
 		}
		if (!CNDat(31)) break p000e0093;
		if (!CNDcarried(0)) break p000e0093;
		if (!CNDozero(0,20)) break p000e0093;
 		ACCset(0);
		{}

	}

	//  _
	p000e0094:
	{
 		if (skipdoall('p000e0094')) break p000e0094;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0094;
 		}
		if (!CNDat(31)) break p000e0094;
		if (!CNDnotcarr(0)) break p000e0094;
 		ACCset(0);
		{}

	}

	//  _
	p000e0095:
	{
 		if (skipdoall('p000e0095')) break p000e0095;
 		if (in_response)
		{
			if (!CNDverb(5)) break p000e0095;
 		}
		if (!CNDat(31)) break p000e0095;
 		ACCgoto(32);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0096:
	{
 		if (skipdoall('p000e0096')) break p000e0096;
 		if (in_response)
		{
			if (!CNDverb(6)) break p000e0096;
 		}
		if (!CNDat(102)) break p000e0096;
 		ACClet(33,125);
 		ACClet(34,164);
		{}

	}

	//  _
	p000e0097:
	{
 		if (skipdoall('p000e0097')) break p000e0097;
 		if (in_response)
		{
			if (!CNDverb(9)) break p000e0097;
 		}
		if (!CNDat(66)) break p000e0097;
		if (!CNDgt(116,8)) break p000e0097;
 		ACCgoto(81);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0098:
	{
 		if (skipdoall('p000e0098')) break p000e0098;
 		if (in_response)
		{
			if (!CNDverb(9)) break p000e0098;
 		}
		if (!CNDat(66)) break p000e0098;
 		ACCwriteln(39);
 		ACClet(116,9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0099:
	{
 		if (skipdoall('p000e0099')) break p000e0099;
 		if (in_response)
		{
			if (!CNDverb(9)) break p000e0099;
 		}
		if (!CNDat(103)) break p000e0099;
 		ACClet(33,125);
 		ACClet(34,164);
		{}

	}

	// ASCENDER _
	p000e0100:
	{
 		if (skipdoall('p000e0100')) break p000e0100;
 		if (in_response)
		{
			if (!CNDverb(10)) break p000e0100;
 		}
		if (!CNDat(37)) break p000e0100;
		if (!CNDpresent(14)) break p000e0100;
		if (!CNDnotcarr(14)) break p000e0100;
 		ACCdestroy(14);
 		ACCclear(131);
 		ACCclear(114);
 		ACCnotdone();
		break pro000_restart;
		{}

	}

	// BAJA _
	p000e0101:
	{
 		if (skipdoall('p000e0101')) break p000e0101;
 		if (in_response)
		{
			if (!CNDverb(11)) break p000e0101;
 		}
		if (!CNDat(37)) break p000e0101;
		if (!CNDpresent(14)) break p000e0101;
		if (!CNDnotcarr(14)) break p000e0101;
 		ACCdestroy(14);
 		ACCclear(131);
 		ACCclear(114);
 		ACCnotdone();
		break pro000_restart;
		{}

	}

	// ESCALA BROTE
	p000e0102:
	{
 		if (skipdoall('p000e0102')) break p000e0102;
 		if (in_response)
		{
			if (!CNDverb(57)) break p000e0102;
			if (!CNDnoun1(132)) break p000e0102;
 		}
		if (!CNDat(92)) break p000e0102;
		if (!CNDgt(120,1)) break p000e0102;
 		ACCgoto(106);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ESCALA BROTE
	p000e0103:
	{
 		if (skipdoall('p000e0103')) break p000e0103;
 		if (in_response)
		{
			if (!CNDverb(57)) break p000e0103;
			if (!CNDnoun1(132)) break p000e0103;
 		}
		if (!CNDat(92)) break p000e0103;
 		ACCwriteln(40);
 		ACCclear(120);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0104:
	{
 		if (skipdoall('p000e0104')) break p000e0104;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0104;
 		}
		if (!CNDat(101)) break p000e0104;
 		ACCset(0);
 		ACCgoto(105);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0105:
	{
 		if (skipdoall('p000e0105')) break p000e0105;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0105;
 		}
		if (!CNDat(106)) break p000e0105;
		if (!CNDeq(124,255)) break p000e0105;
 		ACCgoto(118);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0106:
	{
 		if (skipdoall('p000e0106')) break p000e0106;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0106;
 		}
		if (!CNDat(106)) break p000e0106;
		if (!CNDeq(124,1)) break p000e0106;
 		ACCwriteln(41);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0107:
	{
 		if (skipdoall('p000e0107')) break p000e0107;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0107;
 		}
		if (!CNDat(106)) break p000e0107;
 		ACCwriteln(42);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0108:
	{
 		if (skipdoall('p000e0108')) break p000e0108;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0108;
 		}
		if (!CNDat(116)) break p000e0108;
		if (!CNDnotzero(123)) break p000e0108;
 		ACCgoto(117);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0109:
	{
 		if (skipdoall('p000e0109')) break p000e0109;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0109;
 		}
		if (!CNDat(116)) break p000e0109;
 		ACCwriteln(43);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0110:
	{
 		if (skipdoall('p000e0110')) break p000e0110;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0110;
 		}
		if (!CNDat(66)) break p000e0110;
		if (!CNDgt(116,8)) break p000e0110;
 		ACCgoto(67);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0111:
	{
 		if (skipdoall('p000e0111')) break p000e0111;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0111;
 		}
		if (!CNDat(66)) break p000e0111;
 		ACCwriteln(44);
 		ACClet(116,9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0112:
	{
 		if (skipdoall('p000e0112')) break p000e0112;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0112;
 		}
		if (!CNDat(82)) break p000e0112;
		if (!CNDeq(119,255)) break p000e0112;
 		ACCgoto(83);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0113:
	{
 		if (skipdoall('p000e0113')) break p000e0113;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0113;
 		}
		if (!CNDat(82)) break p000e0113;
 		ACCwriteln(45);
 		ACCdone();
		break pro000_restart;
		{}

	}

	//  _
	p000e0114:
	{
 		if (skipdoall('p000e0114')) break p000e0114;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0114;
 		}
		if (!CNDat(101)) break p000e0114;
 		ACCgoto(105);
 		ACCprocess(26);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	//  _
	p000e0115:
	{
 		if (skipdoall('p000e0115')) break p000e0115;
 		if (in_response)
		{
			if (!CNDverb(2)) break p000e0115;
 		}
		if (!CNDat(102)) break p000e0115;
 		ACClet(33,125);
 		ACClet(34,164);
		{}

	}

	// ESCUCHA _
	p000e0116:
	{
 		if (skipdoall('p000e0116')) break p000e0116;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0116;
 		}
		if (!CNDat(19)) break p000e0116;
 		ACCwriteln(46);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUCHA _
	p000e0117:
	{
 		if (skipdoall('p000e0117')) break p000e0117;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0117;
 		}
		if (!CNDat(68)) break p000e0117;
 		ACCwriteln(47);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUCHA _
	p000e0118:
	{
 		if (skipdoall('p000e0118')) break p000e0118;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0118;
 		}
 		ACCwriteln(48);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AYUDA _
	p000e0119:
	{
 		if (skipdoall('p000e0119')) break p000e0119;
 		if (in_response)
		{
			if (!CNDverb(34)) break p000e0119;
 		}
		if (!CNDatgt(30)) break p000e0119;
 		ACCprocess(24);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AYUDA _
	p000e0120:
	{
 		if (skipdoall('p000e0120')) break p000e0120;
 		if (in_response)
		{
			if (!CNDverb(34)) break p000e0120;
 		}
 		ACCprocess(3);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE SERPIENTE
	p000e0121:
	{
 		if (skipdoall('p000e0121')) break p000e0121;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0121;
			if (!CNDnoun1(166)) break p000e0121;
 		}
		if (!CNDat(66)) break p000e0121;
		if (!CNDlt(116,9)) break p000e0121;
 		ACCwriteln(49);
 		ACCanykey();
 		function anykey00001() 
		{
 		ACCclear(0);
 		ACCgoto(120);
 		ACCdesc();
		return;
		}
 		function anykey00000() 
		{
 		ACCwriteln(50);
 		ACCanykey();
 		waitKey(anykey00001);
		}
 		waitKey(anykey00000);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ASUST BICHO
	p000e0122:
	{
 		if (skipdoall('p000e0122')) break p000e0122;
 		if (in_response)
		{
			if (!CNDverb(117)) break p000e0122;
			if (!CNDnoun1(130)) break p000e0122;
 		}
		if (!CNDat(82)) break p000e0122;
		if (!CNDlt(119,255)) break p000e0122;
 		ACClet(33,46);
		{}

	}

	// AGREDE BICHO
	p000e0123:
	{
 		if (skipdoall('p000e0123')) break p000e0123;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0123;
			if (!CNDnoun1(130)) break p000e0123;
 		}
		if (!CNDat(82)) break p000e0123;
		if (!CNDlt(119,255)) break p000e0123;
 		ACCset(119);
 		ACCwriteln(51);
 		ACCplace(19,82);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE ENANO
	p000e0124:
	{
 		if (skipdoall('p000e0124')) break p000e0124;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0124;
			if (!CNDnoun1(68)) break p000e0124;
 		}
		if (!CNDeq(126,2)) break p000e0124;
 		ACCwriteln(52);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE TROLL
	p000e0125:
	{
 		if (skipdoall('p000e0125')) break p000e0125;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0125;
			if (!CNDnoun1(169)) break p000e0125;
 		}
		if (!CNDatgt(101)) break p000e0125;
		if (!CNDatlt(104)) break p000e0125;
		if (!CNDzero(121)) break p000e0125;
 		ACCwriteln(53);
 		ACCprocess(22);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0126:
	{
 		if (skipdoall('p000e0126')) break p000e0126;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0126;
 		}
 		ACCwriteln(54);
 		ACCnotdone();
		break pro000_restart;
		{}

	}

	// EMPUJA ENANO
	p000e0127:
	{
 		if (skipdoall('p000e0127')) break p000e0127;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0127;
			if (!CNDnoun1(68)) break p000e0127;
 		}
		if (!CNDat(12)) break p000e0127;
		if (!CNDlt(102,255)) break p000e0127;
 		ACCset(102);
 		ACCwriteln(55);
 		ACCpause(100);
 		function anykey00002() 
		{
 		ACCwriteln(56);
 		ACClet(5,4);
 		ACCdone();
		return;
		}
 		waitKey(anykey00002);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ABRE BARRO
	p000e0128:
	{
 		if (skipdoall('p000e0128')) break p000e0128;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0128;
			if (!CNDnoun1(90)) break p000e0128;
 		}
		if (!CNDpresent(4)) break p000e0128;
		if (!CNDnotcarr(4)) break p000e0128;
 		ACCget(4);
		if (!success) break pro000_restart;
		{}

	}

	// ABRE BARRO
	p000e0129:
	{
 		if (skipdoall('p000e0129')) break p000e0129;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0129;
			if (!CNDnoun1(90)) break p000e0129;
 		}
		if (!CNDeq(44,255)) break p000e0129;
 		ACClet(43,9);
 		ACClet(44,54);
		{}

	}

	// ABRE BARRO
	p000e0130:
	{
 		if (skipdoall('p000e0130')) break p000e0130;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0130;
			if (!CNDnoun1(90)) break p000e0130;
 		}
		if (!CNDprep(9)) break p000e0130;
		if (!CNDnoun2(54)) break p000e0130;
		if (!CNDat(26)) break p000e0130;
		if (!CNDcarried(4)) break p000e0130;
		if (!CNDzero(107)) break p000e0130;
 		ACClet(107,1);
 		ACCwriteln(57);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE BARRO
	p000e0131:
	{
 		if (skipdoall('p000e0131')) break p000e0131;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0131;
			if (!CNDnoun1(90)) break p000e0131;
 		}
		if (!CNDnotcarr(4)) break p000e0131;
 		ACCwriteln(58);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE PUERT
	p000e0132:
	{
 		if (skipdoall('p000e0132')) break p000e0132;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0132;
			if (!CNDnoun1(89)) break p000e0132;
 		}
		if (!CNDprep(9)) break p000e0132;
		if (!CNDnoun2(54)) break p000e0132;
		if (!CNDat(26)) break p000e0132;
		if (!CNDcarried(4)) break p000e0132;
		if (!CNDzero(107)) break p000e0132;
 		ACClet(107,1);
 		ACCwrite(59);
 		ACCwriteln(60);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE PUERT
	p000e0133:
	{
 		if (skipdoall('p000e0133')) break p000e0133;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0133;
			if (!CNDnoun1(89)) break p000e0133;
 		}
		if (!CNDat(26)) break p000e0133;
		if (!CNDeq(107,2)) break p000e0133;
 		ACClet(107,3);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ABRE PUERT
	p000e0134:
	{
 		if (skipdoall('p000e0134')) break p000e0134;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0134;
			if (!CNDnoun1(89)) break p000e0134;
 		}
		if (!CNDat(26)) break p000e0134;
 		ACCwriteln(61);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA PUERT
	p000e0135:
	{
 		if (skipdoall('p000e0135')) break p000e0135;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0135;
			if (!CNDnoun1(89)) break p000e0135;
 		}
		if (!CNDat(26)) break p000e0135;
		if (!CNDeq(107,2)) break p000e0135;
 		ACClet(107,3);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// EMPUJA PUERT
	p000e0136:
	{
 		if (skipdoall('p000e0136')) break p000e0136;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0136;
			if (!CNDnoun1(89)) break p000e0136;
 		}
		if (!CNDat(26)) break p000e0136;
 		ACCwriteln(62);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA BARRO
	p000e0137:
	{
 		if (skipdoall('p000e0137')) break p000e0137;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0137;
			if (!CNDnoun1(90)) break p000e0137;
 		}
		if (!CNDat(26)) break p000e0137;
		if (!CNDcarried(4)) break p000e0137;
		if (!CNDeq(107,0)) break p000e0137;
 		ACClet(107,1);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ABRE BARRO
	p000e0138:
	{
 		if (skipdoall('p000e0138')) break p000e0138;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0138;
			if (!CNDnoun1(90)) break p000e0138;
 		}
		if (!CNDat(26)) break p000e0138;
		if (!CNDcarried(4)) break p000e0138;
		if (!CNDnotzero(107)) break p000e0138;
 		ACCwriteln(63);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR PUERT
	p000e0139:
	{
 		if (skipdoall('p000e0139')) break p000e0139;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0139;
			if (!CNDnoun1(89)) break p000e0139;
 		}
		if (!CNDat(26)) break p000e0139;
		if (!CNDeq(107,3)) break p000e0139;
 		ACClet(107,2);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// CERRAR BARRO
	p000e0140:
	{
 		if (skipdoall('p000e0140')) break p000e0140;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0140;
			if (!CNDnoun1(90)) break p000e0140;
 		}
		if (!CNDat(26)) break p000e0140;
		if (!CNDeq(107,1)) break p000e0140;
 		ACClet(107,0);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// GOLPEA ENANO
	p000e0141:
	{
 		if (skipdoall('p000e0141')) break p000e0141;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0141;
			if (!CNDnoun1(68)) break p000e0141;
 		}
		if (!CNDat(12)) break p000e0141;
		if (!CNDlt(102,255)) break p000e0141;
 		ACCprocess(11);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR MENSAJE
	p000e0142:
	{
 		if (skipdoall('p000e0142')) break p000e0142;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0142;
			if (!CNDnoun1(124)) break p000e0142;
 		}
 		ACClet(34,93);
		{}

	}

	// AGARR CARTE
	p000e0143:
	{
 		if (skipdoall('p000e0143')) break p000e0143;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0143;
			if (!CNDnoun1(93)) break p000e0143;
 		}
		if (!CNDat(18)) break p000e0143;
 		ACCwriteln(64);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR MONED
	p000e0144:
	{
 		if (skipdoall('p000e0144')) break p000e0144;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0144;
			if (!CNDnoun1(51)) break p000e0144;
 		}
		if (!CNDat(11)) break p000e0144;
		if (!CNDpresent(1)) break p000e0144;
		if (!CNDislight()) break p000e0144;
 		ACCget(1);
		if (!success) break pro000_restart;
 		ACCset(106);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR MONED
	p000e0145:
	{
 		if (skipdoall('p000e0145')) break p000e0145;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0145;
			if (!CNDnoun1(51)) break p000e0145;
 		}
		if (!CNDat(11)) break p000e0145;
		if (!CNDislight()) break p000e0145;
		if (!CNDabsent(1)) break p000e0145;
 		ACCwrite(65);
 		ACCpause(100);
 		function anykey00003() 
		{
 		ACCwriteln(66);
 		ACCdone();
		return;
		}
 		waitKey(anykey00003);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// AGARR LLAVE
	p000e0146:
	{
 		if (skipdoall('p000e0146')) break p000e0146;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0146;
			if (!CNDnoun1(54)) break p000e0146;
 		}
		if (!CNDat(17)) break p000e0146;
		if (!CNDeq(103,1)) break p000e0146;
 		ACCwriteln(67);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR ENANO
	p000e0147:
	{
 		if (skipdoall('p000e0147')) break p000e0147;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0147;
			if (!CNDnoun1(68)) break p000e0147;
 		}
		if (!CNDat(12)) break p000e0147;
		if (!CNDlt(102,255)) break p000e0147;
 		ACCprocess(11);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE BARRO
	p000e0148:
	{
 		if (skipdoall('p000e0148')) break p000e0148;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0148;
			if (!CNDnoun1(90)) break p000e0148;
 		}
 		ACClet(33,20);
		{}

	}

	// DESVESTIR BARRO
	p000e0149:
	{
 		if (skipdoall('p000e0149')) break p000e0149;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0149;
			if (!CNDnoun1(90)) break p000e0149;
 		}
 		ACClet(33,20);
		{}

	}

	// AGARR BARRO
	p000e0150:
	{
 		if (skipdoall('p000e0150')) break p000e0150;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0150;
			if (!CNDnoun1(90)) break p000e0150;
 		}
		if (!CNDat(26)) break p000e0150;
		if (!CNDeq(107,1)) break p000e0150;
 		ACClet(107,2);
 		ACCwriteln(68);
 		ACCanykey();
 		function anykey00004() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00004);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// AGARR BARRO
	p000e0151:
	{
 		if (skipdoall('p000e0151')) break p000e0151;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0151;
			if (!CNDnoun1(90)) break p000e0151;
 		}
		if (!CNDat(26)) break p000e0151;
 		ACCwriteln(69);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA BARRO
	p000e0152:
	{
 		if (skipdoall('p000e0152')) break p000e0152;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0152;
			if (!CNDnoun1(90)) break p000e0152;
 		}
		if (!CNDat(26)) break p000e0152;
		if (!CNDeq(107,1)) break p000e0152;
 		ACCwriteln(70);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA BARRO
	p000e0153:
	{
 		if (skipdoall('p000e0153')) break p000e0153;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0153;
			if (!CNDnoun1(90)) break p000e0153;
 		}
		if (!CNDat(26)) break p000e0153;
		if (!CNDeq(107,2)) break p000e0153;
 		ACCwriteln(71);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA BARRO
	p000e0154:
	{
 		if (skipdoall('p000e0154')) break p000e0154;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0154;
			if (!CNDnoun1(90)) break p000e0154;
 		}
		if (!CNDat(26)) break p000e0154;
 		ACCwriteln(72);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0155:
	{
 		if (skipdoall('p000e0155')) break p000e0155;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0155;
 		}
		if (!CNDat(18)) break p000e0155;
 		ACCwriteln(73);
 		ACCwriteln(74);
 		ACCputo(10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0156:
	{
 		if (skipdoall('p000e0156')) break p000e0156;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0156;
 		}
		if (!CNDat(17)) break p000e0156;
		if (!CNDlt(51,255)) break p000e0156;
		if (!CNDcarried(getFlag(51))) break p000e0156;
 		ACCwriteln(75);
 		ACCputo(16);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0157:
	{
 		if (skipdoall('p000e0157')) break p000e0157;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0157;
 		}
		if (!CNDat(12)) break p000e0157;
 		ACCprocess(6);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0158:
	{
 		if (skipdoall('p000e0158')) break p000e0158;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0158;
 		}
		if (!CNDat(9)) break p000e0158;
 		ACCprocess(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0159:
	{
 		if (skipdoall('p000e0159')) break p000e0159;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0159;
 		}
		if (!CNDat(28)) break p000e0159;
 		ACCprocess(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0160:
	{
 		if (skipdoall('p000e0160')) break p000e0160;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0160;
 		}
		if (!CNDat(23)) break p000e0160;
 		ACCprocess(7);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0161:
	{
 		if (skipdoall('p000e0161')) break p000e0161;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0161;
 		}
		if (!CNDat(17)) break p000e0161;
 		ACCprocess(8);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0162:
	{
 		if (skipdoall('p000e0162')) break p000e0162;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0162;
 		}
		if (!CNDat(118)) break p000e0162;
 		ACCwriteln(76);
 		ACCclear(0);
 		ACCgoto(120);
 		ACCanykey();
 		function anykey00005() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00005);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0163:
	{
 		if (skipdoall('p000e0163')) break p000e0163;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0163;
 		}
		if (!CNDat(84)) break p000e0163;
 		ACCwriteln(77);
 		ACCclear(0);
 		ACCgoto(120);
 		ACCanykey();
 		function anykey00006() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00006);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ACTIVA LAMPA
	p000e0164:
	{
 		if (skipdoall('p000e0164')) break p000e0164;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0164;
			if (!CNDnoun1(50)) break p000e0164;
 		}
		if (!CNDnotcarr(0)) break p000e0164;
 		ACCwriteln(78);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA LAMPA
	p000e0165:
	{
 		if (skipdoall('p000e0165')) break p000e0165;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0165;
			if (!CNDnoun1(50)) break p000e0165;
 		}
		if (!CNDzero(105)) break p000e0165;
 		ACCwriteln(79);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA LAMPA
	p000e0166:
	{
 		if (skipdoall('p000e0166')) break p000e0166;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0166;
			if (!CNDnoun1(50)) break p000e0166;
 		}
		if (!CNDlt(8,3)) break p000e0166;
		if (!CNDnotzero(8)) break p000e0166;
 		ACCwriteln(80);
 		ACCnotdone();
		break pro000_restart;
		{}

	}

	// ACTIVA LAMPA
	p000e0167:
	{
 		if (skipdoall('p000e0167')) break p000e0167;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0167;
			if (!CNDnoun1(50)) break p000e0167;
 		}
		if (!CNDonotzero(0,20)) break p000e0167;
 		ACCwriteln(81);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA LAMPA
	p000e0168:
	{
 		if (skipdoall('p000e0168')) break p000e0168;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0168;
			if (!CNDnoun1(50)) break p000e0168;
 		}
		if (!CNDat(11)) break p000e0168;
 		ACCoset(0,20);
 		ACCwriteln(82);
 		ACCclear(0);
 		ACCpause(50);
 		function anykey00007() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00007);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ACTIVA LAMPA
	p000e0169:
	{
 		if (skipdoall('p000e0169')) break p000e0169;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0169;
			if (!CNDnoun1(50)) break p000e0169;
 		}
		if (!CNDnotat(119)) break p000e0169;
		if (!CNDnotat(101)) break p000e0169;
		if (!CNDatgt(31)) break p000e0169;
 		ACCoset(0,20);
 		ACCwriteln(83);
 		ACCclear(0);
 		ACCpause(50);
 		function anykey00008() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00008);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ACTIVA LAMPA
	p000e0170:
	{
 		if (skipdoall('p000e0170')) break p000e0170;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0170;
			if (!CNDnoun1(50)) break p000e0170;
 		}
 		ACCoset(0,20);
 		ACCclear(0);
 		ACCwriteln(84);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA LAMPA
	p000e0171:
	{
 		if (skipdoall('p000e0171')) break p000e0171;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0171;
			if (!CNDnoun1(50)) break p000e0171;
 		}
		if (!CNDnotcarr(0)) break p000e0171;
 		ACCwriteln(85);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA LAMPA
	p000e0172:
	{
 		if (skipdoall('p000e0172')) break p000e0172;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0172;
			if (!CNDnoun1(50)) break p000e0172;
 		}
		if (!CNDozero(0,20)) break p000e0172;
 		ACCwriteln(86);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA LAMPA
	p000e0173:
	{
 		if (skipdoall('p000e0173')) break p000e0173;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0173;
			if (!CNDnoun1(50)) break p000e0173;
 		}
		if (!CNDat(11)) break p000e0173;
 		ACCoclear(0,20);
 		ACCset(0);
 		ACCwriteln(87);
 		ACCpause(50);
 		function anykey00009() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00009);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// DESACTIVA LAMPA
	p000e0174:
	{
 		if (skipdoall('p000e0174')) break p000e0174;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0174;
			if (!CNDnoun1(50)) break p000e0174;
 		}
		if (!CNDnotat(119)) break p000e0174;
		if (!CNDnotat(101)) break p000e0174;
		if (!CNDatgt(31)) break p000e0174;
 		ACCoclear(0,20);
 		ACCset(0);
 		ACCwriteln(88);
 		ACCpause(50);
 		function anykey00010() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00010);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// DESACTIVA LAMPA
	p000e0175:
	{
 		if (skipdoall('p000e0175')) break p000e0175;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0175;
			if (!CNDnoun1(50)) break p000e0175;
 		}
 		ACCoclear(0,20);
 		ACCwriteln(89);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESPERA _
	p000e0176:
	{
 		if (skipdoall('p000e0176')) break p000e0176;
 		if (in_response)
		{
			if (!CNDverb(43)) break p000e0176;
 		}
		if (!CNDatgt(31)) break p000e0176;
 		ACCwriteln(90);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESPERA _
	p000e0177:
	{
 		if (skipdoall('p000e0177')) break p000e0177;
 		if (in_response)
		{
			if (!CNDverb(43)) break p000e0177;
 		}
 		ACCmessage(36);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX CARTE
	p000e0178:
	{
 		if (skipdoall('p000e0178')) break p000e0178;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0178;
			if (!CNDnoun1(93)) break p000e0178;
 		}
 		ACClet(33,109);
		{}

	}

	// LEE CARTE
	p000e0179:
	{
 		if (skipdoall('p000e0179')) break p000e0179;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0179;
			if (!CNDnoun1(93)) break p000e0179;
 		}
		if (!CNDat(18)) break p000e0179;
 		ACClet(34,124);
		{}

	}

	// EX PARED
	p000e0180:
	{
 		if (skipdoall('p000e0180')) break p000e0180;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0180;
			if (!CNDnoun1(70)) break p000e0180;
 		}
		if (!CNDatgt(30)) break p000e0180;
 		ACClet(33,109);
		{}

	}

	// LEE PARED
	p000e0181:
	{
 		if (skipdoall('p000e0181')) break p000e0181;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0181;
			if (!CNDnoun1(70)) break p000e0181;
 		}
		if (!CNDatgt(30)) break p000e0181;
 		ACClet(34,124);
		{}

	}

	// LEE MENSAJE
	p000e0182:
	{
 		if (skipdoall('p000e0182')) break p000e0182;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0182;
			if (!CNDnoun1(124)) break p000e0182;
 		}
 		ACClet(34,124);
		{}

	}

	// LEE GRABADO
	p000e0183:
	{
 		if (skipdoall('p000e0183')) break p000e0183;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0183;
			if (!CNDnoun1(170)) break p000e0183;
 		}
		if (!CNDat(68)) break p000e0183;
 		ACClet(34,124);
		{}

	}

	// LEE PILAR
	p000e0184:
	{
 		if (skipdoall('p000e0184')) break p000e0184;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0184;
			if (!CNDnoun1(161)) break p000e0184;
 		}
		if (!CNDat(68)) break p000e0184;
 		ACClet(34,124);
		{}

	}

	// LEE MENSAJE
	p000e0185:
	{
 		if (skipdoall('p000e0185')) break p000e0185;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0185;
			if (!CNDnoun1(124)) break p000e0185;
 		}
		if (!CNDatgt(30)) break p000e0185;
 		ACCprocess(25);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE MENSAJE
	p000e0186:
	{
 		if (skipdoall('p000e0186')) break p000e0186;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0186;
			if (!CNDnoun1(124)) break p000e0186;
 		}
 		ACCprocess(4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0187:
	{
 		if (skipdoall('p000e0187')) break p000e0187;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0187;
 		}
		if (!CNDeq(34,255)) break p000e0187;
		if (!CNDat(18)) break p000e0187;
 		ACClet(34,124);
 		ACCprocess(4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0188:
	{
 		if (skipdoall('p000e0188')) break p000e0188;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0188;
 		}
		if (!CNDat(18)) break p000e0188;
 		ACCwriteln(91);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0189:
	{
 		if (skipdoall('p000e0189')) break p000e0189;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0189;
 		}
		if (!CNDeq(34,255)) break p000e0189;
		if (!CNDbnotzero(12,1)) break p000e0189;
 		ACCwriteln(92);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0190:
	{
 		if (skipdoall('p000e0190')) break p000e0190;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0190;
 		}
		if (!CNDeq(34,255)) break p000e0190;
		if (!CNDbzero(12,1)) break p000e0190;
 		ACCwriteln(93);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0191:
	{
 		if (skipdoall('p000e0191')) break p000e0191;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0191;
 		}
		if (!CNDnoteq(34,255)) break p000e0191;
		if (!CNDeq(51,255)) break p000e0191;
 		ACCwriteln(94);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0192:
	{
 		if (skipdoall('p000e0192')) break p000e0192;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0192;
 		}
		if (!CNDnoteq(51,255)) break p000e0192;
		if (!CNDpresent(getFlag(51))) break p000e0192;
 		ACCwriteln(95);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0193:
	{
 		if (skipdoall('p000e0193')) break p000e0193;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0193;
 		}
		if (!CNDnoteq(51,255)) break p000e0193;
		if (!CNDabsent(getFlag(51))) break p000e0193;
 		ACCwriteln(96);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0194:
	{
 		if (skipdoall('p000e0194')) break p000e0194;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0194;
 		}
		if (!CNDatgt(30)) break p000e0194;
 		ACCprocess(25);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EX _
	p000e0195:
	{
 		if (skipdoall('p000e0195')) break p000e0195;
 		if (in_response)
		{
			if (!CNDverb(30)) break p000e0195;
 		}
 		ACCprocess(4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE AIRE
	p000e0196:
	{
 		if (skipdoall('p000e0196')) break p000e0196;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0196;
			if (!CNDnoun1(60)) break p000e0196;
 		}
		if (!CNDat(4)) break p000e0196;
 		ACCwriteln(97);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE AIRE
	p000e0197:
	{
 		if (skipdoall('p000e0197')) break p000e0197;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0197;
			if (!CNDnoun1(60)) break p000e0197;
 		}
		if (!CNDat(5)) break p000e0197;
 		ACCwriteln(98);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE AIRE
	p000e0198:
	{
 		if (skipdoall('p000e0198')) break p000e0198;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0198;
			if (!CNDnoun1(60)) break p000e0198;
 		}
		if (!CNDat(5)) break p000e0198;
 		ACCwriteln(99);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE AIRE
	p000e0199:
	{
 		if (skipdoall('p000e0199')) break p000e0199;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0199;
			if (!CNDnoun1(60)) break p000e0199;
 		}
		if (!CNDat(6)) break p000e0199;
 		ACCwriteln(100);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA BOTEL
	p000e0200:
	{
 		if (skipdoall('p000e0200')) break p000e0200;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0200;
			if (!CNDnoun1(53)) break p000e0200;
 		}
		if (!CNDcarried(3)) break p000e0200;
		if (!CNDozero(3,22)) break p000e0200;
 		ACCwriteln(101);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0201:
	{
 		if (skipdoall('p000e0201')) break p000e0201;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0201;
 		}
		if (!CNDcarried(3)) break p000e0201;
		if (!CNDonotzero(3,22)) break p000e0201;
		if (!CNDeq(34,94)) break p000e0201;
 		ACClet(34,53);
		{}

	}

	// VACIA BOTEL
	p000e0202:
	{
 		if (skipdoall('p000e0202')) break p000e0202;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0202;
			if (!CNDnoun1(53)) break p000e0202;
 		}
		if (!CNDcarried(3)) break p000e0202;
		if (!CNDonotzero(3,22)) break p000e0202;
		if (!CNDnotat(92)) break p000e0202;
 		ACCoclear(3,22);
 		ACCok();
		break pro000_restart;
		{}

	}

	// VACIA BOTEL
	p000e0203:
	{
 		if (skipdoall('p000e0203')) break p000e0203;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0203;
			if (!CNDnoun1(53)) break p000e0203;
 		}
		if (!CNDcarried(9)) break p000e0203;
		if (!CNDnotat(92)) break p000e0203;
		if (!CNDnotat(106)) break p000e0203;
 		ACCswap(9,3);
 		ACCoclear(3,22);
 		ACCwriteln(102);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA BOTEL
	p000e0204:
	{
 		if (skipdoall('p000e0204')) break p000e0204;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0204;
			if (!CNDnoun1(53)) break p000e0204;
 		}
		if (!CNDat(92)) break p000e0204;
		if (!CNDnotcarr(3)) break p000e0204;
		if (!CNDnotcarr(9)) break p000e0204;
 		ACCwriteln(103);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA BOTEL
	p000e0205:
	{
 		if (skipdoall('p000e0205')) break p000e0205;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0205;
			if (!CNDnoun1(53)) break p000e0205;
 		}
		if (!CNDat(92)) break p000e0205;
 		ACClet(33,126);
 		ACClet(34,132);
		{}

	}

	// VACIA BOTEL
	p000e0206:
	{
 		if (skipdoall('p000e0206')) break p000e0206;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0206;
			if (!CNDnoun1(53)) break p000e0206;
 		}
		if (!CNDat(106)) break p000e0206;
 		ACClet(33,127);
 		ACClet(34,89);
		{}

	}

	// VACIA BOTEL
	p000e0207:
	{
 		if (skipdoall('p000e0207')) break p000e0207;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0207;
			if (!CNDnoun1(53)) break p000e0207;
 		}
		if (!CNDcarried(3)) break p000e0207;
 		ACCoclear(3,22);
 		ACCwriteln(104);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0208:
	{
 		if (skipdoall('p000e0208')) break p000e0208;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0208;
			if (!CNDnoun1(53)) break p000e0208;
 		}
		if (!CNDcarried(9)) break p000e0208;
 		ACCwriteln(105);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0209:
	{
 		if (skipdoall('p000e0209')) break p000e0209;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0209;
			if (!CNDnoun1(53)) break p000e0209;
 		}
		if (!CNDcarried(3)) break p000e0209;
		if (!CNDonotzero(3,22)) break p000e0209;
 		ACCwriteln(106);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0210:
	{
 		if (skipdoall('p000e0210')) break p000e0210;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0210;
			if (!CNDnoun1(53)) break p000e0210;
 		}
		if (!CNDat(3)) break p000e0210;
		if (!CNDcarried(3)) break p000e0210;
 		ACCoset(3,22);
 		ACCwriteln(107);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0211:
	{
 		if (skipdoall('p000e0211')) break p000e0211;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0211;
			if (!CNDnoun1(53)) break p000e0211;
 		}
		if (!CNDat(19)) break p000e0211;
		if (!CNDcarried(3)) break p000e0211;
 		ACCoset(3,22);
 		ACCwriteln(108);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0212:
	{
 		if (skipdoall('p000e0212')) break p000e0212;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0212;
			if (!CNDnoun1(53)) break p000e0212;
 		}
		if (!CNDat(24)) break p000e0212;
		if (!CNDcarried(3)) break p000e0212;
 		ACCoset(3,22);
 		ACCwriteln(109);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0213:
	{
 		if (skipdoall('p000e0213')) break p000e0213;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0213;
			if (!CNDnoun1(53)) break p000e0213;
 		}
		if (!CNDat(25)) break p000e0213;
		if (!CNDcarried(3)) break p000e0213;
 		ACCoset(3,22);
 		ACCwriteln(110);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0214:
	{
 		if (skipdoall('p000e0214')) break p000e0214;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0214;
			if (!CNDnoun1(53)) break p000e0214;
 		}
		if (!CNDat(118)) break p000e0214;
		if (!CNDcarried(3)) break p000e0214;
 		ACCoset(3,22);
 		ACCwriteln(111);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0215:
	{
 		if (skipdoall('p000e0215')) break p000e0215;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0215;
			if (!CNDnoun1(53)) break p000e0215;
 		}
		if (!CNDat(69)) break p000e0215;
		if (!CNDcarried(3)) break p000e0215;
 		ACCoset(3,22);
 		ACCwriteln(112);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0216:
	{
 		if (skipdoall('p000e0216')) break p000e0216;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0216;
			if (!CNDnoun1(53)) break p000e0216;
 		}
		if (!CNDat(84)) break p000e0216;
		if (!CNDcarried(3)) break p000e0216;
 		ACCoset(3,22);
 		ACCwriteln(113);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0217:
	{
 		if (skipdoall('p000e0217')) break p000e0217;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0217;
			if (!CNDnoun1(53)) break p000e0217;
 		}
		if (!CNDat(93)) break p000e0217;
		if (!CNDcarried(3)) break p000e0217;
 		ACCoset(3,22);
 		ACCswap(3,9);
 		ACCwriteln(114);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA BOTEL
	p000e0218:
	{
 		if (skipdoall('p000e0218')) break p000e0218;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0218;
			if (!CNDnoun1(53)) break p000e0218;
 		}
		if (!CNDcarried(3)) break p000e0218;
 		ACCwriteln(115);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME TORTI
	p000e0219:
	{
 		if (skipdoall('p000e0219')) break p000e0219;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0219;
			if (!CNDnoun1(52)) break p000e0219;
 		}
		if (!CNDcarried(2)) break p000e0219;
 		ACCdestroy(2);
 		ACCwriteln(116);
 		ACClet(5,4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE AGUA
	p000e0220:
	{
 		if (skipdoall('p000e0220')) break p000e0220;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0220;
			if (!CNDnoun1(57)) break p000e0220;
 		}
		if (!CNDcarried(3)) break p000e0220;
 		ACCoclear(3,22);
 		ACCwriteln(117);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR ARBOL
	p000e0221:
	{
 		if (skipdoall('p000e0221')) break p000e0221;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0221;
			if (!CNDnoun1(58)) break p000e0221;
 		}
		if (!CNDat(17)) break p000e0221;
 		ACCwriteln(118);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA ARBOL
	p000e0222:
	{
 		if (skipdoall('p000e0222')) break p000e0222;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0222;
			if (!CNDnoun1(58)) break p000e0222;
 		}
		if (!CNDat(17)) break p000e0222;
 		ACClet(33,49);
		{}

	}

	// AGITA ARBOL
	p000e0223:
	{
 		if (skipdoall('p000e0223')) break p000e0223;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0223;
			if (!CNDnoun1(58)) break p000e0223;
 		}
		if (!CNDat(17)) break p000e0223;
		if (!CNDlt(103,2)) break p000e0223;
 		ACClet(51,4);
 		ACCwriteln(119);
 		ACCplace(4,16);
 		ACCset(103);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA ARBOL
	p000e0224:
	{
 		if (skipdoall('p000e0224')) break p000e0224;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0224;
			if (!CNDnoun1(58)) break p000e0224;
 		}
		if (!CNDat(17)) break p000e0224;
 		ACCwriteln(120);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON BATERIA
	p000e0225:
	{
 		if (skipdoall('p000e0225')) break p000e0225;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0225;
			if (!CNDnoun1(55)) break p000e0225;
 		}
 		ACClet(33,74);
		{}

	}

	// ECHA BATERIA
	p000e0226:
	{
 		if (skipdoall('p000e0226')) break p000e0226;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0226;
			if (!CNDnoun1(55)) break p000e0226;
 		}
		if (!CNDnotat(53)) break p000e0226;
 		ACClet(43,4);
 		ACClet(44,50);
		{}

	}

	// ECHA BATERIA
	p000e0227:
	{
 		if (skipdoall('p000e0227')) break p000e0227;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0227;
			if (!CNDnoun1(55)) break p000e0227;
 		}
		if (!CNDprep(2)) break p000e0227;
 		ACClet(43,4);
		{}

	}

	// ECHA MONED
	p000e0228:
	{
 		if (skipdoall('p000e0228')) break p000e0228;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0228;
			if (!CNDnoun1(51)) break p000e0228;
 		}
		if (!CNDat(53)) break p000e0228;
		if (!CNDnotzero(125)) break p000e0228;
		if (!CNDcarried(1)) break p000e0228;
 		ACCdestroy(1);
 		ACCclear(8);
 		ACCwriteln(121);
 		ACCwriteln(122);
 		ACCcreate(5);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA MONED
	p000e0229:
	{
 		if (skipdoall('p000e0229')) break p000e0229;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0229;
			if (!CNDnoun1(51)) break p000e0229;
 		}
		if (!CNDat(53)) break p000e0229;
		if (!CNDcarried(1)) break p000e0229;
 		ACCdestroy(1);
 		ACCset(125);
 		ACCok();
		break pro000_restart;
		{}

	}

	// ECHA BATERIA
	p000e0230:
	{
 		if (skipdoall('p000e0230')) break p000e0230;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0230;
			if (!CNDnoun1(55)) break p000e0230;
 		}
		if (!CNDnoun2(155)) break p000e0230;
		if (!CNDat(53)) break p000e0230;
		if (!CNDnotzero(125)) break p000e0230;
		if (!CNDcarried(5)) break p000e0230;
 		ACCclear(8);
 		ACCplace(5,53);
 		ACCwriteln(123);
 		ACCwriteln(124);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON BATERIA
	p000e0231:
	{
 		if (skipdoall('p000e0231')) break p000e0231;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0231;
			if (!CNDnoun1(55)) break p000e0231;
 		}
		if (!CNDnoun2(155)) break p000e0231;
		if (!CNDat(53)) break p000e0231;
		if (!CNDcarried(5)) break p000e0231;
 		ACCdestroy(5);
 		ACCset(125);
 		ACCok();
		break pro000_restart;
		{}

	}

	// PON BATERIA
	p000e0232:
	{
 		if (skipdoall('p000e0232')) break p000e0232;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0232;
			if (!CNDnoun1(55)) break p000e0232;
 		}
		if (!CNDcarried(5)) break p000e0232;
		if (!CNDcarried(0)) break p000e0232;
 		ACCdestroy(5);
 		ACCset(105);
 		ACCok();
		break pro000_restart;
		{}

	}

	// PON BATERIA
	p000e0233:
	{
 		if (skipdoall('p000e0233')) break p000e0233;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0233;
			if (!CNDnoun1(55)) break p000e0233;
 		}
		if (!CNDnotcarr(5)) break p000e0233;
 		ACCdrop(5);
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA BATERIA
	p000e0234:
	{
 		if (skipdoall('p000e0234')) break p000e0234;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0234;
			if (!CNDnoun1(55)) break p000e0234;
 		}
		if (!CNDprep(4)) break p000e0234;
		if (!CNDnoun2(50)) break p000e0234;
		if (!CNDnotcarr(0)) break p000e0234;
 		ACCwriteln(125);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA BATERIA
	p000e0235:
	{
 		if (skipdoall('p000e0235')) break p000e0235;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0235;
			if (!CNDnoun1(55)) break p000e0235;
 		}
		if (!CNDprep(4)) break p000e0235;
		if (!CNDnoun2(50)) break p000e0235;
		if (!CNDnotcarr(5)) break p000e0235;
 		ACCwriteln(126);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA BATERIA
	p000e0236:
	{
 		if (skipdoall('p000e0236')) break p000e0236;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0236;
			if (!CNDnoun1(55)) break p000e0236;
 		}
		if (!CNDprep(4)) break p000e0236;
		if (!CNDnoun2(50)) break p000e0236;
		if (!CNDnotzero(105)) break p000e0236;
 		ACCwriteln(127);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA BATERIA
	p000e0237:
	{
 		if (skipdoall('p000e0237')) break p000e0237;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0237;
			if (!CNDnoun1(55)) break p000e0237;
 		}
		if (!CNDprep(4)) break p000e0237;
		if (!CNDnoun2(50)) break p000e0237;
 		ACCdestroy(5);
 		ACCset(105);
 		ACCwriteln(128);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR BATERIA
	p000e0238:
	{
 		if (skipdoall('p000e0238')) break p000e0238;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0238;
			if (!CNDnoun1(55)) break p000e0238;
 		}
 		ACClet(33,75);
		{}

	}

	// EXTRAE BATERIA
	p000e0239:
	{
 		if (skipdoall('p000e0239')) break p000e0239;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0239;
			if (!CNDnoun1(55)) break p000e0239;
 		}
		if (!CNDeq(43,255)) break p000e0239;
		if (!CNDnotat(53)) break p000e0239;
 		ACClet(43,3);
 		ACClet(44,50);
		{}

	}

	// EXTRAE BATERIA
	p000e0240:
	{
 		if (skipdoall('p000e0240')) break p000e0240;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0240;
			if (!CNDnoun1(55)) break p000e0240;
 		}
		if (!CNDeq(43,255)) break p000e0240;
		if (!CNDat(53)) break p000e0240;
 		ACClet(43,3);
 		ACClet(44,155);
		{}

	}

	// EXTRAE BATERIA
	p000e0241:
	{
 		if (skipdoall('p000e0241')) break p000e0241;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0241;
			if (!CNDnoun1(55)) break p000e0241;
 		}
		if (!CNDprep(3)) break p000e0241;
		if (!CNDnoun2(50)) break p000e0241;
		if (!CNDnotcarr(0)) break p000e0241;
 		ACCwriteln(129);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE BATERIA
	p000e0242:
	{
 		if (skipdoall('p000e0242')) break p000e0242;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0242;
			if (!CNDnoun1(55)) break p000e0242;
 		}
		if (!CNDprep(3)) break p000e0242;
		if (!CNDnoun2(50)) break p000e0242;
		if (!CNDzero(105)) break p000e0242;
 		ACCwriteln(130);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE BATERIA
	p000e0243:
	{
 		if (skipdoall('p000e0243')) break p000e0243;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0243;
			if (!CNDnoun1(55)) break p000e0243;
 		}
		if (!CNDatlt(30)) break p000e0243;
		if (!CNDgt(1,4)) break p000e0243;
 		ACCwriteln(131);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE BATERIA
	p000e0244:
	{
 		if (skipdoall('p000e0244')) break p000e0244;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0244;
			if (!CNDnoun1(55)) break p000e0244;
 		}
		if (!CNDatgt(30)) break p000e0244;
		if (!CNDgt(1,6)) break p000e0244;
 		ACCwriteln(132);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE BATERIA
	p000e0245:
	{
 		if (skipdoall('p000e0245')) break p000e0245;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0245;
			if (!CNDnoun1(55)) break p000e0245;
 		}
		if (!CNDprep(3)) break p000e0245;
		if (!CNDnoun2(50)) break p000e0245;
 		ACCoclear(0,20);
		if (!CNDat(11)) break p000e0245;
 		ACCset(0);
 		ACCcreate(5);
 		ACCget(5);
		if (!success) break pro000_restart;
 		ACCclear(105);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// EXTRAE BATERIA
	p000e0246:
	{
 		if (skipdoall('p000e0246')) break p000e0246;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0246;
			if (!CNDnoun1(55)) break p000e0246;
 		}
		if (!CNDprep(3)) break p000e0246;
		if (!CNDnoun2(50)) break p000e0246;
		if (!CNDnotat(119)) break p000e0246;
		if (!CNDnotat(101)) break p000e0246;
		if (!CNDatgt(31)) break p000e0246;
 		ACCoclear(0,20);
 		ACCcreate(5);
 		ACCget(5);
		if (!success) break pro000_restart;
 		ACCclear(105);
 		ACCset(0);
 		ACCcls();
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// EXTRAE BATERIA
	p000e0247:
	{
 		if (skipdoall('p000e0247')) break p000e0247;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0247;
			if (!CNDnoun1(55)) break p000e0247;
 		}
		if (!CNDprep(3)) break p000e0247;
		if (!CNDnoun2(50)) break p000e0247;
 		ACCclear(105);
 		ACCoclear(0,20);
 		ACCcreate(5);
 		ACCget(5);
		if (!success) break pro000_restart;
 		ACCwriteln(133);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE BARRO
	p000e0248:
	{
 		if (skipdoall('p000e0248')) break p000e0248;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0248;
			if (!CNDnoun1(90)) break p000e0248;
 		}
		if (!CNDprep(3)) break p000e0248;
		if (!CNDnoun2(89)) break p000e0248;
		if (!CNDat(26)) break p000e0248;
		if (!CNDeq(107,1)) break p000e0248;
 		ACClet(107,2);
 		ACCwriteln(134);
 		ACCnewline();
 		ACCanykey();
 		function anykey00011() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00011);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// SENTAR SILLA
	p000e0249:
	{
 		if (skipdoall('p000e0249')) break p000e0249;
 		if (in_response)
		{
			if (!CNDverb(23)) break p000e0249;
			if (!CNDnoun1(83)) break p000e0249;
 		}
		if (!CNDat(18)) break p000e0249;
 		ACCwrite(135);
 		ACCpause(30);
 		function anykey00012() 
		{
 		ACCmessage(36);
 		ACCdone();
		return;
		}
 		waitKey(anykey00012);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// DESTRUIR BOTEL
	p000e0250:
	{
 		if (skipdoall('p000e0250')) break p000e0250;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0250;
			if (!CNDnoun1(53)) break p000e0250;
 		}
		if (!CNDcarried(3)) break p000e0250;
 		ACCdestroy(3);
 		ACClet(5,4);
 		ACCok();
		break pro000_restart;
		{}

	}

	// CABRON _
	p000e0251:
	{
 		if (skipdoall('p000e0251')) break p000e0251;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0251;
 		}
		if (!CNDnotzero(254)) break p000e0251;
 		ACCclear(254);
 		ACCnewline();
 		ACCwriteln(136);
 		ACCnewline();
 		ACCanykey();
 		function anykey00013() 
		{
 		ACCprocess(5);
 		ACCdone();
		return;
		}
 		waitKey(anykey00013);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// CABRON _
	p000e0252:
	{
 		if (skipdoall('p000e0252')) break p000e0252;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0252;
 		}
 		ACCset(254);
 		ACCwriteln(137);
		if (!CNDnotzero(1)) break p000e0252;
 		ACClet(33,21);
		entry_for_doall = 'p000e0253';
		process_in_doall = 0;
 		ACCdoall(254);
		break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CABRON _
	p000e0253:
	{
 		if (skipdoall('p000e0253')) break p000e0253;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0253;
 		}
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ MIERDA
	p000e0254:
	{
 		if (skipdoall('p000e0254')) break p000e0254;
 		if (in_response)
		{
			if (!CNDnoun1(117)) break p000e0254;
 		}
		if (!CNDnotzero(254)) break p000e0254;
 		ACCclear(254);
 		ACCnewline();
 		ACCwriteln(138);
 		ACCnewline();
 		ACCanykey();
 		function anykey00014() 
		{
 		ACCprocess(5);
 		ACCdone();
		return;
		}
 		waitKey(anykey00014);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// _ MIERDA
	p000e0255:
	{
 		if (skipdoall('p000e0255')) break p000e0255;
 		if (in_response)
		{
			if (!CNDnoun1(117)) break p000e0255;
 		}
 		ACCset(254);
 		ACCwriteln(139);
 		ACCpause(120);
 		function anykey00015() 
		{
 		ACCprocess(14);
 		ACCgoto(3);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00015);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ABANDONA _
	p000e0256:
	{
 		if (skipdoall('p000e0256')) break p000e0256;
 		if (in_response)
		{
			if (!CNDverb(25)) break p000e0256;
 		}
 		ACCcommand(0);
 		ACCwrite(140);
 		ACCprint(31);
 		ACCwriteln(141);
 		ACCnewline();
 		ACCwriteln(142);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABANDONA _
	p000e0257:
	{
 		if (skipdoall('p000e0257')) break p000e0257;
 		if (in_response)
		{
			if (!CNDverb(25)) break p000e0257;
 		}
 		ACCok();
		break pro000_restart;
		{}

	}

	// SALUDA _
	p000e0258:
	{
 		if (skipdoall('p000e0258')) break p000e0258;
 		if (in_response)
		{
			if (!CNDverb(113)) break p000e0258;
 		}
		if (!CNDat(12)) break p000e0258;
		if (!CNDlt(102,255)) break p000e0258;
 		ACCwriteln(143);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ENANO
	p000e0259:
	{
 		if (skipdoall('p000e0259')) break p000e0259;
 		if (in_response)
		{
			if (!CNDnoun1(68)) break p000e0259;
 		}
		if (!CNDat(12)) break p000e0259;
		if (!CNDlt(102,255)) break p000e0259;
 		ACCprocess(10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR ENANO
	p000e0260:
	{
 		if (skipdoall('p000e0260')) break p000e0260;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0260;
			if (!CNDnoun1(68)) break p000e0260;
 		}
		if (!CNDat(12)) break p000e0260;
		if (!CNDlt(102,255)) break p000e0260;
 		ACCprocess(10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SALUDA _
	p000e0261:
	{
 		if (skipdoall('p000e0261')) break p000e0261;
 		if (in_response)
		{
			if (!CNDverb(113)) break p000e0261;
 		}
		if (!CNDat(20)) break p000e0261;
		if (!CNDgt(101,2)) break p000e0261;
		if (!CNDlt(101,5)) break p000e0261;
 		ACCwriteln(144);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SALUDA _
	p000e0262:
	{
 		if (skipdoall('p000e0262')) break p000e0262;
 		if (in_response)
		{
			if (!CNDverb(113)) break p000e0262;
 		}
		if (!CNDeq(101,4)) break p000e0262;
 		ACCwriteln(145);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR ELFIT
	p000e0263:
	{
 		if (skipdoall('p000e0263')) break p000e0263;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0263;
			if (!CNDnoun1(104)) break p000e0263;
 		}
		if (!CNDat(20)) break p000e0263;
		if (!CNDgt(101,2)) break p000e0263;
		if (!CNDlt(101,5)) break p000e0263;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0264:
	{
 		if (skipdoall('p000e0264')) break p000e0264;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0264;
 		}
		if (!CNDeq(101,4)) break p000e0264;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0265:
	{
 		if (skipdoall('p000e0265')) break p000e0265;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0265;
 		}
		if (!CNDat(20)) break p000e0265;
		if (!CNDeq(101,3)) break p000e0265;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0266:
	{
 		if (skipdoall('p000e0266')) break p000e0266;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0266;
 		}
		if (!CNDat(12)) break p000e0266;
 		ACCprocess(10);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA ELFIT
	p000e0267:
	{
 		if (skipdoall('p000e0267')) break p000e0267;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0267;
			if (!CNDnoun1(104)) break p000e0267;
 		}
		if (!CNDeq(101,4)) break p000e0267;
 		ACClet(101,3);
 		ACCwriteln(146);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON BOTA
	p000e0268:
	{
 		if (skipdoall('p000e0268')) break p000e0268;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0268;
			if (!CNDnoun1(101)) break p000e0268;
 		}
		if (!CNDcarried(6)) break p000e0268;
 		ACCwriteln(147);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA BOTA
	p000e0269:
	{
 		if (skipdoall('p000e0269')) break p000e0269;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0269;
			if (!CNDnoun1(101)) break p000e0269;
 		}
		if (!CNDat(12)) break p000e0269;
		if (!CNDpresent(6)) break p000e0269;
		if (!CNDnotcarr(6)) break p000e0269;
 		ACCget(6);
		if (!success) break pro000_restart;
		{}

	}

	// DA BOTA
	p000e0270:
	{
 		if (skipdoall('p000e0270')) break p000e0270;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0270;
			if (!CNDnoun1(101)) break p000e0270;
 		}
		if (!CNDat(12)) break p000e0270;
		if (!CNDeq(44,255)) break p000e0270;
 		ACClet(43,2);
 		ACClet(44,68);
		{}

	}

	// DA BOTA
	p000e0271:
	{
 		if (skipdoall('p000e0271')) break p000e0271;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0271;
			if (!CNDnoun1(101)) break p000e0271;
 		}
		if (!CNDprep(2)) break p000e0271;
		if (!CNDnoun2(68)) break p000e0271;
		if (!CNDat(12)) break p000e0271;
		if (!CNDcarried(6)) break p000e0271;
		if (!CNDlt(102,255)) break p000e0271;
 		ACCdestroy(6);
 		ACCset(102);
 		ACCcreate(0);
 		ACCextern(148);
 		ACCwriteln(149);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ LLAVE
	p000e0272:
	{
 		if (skipdoall('p000e0272')) break p000e0272;
 		if (in_response)
		{
			if (!CNDnoun1(54)) break p000e0272;
 		}
		if (!CNDat(26)) break p000e0272;
		if (!CNDeq(33,255)) break p000e0272;
		if (!CNDzero(107)) break p000e0272;
 		ACCwriteln(150);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ELFIT
	p000e0273:
	{
 		if (skipdoall('p000e0273')) break p000e0273;
 		if (in_response)
		{
			if (!CNDnoun1(104)) break p000e0273;
 		}
		if (!CNDat(20)) break p000e0273;
		if (!CNDgt(101,2)) break p000e0273;
		if (!CNDlt(101,5)) break p000e0273;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ELFIT
	p000e0274:
	{
 		if (skipdoall('p000e0274')) break p000e0274;
 		if (in_response)
		{
			if (!CNDnoun1(104)) break p000e0274;
 		}
		if (!CNDeq(101,4)) break p000e0274;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ ELFIT
	p000e0275:
	{
 		if (skipdoall('p000e0275')) break p000e0275;
 		if (in_response)
		{
			if (!CNDnoun1(104)) break p000e0275;
 		}
		if (!CNDat(20)) break p000e0275;
		if (!CNDeq(101,3)) break p000e0275;
 		ACCprocess(9);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LIBERA PAJARO
	p000e0276:
	{
 		if (skipdoall('p000e0276')) break p000e0276;
 		if (in_response)
		{
			if (!CNDverb(128)) break p000e0276;
			if (!CNDnoun1(158)) break p000e0276;
 		}
 		ACClet(33,21);
		{}

	}

	// DEJA PAJARO
	p000e0277:
	{
 		if (skipdoall('p000e0277')) break p000e0277;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0277;
			if (!CNDnoun1(158)) break p000e0277;
 		}
 		ACClet(33,64);
 		ACClet(34,129);
		{}

	}

	// ARROJA JARRON
	p000e0278:
	{
 		if (skipdoall('p000e0278')) break p000e0278;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0278;
			if (!CNDnoun1(152)) break p000e0278;
 		}
		if (!CNDcarried(26)) break p000e0278;
 		ACCdestroy(26);
 		ACCnewline();
 		ACCwriteln(151);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESPERA _
	p000e0279:
	{
 		if (skipdoall('p000e0279')) break p000e0279;
 		if (in_response)
		{
			if (!CNDverb(43)) break p000e0279;
 		}
 		ACCwriteln(152);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0280:
	{
 		if (skipdoall('p000e0280')) break p000e0280;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0280;
 		}
		if (!CNDat(31)) break p000e0280;
 		ACCwriteln(153);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0281:
	{
 		if (skipdoall('p000e0281')) break p000e0281;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0281;
 		}
		if (!CNDatgt(101)) break p000e0281;
		if (!CNDatlt(104)) break p000e0281;
		if (!CNDnoteq(51,255)) break p000e0281;
		if (!CNDnotcarr(getFlag(51))) break p000e0281;
 		ACCwriteln(154);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0282:
	{
 		if (skipdoall('p000e0282')) break p000e0282;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0282;
 		}
		if (!CNDnoteq(51,255)) break p000e0282;
		if (!CNDcarried(getFlag(51))) break p000e0282;
 		ACCprocess(20);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE BARROTE
	p000e0283:
	{
 		if (skipdoall('p000e0283')) break p000e0283;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0283;
			if (!CNDnoun1(129)) break p000e0283;
 		}
		if (!CNDnotat(66)) break p000e0283;
		if (!CNDcarried(7)) break p000e0283;
		if (!CNDonotzero(7,23)) break p000e0283;
 		ACCoclear(7,23);
 		ACCwriteln(155);
 		ACCclear(130);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE BARROTE
	p000e0284:
	{
 		if (skipdoall('p000e0284')) break p000e0284;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0284;
			if (!CNDnoun1(129)) break p000e0284;
 		}
		if (!CNDlt(116,9)) break p000e0284;
		if (!CNDcarried(7)) break p000e0284;
		if (!CNDonotzero(7,23)) break p000e0284;
 		ACCoclear(7,23);
 		ACCwrite(156);
 		ACCclear(130);
 		ACCwriteln(157);
 		ACCset(116);
 		ACCcreate(17);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE BARROTE
	p000e0285:
	{
 		if (skipdoall('p000e0285')) break p000e0285;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0285;
			if (!CNDnoun1(129)) break p000e0285;
 		}
		if (!CNDcarried(7)) break p000e0285;
		if (!CNDonotzero(7,23)) break p000e0285;
 		ACCwriteln(158);
 		ACCanykey();
 		function anykey00016() 
		{
 		ACCclear(0);
 		ACCgoto(120);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00016);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ABRE BARROTE
	p000e0286:
	{
 		if (skipdoall('p000e0286')) break p000e0286;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0286;
			if (!CNDnoun1(129)) break p000e0286;
 		}
		if (!CNDat(116)) break p000e0286;
		if (!CNDcarried(4)) break p000e0286;
 		ACCwriteln(159);
 		ACCset(123);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE BARROTE
	p000e0287:
	{
 		if (skipdoall('p000e0287')) break p000e0287;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0287;
			if (!CNDnoun1(129)) break p000e0287;
 		}
		if (!CNDat(116)) break p000e0287;
 		ACCwriteln(160);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE BARROTE
	p000e0288:
	{
 		if (skipdoall('p000e0288')) break p000e0288;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0288;
			if (!CNDnoun1(129)) break p000e0288;
 		}
		if (!CNDcarried(7)) break p000e0288;
		if (!CNDozero(7,23)) break p000e0288;
 		ACCwriteln(161);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE ALMEJA
	p000e0289:
	{
 		if (skipdoall('p000e0289')) break p000e0289;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0289;
			if (!CNDnoun1(126)) break p000e0289;
 		}
		if (!CNDat(77)) break p000e0289;
		if (!CNDcarried(20)) break p000e0289;
		if (!CNDzero(118)) break p000e0289;
 		ACCwriteln(162);
 		ACCplace(21,79);
 		ACCset(118);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE ALMEJA
	p000e0290:
	{
 		if (skipdoall('p000e0290')) break p000e0290;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0290;
			if (!CNDnoun1(126)) break p000e0290;
 		}
		if (!CNDat(77)) break p000e0290;
		if (!CNDcarried(20)) break p000e0290;
 		ACCwriteln(163);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE ALMEJA
	p000e0291:
	{
 		if (skipdoall('p000e0291')) break p000e0291;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0291;
			if (!CNDnoun1(126)) break p000e0291;
 		}
		if (!CNDat(77)) break p000e0291;
 		ACCwriteln(164);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE PUERT
	p000e0292:
	{
 		if (skipdoall('p000e0292')) break p000e0292;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0292;
			if (!CNDnoun1(89)) break p000e0292;
 		}
		if (!CNDat(106)) break p000e0292;
		if (!CNDeq(124,1)) break p000e0292;
 		ACCset(124);
 		ACCwriteln(165);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE PUERT
	p000e0293:
	{
 		if (skipdoall('p000e0293')) break p000e0293;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0293;
			if (!CNDnoun1(89)) break p000e0293;
 		}
		if (!CNDat(106)) break p000e0293;
		if (!CNDzero(124)) break p000e0293;
 		ACCwriteln(166);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE PUERT
	p000e0294:
	{
 		if (skipdoall('p000e0294')) break p000e0294;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0294;
			if (!CNDnoun1(89)) break p000e0294;
 		}
		if (!CNDat(106)) break p000e0294;
 		ACCwriteln(167);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0295:
	{
 		if (skipdoall('p000e0295')) break p000e0295;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0295;
 		}
		if (!CNDat(31)) break p000e0295;
 		ACCwriteln(168);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR PUERT
	p000e0296:
	{
 		if (skipdoall('p000e0296')) break p000e0296;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0296;
			if (!CNDnoun1(89)) break p000e0296;
 		}
		if (!CNDat(106)) break p000e0296;
		if (!CNDeq(124,1)) break p000e0296;
 		ACCwriteln(169);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR PUERT
	p000e0297:
	{
 		if (skipdoall('p000e0297')) break p000e0297;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0297;
			if (!CNDnoun1(89)) break p000e0297;
 		}
		if (!CNDat(106)) break p000e0297;
		if (!CNDzero(124)) break p000e0297;
 		ACCwriteln(170);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR PUERT
	p000e0298:
	{
 		if (skipdoall('p000e0298')) break p000e0298;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0298;
			if (!CNDnoun1(89)) break p000e0298;
 		}
		if (!CNDat(106)) break p000e0298;
 		ACClet(124,1);
 		ACCwriteln(171);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR PUERT
	p000e0299:
	{
 		if (skipdoall('p000e0299')) break p000e0299;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0299;
			if (!CNDnoun1(89)) break p000e0299;
 		}
		if (!CNDcarried(7)) break p000e0299;
		if (!CNDonotzero(7,23)) break p000e0299;
 		ACCwriteln(172);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA VARITA
	p000e0300:
	{
 		if (skipdoall('p000e0300')) break p000e0300;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0300;
			if (!CNDnoun1(168)) break p000e0300;
 		}
 		ACClet(33,80);
		{}

	}

	// AGITA VARITA
	p000e0301:
	{
 		if (skipdoall('p000e0301')) break p000e0301;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0301;
			if (!CNDnoun1(168)) break p000e0301;
 		}
 		ACClet(33,80);
		{}

	}

	// USA VARITA
	p000e0302:
	{
 		if (skipdoall('p000e0302')) break p000e0302;
 		if (in_response)
		{
			if (!CNDverb(80)) break p000e0302;
			if (!CNDnoun1(168)) break p000e0302;
 		}
		if (!CNDatgt(37)) break p000e0302;
		if (!CNDatlt(40)) break p000e0302;
		if (!CNDcarried(8)) break p000e0302;
 		ACCplus(115,1);
 		ACCgoto(39);
		if (!CNDeq(115,2)) break p000e0302;
 		ACCclear(115);
 		ACCgoto(38);
		{}

	}

	// USA VARITA
	p000e0303:
	{
 		if (skipdoall('p000e0303')) break p000e0303;
 		if (in_response)
		{
			if (!CNDverb(80)) break p000e0303;
			if (!CNDnoun1(168)) break p000e0303;
 		}
		if (!CNDcarried(8)) break p000e0303;
		if (!CNDatgt(37)) break p000e0303;
		if (!CNDatlt(40)) break p000e0303;
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// USA VARITA
	p000e0304:
	{
 		if (skipdoall('p000e0304')) break p000e0304;
 		if (in_response)
		{
			if (!CNDverb(80)) break p000e0304;
			if (!CNDnoun1(168)) break p000e0304;
 		}
		if (!CNDcarried(8)) break p000e0304;
		if (!CNDpresent(7)) break p000e0304;
		if (!CNDonotzero(7,23)) break p000e0304;
 		ACCprocess(23);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// USA VARITA
	p000e0305:
	{
 		if (skipdoall('p000e0305')) break p000e0305;
 		if (in_response)
		{
			if (!CNDverb(80)) break p000e0305;
			if (!CNDnoun1(168)) break p000e0305;
 		}
		if (!CNDcarried(8)) break p000e0305;
		if (!CNDat(35)) break p000e0305;
		if (!CNDzero(130)) break p000e0305;
 		ACCprocess(23);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// USA VARITA
	p000e0306:
	{
 		if (skipdoall('p000e0306')) break p000e0306;
 		if (in_response)
		{
			if (!CNDverb(80)) break p000e0306;
			if (!CNDnoun1(168)) break p000e0306;
 		}
		if (!CNDcarried(8)) break p000e0306;
 		ACCwriteln(173);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// USA VARITA
	p000e0307:
	{
 		if (skipdoall('p000e0307')) break p000e0307;
 		if (in_response)
		{
			if (!CNDverb(80)) break p000e0307;
			if (!CNDnoun1(168)) break p000e0307;
 		}
 		ACClet(33,20);
		{}

	}

	// EXTRAE BATERIA
	p000e0308:
	{
 		if (skipdoall('p000e0308')) break p000e0308;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0308;
			if (!CNDnoun1(55)) break p000e0308;
 		}
		if (!CNDnoun2(155)) break p000e0308;
		if (!CNDat(53)) break p000e0308;
		if (!CNDabsent(5)) break p000e0308;
 		ACCwriteln(174);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE BATERIA
	p000e0309:
	{
 		if (skipdoall('p000e0309')) break p000e0309;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0309;
			if (!CNDnoun1(55)) break p000e0309;
 		}
		if (!CNDnoun2(155)) break p000e0309;
		if (!CNDat(53)) break p000e0309;
 		ACClet(33,20);
		{}

	}

	// BUSCA _
	p000e0310:
	{
 		if (skipdoall('p000e0310')) break p000e0310;
 		if (in_response)
		{
			if (!CNDverb(118)) break p000e0310;
 		}
		if (!CNDat(37)) break p000e0310;
		if (!CNDzero(114)) break p000e0310;
 		ACCwriteln(175);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BUSCA PEPITA
	p000e0311:
	{
 		if (skipdoall('p000e0311')) break p000e0311;
 		if (in_response)
		{
			if (!CNDverb(118)) break p000e0311;
			if (!CNDnoun1(159)) break p000e0311;
 		}
		if (!CNDat(37)) break p000e0311;
		if (!CNDisat(14,37)) break p000e0311;
 		ACCwriteln(176);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR _
	p000e0312:
	{
 		if (skipdoall('p000e0312')) break p000e0312;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0312;
 		}
		if (!CNDat(66)) break p000e0312;
		if (!CNDlt(116,9)) break p000e0312;
 		ACClet(116,9);
 		ACCwriteln(177);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR ALMOHADA
	p000e0313:
	{
 		if (skipdoall('p000e0313')) break p000e0313;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0313;
			if (!CNDnoun1(127)) break p000e0313;
 		}
		if (!CNDisat(11,getFlag(38))) break p000e0313;
		if (!CNDisat(26,getFlag(38))) break p000e0313;
		if (!CNDnotat(96)) break p000e0313;
 		ACCget(11);
		if (!success) break pro000_restart;
 		ACClet(51,152);
 		ACCwriteln(178);
 		ACCdestroy(26);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR PAJARO
	p000e0314:
	{
 		if (skipdoall('p000e0314')) break p000e0314;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0314;
			if (!CNDnoun1(158)) break p000e0314;
 		}
		if (!CNDat(35)) break p000e0314;
		if (!CNDnotcarr(8)) break p000e0314;
		if (!CNDcarried(7)) break p000e0314;
		if (!CNDozero(7,23)) break p000e0314;
		if (!CNDzero(130)) break p000e0314;
 		ACCoset(7,23);
 		ACCset(130);
 		ACCwriteln(179);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR PAJARO
	p000e0315:
	{
 		if (skipdoall('p000e0315')) break p000e0315;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0315;
			if (!CNDnoun1(158)) break p000e0315;
 		}
		if (!CNDat(35)) break p000e0315;
 		ACCwriteln(180);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR BROTE
	p000e0316:
	{
 		if (skipdoall('p000e0316')) break p000e0316;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0316;
			if (!CNDnoun1(132)) break p000e0316;
 		}
		if (!CNDat(92)) break p000e0316;
 		ACCwriteln(181);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR PEPITA
	p000e0317:
	{
 		if (skipdoall('p000e0317')) break p000e0317;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0317;
			if (!CNDnoun1(159)) break p000e0317;
 		}
		if (!CNDat(37)) break p000e0317;
		if (!CNDzero(114)) break p000e0317;
 		ACCwriteln(182);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR HACHA
	p000e0318:
	{
 		if (skipdoall('p000e0318')) break p000e0318;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0318;
			if (!CNDnoun1(149)) break p000e0318;
 		}
		if (!CNDat(106)) break p000e0318;
		if (!CNDabsent(12)) break p000e0318;
 		ACClet(33,75);
 		ACClet(43,3);
 		ACClet(44,172);
		{}

	}

	// EXTRAE HACHA
	p000e0319:
	{
 		if (skipdoall('p000e0319')) break p000e0319;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0319;
			if (!CNDnoun1(149)) break p000e0319;
 		}
		if (!CNDprep(3)) break p000e0319;
		if (!CNDnoun2(172)) break p000e0319;
		if (!CNDat(106)) break p000e0319;
 		ACCwriteln(183);
 		ACCnotdone();
		break pro000_restart;
		{}

	}

	// EXTRAE HACHA
	p000e0320:
	{
 		if (skipdoall('p000e0320')) break p000e0320;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0320;
			if (!CNDnoun1(149)) break p000e0320;
 		}
		if (!CNDprep(3)) break p000e0320;
		if (!CNDnoun2(172)) break p000e0320;
 		ACCwriteln(184);
 		ACCnotdone();
		break pro000_restart;
		{}

	}

	// AGARR ESCUDO
	p000e0321:
	{
 		if (skipdoall('p000e0321')) break p000e0321;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0321;
			if (!CNDnoun1(171)) break p000e0321;
 		}
		if (!CNDat(106)) break p000e0321;
 		ACCwriteln(185);
 		ACCnotdone();
		break pro000_restart;
		{}

	}

	// AGARR _
	p000e0322:
	{
 		if (skipdoall('p000e0322')) break p000e0322;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0322;
 		}
 		ACCautog();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COJE _
	p000e0323:
	{
 		if (skipdoall('p000e0323')) break p000e0323;
 		if (in_response)
		{
			if (!CNDverb(124)) break p000e0323;
 		}
 		ACCwriteln(186);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COGEL _
	p000e0324:
	{
 		if (skipdoall('p000e0324')) break p000e0324;
 		if (in_response)
		{
			if (!CNDverb(123)) break p000e0324;
 		}
		if (!CNDat(98)) break p000e0324;
 		ACCwriteln(187);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA JARRON
	p000e0325:
	{
 		if (skipdoall('p000e0325')) break p000e0325;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0325;
			if (!CNDnoun1(152)) break p000e0325;
 		}
		if (!CNDisnotat(11,getFlag(38))) break p000e0325;
		if (!CNDcarried(26)) break p000e0325;
		if (!CNDnotat(96)) break p000e0325;
 		ACCwriteln(188);
 		ACCdestroy(26);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LIBERA OSO
	p000e0326:
	{
 		if (skipdoall('p000e0326')) break p000e0326;
 		if (in_response)
		{
			if (!CNDverb(128)) break p000e0326;
			if (!CNDnoun1(157)) break p000e0326;
 		}
 		ACClet(33,21);
		{}

	}

	// DEJA OSO
	p000e0327:
	{
 		if (skipdoall('p000e0327')) break p000e0327;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0327;
			if (!CNDnoun1(157)) break p000e0327;
 		}
		if (!CNDat(117)) break p000e0327;
		if (!CNDeq(122,2)) break p000e0327;
		if (!CNDcarried(4)) break p000e0327;
 		ACCset(122);
 		ACCwriteln(189);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA OSO
	p000e0328:
	{
 		if (skipdoall('p000e0328')) break p000e0328;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0328;
			if (!CNDnoun1(157)) break p000e0328;
 		}
		if (!CNDat(117)) break p000e0328;
		if (!CNDcarried(4)) break p000e0328;
		if (!CNDzero(122)) break p000e0328;
 		ACCwriteln(190);
 		ACCanykey();
 		function anykey00017() 
		{
 		ACCclear(0);
 		ACCgoto(120);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00017);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// DEJA OSO
	p000e0329:
	{
 		if (skipdoall('p000e0329')) break p000e0329;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0329;
			if (!CNDnoun1(157)) break p000e0329;
 		}
		if (!CNDeq(122,255)) break p000e0329;
		if (!CNDatgt(101)) break p000e0329;
		if (!CNDatlt(104)) break p000e0329;
		if (!CNDzero(121)) break p000e0329;
 		ACCwrite(191);
 		ACCwriteln(192);
 		ACCset(121);
 		ACCcreate(23);
 		ACClet(122,1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA OSO
	p000e0330:
	{
 		if (skipdoall('p000e0330')) break p000e0330;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0330;
			if (!CNDnoun1(157)) break p000e0330;
 		}
		if (!CNDeq(122,255)) break p000e0330;
 		ACCwriteln(193);
 		ACCcreate(23);
 		ACClet(122,1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA OSO
	p000e0331:
	{
 		if (skipdoall('p000e0331')) break p000e0331;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0331;
			if (!CNDnoun1(157)) break p000e0331;
 		}
		if (!CNDeq(122,1)) break p000e0331;
 		ACCwriteln(194);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA PILAR
	p000e0332:
	{
 		if (skipdoall('p000e0332')) break p000e0332;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0332;
			if (!CNDnoun1(161)) break p000e0332;
 		}
 		ACCprocess(25);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0333:
	{
 		if (skipdoall('p000e0333')) break p000e0333;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0333;
 		}
 		ACCwriteln(195);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEE _
	p000e0334:
	{
 		if (skipdoall('p000e0334')) break p000e0334;
 		if (in_response)
		{
			if (!CNDverb(109)) break p000e0334;
 		}
 		ACClet(34,124);
 		ACCprocess(4);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME HUESO
	p000e0335:
	{
 		if (skipdoall('p000e0335')) break p000e0335;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0335;
			if (!CNDnoun1(150)) break p000e0335;
 		}
		if (!CNDcarried(10)) break p000e0335;
 		ACCwriteln(196);
 		ACCnewline();
 		ACCanykey();
 		function anykey00018() 
		{
 		ACCclear(0);
 		ACCgoto(120);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00018);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// COME TORTI
	p000e0336:
	{
 		if (skipdoall('p000e0336')) break p000e0336;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0336;
			if (!CNDnoun1(52)) break p000e0336;
 		}
		if (!CNDcarried(2)) break p000e0336;
 		ACCdestroy(2);
 		ACCok();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0337:
	{
 		if (skipdoall('p000e0337')) break p000e0337;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0337;
 		}
		if (!CNDcarried(3)) break p000e0337;
		if (!CNDonotzero(3,22)) break p000e0337;
 		ACCoclear(3,22);
 		ACCok();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0338:
	{
 		if (skipdoall('p000e0338')) break p000e0338;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0338;
 		}
		if (!CNDat(118)) break p000e0338;
 		ACCwriteln(197);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0339:
	{
 		if (skipdoall('p000e0339')) break p000e0339;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0339;
 		}
		if (!CNDat(69)) break p000e0339;
 		ACCwriteln(198);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0340:
	{
 		if (skipdoall('p000e0340')) break p000e0340;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0340;
 		}
		if (!CNDat(84)) break p000e0340;
 		ACCwriteln(199);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACEITAR PUERT
	p000e0341:
	{
 		if (skipdoall('p000e0341')) break p000e0341;
 		if (in_response)
		{
			if (!CNDverb(127)) break p000e0341;
			if (!CNDnoun1(89)) break p000e0341;
 		}
		if (!CNDat(106)) break p000e0341;
		if (!CNDcarried(9)) break p000e0341;
		if (!CNDzero(124)) break p000e0341;
 		ACCswap(9,3);
 		ACCoclear(3,22);
 		ACCwriteln(200);
 		ACClet(124,1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACEITAR PUERT
	p000e0342:
	{
 		if (skipdoall('p000e0342')) break p000e0342;
 		if (in_response)
		{
			if (!CNDverb(127)) break p000e0342;
			if (!CNDnoun1(89)) break p000e0342;
 		}
		if (!CNDat(106)) break p000e0342;
		if (!CNDnotcarr(9)) break p000e0342;
 		ACCwriteln(201);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACEITAR PUERT
	p000e0343:
	{
 		if (skipdoall('p000e0343')) break p000e0343;
 		if (in_response)
		{
			if (!CNDverb(127)) break p000e0343;
			if (!CNDnoun1(89)) break p000e0343;
 		}
		if (!CNDat(106)) break p000e0343;
		if (!CNDnotzero(124)) break p000e0343;
 		ACCwriteln(202);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACEITAR _
	p000e0344:
	{
 		if (skipdoall('p000e0344')) break p000e0344;
 		if (in_response)
		{
			if (!CNDverb(127)) break p000e0344;
 		}
 		ACCwriteln(203);
 		ACCnotdone();
		break pro000_restart;
		{}

	}

	// APARTA NIEBLA
	p000e0345:
	{
 		if (skipdoall('p000e0345')) break p000e0345;
 		if (in_response)
		{
			if (!CNDverb(122)) break p000e0345;
			if (!CNDnoun1(156)) break p000e0345;
 		}
		if (!CNDat(37)) break p000e0345;
 		ACCwriteln(204);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0346:
	{
 		if (skipdoall('p000e0346')) break p000e0346;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0346;
 		}
		if (!CNDat(37)) break p000e0346;
		if (!CNDzero(114)) break p000e0346;
 		ACCset(114);
		{}

	}

	// SOPLA _
	p000e0347:
	{
 		if (skipdoall('p000e0347')) break p000e0347;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0347;
 		}
		if (!CNDzero(131)) break p000e0347;
 		ACCset(131);
 		ACCwrite(205);
 		ACCplace(14,37);
		{}

	}

	// SOPLA _
	p000e0348:
	{
 		if (skipdoall('p000e0348')) break p000e0348;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0348;
 		}
		if (!CNDat(37)) break p000e0348;
 		ACCwriteln(206);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REGAR BROTE
	p000e0349:
	{
 		if (skipdoall('p000e0349')) break p000e0349;
 		if (in_response)
		{
			if (!CNDverb(126)) break p000e0349;
			if (!CNDnoun1(132)) break p000e0349;
 		}
		if (!CNDat(92)) break p000e0349;
		if (!CNDcarried(9)) break p000e0349;
 		ACCwriteln(207);
 		ACCclear(120);
 		ACCswap(9,3);
 		ACCoclear(3,22);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REGAR BROTE
	p000e0350:
	{
 		if (skipdoall('p000e0350')) break p000e0350;
 		if (in_response)
		{
			if (!CNDverb(126)) break p000e0350;
			if (!CNDnoun1(132)) break p000e0350;
 		}
		if (!CNDnotcarr(3)) break p000e0350;
 		ACCwriteln(208);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REGAR BROTE
	p000e0351:
	{
 		if (skipdoall('p000e0351')) break p000e0351;
 		if (in_response)
		{
			if (!CNDverb(126)) break p000e0351;
			if (!CNDnoun1(132)) break p000e0351;
 		}
		if (!CNDozero(3,22)) break p000e0351;
 		ACCwriteln(209);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REGAR BROTE
	p000e0352:
	{
 		if (skipdoall('p000e0352')) break p000e0352;
 		if (in_response)
		{
			if (!CNDverb(126)) break p000e0352;
			if (!CNDnoun1(132)) break p000e0352;
 		}
		if (!CNDat(92)) break p000e0352;
 		ACCplus(120,1);
 		ACCoclear(3,22);
		{}

	}

	// REGAR BROTE
	p000e0353:
	{
 		if (skipdoall('p000e0353')) break p000e0353;
 		if (in_response)
		{
			if (!CNDverb(126)) break p000e0353;
			if (!CNDnoun1(132)) break p000e0353;
 		}
		if (!CNDat(92)) break p000e0353;
		if (!CNDeq(120,1)) break p000e0353;
 		ACCwriteln(210);
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REGAR BROTE
	p000e0354:
	{
 		if (skipdoall('p000e0354')) break p000e0354;
 		if (in_response)
		{
			if (!CNDverb(126)) break p000e0354;
			if (!CNDnoun1(132)) break p000e0354;
 		}
		if (!CNDat(92)) break p000e0354;
		if (!CNDgt(120,1)) break p000e0354;
 		ACCwriteln(211);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CABRON _
	p000e0355:
	{
 		if (skipdoall('p000e0355')) break p000e0355;
 		if (in_response)
		{
			if (!CNDverb(119)) break p000e0355;
 		}
		if (!CNDatgt(30)) break p000e0355;
 		ACCdestroy(0);
 		ACCwrite(212);
 		ACCanykey();
 		function anykey00019() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00019);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ARROJA BOTEL
	p000e0356:
	{
 		if (skipdoall('p000e0356')) break p000e0356;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0356;
			if (!CNDnoun1(53)) break p000e0356;
 		}
		if (!CNDcarried(3)) break p000e0356;
 		ACCdestroy(3);
 		ACCwriteln(213);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA BOTEL
	p000e0357:
	{
 		if (skipdoall('p000e0357')) break p000e0357;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0357;
			if (!CNDnoun1(53)) break p000e0357;
 		}
		if (!CNDcarried(9)) break p000e0357;
 		ACCdestroy(9);
 		ACCnewline();
 		ACCwriteln(214);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA HACHA
	p000e0358:
	{
 		if (skipdoall('p000e0358')) break p000e0358;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0358;
			if (!CNDnoun1(149)) break p000e0358;
 		}
		if (!CNDnotcarr(12)) break p000e0358;
 		ACCwriteln(215);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA HACHA
	p000e0359:
	{
 		if (skipdoall('p000e0359')) break p000e0359;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0359;
			if (!CNDnoun1(149)) break p000e0359;
 		}
		if (!CNDzero(127)) break p000e0359;
		if (!CNDeq(126,2)) break p000e0359;
		if (!CNDchance(50)) break p000e0359;
 		ACCwriteln(216);
 		ACCplace(12,getFlag(38));
 		ACCset(127);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA HACHA
	p000e0360:
	{
 		if (skipdoall('p000e0360')) break p000e0360;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0360;
			if (!CNDnoun1(149)) break p000e0360;
 		}
		if (!CNDeq(126,2)) break p000e0360;
 		ACCwriteln(217);
 		ACCdestroy(12);
 		ACCclear(126);
 		ACCclear(127);
 		ACCplus(128,1);
 		ACCanykey();
 		function anykey00020() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00020);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ARROJA LAMPA
	p000e0361:
	{
 		if (skipdoall('p000e0361')) break p000e0361;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0361;
			if (!CNDnoun1(50)) break p000e0361;
 		}
		if (!CNDnotcarr(0)) break p000e0361;
 		ACCwriteln(218);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA LAMPA
	p000e0362:
	{
 		if (skipdoall('p000e0362')) break p000e0362;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0362;
			if (!CNDnoun1(50)) break p000e0362;
 		}
		if (!CNDat(118)) break p000e0362;
 		ACCwriteln(219);
 		ACCset(0);
 		ACCpause(100);
 		function anykey00021() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00021);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ARROJA LAMPA
	p000e0363:
	{
 		if (skipdoall('p000e0363')) break p000e0363;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0363;
			if (!CNDnoun1(50)) break p000e0363;
 		}
		if (!CNDat(84)) break p000e0363;
 		ACCwriteln(220);
 		ACCset(0);
 		ACCpause(100);
 		function anykey00022() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00022);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0364:
	{
 		if (skipdoall('p000e0364')) break p000e0364;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0364;
 		}
		if (!CNDat(118)) break p000e0364;
		if (!CNDnoteq(51,255)) break p000e0364;
		if (!CNDcarried(getFlag(51))) break p000e0364;
 		ACCwriteln(221);
 		ACCdestroy(getFlag(51));
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0365:
	{
 		if (skipdoall('p000e0365')) break p000e0365;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0365;
 		}
		if (!CNDnoteq(51,255)) break p000e0365;
		if (!CNDat(84)) break p000e0365;
		if (!CNDcarried(getFlag(51))) break p000e0365;
 		ACCwriteln(222);
 		ACCdestroy(getFlag(51));
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CRUZA _
	p000e0366:
	{
 		if (skipdoall('p000e0366')) break p000e0366;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0366;
 		}
		if (!CNDatgt(101)) break p000e0366;
		if (!CNDatlt(104)) break p000e0366;
		if (!CNDzero(121)) break p000e0366;
 		ACCwriteln(223);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CRUZA _
	p000e0367:
	{
 		if (skipdoall('p000e0367')) break p000e0367;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0367;
 		}
		if (!CNDatgt(101)) break p000e0367;
		if (!CNDatlt(104)) break p000e0367;
		if (!CNDeq(122,255)) break p000e0367;
 		ACCwriteln(224);
 		ACCclear(0);
 		ACCgoto(120);
 		ACCanykey();
 		function anykey00023() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00023);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// CRUZA _
	p000e0368:
	{
 		if (skipdoall('p000e0368')) break p000e0368;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0368;
 		}
		if (!CNDat(102)) break p000e0368;
 		ACCgoto(103);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// CRUZA _
	p000e0369:
	{
 		if (skipdoall('p000e0369')) break p000e0369;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0369;
 		}
		if (!CNDat(103)) break p000e0369;
 		ACCgoto(102);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// CRUZA _
	p000e0370:
	{
 		if (skipdoall('p000e0370')) break p000e0370;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0370;
 		}
		if (!CNDat(39)) break p000e0370;
 		ACCgoto(40);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// CRUZA _
	p000e0371:
	{
 		if (skipdoall('p000e0371')) break p000e0371;
 		if (in_response)
		{
			if (!CNDverb(125)) break p000e0371;
 		}
		if (!CNDat(40)) break p000e0371;
 		ACCgoto(39);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// EXTRAE BATERIA
	p000e0372:
	{
 		if (skipdoall('p000e0372')) break p000e0372;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0372;
			if (!CNDnoun1(55)) break p000e0372;
 		}
		if (!CNDcarried(0)) break p000e0372;
 		ACCclear(105);
 		ACCplace(5,254);
 		ACCoclear(0,20);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0373:
	{
 		if (skipdoall('p000e0373')) break p000e0373;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0373;
 		}
		if (!CNDat(96)) break p000e0373;
 		ACCwriteln(225);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0374:
	{
 		if (skipdoall('p000e0374')) break p000e0374;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0374;
 		}
		if (!CNDat(38)) break p000e0374;
 		ACCprocess(22);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0375:
	{
 		if (skipdoall('p000e0375')) break p000e0375;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0375;
 		}
		if (!CNDatgt(101)) break p000e0375;
		if (!CNDatlt(104)) break p000e0375;
 		ACCprocess(22);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0376:
	{
 		if (skipdoall('p000e0376')) break p000e0376;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0376;
 		}
 		ACCwriteln(226);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0377:
	{
 		if (skipdoall('p000e0377')) break p000e0377;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0377;
 		}
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// FEE FIE
	p000e0378:
	{
 		if (skipdoall('p000e0378')) break p000e0378;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0378;
			if (!CNDnoun1(140)) break p000e0378;
 		}
		if (!CNDat(106)) break p000e0378;
		if (!CNDisat(22,106)) break p000e0378;
 		ACCwriteln(227);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FEE FIE
	p000e0379:
	{
 		if (skipdoall('p000e0379')) break p000e0379;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0379;
			if (!CNDnoun1(140)) break p000e0379;
 		}
		if (!CNDat(106)) break p000e0379;
		if (!CNDcarried(22)) break p000e0379;
 		ACCplace(22,106);
 		ACCwrite(228);
 		ACCwriteln(229);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FEE FIE
	p000e0380:
	{
 		if (skipdoall('p000e0380')) break p000e0380;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0380;
			if (!CNDnoun1(140)) break p000e0380;
 		}
		if (!CNDat(106)) break p000e0380;
 		ACCwriteln(230);
 		ACCcreate(22);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FEE FIE
	p000e0381:
	{
 		if (skipdoall('p000e0381')) break p000e0381;
 		if (in_response)
		{
			if (!CNDverb(121)) break p000e0381;
			if (!CNDnoun1(140)) break p000e0381;
 		}
 		ACCwriteln(231);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ RECOLECTOR
	p000e0382:
	{
 		if (skipdoall('p000e0382')) break p000e0382;
 		if (in_response)
		{
			if (!CNDnoun1(165)) break p000e0382;
 		}
		if (!CNDat(68)) break p000e0382;
 		ACCclear(0);
 		ACCgoto(119);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// _ RECOLECTOR
	p000e0383:
	{
 		if (skipdoall('p000e0383')) break p000e0383;
 		if (in_response)
		{
			if (!CNDnoun1(165)) break p000e0383;
 		}
		if (!CNDat(119)) break p000e0383;
		if (!CNDabsent(0)) break p000e0383;
 		ACCset(0);
		{}

	}

	// _ RECOLECTOR
	p000e0384:
	{
 		if (skipdoall('p000e0384')) break p000e0384;
 		if (in_response)
		{
			if (!CNDnoun1(165)) break p000e0384;
 		}
		if (!CNDat(119)) break p000e0384;
		if (!CNDozero(0,20)) break p000e0384;
 		ACCset(0);
		{}

	}

	// _ RECOLECTOR
	p000e0385:
	{
 		if (skipdoall('p000e0385')) break p000e0385;
 		if (in_response)
		{
			if (!CNDnoun1(165)) break p000e0385;
 		}
		if (!CNDat(119)) break p000e0385;
		if (!CNDobjfound(20,68)) break p000e0385;
 		ACCclear(0);
		{}

	}

	// _ RECOLECTOR
	p000e0386:
	{
 		if (skipdoall('p000e0386')) break p000e0386;
 		if (in_response)
		{
			if (!CNDnoun1(165)) break p000e0386;
 		}
		if (!CNDat(119)) break p000e0386;
 		ACCcls();
 		ACCgoto(68);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// _ RECOLECTOR
	p000e0387:
	{
 		if (skipdoall('p000e0387')) break p000e0387;
 		if (in_response)
		{
			if (!CNDnoun1(165)) break p000e0387;
 		}
 		ACCwriteln(232);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ MAGIA
	p000e0388:
	{
 		if (skipdoall('p000e0388')) break p000e0388;
 		if (in_response)
		{
			if (!CNDnoun1(154)) break p000e0388;
 		}
		if (!CNDat(68)) break p000e0388;
 		ACCclear(0);
 		ACCgoto(101);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// _ MAGIA
	p000e0389:
	{
 		if (skipdoall('p000e0389')) break p000e0389;
 		if (in_response)
		{
			if (!CNDnoun1(154)) break p000e0389;
 		}
		if (!CNDat(101)) break p000e0389;
		if (!CNDcarried(25)) break p000e0389;
 		ACCplace(25,101);
		{}

	}

	// _ MAGIA
	p000e0390:
	{
 		if (skipdoall('p000e0390')) break p000e0390;
 		if (in_response)
		{
			if (!CNDnoun1(154)) break p000e0390;
 		}
		if (!CNDat(101)) break p000e0390;
		if (!CNDnotcarr(0)) break p000e0390;
 		ACCset(0);
		{}

	}

	// _ MAGIA
	p000e0391:
	{
 		if (skipdoall('p000e0391')) break p000e0391;
 		if (in_response)
		{
			if (!CNDnoun1(154)) break p000e0391;
 		}
		if (!CNDat(101)) break p000e0391;
		if (!CNDpresent(0)) break p000e0391;
		if (!CNDozero(0,20)) break p000e0391;
 		ACCset(0);
		{}

	}

	// _ MAGIA
	p000e0392:
	{
 		if (skipdoall('p000e0392')) break p000e0392;
 		if (in_response)
		{
			if (!CNDnoun1(154)) break p000e0392;
 		}
		if (!CNDat(101)) break p000e0392;
		if (!CNDobjfound(20,68)) break p000e0392;
 		ACCclear(0);
		{}

	}

	// _ MAGIA
	p000e0393:
	{
 		if (skipdoall('p000e0393')) break p000e0393;
 		if (in_response)
		{
			if (!CNDnoun1(154)) break p000e0393;
 		}
		if (!CNDat(101)) break p000e0393;
 		ACCgoto(68);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// _ MAGIA
	p000e0394:
	{
 		if (skipdoall('p000e0394')) break p000e0394;
 		if (in_response)
		{
			if (!CNDnoun1(154)) break p000e0394;
 		}
 		ACCwriteln(233);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// XYZZY _
	p000e0395:
	{
 		if (skipdoall('p000e0395')) break p000e0395;
 		if (in_response)
		{
			if (!CNDverb(82)) break p000e0395;
 		}
		if (!CNDat(33)) break p000e0395;
 		ACCclear(0);
 		ACCgoto(119);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// XYZZY _
	p000e0396:
	{
 		if (skipdoall('p000e0396')) break p000e0396;
 		if (in_response)
		{
			if (!CNDverb(82)) break p000e0396;
 		}
		if (!CNDat(119)) break p000e0396;
		if (!CNDabsent(0)) break p000e0396;
 		ACCset(0);
		{}

	}

	// XYZZY _
	p000e0397:
	{
 		if (skipdoall('p000e0397')) break p000e0397;
 		if (in_response)
		{
			if (!CNDverb(82)) break p000e0397;
 		}
		if (!CNDat(119)) break p000e0397;
		if (!CNDozero(0,20)) break p000e0397;
 		ACCset(0);
		{}

	}

	// XYZZY _
	p000e0398:
	{
 		if (skipdoall('p000e0398')) break p000e0398;
 		if (in_response)
		{
			if (!CNDverb(82)) break p000e0398;
 		}
		if (!CNDat(119)) break p000e0398;
		if (!CNDobjfound(20,33)) break p000e0398;
 		ACCclear(0);
		{}

	}

	// XYZZY _
	p000e0399:
	{
 		if (skipdoall('p000e0399')) break p000e0399;
 		if (in_response)
		{
			if (!CNDverb(82)) break p000e0399;
 		}
		if (!CNDat(119)) break p000e0399;
 		ACCcls();
 		ACCgoto(33);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// XYZZY _
	p000e0400:
	{
 		if (skipdoall('p000e0400')) break p000e0400;
 		if (in_response)
		{
			if (!CNDverb(82)) break p000e0400;
 		}
 		ACCwriteln(234);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ PLOVE
	p000e0401:
	{
 		if (skipdoall('p000e0401')) break p000e0401;
 		if (in_response)
		{
			if (!CNDnoun1(163)) break p000e0401;
 		}
 		ACCwriteln(235);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SALUDA _
	p000e0402:
	{
 		if (skipdoall('p000e0402')) break p000e0402;
 		if (in_response)
		{
			if (!CNDverb(113)) break p000e0402;
 		}
 		ACCwrite(236);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0403:
	{
 		if (skipdoall('p000e0403')) break p000e0403;
		if (!CNDat(76)) break p000e0403;
 		ACCclear(117);
 		ACCwrite(237);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0404:
	{
 		if (skipdoall('p000e0404')) break p000e0404;
		if (!CNDat(124)) break p000e0404;
 		ACCset(255);
 		ACCpicture(1);
		{}

	}

	// _ _
	p000e0405:
	{
 		if (skipdoall('p000e0405')) break p000e0405;
		if (!CNDat(124)) break p000e0405;
 		ACCgoto(125);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0406:
	{
 		if (skipdoall('p000e0406')) break p000e0406;
 		ACChook(238);
		if (done_flag) break pro000_restart;
		{}

	}

	//  _
	p000e0407:
	{
 		if (skipdoall('p000e0407')) break p000e0407;
 		if (in_response)
		{
			if (!CNDverb(14)) break p000e0407;
 		}
 		ACCinven();
		break pro000_restart;
		{}

	}

	// ENTRA _
	p000e0408:
	{
 		if (skipdoall('p000e0408')) break p000e0408;
 		if (in_response)
		{
			if (!CNDverb(12)) break p000e0408;
 		}
		if (!CNDnoteq(51,255)) break p000e0408;
		if (!CNDpresent(getFlag(51))) break p000e0408;
		if (!CNDonotzero(getFlag(51),7)) break p000e0408;
 		ACCgoto(getFlag(51));
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// SENTAR _
	p000e0409:
	{
 		if (skipdoall('p000e0409')) break p000e0409;
 		if (in_response)
		{
			if (!CNDverb(23)) break p000e0409;
 		}
 		ACCwriteln(239);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTARSE _
	p000e0410:
	{
 		if (skipdoall('p000e0410')) break p000e0410;
 		if (in_response)
		{
			if (!CNDverb(53)) break p000e0410;
 		}
 		ACCwriteln(240);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ALUMBRA _
	p000e0411:
	{
 		if (skipdoall('p000e0411')) break p000e0411;
 		if (in_response)
		{
			if (!CNDverb(85)) break p000e0411;
 		}
 		ACCwriteln(241);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// REGISTRARS _
	p000e0412:
	{
 		if (skipdoall('p000e0412')) break p000e0412;
 		if (in_response)
		{
			if (!CNDverb(84)) break p000e0412;
 		}
 		ACCwriteln(242);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// MATARSE _
	p000e0413:
	{
 		if (skipdoall('p000e0413')) break p000e0413;
 		if (in_response)
		{
			if (!CNDverb(81)) break p000e0413;
 		}
 		ACCwriteln(243);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LAVARSE _
	p000e0414:
	{
 		if (skipdoall('p000e0414')) break p000e0414;
 		if (in_response)
		{
			if (!CNDverb(88)) break p000e0414;
 		}
 		ACCwriteln(244);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// XYZZY _
	p000e0415:
	{
 		if (skipdoall('p000e0415')) break p000e0415;
 		if (in_response)
		{
			if (!CNDverb(82)) break p000e0415;
 		}
 		ACCwriteln(245);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABANDONA _
	p000e0416:
	{
 		if (skipdoall('p000e0416')) break p000e0416;
 		if (in_response)
		{
			if (!CNDverb(25)) break p000e0416;
 		}
 		ACCquit();
 		function anykey00024() 
		{
 		ACCturns();
 		ACCend();
		return;
		}
 		waitKey(anykey00024);
		done_flag=true;
		break pro000_restart;
		{}

	}

	// GRABA _
	p000e0417:
	{
 		if (skipdoall('p000e0417')) break p000e0417;
 		if (in_response)
		{
			if (!CNDverb(26)) break p000e0417;
 		}
 		ACCsave();
		break pro000_restart;
		{}

	}

	// CARGA _
	p000e0418:
	{
 		if (skipdoall('p000e0418')) break p000e0418;
 		if (in_response)
		{
			if (!CNDverb(27)) break p000e0418;
 		}
 		ACCload();
		break pro000_restart;
		{}

	}

	// GRABARAM _
	p000e0419:
	{
 		if (skipdoall('p000e0419')) break p000e0419;
 		if (in_response)
		{
			if (!CNDverb(28)) break p000e0419;
 		}
 		ACCramsave();
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// CARGARAM _
	p000e0420:
	{
 		if (skipdoall('p000e0420')) break p000e0420;
 		if (in_response)
		{
			if (!CNDverb(29)) break p000e0420;
 		}
 		ACCramload(255);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// TRANSCRIP _
	p000e0421:
	{
 		if (skipdoall('p000e0421')) break p000e0421;
 		if (in_response)
		{
			if (!CNDverb(68)) break p000e0421;
 		}
 		ACCtranscript(1);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR _
	p000e0422:
	{
 		if (skipdoall('p000e0422')) break p000e0422;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0422;
 		}
		if (!CNDprep(3)) break p000e0422;
 		ACCwhatox2(14);
		if (!CNDnoteq(14,255)) break p000e0422;
		if (!CNDonotzero(getFlag(14),2)) break p000e0422;
 		ACCsynonym(75,255);
		{}

	}

	// AGARR _
	p000e0423:
	{
 		if (skipdoall('p000e0423')) break p000e0423;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0423;
 		}
		if (!CNDeq(34,255)) break p000e0423;
		if (!CNDbnotzero(12,1)) break p000e0423;
 		ACCwriteln(246);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR _
	p000e0424:
	{
 		if (skipdoall('p000e0424')) break p000e0424;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0424;
 		}
		if (!CNDeq(34,255)) break p000e0424;
		if (!CNDbzero(12,1)) break p000e0424;
 		ACCwriteln(247);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR _
	p000e0425:
	{
 		if (skipdoall('p000e0425')) break p000e0425;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0425;
 		}
		if (!CNDnoteq(51,255)) break p000e0425;
		if (!CNDonotzero(getFlag(51),21)) break p000e0425;
 		ACCwriteln(248);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGARR _
	p000e0426:
	{
 		if (skipdoall('p000e0426')) break p000e0426;
 		if (in_response)
		{
			if (!CNDverb(20)) break p000e0426;
 		}
 		ACCautog();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0427:
	{
 		if (skipdoall('p000e0427')) break p000e0427;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0427;
 		}
		if (!CNDprep(4)) break p000e0427;
 		ACCwhatox2(14);
		if (!CNDnoteq(14,255)) break p000e0427;
		if (!CNDonotzero(getFlag(14),2)) break p000e0427;
 		ACCsynonym(74,255);
		{}

	}

	// DEJA _
	p000e0428:
	{
 		if (skipdoall('p000e0428')) break p000e0428;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0428;
 		}
		if (!CNDeq(34,255)) break p000e0428;
		if (!CNDbnotzero(12,1)) break p000e0428;
 		ACCwriteln(249);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0429:
	{
 		if (skipdoall('p000e0429')) break p000e0429;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0429;
 		}
		if (!CNDeq(34,255)) break p000e0429;
		if (!CNDbzero(12,1)) break p000e0429;
 		ACCwriteln(250);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DEJA _
	p000e0430:
	{
 		if (skipdoall('p000e0430')) break p000e0430;
 		if (in_response)
		{
			if (!CNDverb(21)) break p000e0430;
 		}
 		ACCautod();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0431:
	{
 		if (skipdoall('p000e0431')) break p000e0431;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0431;
 		}
 		ACCwhatox2(15);
		{}

	}

	// EXTRAE _
	p000e0432:
	{
 		if (skipdoall('p000e0432')) break p000e0432;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0432;
 		}
		if (!CNDeq(34,255)) break p000e0432;
		if (!CNDbzero(12,1)) break p000e0432;
 		ACCwriteln(251);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0433:
	{
 		if (skipdoall('p000e0433')) break p000e0433;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0433;
 		}
		if (!CNDeq(34,255)) break p000e0433;
		if (!CNDbnotzero(12,1)) break p000e0433;
 		ACCwriteln(252);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0434:
	{
 		if (skipdoall('p000e0434')) break p000e0434;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0434;
 		}
		if (!CNDnoteq(34,255)) break p000e0434;
		if (!CNDeq(51,255)) break p000e0434;
 		ACCwriteln(253);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0435:
	{
 		if (skipdoall('p000e0435')) break p000e0435;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0435;
 		}
		if (!CNDbzero(12,2)) break p000e0435;
		if (!CNDeq(44,255)) break p000e0435;
		if (!CNDbnotzero(12,1)) break p000e0435;
 		ACCwriteln(254);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0436:
	{
 		if (skipdoall('p000e0436')) break p000e0436;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0436;
 		}
		if (!CNDnoteq(51,255)) break p000e0436;
		if (!CNDworn(getFlag(51))) break p000e0436;
		if (!CNDonotzero(getFlag(51),1)) break p000e0436;
 		ACCwriteln(255);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0437:
	{
 		if (skipdoall('p000e0437')) break p000e0437;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0437;
 		}
		if (!CNDnoteq(51,255)) break p000e0437;
		if (!CNDeq(44,255)) break p000e0437;
		if (!CNDbzero(12,1)) break p000e0437;
 		ACCwriteln(256);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0438:
	{
 		if (skipdoall('p000e0438')) break p000e0438;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0438;
 		}
		if (!CNDnoteq(51,255)) break p000e0438;
		if (!CNDcarried(getFlag(51))) break p000e0438;
		if (!CNDeq(44,255)) break p000e0438;
		if (!CNDbnotzero(12,1)) break p000e0438;
 		ACCwriteln(257);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0439:
	{
 		if (skipdoall('p000e0439')) break p000e0439;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0439;
 		}
		if (!CNDeq(15,255)) break p000e0439;
 		ACCwriteln(258);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0440:
	{
 		if (skipdoall('p000e0440')) break p000e0440;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0440;
 		}
		if (!CNDnoteq(15,255)) break p000e0440;
		if (!CNDonotzero(getFlag(15),2)) break p000e0440;
		if (!CNDsame(51,15)) break p000e0440;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0441:
	{
 		if (skipdoall('p000e0441')) break p000e0441;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0441;
 		}
		if (!CNDnoteq(15,255)) break p000e0441;
		if (!CNDonotzero(getFlag(15),2)) break p000e0441;
		if (!CNDonotzero(getFlag(15),13)) break p000e0441;
		if (!CNDozero(getFlag(15),14)) break p000e0441;
		if (!CNDpresent(getFlag(15))) break p000e0441;
 		ACCwriteln(259);
 		ACCbreak();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0442:
	{
 		if (skipdoall('p000e0442')) break p000e0442;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0442;
 		}
		if (!CNDnoteq(15,255)) break p000e0442;
		if (!CNDonotzero(getFlag(15),2)) break p000e0442;
		if (!CNDonotzero(getFlag(15),9)) break p000e0442;
		if (!CNDozero(getFlag(15),10)) break p000e0442;
		if (!CNDpresent(getFlag(15))) break p000e0442;
 		ACCwriteln(260);
 		ACCbreak();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0443:
	{
 		if (skipdoall('p000e0443')) break p000e0443;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0443;
 		}
		if (!CNDnoteq(15,255)) break p000e0443;
		if (!CNDonotzero(getFlag(15),2)) break p000e0443;
		if (!CNDabsent(getFlag(15))) break p000e0443;
 		ACCwriteln(261);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0444:
	{
 		if (skipdoall('p000e0444')) break p000e0444;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0444;
 		}
		if (!CNDnoteq(15,255)) break p000e0444;
		if (!CNDonotzero(getFlag(15),2)) break p000e0444;
		if (!CNDabsent(getFlag(15))) break p000e0444;
 		ACCwriteln(262);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0445:
	{
 		if (skipdoall('p000e0445')) break p000e0445;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0445;
 		}
		if (!CNDnoteq(15,255)) break p000e0445;
		if (!CNDonotzero(getFlag(15),2)) break p000e0445;
		if (!CNDpresent(getFlag(15))) break p000e0445;
 		ACCautot(getFlag(15));
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0446:
	{
 		if (skipdoall('p000e0446')) break p000e0446;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0446;
 		}
		if (!CNDnoteq(15,255)) break p000e0446;
		if (!CNDonotzero(getFlag(15),18)) break p000e0446;
		if (!CNDpresent(getFlag(15))) break p000e0446;
 		ACCautot(getFlag(15));
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXTRAE _
	p000e0447:
	{
 		if (skipdoall('p000e0447')) break p000e0447;
 		if (in_response)
		{
			if (!CNDverb(75)) break p000e0447;
 		}
		if (!CNDnoteq(15,255)) break p000e0447;
 		ACCwriteln(263);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0448:
	{
 		if (skipdoall('p000e0448')) break p000e0448;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0448;
 		}
 		ACCwhatox2(15);
		{}

	}

	// ECHA _
	p000e0449:
	{
 		if (skipdoall('p000e0449')) break p000e0449;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0449;
 		}
		if (!CNDeq(34,255)) break p000e0449;
		if (!CNDbzero(12,1)) break p000e0449;
 		ACCwriteln(264);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0450:
	{
 		if (skipdoall('p000e0450')) break p000e0450;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0450;
 		}
		if (!CNDeq(34,255)) break p000e0450;
		if (!CNDbnotzero(12,1)) break p000e0450;
 		ACCwriteln(265);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0451:
	{
 		if (skipdoall('p000e0451')) break p000e0451;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0451;
 		}
		if (!CNDnoteq(34,255)) break p000e0451;
		if (!CNDeq(51,255)) break p000e0451;
 		ACCwriteln(266);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0452:
	{
 		if (skipdoall('p000e0452')) break p000e0452;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0452;
 		}
		if (!CNDbzero(12,2)) break p000e0452;
		if (!CNDeq(44,255)) break p000e0452;
		if (!CNDbnotzero(12,1)) break p000e0452;
 		ACCwriteln(267);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0453:
	{
 		if (skipdoall('p000e0453')) break p000e0453;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0453;
 		}
		if (!CNDnoteq(51,255)) break p000e0453;
		if (!CNDworn(getFlag(51))) break p000e0453;
		if (!CNDonotzero(getFlag(51),1)) break p000e0453;
 		ACCwriteln(268);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0454:
	{
 		if (skipdoall('p000e0454')) break p000e0454;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0454;
 		}
		if (!CNDnoteq(51,255)) break p000e0454;
		if (!CNDnotcarr(getFlag(51))) break p000e0454;
 		ACCwriteln(269);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0455:
	{
 		if (skipdoall('p000e0455')) break p000e0455;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0455;
 		}
		if (!CNDnoteq(51,255)) break p000e0455;
		if (!CNDcarried(getFlag(51))) break p000e0455;
		if (!CNDeq(44,255)) break p000e0455;
		if (!CNDbzero(12,1)) break p000e0455;
 		ACCwriteln(270);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0456:
	{
 		if (skipdoall('p000e0456')) break p000e0456;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0456;
 		}
		if (!CNDnoteq(51,255)) break p000e0456;
		if (!CNDcarried(getFlag(51))) break p000e0456;
		if (!CNDeq(44,255)) break p000e0456;
		if (!CNDbnotzero(12,1)) break p000e0456;
 		ACCwriteln(271);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0457:
	{
 		if (skipdoall('p000e0457')) break p000e0457;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0457;
 		}
		if (!CNDnoteq(51,255)) break p000e0457;
		if (!CNDcarried(getFlag(51))) break p000e0457;
		if (!CNDnoteq(44,255)) break p000e0457;
		if (!CNDeq(15,255)) break p000e0457;
 		ACCwriteln(272);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0458:
	{
 		if (skipdoall('p000e0458')) break p000e0458;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0458;
 		}
		if (!CNDnoteq(15,255)) break p000e0458;
		if (!CNDonotzero(getFlag(15),2)) break p000e0458;
		if (!CNDsame(51,15)) break p000e0458;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0459:
	{
 		if (skipdoall('p000e0459')) break p000e0459;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0459;
 		}
		if (!CNDnoteq(15,255)) break p000e0459;
		if (!CNDonotzero(getFlag(15),18)) break p000e0459;
		if (!CNDsame(51,15)) break p000e0459;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0460:
	{
 		if (skipdoall('p000e0460')) break p000e0460;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0460;
 		}
		if (!CNDnoteq(51,255)) break p000e0460;
		if (!CNDcarried(getFlag(51))) break p000e0460;
		if (!CNDnoteq(44,255)) break p000e0460;
		if (!CNDnoteq(15,255)) break p000e0460;
		if (!CNDozero(getFlag(15),2)) break p000e0460;
		if (!CNDozero(getFlag(15),18)) break p000e0460;
		if (!CNDpresent(getFlag(15))) break p000e0460;
 		ACCwriteln(273);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0461:
	{
 		if (skipdoall('p000e0461')) break p000e0461;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0461;
 		}
		if (!CNDnoteq(51,255)) break p000e0461;
		if (!CNDcarried(getFlag(51))) break p000e0461;
		if (!CNDnoteq(44,255)) break p000e0461;
		if (!CNDnoteq(15,255)) break p000e0461;
		if (!CNDonotzero(getFlag(15),2)) break p000e0461;
		if (!CNDabsent(getFlag(15))) break p000e0461;
 		ACCwriteln(274);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0462:
	{
 		if (skipdoall('p000e0462')) break p000e0462;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0462;
 		}
		if (!CNDnoteq(51,255)) break p000e0462;
		if (!CNDcarried(getFlag(51))) break p000e0462;
		if (!CNDnoteq(44,255)) break p000e0462;
		if (!CNDnoteq(15,255)) break p000e0462;
		if (!CNDonotzero(getFlag(15),18)) break p000e0462;
		if (!CNDabsent(getFlag(15))) break p000e0462;
 		ACCwriteln(275);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0463:
	{
 		if (skipdoall('p000e0463')) break p000e0463;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0463;
 		}
		if (!CNDnoteq(51,255)) break p000e0463;
		if (!CNDcarried(getFlag(51))) break p000e0463;
		if (!CNDnoteq(44,255)) break p000e0463;
		if (!CNDnoteq(15,255)) break p000e0463;
		if (!CNDonotzero(getFlag(15),2)) break p000e0463;
		if (!CNDpresent(getFlag(15))) break p000e0463;
		if (!CNDonotzero(getFlag(15),13)) break p000e0463;
		if (!CNDozero(getFlag(15),14)) break p000e0463;
 		ACCwriteln(276);
 		ACCbreak();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0464:
	{
 		if (skipdoall('p000e0464')) break p000e0464;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0464;
 		}
		if (!CNDnoteq(51,255)) break p000e0464;
		if (!CNDcarried(getFlag(51))) break p000e0464;
		if (!CNDnoteq(44,255)) break p000e0464;
		if (!CNDnoteq(15,255)) break p000e0464;
		if (!CNDonotzero(getFlag(15),2)) break p000e0464;
		if (!CNDpresent(getFlag(15))) break p000e0464;
		if (!CNDonotzero(getFlag(15),9)) break p000e0464;
		if (!CNDozero(getFlag(15),10)) break p000e0464;
 		ACCwriteln(277);
 		ACCbreak();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0465:
	{
 		if (skipdoall('p000e0465')) break p000e0465;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0465;
 		}
		if (!CNDnoteq(51,255)) break p000e0465;
		if (!CNDcarried(getFlag(51))) break p000e0465;
		if (!CNDnoteq(44,255)) break p000e0465;
		if (!CNDnoteq(15,255)) break p000e0465;
		if (!CNDonotzero(getFlag(15),2)) break p000e0465;
		if (!CNDpresent(getFlag(15))) break p000e0465;
 		ACCautop(getFlag(15));
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ECHA _
	p000e0466:
	{
 		if (skipdoall('p000e0466')) break p000e0466;
 		if (in_response)
		{
			if (!CNDverb(74)) break p000e0466;
 		}
		if (!CNDnoteq(51,255)) break p000e0466;
		if (!CNDcarried(getFlag(51))) break p000e0466;
		if (!CNDnoteq(44,255)) break p000e0466;
		if (!CNDnoteq(15,255)) break p000e0466;
		if (!CNDonotzero(getFlag(15),18)) break p000e0466;
		if (!CNDpresent(getFlag(15))) break p000e0466;
 		ACCautop(getFlag(15));
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR _
	p000e0467:
	{
 		if (skipdoall('p000e0467')) break p000e0467;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0467;
 		}
		if (!CNDeq(34,255)) break p000e0467;
		if (!CNDbnotzero(12,1)) break p000e0467;
 		ACCwriteln(278);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR _
	p000e0468:
	{
 		if (skipdoall('p000e0468')) break p000e0468;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0468;
 		}
		if (!CNDeq(34,255)) break p000e0468;
		if (!CNDbzero(12,1)) break p000e0468;
 		ACCwriteln(279);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESVESTIR _
	p000e0469:
	{
 		if (skipdoall('p000e0469')) break p000e0469;
 		if (in_response)
		{
			if (!CNDverb(22)) break p000e0469;
 		}
 		ACCautor();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON _
	p000e0470:
	{
 		if (skipdoall('p000e0470')) break p000e0470;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0470;
 		}
		if (!CNDeq(34,255)) break p000e0470;
		if (!CNDbnotzero(12,1)) break p000e0470;
 		ACCwriteln(280);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PON _
	p000e0471:
	{
 		if (skipdoall('p000e0471')) break p000e0471;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0471;
 		}
		if (!CNDeq(34,255)) break p000e0471;
		if (!CNDbzero(12,1)) break p000e0471;
 		ACCwriteln(281);
		{}

	}

	// PON _
	p000e0472:
	{
 		if (skipdoall('p000e0472')) break p000e0472;
 		if (in_response)
		{
			if (!CNDverb(71)) break p000e0472;
 		}
 		ACCautow();
		if (!success) break pro000_restart;
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0473:
	{
 		if (skipdoall('p000e0473')) break p000e0473;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0473;
 		}
		if (!CNDprep(3)) break p000e0473;
		if (!CNDeq(34,255)) break p000e0473;
		if (!CNDbnotzero(12,1)) break p000e0473;
 		ACCwriteln(282);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0474:
	{
 		if (skipdoall('p000e0474')) break p000e0474;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0474;
 		}
		if (!CNDprep(3)) break p000e0474;
		if (!CNDeq(34,255)) break p000e0474;
		if (!CNDbzero(12,1)) break p000e0474;
 		ACCwriteln(283);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0475:
	{
 		if (skipdoall('p000e0475')) break p000e0475;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0475;
 		}
		if (!CNDprep(3)) break p000e0475;
		if (!CNDnoteq(34,255)) break p000e0475;
		if (!CNDnoteq(51,255)) break p000e0475;
		if (!CNDonotzero(getFlag(51),3)) break p000e0475;
		if (!CNDpresent(getFlag(51))) break p000e0475;
 		ACCwriteln(284);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0476:
	{
 		if (skipdoall('p000e0476')) break p000e0476;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0476;
 		}
		if (!CNDprep(3)) break p000e0476;
		if (!CNDnoteq(34,255)) break p000e0476;
		if (!CNDnoteq(51,255)) break p000e0476;
		if (!CNDonotzero(getFlag(51),3)) break p000e0476;
		if (!CNDabsent(getFlag(51))) break p000e0476;
 		ACCwriteln(285);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0477:
	{
 		if (skipdoall('p000e0477')) break p000e0477;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0477;
 		}
		if (!CNDprep(3)) break p000e0477;
		if (!CNDnoteq(34,255)) break p000e0477;
		if (!CNDeq(51,255)) break p000e0477;
 		ACCwriteln(286);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0478:
	{
 		if (skipdoall('p000e0478')) break p000e0478;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0478;
 		}
		if (!CNDprep(3)) break p000e0478;
		if (!CNDnoteq(51,255)) break p000e0478;
		if (!CNDpresent(getFlag(51))) break p000e0478;
 		ACCwriteln(287);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0479:
	{
 		if (skipdoall('p000e0479')) break p000e0479;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0479;
 		}
		if (!CNDprep(3)) break p000e0479;
		if (!CNDnoteq(51,255)) break p000e0479;
		if (!CNDabsent(getFlag(51))) break p000e0479;
 		ACCwriteln(288);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0480:
	{
 		if (skipdoall('p000e0480')) break p000e0480;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0480;
 		}
		if (!CNDprep(4)) break p000e0480;
		if (!CNDeq(34,255)) break p000e0480;
		if (!CNDbnotzero(12,1)) break p000e0480;
 		ACCwriteln(289);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0481:
	{
 		if (skipdoall('p000e0481')) break p000e0481;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0481;
 		}
		if (!CNDprep(4)) break p000e0481;
		if (!CNDeq(34,255)) break p000e0481;
		if (!CNDbzero(12,1)) break p000e0481;
 		ACCwriteln(290);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0482:
	{
 		if (skipdoall('p000e0482')) break p000e0482;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0482;
 		}
		if (!CNDlt(34,12)) break p000e0482;
 		ACCwriteln(291);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0483:
	{
 		if (skipdoall('p000e0483')) break p000e0483;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0483;
 		}
		if (!CNDeq(34,255)) break p000e0483;
		if (!CNDbnotzero(12,1)) break p000e0483;
 		ACCwriteln(292);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// D _
	p000e0484:
	{
 		if (skipdoall('p000e0484')) break p000e0484;
 		if (in_response)
		{
			if (!CNDverb(24)) break p000e0484;
 		}
		if (!CNDeq(34,255)) break p000e0484;
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0485:
	{
 		if (skipdoall('p000e0485')) break p000e0485;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0485;
 		}
		if (!CNDeq(34,255)) break p000e0485;
		if (!CNDbnotzero(12,1)) break p000e0485;
 		ACCwriteln(293);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0486:
	{
 		if (skipdoall('p000e0486')) break p000e0486;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0486;
 		}
		if (!CNDeq(34,255)) break p000e0486;
		if (!CNDbzero(12,1)) break p000e0486;
 		ACCwriteln(294);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0487:
	{
 		if (skipdoall('p000e0487')) break p000e0487;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0487;
 		}
		if (!CNDnoteq(34,255)) break p000e0487;
		if (!CNDnoteq(51,255)) break p000e0487;
		if (!CNDonotzero(getFlag(51),3)) break p000e0487;
		if (!CNDpresent(getFlag(51))) break p000e0487;
 		ACCwriteln(295);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0488:
	{
 		if (skipdoall('p000e0488')) break p000e0488;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0488;
 		}
		if (!CNDnoteq(34,255)) break p000e0488;
		if (!CNDnoteq(51,255)) break p000e0488;
		if (!CNDonotzero(getFlag(51),3)) break p000e0488;
		if (!CNDabsent(getFlag(51))) break p000e0488;
 		ACCwriteln(296);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0489:
	{
 		if (skipdoall('p000e0489')) break p000e0489;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0489;
 		}
		if (!CNDnoteq(34,255)) break p000e0489;
		if (!CNDeq(51,255)) break p000e0489;
 		ACCwriteln(297);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0490:
	{
 		if (skipdoall('p000e0490')) break p000e0490;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0490;
 		}
		if (!CNDnoteq(51,255)) break p000e0490;
		if (!CNDpresent(getFlag(51))) break p000e0490;
 		ACCwriteln(298);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDE _
	p000e0491:
	{
 		if (skipdoall('p000e0491')) break p000e0491;
 		if (in_response)
		{
			if (!CNDverb(91)) break p000e0491;
 		}
		if (!CNDnoteq(51,255)) break p000e0491;
		if (!CNDabsent(getFlag(51))) break p000e0491;
 		ACCwriteln(299);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLORA _
	p000e0492:
	{
 		if (skipdoall('p000e0492')) break p000e0492;
 		if (in_response)
		{
			if (!CNDverb(93)) break p000e0492;
 		}
 		ACCwriteln(300);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACORDARSE _
	p000e0493:
	{
 		if (skipdoall('p000e0493')) break p000e0493;
 		if (in_response)
		{
			if (!CNDverb(94)) break p000e0493;
 		}
 		ACCwriteln(301);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SALUDA _
	p000e0494:
	{
 		if (skipdoall('p000e0494')) break p000e0494;
 		if (in_response)
		{
			if (!CNDverb(113)) break p000e0494;
 		}
 		ACCwriteln(302);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCONDERSE _
	p000e0495:
	{
 		if (skipdoall('p000e0495')) break p000e0495;
 		if (in_response)
		{
			if (!CNDverb(92)) break p000e0495;
 		}
 		ACCwriteln(303);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0496:
	{
 		if (skipdoall('p000e0496')) break p000e0496;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0496;
 		}
		if (!CNDeq(34,255)) break p000e0496;
		if (!CNDbnotzero(12,1)) break p000e0496;
 		ACCwriteln(304);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0497:
	{
 		if (skipdoall('p000e0497')) break p000e0497;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0497;
 		}
		if (!CNDeq(34,255)) break p000e0497;
		if (!CNDbzero(12,1)) break p000e0497;
 		ACCwriteln(305);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0498:
	{
 		if (skipdoall('p000e0498')) break p000e0498;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0498;
 		}
		if (!CNDnoteq(34,255)) break p000e0498;
		if (!CNDnoteq(51,255)) break p000e0498;
		if (!CNDonotzero(getFlag(51),3)) break p000e0498;
		if (!CNDpresent(getFlag(51))) break p000e0498;
 		ACCwriteln(306);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0499:
	{
 		if (skipdoall('p000e0499')) break p000e0499;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0499;
 		}
		if (!CNDnoteq(34,255)) break p000e0499;
		if (!CNDnoteq(51,255)) break p000e0499;
		if (!CNDonotzero(getFlag(51),21)) break p000e0499;
		if (!CNDpresent(getFlag(51))) break p000e0499;
 		ACCwriteln(307);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0500:
	{
 		if (skipdoall('p000e0500')) break p000e0500;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0500;
 		}
		if (!CNDnoteq(34,255)) break p000e0500;
		if (!CNDnoteq(51,255)) break p000e0500;
		if (!CNDonotzero(getFlag(51),3)) break p000e0500;
		if (!CNDabsent(getFlag(51))) break p000e0500;
 		ACCwriteln(308);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0501:
	{
 		if (skipdoall('p000e0501')) break p000e0501;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0501;
 		}
		if (!CNDnoteq(34,255)) break p000e0501;
		if (!CNDnoteq(51,255)) break p000e0501;
		if (!CNDonotzero(getFlag(51),21)) break p000e0501;
		if (!CNDabsent(getFlag(51))) break p000e0501;
 		ACCwriteln(309);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0502:
	{
 		if (skipdoall('p000e0502')) break p000e0502;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0502;
 		}
		if (!CNDnoteq(34,255)) break p000e0502;
		if (!CNDeq(51,255)) break p000e0502;
 		ACCwriteln(310);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0503:
	{
 		if (skipdoall('p000e0503')) break p000e0503;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0503;
 		}
		if (!CNDnoteq(51,255)) break p000e0503;
		if (!CNDpresent(getFlag(51))) break p000e0503;
 		ACCwriteln(311);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EMPUJA _
	p000e0504:
	{
 		if (skipdoall('p000e0504')) break p000e0504;
 		if (in_response)
		{
			if (!CNDverb(33)) break p000e0504;
 		}
		if (!CNDnoteq(51,255)) break p000e0504;
		if (!CNDabsent(getFlag(51))) break p000e0504;
 		ACCwriteln(312);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0505:
	{
 		if (skipdoall('p000e0505')) break p000e0505;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0505;
 		}
		if (!CNDeq(34,255)) break p000e0505;
		if (!CNDbnotzero(12,1)) break p000e0505;
 		ACCwriteln(313);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0506:
	{
 		if (skipdoall('p000e0506')) break p000e0506;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0506;
 		}
		if (!CNDeq(34,255)) break p000e0506;
		if (!CNDbzero(12,1)) break p000e0506;
 		ACCwriteln(314);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0507:
	{
 		if (skipdoall('p000e0507')) break p000e0507;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0507;
 		}
		if (!CNDnoteq(34,255)) break p000e0507;
		if (!CNDnoteq(51,255)) break p000e0507;
		if (!CNDonotzero(getFlag(51),3)) break p000e0507;
		if (!CNDpresent(getFlag(51))) break p000e0507;
 		ACCwriteln(315);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0508:
	{
 		if (skipdoall('p000e0508')) break p000e0508;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0508;
 		}
		if (!CNDnoteq(34,255)) break p000e0508;
		if (!CNDnoteq(51,255)) break p000e0508;
		if (!CNDonotzero(getFlag(51),3)) break p000e0508;
		if (!CNDabsent(getFlag(51))) break p000e0508;
 		ACCwriteln(316);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0509:
	{
 		if (skipdoall('p000e0509')) break p000e0509;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0509;
 		}
		if (!CNDnoteq(34,255)) break p000e0509;
		if (!CNDeq(51,255)) break p000e0509;
 		ACCwriteln(317);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0510:
	{
 		if (skipdoall('p000e0510')) break p000e0510;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0510;
 		}
		if (!CNDnoteq(51,255)) break p000e0510;
		if (!CNDpresent(getFlag(51))) break p000e0510;
 		ACCwriteln(318);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPLAZA _
	p000e0511:
	{
 		if (skipdoall('p000e0511')) break p000e0511;
 		if (in_response)
		{
			if (!CNDverb(110)) break p000e0511;
 		}
		if (!CNDnoteq(51,255)) break p000e0511;
		if (!CNDabsent(getFlag(51))) break p000e0511;
 		ACCwriteln(319);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0512:
	{
 		if (skipdoall('p000e0512')) break p000e0512;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0512;
 		}
		if (!CNDeq(34,255)) break p000e0512;
		if (!CNDbnotzero(12,1)) break p000e0512;
 		ACCwriteln(320);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0513:
	{
 		if (skipdoall('p000e0513')) break p000e0513;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0513;
 		}
		if (!CNDeq(34,255)) break p000e0513;
		if (!CNDbzero(12,1)) break p000e0513;
 		ACCwriteln(321);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0514:
	{
 		if (skipdoall('p000e0514')) break p000e0514;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0514;
 		}
		if (!CNDnoteq(51,255)) break p000e0514;
		if (!CNDonotzero(getFlag(51),3)) break p000e0514;
		if (!CNDpresent(getFlag(51))) break p000e0514;
 		ACCwriteln(322);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0515:
	{
 		if (skipdoall('p000e0515')) break p000e0515;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0515;
 		}
		if (!CNDnoteq(51,255)) break p000e0515;
		if (!CNDonotzero(getFlag(51),21)) break p000e0515;
		if (!CNDpresent(getFlag(51))) break p000e0515;
 		ACCwriteln(323);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0516:
	{
 		if (skipdoall('p000e0516')) break p000e0516;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0516;
 		}
		if (!CNDnoteq(51,255)) break p000e0516;
		if (!CNDonotzero(getFlag(51),3)) break p000e0516;
		if (!CNDabsent(getFlag(51))) break p000e0516;
 		ACCwriteln(324);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0517:
	{
 		if (skipdoall('p000e0517')) break p000e0517;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0517;
 		}
		if (!CNDnoteq(51,255)) break p000e0517;
		if (!CNDonotzero(getFlag(51),21)) break p000e0517;
		if (!CNDabsent(getFlag(51))) break p000e0517;
 		ACCwriteln(325);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0518:
	{
 		if (skipdoall('p000e0518')) break p000e0518;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0518;
 		}
		if (!CNDnoteq(34,255)) break p000e0518;
		if (!CNDeq(51,255)) break p000e0518;
 		ACCwriteln(326);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0519:
	{
 		if (skipdoall('p000e0519')) break p000e0519;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0519;
 		}
		if (!CNDnoteq(51,255)) break p000e0519;
		if (!CNDpresent(getFlag(51))) break p000e0519;
 		ACCwriteln(327);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GIRA _
	p000e0520:
	{
 		if (skipdoall('p000e0520')) break p000e0520;
 		if (in_response)
		{
			if (!CNDverb(35)) break p000e0520;
 		}
		if (!CNDnoteq(51,255)) break p000e0520;
		if (!CNDabsent(getFlag(51))) break p000e0520;
 		ACCwriteln(328);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0521:
	{
 		if (skipdoall('p000e0521')) break p000e0521;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0521;
 		}
		if (!CNDeq(34,255)) break p000e0521;
		if (!CNDbnotzero(12,1)) break p000e0521;
 		ACCwriteln(329);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0522:
	{
 		if (skipdoall('p000e0522')) break p000e0522;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0522;
 		}
		if (!CNDeq(34,255)) break p000e0522;
		if (!CNDbzero(12,1)) break p000e0522;
 		ACCwriteln(330);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0523:
	{
 		if (skipdoall('p000e0523')) break p000e0523;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0523;
 		}
		if (!CNDnoteq(51,255)) break p000e0523;
		if (!CNDonotzero(getFlag(51),3)) break p000e0523;
		if (!CNDpresent(getFlag(51))) break p000e0523;
 		ACCwriteln(331);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0524:
	{
 		if (skipdoall('p000e0524')) break p000e0524;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0524;
 		}
		if (!CNDnoteq(51,255)) break p000e0524;
		if (!CNDonotzero(getFlag(51),21)) break p000e0524;
		if (!CNDpresent(getFlag(51))) break p000e0524;
 		ACCwriteln(332);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0525:
	{
 		if (skipdoall('p000e0525')) break p000e0525;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0525;
 		}
		if (!CNDnoteq(51,255)) break p000e0525;
		if (!CNDonotzero(getFlag(51),3)) break p000e0525;
		if (!CNDabsent(getFlag(51))) break p000e0525;
 		ACCwriteln(333);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0526:
	{
 		if (skipdoall('p000e0526')) break p000e0526;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0526;
 		}
		if (!CNDnoteq(51,255)) break p000e0526;
		if (!CNDonotzero(getFlag(51),21)) break p000e0526;
		if (!CNDabsent(getFlag(51))) break p000e0526;
 		ACCwriteln(334);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0527:
	{
 		if (skipdoall('p000e0527')) break p000e0527;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0527;
 		}
		if (!CNDnoteq(34,255)) break p000e0527;
		if (!CNDeq(51,255)) break p000e0527;
 		ACCwriteln(335);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0528:
	{
 		if (skipdoall('p000e0528')) break p000e0528;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0528;
 		}
		if (!CNDnoteq(51,255)) break p000e0528;
		if (!CNDcarried(getFlag(51))) break p000e0528;
 		ACCwriteln(336);
 		ACCplace(getFlag(51),getFlag(38));
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARROJA _
	p000e0529:
	{
 		if (skipdoall('p000e0529')) break p000e0529;
 		if (in_response)
		{
			if (!CNDverb(32)) break p000e0529;
 		}
		if (!CNDnoteq(51,255)) break p000e0529;
		if (!CNDnotcarr(getFlag(51))) break p000e0529;
 		ACCwriteln(337);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUCHA _
	p000e0530:
	{
 		if (skipdoall('p000e0530')) break p000e0530;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0530;
 		}
		if (!CNDnoteq(51,255)) break p000e0530;
		if (!CNDonotzero(getFlag(51),3)) break p000e0530;
		if (!CNDpresent(getFlag(51))) break p000e0530;
 		ACCwriteln(338);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUCHA _
	p000e0531:
	{
 		if (skipdoall('p000e0531')) break p000e0531;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0531;
 		}
		if (!CNDnoteq(51,255)) break p000e0531;
		if (!CNDonotzero(getFlag(51),3)) break p000e0531;
		if (!CNDabsent(getFlag(51))) break p000e0531;
 		ACCwriteln(339);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUCHA _
	p000e0532:
	{
 		if (skipdoall('p000e0532')) break p000e0532;
 		if (in_response)
		{
			if (!CNDverb(37)) break p000e0532;
 		}
		if (!CNDeq(34,255)) break p000e0532;
 		ACCwriteln(340);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0533:
	{
 		if (skipdoall('p000e0533')) break p000e0533;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0533;
 		}
		if (!CNDeq(34,255)) break p000e0533;
		if (!CNDbnotzero(12,1)) break p000e0533;
 		ACCwriteln(341);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0534:
	{
 		if (skipdoall('p000e0534')) break p000e0534;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0534;
 		}
		if (!CNDeq(34,255)) break p000e0534;
		if (!CNDbzero(12,1)) break p000e0534;
 		ACCwriteln(342);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0535:
	{
 		if (skipdoall('p000e0535')) break p000e0535;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0535;
 		}
		if (!CNDnoteq(34,255)) break p000e0535;
		if (!CNDnoteq(51,255)) break p000e0535;
		if (!CNDonotzero(getFlag(51),3)) break p000e0535;
		if (!CNDpresent(getFlag(51))) break p000e0535;
 		ACCwriteln(343);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0536:
	{
 		if (skipdoall('p000e0536')) break p000e0536;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0536;
 		}
		if (!CNDnoteq(34,255)) break p000e0536;
		if (!CNDnoteq(51,255)) break p000e0536;
		if (!CNDonotzero(getFlag(51),21)) break p000e0536;
		if (!CNDpresent(getFlag(51))) break p000e0536;
 		ACCwriteln(344);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0537:
	{
 		if (skipdoall('p000e0537')) break p000e0537;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0537;
 		}
		if (!CNDnoteq(34,255)) break p000e0537;
		if (!CNDnoteq(51,255)) break p000e0537;
		if (!CNDonotzero(getFlag(51),3)) break p000e0537;
		if (!CNDabsent(getFlag(51))) break p000e0537;
 		ACCwriteln(345);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0538:
	{
 		if (skipdoall('p000e0538')) break p000e0538;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0538;
 		}
		if (!CNDnoteq(34,255)) break p000e0538;
		if (!CNDeq(51,255)) break p000e0538;
 		ACCwriteln(346);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0539:
	{
 		if (skipdoall('p000e0539')) break p000e0539;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0539;
 		}
		if (!CNDnoteq(51,255)) break p000e0539;
		if (!CNDpresent(getFlag(51))) break p000e0539;
		if (!CNDozero(getFlag(51),5)) break p000e0539;
 		ACCwriteln(347);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0540:
	{
 		if (skipdoall('p000e0540')) break p000e0540;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0540;
 		}
		if (!CNDnoteq(51,255)) break p000e0540;
		if (!CNDpresent(getFlag(51))) break p000e0540;
		if (!CNDonotzero(getFlag(51),5)) break p000e0540;
 		ACCwriteln(348);
 		ACCdestroy(getFlag(51));
 		ACCdone();
		break pro000_restart;
		{}

	}

	// COME _
	p000e0541:
	{
 		if (skipdoall('p000e0541')) break p000e0541;
 		if (in_response)
		{
			if (!CNDverb(38)) break p000e0541;
 		}
		if (!CNDnoteq(51,255)) break p000e0541;
		if (!CNDabsent(getFlag(51))) break p000e0541;
 		ACCwriteln(349);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0542:
	{
 		if (skipdoall('p000e0542')) break p000e0542;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0542;
 		}
		if (!CNDeq(34,255)) break p000e0542;
		if (!CNDbnotzero(12,1)) break p000e0542;
 		ACCwriteln(350);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0543:
	{
 		if (skipdoall('p000e0543')) break p000e0543;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0543;
 		}
		if (!CNDeq(34,255)) break p000e0543;
		if (!CNDbzero(12,1)) break p000e0543;
 		ACCwriteln(351);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0544:
	{
 		if (skipdoall('p000e0544')) break p000e0544;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0544;
 		}
		if (!CNDnoteq(34,255)) break p000e0544;
		if (!CNDnoteq(51,255)) break p000e0544;
		if (!CNDonotzero(getFlag(51),3)) break p000e0544;
		if (!CNDpresent(getFlag(51))) break p000e0544;
 		ACCwriteln(352);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0545:
	{
 		if (skipdoall('p000e0545')) break p000e0545;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0545;
 		}
		if (!CNDnoteq(34,255)) break p000e0545;
		if (!CNDnoteq(51,255)) break p000e0545;
		if (!CNDonotzero(getFlag(51),3)) break p000e0545;
		if (!CNDabsent(getFlag(51))) break p000e0545;
 		ACCwriteln(353);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0546:
	{
 		if (skipdoall('p000e0546')) break p000e0546;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0546;
 		}
		if (!CNDnoteq(34,255)) break p000e0546;
		if (!CNDeq(51,255)) break p000e0546;
 		ACCwriteln(354);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0547:
	{
 		if (skipdoall('p000e0547')) break p000e0547;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0547;
 		}
		if (!CNDnoteq(51,255)) break p000e0547;
		if (!CNDpresent(getFlag(51))) break p000e0547;
		if (!CNDozero(getFlag(51),6)) break p000e0547;
 		ACCwriteln(355);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0548:
	{
 		if (skipdoall('p000e0548')) break p000e0548;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0548;
 		}
		if (!CNDnoteq(51,255)) break p000e0548;
		if (!CNDpresent(getFlag(51))) break p000e0548;
		if (!CNDonotzero(getFlag(51),6)) break p000e0548;
 		ACCwriteln(356);
 		ACCdestroy(getFlag(51));
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BEBE _
	p000e0549:
	{
 		if (skipdoall('p000e0549')) break p000e0549;
 		if (in_response)
		{
			if (!CNDverb(39)) break p000e0549;
 		}
		if (!CNDnoteq(51,255)) break p000e0549;
		if (!CNDabsent(getFlag(51))) break p000e0549;
 		ACCwriteln(357);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CAGA _
	p000e0550:
	{
 		if (skipdoall('p000e0550')) break p000e0550;
 		if (in_response)
		{
			if (!CNDverb(47)) break p000e0550;
 		}
 		ACCwriteln(358);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0551:
	{
 		if (skipdoall('p000e0551')) break p000e0551;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0551;
 		}
		if (!CNDeq(34,255)) break p000e0551;
		if (!CNDbnotzero(12,1)) break p000e0551;
 		ACCwriteln(359);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0552:
	{
 		if (skipdoall('p000e0552')) break p000e0552;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0552;
 		}
		if (!CNDeq(34,255)) break p000e0552;
		if (!CNDbzero(12,1)) break p000e0552;
 		ACCwriteln(360);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0553:
	{
 		if (skipdoall('p000e0553')) break p000e0553;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0553;
 		}
		if (!CNDnoteq(34,255)) break p000e0553;
		if (!CNDnoteq(51,255)) break p000e0553;
		if (!CNDonotzero(getFlag(51),3)) break p000e0553;
		if (!CNDpresent(getFlag(51))) break p000e0553;
 		ACCwriteln(361);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0554:
	{
 		if (skipdoall('p000e0554')) break p000e0554;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0554;
 		}
		if (!CNDnoteq(34,255)) break p000e0554;
		if (!CNDnoteq(51,255)) break p000e0554;
		if (!CNDonotzero(getFlag(51),3)) break p000e0554;
		if (!CNDabsent(getFlag(51))) break p000e0554;
 		ACCwriteln(362);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0555:
	{
 		if (skipdoall('p000e0555')) break p000e0555;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0555;
 		}
		if (!CNDnoteq(34,255)) break p000e0555;
		if (!CNDeq(51,255)) break p000e0555;
 		ACCwriteln(363);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0556:
	{
 		if (skipdoall('p000e0556')) break p000e0556;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0556;
 		}
		if (!CNDnoteq(51,255)) break p000e0556;
		if (!CNDpresent(getFlag(51))) break p000e0556;
 		ACCwriteln(364);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCUPE _
	p000e0557:
	{
 		if (skipdoall('p000e0557')) break p000e0557;
 		if (in_response)
		{
			if (!CNDverb(48)) break p000e0557;
 		}
		if (!CNDnoteq(51,255)) break p000e0557;
		if (!CNDabsent(getFlag(51))) break p000e0557;
 		ACCwriteln(365);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0558:
	{
 		if (skipdoall('p000e0558')) break p000e0558;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0558;
 		}
		if (!CNDeq(34,255)) break p000e0558;
		if (!CNDbnotzero(12,1)) break p000e0558;
 		ACCwriteln(366);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0559:
	{
 		if (skipdoall('p000e0559')) break p000e0559;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0559;
 		}
		if (!CNDeq(34,255)) break p000e0559;
		if (!CNDbzero(12,1)) break p000e0559;
 		ACCwriteln(367);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0560:
	{
 		if (skipdoall('p000e0560')) break p000e0560;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0560;
 		}
		if (!CNDnoteq(34,255)) break p000e0560;
		if (!CNDnoteq(51,255)) break p000e0560;
		if (!CNDonotzero(getFlag(51),3)) break p000e0560;
		if (!CNDpresent(getFlag(51))) break p000e0560;
 		ACCwriteln(368);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0561:
	{
 		if (skipdoall('p000e0561')) break p000e0561;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0561;
 		}
		if (!CNDnoteq(34,255)) break p000e0561;
		if (!CNDnoteq(51,255)) break p000e0561;
		if (!CNDonotzero(getFlag(51),3)) break p000e0561;
		if (!CNDabsent(getFlag(51))) break p000e0561;
 		ACCwriteln(369);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0562:
	{
 		if (skipdoall('p000e0562')) break p000e0562;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0562;
 		}
		if (!CNDnoteq(34,255)) break p000e0562;
		if (!CNDeq(51,255)) break p000e0562;
 		ACCwriteln(370);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0563:
	{
 		if (skipdoall('p000e0563')) break p000e0563;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0563;
 		}
		if (!CNDnoteq(51,255)) break p000e0563;
		if (!CNDpresent(getFlag(51))) break p000e0563;
 		ACCwriteln(371);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACARICIA _
	p000e0564:
	{
 		if (skipdoall('p000e0564')) break p000e0564;
 		if (in_response)
		{
			if (!CNDverb(40)) break p000e0564;
 		}
		if (!CNDnoteq(51,255)) break p000e0564;
		if (!CNDabsent(getFlag(51))) break p000e0564;
 		ACCwriteln(372);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0565:
	{
 		if (skipdoall('p000e0565')) break p000e0565;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0565;
 		}
		if (!CNDeq(34,255)) break p000e0565;
		if (!CNDbnotzero(12,1)) break p000e0565;
 		ACCwriteln(373);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0566:
	{
 		if (skipdoall('p000e0566')) break p000e0566;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0566;
 		}
		if (!CNDeq(34,255)) break p000e0566;
		if (!CNDbzero(12,1)) break p000e0566;
 		ACCwriteln(374);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0567:
	{
 		if (skipdoall('p000e0567')) break p000e0567;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0567;
 		}
		if (!CNDnoteq(34,255)) break p000e0567;
		if (!CNDnoteq(51,255)) break p000e0567;
		if (!CNDonotzero(getFlag(51),3)) break p000e0567;
		if (!CNDpresent(getFlag(51))) break p000e0567;
 		ACCwriteln(375);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0568:
	{
 		if (skipdoall('p000e0568')) break p000e0568;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0568;
 		}
		if (!CNDnoteq(34,255)) break p000e0568;
		if (!CNDnoteq(51,255)) break p000e0568;
		if (!CNDonotzero(getFlag(51),3)) break p000e0568;
		if (!CNDabsent(getFlag(51))) break p000e0568;
 		ACCwriteln(376);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0569:
	{
 		if (skipdoall('p000e0569')) break p000e0569;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0569;
 		}
		if (!CNDnoteq(34,255)) break p000e0569;
		if (!CNDeq(51,255)) break p000e0569;
 		ACCwriteln(377);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0570:
	{
 		if (skipdoall('p000e0570')) break p000e0570;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0570;
 		}
		if (!CNDnoteq(51,255)) break p000e0570;
		if (!CNDpresent(getFlag(51))) break p000e0570;
		if (!CNDonotzero(getFlag(51),5)) break p000e0570;
 		ACCwriteln(378);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0571:
	{
 		if (skipdoall('p000e0571')) break p000e0571;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0571;
 		}
		if (!CNDnoteq(51,255)) break p000e0571;
		if (!CNDpresent(getFlag(51))) break p000e0571;
		if (!CNDonotzero(getFlag(51),6)) break p000e0571;
 		ACCwriteln(379);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0572:
	{
 		if (skipdoall('p000e0572')) break p000e0572;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0572;
 		}
		if (!CNDnoteq(51,255)) break p000e0572;
		if (!CNDpresent(getFlag(51))) break p000e0572;
 		ACCwriteln(380);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0573:
	{
 		if (skipdoall('p000e0573')) break p000e0573;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0573;
 		}
		if (!CNDnoteq(51,255)) break p000e0573;
		if (!CNDpresent(getFlag(51))) break p000e0573;
		if (!CNDonotzero(getFlag(51),5)) break p000e0573;
 		ACCwriteln(381);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// HUELE _
	p000e0574:
	{
 		if (skipdoall('p000e0574')) break p000e0574;
 		if (in_response)
		{
			if (!CNDverb(42)) break p000e0574;
 		}
		if (!CNDnoteq(51,255)) break p000e0574;
		if (!CNDabsent(getFlag(51))) break p000e0574;
 		ACCwriteln(382);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0575:
	{
 		if (skipdoall('p000e0575')) break p000e0575;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0575;
 		}
		if (!CNDeq(34,255)) break p000e0575;
		if (!CNDbnotzero(12,1)) break p000e0575;
 		ACCwriteln(383);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0576:
	{
 		if (skipdoall('p000e0576')) break p000e0576;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0576;
 		}
		if (!CNDeq(34,255)) break p000e0576;
		if (!CNDbzero(12,1)) break p000e0576;
 		ACCwriteln(384);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0577:
	{
 		if (skipdoall('p000e0577')) break p000e0577;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0577;
 		}
		if (!CNDnoteq(34,255)) break p000e0577;
		if (!CNDnoteq(51,255)) break p000e0577;
		if (!CNDonotzero(getFlag(51),3)) break p000e0577;
		if (!CNDpresent(getFlag(51))) break p000e0577;
 		ACCwriteln(385);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0578:
	{
 		if (skipdoall('p000e0578')) break p000e0578;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0578;
 		}
		if (!CNDnoteq(34,255)) break p000e0578;
		if (!CNDnoteq(51,255)) break p000e0578;
		if (!CNDonotzero(getFlag(51),3)) break p000e0578;
		if (!CNDabsent(getFlag(51))) break p000e0578;
 		ACCwriteln(386);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0579:
	{
 		if (skipdoall('p000e0579')) break p000e0579;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0579;
 		}
		if (!CNDnoteq(34,255)) break p000e0579;
		if (!CNDeq(51,255)) break p000e0579;
 		ACCwriteln(387);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0580:
	{
 		if (skipdoall('p000e0580')) break p000e0580;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0580;
 		}
		if (!CNDnoteq(51,255)) break p000e0580;
		if (!CNDpresent(getFlag(51))) break p000e0580;
 		ACCwriteln(388);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGITA _
	p000e0581:
	{
 		if (skipdoall('p000e0581')) break p000e0581;
 		if (in_response)
		{
			if (!CNDverb(49)) break p000e0581;
 		}
		if (!CNDnoteq(51,255)) break p000e0581;
		if (!CNDabsent(getFlag(51))) break p000e0581;
 		ACCwriteln(389);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0582:
	{
 		if (skipdoall('p000e0582')) break p000e0582;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0582;
 		}
		if (!CNDeq(34,255)) break p000e0582;
		if (!CNDbnotzero(12,1)) break p000e0582;
 		ACCwriteln(390);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0583:
	{
 		if (skipdoall('p000e0583')) break p000e0583;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0583;
 		}
		if (!CNDeq(34,255)) break p000e0583;
		if (!CNDbzero(12,1)) break p000e0583;
 		ACCwriteln(391);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0584:
	{
 		if (skipdoall('p000e0584')) break p000e0584;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0584;
 		}
		if (!CNDnoteq(34,255)) break p000e0584;
		if (!CNDnoteq(51,255)) break p000e0584;
		if (!CNDonotzero(getFlag(51),3)) break p000e0584;
		if (!CNDpresent(getFlag(51))) break p000e0584;
 		ACCwriteln(392);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0585:
	{
 		if (skipdoall('p000e0585')) break p000e0585;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0585;
 		}
		if (!CNDnoteq(34,255)) break p000e0585;
		if (!CNDnoteq(51,255)) break p000e0585;
		if (!CNDonotzero(getFlag(51),3)) break p000e0585;
		if (!CNDabsent(getFlag(51))) break p000e0585;
 		ACCwriteln(393);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0586:
	{
 		if (skipdoall('p000e0586')) break p000e0586;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0586;
 		}
		if (!CNDnoteq(34,255)) break p000e0586;
		if (!CNDeq(51,255)) break p000e0586;
 		ACCwriteln(394);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0587:
	{
 		if (skipdoall('p000e0587')) break p000e0587;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0587;
 		}
		if (!CNDnoteq(51,255)) break p000e0587;
		if (!CNDpresent(getFlag(51))) break p000e0587;
 		ACCwriteln(395);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BALANCEA _
	p000e0588:
	{
 		if (skipdoall('p000e0588')) break p000e0588;
 		if (in_response)
		{
			if (!CNDverb(50)) break p000e0588;
 		}
		if (!CNDnoteq(51,255)) break p000e0588;
		if (!CNDabsent(getFlag(51))) break p000e0588;
 		ACCwriteln(396);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESPERA _
	p000e0589:
	{
 		if (skipdoall('p000e0589')) break p000e0589;
 		if (in_response)
		{
			if (!CNDverb(43)) break p000e0589;
 		}
 		ACCsysmess(35);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCANSA _
	p000e0590:
	{
 		if (skipdoall('p000e0590')) break p000e0590;
 		if (in_response)
		{
			if (!CNDverb(61)) break p000e0590;
 		}
 		ACCwriteln(397);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BRINCA _
	p000e0591:
	{
 		if (skipdoall('p000e0591')) break p000e0591;
 		if (in_response)
		{
			if (!CNDverb(45)) break p000e0591;
 		}
 		ACCwriteln(398);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ORA _
	p000e0592:
	{
 		if (skipdoall('p000e0592')) break p000e0592;
 		if (in_response)
		{
			if (!CNDverb(59)) break p000e0592;
 		}
 		ACCwriteln(399);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CAVA _
	p000e0593:
	{
 		if (skipdoall('p000e0593')) break p000e0593;
 		if (in_response)
		{
			if (!CNDverb(51)) break p000e0593;
 		}
 		ACCwriteln(400);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// PENSAR _
	p000e0594:
	{
 		if (skipdoall('p000e0594')) break p000e0594;
 		if (in_response)
		{
			if (!CNDverb(60)) break p000e0594;
 		}
 		ACCwriteln(401);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESCANSA _
	p000e0595:
	{
 		if (skipdoall('p000e0595')) break p000e0595;
 		if (in_response)
		{
			if (!CNDverb(61)) break p000e0595;
 		}
 		ACCwriteln(402);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CANTA _
	p000e0596:
	{
 		if (skipdoall('p000e0596')) break p000e0596;
 		if (in_response)
		{
			if (!CNDverb(44)) break p000e0596;
 		}
 		ACCwriteln(403);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BAILA _
	p000e0597:
	{
 		if (skipdoall('p000e0597')) break p000e0597;
 		if (in_response)
		{
			if (!CNDverb(112)) break p000e0597;
 		}
 		ACCwriteln(404);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0598:
	{
 		if (skipdoall('p000e0598')) break p000e0598;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0598;
 		}
		if (!CNDeq(34,255)) break p000e0598;
		if (!CNDbnotzero(12,1)) break p000e0598;
 		ACCwriteln(405);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0599:
	{
 		if (skipdoall('p000e0599')) break p000e0599;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0599;
 		}
		if (!CNDeq(34,255)) break p000e0599;
		if (!CNDbzero(12,1)) break p000e0599;
 		ACCwriteln(406);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0600:
	{
 		if (skipdoall('p000e0600')) break p000e0600;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0600;
 		}
		if (!CNDnoteq(34,255)) break p000e0600;
		if (!CNDnoteq(51,255)) break p000e0600;
		if (!CNDonotzero(getFlag(51),3)) break p000e0600;
		if (!CNDpresent(getFlag(51))) break p000e0600;
 		ACCwriteln(407);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0601:
	{
 		if (skipdoall('p000e0601')) break p000e0601;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0601;
 		}
		if (!CNDnoteq(34,255)) break p000e0601;
		if (!CNDnoteq(51,255)) break p000e0601;
		if (!CNDonotzero(getFlag(51),3)) break p000e0601;
		if (!CNDabsent(getFlag(51))) break p000e0601;
 		ACCwriteln(408);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0602:
	{
 		if (skipdoall('p000e0602')) break p000e0602;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0602;
 		}
		if (!CNDnoteq(34,255)) break p000e0602;
		if (!CNDeq(51,255)) break p000e0602;
 		ACCwriteln(409);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0603:
	{
 		if (skipdoall('p000e0603')) break p000e0603;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0603;
 		}
		if (!CNDnoteq(51,255)) break p000e0603;
		if (!CNDpresent(getFlag(51))) break p000e0603;
 		ACCwriteln(410);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AGREDE _
	p000e0604:
	{
 		if (skipdoall('p000e0604')) break p000e0604;
 		if (in_response)
		{
			if (!CNDverb(46)) break p000e0604;
 		}
		if (!CNDnoteq(51,255)) break p000e0604;
		if (!CNDabsent(getFlag(51))) break p000e0604;
 		ACCwriteln(411);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0605:
	{
 		if (skipdoall('p000e0605')) break p000e0605;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0605;
 		}
		if (!CNDeq(34,255)) break p000e0605;
		if (!CNDbnotzero(12,1)) break p000e0605;
 		ACCwriteln(412);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0606:
	{
 		if (skipdoall('p000e0606')) break p000e0606;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0606;
 		}
		if (!CNDeq(34,255)) break p000e0606;
		if (!CNDbzero(12,1)) break p000e0606;
 		ACCwriteln(413);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0607:
	{
 		if (skipdoall('p000e0607')) break p000e0607;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0607;
 		}
		if (!CNDnoteq(34,255)) break p000e0607;
		if (!CNDnoteq(51,255)) break p000e0607;
		if (!CNDonotzero(getFlag(51),3)) break p000e0607;
		if (!CNDpresent(getFlag(51))) break p000e0607;
 		ACCwriteln(414);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0608:
	{
 		if (skipdoall('p000e0608')) break p000e0608;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0608;
 		}
		if (!CNDnoteq(34,255)) break p000e0608;
		if (!CNDnoteq(51,255)) break p000e0608;
		if (!CNDonotzero(getFlag(51),3)) break p000e0608;
		if (!CNDabsent(getFlag(51))) break p000e0608;
 		ACCwriteln(415);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0609:
	{
 		if (skipdoall('p000e0609')) break p000e0609;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0609;
 		}
		if (!CNDnoteq(34,255)) break p000e0609;
		if (!CNDeq(51,255)) break p000e0609;
 		ACCwriteln(416);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0610:
	{
 		if (skipdoall('p000e0610')) break p000e0610;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0610;
 		}
		if (!CNDnoteq(51,255)) break p000e0610;
		if (!CNDpresent(getFlag(51))) break p000e0610;
 		ACCwriteln(417);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// GOLPEA _
	p000e0611:
	{
 		if (skipdoall('p000e0611')) break p000e0611;
 		if (in_response)
		{
			if (!CNDverb(72)) break p000e0611;
 		}
		if (!CNDnoteq(51,255)) break p000e0611;
		if (!CNDabsent(getFlag(51))) break p000e0611;
 		ACCwriteln(418);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// USA _
	p000e0612:
	{
 		if (skipdoall('p000e0612')) break p000e0612;
 		if (in_response)
		{
			if (!CNDverb(80)) break p000e0612;
 		}
 		ACCwriteln(419);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0613:
	{
 		if (skipdoall('p000e0613')) break p000e0613;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0613;
 		}
		if (!CNDeq(34,255)) break p000e0613;
		if (!CNDbnotzero(12,1)) break p000e0613;
 		ACCwriteln(420);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0614:
	{
 		if (skipdoall('p000e0614')) break p000e0614;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0614;
 		}
		if (!CNDeq(34,255)) break p000e0614;
		if (!CNDbzero(12,1)) break p000e0614;
 		ACCwriteln(421);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0615:
	{
 		if (skipdoall('p000e0615')) break p000e0615;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0615;
 		}
		if (!CNDnoteq(34,255)) break p000e0615;
		if (!CNDnoteq(51,255)) break p000e0615;
		if (!CNDonotzero(getFlag(51),3)) break p000e0615;
		if (!CNDpresent(getFlag(51))) break p000e0615;
 		ACCwriteln(422);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0616:
	{
 		if (skipdoall('p000e0616')) break p000e0616;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0616;
 		}
		if (!CNDnoteq(34,255)) break p000e0616;
		if (!CNDnoteq(51,255)) break p000e0616;
		if (!CNDonotzero(getFlag(51),3)) break p000e0616;
		if (!CNDabsent(getFlag(51))) break p000e0616;
 		ACCwriteln(423);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0617:
	{
 		if (skipdoall('p000e0617')) break p000e0617;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0617;
 		}
		if (!CNDnoteq(34,255)) break p000e0617;
		if (!CNDeq(51,255)) break p000e0617;
 		ACCwriteln(424);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0618:
	{
 		if (skipdoall('p000e0618')) break p000e0618;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0618;
 		}
		if (!CNDnoteq(51,255)) break p000e0618;
		if (!CNDpresent(getFlag(51))) break p000e0618;
 		ACCwriteln(425);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// FREGAR _
	p000e0619:
	{
 		if (skipdoall('p000e0619')) break p000e0619;
 		if (in_response)
		{
			if (!CNDverb(101)) break p000e0619;
 		}
		if (!CNDnoteq(51,255)) break p000e0619;
		if (!CNDabsent(getFlag(51))) break p000e0619;
 		ACCwriteln(426);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0620:
	{
 		if (skipdoall('p000e0620')) break p000e0620;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0620;
 		}
		if (!CNDeq(34,255)) break p000e0620;
		if (!CNDbnotzero(12,1)) break p000e0620;
 		ACCwriteln(427);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0621:
	{
 		if (skipdoall('p000e0621')) break p000e0621;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0621;
 		}
		if (!CNDeq(34,255)) break p000e0621;
		if (!CNDbzero(12,1)) break p000e0621;
 		ACCwriteln(428);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0622:
	{
 		if (skipdoall('p000e0622')) break p000e0622;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0622;
 		}
		if (!CNDnoteq(34,255)) break p000e0622;
		if (!CNDnoteq(51,255)) break p000e0622;
		if (!CNDonotzero(getFlag(51),3)) break p000e0622;
		if (!CNDpresent(getFlag(51))) break p000e0622;
 		ACCwriteln(429);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0623:
	{
 		if (skipdoall('p000e0623')) break p000e0623;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0623;
 		}
		if (!CNDnoteq(34,255)) break p000e0623;
		if (!CNDnoteq(51,255)) break p000e0623;
		if (!CNDonotzero(getFlag(51),3)) break p000e0623;
		if (!CNDabsent(getFlag(51))) break p000e0623;
 		ACCwriteln(430);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0624:
	{
 		if (skipdoall('p000e0624')) break p000e0624;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0624;
 		}
		if (!CNDnoteq(34,255)) break p000e0624;
		if (!CNDeq(51,255)) break p000e0624;
 		ACCwriteln(431);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0625:
	{
 		if (skipdoall('p000e0625')) break p000e0625;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0625;
 		}
		if (!CNDnoteq(51,255)) break p000e0625;
		if (!CNDpresent(getFlag(51))) break p000e0625;
 		ACCwriteln(432);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RASCA _
	p000e0626:
	{
 		if (skipdoall('p000e0626')) break p000e0626;
 		if (in_response)
		{
			if (!CNDverb(102)) break p000e0626;
 		}
		if (!CNDnoteq(51,255)) break p000e0626;
		if (!CNDabsent(getFlag(51))) break p000e0626;
 		ACCwriteln(433);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0627:
	{
 		if (skipdoall('p000e0627')) break p000e0627;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0627;
 		}
		if (!CNDeq(34,255)) break p000e0627;
		if (!CNDbnotzero(12,1)) break p000e0627;
 		ACCwriteln(434);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0628:
	{
 		if (skipdoall('p000e0628')) break p000e0628;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0628;
 		}
		if (!CNDeq(34,255)) break p000e0628;
		if (!CNDbzero(12,1)) break p000e0628;
 		ACCwriteln(435);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0629:
	{
 		if (skipdoall('p000e0629')) break p000e0629;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0629;
 		}
		if (!CNDnoteq(51,255)) break p000e0629;
		if (!CNDonotzero(getFlag(51),3)) break p000e0629;
		if (!CNDpresent(getFlag(51))) break p000e0629;
 		ACCwriteln(436);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0630:
	{
 		if (skipdoall('p000e0630')) break p000e0630;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0630;
 		}
		if (!CNDnoteq(51,255)) break p000e0630;
		if (!CNDonotzero(getFlag(51),3)) break p000e0630;
		if (!CNDabsent(getFlag(51))) break p000e0630;
 		ACCwriteln(437);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0631:
	{
 		if (skipdoall('p000e0631')) break p000e0631;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0631;
 		}
		if (!CNDnoteq(34,255)) break p000e0631;
		if (!CNDeq(51,255)) break p000e0631;
 		ACCwriteln(438);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0632:
	{
 		if (skipdoall('p000e0632')) break p000e0632;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0632;
 		}
		if (!CNDnoteq(51,255)) break p000e0632;
		if (!CNDpresent(getFlag(51))) break p000e0632;
 		ACCwriteln(439);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENCENDER _
	p000e0633:
	{
 		if (skipdoall('p000e0633')) break p000e0633;
 		if (in_response)
		{
			if (!CNDverb(66)) break p000e0633;
 		}
		if (!CNDnoteq(51,255)) break p000e0633;
		if (!CNDabsent(getFlag(51))) break p000e0633;
 		ACCwriteln(440);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0634:
	{
 		if (skipdoall('p000e0634')) break p000e0634;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0634;
 		}
		if (!CNDeq(34,255)) break p000e0634;
		if (!CNDbnotzero(12,1)) break p000e0634;
 		ACCwriteln(441);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0635:
	{
 		if (skipdoall('p000e0635')) break p000e0635;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0635;
 		}
		if (!CNDeq(34,255)) break p000e0635;
		if (!CNDbzero(12,1)) break p000e0635;
 		ACCwriteln(442);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0636:
	{
 		if (skipdoall('p000e0636')) break p000e0636;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0636;
 		}
		if (!CNDnoteq(34,255)) break p000e0636;
		if (!CNDeq(51,255)) break p000e0636;
 		ACCwriteln(443);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0637:
	{
 		if (skipdoall('p000e0637')) break p000e0637;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0637;
 		}
		if (!CNDnoteq(51,255)) break p000e0637;
		if (!CNDpresent(getFlag(51))) break p000e0637;
 		ACCwriteln(444);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APAGA _
	p000e0638:
	{
 		if (skipdoall('p000e0638')) break p000e0638;
 		if (in_response)
		{
			if (!CNDverb(67)) break p000e0638;
 		}
		if (!CNDnoteq(51,255)) break p000e0638;
		if (!CNDabsent(getFlag(51))) break p000e0638;
 		ACCwriteln(445);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0639:
	{
 		if (skipdoall('p000e0639')) break p000e0639;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0639;
 		}
		if (!CNDeq(34,255)) break p000e0639;
		if (!CNDbnotzero(12,1)) break p000e0639;
 		ACCwriteln(446);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0640:
	{
 		if (skipdoall('p000e0640')) break p000e0640;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0640;
 		}
		if (!CNDeq(34,255)) break p000e0640;
		if (!CNDbzero(12,1)) break p000e0640;
 		ACCwriteln(447);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0641:
	{
 		if (skipdoall('p000e0641')) break p000e0641;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0641;
 		}
		if (!CNDnoteq(51,255)) break p000e0641;
		if (!CNDonotzero(getFlag(51),3)) break p000e0641;
		if (!CNDpresent(getFlag(51))) break p000e0641;
 		ACCwriteln(448);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0642:
	{
 		if (skipdoall('p000e0642')) break p000e0642;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0642;
 		}
		if (!CNDnoteq(51,255)) break p000e0642;
		if (!CNDonotzero(getFlag(51),21)) break p000e0642;
		if (!CNDpresent(getFlag(51))) break p000e0642;
 		ACCwriteln(449);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0643:
	{
 		if (skipdoall('p000e0643')) break p000e0643;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0643;
 		}
		if (!CNDnoteq(51,255)) break p000e0643;
		if (!CNDonotzero(getFlag(51),3)) break p000e0643;
		if (!CNDabsent(getFlag(51))) break p000e0643;
 		ACCwriteln(450);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0644:
	{
 		if (skipdoall('p000e0644')) break p000e0644;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0644;
 		}
		if (!CNDnoteq(34,255)) break p000e0644;
		if (!CNDeq(51,255)) break p000e0644;
 		ACCwriteln(451);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0645:
	{
 		if (skipdoall('p000e0645')) break p000e0645;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0645;
 		}
		if (!CNDnoteq(51,255)) break p000e0645;
		if (!CNDpresent(getFlag(51))) break p000e0645;
 		ACCwriteln(452);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CORTA _
	p000e0646:
	{
 		if (skipdoall('p000e0646')) break p000e0646;
 		if (in_response)
		{
			if (!CNDverb(52)) break p000e0646;
 		}
		if (!CNDnoteq(51,255)) break p000e0646;
		if (!CNDabsent(getFlag(51))) break p000e0646;
 		ACCwriteln(453);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0647:
	{
 		if (skipdoall('p000e0647')) break p000e0647;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0647;
 		}
		if (!CNDeq(34,255)) break p000e0647;
		if (!CNDbnotzero(12,1)) break p000e0647;
 		ACCwriteln(454);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0648:
	{
 		if (skipdoall('p000e0648')) break p000e0648;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0648;
 		}
		if (!CNDeq(34,255)) break p000e0648;
		if (!CNDbzero(12,1)) break p000e0648;
 		ACCwriteln(455);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0649:
	{
 		if (skipdoall('p000e0649')) break p000e0649;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0649;
 		}
		if (!CNDnoteq(51,255)) break p000e0649;
		if (!CNDonotzero(getFlag(51),3)) break p000e0649;
		if (!CNDpresent(getFlag(51))) break p000e0649;
 		ACCwriteln(456);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0650:
	{
 		if (skipdoall('p000e0650')) break p000e0650;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0650;
 		}
		if (!CNDnoteq(51,255)) break p000e0650;
		if (!CNDonotzero(getFlag(51),3)) break p000e0650;
		if (!CNDabsent(getFlag(51))) break p000e0650;
 		ACCwriteln(457);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0651:
	{
 		if (skipdoall('p000e0651')) break p000e0651;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0651;
 		}
		if (!CNDnoteq(34,255)) break p000e0651;
		if (!CNDeq(51,255)) break p000e0651;
 		ACCwriteln(458);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0652:
	{
 		if (skipdoall('p000e0652')) break p000e0652;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0652;
 		}
		if (!CNDnoteq(51,255)) break p000e0652;
		if (!CNDpresent(getFlag(51))) break p000e0652;
 		ACCwriteln(459);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANUDA _
	p000e0653:
	{
 		if (skipdoall('p000e0653')) break p000e0653;
 		if (in_response)
		{
			if (!CNDverb(54)) break p000e0653;
 		}
		if (!CNDnoteq(51,255)) break p000e0653;
		if (!CNDabsent(getFlag(51))) break p000e0653;
 		ACCwriteln(460);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0654:
	{
 		if (skipdoall('p000e0654')) break p000e0654;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0654;
 		}
		if (!CNDeq(34,255)) break p000e0654;
		if (!CNDbnotzero(12,1)) break p000e0654;
 		ACCwriteln(461);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0655:
	{
 		if (skipdoall('p000e0655')) break p000e0655;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0655;
 		}
		if (!CNDeq(34,255)) break p000e0655;
		if (!CNDbzero(12,1)) break p000e0655;
 		ACCwriteln(462);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0656:
	{
 		if (skipdoall('p000e0656')) break p000e0656;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0656;
 		}
		if (!CNDnoteq(51,255)) break p000e0656;
		if (!CNDonotzero(getFlag(51),3)) break p000e0656;
		if (!CNDpresent(getFlag(51))) break p000e0656;
 		ACCwriteln(463);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0657:
	{
 		if (skipdoall('p000e0657')) break p000e0657;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0657;
 		}
		if (!CNDnoteq(51,255)) break p000e0657;
		if (!CNDonotzero(getFlag(51),3)) break p000e0657;
		if (!CNDabsent(getFlag(51))) break p000e0657;
 		ACCwriteln(464);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0658:
	{
 		if (skipdoall('p000e0658')) break p000e0658;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0658;
 		}
		if (!CNDnoteq(34,255)) break p000e0658;
		if (!CNDeq(51,255)) break p000e0658;
 		ACCwriteln(465);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0659:
	{
 		if (skipdoall('p000e0659')) break p000e0659;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0659;
 		}
		if (!CNDnoteq(51,255)) break p000e0659;
		if (!CNDpresent(getFlag(51))) break p000e0659;
 		ACCwriteln(466);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESATA _
	p000e0660:
	{
 		if (skipdoall('p000e0660')) break p000e0660;
 		if (in_response)
		{
			if (!CNDverb(98)) break p000e0660;
 		}
		if (!CNDnoteq(51,255)) break p000e0660;
		if (!CNDabsent(getFlag(51))) break p000e0660;
 		ACCwriteln(467);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0661:
	{
 		if (skipdoall('p000e0661')) break p000e0661;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0661;
 		}
		if (!CNDeq(34,255)) break p000e0661;
		if (!CNDbnotzero(12,1)) break p000e0661;
 		ACCwriteln(468);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0662:
	{
 		if (skipdoall('p000e0662')) break p000e0662;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0662;
 		}
		if (!CNDeq(34,255)) break p000e0662;
		if (!CNDbzero(12,1)) break p000e0662;
 		ACCwriteln(469);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0663:
	{
 		if (skipdoall('p000e0663')) break p000e0663;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0663;
 		}
		if (!CNDnoteq(34,255)) break p000e0663;
		if (!CNDeq(51,255)) break p000e0663;
 		ACCwriteln(470);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0664:
	{
 		if (skipdoall('p000e0664')) break p000e0664;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0664;
 		}
		if (!CNDnoteq(51,255)) break p000e0664;
		if (!CNDpresent(getFlag(51))) break p000e0664;
		if (!CNDonotzero(getFlag(51),2)) break p000e0664;
 		ACCwriteln(471);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0665:
	{
 		if (skipdoall('p000e0665')) break p000e0665;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0665;
 		}
		if (!CNDnoteq(51,255)) break p000e0665;
		if (!CNDpresent(getFlag(51))) break p000e0665;
		if (!CNDozero(getFlag(51),2)) break p000e0665;
 		ACCwriteln(472);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLENA _
	p000e0666:
	{
 		if (skipdoall('p000e0666')) break p000e0666;
 		if (in_response)
		{
			if (!CNDverb(55)) break p000e0666;
 		}
		if (!CNDnoteq(51,255)) break p000e0666;
		if (!CNDabsent(getFlag(51))) break p000e0666;
 		ACCwriteln(473);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BANAR _
	p000e0667:
	{
 		if (skipdoall('p000e0667')) break p000e0667;
 		if (in_response)
		{
			if (!CNDverb(56)) break p000e0667;
 		}
 		ACCwriteln(474);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ESCALA _
	p000e0668:
	{
 		if (skipdoall('p000e0668')) break p000e0668;
 		if (in_response)
		{
			if (!CNDverb(57)) break p000e0668;
 		}
 		ACCwriteln(475);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0669:
	{
 		if (skipdoall('p000e0669')) break p000e0669;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0669;
 		}
		if (!CNDeq(34,255)) break p000e0669;
		if (!CNDbnotzero(12,1)) break p000e0669;
 		ACCwriteln(476);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0670:
	{
 		if (skipdoall('p000e0670')) break p000e0670;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0670;
 		}
		if (!CNDeq(34,255)) break p000e0670;
		if (!CNDbzero(12,1)) break p000e0670;
 		ACCwriteln(477);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0671:
	{
 		if (skipdoall('p000e0671')) break p000e0671;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0671;
 		}
		if (!CNDnoteq(51,255)) break p000e0671;
		if (!CNDonotzero(getFlag(51),3)) break p000e0671;
		if (!CNDpresent(getFlag(51))) break p000e0671;
 		ACCwriteln(478);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0672:
	{
 		if (skipdoall('p000e0672')) break p000e0672;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0672;
 		}
		if (!CNDnoteq(51,255)) break p000e0672;
		if (!CNDonotzero(getFlag(51),3)) break p000e0672;
		if (!CNDabsent(getFlag(51))) break p000e0672;
 		ACCwriteln(479);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0673:
	{
 		if (skipdoall('p000e0673')) break p000e0673;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0673;
 		}
		if (!CNDnoteq(34,255)) break p000e0673;
		if (!CNDeq(51,255)) break p000e0673;
 		ACCwriteln(480);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0674:
	{
 		if (skipdoall('p000e0674')) break p000e0674;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0674;
 		}
		if (!CNDnoteq(51,255)) break p000e0674;
		if (!CNDpresent(getFlag(51))) break p000e0674;
 		ACCwriteln(481);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// RETORCER _
	p000e0675:
	{
 		if (skipdoall('p000e0675')) break p000e0675;
 		if (in_response)
		{
			if (!CNDverb(58)) break p000e0675;
 		}
		if (!CNDnoteq(51,255)) break p000e0675;
		if (!CNDabsent(getFlag(51))) break p000e0675;
 		ACCwriteln(482);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0676:
	{
 		if (skipdoall('p000e0676')) break p000e0676;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0676;
 		}
		if (!CNDeq(34,255)) break p000e0676;
		if (!CNDbnotzero(12,1)) break p000e0676;
 		ACCwriteln(483);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0677:
	{
 		if (skipdoall('p000e0677')) break p000e0677;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0677;
 		}
		if (!CNDeq(34,255)) break p000e0677;
		if (!CNDbzero(12,1)) break p000e0677;
 		ACCwriteln(484);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0678:
	{
 		if (skipdoall('p000e0678')) break p000e0678;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0678;
 		}
		if (!CNDnoteq(51,255)) break p000e0678;
		if (!CNDonotzero(getFlag(51),3)) break p000e0678;
		if (!CNDpresent(getFlag(51))) break p000e0678;
 		ACCwriteln(485);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0679:
	{
 		if (skipdoall('p000e0679')) break p000e0679;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0679;
 		}
		if (!CNDnoteq(51,255)) break p000e0679;
		if (!CNDonotzero(getFlag(51),3)) break p000e0679;
		if (!CNDabsent(getFlag(51))) break p000e0679;
 		ACCwriteln(486);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0680:
	{
 		if (skipdoall('p000e0680')) break p000e0680;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0680;
 		}
		if (!CNDnoteq(34,255)) break p000e0680;
		if (!CNDeq(51,255)) break p000e0680;
 		ACCwriteln(487);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0681:
	{
 		if (skipdoall('p000e0681')) break p000e0681;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0681;
 		}
		if (!CNDnoteq(51,255)) break p000e0681;
		if (!CNDpresent(getFlag(51))) break p000e0681;
 		ACCwriteln(488);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// APRETAR _
	p000e0682:
	{
 		if (skipdoall('p000e0682')) break p000e0682;
 		if (in_response)
		{
			if (!CNDverb(111)) break p000e0682;
 		}
		if (!CNDnoteq(51,255)) break p000e0682;
		if (!CNDabsent(getFlag(51))) break p000e0682;
 		ACCwriteln(489);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0683:
	{
 		if (skipdoall('p000e0683')) break p000e0683;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0683;
 		}
		if (!CNDeq(34,255)) break p000e0683;
		if (!CNDbnotzero(12,1)) break p000e0683;
 		ACCwriteln(490);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0684:
	{
 		if (skipdoall('p000e0684')) break p000e0684;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0684;
 		}
		if (!CNDeq(34,255)) break p000e0684;
		if (!CNDbzero(12,1)) break p000e0684;
 		ACCwriteln(491);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0685:
	{
 		if (skipdoall('p000e0685')) break p000e0685;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0685;
 		}
		if (!CNDnoteq(34,255)) break p000e0685;
		if (!CNDnoteq(51,255)) break p000e0685;
		if (!CNDonotzero(getFlag(51),3)) break p000e0685;
		if (!CNDpresent(getFlag(51))) break p000e0685;
 		ACCwriteln(492);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0686:
	{
 		if (skipdoall('p000e0686')) break p000e0686;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0686;
 		}
		if (!CNDnoteq(34,255)) break p000e0686;
		if (!CNDnoteq(51,255)) break p000e0686;
		if (!CNDonotzero(getFlag(51),3)) break p000e0686;
		if (!CNDabsent(getFlag(51))) break p000e0686;
 		ACCwriteln(493);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0687:
	{
 		if (skipdoall('p000e0687')) break p000e0687;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0687;
 		}
		if (!CNDnoteq(34,255)) break p000e0687;
		if (!CNDeq(51,255)) break p000e0687;
 		ACCwriteln(494);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0688:
	{
 		if (skipdoall('p000e0688')) break p000e0688;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0688;
 		}
		if (!CNDnoteq(51,255)) break p000e0688;
		if (!CNDpresent(getFlag(51))) break p000e0688;
 		ACCwriteln(495);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// BESA _
	p000e0689:
	{
 		if (skipdoall('p000e0689')) break p000e0689;
 		if (in_response)
		{
			if (!CNDverb(62)) break p000e0689;
 		}
		if (!CNDnoteq(51,255)) break p000e0689;
		if (!CNDabsent(getFlag(51))) break p000e0689;
 		ACCwriteln(496);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0690:
	{
 		if (skipdoall('p000e0690')) break p000e0690;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0690;
 		}
		if (!CNDeq(34,255)) break p000e0690;
		if (!CNDbnotzero(12,1)) break p000e0690;
 		ACCwriteln(497);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0691:
	{
 		if (skipdoall('p000e0691')) break p000e0691;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0691;
 		}
		if (!CNDeq(34,255)) break p000e0691;
		if (!CNDbzero(12,1)) break p000e0691;
 		ACCwriteln(498);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0692:
	{
 		if (skipdoall('p000e0692')) break p000e0692;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0692;
 		}
		if (!CNDnoteq(34,255)) break p000e0692;
		if (!CNDnoteq(51,255)) break p000e0692;
		if (!CNDonotzero(getFlag(51),3)) break p000e0692;
		if (!CNDpresent(getFlag(51))) break p000e0692;
 		ACCwriteln(499);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0693:
	{
 		if (skipdoall('p000e0693')) break p000e0693;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0693;
 		}
		if (!CNDnoteq(34,255)) break p000e0693;
		if (!CNDnoteq(51,255)) break p000e0693;
		if (!CNDonotzero(getFlag(51),3)) break p000e0693;
		if (!CNDabsent(getFlag(51))) break p000e0693;
 		ACCwriteln(500);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0694:
	{
 		if (skipdoall('p000e0694')) break p000e0694;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0694;
 		}
		if (!CNDnoteq(34,255)) break p000e0694;
		if (!CNDeq(51,255)) break p000e0694;
 		ACCwriteln(501);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0695:
	{
 		if (skipdoall('p000e0695')) break p000e0695;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0695;
 		}
		if (!CNDnoteq(51,255)) break p000e0695;
		if (!CNDpresent(getFlag(51))) break p000e0695;
 		ACCwriteln(502);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRAZA _
	p000e0696:
	{
 		if (skipdoall('p000e0696')) break p000e0696;
 		if (in_response)
		{
			if (!CNDverb(105)) break p000e0696;
 		}
		if (!CNDnoteq(51,255)) break p000e0696;
		if (!CNDabsent(getFlag(51))) break p000e0696;
 		ACCwriteln(503);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0697:
	{
 		if (skipdoall('p000e0697')) break p000e0697;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0697;
 		}
		if (!CNDeq(34,255)) break p000e0697;
		if (!CNDbnotzero(12,1)) break p000e0697;
 		ACCwriteln(504);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0698:
	{
 		if (skipdoall('p000e0698')) break p000e0698;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0698;
 		}
		if (!CNDeq(34,255)) break p000e0698;
		if (!CNDbzero(12,1)) break p000e0698;
 		ACCwriteln(505);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0699:
	{
 		if (skipdoall('p000e0699')) break p000e0699;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0699;
 		}
		if (!CNDnoteq(34,255)) break p000e0699;
		if (!CNDeq(51,255)) break p000e0699;
 		ACCwriteln(506);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0700:
	{
 		if (skipdoall('p000e0700')) break p000e0700;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0700;
 		}
		if (!CNDnoteq(51,255)) break p000e0700;
		if (!CNDpresent(getFlag(51))) break p000e0700;
		if (!CNDonotzero(getFlag(51),19)) break p000e0700;
		if (!CNDozero(getFlag(51),20)) break p000e0700;
 		ACCoset(getFlag(51),20);
 		ACCwriteln(507);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0701:
	{
 		if (skipdoall('p000e0701')) break p000e0701;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0701;
 		}
		if (!CNDnoteq(51,255)) break p000e0701;
		if (!CNDpresent(getFlag(51))) break p000e0701;
		if (!CNDonotzero(getFlag(51),19)) break p000e0701;
		if (!CNDonotzero(getFlag(51),20)) break p000e0701;
 		ACCwriteln(508);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0702:
	{
 		if (skipdoall('p000e0702')) break p000e0702;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0702;
 		}
		if (!CNDnoteq(51,255)) break p000e0702;
		if (!CNDpresent(getFlag(51))) break p000e0702;
 		ACCwriteln(509);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACTIVA _
	p000e0703:
	{
 		if (skipdoall('p000e0703')) break p000e0703;
 		if (in_response)
		{
			if (!CNDverb(103)) break p000e0703;
 		}
		if (!CNDnoteq(51,255)) break p000e0703;
		if (!CNDabsent(getFlag(51))) break p000e0703;
 		ACCwriteln(510);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0704:
	{
 		if (skipdoall('p000e0704')) break p000e0704;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0704;
 		}
		if (!CNDeq(34,255)) break p000e0704;
		if (!CNDbnotzero(12,1)) break p000e0704;
 		ACCwriteln(511);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0705:
	{
 		if (skipdoall('p000e0705')) break p000e0705;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0705;
 		}
		if (!CNDeq(34,255)) break p000e0705;
		if (!CNDbzero(12,1)) break p000e0705;
 		ACCwriteln(512);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0706:
	{
 		if (skipdoall('p000e0706')) break p000e0706;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0706;
 		}
		if (!CNDnoteq(34,255)) break p000e0706;
		if (!CNDeq(51,255)) break p000e0706;
 		ACCwriteln(513);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0707:
	{
 		if (skipdoall('p000e0707')) break p000e0707;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0707;
 		}
		if (!CNDnoteq(51,255)) break p000e0707;
		if (!CNDpresent(getFlag(51))) break p000e0707;
		if (!CNDonotzero(getFlag(51),19)) break p000e0707;
		if (!CNDonotzero(getFlag(51),20)) break p000e0707;
 		ACCoclear(getFlag(51),20);
 		ACCwriteln(514);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0708:
	{
 		if (skipdoall('p000e0708')) break p000e0708;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0708;
 		}
		if (!CNDnoteq(51,255)) break p000e0708;
		if (!CNDpresent(getFlag(51))) break p000e0708;
		if (!CNDonotzero(getFlag(51),19)) break p000e0708;
		if (!CNDozero(getFlag(51),20)) break p000e0708;
 		ACCwriteln(515);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0709:
	{
 		if (skipdoall('p000e0709')) break p000e0709;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0709;
 		}
		if (!CNDnoteq(51,255)) break p000e0709;
		if (!CNDpresent(getFlag(51))) break p000e0709;
 		ACCwriteln(516);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESACTIVA _
	p000e0710:
	{
 		if (skipdoall('p000e0710')) break p000e0710;
 		if (in_response)
		{
			if (!CNDverb(104)) break p000e0710;
 		}
		if (!CNDnoteq(51,255)) break p000e0710;
		if (!CNDabsent(getFlag(51))) break p000e0710;
 		ACCwriteln(517);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0711:
	{
 		if (skipdoall('p000e0711')) break p000e0711;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0711;
 		}
		if (!CNDeq(34,255)) break p000e0711;
		if (!CNDbnotzero(12,1)) break p000e0711;
 		ACCwriteln(518);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0712:
	{
 		if (skipdoall('p000e0712')) break p000e0712;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0712;
 		}
		if (!CNDeq(34,255)) break p000e0712;
		if (!CNDbzero(12,1)) break p000e0712;
 		ACCwriteln(519);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0713:
	{
 		if (skipdoall('p000e0713')) break p000e0713;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0713;
 		}
		if (!CNDnoteq(34,255)) break p000e0713;
		if (!CNDeq(51,255)) break p000e0713;
 		ACCwriteln(520);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0714:
	{
 		if (skipdoall('p000e0714')) break p000e0714;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0714;
 		}
		if (!CNDnoteq(51,255)) break p000e0714;
		if (!CNDpresent(getFlag(51))) break p000e0714;
		if (!CNDonotzero(getFlag(51),13)) break p000e0714;
		if (!CNDozero(getFlag(51),14)) break p000e0714;
		if (!CNDozero(getFlag(51),10)) break p000e0714;
 		ACCoset(getFlag(51),14);
 		ACCwriteln(521);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0715:
	{
 		if (skipdoall('p000e0715')) break p000e0715;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0715;
 		}
		if (!CNDnoteq(51,255)) break p000e0715;
		if (!CNDpresent(getFlag(51))) break p000e0715;
		if (!CNDonotzero(getFlag(51),13)) break p000e0715;
		if (!CNDozero(getFlag(51),14)) break p000e0715;
		if (!CNDonotzero(getFlag(51),10)) break p000e0715;
 		ACCwriteln(522);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0716:
	{
 		if (skipdoall('p000e0716')) break p000e0716;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0716;
 		}
		if (!CNDnoteq(51,255)) break p000e0716;
		if (!CNDpresent(getFlag(51))) break p000e0716;
		if (!CNDonotzero(getFlag(51),13)) break p000e0716;
		if (!CNDonotzero(getFlag(51),14)) break p000e0716;
 		ACCwriteln(523);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0717:
	{
 		if (skipdoall('p000e0717')) break p000e0717;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0717;
 		}
		if (!CNDnoteq(51,255)) break p000e0717;
		if (!CNDpresent(getFlag(51))) break p000e0717;
		if (!CNDonotzero(getFlag(51),13)) break p000e0717;
		if (!CNDonotzero(getFlag(51),14)) break p000e0717;
 		ACCwriteln(524);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0718:
	{
 		if (skipdoall('p000e0718')) break p000e0718;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0718;
 		}
		if (!CNDnoteq(51,255)) break p000e0718;
		if (!CNDpresent(getFlag(51))) break p000e0718;
 		ACCwriteln(525);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ABRE _
	p000e0719:
	{
 		if (skipdoall('p000e0719')) break p000e0719;
 		if (in_response)
		{
			if (!CNDverb(64)) break p000e0719;
 		}
		if (!CNDnoteq(51,255)) break p000e0719;
		if (!CNDabsent(getFlag(51))) break p000e0719;
 		ACCwriteln(526);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0720:
	{
 		if (skipdoall('p000e0720')) break p000e0720;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0720;
 		}
		if (!CNDeq(34,255)) break p000e0720;
 		ACCwriteln(527);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0721:
	{
 		if (skipdoall('p000e0721')) break p000e0721;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0721;
 		}
		if (!CNDeq(34,255)) break p000e0721;
		if (!CNDbzero(12,1)) break p000e0721;
 		ACCwriteln(528);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0722:
	{
 		if (skipdoall('p000e0722')) break p000e0722;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0722;
 		}
		if (!CNDnoteq(34,255)) break p000e0722;
		if (!CNDeq(51,255)) break p000e0722;
 		ACCwriteln(529);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0723:
	{
 		if (skipdoall('p000e0723')) break p000e0723;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0723;
 		}
		if (!CNDnoteq(51,255)) break p000e0723;
		if (!CNDpresent(getFlag(51))) break p000e0723;
		if (!CNDonotzero(getFlag(51),13)) break p000e0723;
		if (!CNDonotzero(getFlag(51),14)) break p000e0723;
 		ACCoclear(getFlag(51),14);
 		ACCwriteln(530);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0724:
	{
 		if (skipdoall('p000e0724')) break p000e0724;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0724;
 		}
		if (!CNDnoteq(51,255)) break p000e0724;
		if (!CNDpresent(getFlag(51))) break p000e0724;
		if (!CNDonotzero(getFlag(51),13)) break p000e0724;
		if (!CNDozero(getFlag(51),14)) break p000e0724;
 		ACCwriteln(531);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0725:
	{
 		if (skipdoall('p000e0725')) break p000e0725;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0725;
 		}
		if (!CNDnoteq(51,255)) break p000e0725;
		if (!CNDpresent(getFlag(51))) break p000e0725;
 		ACCwriteln(532);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CERRAR _
	p000e0726:
	{
 		if (skipdoall('p000e0726')) break p000e0726;
 		if (in_response)
		{
			if (!CNDverb(65)) break p000e0726;
 		}
		if (!CNDnoteq(51,255)) break p000e0726;
		if (!CNDabsent(getFlag(51))) break p000e0726;
 		ACCwriteln(533);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0727:
	{
 		if (skipdoall('p000e0727')) break p000e0727;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0727;
 		}
		if (!CNDeq(34,255)) break p000e0727;
		if (!CNDbnotzero(12,1)) break p000e0727;
 		ACCwriteln(534);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0728:
	{
 		if (skipdoall('p000e0728')) break p000e0728;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0728;
 		}
		if (!CNDeq(34,255)) break p000e0728;
		if (!CNDbzero(12,1)) break p000e0728;
 		ACCwriteln(535);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0729:
	{
 		if (skipdoall('p000e0729')) break p000e0729;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0729;
 		}
		if (!CNDnoteq(51,255)) break p000e0729;
		if (!CNDonotzero(getFlag(51),3)) break p000e0729;
		if (!CNDpresent(getFlag(51))) break p000e0729;
 		ACCwriteln(536);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0730:
	{
 		if (skipdoall('p000e0730')) break p000e0730;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0730;
 		}
		if (!CNDnoteq(51,255)) break p000e0730;
		if (!CNDonotzero(getFlag(51),5)) break p000e0730;
		if (!CNDpresent(getFlag(51))) break p000e0730;
 		ACCwriteln(537);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0731:
	{
 		if (skipdoall('p000e0731')) break p000e0731;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0731;
 		}
		if (!CNDnoteq(51,255)) break p000e0731;
		if (!CNDonotzero(getFlag(51),3)) break p000e0731;
		if (!CNDabsent(getFlag(51))) break p000e0731;
 		ACCwriteln(538);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0732:
	{
 		if (skipdoall('p000e0732')) break p000e0732;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0732;
 		}
		if (!CNDnoteq(34,255)) break p000e0732;
		if (!CNDeq(51,255)) break p000e0732;
 		ACCwriteln(539);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0733:
	{
 		if (skipdoall('p000e0733')) break p000e0733;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0733;
 		}
		if (!CNDnoteq(51,255)) break p000e0733;
		if (!CNDpresent(getFlag(51))) break p000e0733;
 		ACCwriteln(540);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHUPA _
	p000e0734:
	{
 		if (skipdoall('p000e0734')) break p000e0734;
 		if (in_response)
		{
			if (!CNDverb(63)) break p000e0734;
 		}
		if (!CNDnoteq(51,255)) break p000e0734;
		if (!CNDabsent(getFlag(51))) break p000e0734;
 		ACCwriteln(541);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0735:
	{
 		if (skipdoall('p000e0735')) break p000e0735;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0735;
 		}
		if (!CNDeq(34,255)) break p000e0735;
		if (!CNDbnotzero(12,1)) break p000e0735;
 		ACCwriteln(542);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0736:
	{
 		if (skipdoall('p000e0736')) break p000e0736;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0736;
 		}
		if (!CNDeq(34,255)) break p000e0736;
		if (!CNDbzero(12,1)) break p000e0736;
 		ACCwriteln(543);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0737:
	{
 		if (skipdoall('p000e0737')) break p000e0737;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0737;
 		}
		if (!CNDnoteq(34,255)) break p000e0737;
		if (!CNDnoteq(51,255)) break p000e0737;
		if (!CNDonotzero(getFlag(51),3)) break p000e0737;
		if (!CNDpresent(getFlag(51))) break p000e0737;
 		ACCwriteln(544);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0738:
	{
 		if (skipdoall('p000e0738')) break p000e0738;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0738;
 		}
		if (!CNDnoteq(34,255)) break p000e0738;
		if (!CNDnoteq(51,255)) break p000e0738;
		if (!CNDonotzero(getFlag(51),3)) break p000e0738;
		if (!CNDabsent(getFlag(51))) break p000e0738;
 		ACCwriteln(545);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0739:
	{
 		if (skipdoall('p000e0739')) break p000e0739;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0739;
 		}
		if (!CNDnoteq(34,255)) break p000e0739;
		if (!CNDeq(51,255)) break p000e0739;
 		ACCwriteln(546);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0740:
	{
 		if (skipdoall('p000e0740')) break p000e0740;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0740;
 		}
		if (!CNDnoteq(51,255)) break p000e0740;
		if (!CNDpresent(getFlag(51))) break p000e0740;
 		ACCwriteln(547);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESTRUIR _
	p000e0741:
	{
 		if (skipdoall('p000e0741')) break p000e0741;
 		if (in_response)
		{
			if (!CNDverb(69)) break p000e0741;
 		}
		if (!CNDnoteq(51,255)) break p000e0741;
		if (!CNDabsent(getFlag(51))) break p000e0741;
 		ACCwriteln(548);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0742:
	{
 		if (skipdoall('p000e0742')) break p000e0742;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0742;
 		}
		if (!CNDeq(34,255)) break p000e0742;
		if (!CNDbnotzero(12,1)) break p000e0742;
 		ACCwriteln(549);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0743:
	{
 		if (skipdoall('p000e0743')) break p000e0743;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0743;
 		}
		if (!CNDeq(34,255)) break p000e0743;
		if (!CNDbzero(12,1)) break p000e0743;
 		ACCwriteln(550);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0744:
	{
 		if (skipdoall('p000e0744')) break p000e0744;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0744;
 		}
		if (!CNDnoteq(34,255)) break p000e0744;
		if (!CNDnoteq(51,255)) break p000e0744;
		if (!CNDonotzero(getFlag(51),3)) break p000e0744;
		if (!CNDpresent(getFlag(51))) break p000e0744;
 		ACCwriteln(551);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0745:
	{
 		if (skipdoall('p000e0745')) break p000e0745;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0745;
 		}
		if (!CNDnoteq(34,255)) break p000e0745;
		if (!CNDnoteq(51,255)) break p000e0745;
		if (!CNDonotzero(getFlag(51),3)) break p000e0745;
		if (!CNDabsent(getFlag(51))) break p000e0745;
 		ACCwriteln(552);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0746:
	{
 		if (skipdoall('p000e0746')) break p000e0746;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0746;
 		}
		if (!CNDnoteq(34,255)) break p000e0746;
		if (!CNDeq(51,255)) break p000e0746;
 		ACCwriteln(553);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0747:
	{
 		if (skipdoall('p000e0747')) break p000e0747;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0747;
 		}
		if (!CNDnoteq(51,255)) break p000e0747;
		if (!CNDpresent(getFlag(51))) break p000e0747;
 		ACCwriteln(554);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ADQUIERE _
	p000e0748:
	{
 		if (skipdoall('p000e0748')) break p000e0748;
 		if (in_response)
		{
			if (!CNDverb(106)) break p000e0748;
 		}
		if (!CNDnoteq(51,255)) break p000e0748;
		if (!CNDabsent(getFlag(51))) break p000e0748;
 		ACCwriteln(555);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0749:
	{
 		if (skipdoall('p000e0749')) break p000e0749;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0749;
 		}
		if (!CNDeq(34,255)) break p000e0749;
		if (!CNDbnotzero(12,1)) break p000e0749;
 		ACCwriteln(556);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0750:
	{
 		if (skipdoall('p000e0750')) break p000e0750;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0750;
 		}
		if (!CNDeq(34,255)) break p000e0750;
		if (!CNDbzero(12,1)) break p000e0750;
 		ACCwriteln(557);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0751:
	{
 		if (skipdoall('p000e0751')) break p000e0751;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0751;
 		}
		if (!CNDnoteq(34,255)) break p000e0751;
		if (!CNDnoteq(51,255)) break p000e0751;
		if (!CNDonotzero(getFlag(51),3)) break p000e0751;
		if (!CNDpresent(getFlag(51))) break p000e0751;
 		ACCwriteln(558);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0752:
	{
 		if (skipdoall('p000e0752')) break p000e0752;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0752;
 		}
		if (!CNDnoteq(34,255)) break p000e0752;
		if (!CNDnoteq(51,255)) break p000e0752;
		if (!CNDonotzero(getFlag(51),3)) break p000e0752;
		if (!CNDabsent(getFlag(51))) break p000e0752;
 		ACCwriteln(559);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0753:
	{
 		if (skipdoall('p000e0753')) break p000e0753;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0753;
 		}
		if (!CNDnoteq(34,255)) break p000e0753;
		if (!CNDeq(51,255)) break p000e0753;
 		ACCwriteln(560);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0754:
	{
 		if (skipdoall('p000e0754')) break p000e0754;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0754;
 		}
		if (!CNDnoteq(51,255)) break p000e0754;
		if (!CNDpresent(getFlag(51))) break p000e0754;
 		ACCwriteln(561);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DOBLA _
	p000e0755:
	{
 		if (skipdoall('p000e0755')) break p000e0755;
 		if (in_response)
		{
			if (!CNDverb(96)) break p000e0755;
 		}
		if (!CNDnoteq(51,255)) break p000e0755;
		if (!CNDabsent(getFlag(51))) break p000e0755;
 		ACCwriteln(562);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0756:
	{
 		if (skipdoall('p000e0756')) break p000e0756;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0756;
 		}
		if (!CNDeq(34,255)) break p000e0756;
		if (!CNDbnotzero(12,1)) break p000e0756;
 		ACCwriteln(563);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0757:
	{
 		if (skipdoall('p000e0757')) break p000e0757;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0757;
 		}
		if (!CNDeq(34,255)) break p000e0757;
		if (!CNDbzero(12,1)) break p000e0757;
 		ACCwriteln(564);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0758:
	{
 		if (skipdoall('p000e0758')) break p000e0758;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0758;
 		}
		if (!CNDnoteq(34,255)) break p000e0758;
		if (!CNDnoteq(51,255)) break p000e0758;
		if (!CNDonotzero(getFlag(51),3)) break p000e0758;
		if (!CNDpresent(getFlag(51))) break p000e0758;
 		ACCwriteln(565);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0759:
	{
 		if (skipdoall('p000e0759')) break p000e0759;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0759;
 		}
		if (!CNDnoteq(34,255)) break p000e0759;
		if (!CNDnoteq(51,255)) break p000e0759;
		if (!CNDonotzero(getFlag(51),3)) break p000e0759;
		if (!CNDabsent(getFlag(51))) break p000e0759;
 		ACCwriteln(566);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0760:
	{
 		if (skipdoall('p000e0760')) break p000e0760;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0760;
 		}
		if (!CNDnoteq(34,255)) break p000e0760;
		if (!CNDeq(51,255)) break p000e0760;
 		ACCwriteln(567);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0761:
	{
 		if (skipdoall('p000e0761')) break p000e0761;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0761;
 		}
		if (!CNDnoteq(51,255)) break p000e0761;
		if (!CNDpresent(getFlag(51))) break p000e0761;
 		ACCwriteln(568);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESDOBLA _
	p000e0762:
	{
 		if (skipdoall('p000e0762')) break p000e0762;
 		if (in_response)
		{
			if (!CNDverb(97)) break p000e0762;
 		}
		if (!CNDnoteq(51,255)) break p000e0762;
		if (!CNDabsent(getFlag(51))) break p000e0762;
 		ACCwriteln(569);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// EXITS _
	p000e0763:
	{
 		if (skipdoall('p000e0763')) break p000e0763;
 		if (in_response)
		{
			if (!CNDverb(41)) break p000e0763;
 		}
 		ACCexits(getFlag(38),1000);
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ PARTIDAS
	p000e0764:
	{
 		if (skipdoall('p000e0764')) break p000e0764;
 		if (in_response)
		{
			if (!CNDnoun1(183)) break p000e0764;
 		}
 		ACClet(33,129);
		{}

	}

	// ENUMERA PARTIDAS
	p000e0765:
	{
 		if (skipdoall('p000e0765')) break p000e0765;
 		if (in_response)
		{
			if (!CNDverb(129)) break p000e0765;
			if (!CNDnoun1(183)) break p000e0765;
 		}
 		ACClistsavedgames();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// AYUDA _
	p000e0766:
	{
 		if (skipdoall('p000e0766')) break p000e0766;
 		if (in_response)
		{
			if (!CNDverb(34)) break p000e0766;
 		}
 		ACChelp();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VERSION _
	p000e0767:
	{
 		if (skipdoall('p000e0767')) break p000e0767;
 		if (in_response)
		{
			if (!CNDverb(70)) break p000e0767;
 		}
 		ACCversion();
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0768:
	{
 		if (skipdoall('p000e0768')) break p000e0768;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0768;
 		}
		if (!CNDsame(46,34)) break p000e0768;
 		ACCwhatox(13);
		if (!CNDonotzero(getFlag(13),3)) break p000e0768;
		if (!CNDnoteq(44,255)) break p000e0768;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// DA _
	p000e0769:
	{
 		if (skipdoall('p000e0769')) break p000e0769;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0769;
 		}
		if (!CNDprep(2)) break p000e0769;
		if (!CNDbzero(12,2)) break p000e0769;
		if (!CNDeq(44,255)) break p000e0769;
		if (!CNDbnotzero(12,1)) break p000e0769;
 		ACCwriteln(570);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0770:
	{
 		if (skipdoall('p000e0770')) break p000e0770;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0770;
 		}
		if (!CNDeq(34,255)) break p000e0770;
		if (!CNDbzero(12,1)) break p000e0770;
 		ACCwriteln(571);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0771:
	{
 		if (skipdoall('p000e0771')) break p000e0771;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0771;
 		}
		if (!CNDeq(34,255)) break p000e0771;
		if (!CNDbnotzero(12,1)) break p000e0771;
 		ACCwriteln(572);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0772:
	{
 		if (skipdoall('p000e0772')) break p000e0772;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0772;
 		}
		if (!CNDnoteq(34,255)) break p000e0772;
		if (!CNDeq(51,255)) break p000e0772;
 		ACCwriteln(573);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0773:
	{
 		if (skipdoall('p000e0773')) break p000e0773;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0773;
 		}
		if (!CNDnoteq(51,255)) break p000e0773;
		if (!CNDworn(getFlag(51))) break p000e0773;
		if (!CNDonotzero(getFlag(51),1)) break p000e0773;
 		ACCwriteln(574);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0774:
	{
 		if (skipdoall('p000e0774')) break p000e0774;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0774;
 		}
		if (!CNDnoteq(51,255)) break p000e0774;
		if (!CNDnotcarr(getFlag(51))) break p000e0774;
 		ACCwriteln(575);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0775:
	{
 		if (skipdoall('p000e0775')) break p000e0775;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0775;
 		}
		if (!CNDnoteq(51,255)) break p000e0775;
		if (!CNDcarried(getFlag(51))) break p000e0775;
		if (!CNDeq(44,255)) break p000e0775;
		if (!CNDbzero(12,1)) break p000e0775;
 		ACCwriteln(576);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0776:
	{
 		if (skipdoall('p000e0776')) break p000e0776;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0776;
 		}
		if (!CNDnoteq(51,255)) break p000e0776;
		if (!CNDcarried(getFlag(51))) break p000e0776;
		if (!CNDeq(44,255)) break p000e0776;
		if (!CNDbnotzero(12,1)) break p000e0776;
 		ACCwriteln(577);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0777:
	{
 		if (skipdoall('p000e0777')) break p000e0777;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0777;
 		}
		if (!CNDnoteq(51,255)) break p000e0777;
		if (!CNDcarried(getFlag(51))) break p000e0777;
		if (!CNDnoteq(44,255)) break p000e0777;
 		ACCwhatox2(15);
		if (!CNDeq(15,255)) break p000e0777;
 		ACCwriteln(578);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0778:
	{
 		if (skipdoall('p000e0778')) break p000e0778;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0778;
 		}
		if (!CNDnoteq(51,255)) break p000e0778;
		if (!CNDcarried(getFlag(51))) break p000e0778;
		if (!CNDnoteq(44,255)) break p000e0778;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0778;
		if (!CNDozero(getFlag(13),3)) break p000e0778;
 		ACCwriteln(579);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0779:
	{
 		if (skipdoall('p000e0779')) break p000e0779;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0779;
 		}
		if (!CNDnoteq(51,255)) break p000e0779;
		if (!CNDcarried(getFlag(51))) break p000e0779;
		if (!CNDnoteq(44,255)) break p000e0779;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0779;
		if (!CNDonotzero(getFlag(13),3)) break p000e0779;
		if (!CNDabsent(getFlag(13))) break p000e0779;
 		ACCwriteln(580);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DA _
	p000e0780:
	{
 		if (skipdoall('p000e0780')) break p000e0780;
 		if (in_response)
		{
			if (!CNDverb(73)) break p000e0780;
 		}
		if (!CNDnoteq(51,255)) break p000e0780;
		if (!CNDcarried(getFlag(51))) break p000e0780;
		if (!CNDnoteq(44,255)) break p000e0780;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0780;
		if (!CNDonotzero(getFlag(13),3)) break p000e0780;
		if (!CNDpresent(getFlag(13))) break p000e0780;
 		ACCwriteln(581);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0781:
	{
 		if (skipdoall('p000e0781')) break p000e0781;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0781;
 		}
		if (!CNDsame(46,34)) break p000e0781;
 		ACCwhatox(13);
		if (!CNDonotzero(getFlag(13),3)) break p000e0781;
		if (!CNDnoteq(44,255)) break p000e0781;
 		ACCcopyff(34,14);
 		ACCcopyff(44,34);
 		ACCcopyff(14,44);
 		ACCcopyff(35,14);
 		ACCcopyff(45,35);
 		ACCcopyff(14,45);
 		ACCwhato();
		{}

	}

	// ENSEÑA _
	p000e0782:
	{
 		if (skipdoall('p000e0782')) break p000e0782;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0782;
 		}
		if (!CNDprep(2)) break p000e0782;
		if (!CNDbzero(12,2)) break p000e0782;
		if (!CNDeq(44,255)) break p000e0782;
		if (!CNDbnotzero(12,1)) break p000e0782;
 		ACCwriteln(582);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0783:
	{
 		if (skipdoall('p000e0783')) break p000e0783;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0783;
 		}
		if (!CNDeq(34,255)) break p000e0783;
		if (!CNDbzero(12,1)) break p000e0783;
 		ACCwriteln(583);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0784:
	{
 		if (skipdoall('p000e0784')) break p000e0784;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0784;
 		}
		if (!CNDeq(34,255)) break p000e0784;
		if (!CNDbnotzero(12,1)) break p000e0784;
 		ACCwriteln(584);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0785:
	{
 		if (skipdoall('p000e0785')) break p000e0785;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0785;
 		}
		if (!CNDnoteq(34,255)) break p000e0785;
		if (!CNDeq(51,255)) break p000e0785;
 		ACCwriteln(585);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0786:
	{
 		if (skipdoall('p000e0786')) break p000e0786;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0786;
 		}
		if (!CNDnoteq(51,255)) break p000e0786;
		if (!CNDworn(getFlag(51))) break p000e0786;
		if (!CNDonotzero(getFlag(51),1)) break p000e0786;
 		ACCwriteln(586);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0787:
	{
 		if (skipdoall('p000e0787')) break p000e0787;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0787;
 		}
		if (!CNDnoteq(51,255)) break p000e0787;
		if (!CNDnotcarr(getFlag(51))) break p000e0787;
 		ACCwriteln(587);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0788:
	{
 		if (skipdoall('p000e0788')) break p000e0788;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0788;
 		}
		if (!CNDnoteq(51,255)) break p000e0788;
		if (!CNDcarried(getFlag(51))) break p000e0788;
		if (!CNDeq(44,255)) break p000e0788;
		if (!CNDbzero(12,1)) break p000e0788;
 		ACCwriteln(588);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0789:
	{
 		if (skipdoall('p000e0789')) break p000e0789;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0789;
 		}
		if (!CNDnoteq(51,255)) break p000e0789;
		if (!CNDcarried(getFlag(51))) break p000e0789;
		if (!CNDeq(44,255)) break p000e0789;
		if (!CNDbnotzero(12,1)) break p000e0789;
 		ACCwriteln(589);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0790:
	{
 		if (skipdoall('p000e0790')) break p000e0790;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0790;
 		}
		if (!CNDnoteq(51,255)) break p000e0790;
		if (!CNDcarried(getFlag(51))) break p000e0790;
		if (!CNDnoteq(44,255)) break p000e0790;
 		ACCwhatox2(13);
		if (!CNDeq(13,255)) break p000e0790;
 		ACCwriteln(590);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0791:
	{
 		if (skipdoall('p000e0791')) break p000e0791;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0791;
 		}
		if (!CNDnoteq(51,255)) break p000e0791;
		if (!CNDcarried(getFlag(51))) break p000e0791;
		if (!CNDnoteq(44,255)) break p000e0791;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0791;
		if (!CNDozero(getFlag(13),3)) break p000e0791;
 		ACCwriteln(591);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0792:
	{
 		if (skipdoall('p000e0792')) break p000e0792;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0792;
 		}
		if (!CNDnoteq(51,255)) break p000e0792;
		if (!CNDcarried(getFlag(51))) break p000e0792;
		if (!CNDnoteq(44,255)) break p000e0792;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0792;
		if (!CNDonotzero(getFlag(13),3)) break p000e0792;
		if (!CNDabsent(getFlag(13))) break p000e0792;
 		ACCwriteln(592);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ENSEÑA _
	p000e0793:
	{
 		if (skipdoall('p000e0793')) break p000e0793;
 		if (in_response)
		{
			if (!CNDverb(36)) break p000e0793;
 		}
		if (!CNDnoteq(51,255)) break p000e0793;
		if (!CNDcarried(getFlag(51))) break p000e0793;
		if (!CNDnoteq(44,255)) break p000e0793;
 		ACCwhatox2(13);
		if (!CNDnoteq(13,255)) break p000e0793;
		if (!CNDonotzero(getFlag(13),3)) break p000e0793;
		if (!CNDpresent(getFlag(13))) break p000e0793;
 		ACCwriteln(593);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0794:
	{
 		if (skipdoall('p000e0794')) break p000e0794;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0794;
 		}
		if (!CNDeq(34,255)) break p000e0794;
		if (!CNDbnotzero(12,1)) break p000e0794;
 		ACCwriteln(594);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0795:
	{
 		if (skipdoall('p000e0795')) break p000e0795;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0795;
 		}
		if (!CNDeq(34,255)) break p000e0795;
		if (!CNDbzero(12,1)) break p000e0795;
 		ACCwriteln(595);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0796:
	{
 		if (skipdoall('p000e0796')) break p000e0796;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0796;
 		}
		if (!CNDnoteq(34,255)) break p000e0796;
		if (!CNDnoteq(51,255)) break p000e0796;
		if (!CNDonotzero(getFlag(51),3)) break p000e0796;
		if (!CNDpresent(getFlag(51))) break p000e0796;
 		ACCwriteln(596);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0797:
	{
 		if (skipdoall('p000e0797')) break p000e0797;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0797;
 		}
		if (!CNDnoteq(34,255)) break p000e0797;
		if (!CNDnoteq(51,255)) break p000e0797;
		if (!CNDonotzero(getFlag(51),3)) break p000e0797;
		if (!CNDabsent(getFlag(51))) break p000e0797;
 		ACCwriteln(597);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0798:
	{
 		if (skipdoall('p000e0798')) break p000e0798;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0798;
 		}
		if (!CNDnoteq(34,255)) break p000e0798;
		if (!CNDeq(51,255)) break p000e0798;
 		ACCwriteln(598);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0799:
	{
 		if (skipdoall('p000e0799')) break p000e0799;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0799;
 		}
		if (!CNDnoteq(51,255)) break p000e0799;
		if (!CNDpresent(getFlag(51))) break p000e0799;
 		ACCwriteln(599);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SOPLA _
	p000e0800:
	{
 		if (skipdoall('p000e0800')) break p000e0800;
 		if (in_response)
		{
			if (!CNDverb(95)) break p000e0800;
 		}
		if (!CNDnoteq(51,255)) break p000e0800;
		if (!CNDabsent(getFlag(51))) break p000e0800;
 		ACCwriteln(600);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHILLA _
	p000e0801:
	{
 		if (skipdoall('p000e0801')) break p000e0801;
 		if (in_response)
		{
			if (!CNDverb(77)) break p000e0801;
 		}
		if (!CNDnoteq(34,255)) break p000e0801;
		if (!CNDnoteq(51,255)) break p000e0801;
		if (!CNDonotzero(getFlag(51),3)) break p000e0801;
		if (!CNDpresent(getFlag(51))) break p000e0801;
 		ACCwriteln(601);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHILLA _
	p000e0802:
	{
 		if (skipdoall('p000e0802')) break p000e0802;
 		if (in_response)
		{
			if (!CNDverb(77)) break p000e0802;
 		}
		if (!CNDnoteq(34,255)) break p000e0802;
		if (!CNDnoteq(51,255)) break p000e0802;
		if (!CNDonotzero(getFlag(51),3)) break p000e0802;
		if (!CNDabsent(getFlag(51))) break p000e0802;
 		ACCwriteln(602);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CHILLA _
	p000e0803:
	{
 		if (skipdoall('p000e0803')) break p000e0803;
 		if (in_response)
		{
			if (!CNDverb(77)) break p000e0803;
 		}
 		ACCwriteln(603);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPERTAR _
	p000e0804:
	{
 		if (skipdoall('p000e0804')) break p000e0804;
 		if (in_response)
		{
			if (!CNDverb(87)) break p000e0804;
 		}
		if (!CNDnoteq(34,255)) break p000e0804;
		if (!CNDnoteq(51,255)) break p000e0804;
		if (!CNDonotzero(getFlag(51),3)) break p000e0804;
		if (!CNDpresent(getFlag(51))) break p000e0804;
 		ACCwriteln(604);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPERTAR _
	p000e0805:
	{
 		if (skipdoall('p000e0805')) break p000e0805;
 		if (in_response)
		{
			if (!CNDverb(87)) break p000e0805;
 		}
		if (!CNDnoteq(34,255)) break p000e0805;
		if (!CNDnoteq(51,255)) break p000e0805;
		if (!CNDonotzero(getFlag(51),3)) break p000e0805;
		if (!CNDabsent(getFlag(51))) break p000e0805;
 		ACCwriteln(605);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DESPERTAR _
	p000e0806:
	{
 		if (skipdoall('p000e0806')) break p000e0806;
 		if (in_response)
		{
			if (!CNDverb(87)) break p000e0806;
 		}
 		ACCwriteln(606);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0807:
	{
 		if (skipdoall('p000e0807')) break p000e0807;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0807;
 		}
		if (!CNDeq(34,255)) break p000e0807;
		if (!CNDbnotzero(12,1)) break p000e0807;
 		ACCwriteln(607);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0808:
	{
 		if (skipdoall('p000e0808')) break p000e0808;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0808;
 		}
		if (!CNDeq(34,255)) break p000e0808;
		if (!CNDbzero(12,1)) break p000e0808;
 		ACCwriteln(608);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0809:
	{
 		if (skipdoall('p000e0809')) break p000e0809;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0809;
 		}
		if (!CNDnoteq(34,255)) break p000e0809;
		if (!CNDnoteq(51,255)) break p000e0809;
		if (!CNDonotzero(getFlag(51),3)) break p000e0809;
		if (!CNDpresent(getFlag(51))) break p000e0809;
 		ACCwriteln(609);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0810:
	{
 		if (skipdoall('p000e0810')) break p000e0810;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0810;
 		}
		if (!CNDnoteq(34,255)) break p000e0810;
		if (!CNDnoteq(51,255)) break p000e0810;
		if (!CNDonotzero(getFlag(51),3)) break p000e0810;
		if (!CNDabsent(getFlag(51))) break p000e0810;
 		ACCwriteln(610);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0811:
	{
 		if (skipdoall('p000e0811')) break p000e0811;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0811;
 		}
		if (!CNDnoteq(34,255)) break p000e0811;
		if (!CNDeq(51,255)) break p000e0811;
 		ACCwriteln(611);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0812:
	{
 		if (skipdoall('p000e0812')) break p000e0812;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0812;
 		}
		if (!CNDnoteq(51,255)) break p000e0812;
		if (!CNDpresent(getFlag(51))) break p000e0812;
		if (!CNDgt(55,52)) break p000e0812;
 		ACCwriteln(612);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0813:
	{
 		if (skipdoall('p000e0813')) break p000e0813;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0813;
 		}
		if (!CNDnoteq(51,255)) break p000e0813;
		if (!CNDpresent(getFlag(51))) break p000e0813;
 		ACCwriteln(613);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LEVANTA _
	p000e0814:
	{
 		if (skipdoall('p000e0814')) break p000e0814;
 		if (in_response)
		{
			if (!CNDverb(114)) break p000e0814;
 		}
		if (!CNDnoteq(51,255)) break p000e0814;
		if (!CNDabsent(getFlag(51))) break p000e0814;
 		ACCwriteln(614);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0815:
	{
 		if (skipdoall('p000e0815')) break p000e0815;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0815;
 		}
		if (!CNDeq(34,255)) break p000e0815;
		if (!CNDbnotzero(12,1)) break p000e0815;
 		ACCwriteln(615);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0816:
	{
 		if (skipdoall('p000e0816')) break p000e0816;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0816;
 		}
		if (!CNDeq(34,255)) break p000e0816;
		if (!CNDbzero(12,1)) break p000e0816;
 		ACCwriteln(616);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0817:
	{
 		if (skipdoall('p000e0817')) break p000e0817;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0817;
 		}
		if (!CNDnoteq(34,255)) break p000e0817;
		if (!CNDnoteq(51,255)) break p000e0817;
		if (!CNDonotzero(getFlag(51),3)) break p000e0817;
		if (!CNDpresent(getFlag(51))) break p000e0817;
 		ACCwriteln(617);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0818:
	{
 		if (skipdoall('p000e0818')) break p000e0818;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0818;
 		}
		if (!CNDnoteq(34,255)) break p000e0818;
		if (!CNDnoteq(51,255)) break p000e0818;
		if (!CNDonotzero(getFlag(51),3)) break p000e0818;
		if (!CNDabsent(getFlag(51))) break p000e0818;
 		ACCwriteln(618);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0819:
	{
 		if (skipdoall('p000e0819')) break p000e0819;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0819;
 		}
		if (!CNDnoteq(34,255)) break p000e0819;
		if (!CNDeq(51,255)) break p000e0819;
 		ACCwriteln(619);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0820:
	{
 		if (skipdoall('p000e0820')) break p000e0820;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0820;
 		}
		if (!CNDnoteq(51,255)) break p000e0820;
		if (!CNDpresent(getFlag(51))) break p000e0820;
 		ACCwriteln(620);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ARRASTRA _
	p000e0821:
	{
 		if (skipdoall('p000e0821')) break p000e0821;
 		if (in_response)
		{
			if (!CNDverb(83)) break p000e0821;
 		}
		if (!CNDnoteq(51,255)) break p000e0821;
		if (!CNDabsent(getFlag(51))) break p000e0821;
 		ACCwriteln(621);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0822:
	{
 		if (skipdoall('p000e0822')) break p000e0822;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0822;
 		}
		if (!CNDeq(34,255)) break p000e0822;
		if (!CNDbnotzero(12,1)) break p000e0822;
 		ACCwriteln(622);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0823:
	{
 		if (skipdoall('p000e0823')) break p000e0823;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0823;
 		}
		if (!CNDeq(34,255)) break p000e0823;
		if (!CNDbzero(12,1)) break p000e0823;
 		ACCwriteln(623);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0824:
	{
 		if (skipdoall('p000e0824')) break p000e0824;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0824;
 		}
		if (!CNDnoteq(34,255)) break p000e0824;
		if (!CNDnoteq(51,255)) break p000e0824;
		if (!CNDonotzero(getFlag(51),3)) break p000e0824;
		if (!CNDpresent(getFlag(51))) break p000e0824;
 		ACCwriteln(624);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0825:
	{
 		if (skipdoall('p000e0825')) break p000e0825;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0825;
 		}
		if (!CNDnoteq(34,255)) break p000e0825;
		if (!CNDnoteq(51,255)) break p000e0825;
		if (!CNDonotzero(getFlag(51),3)) break p000e0825;
		if (!CNDabsent(getFlag(51))) break p000e0825;
 		ACCwriteln(625);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0826:
	{
 		if (skipdoall('p000e0826')) break p000e0826;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0826;
 		}
		if (!CNDnoteq(34,255)) break p000e0826;
		if (!CNDeq(51,255)) break p000e0826;
 		ACCwriteln(626);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0827:
	{
 		if (skipdoall('p000e0827')) break p000e0827;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0827;
 		}
		if (!CNDnoteq(51,255)) break p000e0827;
		if (!CNDpresent(getFlag(51))) break p000e0827;
 		ACCwriteln(627);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// VACIA _
	p000e0828:
	{
 		if (skipdoall('p000e0828')) break p000e0828;
 		if (in_response)
		{
			if (!CNDverb(86)) break p000e0828;
 		}
		if (!CNDnoteq(51,255)) break p000e0828;
		if (!CNDabsent(getFlag(51))) break p000e0828;
 		ACCwriteln(628);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0829:
	{
 		if (skipdoall('p000e0829')) break p000e0829;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0829;
 		}
		if (!CNDeq(34,255)) break p000e0829;
		if (!CNDbnotzero(12,1)) break p000e0829;
 		ACCwriteln(629);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0830:
	{
 		if (skipdoall('p000e0830')) break p000e0830;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0830;
 		}
		if (!CNDeq(34,255)) break p000e0830;
		if (!CNDbzero(12,1)) break p000e0830;
 		ACCwriteln(630);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0831:
	{
 		if (skipdoall('p000e0831')) break p000e0831;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0831;
 		}
		if (!CNDnoteq(34,255)) break p000e0831;
		if (!CNDnoteq(51,255)) break p000e0831;
		if (!CNDonotzero(getFlag(51),3)) break p000e0831;
		if (!CNDpresent(getFlag(51))) break p000e0831;
 		ACCwriteln(631);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0832:
	{
 		if (skipdoall('p000e0832')) break p000e0832;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0832;
 		}
		if (!CNDnoteq(34,255)) break p000e0832;
		if (!CNDnoteq(51,255)) break p000e0832;
		if (!CNDonotzero(getFlag(51),3)) break p000e0832;
		if (!CNDabsent(getFlag(51))) break p000e0832;
 		ACCwriteln(632);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0833:
	{
 		if (skipdoall('p000e0833')) break p000e0833;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0833;
 		}
		if (!CNDnoteq(34,255)) break p000e0833;
		if (!CNDeq(51,255)) break p000e0833;
 		ACCwriteln(633);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0834:
	{
 		if (skipdoall('p000e0834')) break p000e0834;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0834;
 		}
		if (!CNDnoteq(51,255)) break p000e0834;
		if (!CNDpresent(getFlag(51))) break p000e0834;
 		ACCwriteln(634);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// LLAMA _
	p000e0835:
	{
 		if (skipdoall('p000e0835')) break p000e0835;
 		if (in_response)
		{
			if (!CNDverb(76)) break p000e0835;
 		}
		if (!CNDnoteq(51,255)) break p000e0835;
		if (!CNDabsent(getFlag(51))) break p000e0835;
 		ACCwriteln(635);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0836:
	{
 		if (skipdoall('p000e0836')) break p000e0836;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0836;
 		}
		if (!CNDeq(34,255)) break p000e0836;
		if (!CNDbnotzero(12,1)) break p000e0836;
 		ACCwriteln(636);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0837:
	{
 		if (skipdoall('p000e0837')) break p000e0837;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0837;
 		}
		if (!CNDeq(34,255)) break p000e0837;
		if (!CNDbzero(12,1)) break p000e0837;
 		ACCwriteln(637);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0838:
	{
 		if (skipdoall('p000e0838')) break p000e0838;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0838;
 		}
		if (!CNDnoteq(34,255)) break p000e0838;
		if (!CNDnoteq(51,255)) break p000e0838;
		if (!CNDonotzero(getFlag(51),3)) break p000e0838;
		if (!CNDpresent(getFlag(51))) break p000e0838;
 		ACCwriteln(638);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0839:
	{
 		if (skipdoall('p000e0839')) break p000e0839;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0839;
 		}
		if (!CNDnoteq(34,255)) break p000e0839;
		if (!CNDnoteq(51,255)) break p000e0839;
		if (!CNDonotzero(getFlag(51),3)) break p000e0839;
		if (!CNDabsent(getFlag(51))) break p000e0839;
 		ACCwriteln(639);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0840:
	{
 		if (skipdoall('p000e0840')) break p000e0840;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0840;
 		}
		if (!CNDnoteq(34,255)) break p000e0840;
		if (!CNDeq(51,255)) break p000e0840;
 		ACCwriteln(640);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0841:
	{
 		if (skipdoall('p000e0841')) break p000e0841;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0841;
 		}
		if (!CNDnoteq(51,255)) break p000e0841;
		if (!CNDpresent(getFlag(51))) break p000e0841;
 		ACCwriteln(641);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0842:
	{
 		if (skipdoall('p000e0842')) break p000e0842;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0842;
 		}
		if (!CNDnoteq(51,255)) break p000e0842;
		if (!CNDabsent(getFlag(51))) break p000e0842;
 		ACCwriteln(642);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0843:
	{
 		if (skipdoall('p000e0843')) break p000e0843;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0843;
 		}
		if (!CNDeq(34,255)) break p000e0843;
		if (!CNDbnotzero(12,1)) break p000e0843;
 		ACCwriteln(643);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0844:
	{
 		if (skipdoall('p000e0844')) break p000e0844;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0844;
 		}
		if (!CNDeq(34,255)) break p000e0844;
		if (!CNDbzero(12,1)) break p000e0844;
 		ACCwriteln(644);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0845:
	{
 		if (skipdoall('p000e0845')) break p000e0845;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0845;
 		}
		if (!CNDnoteq(34,255)) break p000e0845;
		if (!CNDeq(51,255)) break p000e0845;
 		ACCwriteln(645);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0846:
	{
 		if (skipdoall('p000e0846')) break p000e0846;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0846;
 		}
		if (!CNDnoteq(51,255)) break p000e0846;
		if (!CNDpresent(getFlag(51))) break p000e0846;
 		ACCwriteln(646);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// CONSULTA _
	p000e0847:
	{
 		if (skipdoall('p000e0847')) break p000e0847;
 		if (in_response)
		{
			if (!CNDverb(107)) break p000e0847;
 		}
		if (!CNDnoteq(51,255)) break p000e0847;
		if (!CNDabsent(getFlag(51))) break p000e0847;
 		ACCwriteln(647);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0848:
	{
 		if (skipdoall('p000e0848')) break p000e0848;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0848;
 		}
		if (!CNDeq(34,255)) break p000e0848;
		if (!CNDbnotzero(12,1)) break p000e0848;
 		ACCwriteln(648);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0849:
	{
 		if (skipdoall('p000e0849')) break p000e0849;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0849;
 		}
		if (!CNDeq(34,255)) break p000e0849;
		if (!CNDbzero(12,1)) break p000e0849;
 		ACCwriteln(649);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0850:
	{
 		if (skipdoall('p000e0850')) break p000e0850;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0850;
 		}
		if (!CNDnoteq(34,255)) break p000e0850;
		if (!CNDnoteq(51,255)) break p000e0850;
		if (!CNDonotzero(getFlag(51),3)) break p000e0850;
		if (!CNDpresent(getFlag(51))) break p000e0850;
 		ACCwriteln(650);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0851:
	{
 		if (skipdoall('p000e0851')) break p000e0851;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0851;
 		}
		if (!CNDnoteq(34,255)) break p000e0851;
		if (!CNDnoteq(51,255)) break p000e0851;
		if (!CNDonotzero(getFlag(51),3)) break p000e0851;
		if (!CNDabsent(getFlag(51))) break p000e0851;
 		ACCwriteln(651);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0852:
	{
 		if (skipdoall('p000e0852')) break p000e0852;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0852;
 		}
		if (!CNDnoteq(34,255)) break p000e0852;
		if (!CNDeq(51,255)) break p000e0852;
 		ACCwriteln(652);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0853:
	{
 		if (skipdoall('p000e0853')) break p000e0853;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0853;
 		}
		if (!CNDnoteq(51,255)) break p000e0853;
		if (!CNDpresent(getFlag(51))) break p000e0853;
 		ACCwriteln(653);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// INCREPA _
	p000e0854:
	{
 		if (skipdoall('p000e0854')) break p000e0854;
 		if (in_response)
		{
			if (!CNDverb(89)) break p000e0854;
 		}
		if (!CNDnoteq(51,255)) break p000e0854;
		if (!CNDabsent(getFlag(51))) break p000e0854;
 		ACCwriteln(654);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0855:
	{
 		if (skipdoall('p000e0855')) break p000e0855;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0855;
 		}
		if (!CNDeq(34,255)) break p000e0855;
		if (!CNDbnotzero(12,1)) break p000e0855;
 		ACCwriteln(655);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0856:
	{
 		if (skipdoall('p000e0856')) break p000e0856;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0856;
 		}
		if (!CNDeq(34,255)) break p000e0856;
		if (!CNDbzero(12,1)) break p000e0856;
 		ACCwriteln(656);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0857:
	{
 		if (skipdoall('p000e0857')) break p000e0857;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0857;
 		}
		if (!CNDnoteq(34,255)) break p000e0857;
		if (!CNDnoteq(51,255)) break p000e0857;
		if (!CNDonotzero(getFlag(51),3)) break p000e0857;
		if (!CNDpresent(getFlag(51))) break p000e0857;
 		ACCwriteln(657);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0858:
	{
 		if (skipdoall('p000e0858')) break p000e0858;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0858;
 		}
		if (!CNDnoteq(34,255)) break p000e0858;
		if (!CNDnoteq(51,255)) break p000e0858;
		if (!CNDonotzero(getFlag(51),3)) break p000e0858;
		if (!CNDabsent(getFlag(51))) break p000e0858;
 		ACCwriteln(658);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0859:
	{
 		if (skipdoall('p000e0859')) break p000e0859;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0859;
 		}
		if (!CNDnoteq(34,255)) break p000e0859;
		if (!CNDeq(51,255)) break p000e0859;
 		ACCwriteln(659);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0860:
	{
 		if (skipdoall('p000e0860')) break p000e0860;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0860;
 		}
		if (!CNDnoteq(51,255)) break p000e0860;
		if (!CNDpresent(getFlag(51))) break p000e0860;
 		ACCwriteln(660);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ACERCA _
	p000e0861:
	{
 		if (skipdoall('p000e0861')) break p000e0861;
 		if (in_response)
		{
			if (!CNDverb(99)) break p000e0861;
 		}
		if (!CNDnoteq(51,255)) break p000e0861;
		if (!CNDabsent(getFlag(51))) break p000e0861;
 		ACCwriteln(661);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0862:
	{
 		if (skipdoall('p000e0862')) break p000e0862;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0862;
 		}
		if (!CNDeq(34,255)) break p000e0862;
		if (!CNDbnotzero(12,1)) break p000e0862;
 		ACCwriteln(662);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0863:
	{
 		if (skipdoall('p000e0863')) break p000e0863;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0863;
 		}
		if (!CNDeq(34,255)) break p000e0863;
		if (!CNDbzero(12,1)) break p000e0863;
 		ACCwriteln(663);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0864:
	{
 		if (skipdoall('p000e0864')) break p000e0864;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0864;
 		}
		if (!CNDnoteq(34,255)) break p000e0864;
		if (!CNDnoteq(51,255)) break p000e0864;
		if (!CNDonotzero(getFlag(51),3)) break p000e0864;
		if (!CNDpresent(getFlag(51))) break p000e0864;
 		ACCwriteln(664);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0865:
	{
 		if (skipdoall('p000e0865')) break p000e0865;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0865;
 		}
		if (!CNDnoteq(34,255)) break p000e0865;
		if (!CNDnoteq(51,255)) break p000e0865;
		if (!CNDonotzero(getFlag(51),3)) break p000e0865;
		if (!CNDabsent(getFlag(51))) break p000e0865;
 		ACCwriteln(665);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0866:
	{
 		if (skipdoall('p000e0866')) break p000e0866;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0866;
 		}
		if (!CNDnoteq(34,255)) break p000e0866;
		if (!CNDeq(51,255)) break p000e0866;
 		ACCwriteln(666);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0867:
	{
 		if (skipdoall('p000e0867')) break p000e0867;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0867;
 		}
		if (!CNDnoteq(51,255)) break p000e0867;
		if (!CNDpresent(getFlag(51))) break p000e0867;
 		ACCwriteln(667);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// SEPARA _
	p000e0868:
	{
 		if (skipdoall('p000e0868')) break p000e0868;
 		if (in_response)
		{
			if (!CNDverb(100)) break p000e0868;
 		}
		if (!CNDnoteq(51,255)) break p000e0868;
		if (!CNDabsent(getFlag(51))) break p000e0868;
 		ACCwriteln(668);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0869:
	{
 		if (skipdoall('p000e0869')) break p000e0869;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0869;
 		}
		if (!CNDeq(34,255)) break p000e0869;
		if (!CNDbnotzero(12,1)) break p000e0869;
 		ACCwriteln(669);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0870:
	{
 		if (skipdoall('p000e0870')) break p000e0870;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0870;
 		}
		if (!CNDeq(34,255)) break p000e0870;
		if (!CNDbzero(12,1)) break p000e0870;
 		ACCwriteln(670);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0871:
	{
 		if (skipdoall('p000e0871')) break p000e0871;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0871;
 		}
		if (!CNDnoteq(34,255)) break p000e0871;
		if (!CNDnoteq(51,255)) break p000e0871;
		if (!CNDonotzero(getFlag(51),3)) break p000e0871;
		if (!CNDpresent(getFlag(51))) break p000e0871;
 		ACCwriteln(671);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0872:
	{
 		if (skipdoall('p000e0872')) break p000e0872;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0872;
 		}
		if (!CNDnoteq(34,255)) break p000e0872;
		if (!CNDnoteq(51,255)) break p000e0872;
		if (!CNDonotzero(getFlag(51),3)) break p000e0872;
		if (!CNDabsent(getFlag(51))) break p000e0872;
 		ACCwriteln(672);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0873:
	{
 		if (skipdoall('p000e0873')) break p000e0873;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0873;
 		}
		if (!CNDnoteq(34,255)) break p000e0873;
		if (!CNDeq(51,255)) break p000e0873;
 		ACCwriteln(673);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0874:
	{
 		if (skipdoall('p000e0874')) break p000e0874;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0874;
 		}
		if (!CNDnoteq(51,255)) break p000e0874;
		if (!CNDpresent(getFlag(51))) break p000e0874;
 		ACCwriteln(674);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// DECIR _
	p000e0875:
	{
 		if (skipdoall('p000e0875')) break p000e0875;
 		if (in_response)
		{
			if (!CNDverb(31)) break p000e0875;
 		}
		if (!CNDnoteq(51,255)) break p000e0875;
		if (!CNDabsent(getFlag(51))) break p000e0875;
 		ACCwriteln(675);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0876:
	{
 		if (skipdoall('p000e0876')) break p000e0876;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0876;
 		}
		if (!CNDeq(34,255)) break p000e0876;
		if (!CNDbnotzero(12,1)) break p000e0876;
 		ACCwriteln(676);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0877:
	{
 		if (skipdoall('p000e0877')) break p000e0877;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0877;
 		}
		if (!CNDeq(34,255)) break p000e0877;
		if (!CNDbzero(12,1)) break p000e0877;
 		ACCwriteln(677);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0878:
	{
 		if (skipdoall('p000e0878')) break p000e0878;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0878;
 		}
		if (!CNDnoteq(34,255)) break p000e0878;
		if (!CNDnoteq(51,255)) break p000e0878;
		if (!CNDonotzero(getFlag(51),3)) break p000e0878;
		if (!CNDpresent(getFlag(51))) break p000e0878;
 		ACCwriteln(678);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0879:
	{
 		if (skipdoall('p000e0879')) break p000e0879;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0879;
 		}
		if (!CNDnoteq(34,255)) break p000e0879;
		if (!CNDnoteq(51,255)) break p000e0879;
		if (!CNDonotzero(getFlag(51),3)) break p000e0879;
		if (!CNDabsent(getFlag(51))) break p000e0879;
 		ACCwriteln(679);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0880:
	{
 		if (skipdoall('p000e0880')) break p000e0880;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0880;
 		}
		if (!CNDnoteq(34,255)) break p000e0880;
		if (!CNDeq(51,255)) break p000e0880;
 		ACCwriteln(680);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0881:
	{
 		if (skipdoall('p000e0881')) break p000e0881;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0881;
 		}
		if (!CNDnoteq(51,255)) break p000e0881;
		if (!CNDpresent(getFlag(51))) break p000e0881;
 		ACCwriteln(681);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// ANDA _
	p000e0882:
	{
 		if (skipdoall('p000e0882')) break p000e0882;
 		if (in_response)
		{
			if (!CNDverb(90)) break p000e0882;
 		}
		if (!CNDnoteq(51,255)) break p000e0882;
		if (!CNDabsent(getFlag(51))) break p000e0882;
 		ACCwriteln(682);
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0883:
	{
 		if (skipdoall('p000e0883')) break p000e0883;
		if (!CNDlt(33,14)) break p000e0883;
		if (!CNDmove(38)) break p000e0883;
 		ACCprocess(26);
 		ACCdesc();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0884:
	{
 		if (skipdoall('p000e0884')) break p000e0884;
		if (!CNDlt(33,14)) break p000e0884;
 		ACCplus(33,1002);
 		ACCwrite(683);
 		ACCmes(getFlag(33));
 		ACCwrite(684);
 		ACCminus(33,1002);
 		ACCexits(getFlag(38),1000);
 		ACCnewline();
 		ACCdone();
		break pro000_restart;
		{}

	}

	// _ _
	p000e0885:
	{
 		if (skipdoall('p000e0885')) break p000e0885;
 		ACChook(685);
		if (done_flag) break pro000_restart;
		{}

	}


}
}

function pro001()
{
process_restart=true;
pro001_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p001e0000:
	{
 		if (skipdoall('p001e0000')) break p001e0000;
 		ACChook(686);
		if (done_flag) break pro001_restart;
		{}

	}

	// _ _
	p001e0001:
	{
 		if (skipdoall('p001e0001')) break p001e0001;
		if (!CNDat(0)) break p001e0001;
 		ACCtitle(687);
 		ACCbset(12,5);
 		ACCset(203);
 		ACClet(53,64);
 		ACCoclear(3,22);
 		ACCcommand(0);
 		ACCgoto(1);
 		ACCdesc();
		break pro001_restart;
		{}

	}

	// _ _
	p001e0002:
	{
 		if (skipdoall('p001e0002')) break p001e0002;
		if (!CNDatgt(12)) break p001e0002;
		if (!CNDatlt(16)) break p001e0002;
 		ACCwriteln(688);
		{}

	}

	// _ _
	p001e0003:
	{
 		if (skipdoall('p001e0003')) break p001e0003;
		if (!CNDat(3)) break p001e0003;
		if (!CNDzero(253)) break p001e0003;
 		ACCnewline();
 		ACCwriteln(689);
 		ACCset(253);
 		ACCdone();
		break pro001_restart;
		{}

	}

	// _ _
	p001e0004:
	{
 		if (skipdoall('p001e0004')) break p001e0004;
		if (!CNDat(1)) break p001e0004;
 		ACCset(255);
 		ACCmessage(99);
 		ACCanykey();
 		function anykey00025() 
		{
 		ACCcls();
 		ACCgoto(2);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00025);
		done_flag=true;
		break pro001_restart;
		{}

	}

	// _ _
	p001e0005:
	{
 		if (skipdoall('p001e0005')) break p001e0005;
		if (!CNDat(2)) break p001e0005;
 		ACCability(5,255);
 		ACCmessage(77);
 		ACCanykey();
 		function anykey00026() 
		{
 		ACCcls();
 		ACCgoto(3);
 		ACCcommand(1);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00026);
		done_flag=true;
		break pro001_restart;
		{}

	}

	// _ _
	p001e0006:
	{
 		if (skipdoall('p001e0006')) break p001e0006;
 		ACCtime(47,1);
		{}

	}

	// _ _
	p001e0007:
	{
 		if (skipdoall('p001e0007')) break p001e0007;
		if (!CNDat(11)) break p001e0007;
		if (!CNDisnotlight()) break p001e0007;
 		ACCwriteln(690);
		{}

	}

	// _ _
	p001e0008:
	{
 		if (skipdoall('p001e0008')) break p001e0008;
		if (!CNDat(17)) break p001e0008;
		if (!CNDlt(103,255)) break p001e0008;
 		ACCwriteln(691);
		{}

	}

	// _ _
	p001e0009:
	{
 		if (skipdoall('p001e0009')) break p001e0009;
		if (!CNDat(20)) break p001e0009;
		if (!CNDzero(101)) break p001e0009;
 		ACClet(101,1);
		{}

	}

	// _ _
	p001e0010:
	{
 		if (skipdoall('p001e0010')) break p001e0010;
		if (!CNDnotat(19)) break p001e0010;
		if (!CNDeq(101,1)) break p001e0010;
 		ACClet(101,2);
		{}

	}

	// _ _
	p001e0011:
	{
 		if (skipdoall('p001e0011')) break p001e0011;
		if (!CNDat(20)) break p001e0011;
		if (!CNDeq(101,2)) break p001e0011;
 		ACCwriteln(692);
		{}

	}

	// _ _
	p001e0012:
	{
 		if (skipdoall('p001e0012')) break p001e0012;
		if (!CNDat(20)) break p001e0012;
		if (!CNDeq(101,3)) break p001e0012;
 		ACCwriteln(693);
		{}

	}

	// _ _
	p001e0013:
	{
 		if (skipdoall('p001e0013')) break p001e0013;
		if (!CNDat(12)) break p001e0013;
		if (!CNDzero(102)) break p001e0013;
 		ACClet(102,1);
		{}

	}

	// _ _
	p001e0014:
	{
 		if (skipdoall('p001e0014')) break p001e0014;
		if (!CNDnotat(12)) break p001e0014;
		if (!CNDeq(102,1)) break p001e0014;
 		ACClet(102,2);
		{}

	}

	// _ _
	p001e0015:
	{
 		if (skipdoall('p001e0015')) break p001e0015;
		if (!CNDat(12)) break p001e0015;
		if (!CNDeq(102,2)) break p001e0015;
 		ACClet(102,3);
		{}

	}

	// _ _
	p001e0016:
	{
 		if (skipdoall('p001e0016')) break p001e0016;
		if (!CNDnotat(12)) break p001e0016;
		if (!CNDeq(102,3)) break p001e0016;
 		ACClet(102,4);
		{}

	}

	// _ _
	p001e0017:
	{
 		if (skipdoall('p001e0017')) break p001e0017;
		if (!CNDat(26)) break p001e0017;
 		ACCwrite(694);
		if (!CNDeq(101,4)) break p001e0017;
		if (!CNDlt(107,3)) break p001e0017;
 		ACCwriteln(695);
		{}

	}

	//  _
	p001e0018:
	{
 		if (skipdoall('p001e0018')) break p001e0018;
 		if (in_response)
		{
			if (!CNDverb(3)) break p001e0018;
 		}
		if (!CNDat(26)) break p001e0018;
		if (!CNDeq(101,4)) break p001e0018;
		if (!CNDeq(107,3)) break p001e0018;
 		ACCwriteln(696);
		{}

	}

	// _ _
	p001e0019:
	{
 		if (skipdoall('p001e0019')) break p001e0019;
		if (!CNDat(26)) break p001e0019;
		if (!CNDeq(107,0)) break p001e0019;
 		ACCmes(53);
 		ACCmes(55);
 		ACCmessage(54);
		{}

	}

	// _ _
	p001e0020:
	{
 		if (skipdoall('p001e0020')) break p001e0020;
		if (!CNDat(26)) break p001e0020;
		if (!CNDeq(107,1)) break p001e0020;
 		ACCmes(53);
 		ACCmes(56);
 		ACCmessage(54);
		{}

	}

	// _ _
	p001e0021:
	{
 		if (skipdoall('p001e0021')) break p001e0021;
		if (!CNDat(26)) break p001e0021;
		if (!CNDeq(107,2)) break p001e0021;
 		ACCpicture(259);
 		ACCmes(53);
 		ACCmessage(54);
		{}

	}

	// _ _
	p001e0022:
	{
 		if (skipdoall('p001e0022')) break p001e0022;
		if (!CNDat(26)) break p001e0022;
		if (!CNDeq(107,3)) break p001e0022;
 		ACCpicture(27);
 		ACCwriteln(697);
		{}

	}

	// _ _
	p001e0023:
	{
 		if (skipdoall('p001e0023')) break p001e0023;
		if (!CNDat(26)) break p001e0023;
		if (!CNDeq(101,4)) break p001e0023;
		if (!CNDeq(107,3)) break p001e0023;
 		ACCset(101);
 		ACCnewline();
 		ACCwriteln(698);
 		ACCwriteln(699);
 		ACCplace(2,18);
		{}

	}

	// _ _
	p001e0024:
	{
 		if (skipdoall('p001e0024')) break p001e0024;
		if (!CNDeq(101,4)) break p001e0024;
 		ACCplus(108,1);
		if (!CNDeq(108,2)) break p001e0024;
 		ACCclear(108);
		{}

	}

	// _ _
	p001e0025:
	{
 		if (skipdoall('p001e0025')) break p001e0025;
		if (!CNDeq(101,4)) break p001e0025;
		if (!CNDzero(108)) break p001e0025;
		if (!CNDnotat(26)) break p001e0025;
		if (!CNDnotat(29)) break p001e0025;
 		ACCnewline();
 		ACCwriteln(700);
		{}

	}

	// _ _
	p001e0026:
	{
 		if (skipdoall('p001e0026')) break p001e0026;
		if (!CNDeq(101,4)) break p001e0026;
		if (!CNDeq(108,1)) break p001e0026;
		if (!CNDnotat(26)) break p001e0026;
		if (!CNDnotat(29)) break p001e0026;
 		ACCnewline();
 		ACCwriteln(701);
		{}

	}

	// _ _
	p001e0027:
	{
 		if (skipdoall('p001e0027')) break p001e0027;
		if (!CNDat(12)) break p001e0027;
 		ACCwrite(702);
		{}

	}

	// _ _
	p001e0028:
	{
 		if (skipdoall('p001e0028')) break p001e0028;
		if (!CNDat(12)) break p001e0028;
		if (!CNDlt(102,255)) break p001e0028;
 		ACCwriteln(703);
		{}

	}

	// _ _
	p001e0029:
	{
 		if (skipdoall('p001e0029')) break p001e0029;
		if (!CNDat(12)) break p001e0029;
		if (!CNDeq(102,255)) break p001e0029;
 		ACCwriteln(704);
		{}

	}

	// _ _
	p001e0030:
	{
 		if (skipdoall('p001e0030')) break p001e0030;
		if (!CNDat(29)) break p001e0030;
 		ACCcommand(0);
 		ACCwrite(705);
 		ACCprint(31);
 		ACCwriteln(706);
 		ACCnewline();
 		ACCwriteln(707);
 		ACCtime(0,0);
		{}

	}

	// _ _
	p001e0031:
	{
 		if (skipdoall('p001e0031')) break p001e0031;
		if (!CNDat(30)) break p001e0031;
 		ACClet(8,200);
 		ACCability(7,255);
 		ACCcls();
 		ACCpicture(30);
 		ACCwriteln(708);
 		ACCanykey();
 		function anykey00027() 
		{
 		ACCgoto(31);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00027);
		done_flag=true;
		break pro001_restart;
		{}

	}

	// _ _
	p001e0032:
	{
 		if (skipdoall('p001e0032')) break p001e0032;
		if (!CNDat(119)) break p001e0032;
 		ACCprocess(21);
		if (!CNDlt(150,4)) break p001e0032;
		if (!CNDgt(150,1)) break p001e0032;
 		ACCnewline();
 		ACCwrite(709);
 		ACCprint(150);
 		ACCwriteln(710);
		{}

	}

	// _ _
	p001e0033:
	{
 		if (skipdoall('p001e0033')) break p001e0033;
		if (!CNDat(119)) break p001e0033;
		if (!CNDeq(150,1)) break p001e0033;
 		ACCnewline();
 		ACCwriteln(711);
		{}

	}

	// _ _
	p001e0034:
	{
 		if (skipdoall('p001e0034')) break p001e0034;
		if (!CNDat(31)) break p001e0034;
		if (!CNDzero(152)) break p001e0034;
		if (!CNDnotzero(151)) break p001e0034;
 		ACCwriteln(712);
 		ACCset(152);
 		ACCanykey();
 		function anykey00028() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00028);
		done_flag=true;
		break pro001_restart;
		{}

	}

	// _ _
	p001e0035:
	{
 		if (skipdoall('p001e0035')) break p001e0035;
 		ACCprocess(18);
		{}

	}

	// _ _
	p001e0036:
	{
 		if (skipdoall('p001e0036')) break p001e0036;
		if (!CNDat(117)) break p001e0036;
 		ACCclear(121);
		{}

	}

	// _ _
	p001e0037:
	{
 		if (skipdoall('p001e0037')) break p001e0037;
		if (!CNDat(31)) break p001e0037;
		if (!CNDzero(152)) break p001e0037;
 		ACCpicture(31);
 		ACCwriteln(713);
		{}

	}

	// _ _
	p001e0038:
	{
 		if (skipdoall('p001e0038')) break p001e0038;
		if (!CNDat(31)) break p001e0038;
		if (!CNDnotzero(152)) break p001e0038;
 		ACCpicture(30);
 		ACCwriteln(714);
		{}

	}

	// _ _
	p001e0039:
	{
 		if (skipdoall('p001e0039')) break p001e0039;
		if (!CNDislight()) break p001e0039;
		if (!CNDnotat(119)) break p001e0039;
 		ACClistobj();
 		ACClistnpc(getFlag(38));
		{}

	}


}
}

function pro002()
{
process_restart=true;
pro002_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p002e0000:
	{
 		if (skipdoall('p002e0000')) break p002e0000;
 		ACChook(715);
		if (done_flag) break pro002_restart;
		{}

	}

	// _ _
	p002e0001:
	{
 		if (skipdoall('p002e0001')) break p002e0001;
		if (!CNDnotzero(0)) break p002e0001;
		if (!CNDobjnotfound(20,255)) break p002e0001;
		if (!CNDzero(9)) break p002e0001;
 		ACCset(9);
		{}

	}

	// _ _
	p002e0002:
	{
 		if (skipdoall('p002e0002')) break p002e0002;
		if (!CNDpresent(0)) break p002e0002;
		if (!CNDonotzero(0,20)) break p002e0002;
 		ACCclear(9);
		{}

	}

	// _ _
	p002e0003:
	{
 		if (skipdoall('p002e0003')) break p002e0003;
		if (!CNDzero(0)) break p002e0003;
 		ACCclear(9);
		{}

	}

	// _ _
	p002e0004:
	{
 		if (skipdoall('p002e0004')) break p002e0004;
		if (!CNDisat(0,252)) break p002e0004;
		if (!CNDonotzero(0,20)) break p002e0004;
		if (!CNDnotzero(8)) break p002e0004;
 		ACCplus(8,1);
		{}

	}

	// _ _
	p002e0005:
	{
 		if (skipdoall('p002e0005')) break p002e0005;
		if (!CNDeq(8,1)) break p002e0005;
 		ACClet(8,2);
		if (!CNDpresent(0)) break p002e0005;
		if (!CNDonotzero(0,20)) break p002e0005;
 		ACCoclear(0,20);
 		ACCset(0);
 		ACCcls();
 		ACCwriteln(716);
 		ACCdesc();
		break pro002_restart;
		{}

	}

	// _ _
	p002e0006:
	{
 		if (skipdoall('p002e0006')) break p002e0006;
		if (!CNDlt(126,2)) break p002e0006;
 		ACCset(7);
		{}

	}

	// _ _
	p002e0007:
	{
 		if (skipdoall('p002e0007')) break p002e0007;
		if (!CNDeq(7,250)) break p002e0007;
 		ACCpause(100);
 		function anykey00031() 
		{
 		ACCclear(0);
 		ACCgoto(120);
 		ACCdesc();
		return;
		}
 		function anykey00030() 
		{
 		ACCwriteln(717);
 		ACCnewtext();
 		ACCanykey();
 		waitKey(anykey00031);
		}
 		function anykey00029() 
		{
 		ACCprocess(15);
 		ACCpause(150);
 		waitKey(anykey00030);
		}
 		waitKey(anykey00029);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0008:
	{
 		if (skipdoall('p002e0008')) break p002e0008;
 		ACCplus(116,1);
		if (!CNDnotat(66)) break p002e0008;
		if (!CNDlt(116,9)) break p002e0008;
 		ACCclear(116);
		{}

	}

	// _ _
	p002e0009:
	{
 		if (skipdoall('p002e0009')) break p002e0009;
		if (!CNDeq(116,9)) break p002e0009;
 		ACCwriteln(718);
		{}

	}

	// _ _
	p002e0010:
	{
 		if (skipdoall('p002e0010')) break p002e0010;
		if (!CNDeq(116,16)) break p002e0010;
 		ACCwriteln(719);
 		ACCclear(0);
 		ACCgoto(120);
 		ACCanykey();
 		function anykey00032() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00032);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0011:
	{
 		if (skipdoall('p002e0011')) break p002e0011;
		if (!CNDpresent(0)) break p002e0011;
		if (!CNDonotzero(0,20)) break p002e0011;
		if (!CNDeq(8,60)) break p002e0011;
 		ACCwriteln(720);
 		ACCminus(8,1);
		{}

	}

	// _ _
	p002e0012:
	{
 		if (skipdoall('p002e0012')) break p002e0012;
		if (!CNDpresent(0)) break p002e0012;
		if (!CNDonotzero(0,20)) break p002e0012;
		if (!CNDnotzero(8)) break p002e0012;
		if (!CNDlt(8,50)) break p002e0012;
 		ACCwriteln(721);
		{}

	}

	// _ _
	p002e0013:
	{
 		if (skipdoall('p002e0013')) break p002e0013;
		if (!CNDlt(9,250)) break p002e0013;
		if (!CNDnotzero(9)) break p002e0013;
 		ACCwriteln(722);
 		ACCanykey();
 		function anykey00033() 
		{
 		ACCclear(0);
 		ACCgoto(120);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00033);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0014:
	{
 		if (skipdoall('p002e0014')) break p002e0014;
		if (!CNDat(82)) break p002e0014;
		if (!CNDzero(119)) break p002e0014;
 		ACClet(119,4);
		{}

	}

	// _ _
	p002e0015:
	{
 		if (skipdoall('p002e0015')) break p002e0015;
		if (!CNDat(82)) break p002e0015;
		if (!CNDlt(119,255)) break p002e0015;
		if (!CNDgt(119,1)) break p002e0015;
 		ACCminus(119,1);
		{}

	}

	// _ _
	p002e0016:
	{
 		if (skipdoall('p002e0016')) break p002e0016;
		if (!CNDat(82)) break p002e0016;
 		ACCprocess(19);
		{}

	}

	// _ _
	p002e0017:
	{
 		if (skipdoall('p002e0017')) break p002e0017;
		if (!CNDlt(126,2)) break p002e0017;
		if (!CNDlt(128,5)) break p002e0017;
		if (!CNDchance(9)) break p002e0017;
		if (!CNDatgt(71)) break p002e0017;
		if (!CNDatlt(96)) break p002e0017;
		if (!CNDnotat(75)) break p002e0017;
		if (!CNDnotat(80)) break p002e0017;
		if (!CNDnotat(81)) break p002e0017;
		if (!CNDnotat(82)) break p002e0017;
		if (!CNDnotat(83)) break p002e0017;
		if (!CNDnotat(84)) break p002e0017;
		if (!CNDnotat(86)) break p002e0017;
		if (!CNDnotat(87)) break p002e0017;
		if (!CNDnotat(119)) break p002e0017;
 		ACCplus(126,1);
 		ACCcls();
 		ACCnewtext();
 		ACCwriteln(723);
 		ACCprocess(15);
		if (!CNDeq(126,1)) break p002e0017;
 		ACCpause(150);
 		function anykey00036() 
		{
 		ACCdesc();
		return;
		}
 		function anykey00035() 
		{
 		ACCwriteln(725);
 		ACCanykey();
 		waitKey(anykey00036);
		}
 		function anykey00034() 
		{
 		ACCplace(12,getFlag(38));
 		ACCwriteln(724);
 		ACCpause(100);
 		waitKey(anykey00035);
		}
 		waitKey(anykey00034);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0018:
	{
 		if (skipdoall('p002e0018')) break p002e0018;
		if (!CNDnotat(31)) break p002e0018;
		if (!CNDnotat(66)) break p002e0018;
		if (!CNDnotat(119)) break p002e0018;
		if (!CNDnotat(117)) break p002e0018;
		if (!CNDnotat(82)) break p002e0018;
		if (!CNDnotat(47)) break p002e0018;
 		ACCprocess(16);
		{}

	}

	// _ _
	p002e0019:
	{
 		if (skipdoall('p002e0019')) break p002e0019;
		if (!CNDat(119)) break p002e0019;
 		ACCclear(129);
		if (!CNDzero(151)) break p002e0019;
		entry_for_doall = 'p002e0020';
		process_in_doall = 2;
 		ACCdoall(119);
		break pro002_restart;
		{}

	}

	// _ _
	p002e0020:
	{
 		if (skipdoall('p002e0020')) break p002e0020;
		if (!CNDat(119)) break p002e0020;
		if (!CNDgt(51,13)) break p002e0020;
 		ACCplus(129,1);
		{}

	}

	// _ _
	p002e0021:
	{
 		if (skipdoall('p002e0021')) break p002e0021;
		if (!CNDat(119)) break p002e0021;
		if (!CNDeq(129,14)) break p002e0021;
 		ACCpause(100);
 		function anykey00039() 
		{
 		ACCcls();
 		ACClet(151,11);
 		ACCdesc();
		return;
		}
 		function anykey00038() 
		{
 		ACCcls();
 		ACCwriteln(729);
 		ACCnewline();
 		ACCwriteln(730);
 		ACCnewline();
 		ACCwriteln(731);
 		ACCnewline();
 		ACCwriteln(732);
 		ACCnewline();
 		ACCanykey();
 		waitKey(anykey00039);
		}
 		function anykey00037() 
		{
 		ACCcls();
 		ACCwrite(726);
 		ACCwrite(727);
 		ACCwriteln(728);
 		ACCnewline();
 		ACCanykey();
 		waitKey(anykey00038);
		}
 		waitKey(anykey00037);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0022:
	{
 		if (skipdoall('p002e0022')) break p002e0022;
		if (!CNDnotzero(151)) break p002e0022;
 		ACCminus(151,1);
		if (!CNDzero(151)) break p002e0022;
 		ACCcls();
 		ACCwriteln(733);
 		ACCnewline();
 		ACCanykey();
 		function anykey00040() 
		{
 		ACCcls();
 		ACCclear(0);
 		ACCgoto(120);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00040);
		done_flag=true;
		break pro002_restart;
		{}

	}

	// _ _
	p002e0023:
	{
 		if (skipdoall('p002e0023')) break p002e0023;
		if (!CNDeq(5,1)) break p002e0023;
 		ACCwriteln(734);
 		ACClet(5,4);
 		ACCdone();
		break pro002_restart;
		{}

	}


}
}

function pro003()
{
process_restart=true;
pro003_restart: while(process_restart)
{
	process_restart=false;
	// AYUDA _
	p003e0000:
	{
 		if (skipdoall('p003e0000')) break p003e0000;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0000;
 		}
		if (!CNDnotzero(5)) break p003e0000;
 		ACCmessage(96);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0001:
	{
 		if (skipdoall('p003e0001')) break p003e0001;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0001;
 		}
		if (!CNDat(11)) break p003e0001;
		if (!CNDabsent(0)) break p003e0001;
 		ACCmessage(8);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0002:
	{
 		if (skipdoall('p003e0002')) break p003e0002;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0002;
 		}
		if (!CNDatgt(12)) break p003e0002;
		if (!CNDatlt(16)) break p003e0002;
 		ACCmessage(9);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0003:
	{
 		if (skipdoall('p003e0003')) break p003e0003;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0003;
 		}
		if (!CNDat(26)) break p003e0003;
		if (!CNDeq(107,0)) break p003e0003;
 		ACCmessage(10);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0004:
	{
 		if (skipdoall('p003e0004')) break p003e0004;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0004;
 		}
		if (!CNDat(26)) break p003e0004;
		if (!CNDeq(107,3)) break p003e0004;
 		ACCwriteln(735);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0005:
	{
 		if (skipdoall('p003e0005')) break p003e0005;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0005;
 		}
		if (!CNDat(23)) break p003e0005;
 		ACCwriteln(736);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// AYUDA _
	p003e0006:
	{
 		if (skipdoall('p003e0006')) break p003e0006;
 		if (in_response)
		{
			if (!CNDverb(34)) break p003e0006;
 		}
		if (!CNDat(20)) break p003e0006;
		if (!CNDnotcarr(0)) break p003e0006;
 		ACCmessage(8);
 		ACCdone();
		break pro003_restart;
		{}

	}

	// _ _
	p003e0007:
	{
 		if (skipdoall('p003e0007')) break p003e0007;
		if (!CNDchance(10)) break p003e0007;
 		ACCmessage(36);
		{}

	}

	// _ _
	p003e0008:
	{
 		if (skipdoall('p003e0008')) break p003e0008;
 		ACCmessage(11);
 		ACCnewline();
 		ACCwriteln(737);
 		ACChelp();
 		ACCdone();
		break pro003_restart;
		{}

	}


}
}

function pro004()
{
process_restart=true;
pro004_restart: while(process_restart)
{
	process_restart=false;
	// EX ESTRU
	p004e0000:
	{
 		if (skipdoall('p004e0000')) break p004e0000;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0000;
			if (!CNDnoun1(114)) break p004e0000;
 		}
		if (!CNDat(21)) break p004e0000;
 		ACCwriteln(738);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESTRU
	p004e0001:
	{
 		if (skipdoall('p004e0001')) break p004e0001;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0001;
			if (!CNDnoun1(114)) break p004e0001;
 		}
		if (!CNDat(22)) break p004e0001;
 		ACCwriteln(739);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESTRU
	p004e0002:
	{
 		if (skipdoall('p004e0002')) break p004e0002;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0002;
			if (!CNDnoun1(114)) break p004e0002;
 		}
		if (!CNDat(23)) break p004e0002;
 		ACClet(34,78);
		{}

	}

	// EX CAMIN
	p004e0003:
	{
 		if (skipdoall('p004e0003')) break p004e0003;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0003;
			if (!CNDnoun1(66)) break p004e0003;
 		}
		if (!CNDat(21)) break p004e0003;
 		ACCwriteln(740);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CAMIN
	p004e0004:
	{
 		if (skipdoall('p004e0004')) break p004e0004;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0004;
			if (!CNDnoun1(66)) break p004e0004;
 		}
		if (!CNDat(22)) break p004e0004;
 		ACCwriteln(741);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CAMIN
	p004e0005:
	{
 		if (skipdoall('p004e0005')) break p004e0005;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0005;
			if (!CNDnoun1(66)) break p004e0005;
 		}
		if (!CNDat(9)) break p004e0005;
 		ACCwriteln(742);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LAMPA
	p004e0006:
	{
 		if (skipdoall('p004e0006')) break p004e0006;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0006;
			if (!CNDnoun1(50)) break p004e0006;
 		}
		if (!CNDpresent(0)) break p004e0006;
		if (!CNDozero(0,20)) break p004e0006;
 		ACCmessage(16);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LAMPA
	p004e0007:
	{
 		if (skipdoall('p004e0007')) break p004e0007;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0007;
			if (!CNDnoun1(50)) break p004e0007;
 		}
		if (!CNDpresent(0)) break p004e0007;
		if (!CNDonotzero(0,20)) break p004e0007;
 		ACCmessage(15);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX MONED
	p004e0008:
	{
 		if (skipdoall('p004e0008')) break p004e0008;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0008;
			if (!CNDnoun1(51)) break p004e0008;
 		}
		if (!CNDpresent(1)) break p004e0008;
 		ACCmessage(17);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX TORTI
	p004e0009:
	{
 		if (skipdoall('p004e0009')) break p004e0009;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0009;
			if (!CNDnoun1(52)) break p004e0009;
 		}
		if (!CNDpresent(2)) break p004e0009;
 		ACCmessage(19);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BOTA
	p004e0010:
	{
 		if (skipdoall('p004e0010')) break p004e0010;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0010;
			if (!CNDnoun1(101)) break p004e0010;
 		}
		if (!CNDpresent(6)) break p004e0010;
 		ACCwriteln(743);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BOTEL
	p004e0011:
	{
 		if (skipdoall('p004e0011')) break p004e0011;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0011;
			if (!CNDnoun1(53)) break p004e0011;
 		}
		if (!CNDpresent(3)) break p004e0011;
		if (!CNDozero(3,22)) break p004e0011;
 		ACCwriteln(744);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BOTEL
	p004e0012:
	{
 		if (skipdoall('p004e0012')) break p004e0012;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0012;
			if (!CNDnoun1(53)) break p004e0012;
 		}
		if (!CNDpresent(3)) break p004e0012;
		if (!CNDonotzero(3,22)) break p004e0012;
 		ACCwriteln(745);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LLAVE
	p004e0013:
	{
 		if (skipdoall('p004e0013')) break p004e0013;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0013;
			if (!CNDnoun1(54)) break p004e0013;
 		}
		if (!CNDpresent(4)) break p004e0013;
 		ACCmessage(21);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BATERIA
	p004e0014:
	{
 		if (skipdoall('p004e0014')) break p004e0014;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0014;
			if (!CNDnoun1(55)) break p004e0014;
 		}
		if (!CNDpresent(5)) break p004e0014;
 		ACCmessage(22);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CABAÑ
	p004e0015:
	{
 		if (skipdoall('p004e0015')) break p004e0015;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0015;
			if (!CNDnoun1(56)) break p004e0015;
 		}
		if (!CNDat(3)) break p004e0015;
 		ACCwriteln(746);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CABAÑ
	p004e0016:
	{
 		if (skipdoall('p004e0016')) break p004e0016;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0016;
			if (!CNDnoun1(56)) break p004e0016;
 		}
		if (!CNDat(8)) break p004e0016;
 		ACCwriteln(747);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX HUMO
	p004e0017:
	{
 		if (skipdoall('p004e0017')) break p004e0017;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0017;
			if (!CNDnoun1(122)) break p004e0017;
 		}
		if (!CNDat(8)) break p004e0017;
 		ACCwriteln(748);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX FUEGO
	p004e0018:
	{
 		if (skipdoall('p004e0018')) break p004e0018;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0018;
			if (!CNDnoun1(123)) break p004e0018;
 		}
		if (!CNDat(8)) break p004e0018;
 		ACCwriteln(749);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESPIRAL
	p004e0019:
	{
 		if (skipdoall('p004e0019')) break p004e0019;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0019;
			if (!CNDnoun1(78)) break p004e0019;
 		}
		if (!CNDat(8)) break p004e0019;
 		ACCwriteln(750);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CABAÑ
	p004e0020:
	{
 		if (skipdoall('p004e0020')) break p004e0020;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0020;
			if (!CNDnoun1(56)) break p004e0020;
 		}
		if (!CNDat(26)) break p004e0020;
 		ACCwriteln(751);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BOCA
	p004e0021:
	{
 		if (skipdoall('p004e0021')) break p004e0021;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0021;
			if (!CNDnoun1(111)) break p004e0021;
 		}
		if (!CNDat(10)) break p004e0021;
 		ACCwriteln(752);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX AGUA
	p004e0022:
	{
 		if (skipdoall('p004e0022')) break p004e0022;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0022;
			if (!CNDnoun1(57)) break p004e0022;
 		}
		if (!CNDat(11)) break p004e0022;
		if (!CNDpresent(0)) break p004e0022;
		if (!CNDonotzero(0,20)) break p004e0022;
 		ACCwrite(753);
 		ACCpause(15);
 		function anykey00041() 
		{
 		ACCwriteln(754);
 		ACCdone();
		return;
		}
 		waitKey(anykey00041);
		done_flag=true;
		break pro004_restart;
		{}

	}

	// EX AGUA
	p004e0023:
	{
 		if (skipdoall('p004e0023')) break p004e0023;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0023;
			if (!CNDnoun1(57)) break p004e0023;
 		}
		if (!CNDat(11)) break p004e0023;
		if (!CNDislight()) break p004e0023;
		if (!CNDzero(106)) break p004e0023;
 		ACCwrite(755);
 		ACCpause(100);
 		function anykey00042() 
		{
 		ACCwriteln(756);
 		ACCcreate(1);
 		ACCset(106);
 		ACCextern(757);
 		ACCdone();
		return;
		}
 		waitKey(anykey00042);
		done_flag=true;
		break pro004_restart;
		{}

	}

	// EX AGUA
	p004e0024:
	{
 		if (skipdoall('p004e0024')) break p004e0024;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0024;
			if (!CNDnoun1(57)) break p004e0024;
 		}
		if (!CNDat(3)) break p004e0024;
 		ACCwriteln(758);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0025:
	{
 		if (skipdoall('p004e0025')) break p004e0025;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0025;
			if (!CNDnoun1(58)) break p004e0025;
 		}
		if (!CNDat(3)) break p004e0025;
 		ACCwriteln(759);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX AGUA
	p004e0026:
	{
 		if (skipdoall('p004e0026')) break p004e0026;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0026;
			if (!CNDnoun1(57)) break p004e0026;
 		}
		if (!CNDat(24)) break p004e0026;
 		ACCwriteln(760);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0027:
	{
 		if (skipdoall('p004e0027')) break p004e0027;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0027;
			if (!CNDnoun1(58)) break p004e0027;
 		}
		if (!CNDat(24)) break p004e0027;
 		ACCwriteln(761);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX VALLE
	p004e0028:
	{
 		if (skipdoall('p004e0028')) break p004e0028;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0028;
			if (!CNDnoun1(80)) break p004e0028;
 		}
		if (!CNDat(24)) break p004e0028;
 		ACCwriteln(762);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LECHO
	p004e0029:
	{
 		if (skipdoall('p004e0029')) break p004e0029;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0029;
			if (!CNDnoun1(86)) break p004e0029;
 		}
		if (!CNDat(24)) break p004e0029;
 		ACCwriteln(763);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX VALLE
	p004e0030:
	{
 		if (skipdoall('p004e0030')) break p004e0030;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0030;
			if (!CNDnoun1(80)) break p004e0030;
 		}
		if (!CNDat(25)) break p004e0030;
 		ACCwriteln(764);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LECHO
	p004e0031:
	{
 		if (skipdoall('p004e0031')) break p004e0031;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0031;
			if (!CNDnoun1(86)) break p004e0031;
 		}
		if (!CNDat(25)) break p004e0031;
 		ACCwriteln(765);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX AGUA
	p004e0032:
	{
 		if (skipdoall('p004e0032')) break p004e0032;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0032;
			if (!CNDnoun1(57)) break p004e0032;
 		}
		if (!CNDat(25)) break p004e0032;
 		ACCwriteln(766);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CABAÑ
	p004e0033:
	{
 		if (skipdoall('p004e0033')) break p004e0033;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0033;
			if (!CNDnoun1(56)) break p004e0033;
 		}
		if (!CNDat(4)) break p004e0033;
 		ACCwriteln(767);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0034:
	{
 		if (skipdoall('p004e0034')) break p004e0034;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0034;
			if (!CNDnoun1(58)) break p004e0034;
 		}
		if (!CNDat(3)) break p004e0034;
 		ACCmessage(26);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0035:
	{
 		if (skipdoall('p004e0035')) break p004e0035;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0035;
			if (!CNDnoun1(58)) break p004e0035;
 		}
		if (!CNDat(6)) break p004e0035;
 		ACCmessage(26);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0036:
	{
 		if (skipdoall('p004e0036')) break p004e0036;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0036;
			if (!CNDnoun1(58)) break p004e0036;
 		}
		if (!CNDat(8)) break p004e0036;
 		ACCmessage(26);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0037:
	{
 		if (skipdoall('p004e0037')) break p004e0037;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0037;
			if (!CNDnoun1(58)) break p004e0037;
 		}
		if (!CNDat(17)) break p004e0037;
		if (!CNDlt(103,2)) break p004e0037;
 		ACCmessage(72);
 		ACClet(103,1);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0038:
	{
 		if (skipdoall('p004e0038')) break p004e0038;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0038;
			if (!CNDnoun1(58)) break p004e0038;
 		}
		if (!CNDat(16)) break p004e0038;
 		ACCwriteln(768);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ARBOL
	p004e0039:
	{
 		if (skipdoall('p004e0039')) break p004e0039;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0039;
			if (!CNDnoun1(58)) break p004e0039;
 		}
		if (!CNDatgt(12)) break p004e0039;
		if (!CNDatlt(24)) break p004e0039;
 		ACCmessage(26);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX VOLCA
	p004e0040:
	{
 		if (skipdoall('p004e0040')) break p004e0040;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0040;
			if (!CNDnoun1(62)) break p004e0040;
 		}
		if (!CNDatgt(5)) break p004e0040;
		if (!CNDatlt(10)) break p004e0040;
 		ACCmessage(27);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LAVA
	p004e0041:
	{
 		if (skipdoall('p004e0041')) break p004e0041;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0041;
			if (!CNDnoun1(63)) break p004e0041;
 		}
		if (!CNDat(6)) break p004e0041;
 		ACCwriteln(769);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX LAVA
	p004e0042:
	{
 		if (skipdoall('p004e0042')) break p004e0042;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0042;
			if (!CNDnoun1(63)) break p004e0042;
 		}
		if (!CNDat(12)) break p004e0042;
 		ACCwriteln(770);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX PRECI
	p004e0043:
	{
 		if (skipdoall('p004e0043')) break p004e0043;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0043;
			if (!CNDnoun1(67)) break p004e0043;
 		}
		if (!CNDat(9)) break p004e0043;
 		ACCwriteln(771);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ENANO
	p004e0044:
	{
 		if (skipdoall('p004e0044')) break p004e0044;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0044;
			if (!CNDnoun1(68)) break p004e0044;
 		}
		if (!CNDat(12)) break p004e0044;
		if (!CNDlt(102,255)) break p004e0044;
 		ACCwriteln(772);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX COLIN
	p004e0045:
	{
 		if (skipdoall('p004e0045')) break p004e0045;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0045;
			if (!CNDnoun1(65)) break p004e0045;
 		}
		if (!CNDat(6)) break p004e0045;
 		ACCwriteln(773);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ROCA
	p004e0046:
	{
 		if (skipdoall('p004e0046')) break p004e0046;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0046;
			if (!CNDnoun1(119)) break p004e0046;
 		}
		if (!CNDat(7)) break p004e0046;
 		ACCwriteln(774);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESPINO
	p004e0047:
	{
 		if (skipdoall('p004e0047')) break p004e0047;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0047;
			if (!CNDnoun1(121)) break p004e0047;
 		}
		if (!CNDat(5)) break p004e0047;
 		ACCwriteln(775);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX HABIT
	p004e0048:
	{
 		if (skipdoall('p004e0048')) break p004e0048;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0048;
			if (!CNDnoun1(69)) break p004e0048;
 		}
		if (!CNDat(10)) break p004e0048;
 		ACCdesc();
		break pro004_restart;
		{}

	}

	// EX VENTA
	p004e0049:
	{
 		if (skipdoall('p004e0049')) break p004e0049;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0049;
			if (!CNDnoun1(73)) break p004e0049;
 		}
		if (!CNDat(10)) break p004e0049;
 		ACCmessage(30);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESCAL
	p004e0050:
	{
 		if (skipdoall('p004e0050')) break p004e0050;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0050;
			if (!CNDnoun1(74)) break p004e0050;
 		}
		if (!CNDat(10)) break p004e0050;
 		ACCmessage(31);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX DESCO
	p004e0051:
	{
 		if (skipdoall('p004e0051')) break p004e0051;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0051;
			if (!CNDnoun1(71)) break p004e0051;
 		}
		if (!CNDat(10)) break p004e0051;
 		ACCwriteln(776);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX PARED
	p004e0052:
	{
 		if (skipdoall('p004e0052')) break p004e0052;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0052;
			if (!CNDnoun1(70)) break p004e0052;
 		}
		if (!CNDat(10)) break p004e0052;
 		ACCwriteln(777);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX SUELO
	p004e0053:
	{
 		if (skipdoall('p004e0053')) break p004e0053;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0053;
			if (!CNDnoun1(72)) break p004e0053;
 		}
		if (!CNDat(10)) break p004e0053;
 		ACCwriteln(778);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ESCAL
	p004e0054:
	{
 		if (skipdoall('p004e0054')) break p004e0054;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0054;
			if (!CNDnoun1(74)) break p004e0054;
 		}
		if (!CNDat(11)) break p004e0054;
		if (!CNDpresent(0)) break p004e0054;
		if (!CNDonotzero(0,20)) break p004e0054;
 		ACCmessage(32);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CHARC
	p004e0055:
	{
 		if (skipdoall('p004e0055')) break p004e0055;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0055;
			if (!CNDnoun1(75)) break p004e0055;
 		}
		if (!CNDat(11)) break p004e0055;
		if (!CNDislight()) break p004e0055;
		if (!CNDzero(106)) break p004e0055;
 		ACCwrite(779);
 		ACCpause(10);
 		function anykey00043() 
		{
 		ACCwriteln(780);
 		ACCcreate(1);
 		ACCdone();
		return;
		}
 		waitKey(anykey00043);
		done_flag=true;
		break pro004_restart;
		{}

	}

	// EX CHARC
	p004e0056:
	{
 		if (skipdoall('p004e0056')) break p004e0056;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0056;
			if (!CNDnoun1(75)) break p004e0056;
 		}
		if (!CNDat(11)) break p004e0056;
		if (!CNDislight()) break p004e0056;
 		ACCwrite(781);
 		ACCpause(10);
 		function anykey00044() 
		{
 		ACCwriteln(782);
 		ACCdone();
		return;
		}
 		waitKey(anykey00044);
		done_flag=true;
		break pro004_restart;
		{}

	}

	// EX ESPIRAL
	p004e0057:
	{
 		if (skipdoall('p004e0057')) break p004e0057;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0057;
			if (!CNDnoun1(78)) break p004e0057;
 		}
		if (!CNDat(23)) break p004e0057;
 		ACCwriteln(783);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX MESA
	p004e0058:
	{
 		if (skipdoall('p004e0058')) break p004e0058;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0058;
			if (!CNDnoun1(82)) break p004e0058;
 		}
		if (!CNDat(18)) break p004e0058;
 		ACCmessage(34);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX SILLA
	p004e0059:
	{
 		if (skipdoall('p004e0059')) break p004e0059;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0059;
			if (!CNDnoun1(83)) break p004e0059;
 		}
		if (!CNDat(18)) break p004e0059;
 		ACCmessage(34);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX GRIETA
	p004e0060:
	{
 		if (skipdoall('p004e0060')) break p004e0060;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0060;
			if (!CNDnoun1(87)) break p004e0060;
 		}
		if (!CNDat(25)) break p004e0060;
 		ACCwriteln(784);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX PUERT
	p004e0061:
	{
 		if (skipdoall('p004e0061')) break p004e0061;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0061;
			if (!CNDnoun1(89)) break p004e0061;
 		}
		if (!CNDat(26)) break p004e0061;
		if (!CNDlt(107,2)) break p004e0061;
 		ACCwriteln(785);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX DEPRE
	p004e0062:
	{
 		if (skipdoall('p004e0062')) break p004e0062;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0062;
			if (!CNDnoun1(88)) break p004e0062;
 		}
		if (!CNDat(26)) break p004e0062;
 		ACCwriteln(786);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX VALLE
	p004e0063:
	{
 		if (skipdoall('p004e0063')) break p004e0063;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0063;
			if (!CNDnoun1(80)) break p004e0063;
 		}
		if (!CNDat(26)) break p004e0063;
 		ACCwriteln(787);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ENTRADA
	p004e0064:
	{
 		if (skipdoall('p004e0064')) break p004e0064;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0064;
			if (!CNDnoun1(110)) break p004e0064;
 		}
		if (!CNDat(26)) break p004e0064;
 		ACCwriteln(788);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BARRO
	p004e0065:
	{
 		if (skipdoall('p004e0065')) break p004e0065;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0065;
			if (!CNDnoun1(90)) break p004e0065;
 		}
		if (!CNDat(26)) break p004e0065;
		if (!CNDeq(107,0)) break p004e0065;
 		ACCwriteln(789);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BARRO
	p004e0066:
	{
 		if (skipdoall('p004e0066')) break p004e0066;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0066;
			if (!CNDnoun1(90)) break p004e0066;
 		}
		if (!CNDat(26)) break p004e0066;
		if (!CNDeq(107,1)) break p004e0066;
 		ACCwriteln(790);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BARRO
	p004e0067:
	{
 		if (skipdoall('p004e0067')) break p004e0067;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0067;
			if (!CNDnoun1(90)) break p004e0067;
 		}
		if (!CNDat(26)) break p004e0067;
		if (!CNDeq(107,2)) break p004e0067;
 		ACCwriteln(791);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CANON
	p004e0068:
	{
 		if (skipdoall('p004e0068')) break p004e0068;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0068;
			if (!CNDnoun1(120)) break p004e0068;
 		}
		if (!CNDat(28)) break p004e0068;
 		ACCwriteln(792);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CASCA
	p004e0069:
	{
 		if (skipdoall('p004e0069')) break p004e0069;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0069;
			if (!CNDnoun1(92)) break p004e0069;
 		}
		if (!CNDat(28)) break p004e0069;
 		ACCwriteln(793);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX PRECI
	p004e0070:
	{
 		if (skipdoall('p004e0070')) break p004e0070;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0070;
			if (!CNDnoun1(67)) break p004e0070;
 		}
		if (!CNDat(28)) break p004e0070;
 		ACCwriteln(794);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX CORTADO
	p004e0071:
	{
 		if (skipdoall('p004e0071')) break p004e0071;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0071;
			if (!CNDnoun1(118)) break p004e0071;
 		}
		if (!CNDat(28)) break p004e0071;
 		ACCwriteln(795);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// LEE MENSAJE
	p004e0072:
	{
 		if (skipdoall('p004e0072')) break p004e0072;
 		if (in_response)
		{
			if (!CNDverb(109)) break p004e0072;
			if (!CNDnoun1(124)) break p004e0072;
 		}
		if (!CNDat(18)) break p004e0072;
 		ACCmessage(13);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ELFIT
	p004e0073:
	{
 		if (skipdoall('p004e0073')) break p004e0073;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0073;
			if (!CNDnoun1(104)) break p004e0073;
 		}
		if (!CNDat(20)) break p004e0073;
		if (!CNDpresent(0)) break p004e0073;
		if (!CNDonotzero(0,20)) break p004e0073;
		if (!CNDeq(101,2)) break p004e0073;
 		ACCmessage(63);
 		ACClet(101,3);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ELFIT
	p004e0074:
	{
 		if (skipdoall('p004e0074')) break p004e0074;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0074;
			if (!CNDnoun1(104)) break p004e0074;
 		}
		if (!CNDat(20)) break p004e0074;
		if (!CNDeq(101,2)) break p004e0074;
 		ACCmessage(64);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ELFIT
	p004e0075:
	{
 		if (skipdoall('p004e0075')) break p004e0075;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0075;
			if (!CNDnoun1(104)) break p004e0075;
 		}
		if (!CNDat(20)) break p004e0075;
		if (!CNDgt(101,2)) break p004e0075;
		if (!CNDlt(101,5)) break p004e0075;
 		ACCwriteln(796);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX ELFIT
	p004e0076:
	{
 		if (skipdoall('p004e0076')) break p004e0076;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0076;
			if (!CNDnoun1(104)) break p004e0076;
 		}
		if (!CNDeq(101,4)) break p004e0076;
 		ACCwriteln(797);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX BRILL
	p004e0077:
	{
 		if (skipdoall('p004e0077')) break p004e0077;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0077;
			if (!CNDnoun1(107)) break p004e0077;
 		}
		if (!CNDat(17)) break p004e0077;
		if (!CNDlt(103,2)) break p004e0077;
 		ACCmessage(72);
 		ACClet(103,1);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0078:
	{
 		if (skipdoall('p004e0078')) break p004e0078;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0078;
 		}
		if (!CNDisnotlight()) break p004e0078;
 		ACCwriteln(798);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0079:
	{
 		if (skipdoall('p004e0079')) break p004e0079;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0079;
 		}
		if (!CNDprep(4)) break p004e0079;
		if (!CNDeq(34,255)) break p004e0079;
		if (!CNDbnotzero(12,1)) break p004e0079;
 		ACCwriteln(799);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0080:
	{
 		if (skipdoall('p004e0080')) break p004e0080;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0080;
 		}
		if (!CNDprep(4)) break p004e0080;
		if (!CNDeq(34,255)) break p004e0080;
		if (!CNDbzero(12,1)) break p004e0080;
 		ACCwriteln(800);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0081:
	{
 		if (skipdoall('p004e0081')) break p004e0081;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0081;
 		}
		if (!CNDeq(34,255)) break p004e0081;
		if (!CNDbnotzero(12,1)) break p004e0081;
 		ACCwriteln(801);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0082:
	{
 		if (skipdoall('p004e0082')) break p004e0082;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0082;
 		}
		if (!CNDeq(34,255)) break p004e0082;
		if (!CNDbzero(12,1)) break p004e0082;
 		ACCwriteln(802);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0083:
	{
 		if (skipdoall('p004e0083')) break p004e0083;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0083;
 		}
		if (!CNDprep(4)) break p004e0083;
		if (!CNDnoteq(51,255)) break p004e0083;
		if (!CNDonotzero(getFlag(51),3)) break p004e0083;
		if (!CNDpresent(getFlag(51))) break p004e0083;
 		ACCwriteln(803);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0084:
	{
 		if (skipdoall('p004e0084')) break p004e0084;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0084;
 		}
		if (!CNDnoteq(51,255)) break p004e0084;
		if (!CNDonotzero(getFlag(51),3)) break p004e0084;
		if (!CNDabsent(getFlag(51))) break p004e0084;
 		ACCwriteln(804);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0085:
	{
 		if (skipdoall('p004e0085')) break p004e0085;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0085;
 		}
		if (!CNDnoteq(34,255)) break p004e0085;
		if (!CNDnoteq(51,255)) break p004e0085;
		if (!CNDonotzero(getFlag(51),3)) break p004e0085;
		if (!CNDpresent(getFlag(51))) break p004e0085;
 		ACCwriteln(805);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0086:
	{
 		if (skipdoall('p004e0086')) break p004e0086;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0086;
 		}
		if (!CNDnoteq(34,255)) break p004e0086;
		if (!CNDnoteq(51,255)) break p004e0086;
		if (!CNDonotzero(getFlag(51),3)) break p004e0086;
		if (!CNDabsent(getFlag(51))) break p004e0086;
 		ACCwriteln(806);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0087:
	{
 		if (skipdoall('p004e0087')) break p004e0087;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0087;
 		}
		if (!CNDprep(4)) break p004e0087;
		if (!CNDnoteq(34,255)) break p004e0087;
		if (!CNDeq(51,255)) break p004e0087;
 		ACCwriteln(807);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0088:
	{
 		if (skipdoall('p004e0088')) break p004e0088;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0088;
 		}
		if (!CNDnoteq(34,255)) break p004e0088;
		if (!CNDeq(51,255)) break p004e0088;
 		ACCwriteln(808);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0089:
	{
 		if (skipdoall('p004e0089')) break p004e0089;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0089;
 		}
		if (!CNDnoteq(51,255)) break p004e0089;
		if (!CNDpresent(getFlag(51))) break p004e0089;
		if (!CNDonotzero(getFlag(51),2)) break p004e0089;
		if (!CNDonotzero(getFlag(51),16)) break p004e0089;
 		ACCobjat(getFlag(51),13);
		if (!CNDnotzero(13)) break p004e0089;
 		ACCwrite(809);
 		ACClistcontents(getFlag(51));
 		ACCwriteln(810);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0090:
	{
 		if (skipdoall('p004e0090')) break p004e0090;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0090;
 		}
		if (!CNDnoteq(51,255)) break p004e0090;
		if (!CNDpresent(getFlag(51))) break p004e0090;
		if (!CNDonotzero(getFlag(51),2)) break p004e0090;
		if (!CNDozero(getFlag(51),13)) break p004e0090;
 		ACCobjat(getFlag(51),13);
		if (!CNDnotzero(13)) break p004e0090;
 		ACCwrite(811);
 		ACClistcontents(getFlag(51));
 		ACCwriteln(812);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0091:
	{
 		if (skipdoall('p004e0091')) break p004e0091;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0091;
 		}
		if (!CNDnoteq(51,255)) break p004e0091;
		if (!CNDpresent(getFlag(51))) break p004e0091;
		if (!CNDonotzero(getFlag(51),2)) break p004e0091;
		if (!CNDonotzero(getFlag(51),13)) break p004e0091;
		if (!CNDonotzero(getFlag(51),14)) break p004e0091;
 		ACCobjat(getFlag(51),13);
		if (!CNDnotzero(13)) break p004e0091;
 		ACCwrite(813);
 		ACClistcontents(getFlag(51));
 		ACCwriteln(814);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0092:
	{
 		if (skipdoall('p004e0092')) break p004e0092;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0092;
 		}
		if (!CNDnoteq(51,255)) break p004e0092;
		if (!CNDpresent(getFlag(51))) break p004e0092;
		if (!CNDonotzero(getFlag(51),2)) break p004e0092;
		if (!CNDonotzero(getFlag(51),13)) break p004e0092;
		if (!CNDozero(getFlag(51),14)) break p004e0092;
 		ACCwriteln(815);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0093:
	{
 		if (skipdoall('p004e0093')) break p004e0093;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0093;
 		}
		if (!CNDnoteq(51,255)) break p004e0093;
		if (!CNDpresent(getFlag(51))) break p004e0093;
		if (!CNDonotzero(getFlag(51),2)) break p004e0093;
		if (!CNDonotzero(getFlag(51),9)) break p004e0093;
		if (!CNDozero(getFlag(51),10)) break p004e0093;
 		ACCwriteln(816);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0094:
	{
 		if (skipdoall('p004e0094')) break p004e0094;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0094;
 		}
		if (!CNDnoteq(51,255)) break p004e0094;
		if (!CNDpresent(getFlag(51))) break p004e0094;
		if (!CNDonotzero(getFlag(51),18)) break p004e0094;
 		ACCobjat(getFlag(51),13);
		if (!CNDnotzero(13)) break p004e0094;
 		ACCwrite(817);
 		ACClistcontents(getFlag(51));
 		ACCwriteln(818);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0095:
	{
 		if (skipdoall('p004e0095')) break p004e0095;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0095;
 		}
		if (!CNDnoteq(51,255)) break p004e0095;
		if (!CNDpresent(getFlag(51))) break p004e0095;
 		ACCwriteln(819);
 		ACCdone();
		break pro004_restart;
		{}

	}

	// EX _
	p004e0096:
	{
 		if (skipdoall('p004e0096')) break p004e0096;
 		if (in_response)
		{
			if (!CNDverb(30)) break p004e0096;
 		}
		if (!CNDnoteq(51,255)) break p004e0096;
		if (!CNDabsent(getFlag(51))) break p004e0096;
 		ACCwriteln(820);
 		ACCdone();
		break pro004_restart;
		{}

	}


}
}

function pro005()
{
process_restart=true;
pro005_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p005e0000:
	{
 		if (skipdoall('p005e0000')) break p005e0000;
 		ACCgoto(29);
 		ACCdesc();
		break pro005_restart;
		{}

	}


}
}

function pro006()
{
process_restart=true;
pro006_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p006e0000:
	{
 		if (skipdoall('p006e0000')) break p006e0000;
 		ACCwrite(821);
 		ACCpause(100);
 		function anykey00047() 
		{
 		ACCprocess(5);
		}
 		function anykey00046() 
		{
 		ACCmessage(43);
 		ACCanykey();
 		waitKey(anykey00047);
		}
 		function anykey00045() 
		{
 		ACCwriteln(822);
 		ACCpause(100);
 		waitKey(anykey00046);
		}
 		waitKey(anykey00045);
		done_flag=true;
		break pro006_restart;
		{}

	}


}
}

function pro007()
{
process_restart=true;
pro007_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p007e0000:
	{
 		if (skipdoall('p007e0000')) break p007e0000;
 		ACCmessage(41);
 		ACCpause(150);
 		function anykey00050() 
		{
 		ACCprocess(5);
		}
 		function anykey00049() 
		{
 		ACCmessage(43);
 		ACCanykey();
 		waitKey(anykey00050);
		}
 		function anykey00048() 
		{
 		ACCmessage(42);
 		ACCpause(150);
 		waitKey(anykey00049);
		}
 		waitKey(anykey00048);
		done_flag=true;
		break pro007_restart;
		{}

	}


}
}

function pro008()
{
process_restart=true;
pro008_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p008e0000:
	{
 		if (skipdoall('p008e0000')) break p008e0000;
 		ACCmessage(41);
 		ACCpause(150);
 		function anykey00053() 
		{
 		ACCprocess(5);
		}
 		function anykey00052() 
		{
 		ACCmessage(43);
 		ACCanykey();
 		waitKey(anykey00053);
		}
 		function anykey00051() 
		{
 		ACCwriteln(823);
 		ACCpause(150);
 		waitKey(anykey00052);
		}
 		waitKey(anykey00051);
		done_flag=true;
		break pro008_restart;
		{}

	}


}
}

function pro009()
{
process_restart=true;
pro009_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p009e0000:
	{
 		if (skipdoall('p009e0000')) break p009e0000;
		if (!CNDparse()) break p009e0000;
		if (!CNDnoteq(101,3)) break p009e0000;
 		ACCwriteln(824);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ _
	p009e0001:
	{
 		if (skipdoall('p009e0001')) break p009e0001;
		if (!CNDeq(101,3)) break p009e0001;
		if (!CNDzero(104)) break p009e0001;
 		ACCnewline();
 		ACCwriteln(825);
 		ACCset(104);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// AYUDA _
	p009e0002:
	{
 		if (skipdoall('p009e0002')) break p009e0002;
 		if (in_response)
		{
			if (!CNDverb(34)) break p009e0002;
 		}
 		ACCwriteln(826);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ MIERDA
	p009e0003:
	{
 		if (skipdoall('p009e0003')) break p009e0003;
 		if (in_response)
		{
			if (!CNDnoun1(117)) break p009e0003;
 		}
 		ACClet(33,119);
		{}

	}

	// CABRON _
	p009e0004:
	{
 		if (skipdoall('p009e0004')) break p009e0004;
 		if (in_response)
		{
			if (!CNDverb(119)) break p009e0004;
 		}
 		ACClet(101,3);
		if (!CNDnotat(20)) break p009e0004;
 		ACCwriteln(827);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// CABRON _
	p009e0005:
	{
 		if (skipdoall('p009e0005')) break p009e0005;
 		if (in_response)
		{
			if (!CNDverb(119)) break p009e0005;
 		}
 		ACCwriteln(828);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ ESTAS
	p009e0006:
	{
 		if (skipdoall('p009e0006')) break p009e0006;
 		if (in_response)
		{
			if (!CNDnoun1(15)) break p009e0006;
 		}
 		ACCnewline();
 		ACCwriteln(829);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ CABAÑ
	p009e0007:
	{
 		if (skipdoall('p009e0007')) break p009e0007;
 		if (in_response)
		{
			if (!CNDnoun1(56)) break p009e0007;
 		}
 		ACCwriteln(830);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ SIGUE
	p009e0008:
	{
 		if (skipdoall('p009e0008')) break p009e0008;
 		if (in_response)
		{
			if (!CNDnoun1(106)) break p009e0008;
 		}
 		ACClet(33,120);
		{}

	}

	// ACERCATE _
	p009e0009:
	{
 		if (skipdoall('p009e0009')) break p009e0009;
 		if (in_response)
		{
			if (!CNDverb(120)) break p009e0009;
 		}
 		ACClet(101,4);
 		ACCwriteln(831);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ LLAMAS
	p009e0010:
	{
 		if (skipdoall('p009e0010')) break p009e0010;
 		if (in_response)
		{
			if (!CNDnoun1(109)) break p009e0010;
 		}
 		ACCwriteln(832);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ HOLA
	p009e0011:
	{
 		if (skipdoall('p009e0011')) break p009e0011;
 		if (in_response)
		{
			if (!CNDnoun1(115)) break p009e0011;
 		}
 		ACCwriteln(833);
 		ACCdone();
		break pro009_restart;
		{}

	}

	// _ _
	p009e0012:
	{
 		if (skipdoall('p009e0012')) break p009e0012;
 		ACCwriteln(834);
 		ACCdone();
		break pro009_restart;
		{}

	}


}
}

function pro010()
{
process_restart=true;
pro010_restart: while(process_restart)
{
	process_restart=false;
	// DECIR ENANO
	p010e0000:
	{
 		if (skipdoall('p010e0000')) break p010e0000;
 		if (in_response)
		{
			if (!CNDverb(31)) break p010e0000;
			if (!CNDnoun1(68)) break p010e0000;
 		}
		if (!CNDprep(9)) break p010e0000;
 		ACCwriteln(835);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ _
	p010e0001:
	{
 		if (skipdoall('p010e0001')) break p010e0001;
		if (!CNDparse()) break p010e0001;
 		ACCwriteln(836);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// AYUDA _
	p010e0002:
	{
 		if (skipdoall('p010e0002')) break p010e0002;
 		if (in_response)
		{
			if (!CNDverb(34)) break p010e0002;
 		}
 		ACCwriteln(837);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ MIERDA
	p010e0003:
	{
 		if (skipdoall('p010e0003')) break p010e0003;
 		if (in_response)
		{
			if (!CNDnoun1(117)) break p010e0003;
 		}
 		ACCprocess(11);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// CABRON _
	p010e0004:
	{
 		if (skipdoall('p010e0004')) break p010e0004;
 		if (in_response)
		{
			if (!CNDverb(119)) break p010e0004;
 		}
 		ACCprocess(11);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ ESTAS
	p010e0005:
	{
 		if (skipdoall('p010e0005')) break p010e0005;
 		if (in_response)
		{
			if (!CNDnoun1(15)) break p010e0005;
 		}
 		ACCwriteln(838);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// ACERCATE _
	p010e0006:
	{
 		if (skipdoall('p010e0006')) break p010e0006;
 		if (in_response)
		{
			if (!CNDverb(120)) break p010e0006;
 		}
 		ACCwriteln(839);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ SIGUE
	p010e0007:
	{
 		if (skipdoall('p010e0007')) break p010e0007;
 		if (in_response)
		{
			if (!CNDnoun1(106)) break p010e0007;
 		}
 		ACCwriteln(840);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// BESA _
	p010e0008:
	{
 		if (skipdoall('p010e0008')) break p010e0008;
 		if (in_response)
		{
			if (!CNDverb(62)) break p010e0008;
 		}
 		ACCwriteln(841);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ LLAMAS
	p010e0009:
	{
 		if (skipdoall('p010e0009')) break p010e0009;
 		if (in_response)
		{
			if (!CNDnoun1(109)) break p010e0009;
 		}
 		ACCwriteln(842);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ HOLA
	p010e0010:
	{
 		if (skipdoall('p010e0010')) break p010e0010;
 		if (in_response)
		{
			if (!CNDnoun1(115)) break p010e0010;
 		}
 		ACCwriteln(843);
 		ACCdone();
		break pro010_restart;
		{}

	}

	// _ _
	p010e0011:
	{
 		if (skipdoall('p010e0011')) break p010e0011;
 		ACCwriteln(844);
 		ACCdone();
		break pro010_restart;
		{}

	}


}
}

function pro011()
{
process_restart=true;
pro011_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p011e0000:
	{
 		if (skipdoall('p011e0000')) break p011e0000;
 		ACCset(102);
 		ACCwriteln(845);
 		ACCpause(100);
 		function anykey00056() 
		{
 		ACCprocess(6);
 		ACCdone();
		return;
		}
 		function anykey00055() 
		{
 		ACCwriteln(847);
 		ACCpause(150);
 		waitKey(anykey00056);
		}
 		function anykey00054() 
		{
 		ACCwrite(846);
 		ACCpause(100);
 		waitKey(anykey00055);
		}
 		waitKey(anykey00054);
		done_flag=true;
		break pro011_restart;
		{}

	}


}
}

function pro012()
{
process_restart=true;
pro012_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p012e0000:
	{
 		if (skipdoall('p012e0000')) break p012e0000;
 		ACCcommand(1);
 		ACCgoto(1);
 		ACCdesc();
		break pro012_restart;
		{}

	}


}
}

function pro013()
{
process_restart=true;
pro013_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p013e0000:
	{
 		if (skipdoall('p013e0000')) break p013e0000;
		entry_for_doall = 'p013e0001';
		process_in_doall = 13;
 		ACCdoall(254);
		break pro013_restart;
		{}

	}

	// DEJA _
	p013e0001:
	{
 		if (skipdoall('p013e0001')) break p013e0001;
 		if (in_response)
		{
			if (!CNDverb(21)) break p013e0001;
 		}
 		ACCautod();
		if (!success) break pro013_restart;
 		ACCputo(10);
 		ACCdone();
		break pro013_restart;
		{}

	}


}
}

function pro014()
{
process_restart=true;
pro014_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p014e0000:
	{
 		if (skipdoall('p014e0000')) break p014e0000;
 		ACClet(33,21);
		entry_for_doall = 'p014e0001';
		process_in_doall = 14;
 		ACCdoall(254);
		break pro014_restart;
		{}

	}

	// DEJA _
	p014e0001:
	{
 		if (skipdoall('p014e0001')) break p014e0001;
 		if (in_response)
		{
			if (!CNDverb(21)) break p014e0001;
 		}
 		ACCautod();
		if (!success) break pro014_restart;
 		ACCdone();
		break pro014_restart;
		{}

	}


}
}

function pro015()
{
process_restart=true;
pro015_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p015e0000:
	{
 		if (skipdoall('p015e0000')) break p015e0000;
 		ACCset(7);
 		ACCpicture(260);
 		ACCwriteln(848);
		{}

	}


}
}

function pro016()
{
process_restart=true;
pro016_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p016e0000:
	{
 		if (skipdoall('p016e0000')) break p016e0000;
		if (!CNDisnotat(27,47)) break p016e0000;
 		ACCdone();
		break pro016_restart;
		{}

	}

	// _ _
	p016e0001:
	{
 		if (skipdoall('p016e0001')) break p016e0001;
 		ACCwhato();
		if (!CNDlt(51,14)) break p016e0001;
 		ACCcopyff(46,34);
 		ACCwhato();
		if (!CNDlt(51,14)) break p016e0001;
 		ACCdone();
		break pro016_restart;
		{}

	}

	// _ _
	p016e0002:
	{
 		if (skipdoall('p016e0002')) break p016e0002;
		if (!CNDnoteq(54,254)) break p016e0002;
		if (!CNDnotsame(54,38)) break p016e0002;
 		ACCdone();
		break pro016_restart;
		{}

	}

	// _ _
	p016e0003:
	{
 		if (skipdoall('p016e0003')) break p016e0003;
		if (!CNDchance(80)) break p016e0003;
 		ACCdone();
		break pro016_restart;
		{}

	}

	// _ _
	p016e0004:
	{
 		if (skipdoall('p016e0004')) break p016e0004;
 		ACCputo(47);
 		ACCcls();
 		ACCpicture(264);
 		ACCwrite(849);
 		ACCpause(100);
 		function anykey00058() 
		{
 		ACCdesc();
		return;
		}
 		function anykey00057() 
		{
 		ACCwriteln(850);
 		ACCnewline();
 		ACCanykey();
 		waitKey(anykey00058);
		}
 		waitKey(anykey00057);
		done_flag=true;
		break pro016_restart;
		{}

	}


}
}

function pro017()
{
process_restart=true;
pro017_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p017e0000:
	{
 		if (skipdoall('p017e0000')) break p017e0000;
		if (!CNDnotzero(0)) break p017e0000;
		if (!CNDabsent(0)) break p017e0000;
 		ACCdone();
		break pro017_restart;
		{}

	}

	// _ _
	p017e0001:
	{
 		if (skipdoall('p017e0001')) break p017e0001;
 		ACCdesc();
		break pro017_restart;
		{}

	}


}
}

function pro018()
{
process_restart=true;
pro018_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p018e0000:
	{
 		if (skipdoall('p018e0000')) break p018e0000;
		if (!CNDnotzero(0)) break p018e0000;
		if (!CNDabsent(0)) break p018e0000;
 		ACCdone();
		break pro018_restart;
		{}

	}

	// _ _
	p018e0001:
	{
 		if (skipdoall('p018e0001')) break p018e0001;
		if (!CNDat(82)) break p018e0001;
		if (!CNDlt(119,255)) break p018e0001;
 		ACCpicture(261);
		{}

	}

	// _ _
	p018e0002:
	{
 		if (skipdoall('p018e0002')) break p018e0002;
		if (!CNDat(82)) break p018e0002;
		if (!CNDislight()) break p018e0002;
 		ACCwrite(851);
		if (!CNDlt(119,255)) break p018e0002;
 		ACCwriteln(852);
		{}

	}

	// _ _
	p018e0003:
	{
 		if (skipdoall('p018e0003')) break p018e0003;
		if (!CNDat(82)) break p018e0003;
		if (!CNDislight()) break p018e0003;
		if (!CNDeq(119,255)) break p018e0003;
 		ACCwriteln(853);
		{}

	}

	// _ _
	p018e0004:
	{
 		if (skipdoall('p018e0004')) break p018e0004;
		if (!CNDislight()) break p018e0004;
		if (!CNDatgt(101)) break p018e0004;
		if (!CNDatlt(104)) break p018e0004;
		if (!CNDzero(121)) break p018e0004;
 		ACCwriteln(854);
		{}

	}

	// _ _
	p018e0005:
	{
 		if (skipdoall('p018e0005')) break p018e0005;
		if (!CNDislight()) break p018e0005;
		if (!CNDat(66)) break p018e0005;
		if (!CNDlt(116,9)) break p018e0005;
 		ACCwriteln(855);
		{}

	}

	// _ _
	p018e0006:
	{
 		if (skipdoall('p018e0006')) break p018e0006;
		if (!CNDat(35)) break p018e0006;
		if (!CNDzero(130)) break p018e0006;
 		ACCwriteln(856);
		{}

	}

	// _ _
	p018e0007:
	{
 		if (skipdoall('p018e0007')) break p018e0007;
		if (!CNDislight()) break p018e0007;
		if (!CNDat(106)) break p018e0007;
		if (!CNDzero(124)) break p018e0007;
 		ACCwriteln(857);
		{}

	}

	// _ _
	p018e0008:
	{
 		if (skipdoall('p018e0008')) break p018e0008;
		if (!CNDislight()) break p018e0008;
		if (!CNDat(106)) break p018e0008;
		if (!CNDeq(124,1)) break p018e0008;
 		ACCwriteln(858);
		{}

	}

	// _ _
	p018e0009:
	{
 		if (skipdoall('p018e0009')) break p018e0009;
		if (!CNDislight()) break p018e0009;
		if (!CNDat(106)) break p018e0009;
		if (!CNDgt(124,1)) break p018e0009;
 		ACCwriteln(859);
		{}

	}

	// _ _
	p018e0010:
	{
 		if (skipdoall('p018e0010')) break p018e0010;
		if (!CNDislight()) break p018e0010;
		if (!CNDatgt(47)) break p018e0010;
		if (!CNDatlt(53)) break p018e0010;
 		ACCpicture(48);
 		ACCwrite(860);
		if (!CNDat(48)) break p018e0010;
 		ACCwrite(861);
 		ACCwrite(862);
 		ACCwrite(863);
 		ACCwrite(864);
		{}

	}

	// _ _
	p018e0011:
	{
 		if (skipdoall('p018e0011')) break p018e0011;
		if (!CNDat(53)) break p018e0011;
 		ACCpicture(48);
		{}

	}

	// _ _
	p018e0012:
	{
 		if (skipdoall('p018e0012')) break p018e0012;
		if (!CNDislight()) break p018e0012;
		if (!CNDat(49)) break p018e0012;
 		ACCwrite(865);
 		ACCwrite(866);
 		ACCwrite(867);
 		ACCwrite(868);
		{}

	}

	// _ _
	p018e0013:
	{
 		if (skipdoall('p018e0013')) break p018e0013;
		if (!CNDislight()) break p018e0013;
		if (!CNDat(50)) break p018e0013;
 		ACCwrite(869);
 		ACCwrite(870);
 		ACCwrite(871);
 		ACCwrite(872);
		{}

	}

	// _ _
	p018e0014:
	{
 		if (skipdoall('p018e0014')) break p018e0014;
		if (!CNDislight()) break p018e0014;
		if (!CNDat(51)) break p018e0014;
 		ACCwrite(873);
 		ACCwrite(874);
 		ACCwrite(875);
 		ACCwrite(876);
		{}

	}

	// _ _
	p018e0015:
	{
 		if (skipdoall('p018e0015')) break p018e0015;
		if (!CNDislight()) break p018e0015;
		if (!CNDat(52)) break p018e0015;
 		ACCwrite(877);
 		ACCwrite(878);
 		ACCwrite(879);
 		ACCwrite(880);
		{}

	}

	// _ _
	p018e0016:
	{
 		if (skipdoall('p018e0016')) break p018e0016;
		if (!CNDislight()) break p018e0016;
		if (!CNDatgt(47)) break p018e0016;
		if (!CNDatlt(53)) break p018e0016;
 		ACCwriteln(881);
		{}

	}

	// _ _
	p018e0017:
	{
 		if (skipdoall('p018e0017')) break p018e0017;
		if (!CNDat(95)) break p018e0017;
 		ACCpicture(94);
		{}

	}

	// _ _
	p018e0018:
	{
 		if (skipdoall('p018e0018')) break p018e0018;
		if (!CNDislight()) break p018e0018;
		if (!CNDat(92)) break p018e0018;
		if (!CNDzero(120)) break p018e0018;
 		ACCwriteln(882);
		{}

	}

	// _ _
	p018e0019:
	{
 		if (skipdoall('p018e0019')) break p018e0019;
		if (!CNDislight()) break p018e0019;
		if (!CNDat(92)) break p018e0019;
		if (!CNDeq(120,1)) break p018e0019;
 		ACCwriteln(883);
		{}

	}

	// _ _
	p018e0020:
	{
 		if (skipdoall('p018e0020')) break p018e0020;
		if (!CNDislight()) break p018e0020;
		if (!CNDat(92)) break p018e0020;
		if (!CNDgt(120,1)) break p018e0020;
 		ACCwriteln(884);
		{}

	}

	// _ _
	p018e0021:
	{
 		if (skipdoall('p018e0021')) break p018e0021;
		if (!CNDislight()) break p018e0021;
		if (!CNDat(117)) break p018e0021;
		if (!CNDzero(122)) break p018e0021;
 		ACCwriteln(885);
		{}

	}

	// _ _
	p018e0022:
	{
 		if (skipdoall('p018e0022')) break p018e0022;
		if (!CNDislight()) break p018e0022;
		if (!CNDat(117)) break p018e0022;
		if (!CNDeq(122,2)) break p018e0022;
 		ACCwriteln(886);
		{}

	}

	// _ _
	p018e0023:
	{
 		if (skipdoall('p018e0023')) break p018e0023;
		if (!CNDat(117)) break p018e0023;
		if (!CNDeq(122,255)) break p018e0023;
 		ACCpicture(262);
		{}

	}

	// _ _
	p018e0024:
	{
 		if (skipdoall('p018e0024')) break p018e0024;
		if (!CNDat(117)) break p018e0024;
		if (!CNDeq(122,1)) break p018e0024;
 		ACCpicture(263);
		{}

	}

	// _ _
	p018e0025:
	{
 		if (skipdoall('p018e0025')) break p018e0025;
		if (!CNDislight()) break p018e0025;
		if (!CNDeq(122,255)) break p018e0025;
 		ACCwriteln(887);
		{}

	}

	// _ _
	p018e0026:
	{
 		if (skipdoall('p018e0026')) break p018e0026;
		if (!CNDislight()) break p018e0026;
		if (!CNDatgt(41)) break p018e0026;
		if (!CNDatlt(48)) break p018e0026;
 		ACCpicture(42);
 		ACCwrite(888);
		if (!CNDat(42)) break p018e0026;
 		ACCwrite(889);
 		ACCwrite(890);
 		ACCwrite(891);
 		ACCwrite(892);
		{}

	}

	// _ _
	p018e0027:
	{
 		if (skipdoall('p018e0027')) break p018e0027;
		if (!CNDislight()) break p018e0027;
		if (!CNDat(43)) break p018e0027;
 		ACCwrite(893);
 		ACCwrite(894);
 		ACCwrite(895);
 		ACCwrite(896);
		{}

	}

	// _ _
	p018e0028:
	{
 		if (skipdoall('p018e0028')) break p018e0028;
		if (!CNDislight()) break p018e0028;
		if (!CNDat(44)) break p018e0028;
 		ACCwrite(897);
 		ACCwrite(898);
 		ACCwrite(899);
 		ACCwrite(900);
 		ACCwriteln(901);
 		ACCwrite(902);
		{}

	}

	// _ _
	p018e0029:
	{
 		if (skipdoall('p018e0029')) break p018e0029;
		if (!CNDislight()) break p018e0029;
		if (!CNDat(45)) break p018e0029;
 		ACCwrite(903);
 		ACCwrite(904);
 		ACCwrite(905);
 		ACCwrite(906);
		{}

	}

	// _ _
	p018e0030:
	{
 		if (skipdoall('p018e0030')) break p018e0030;
		if (!CNDislight()) break p018e0030;
		if (!CNDat(46)) break p018e0030;
 		ACCwrite(907);
 		ACCwrite(908);
 		ACCwrite(909);
 		ACCwrite(910);
		{}

	}

	// _ _
	p018e0031:
	{
 		if (skipdoall('p018e0031')) break p018e0031;
		if (!CNDislight()) break p018e0031;
		if (!CNDat(47)) break p018e0031;
 		ACCwrite(911);
 		ACCwrite(912);
 		ACCwrite(913);
 		ACCwrite(914);
 		ACCwriteln(915);
 		ACCwrite(916);
		{}

	}

	// _ _
	p018e0032:
	{
 		if (skipdoall('p018e0032')) break p018e0032;
		if (!CNDislight()) break p018e0032;
		if (!CNDatgt(41)) break p018e0032;
		if (!CNDatlt(48)) break p018e0032;
 		ACCwriteln(917);
		{}

	}

	// _ _
	p018e0033:
	{
 		if (skipdoall('p018e0033')) break p018e0033;
		if (!CNDislight()) break p018e0033;
		if (!CNDatgt(37)) break p018e0033;
		if (!CNDatlt(40)) break p018e0033;
 		ACCwrite(918);
		if (!CNDzero(160)) break p018e0033;
 		ACCwrite(919);
 		ACCwriteln(920);
 		ACCdone();
		break pro018_restart;
		{}

	}

	// _ _
	p018e0034:
	{
 		if (skipdoall('p018e0034')) break p018e0034;
		if (!CNDislight()) break p018e0034;
		if (!CNDatgt(37)) break p018e0034;
		if (!CNDatlt(40)) break p018e0034;
 		ACCwrite(921);
 		ACCwriteln(922);
		{}

	}

	// _ _
	p018e0035:
	{
 		if (skipdoall('p018e0035')) break p018e0035;
		if (!CNDat(120)) break p018e0035;
 		ACCpicture(29);
 		ACCcommand(0);
 		ACCwrite(923);
 		ACCprint(31);
 		ACCwriteln(924);
 		ACCnewline();
 		ACCwriteln(925);
 		ACCtime(0,0);
		{}

	}


}
}

function pro019()
{
process_restart=true;
pro019_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p019e0000:
	{
 		if (skipdoall('p019e0000')) break p019e0000;
		if (!CNDnotzero(0)) break p019e0000;
		if (!CNDabsent(0)) break p019e0000;
 		ACCdone();
		break pro019_restart;
		{}

	}

	// _ _
	p019e0001:
	{
 		if (skipdoall('p019e0001')) break p019e0001;
		if (!CNDeq(119,1)) break p019e0001;
 		ACCwriteln(926);
		{}

	}

	// _ _
	p019e0002:
	{
 		if (skipdoall('p019e0002')) break p019e0002;
		if (!CNDeq(119,2)) break p019e0002;
 		ACCwriteln(927);
		{}

	}

	// _ _
	p019e0003:
	{
 		if (skipdoall('p019e0003')) break p019e0003;
		if (!CNDeq(119,3)) break p019e0003;
 		ACCwriteln(928);
		{}

	}


}
}

function pro020()
{
process_restart=true;
pro020_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p020e0000:
	{
 		if (skipdoall('p020e0000')) break p020e0000;
		if (!CNDat(82)) break p020e0000;
		if (!CNDeq(119,255)) break p020e0000;
 		ACCwriteln(929);
 		ACCdone();
		break pro020_restart;
		{}

	}

	// _ _
	p020e0001:
	{
 		if (skipdoall('p020e0001')) break p020e0001;
		if (!CNDat(117)) break p020e0001;
		if (!CNDeq(122,1)) break p020e0001;
 		ACCwriteln(930);
 		ACCdone();
		break pro020_restart;
		{}

	}

	// _ _
	p020e0002:
	{
 		if (skipdoall('p020e0002')) break p020e0002;
		if (!CNDatgt(101)) break p020e0002;
		if (!CNDatlt(104)) break p020e0002;
		if (!CNDnotzero(121)) break p020e0002;
 		ACCwriteln(931);
 		ACCdone();
		break pro020_restart;
		{}

	}

	// DA TORTI
	p020e0003:
	{
 		if (skipdoall('p020e0003')) break p020e0003;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0003;
			if (!CNDnoun1(52)) break p020e0003;
 		}
		if (!CNDat(117)) break p020e0003;
		if (!CNDzero(122)) break p020e0003;
 		ACClet(122,2);
 		ACCwriteln(932);
 		ACCdestroy(2);
 		ACCdone();
		break pro020_restart;
		{}

	}

	// DA LAMPA
	p020e0004:
	{
 		if (skipdoall('p020e0004')) break p020e0004;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0004;
			if (!CNDnoun1(50)) break p020e0004;
 		}
		if (!CNDat(82)) break p020e0004;
 		ACCset(0);
 		ACCwrite(933);
 		ACCwriteln(934);
 		ACCdestroy(0);
 		ACCanykey();
 		function anykey00059() 
		{
 		ACCdesc();
		return;
		}
 		waitKey(anykey00059);
		done_flag=true;
		break pro020_restart;
		{}

	}

	// DA LAMPA
	p020e0005:
	{
 		if (skipdoall('p020e0005')) break p020e0005;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0005;
			if (!CNDnoun1(50)) break p020e0005;
 		}
		if (!CNDat(117)) break p020e0005;
 		ACCset(0);
 		ACCwrite(935);
 		ACCpause(100);
 		function anykey00061() 
		{
 		ACCdesc();
		return;
		}
 		function anykey00060() 
		{
 		ACCwriteln(936);
 		ACCdestroy(0);
 		ACCanykey();
 		waitKey(anykey00061);
		}
 		waitKey(anykey00060);
		done_flag=true;
		break pro020_restart;
		{}

	}

	// DA LAMPA
	p020e0006:
	{
 		if (skipdoall('p020e0006')) break p020e0006;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0006;
			if (!CNDnoun1(50)) break p020e0006;
 		}
		if (!CNDatgt(101)) break p020e0006;
		if (!CNDatlt(104)) break p020e0006;
 		ACCwrite(937);
 		ACCset(0);
 		ACCwrite(938);
 		ACCpause(100);
 		function anykey00063() 
		{
 		ACCdesc();
		return;
		}
 		function anykey00062() 
		{
 		ACCwriteln(939);
 		ACCnewline();
 		ACCdestroy(0);
 		ACCanykey();
 		waitKey(anykey00063);
		}
 		waitKey(anykey00062);
		done_flag=true;
		break pro020_restart;
		{}

	}

	// DA _
	p020e0007:
	{
 		if (skipdoall('p020e0007')) break p020e0007;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0007;
 		}
		if (!CNDat(82)) break p020e0007;
 		ACCdestroy(getFlag(51));
 		ACCwriteln(940);
 		ACCdone();
		break pro020_restart;
		{}

	}

	// DA _
	p020e0008:
	{
 		if (skipdoall('p020e0008')) break p020e0008;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0008;
 		}
		if (!CNDat(117)) break p020e0008;
 		ACCdestroy(getFlag(51));
 		ACCwriteln(941);
 		ACCdone();
		break pro020_restart;
		{}

	}

	// DA _
	p020e0009:
	{
 		if (skipdoall('p020e0009')) break p020e0009;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0009;
 		}
		if (!CNDnotat(103)) break p020e0009;
		if (!CNDgt(122,1)) break p020e0009;
 		ACCdestroy(getFlag(51));
 		ACCwriteln(942);
 		ACCdone();
		break pro020_restart;
		{}

	}

	// DA _
	p020e0010:
	{
 		if (skipdoall('p020e0010')) break p020e0010;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0010;
 		}
		if (!CNDnotat(103)) break p020e0010;
		if (!CNDgt(122,1)) break p020e0010;
 		ACCwriteln(943);
 		ACCdone();
		break pro020_restart;
		{}

	}

	// DA _
	p020e0011:
	{
 		if (skipdoall('p020e0011')) break p020e0011;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0011;
 		}
		if (!CNDat(117)) break p020e0011;
 		ACCwriteln(944);
 		ACCdone();
		break pro020_restart;
		{}

	}

	// DA _
	p020e0012:
	{
 		if (skipdoall('p020e0012')) break p020e0012;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0012;
 		}
		if (!CNDatgt(101)) break p020e0012;
		if (!CNDatlt(104)) break p020e0012;
		if (!CNDlt(51,14)) break p020e0012;
 		ACCwriteln(945);
 		ACCdestroy(getFlag(51));
 		ACCdone();
		break pro020_restart;
		{}

	}

	// DA _
	p020e0013:
	{
 		if (skipdoall('p020e0013')) break p020e0013;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0013;
 		}
		if (!CNDatgt(101)) break p020e0013;
		if (!CNDatlt(104)) break p020e0013;
 		ACCputo(125);
 		ACCwriteln(946);
 		ACCset(121);
 		ACCdone();
		break pro020_restart;
		{}

	}

	// DA _
	p020e0014:
	{
 		if (skipdoall('p020e0014')) break p020e0014;
 		if (in_response)
		{
			if (!CNDverb(73)) break p020e0014;
 		}
 		ACCwriteln(947);
		{}

	}


}
}

function pro021()
{
process_restart=true;
pro021_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p021e0000:
	{
 		if (skipdoall('p021e0000')) break p021e0000;
 		ACCcls();
		{}

	}

	// _ _
	p021e0001:
	{
 		if (skipdoall('p021e0001')) break p021e0001;
 		ACCwriteln(948);
 		ACCnewline();
 		ACClet(150,14);
		entry_for_doall = 'p021e0002';
		process_in_doall = 21;
 		ACCdoall(getFlag(38));
		break pro021_restart;
		if (!CNDgt(51,13)) break p021e0001;
 		ACCwriteln(949);
 		ACCminus(150,1);
		{}

	}

	// _ _
	p021e0002:
	{
 		if (skipdoall('p021e0002')) break p021e0002;
		if (!CNDgt(51,13)) break p021e0002;
 		ACCwriteln(950);
 		ACCminus(150,1);
		{}

	}

	// _ _
	p021e0003:
	{
 		if (skipdoall('p021e0003')) break p021e0003;
		if (!CNDlt(51,14)) break p021e0003;
 		ACCwriteln(951);
 		ACCnewline();
		{}

	}


}
}

function pro022()
{
process_restart=true;
pro022_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p022e0000:
	{
 		if (skipdoall('p022e0000')) break p022e0000;
 		ACCwriteln(952);
 		ACCanykey();
 		function anykey00064() 
		{
 		ACCgoto(120);
 		ACCclear(0);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00064);
		done_flag=true;
		break pro022_restart;
		{}

	}


}
}

function pro023()
{
process_restart=true;
pro023_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p023e0000:
	{
 		if (skipdoall('p023e0000')) break p023e0000;
 		ACCcls();
 		ACCpicture(261);
 		ACCwriteln(953);
 		ACCnewline();
 		ACCanykey();
 		function anykey00065() 
		{
 		ACCgoto(120);
 		ACCclear(0);
 		ACCdesc();
		return;
		}
 		waitKey(anykey00065);
		done_flag=true;
		break pro023_restart;
		{}

	}


}
}

function pro024()
{
process_restart=true;
pro024_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p024e0000:
	{
 		if (skipdoall('p024e0000')) break p024e0000;
		if (!CNDatgt(41)) break p024e0000;
		if (!CNDatlt(54)) break p024e0000;
 		ACCwriteln(954);
 		ACCdone();
		break pro024_restart;
		{}

	}

	// _ _
	p024e0001:
	{
 		if (skipdoall('p024e0001')) break p024e0001;
		if (!CNDat(101)) break p024e0001;
 		ACCwriteln(955);
 		ACCdone();
		break pro024_restart;
		{}

	}

	// _ _
	p024e0002:
	{
 		if (skipdoall('p024e0002')) break p024e0002;
		if (!CNDat(33)) break p024e0002;
 		ACCwriteln(956);
 		ACCdone();
		break pro024_restart;
		{}

	}

	// _ _
	p024e0003:
	{
 		if (skipdoall('p024e0003')) break p024e0003;
		if (!CNDat(68)) break p024e0003;
 		ACCwriteln(957);
 		ACCdone();
		break pro024_restart;
		{}

	}

	// _ _
	p024e0004:
	{
 		if (skipdoall('p024e0004')) break p024e0004;
		if (!CNDat(38)) break p024e0004;
 		ACCwriteln(958);
 		ACCdone();
		break pro024_restart;
		{}

	}

	// _ _
	p024e0005:
	{
 		if (skipdoall('p024e0005')) break p024e0005;
		if (!CNDnotcarr(0)) break p024e0005;
 		ACCwriteln(959);
 		ACCdone();
		break pro024_restart;
		{}

	}

	// _ _
	p024e0006:
	{
 		if (skipdoall('p024e0006')) break p024e0006;
		if (!CNDat(37)) break p024e0006;
		if (!CNDzero(131)) break p024e0006;
 		ACCwriteln(960);
 		ACCdone();
		break pro024_restart;
		{}

	}

	// _ _
	p024e0007:
	{
 		if (skipdoall('p024e0007')) break p024e0007;
		if (!CNDat(37)) break p024e0007;
 		ACCwriteln(961);
 		ACCdone();
		break pro024_restart;
		{}

	}

	// _ _
	p024e0008:
	{
 		if (skipdoall('p024e0008')) break p024e0008;
 		ACCwriteln(962);
 		ACCdone();
		break pro024_restart;
		{}

	}


}
}

function pro025()
{
process_restart=true;
pro025_restart: while(process_restart)
{
	process_restart=false;
	// _ ROCA
	p025e0000:
	{
 		if (skipdoall('p025e0000')) break p025e0000;
 		if (in_response)
		{
			if (!CNDnoun1(119)) break p025e0000;
 		}
		if (!CNDat(68)) break p025e0000;
 		ACClet(33,40);
 		ACClet(34,161);
		{}

	}

	// ACARICIA PILAR
	p025e0001:
	{
 		if (skipdoall('p025e0001')) break p025e0001;
 		if (in_response)
		{
			if (!CNDverb(40)) break p025e0001;
			if (!CNDnoun1(161)) break p025e0001;
 		}
		if (!CNDat(68)) break p025e0001;
 		ACCwriteln(963);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ _
	p025e0002:
	{
 		if (skipdoall('p025e0002')) break p025e0002;
		if (!CNDnotzero(0)) break p025e0002;
		if (!CNDabsent(0)) break p025e0002;
 		ACCwriteln(964);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BROTE
	p025e0003:
	{
 		if (skipdoall('p025e0003')) break p025e0003;
 		if (in_response)
		{
			if (!CNDnoun1(132)) break p025e0003;
 		}
		if (!CNDat(92)) break p025e0003;
		if (!CNDeq(120,1)) break p025e0003;
 		ACCwriteln(965);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BROTE
	p025e0004:
	{
 		if (skipdoall('p025e0004')) break p025e0004;
 		if (in_response)
		{
			if (!CNDnoun1(132)) break p025e0004;
 		}
		if (!CNDat(92)) break p025e0004;
		if (!CNDgt(120,1)) break p025e0004;
 		ACCwriteln(966);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BROTE
	p025e0005:
	{
 		if (skipdoall('p025e0005')) break p025e0005;
 		if (in_response)
		{
			if (!CNDnoun1(132)) break p025e0005;
 		}
		if (!CNDat(92)) break p025e0005;
 		ACCwriteln(967);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ ESPEJO
	p025e0006:
	{
 		if (skipdoall('p025e0006')) break p025e0006;
 		if (in_response)
		{
			if (!CNDnoun1(139)) break p025e0006;
 		}
		if (!CNDat(83)) break p025e0006;
 		ACCwriteln(968);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ ELFIT
	p025e0007:
	{
 		if (skipdoall('p025e0007')) break p025e0007;
 		if (in_response)
		{
			if (!CNDnoun1(104)) break p025e0007;
 		}
		if (!CNDat(69)) break p025e0007;
 		ACClet(34,145);
		{}

	}

	// _ ALFOMBRA
	p025e0008:
	{
 		if (skipdoall('p025e0008')) break p025e0008;
 		if (in_response)
		{
			if (!CNDnoun1(125)) break p025e0008;
 		}
		if (!CNDeq(44,255)) break p025e0008;
		if (!CNDat(96)) break p025e0008;
 		ACCwriteln(969);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ MENSAJE
	p025e0009:
	{
 		if (skipdoall('p025e0009')) break p025e0009;
 		if (in_response)
		{
			if (!CNDnoun1(124)) break p025e0009;
 		}
		if (!CNDat(96)) break p025e0009;
 		ACCwriteln(970);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ MENSAJE
	p025e0010:
	{
 		if (skipdoall('p025e0010')) break p025e0010;
 		if (in_response)
		{
			if (!CNDnoun1(124)) break p025e0010;
 		}
		if (!CNDat(104)) break p025e0010;
 		ACCwriteln(971);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ VENTANA
	p025e0011:
	{
 		if (skipdoall('p025e0011')) break p025e0011;
 		if (in_response)
		{
			if (!CNDnoun1(145)) break p025e0011;
 		}
		if (!CNDat(69)) break p025e0011;
 		ACCwriteln(972);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ ALMEJA
	p025e0012:
	{
 		if (skipdoall('p025e0012')) break p025e0012;
 		if (in_response)
		{
			if (!CNDnoun1(126)) break p025e0012;
 		}
		if (!CNDat(77)) break p025e0012;
 		ACCwriteln(973);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ LLAVE
	p025e0013:
	{
 		if (skipdoall('p025e0013')) break p025e0013;
 		if (in_response)
		{
			if (!CNDnoun1(54)) break p025e0013;
 		}
		if (!CNDcarried(4)) break p025e0013;
 		ACCwriteln(974);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ CACA
	p025e0014:
	{
 		if (skipdoall('p025e0014')) break p025e0014;
 		if (in_response)
		{
			if (!CNDnoun1(133)) break p025e0014;
 		}
		if (!CNDat(82)) break p025e0014;
 		ACCwriteln(975);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PUENTE
	p025e0015:
	{
 		if (skipdoall('p025e0015')) break p025e0015;
 		if (in_response)
		{
			if (!CNDnoun1(164)) break p025e0015;
 		}
		if (!CNDatgt(101)) break p025e0015;
		if (!CNDatlt(104)) break p025e0015;
 		ACCwriteln(976);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PUENTE
	p025e0016:
	{
 		if (skipdoall('p025e0016')) break p025e0016;
 		if (in_response)
		{
			if (!CNDnoun1(164)) break p025e0016;
 		}
		if (!CNDat(39)) break p025e0016;
 		ACCwriteln(977);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PRECI
	p025e0017:
	{
 		if (skipdoall('p025e0017')) break p025e0017;
 		if (in_response)
		{
			if (!CNDnoun1(67)) break p025e0017;
 		}
		if (!CNDat(38)) break p025e0017;
 		ACCwriteln(978);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ HACHA
	p025e0018:
	{
 		if (skipdoall('p025e0018')) break p025e0018;
 		if (in_response)
		{
			if (!CNDnoun1(149)) break p025e0018;
 		}
		if (!CNDat(106)) break p025e0018;
 		ACCwriteln(979);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ ESCUDO
	p025e0019:
	{
 		if (skipdoall('p025e0019')) break p025e0019;
 		if (in_response)
		{
			if (!CNDnoun1(171)) break p025e0019;
 		}
		if (!CNDat(106)) break p025e0019;
 		ACCwriteln(980);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PUERT
	p025e0020:
	{
 		if (skipdoall('p025e0020')) break p025e0020;
 		if (in_response)
		{
			if (!CNDnoun1(89)) break p025e0020;
 		}
		if (!CNDat(106)) break p025e0020;
		if (!CNDzero(124)) break p025e0020;
 		ACCwriteln(981);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PUERT
	p025e0021:
	{
 		if (skipdoall('p025e0021')) break p025e0021;
 		if (in_response)
		{
			if (!CNDnoun1(89)) break p025e0021;
 		}
		if (!CNDat(106)) break p025e0021;
		if (!CNDeq(124,1)) break p025e0021;
 		ACCwriteln(982);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PUERT
	p025e0022:
	{
 		if (skipdoall('p025e0022')) break p025e0022;
 		if (in_response)
		{
			if (!CNDnoun1(89)) break p025e0022;
 		}
		if (!CNDat(106)) break p025e0022;
 		ACCwriteln(983);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BICHO
	p025e0023:
	{
 		if (skipdoall('p025e0023')) break p025e0023;
 		if (in_response)
		{
			if (!CNDnoun1(130)) break p025e0023;
 		}
		if (!CNDat(82)) break p025e0023;
		if (!CNDnoteq(119,255)) break p025e0023;
 		ACCwriteln(984);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ LAGO
	p025e0024:
	{
 		if (skipdoall('p025e0024')) break p025e0024;
 		if (in_response)
		{
			if (!CNDnoun1(175)) break p025e0024;
 		}
		if (!CNDat(84)) break p025e0024;
 		ACCwriteln(985);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ MAQUINA
	p025e0025:
	{
 		if (skipdoall('p025e0025')) break p025e0025;
 		if (in_response)
		{
			if (!CNDnoun1(155)) break p025e0025;
 		}
		if (!CNDat(53)) break p025e0025;
 		ACCwriteln(986);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ TORTI
	p025e0026:
	{
 		if (skipdoall('p025e0026')) break p025e0026;
 		if (in_response)
		{
			if (!CNDnoun1(52)) break p025e0026;
 		}
		if (!CNDpresent(2)) break p025e0026;
 		ACCwriteln(987);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ CHARC
	p025e0027:
	{
 		if (skipdoall('p025e0027')) break p025e0027;
 		if (in_response)
		{
			if (!CNDnoun1(75)) break p025e0027;
 		}
		if (!CNDat(69)) break p025e0027;
 		ACCwriteln(988);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ NIEBLA
	p025e0028:
	{
 		if (skipdoall('p025e0028')) break p025e0028;
 		if (in_response)
		{
			if (!CNDnoun1(156)) break p025e0028;
 		}
		if (!CNDat(37)) break p025e0028;
 		ACCwriteln(989);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ NIEBLA
	p025e0029:
	{
 		if (skipdoall('p025e0029')) break p025e0029;
 		if (in_response)
		{
			if (!CNDnoun1(156)) break p025e0029;
 		}
		if (!CNDat(69)) break p025e0029;
 		ACCwriteln(990);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ NIEBLA
	p025e0030:
	{
 		if (skipdoall('p025e0030')) break p025e0030;
 		if (in_response)
		{
			if (!CNDnoun1(156)) break p025e0030;
 		}
		if (!CNDat(38)) break p025e0030;
 		ACCwriteln(991);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ NIEBLA
	p025e0031:
	{
 		if (skipdoall('p025e0031')) break p025e0031;
 		if (in_response)
		{
			if (!CNDnoun1(156)) break p025e0031;
 		}
		if (!CNDat(40)) break p025e0031;
 		ACCwriteln(992);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ NIEBLA
	p025e0032:
	{
 		if (skipdoall('p025e0032')) break p025e0032;
 		if (in_response)
		{
			if (!CNDnoun1(156)) break p025e0032;
 		}
		if (!CNDat(36)) break p025e0032;
 		ACCwriteln(993);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ NIEBLA
	p025e0033:
	{
 		if (skipdoall('p025e0033')) break p025e0033;
 		if (in_response)
		{
			if (!CNDnoun1(156)) break p025e0033;
 		}
		if (!CNDat(69)) break p025e0033;
 		ACCwriteln(994);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ NIEBLA
	p025e0034:
	{
 		if (skipdoall('p025e0034')) break p025e0034;
 		if (in_response)
		{
			if (!CNDnoun1(156)) break p025e0034;
 		}
		if (!CNDat(40)) break p025e0034;
 		ACCwriteln(995);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ CAMIN
	p025e0035:
	{
 		if (skipdoall('p025e0035')) break p025e0035;
 		if (in_response)
		{
			if (!CNDnoun1(66)) break p025e0035;
 		}
		if (!CNDat(78)) break p025e0035;
 		ACCwriteln(996);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ CAMIN
	p025e0036:
	{
 		if (skipdoall('p025e0036')) break p025e0036;
 		if (in_response)
		{
			if (!CNDnoun1(66)) break p025e0036;
 		}
		if (!CNDat(79)) break p025e0036;
 		ACCwriteln(997);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ DEPOSITO
	p025e0037:
	{
 		if (skipdoall('p025e0037')) break p025e0037;
 		if (in_response)
		{
			if (!CNDnoun1(176)) break p025e0037;
 		}
		if (!CNDat(93)) break p025e0037;
 		ACCwriteln(998);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ SUELO
	p025e0038:
	{
 		if (skipdoall('p025e0038')) break p025e0038;
 		if (in_response)
		{
			if (!CNDnoun1(72)) break p025e0038;
 		}
		if (!CNDat(83)) break p025e0038;
 		ACClet(34,77);
		{}

	}

	// _ SUELO
	p025e0039:
	{
 		if (skipdoall('p025e0039')) break p025e0039;
 		if (in_response)
		{
			if (!CNDnoun1(72)) break p025e0039;
 		}
		if (!CNDat(81)) break p025e0039;
 		ACClet(34,77);
		{}

	}

	// _ AGUJE
	p025e0040:
	{
 		if (skipdoall('p025e0040')) break p025e0040;
 		if (in_response)
		{
			if (!CNDnoun1(77)) break p025e0040;
 		}
		if (!CNDat(81)) break p025e0040;
 		ACCwriteln(999);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ AGUJE
	p025e0041:
	{
 		if (skipdoall('p025e0041')) break p025e0041;
 		if (in_response)
		{
			if (!CNDnoun1(77)) break p025e0041;
 		}
		if (!CNDat(81)) break p025e0041;
 		ACCwriteln(1000);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ AGUJE
	p025e0042:
	{
 		if (skipdoall('p025e0042')) break p025e0042;
 		if (in_response)
		{
			if (!CNDnoun1(77)) break p025e0042;
 		}
		if (!CNDat(92)) break p025e0042;
 		ACCwriteln(1001);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ TRONO
	p025e0043:
	{
 		if (skipdoall('p025e0043')) break p025e0043;
 		if (in_response)
		{
			if (!CNDnoun1(177)) break p025e0043;
 		}
		if (!CNDat(66)) break p025e0043;
 		ACCwriteln(1002);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ TROFEO
	p025e0044:
	{
 		if (skipdoall('p025e0044')) break p025e0044;
 		if (in_response)
		{
			if (!CNDnoun1(174)) break p025e0044;
 		}
		if (!CNDat(66)) break p025e0044;
 		ACCwriteln(1003);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ TAPICES
	p025e0045:
	{
 		if (skipdoall('p025e0045')) break p025e0045;
 		if (in_response)
		{
			if (!CNDnoun1(173)) break p025e0045;
 		}
		if (!CNDat(66)) break p025e0045;
 		ACCwriteln(1004);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ CUADLO
	p025e0046:
	{
 		if (skipdoall('p025e0046')) break p025e0046;
 		if (in_response)
		{
			if (!CNDnoun1(178)) break p025e0046;
 		}
		if (!CNDat(98)) break p025e0046;
 		ACCwriteln(1005);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ SEDA
	p025e0047:
	{
 		if (skipdoall('p025e0047')) break p025e0047;
 		if (in_response)
		{
			if (!CNDnoun1(179)) break p025e0047;
 		}
		if (!CNDat(98)) break p025e0047;
 		ACCwriteln(1006);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ LUZ
	p025e0048:
	{
 		if (skipdoall('p025e0048')) break p025e0048;
 		if (in_response)
		{
			if (!CNDnoun1(116)) break p025e0048;
 		}
		if (!CNDat(100)) break p025e0048;
 		ACCwriteln(1007);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ ESCAL
	p025e0049:
	{
 		if (skipdoall('p025e0049')) break p025e0049;
 		if (in_response)
		{
			if (!CNDnoun1(74)) break p025e0049;
 		}
		if (!CNDat(37)) break p025e0049;
 		ACCwriteln(1008);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PUERT
	p025e0050:
	{
 		if (skipdoall('p025e0050')) break p025e0050;
 		if (in_response)
		{
			if (!CNDnoun1(89)) break p025e0050;
 		}
		if (!CNDat(101)) break p025e0050;
 		ACCwriteln(1009);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ ROCA
	p025e0051:
	{
 		if (skipdoall('p025e0051')) break p025e0051;
 		if (in_response)
		{
			if (!CNDnoun1(119)) break p025e0051;
 		}
		if (!CNDat(112)) break p025e0051;
 		ACCwriteln(1010);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ ANIMAL
	p025e0052:
	{
 		if (skipdoall('p025e0052')) break p025e0052;
 		if (in_response)
		{
			if (!CNDnoun1(182)) break p025e0052;
 		}
		if (!CNDat(116)) break p025e0052;
 		ACCwriteln(1011);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ LAMPA
	p025e0053:
	{
 		if (skipdoall('p025e0053')) break p025e0053;
 		if (in_response)
		{
			if (!CNDnoun1(50)) break p025e0053;
 		}
		if (!CNDnotzero(105)) break p025e0053;
 		ACClet(34,55);
		{}

	}

	// _ BATERIA
	p025e0054:
	{
 		if (skipdoall('p025e0054')) break p025e0054;
 		if (in_response)
		{
			if (!CNDnoun1(55)) break p025e0054;
 		}
		if (!CNDabsent(0)) break p025e0054;
 		ACCwriteln(1012);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BATERIA
	p025e0055:
	{
 		if (skipdoall('p025e0055')) break p025e0055;
 		if (in_response)
		{
			if (!CNDnoun1(55)) break p025e0055;
 		}
		if (!CNDozero(0,20)) break p025e0055;
 		ACCwrite(1013);
		{}

	}

	// _ BATERIA
	p025e0056:
	{
 		if (skipdoall('p025e0056')) break p025e0056;
 		if (in_response)
		{
			if (!CNDnoun1(55)) break p025e0056;
 		}
		if (!CNDonotzero(0,20)) break p025e0056;
 		ACCwrite(1014);
		{}

	}

	// _ BATERIA
	p025e0057:
	{
 		if (skipdoall('p025e0057')) break p025e0057;
 		if (in_response)
		{
			if (!CNDnoun1(55)) break p025e0057;
 		}
		if (!CNDzero(105)) break p025e0057;
		if (!CNDabsent(5)) break p025e0057;
 		ACCwriteln(1015);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BATERIA
	p025e0058:
	{
 		if (skipdoall('p025e0058')) break p025e0058;
 		if (in_response)
		{
			if (!CNDnoun1(55)) break p025e0058;
 		}
 		ACCwrite(1016);
		if (!CNDnotzero(8)) break p025e0058;
 		ACCprint(8);
 		ACCnewline();
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BATERIA
	p025e0059:
	{
 		if (skipdoall('p025e0059')) break p025e0059;
 		if (in_response)
		{
			if (!CNDnoun1(55)) break p025e0059;
 		}
 		ACCwriteln(1017);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BARROTE
	p025e0060:
	{
 		if (skipdoall('p025e0060')) break p025e0060;
 		if (in_response)
		{
			if (!CNDnoun1(129)) break p025e0060;
 		}
		if (!CNDat(31)) break p025e0060;
 		ACCwriteln(1018);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BARROTE
	p025e0061:
	{
 		if (skipdoall('p025e0061')) break p025e0061;
 		if (in_response)
		{
			if (!CNDnoun1(129)) break p025e0061;
 		}
		if (!CNDat(116)) break p025e0061;
		if (!CNDzero(123)) break p025e0061;
 		ACCwriteln(1019);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BARROTE
	p025e0062:
	{
 		if (skipdoall('p025e0062')) break p025e0062;
 		if (in_response)
		{
			if (!CNDnoun1(129)) break p025e0062;
 		}
		if (!CNDpresent(7)) break p025e0062;
		if (!CNDozero(7,23)) break p025e0062;
 		ACCwriteln(1020);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BARROTE
	p025e0063:
	{
 		if (skipdoall('p025e0063')) break p025e0063;
 		if (in_response)
		{
			if (!CNDnoun1(129)) break p025e0063;
 		}
		if (!CNDcarried(7)) break p025e0063;
		if (!CNDonotzero(7,23)) break p025e0063;
 		ACCwriteln(1021);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PAJARO
	p025e0064:
	{
 		if (skipdoall('p025e0064')) break p025e0064;
 		if (in_response)
		{
			if (!CNDnoun1(158)) break p025e0064;
 		}
		if (!CNDcarried(7)) break p025e0064;
		if (!CNDonotzero(7,23)) break p025e0064;
 		ACCwriteln(1022);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PAJARO
	p025e0065:
	{
 		if (skipdoall('p025e0065')) break p025e0065;
 		if (in_response)
		{
			if (!CNDnoun1(158)) break p025e0065;
 		}
		if (!CNDat(35)) break p025e0065;
 		ACCwriteln(1023);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ MENSAJE
	p025e0066:
	{
 		if (skipdoall('p025e0066')) break p025e0066;
 		if (in_response)
		{
			if (!CNDnoun1(124)) break p025e0066;
 		}
		if (!CNDat(88)) break p025e0066;
 		ACCwriteln(1024);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ MENSAJE
	p025e0067:
	{
 		if (skipdoall('p025e0067')) break p025e0067;
 		if (in_response)
		{
			if (!CNDnoun1(124)) break p025e0067;
 		}
		if (!CNDat(37)) break p025e0067;
 		ACCwriteln(1025);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ MENSAJE
	p025e0068:
	{
 		if (skipdoall('p025e0068')) break p025e0068;
 		if (in_response)
		{
			if (!CNDnoun1(124)) break p025e0068;
 		}
		if (!CNDat(33)) break p025e0068;
 		ACCwriteln(1026);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ MENSAJE
	p025e0069:
	{
 		if (skipdoall('p025e0069')) break p025e0069;
 		if (in_response)
		{
			if (!CNDnoun1(124)) break p025e0069;
 		}
		if (!CNDat(68)) break p025e0069;
 		ACCwriteln(1027);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ MENSAJE
	p025e0070:
	{
 		if (skipdoall('p025e0070')) break p025e0070;
 		if (in_response)
		{
			if (!CNDnoun1(124)) break p025e0070;
 		}
		if (!CNDat(105)) break p025e0070;
 		ACCwriteln(1028);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ MENSAJE
	p025e0071:
	{
 		if (skipdoall('p025e0071')) break p025e0071;
 		if (in_response)
		{
			if (!CNDnoun1(124)) break p025e0071;
 		}
		if (!CNDat(106)) break p025e0071;
 		ACCwriteln(1029);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ MENSAJE
	p025e0072:
	{
 		if (skipdoall('p025e0072')) break p025e0072;
 		if (in_response)
		{
			if (!CNDnoun1(124)) break p025e0072;
 		}
 		ACCwriteln(1030);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ SERPIENTE
	p025e0073:
	{
 		if (skipdoall('p025e0073')) break p025e0073;
 		if (in_response)
		{
			if (!CNDnoun1(166)) break p025e0073;
 		}
		if (!CNDat(66)) break p025e0073;
		if (!CNDlt(116,9)) break p025e0073;
 		ACCwriteln(1031);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ ABISMO
	p025e0074:
	{
 		if (skipdoall('p025e0074')) break p025e0074;
 		if (in_response)
		{
			if (!CNDnoun1(146)) break p025e0074;
 		}
		if (!CNDatgt(37)) break p025e0074;
		if (!CNDatlt(40)) break p025e0074;
 		ACCwriteln(1032);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ GRIETA
	p025e0075:
	{
 		if (skipdoall('p025e0075')) break p025e0075;
 		if (in_response)
		{
			if (!CNDnoun1(87)) break p025e0075;
 		}
		if (!CNDatgt(101)) break p025e0075;
		if (!CNDatlt(104)) break p025e0075;
 		ACCwriteln(1033);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ TROLL
	p025e0076:
	{
 		if (skipdoall('p025e0076')) break p025e0076;
 		if (in_response)
		{
			if (!CNDnoun1(169)) break p025e0076;
 		}
		if (!CNDzero(121)) break p025e0076;
		if (!CNDatgt(101)) break p025e0076;
		if (!CNDatlt(104)) break p025e0076;
 		ACCwriteln(1034);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ OSO
	p025e0077:
	{
 		if (skipdoall('p025e0077')) break p025e0077;
 		if (in_response)
		{
			if (!CNDnoun1(157)) break p025e0077;
 		}
		if (!CNDat(117)) break p025e0077;
		if (!CNDnoteq(122,1)) break p025e0077;
 		ACCwriteln(1035);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ VOLCA
	p025e0078:
	{
 		if (skipdoall('p025e0078')) break p025e0078;
 		if (in_response)
		{
			if (!CNDnoun1(62)) break p025e0078;
 		}
		if (!CNDatgt(101)) break p025e0078;
		if (!CNDatlt(104)) break p025e0078;
 		ACCwriteln(1036);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ GAS
	p025e0079:
	{
 		if (skipdoall('p025e0079')) break p025e0079;
 		if (in_response)
		{
			if (!CNDnoun1(180)) break p025e0079;
 		}
		if (!CNDatgt(101)) break p025e0079;
		if (!CNDatlt(104)) break p025e0079;
 		ACCwriteln(1037);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ CORNISA
	p025e0080:
	{
 		if (skipdoall('p025e0080')) break p025e0080;
 		if (in_response)
		{
			if (!CNDnoun1(181)) break p025e0080;
 		}
		if (!CNDat(104)) break p025e0080;
 		ACCwriteln(1038);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PILAR
	p025e0081:
	{
 		if (skipdoall('p025e0081')) break p025e0081;
 		if (in_response)
		{
			if (!CNDnoun1(161)) break p025e0081;
 		}
		if (!CNDat(33)) break p025e0081;
 		ACCwriteln(1039);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ PILAR
	p025e0082:
	{
 		if (skipdoall('p025e0082')) break p025e0082;
 		if (in_response)
		{
			if (!CNDnoun1(161)) break p025e0082;
 		}
		if (!CNDat(68)) break p025e0082;
 		ACCwriteln(1040);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BOTEL
	p025e0083:
	{
 		if (skipdoall('p025e0083')) break p025e0083;
 		if (in_response)
		{
			if (!CNDnoun1(53)) break p025e0083;
 		}
		if (!CNDcarried(9)) break p025e0083;
 		ACCwriteln(1041);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BOTEL
	p025e0084:
	{
 		if (skipdoall('p025e0084')) break p025e0084;
 		if (in_response)
		{
			if (!CNDnoun1(53)) break p025e0084;
 		}
		if (!CNDcarried(3)) break p025e0084;
		if (!CNDozero(3,22)) break p025e0084;
 		ACCwriteln(1042);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ BOTEL
	p025e0085:
	{
 		if (skipdoall('p025e0085')) break p025e0085;
 		if (in_response)
		{
			if (!CNDnoun1(53)) break p025e0085;
 		}
		if (!CNDcarried(3)) break p025e0085;
 		ACCwriteln(1043);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ VARITA
	p025e0086:
	{
 		if (skipdoall('p025e0086')) break p025e0086;
 		if (in_response)
		{
			if (!CNDnoun1(168)) break p025e0086;
 		}
		if (!CNDpresent(8)) break p025e0086;
 		ACCwrite(1044);
		{}

	}

	// _ CANTO
	p025e0087:
	{
 		if (skipdoall('p025e0087')) break p025e0087;
 		if (in_response)
		{
			if (!CNDnoun1(135)) break p025e0087;
 		}
		if (!CNDpresent(13)) break p025e0087;
 		ACCwrite(1045);
		{}

	}

	// _ SUELO
	p025e0088:
	{
 		if (skipdoall('p025e0088')) break p025e0088;
 		if (in_response)
		{
			if (!CNDnoun1(72)) break p025e0088;
 		}
 		ACCwriteln(1046);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ _
	p025e0089:
	{
 		if (skipdoall('p025e0089')) break p025e0089;
 		ACCwhato();
		{}

	}

	// _ _
	p025e0090:
	{
 		if (skipdoall('p025e0090')) break p025e0090;
		if (!CNDeq(51,255)) break p025e0090;
 		ACCwriteln(1047);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ _
	p025e0091:
	{
 		if (skipdoall('p025e0091')) break p025e0091;
		if (!CNDabsent(getFlag(51))) break p025e0091;
 		ACCwriteln(1048);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ _
	p025e0092:
	{
 		if (skipdoall('p025e0092')) break p025e0092;
		if (!CNDpresent(getFlag(51))) break p025e0092;
		if (!CNDgt(51,13)) break p025e0092;
 		ACCwriteln(1049);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ _
	p025e0093:
	{
 		if (skipdoall('p025e0093')) break p025e0093;
		if (!CNDpresent(getFlag(51))) break p025e0093;
		if (!CNDlt(51,14)) break p025e0093;
 		ACCwriteln(1050);
 		ACCdone();
		break pro025_restart;
		{}

	}

	// _ _
	p025e0094:
	{
 		if (skipdoall('p025e0094')) break p025e0094;
 		ACCnotdone();
		break pro025_restart;
		{}

	}


}
}

function pro026()
{
process_restart=true;
pro026_restart: while(process_restart)
{
	process_restart=false;
	// _ _
	p026e0000:
	{
 		if (skipdoall('p026e0000')) break p026e0000;
		if (!CNDatlt(32)) break p026e0000;
 		ACCdone();
		break pro026_restart;
		{}

	}

	// _ _
	p026e0001:
	{
 		if (skipdoall('p026e0001')) break p026e0001;
		if (!CNDat(119)) break p026e0001;
 		ACCdone();
		break pro026_restart;
		{}

	}

	// _ _
	p026e0002:
	{
 		if (skipdoall('p026e0002')) break p026e0002;
		if (!CNDat(101)) break p026e0002;
 		ACCdone();
		break pro026_restart;
		{}

	}

	// _ _
	p026e0003:
	{
 		if (skipdoall('p026e0003')) break p026e0003;
		if (!CNDabsent(0)) break p026e0003;
 		ACCset(0);
		{}

	}

	// _ _
	p026e0004:
	{
 		if (skipdoall('p026e0004')) break p026e0004;
		if (!CNDpresent(0)) break p026e0004;
		if (!CNDozero(0,20)) break p026e0004;
 		ACCset(0);
		{}

	}

	// _ _
	p026e0005:
	{
 		if (skipdoall('p026e0005')) break p026e0005;
		if (!CNDpresent(0)) break p026e0005;
		if (!CNDonotzero(0,20)) break p026e0005;
 		ACCclear(0);
		{}

	}


}
}

last_process = 26;
// This file is (C) Carlos Sanchez 2014, released under the MIT license

// This function is called first by the start() function that runs when the game starts for the first time
var h_init = function()
{
}


// This function is called last by the start() function that runs when the game starts for the first time
var h_post =  function()
{
}

// This function is called when the engine tries to write any text
var h_writeText =  function (text)
{
	return text;
}

//This function is called every time the user types any order
var h_playerOrder = function(player_order)
{
	return player_order;
}

// This function is called every time a location is described, just after the location text is written
var h_description_init =  function ()
{
}

// This function is called every time a location is described, just after the process 1 is executed
var h_description_post = function()
{
}


// this function is called when the savegame object has been created, in order to be able to add more custom properties
var h_saveGame = function(savegame_object)
{
	return savegame_object;
}


// this function is called after the restore game function has restored the standard information in savegame, in order to restore any additional data included in a patched (by h_saveGame) savegame.
var h_restoreGame = function(savegame_object)
{
}

// this funcion is called before writing a message about player order beeing impossible to understand
var h_invalidOrder = function(player_order)
{
}

// this function is called when a sequence tag is found giving a chance for any hook library to provide a response
// tagparams receives the params inside the tag as an array  {XXXX|nn|mm|yy} => ['XXXX', 'nn', 'mm', 'yy']
var h_sequencetag = function (tagparams)
{
	return '';
}

// this function is called from certain points in the response or process tables via the HOOK condact. Depending on the string received it can do something or not.
// it's designed to allow direct javascript code to take control in the start database just installing a plugin library (avoiding the wirter need to enter code to activate the library)
var h_code = function(str)
{
	return false;
}


// this function is called from the keydown evente handler used by block and other functions to emulate a pause or waiting for a keypress. It is designed to allow plugin condacts or
// libraries to attend those key presses and react accordingly. In case a hook function decides that the standard keydown functions should not be processed, the hook function should return false.
// Also, any h_keydown replacement should probably do the same.
var h_keydown = function (event)
{
	return true;
}


// this function is called every time a process is called,  either by the internall loop of by the PROCESS condact, just before running it.
var h_preProcess = function(procno)
{

}

// this function is called every time a process is called just after the process exits (no matter which DONE status it has), either by the internall loop of by the PROCESS condact
var h_postProcess= function (procno)
{

}// This file is (C) Carlos Sanchez 2014, and is released under the MIT license
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// CONDACTS ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ACCdesc()
{
	describe_location_flag = true;
	ACCbreak(); // Cancel doall loop
}


function ACCdone()
{
	done_flag = true;
}

function CNDat(locno)
{
  return (loc_here()==locno);
}

function CNDnotat(locno)
{
	 return (loc_here()!=locno);
}


function CNDatgt(locno)
{
	 return (loc_here()>locno);
}


function CNDatlt(locno)
{
	 return (loc_here()<locno);
}

function CNDpresent(objno)
{
	var loc = getObjectLocation(objno);
	if (loc == loc_here()) return true;
	if (loc == LOCATION_WORN) return true;
	if (loc == LOCATION_CARRIED) return true;
	if ( (!bittest(getFlag(FLAG_PARSER_SETTINGS),7)) && (objectIsContainer(loc) || objectIsSupporter(loc))  &&  (loc<=last_object_number)  && (CNDpresent(loc)) )  // Extended context and object in another object that is present
	{
		if (objectIsSupporter(loc)) return true;  // On supporter
		if ( objectIsContainer(loc) && objectIsAttr(loc, ATTR_OPENABLE) && objectIsAttr(loc, ATTR_OPEN)) return true; // In a openable & open container
		if ( objectIsContainer(loc) && (!objectIsAttr(loc, ATTR_OPENABLE)) ) return true; // In a not openable container
	}
	return false;
}

function CNDabsent(objno)
{
	return !CNDpresent(objno);
}

function CNDworn(objno)
{
	return (getObjectLocation(objno) == LOCATION_WORN);
}

function CNDnotworn(objno)
{
	return !CNDworn(objno);
}

function CNDcarried(objno)
{
	return (getObjectLocation(objno) == LOCATION_CARRIED);	
}

function CNDnotcarr(objno)
{
	return !CNDcarried(objno);
}


function CNDchance(percent)
{
	 var val = Math.floor((Math.random()*101));
	 return (val<=percent);
}

function CNDzero(flagno)
{
	return (getFlag(flagno) == 0);
}

function CNDnotzero(flagno)
{
	 return !CNDzero(flagno)
}


function CNDeq(flagno, value)
{
	return (getFlag(flagno) == value);
}

function CNDnoteq(flagno,value)
{
	return !CNDeq(flagno, value);
}

function CNDgt(flagno, value)
{
	return (getFlag(flagno) > value);
}

function CNDlt(flagno, value)
{
	return (getFlag(flagno) < value);
}


function CNDadject1(wordno)
{
	return (getFlag(FLAG_ADJECT1) == wordno);
}

function CNDadverb(wordno)
{
	return (getFlag(FLAG_ADVERB) == wordno);
}


function CNDtimeout()
{
	 return bittest(getFlag(FLAG_TIMEOUT_SETTINGS),7);
}


function CNDisat(objno, locno)
{
	return (getObjectLocation(objno) == locno);

}


function CNDisnotat(objno, locno)
{
	return !CNDisat(objno, locno);
}



function CNDprep(wordno)
{
	return (getFlag(FLAG_PREP) == wordno);
}




function CNDnoun2(wordno)
{
	return (getFlag(FLAG_NOUN2) == wordno);
}

function CNDadject2(wordno)
{
	return (getFlag(FLAG_ADJECT2) == wordno);
}

function CNDsame(flagno1,flagno2)
{
	return (getFlag(flagno1) == getFlag(flagno2));
}


function CNDnotsame(flagno1,flagno2)
{
	return (getFlag(flagno1) != getFlag(flagno2));
}

function ACCinven()
{
	var count = 0;
	writeSysMessage(SYSMESS_YOUARECARRYING);
	ACCnewline();
	var listnpcs_with_objects = !bittest(getFlag(FLAG_PARSER_SETTINGS),3);
	var i;
	for (i=0;i<num_objects;i++)
	{
		if ((getObjectLocation(i)) == LOCATION_CARRIED)
		{
			
			if ((listnpcs_with_objects) || (!objectIsNPC(i)))
			{
				writeObject(i);
				if ((objectIsAttr(i,ATTR_SUPPORTER))  || (  (objectIsAttr(i,ATTR_TRANSPARENT))  && (objectIsAttr(i,ATTR_CONTAINER))))  ACClistat(i, i);
				ACCnewline();
				count++;
			}
		}
		if (getObjectLocation(i) == LOCATION_WORN)
		{
			if (listnpcs_with_objects || (!objectIsNPC(i)))
			{
				writeObject(i);
				writeSysMessage(SYSMESS_WORN);
				count++;
				ACCnewline();
			}
		}
	}
	if (!count) 
	{
		 writeSysMessage(SYSMESS_CARRYING_NOTHING);
		 ACCnewline();
	}

	if (!listnpcs_with_objects)
	{
		var numNPC = getNPCCountAt(LOCATION_CARRIED);
		if (numNPC)	ACClistnpc(LOCATION_CARRIED);
	}
	done_flag = true;
}

function desc()
{
	describe_location_flag = true;
}


function ACCquit()
{
	inQUIT = true;
	writeSysMessage(SYSMESS_AREYOUSURE);
}


function ACCend()
{
	$('.input').hide();
	inEND = true;
	writeSysMessage(SYSMESS_PLAYAGAIN);
	done_flag = true;
}


function done()
{
	done_flag = true;
}

function ACCok()
{
	writeSysMessage(SYSMESS_OK);
	done_flag = true;
}



function ACCramsave()
{
	ramsave_value = getSaveGameObject();
	var savegame_object = getSaveGameObject();	
	savegame =   JSON.stringify(savegame_object);
	localStorage.setItem('ngpaws_savegame_' + STR_RAMSAVE_FILENAME, savegame);
}

function ACCramload()
{
	if (ramsave_value==null) 
	{
		var json_str = localStorage.getItem('ngpaws_savegame_' + STR_RAMSAVE_FILENAME);
		if (json_str)
		{
			savegame_object = JSON.parse(json_str.trim());
			restoreSaveGameObject(savegame_object);
			ACCdesc();
			focusInput();
			return;
		}
		else
		{
			writeText (STR_RAMLOAD_ERROR); 
			done_flag = true; 
			return;
		}
	}
	restoreSaveGameObject(ramsave_value);
	ACCdesc();
}

function ACCsave()
{
	var savegame_object = getSaveGameObject();	
	savegame =   JSON.stringify(savegame_object);
	filename = prompt(getSysMessageText(SYSMESS_SAVEFILE),'').toUpperCase();; 
	localStorage.setItem('ngpaws_savegame_' + filename.toUpperCase(), savegame);
	ACCok();
}

 
function ACCload() 	
{
	var json_str;
	filename = prompt(getSysMessageText(SYSMESS_LOADFILE),'').toUpperCase();;
	json_str = localStorage.getItem('ngpaws_savegame_' + filename.toUpperCase());
	if (json_str)
	{
		savegame_object = JSON.parse(json_str.trim());
		restoreSaveGameObject(savegame_object);
	}
	else
	{
		writeSysMessage(SYSMESS_FILENOTFOUND);
		done_flag = true; return;
	}
	ACCdesc();
	focusInput();
}



function ACCturns()
{
	var turns = getFlag(FLAG_TURNS_HIGH) * 256 +  getFlag(FLAG_TURNS_LOW);
	writeSysMessage(SYSMESS_TURNS_START);
	writeText(turns + '');
	writeSysMessage(SYSMESS_TURNS_CONTINUE);
	if (turns > 1) writeSysMessage(SYSMESS_TURNS_PLURAL);
	writeSysMessage(SYSMESS_TURNS_END);
}

function ACCscore()
{
	var score = getFlag(FLAG_SCORE);
	writeSysMessage(SYSMESS_SCORE_START);
	writeTex(score + '');
	writeSysMessage(SYSMESS_SCORE_END);
}


function ACCcls()
{
	clearScreen();
}

function dropall()
{
	// Done in two different loops cause PAW did it like that, just a question of retro compatibility
	var i;
	for (i=0;i<num_objects;i++)	if (getObjectLocation(i) == LOCATION_CARRIED)setObjectLocation(i, getFlag(FLAG_LOCATION));
	for (i=0;i<num_objects;i++)	if (getObjectLocation(i) == LOCATION_WORN)setObjectLocation(i, getFlag(FLAG_LOCATION));
}


function ACCautog()
{
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
	if (!bittest(getFlag(FLAG_PARSER_SETTINGS),7))  // Extended context for objects
	for (var i=0; i<num_objects;i++) // Try to find it in present containers/supporters
	{
		if (CNDpresent(i) && (isAccesibleContainer(i) || objectIsAttr(i, ATTR_SUPPORTER)) )  // If there is another object present that is an accesible container or a supporter
		{
			objno =findMatchingObject(i);
			if (objno != EMPTY_OBJECT) { ACCget(objno); return; };
		}
	}
	writeSysMessage(SYSMESS_CANTSEETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautod()
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCdrop(objno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCdrop(objno); return; };  
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCdrop(objno); return; };
	writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautow()
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCwear(objno); return; };
	writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautor()
{
	var objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	objno =findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCremove(objno); return; };
	writeSysMessage(SYSMESS_YOURENOTWEARINGTHAT);
	ACCnewtext();
	ACCdone();
}



function ACCpause(value)
{
 if (value == 0) value = 256;
 pauseRemainingTime = Math.floor(value /50 * 1000);	
 inPause = true;
 showAnykeyLayer();
} 

function ACCgoto(locno)
{
 	setFlag(FLAG_LOCATION,locno);
}

function ACCmessage(mesno)
{
	writeMessage(mesno);
	ACCnewline();
}


function ACCremove(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_CARRIED:  
		case loc_here():
			writeSysMessage(SYSMESS_YOUARENOTWEARINGOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case LOCATION_WORN:
			if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
			{
				writeSysMessage(SYSMESS_CANTREMOVE_TOOMANYOBJECTS);
				ACCnewtext();
				ACCdone();
				return;
			}
			setObjectLocation(objno, LOCATION_CARRIED);
			writeSysMessage(SYSMESS_YOUREMOVEOBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUARENOTWEARINGTHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}


function trytoGet(objno)  // auxiliaty function for ACCget
{
	if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
	{
		writeSysMessage(SYSMESS_CANTCARRYANYMORE);
		ACCnewtext();
		ACCdone();
		doall_flag = false;
		return;
	}
	var weight = getLocationObjectsWeight(objno);
	weight += getObjectWeight(objno);
	weight +=  getLocationObjectsWeight(LOCATION_CARRIED);
	weight +=  getLocationObjectsWeight(LOCATION_WORN);
	if (weight > getFlag(FLAG_MAXWEIGHT_CARRIED))
	{
		writeSysMessage(SYSMESS_WEIGHSTOOMUCH);
		ACCnewtext();
		ACCdone();
		return;
	}
	setObjectLocation(objno, LOCATION_CARRIED);
	writeSysMessage(SYSMESS_YOUTAKEOBJECT);
	success = true;
}


 function ACCget(objno)
 {
 	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_CARRIED:  
		case LOCATION_WORN:  
			writeSysMessage(SYSMESS_YOUALREADYHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case loc_here():
			trytoGet(objno);
			break;

		default: 
			if  ((locno<=last_object_number) && (CNDpresent(locno)))    // If it's not here, carried or worn but it present, that means that bit 7 of flag 12 is cleared, thus you can get objects from present containers/supporters
			{
				trytoGet(objno);
			}
			else
			{
				writeSysMessage(SYSMESS_CANTSEETHAT);
				ACCnewtext();
				ACCdone();
				return;
				break;
		    }
	}
 }

function ACCdrop(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_WORN:  
			writeSysMessage(SYSMESS_YOUAREALREADYWEARINGTHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case loc_here():  
			writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;


		case LOCATION_CARRIED:  
			setObjectLocation(objno, loc_here());
			writeSysMessage(SYSMESS_YOUDROPOBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}

function ACCwear(objno)
{
	success = false; 
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setReferredObject(objno);
	var locno = getObjectLocation(objno);
	switch (locno)
	{
		case LOCATION_WORN:  
			writeSysMessage(SYSMESS_YOUAREALREADYWAERINGOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;

		case loc_here():  
			writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
			ACCnewtext();
			ACCdone();
			return;
			break;


		case LOCATION_CARRIED:  
			if (!objectIsWearable(objno))
			{
				writeSysMessage(SYSMESS_YOUCANTWEAROBJECT);
				ACCnewtext();
				ACCdone();
				return;
			}
			setObjectLocation(objno, LOCATION_WORN);
			writeSysMessage(SYSMESS_YOUWEAROBJECT);
			success = true;
			break;

		default: 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return;
			break;
	}
}



function ACCdestroy(objno)
{
	setObjectLocation(objno, LOCATION_NONCREATED);
}


function ACCcreate(objno)
{
	setObjectLocation(objno, loc_here());
}


function ACCswap(objno1,objno2)
{
	var locno1 = getObjectLocation (objno1);
	var locno2 = getObjectLocation (objno2);
	ACCplace (objno1,locno2);
	ACCplace (objno2,locno1);
	setReferredObject(objno2);
}


function ACCplace(objno, locno)
{
	setObjectLocation(objno, locno);
}

function ACCset(flagno)
{
	setFlag(flagno, SET_VALUE);
}

function ACCclear(flagno)
{
	setFlag(flagno,0);
}

function ACCplus(flagno,value)
{
	var newval = getFlag(flagno) + value;
	setFlag(flagno, newval);
}

function ACCminus(flagno,value)
{
    var newval = getFlag(flagno) - value;
    if (newval < 0) newval = 0;
	setFlag(flagno, newval);
}

function ACClet(flagno,value)
{
	setFlag(flagno,value);
}

function ACCnewline()
{
	writeText(STR_NEWLINE);
}

function ACCprint(flagno)
{
	writeText(getFlag(flagno) +'');
}

function ACCsysmess(sysno)
{
	writeSysMessage(sysno);
}

function ACCcopyof(objno,flagno)
{
	setFlag(flagno, getObjectLocation(objno))
}

function ACCcopyoo(objno1, objno2)
{
	setObjectLocation(objno2,getObjectLocation(objno1));
	setReferredObject(objno2);
}

function ACCcopyfo(flagno,objno)
{
	setObjectLocation(objno, getFlag(flagno));
}

function ACCcopyff(flagno1, flagno2)
{
	setFlag(flagno2, getFlag(flagno1));
}

function ACCadd(flagno1, flagno2)
{
	var newval = getFlag(flagno1) + getFlag(flagno2);
	setFlag(flagno2, newval);
}

function ACCsub(flagno1,flagno2)
{
	var newval = getFlag(flagno2) - getFlag(flagno1);
	if (newval < 0) newval = 0;
	setFlag(flagno2, newval);
}


function CNDparse()
{
	return (!getLogicSentence());
}


function ACClistat(locno, container_objno)   // objno is a container/suppoter number, used to list contents of objects
{
  var listingContainer = false;
  if (arguments.length > 1) listingContainer = true;
  var objscount =  getObjectCountAt(locno);
  var concealed_or_scenery_objcount = getObjectCountAtWithAttr(locno, [ATTR_CONCEALED, ATTR_SCENERY]);  
  objscount = objscount - concealed_or_scenery_objcount;
  if (!listingContainer) setFlag(FLAG_OBJECT_LIST_FORMAT, bitclear(getFlag(FLAG_OBJECT_LIST_FORMAT),7)); 
  if (!objscount) return;
  var continouslisting = bittest(getFlag(FLAG_OBJECT_LIST_FORMAT),6);
  if (listingContainer) 
  	{
  		writeText(' (');
  		if (objectIsAttr(container_objno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_OVER_YOUCANSEE); else if (objectIsAttr(container_objno, ATTR_CONTAINER)) writeSysMessage(SYSMESS_INSIDE_YOUCANSEE);
  		continouslisting = true;  // listing contents of container always continuous
  	}
  
  if (!listingContainer)
  {
    setFlag(FLAG_OBJECT_LIST_FORMAT, bitset(getFlag(FLAG_OBJECT_LIST_FORMAT),7)); 
    if (!continouslisting) ACCnewline();
  }
  var progresscount = 0;
  for (var i=0;i<num_objects;i++)
  {
  	if (getObjectLocation(i) == locno)
  		if  ( ((!objectIsNPC(i)) || (!bittest(getFlag(FLAG_PARSER_SETTINGS),3)))  && (!objectIsAttr(i,ATTR_CONCEALED)) && (!objectIsAttr(i,ATTR_SCENERY))   ) // if not an NPC or parser setting say NPCs are considered objects, and object is not concealed nor scenery
  		  { 
  		     writeText(getObjectText(i)); 
  		     if ((objectIsAttr(i,ATTR_SUPPORTER))  || (  (objectIsAttr(i,ATTR_TRANSPARENT))  && (objectIsAttr(i,ATTR_CONTAINER))))  ACClistat(i, i);
  		     progresscount++
  		     if (continouslisting)
  		     {
		  			if (progresscount <= objscount - 2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  					if (progresscount == objscount - 1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
  					if (!listingContainer) if (progresscount == objscount ) writeSysMessage(SYSMESS_LISTEND);
  			 } else ACCnewline();
  		  }; 
  }
  if (arguments.length > 1) writeText(')');
}


function ACClistnpc(locno)
{
  var npccount =  getNPCCountAt(locno);
  setFlag(FLAG_OBJECT_LIST_FORMAT, bitclear(getFlag(FLAG_OBJECT_LIST_FORMAT),5)); 
  if (!npccount) return;
  setFlag(FLAG_OBJECT_LIST_FORMAT, bitset(getFlag(FLAG_OBJECT_LIST_FORMAT),5)); 
  continouslisting = bittest(getFlag(FLAG_OBJECT_LIST_FORMAT),6);
  writeSysMessage(SYSMESS_NPCLISTSTART);
  if (!continouslisting) ACCnewline();
  if (npccount==1)  writeSysMessage(SYSMESS_NPCLISTCONTINUE); else writeSysMessage(SYSMESS_NPCLISTCONTINUE_PLURAL);
  var progresscount = 0;
  var i;
  for (i=0;i<num_objects;i++)
  {
  	if (getObjectLocation(i) == locno)
  		if ( (objectIsNPC(i)) && (!objectIsAttr(i,ATTR_CONCEALED)) ) // only NPCs not concealed
  		  { 
  		     writeText(getObjectText(i)); 
  		     progresscount++
  		     if (continouslisting)
  		     {
		  	 	if (progresscount <= npccount - 2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  			 	if (progresscount == npccount - 1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
  			 	if (progresscount == npccount ) writeSysMessage(SYSMESS_LISTEND);
  			 } else ACCnewline();
  		  }; 
  }
}


function ACClistobj()
{
  var locno = loc_here();
  var objscount =  getObjectCountAt(locno);
  var concealed_or_scenery_objcount = getObjectCountAtWithAttr(locno, [ATTR_CONCEALED, ATTR_SCENERY]);

  objscount = objscount - concealed_or_scenery_objcount;
  if (objscount)
  {
	  writeSysMessage(SYSMESS_YOUCANSEE);
      ACClistat(loc_here());
  }
}

function ACCprocess(procno)
{
	if (procno > last_process) 
	{
		writeText(STR_WRONG_PROCESS);
		ACCnewtext();
		ACCdone();
	}
	callProcess(procno);
    if (describe_location_flag) done_flag = true;
}

function ACCmes(mesno)
{
	writeMessage(mesno);
}

function ACCmode(mode)
{
	setFlag(FLAG_MODE, mode);
}

function ACCtime(length, settings)
{
	setFlag(FLAG_TIMEOUT_LENGTH, length);
	setFlag(FLAG_TIMEOUT_SETTINGS, settings);
}

function ACCdoall(locno)
{
	doall_flag = true;
	if (locno == LOCATION_HERE) locno = loc_here();
	// Each object will be considered for doall loop if is at locno and it's not the object specified by the NOUN2/ADJECT2 pair and it's not a NPC (or setting to consider NPCs as objects is set)
	setFlag(FLAG_DOALL_LOC, locno);
	var doall_obj;
	doall_loop:
	for (doall_obj=0;(doall_obj<num_objects) && (doall_flag);doall_obj++)  
	{
		if (getObjectLocation(doall_obj) == locno)
			if ((!objectIsNPC(doall_obj)) || (!bittest(getFlag(FLAG_PARSER_SETTINGS),3))) 
 			 if (!objectIsAttr(doall_obj, ATTR_CONCEALED)) 
 			  if (!objectIsAttr(doall_obj, ATTR_SCENERY)) 
				if (!( (objectsNoun[doall_obj]==getFlag(FLAG_NOUN2))  &&    ((objectsAdjective[doall_obj]==getFlag(FLAG_ADJECT2)) || (objectsAdjective[doall_obj]==EMPTY_WORD)) ) ) // implements "TAKE ALL EXCEPT BIG SWORD"
				{
					setFlag(FLAG_NOUN1, objectsNoun[doall_obj]);
					setFlag(FLAG_ADJECT1, objectsAdjective[doall_obj]);
					setReferredObject(doall_obj);
					callProcess(process_in_doall);
					if (describe_location_flag) 
						{
							doall_flag = false;
							entry_for_doall = '';
							break doall_loop;
						}
				}
	}
	doall_flag = false;
	entry_for_doall = '';
	if (describe_location_flag) descriptionLoop();
}

function ACCprompt(value)  // deprecated
{
	setFlag(FLAG_PROMPT, value);
}


function ACCweigh(objno, flagno)
{
	var weight = getObjectWeight(objno);
	setFlag(flagno, weight);
}

function ACCputin(objno, locno)
{
	success = false;
	setReferredObject(objno);
	if (getObjectLocation(objno) == LOCATION_WORN)
	{
		writeSysMessage(SYSMESS_YOUAREALREADYWEARINGTHAT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == loc_here())
	{
		writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == LOCATION_CARRIED)
	{
		setObjectLocation(objno, locno);
		if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUPUTOBJECTON); else writeSysMessage(SYSMESS_YOUPUTOBJECTIN);
		writeText(getObjectFixArticles(locno));
		writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION);
		success = true;
		return;
	}

	writeSysMessage(SYSMESS_YOUDONTHAVEOBJECT);
	ACCnewtext();
	ACCdone();
}


function ACCtakeout(objno, locno)
{
	success = false;
	setReferredObject(objno);
	if ((getObjectLocation(objno) == LOCATION_WORN) || (getObjectLocation(objno) == LOCATION_CARRIED))
	{
		writeSysMessage(SYSMESS_YOUALREADYHAVEOBJECT);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectLocation(objno) == loc_here())
	{
		if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTFROM); else writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTOUTOF);
		writeText(getObjectFixArticles(locno));
		writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getObjectWeight(objno) + getLocationObjectsWeight(LOCATION_WORN) + getLocationObjectsWeight(LOCATION_CARRIED) >  getFlag(FLAG_MAXWEIGHT_CARRIED))
	{
		writeSysMessage(SYSMESS_WEIGHSTOOMUCH);
		ACCnewtext();
		ACCdone();
		return;
	}

	if (getFlag(FLAG_OBJECTS_CARRIED_COUNT) >= getFlag(FLAG_MAXOBJECTS_CARRIED))
	{		
		writeSysMessage(SYSMESS_CANTCARRYANYMORE);
		ACCnewtext();
		ACCdone();
		return;
	}

	setObjectLocation(objno, LOCATION_CARRIED);
	writeSysMessage(SYSMESS_YOUTAKEOBJECT);
	success = true;


}
function ACCnewtext()
{
	player_order_buffer = '';
}

function ACCability(maxObjectsCarried, maxWeightCarried)
{
	setFlag(FLAG_MAXOBJECTS_CARRIED, maxObjectsCarried);
	setFlag(FLAG_MAXWEIGHT_CARRIED, maxWeightCarried);
}

function ACCweight(flagno)
{
	var weight_carried = getLocationObjectsWeight(LOCATION_CARRIED);
	var weight_worn = getLocationObjectsWeight(LOCATION_WORN);
	var total_weight = weight_worn + weight_carried;
	setFlag(flagno, total_weight);
}


function ACCrandom(flagno)
{
	 setFlag(flagno, 1 + Math.floor((Math.random()*100)));
}

function ACCwhato()
{
	var whatofound = getReferredObject();
	if (whatofound != EMPTY_OBJECT) setReferredObject(whatofound);
}

function ACCputo(locno)
{
	setObjectLocation(getFlag(FLAG_REFERRED_OBJECT), locno);
}

function ACCnotdone()
{
	done_flag = true;
}

function ACCautop(locno)
{
	var objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCputin(objno, locno); return; };
	objno = findMatchingObject(null); // anywhere
	if (objno != EMPTY_OBJECT) 
		{ 
			writeSysMessage(SYSMESS_YOUDONTHAVETHAT);
			ACCnewtext();
			ACCdone();
			return; 
		};

	writeSysMessage(SYSMESS_CANTDOTHAT);
	ACCnewtext();
	ACCdone();
}


function ACCautot(locno)
{

	var objno =findMatchingObject(locno);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno =findMatchingObject(LOCATION_CARRIED);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno =findMatchingObject(LOCATION_WORN);
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };
	objno = findMatchingObject(loc_here());
	if (objno != EMPTY_OBJECT) { ACCtakeout(objno, locno); return; };

	objno = findMatchingObject(null); // anywhere
	if (objno != EMPTY_OBJECT) 
		{ 
			if (objectIsAttr(locno, ATTR_SUPPORTER)) writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTFROM); else writeSysMessage(SYSMESS_YOUCANTTAKEOBJECTOUTOF);
			writeText(getObjectFixArticles(locno));
			writeSysMessage(SYSMESS_PUTINTAKEOUTTERMINATION)
			ACCnewtext();
			ACCdone();
			return; 
		};

	writeSysMessage(SYSMESS_CANTDOTHAT);
	ACCnewtext();
	ACCdone();
	
}


function CNDmove(flagno)
{
	var locno = getFlag(flagno);
	var dirno = getFlag(FLAG_VERB);
	var destination = getConnection( locno,  dirno);
	if (destination != -1) 
		{
			 setFlag(flagno, destination);
			 return true;
		}
	return false;
}


function ACCextern(writeno)
{
	eval(writemessages[writeno]);
}


function ACCpicture(picno)
{
	drawPicture(picno);
}



function ACCgraphic(option)
{
	graphicsON = (option==1);  
	if (!graphicsON) hideGraphicsWindow();	
}

function ACCbeep(sfxno, channelno, times)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxplay(sfxno, channelno, times, 'play');
}

function ACCsound(value)
{
	soundsON = (value==1);  
	if (!soundsON) sfxstopall();
}

function CNDozero(objno, attrno)
{
	if (attrno > 63) return false;
	return !objectIsAttr(objno, attrno);

}

function CNDonotzero(objno, attrno)
{
	return objectIsAttr(objno, attrno);
}

function ACCoset(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		attrs = getObjectLowAttributes(objno);
		var attrs = bitset(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitset(attrs, attrno);
	setObjectHighAttributes(objno, attrs);

}

function ACCoclear(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		var attrs = getObjectLowAttributes(objno);
		attrs = bitclear(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitclear(attrs, attrno);
	setObjectHighAttributes(objno, attrs);

}


function CNDislight()
{
	if (!isDarkHere()) return true;
	return lightObjectsPresent();
}



function CNDisnotlight()
{
	return ! CNDislight();
}

function ACCversion()
{
	writeText(filterText(STR_RUNTIME_VERSION));
}


function ACCwrite(writeno)
{
	writeWriteMessage(writeno);
}

function ACCwriteln(writeno)
{
	writeWriteMessage(writeno);
	ACCnewline();
}

function ACCrestart()
{
  process_restart = true;
}


function ACCtranscript()
{
	$('#transcript_area').html(transcript);
	$('.transcript_layer').show();
	inTranscript = true;
}

function ACCanykey()
{
	writeSysMessage(SYSMESS_PRESSANYKEY);
	inAnykey = true;
}

function ACCgetkey(flagno)
{
	getkey_return_flag = flagno;
	inGetkey = true;
}


//////////////////
//   LEGACY     //
//////////////////

// From PAW PC
function ACCbell()
{
 	// Empty, PAW PC legacy, just does nothing 
}


// From PAW Spectrum
function ACCreset()
{
	// Legacy condact, does nothing now
}


function ACCpaper(color)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCink(color)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCborder(color)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCcharset(value)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCline(lineno)
{
	// Legacy condact, does nothing now, use CSS styles
}

function ACCinput()
{
	// Legacy condact, does nothing now
}

function ACCsaveat()
{
	// Legacy condact, does nothing now
}

function ACCbackat()
{
	// Legacy condact, does nothing now
}

function ACCprintat()
{
	// Legacy condact, does nothing now
}

function ACCprotect()
{
	// Legacy condact, does nothing now
}

// From Superglus


function ACCdebug()
{
	// Legacy condact, does nothing now		
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////// CONDACTS FOR COMPILER //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function CNDverb(wordno)
{
	return (getFlag(FLAG_VERB) == wordno);
}


function CNDnoun1(wordno)
{
	return (getFlag(FLAG_NOUN1) == wordno);
}

//   PLUGINS    ;

//CND ISMUSIC C 0 0 0 0

function CNDismusic()
{
	return (CNDissound(0));	
}

//CND SOFTBLOCK A 2 0 0 0

function ACCsoftblock(procno)
{
   inBlock = true;
   disableInterrupt();

   $('.block_layer').css('display','none');
   $('.block_text').html('');
   $('.block_graphics').html('');
   $('.block_layer').css('background','transparent');
   if (procno == 0 ) unblock_process ==null; else unblock_process = procno;
   $('.block_layer').css('display','block');
}
//CND PAUSEVIDEO A 0 0 0 0


function ACCpausevideo()
{
	if (typeof videoElement != 'undefined') 
		if (!videoElement.ended) 
		if (!videoElement.paused)
		   videoElement.pause();
}

//CND ISNOTMOV C 0 0 0 0

function CNDisnotmov()
{
	return !CNDismov();	
}

//CND SYNONYM A 15 13 0 0

function ACCsynonym(wordno1, wordno2)
{
   if (wordno1!=EMPTY_WORD) setFlag(FLAG_VERB, wordno1);
   if (wordno2!=EMPTY_WORD)	setFlag(FLAG_NOUN1, wordno2);
}
//CND ISDONE C 0 0 0 0

function CNDisdone()
{
	return done_flag;	
}

//CND BNOTZERO C 1 2 0 0

function CNDbnotzero(flagno, bitno)
{
	if (bitno>=32) return false;
	return (bittest(getFlag(flagno), bitno));
}

//CND ISNOTDOALL C 0 0 0 0

function CNDisnotdoall()
{
	return !CNDisdoall();
}

//CND WHATOX2 A 1 0 0 0

function ACCwhatox2(flagno)
{	
	var auxNoun = getFlag(FLAG_NOUN1);
	var auxAdj = getFlag(FLAG_ADJECT1);
	setFlag(FLAG_NOUN1, getFlag(FLAG_NOUN2));
	setFlag(FLAG_ADJECT1, getFlag(FLAG_ADJECT2));
	var whatox2found = getReferredObject();
	setFlag(flagno,whatox2found);
	setFlag(FLAG_NOUN1, auxNoun);
	setFlag(FLAG_ADJECT1, auxAdj);
}
//CND ZONE C 8 8 0 0

function CNDzone(locno1, locno2)
{

	if (loc_here()<locno1) return false;
	if (loc_here()>locno2) return false;
	return true;
}
//CND GE C 1 2 0 0

function CNDge(flagno, valor)
{
	return (getFlag(flagno)>=valor);
}
//CND YOUTUBE A 14 0 0 0

function ACCyoutube(strno)
{

	var str = '<iframe id="youtube" width="560" height="315" src="http://www.youtube.com/embed/' + writemessages[strno] + '?autoplay=1&controls=0&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>'
	$('.graphics').removeClass('hidden');
	$('.graphics').addClass('half_graphics');
	$('.text').removeClass('all_text');
	$('.text').addClass('half_text');
	$('.graphics').html(str);
	$('#youtube').css('height','100%');
	$('#youtube').css('display','block');
	$('#youtube').css('margin-left','auto');
	$('#youtube').css('margin-right','auto');
	$('.graphics').show();
}


// Hook into location description to avoid video playing to continue playing while hidden after changing location
var old_youtube_h_description_init = h_description_init ;
var h_description_init =  function  ()
{
	if ($("#youtube").length > 0) $("#youtube").remove();	
	old_youtube_h_description_init();
}
//CND LE C 1 2 0 0

function CNDle(flagno, valor)
{
	return (getFlag(flagno) <= valor);
}
//CND RNDWRITELN A 14 14 14 0

function ACCrndwriteln(writeno1,writeno2,writeno3)
{
	ACCrndwrite(writeno1,writeno2,writeno3);
	ACCnewline();
}
//CND HELP A 0 0 0 0

function ACChelp()
{
	if (getLang()=='EN') EnglishHelp(); else SpanishHelp();
}	

function EnglishHelp()
{
	writeText('HOW DO I SEND COMMANDS TO THE PC?');
	writeText(STR_NEWLINE);
	writeText('Use simple orders: OPEN DOOR, TAKE KEY, GO UP, etc.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I MOVE IN THE MAP?');
	writeText(STR_NEWLINE);
	writeText('Usually you will have to use compass directions as north (shortcut: "N"), south (S), east (E), west (W) or other directions (up, down, enter, leave, etc.). Some games allow complex order like "go to well". Usually you would be able to know avaliable exits by location description, some games also provide the "EXITS" command.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I CHECK MY INVENTORY?');
	writeText(STR_NEWLINE);
	writeText('type INVENTORY (shortcut "I")');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I USE THE OBJECTS?');
	writeText(STR_NEWLINE);
	writeText('Use the proper verb, that is, instead of USE KEY type OPEN.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I CHECK SOMETHING CLOSELY?');
	writeText(STR_NEWLINE);
	writeText('Use "examine" verb: EXAMINE DISH. (shortcut: EX)');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I SEE AGAIN THE CURRENT LOCATION DSCRIPTION?');
	writeText(STR_NEWLINE);
	writeText('Type LOOK (shortcut "M").');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I TALK TO OTHER CHARACTERS?');
	writeText(STR_NEWLINE);
	writeText('Most common methods are [CHARACTER, SENTENCE] or [SAY CHARACTER "SENTENCE"]. For instance: [JOHN, HELLO] o [SAY JOHN "HELLO"]. Some games also allow just [TALK TO JOHN]. ');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I PUT SOMETHING IN A CONTAINER, HOW CAN I TAKE SOMETHING OUT?');
	writeText(STR_NEWLINE);
	writeText('PUT KEY IN BOX. TAKE KEY OUT OF BOX. INSERT KEY IN BOX. EXTRACT KEY FROM BOX.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('HOW CAN I PUT SOMETHING ON SOMETHING ELSE?');
	writeText(STR_NEWLINE);
	writeText('PUT KEY ON TABLE. TAKE KEY FROM TABLE');
	writeText(STR_NEWLINE + STR_NEWLINE);
}

function SpanishHelp()
{
	writeText(STR_NEWLINE);
	writeText('• ¿CÓMO DOY <b>ÓRDENES</b>?');
	writeText(STR_NEWLINE);
	writeText('Utiliza <b>verbos</b> en imperativo o infinitivo: ABRE PUERTA, COGER LLAVE, SUBIR, etc.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('• ¿CÓMO ME <b>MUEVO</b> POR EL JUEGO?');
	writeText(STR_NEWLINE);
	writeText('Mediante los <b>puntos cardinales</b> como norte (abreviado «N»), sur (S), este (E), oeste (O) o <b>direcciones espaciales</b> (arriba, abajo, bajar, subir, entrar, salir, etc.). Escribiendo «SALIDAS» (X) te dirá exactamente cuáles hay.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('• ¿CÓMO PUEDO SABER QUÉ <b>OBJETOS LLEVO</b>?');
	writeText(STR_NEWLINE);
	writeText('Teclea INVENTARIO (abreviado «I»)');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('• ¿CÓMO <b>USO</b> LOS OBJETOS?');
	writeText(STR_NEWLINE);
	writeText('Utiliza el <b>verbo correcto,</b> en lugar de USAR ESCOBA escribe BARRER.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('• ¿CÓMO PUEDO <b>OBSERVAR</b> UN OBJETO MÁS DETALLADAMENTE?');
	writeText(STR_NEWLINE);
	writeText('Escribiendo: EXAMINAR PLATO. O con la abreviatura «EX»: EX PLATO.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('• ¿CÓMO PUEDO VOLVER A <b>VER LA DESCRIPCIÓN</b> DEL SITIO DONDE ESTOY?');
	writeText(STR_NEWLINE);
	writeText('Escribe MIRAR (abreviado «M»).');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('• ¿CÓMO <b>HABLO</b> CON LOS PERSONAJES?');
	writeText(STR_NEWLINE);
	writeText('Los modos más comunes son [DECIR, FRASE] o [DECIR A PERSONAJE "FRASE"]. Por ejemplo: [DECIR, HOLA] o [DECIR A LUIS "HOLA"].');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('• ¿CÓMO <b>METO</b> ALGO EN ALGO? ¿CÓMO LO SACO?');
	writeText(STR_NEWLINE);
	writeText('Escribe: METER LLAVE EN CAJA. SACAR LLAVE DE CAJA');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('• ¿CÓMO <b>GUARDO</b> LA PARTIDA?');
	writeText(STR_NEWLINE);
	writeText('Escribe: GUARDAR. Escribe un nombre para la partida');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('• ¿CÓMO <b>CARGO</b> LA PARTIDA?');
	writeText(STR_NEWLINE);
	writeText('Escribe: CARGAR. Luego, el nombre de la partida que quieres retomar.');
	writeText(STR_NEWLINE + STR_NEWLINE);
	writeText('• ¿CÓMO <b>SÉ LOS NOMBRES</b> DE LAS PARTIDAS GUARDADAS?');
	writeText(STR_NEWLINE);
	writeText('Escribe: ENUMERAR PARTIDAS (o simplemente PARTIDAS).');
	writeText(STR_NEWLINE + STR_NEWLINE);
}

//CND MUL A 1 2 0 0

function ACCmul(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) * valor));
}
//CND LISTCONTENTS A 9 0 0 0

function ACClistcontents(locno)
{
   ACClistat(locno, locno)
}
//CND ISNOTDONE C 0 0 0 0

function CNDisnotdone()
{
	return !CNDisdone();
}

//CND SILENCE A 2 0 0 0

function ACCsilence(channelno)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;
	sfxstop(channelno);
}
//CND BCLEAR A 1 2 0 0

function ACCbclear(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitclear(getFlag(flagno), bitno));
}
//CND ISVIDEO C 0 0 0 0

function CNDisvideo()
{
	if (typeof videoElement == 'undefined') return false;
	if (!videoLoopCount) return false;
	if (videoElement.paused) return false;
	return true;
}

//CND WARNINGS A 2 0 0 0

function ACCwarnings(value)
{
	if (value) showWarnings = true; else showWarnings = false;
}
//CND FADEOUT A 2 2 0 0

function ACCfadeout(channelno, value)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxfadeout(channelno, value);
}
//CND WHATOX A 1 0 0 0

function ACCwhatox(flagno)
{
	var whatoxfound = getReferredObject();
	setFlag(flagno,whatoxfound);
}

//CND RESP A 0 0 0 0

function ACCresp()
{
	in_response = true;
}	

//CND VOLUMEVIDEO A 2 0 0 0


function ACCvolumevideo(value)
{
	if (typeof videoElement != 'undefined') 
		videoElement.volume = value  / 65535;
}

//CND ISNOTRESP C 0 0 0 0

function CNDisnotresp()
{
	return !in_response;	
}

//CND MOD A 1 2 0 0

function ACCmod(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) % valor));
}
//CND PICTUREAT A 2 2 2 0

/*
In order to determine the actual size of both background image and pictureat image they should be loaded, thus two chained "onload" are needed. That is, 
background image is loaded to determine its size, then pictureat image is loaded to determine its size. Size of currently displayed background image cannot
be used as it may have been already stretched.
*/

function ACCpictureat(x,y,picno)
{
	var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (!filename) return;

	// Check location has a picture, otherwise exit
	var currentBackgroundScreenImage = $('.location_picture');
	if (!currentBackgroundScreenImage) return;

	// Create a new image with the contents of current background image, to be able to calculate original height of image
	var virtualBackgroundImage = new Image();
	// Pass required data as image properties in order to be avaliable at "onload" event
	virtualBackgroundImage.bg_data=[];
	virtualBackgroundImage.bg_data.filename = filename; 
	virtualBackgroundImage.bg_data.x = x;
	virtualBackgroundImage.bg_data.y = y;
	virtualBackgroundImage.bg_data.picno = picno;
	virtualBackgroundImage.bg_data.currentBackgroundScreenImage = currentBackgroundScreenImage;


	// Event triggered when virtual background image is loaded
	virtualBackgroundImage.onload = function()
		{
			var originalBackgroundImageHeight = this.height;
			var scale = this.bg_data.currentBackgroundScreenImage.height() / originalBackgroundImageHeight;

			// Create a new image with the contents of picture to show with PICTUREAT, to be able to calculate height of image
			var virtualPictureAtImage = new Image();
			// Also pass data from background image as property so they are avaliable in the onload event
			virtualPictureAtImage.pa_data = [];
			virtualPictureAtImage.pa_data.x = this.bg_data.x;
			virtualPictureAtImage.pa_data.y = this.bg_data.y;
			virtualPictureAtImage.pa_data.picno = this.bg_data.picno;
			virtualPictureAtImage.pa_data.filename = this.bg_data.filename;
			virtualPictureAtImage.pa_data.scale = scale;
			virtualPictureAtImage.pa_data.currentBackgroundImageWidth = this.bg_data.currentBackgroundScreenImage.width();
			
			// Event triggered when virtual PCITUREAT image is loaded
			virtualPictureAtImage.onload = function ()
			{
		    		var imageHeight = this.height; 
					var x = Math.floor(this.pa_data.x * this.pa_data.scale);
					var y = Math.floor(this.pa_data.y * this.pa_data.scale);
					var newimageHeight = Math.floor(imageHeight * this.pa_data.scale);
					var actualBackgroundImageX = Math.floor((parseInt($('.graphics').width()) - this.pa_data.currentBackgroundImageWidth)/2);;
					var id = 'pictureat_' + this.pa_data.picno;

					// Add new image, notice we are not using the virtual image, but creating a new one
					$('.graphics').append('<img  alt="" id="'+id+'" style="display:none" />');				
					$('#' + id).css('position','absolute');
					$('#' + id).css('left', actualBackgroundImageX + x  + 'px');
					$('#' + id).css('top',y + 'px');
					$('#' + id).css('z-index','100');
					$('#' + id).attr('src', this.pa_data.filename);
					$('#' + id).css('height',newimageHeight + 'px');
					$('#' + id).show();
			}

			// Assign the virtual pictureat image the destinationsrc to trigger the "onload" event
			virtualPictureAtImage.src = this.bg_data.filename;
			};

	// Assign the virtual background image same src as current background to trigger the "onload" event
	virtualBackgroundImage.src = currentBackgroundScreenImage.attr("src");

}

//CND ISNOTSOUND C 1 0 0 0

function CNDisnotsound(channelno)
{
  if ((channelno <1) || (channelno >MAX_CHANNELS)) return false;
  return !(CNDissound(channelno));
}
//CND ATGE C 8 0 0 0

function CNDatge(locno)
{
	return (getFlag(FLAG_LOCATION) >= locno);
}

//CND SETWEIGHT A 4 2 0 0

function ACCsetweight(objno, value)
{
   objectsWeight[objno] = value;
}

//CND COMMAND A 2 0 0 0

function ACCcommand(value)
{
	if (value) {$('.input').show();$('.input').focus();} else $('.input').hide();
}
//CND ISMOV C 0 0 0 0

function CNDismov()
{
	if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_NOUN1)==EMPTY_WORD)) return true;

	if ((getFlag(FLAG_NOUN1)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_VERB)==EMPTY_WORD)) return true;

    if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (getFlag(FLAG_NOUN1)<NUM_CONNECTION_VERBS)) return true;
    
    return false;
}

//CND OBJAT A 9 1 0 0

function ACCobjat(locno, flagno)
{
	setFlag(flagno, getObjectCountAt(locno));
}
//CND BLOCK A 14 2 2 0

function ACCblock(writeno, picno, procno)
{
   inBlock = true;
   disableInterrupt();
   $('.block_layer').hide();
   var text = getWriteMessageText(writeno);
   $('.block_text').html(text);
   
	var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (filename)
	{
		var imgsrc = '<img class="block_picture" src="' + filename + '" />';
		$('.block_graphics').html(imgsrc);
	}
    if (procno == 0 ) unblock_process ==null; else unblock_process = procno;
    $('.block_layer').show();

}
//CND CLEAREXIT A 2 0 0 0

function ACCclearexit(wordno)
{
	if ((wordno >= NUM_CONNECTION_VERBS) || (wordno< 0 )) return;
	setConnection(loc_here(),wordno, -1);
}
//CND ISDOALL C 0 0 0 0

function CNDisdoall()
{
	return doall_flag;	
}

//CND GETEXIT A 2 2 0 0

function ACCgetexit(value,flagno)
{
	if (value >= NUM_CONNECTION_VERBS) 
		{
			setFlag(flagno, NO_EXIT);
			return;
		}
	var locno = getConnection(loc_here(),value);
	if (locno == -1)
		{
			setFlag(flagno, NO_EXIT);
			return;
		}
	setFlag(flagno,locno);
}
//CND VOLUME A 2 2 0 0

function ACCvolume(channelno, value)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;
	sfxvolume(channelno, value);
}

//CND RNDWRITE A 14 14 14 0

function ACCrndwrite(writeno1,writeno2,writeno3)
{
	var val = Math.floor((Math.random()*3));
	switch (val)
	{
		case 0 : writeWriteMessage(writeno1);break;
		case 1 : writeWriteMessage(writeno2);break;
		case 2 : writeWriteMessage(writeno3);break;
	}
}
//CND LOG A 14 0 0 0

function ACClog(writeno)
{
  console_log(writemessages[writeno]);
}
//CND BSET A 1 2 0 0

function ACCbset(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitset(getFlag(flagno),bitno));
}
//CND HOOK A 14 0 0 5

function ACChook(writeno)
{
	h_code(writemessages[writeno]);
}
//CND ASK W 14 14 1 0

// Global vars for ASK


var inAsk = false;
var ask_responses = null;
var ask_flagno = null;



function ACCask(writeno, writenoOptions, flagno)
{
	inAsk = true;
	writeWriteMessage(writeno);
	ask_responses = getWriteMessageText(writenoOptions);
	ask_flagno = flagno;
}



// hook replacement
var old_ask_h_keydown  = h_keydown;
h_keydown  = function (event)
{
	if (inAsk)
	{
		var keyCodeAsChar = String.fromCharCode(event.keyCode).toLowerCase();
		if (ask_responses.indexOf(keyCodeAsChar)!= -1)
		{
			setFlag(ask_flagno, ask_responses.indexOf(keyCodeAsChar));
			inAsk = false;
			event.preventDefault();
            $('.input').show();
		    $('.input').focus();
		    hideBlock();
			waitKeyCallback();
		};
		return false; // if we are in ASK condact, no keypress should be considered other than ASK response
	} else return old_ask_h_keydown(event);
}

//CND SPACE A 0 0 0 0

function ACCspace()
{
	writeText(' ');
}
//CND TEXTPIC A 2 2 0 0

function ACCtextpic(picno, align)
{
	var style = '';
	var post = '';
	var pre = '';
	switch(align)
	{
		case 0: post='<br style="clear:left">';break;
		case 1: style = 'float:left'; break;
		case 2: style = 'float:right'; break;
		case 3: pre='<center>';post='</center><br style="clear:left">';break;
	}
	filename = getResourceById(RESOURCE_TYPE_IMG, picno);
	if (filename)
	{
		var texto = pre + "<img alt='' class='textpic' style='"+style+"' src='"+filename+"' />" + post;
		writeText(texto);
		$(".text").scrollTop($(".text")[0].scrollHeight);
	}
}
//CND OBJNOTFOUND C 2 9 0 0

function CNDobjnotfound(attrno, locno)
{
	for (var i=0;i<num_objects;i++) 
		if ((getObjectLocation(i) == locno) && (CNDonotzero(i,attrno))) {setFlag(FLAG_ESCAPE, i); return false; }

	setFlag(FLAG_ESCAPE, EMPTY_OBJECT);
	return true;
}
//CND SETEXIT A 2 2 0 0

function ACCsetexit(value, locno)
{
	if (value < NUM_CONNECTION_VERBS) setConnection(loc_here(), value, locno);
}
//CND ATLE C 8 0 0 0

function CNDatle(locno)
{
	return (getFlag(FLAG_LOCATION) <= locno);
}

//CND BNEG A 1 2 0 0

function ACCbneg(flagno, bitno)
{
	if (bitno>=32) return;
	setFlag(flagno, bitneg(getFlag(flagno),bitno));
}
//CND FADEIN A 2 2 2 0

function ACCfadein(sfxno, channelno, times)
{
	if ((channelno <1) || (channelno >MAX_CHANNELS)) return;  //SFX channels from 1 to MAX_CHANNELS, channel 0 is for location music and can't be used here
	sfxplay(sfxno, channelno, times, 'fadein');
}
//CND ONEG A 4 2 0 0

function ACConeg(objno, attrno)
{
	if (attrno > 63) return;
	if (attrno <= 31)
	{
		var attrs = getObjectLowAttributes(objno);
		attrs = bitneg(attrs, attrno);
		setObjectLowAttributes(objno, attrs);
		return;
	}
	var attrs = getObjectHighAttributes(objno);
	attrno = attrno - 32;
	attrs = bitneg(attrs, attrno);
	setObjectHighAttributes(objno, attrs);
}

//CND BZERO C 1 2 0 0

function CNDbzero(flagno, bitno)
{
	if (bitno>=32) return false;
	return (!bittest(getFlag(flagno), bitno));
}
//CND NORESP A 0 0 0 0

function ACCnoresp()
{
	in_response = false;
}	

//CND EXITS A 8 5 0 0

function ACCexits(locno,mesno)
{
  if ((getFlag(FLAG_LIGHT) == 0) || ((getFlag(FLAG_LIGHT) != 0) && lightObjectsPresent()))
  {
  		var exitcount = 0;
  		for (i=0;i<NUM_CONNECTION_VERBS;i++) if (getConnection(locno, i) != -1) exitcount++;
      if (exitcount)
      {
    		writeMessage(mesno);
    		var exitcountprogress = 0;
    		for (i=0;i<NUM_CONNECTION_VERBS;i++) if (getConnection(locno, i) != -1)
    		{ 
    			exitcountprogress++;
    			writeMessage(mesno + 2 + i);
    			if (exitcountprogress == exitcount) writeSysMessage(SYSMESS_LISTEND);
    			if (exitcountprogress == exitcount-1) writeSysMessage(SYSMESS_LISTLASTSEPARATOR);
    			if (exitcountprogress <= exitcount-2) writeSysMessage(SYSMESS_LISTSEPARATOR);
  		  }
      } else writeMessage(mesno + 1);
  } else writeMessage(mesno + 1);
}

//CND BREAK A 0 0 0 0

function ACCbreak()
{
	doall_flag = false; 
	entry_for_doall = '';
}
//CND DIV A 1 2 0 0

function ACCdiv(flagno, valor)
{
	if (valor == 0) return;
	setFlag(flagno, Math.floor(getFlag(flagno) / valor));
}
//CND ISNOTMUSIC C 0 0 0 0

function CNDisnotmusic()
{
  return !CNDismusic();
}

//CND OBJFOUND C 2 9 0 0

function CNDobjfound(attrno, locno)
{

	for (var i=0;i<num_objects;i++) 
		if ((getObjectLocation(i) == locno) && (CNDonotzero(i,attrno))) {setFlag(FLAG_ESCAPE, i); return true; }
	setFlag(FLAG_ESCAPE, EMPTY_OBJECT);
	return false;
}

//CND RANDOMX A 1 2 0 0

function ACCrandomx(flagno, value)
{
	 setFlag(flagno, 1 + Math.floor((Math.random()*value)));
}
//CND ISSOUND C 1 0 0 0

function CNDissound(channelno)
{
	if ((channelno <1 ) || (channelno > MAX_CHANNELS)) return false;
    return channelActive(channelno);
}
//CND RESUMEVIDEO A 0 0 0 0


function ACCresumevideo()
{
	if (typeof videoElement != 'undefined') 
		if (videoElement.paused)
		  videoElement.play();
}

//CND TITLE A 14 0 0 0

function ACCtitle(writeno)
{
	document.title = writemessages[writeno];
}
//CND ISRESP C 0 0 0 0

function CNDisresp()
{
	return in_response;	
}

//CND PLAYVIDEO A 14 2 2 0

var videoLoopCount;
var videoEscapable;
var videoElement;

function ACCplayvideo(strno, loopCount, settings)
{
	videoEscapable = settings & 1; // if bit 0 of settings is 1, video can be interrupted with ESC key
	if (loopCount == 0) loopCount = -1;
	videoLoopCount = loopCount;

	str = '<video id="videoframe" height="100%">';
	str = str + '<source src="dat/' + writemessages[strno] + '.mp4" type="video/mp4" codecs="avc1.4D401E, mp4a.40.2">';
	str = str + '<source src="dat/' + writemessages[strno] + '.webm" type="video/webm" codecs="vp8.0, vorbis">';
	str = str + '<source src="dat/' + writemessages[strno] + '.ogg" type="video/ogg" codecs="theora, vorbis">';
	str = str + '</video>';
	$('.graphics').removeClass('hidden');
	$('.graphics').addClass('half_graphics');
	$('.text').removeClass('all_text');
	$('.text').addClass('half_text');
	$('.graphics').html(str);
	$('#videoframe').css('height','100%');
	$('#videoframe').css('display','block');
	$('#videoframe').css('margin-left','auto');
	$('#videoframe').css('margin-right','auto');
	$('#graphics').show();
	videoElement = document.getElementById('videoframe');
	videoElement.onended = function() 
	{
    	if (videoLoopCount == -1) videoElement.play();
    	else
    	{
    		videoLoopCount--;
    		if (videoLoopCount) videoElement.play();
    	}
	};
	videoElement.play();

}

// Hook into location description to avoid video playing to continue playing while hidden after changing location
var old_video_h_description_init = h_description_init ;
var h_description_init =  function  ()
{
	if ($("#videoframe").length > 0) $("#videoframe").remove();	
	old_video_h_description_init();
}

// Hook into keypress to cancel video playing if ESC is pressed and video is skippable

var old_video_h_keydown =  h_keydown;
h_keydown = function (event)
{
 	if ((event.keyCode == 27) && (typeof videoElement != 'undefined') && (!videoElement.ended) && (videoEscapable)) 
 	{
 		videoElement.pause(); 
 		return false;  // we've finished attending ESC press
 	}
 	else return old_video_h_keydown(event);
}




//CND NPCAT A 9 1 0 0

function ACCnpcat(locno, flagno)
{
	setFlag(flagno,getNPCCountAt(locno));
}

//CND LISTSAVEDGAMES A 0 0 0 0

function ACClistsavedgames()
{
  var numberofgames = 0;
  for(var savedgames in localStorage)
  {
    gamePrefix = savedgames.substring(0,16); // takes out ngpaws_savegame_
    if (gamePrefix == "ngpaws_savegame_")
    {
      gameName = savedgames.substring(16);
      writelnText(gameName);
      numberofgames++;
    }
  }
  if (numberofgames == 0) 
  {
     if (getLang()=='EN') writelnText("No saved games found."); else writelnText("No hay ninguna partida guardada.");
  }
}


// This file is (C) Carlos Sanchez 2014, released under the MIT license


// IMPORTANT: Please notice this file must be encoded with the same encoding the index.html file is, so the "normalize" function works properly.
//            As currently the ngpwas compiler generates utf-8, and the index.html is using utf-8 also, this file must be using that encoding.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                         Auxiliary functions                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// General functions
String.prototype.rights= function(n){
    if (n <= 0)
       return "";
    else if (n > String(this).length)
       return this;
    else {
       var iLen = String(this).length;
       return String(this).substring(iLen, iLen - n);
    }
}


String.prototype.firstToLower= function()
{
	return  this.charAt(0).toLowerCase() + this.slice(1);	
}


// Returns true if using Internet Explorer 9 or below, where some features are not supported
function isBadIE () {
  var myNav = navigator.userAgent.toLowerCase();
  if (myNav.indexOf('msie') == -1) return false;
  ieversion =  parseInt(myNav.split('msie')[1]);
  return (ieversion<10);
}


function runningLocal()
{
	return (window.location.protocol == 'file:');
}


// Levenshtein function

function getLevenshteinDistance (a, b)
{
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 
 
  var matrix = [];
 
  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }
 
  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }
 
  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }
 
  return matrix[b.length][a.length];
};

// waitKey helper for all key-wait condacts

function waitKey(callbackFunction)
{
	waitkey_callback_function.push(callbackFunction);
	showAnykeyLayer();
}

function waitKeyCallback()
{
 	var callback = waitkey_callback_function.pop();
	callback();
	if (describe_location_flag) descriptionLoop();  		
}


// Check DOALL entry

function skipdoall(entry)
{
	return  ((doall_flag==true) && (entry_for_doall!='') && (current_process==process_in_doall) && (entry_for_doall > entry));
}

// Dynamic attribute use functions
function getNextFreeAttribute()
{
	var value = nextFreeAttr;
	nextFreeAttr++;
	return value;
}


// Gender functions

function getSimpleGender(objno)  // Simple, for english
{
 	isPlural = objectIsAttr(objno, ATTR_PLURALNAME);
 	if (isPlural) return "P";
 	isFemale = objectIsAttr(objno, ATTR_FEMALE);
 	if (isFemale) return "F";
 	isMale = objectIsAttr(objno, ATTR_MALE);
 	if (isMale) return "M";
    return "N"; // Neuter
}

function getAdvancedGender(objno)  // Complex, for spanish
{
 	var isPlural = objectIsAttr(objno, ATTR_PLURALNAME);
 	var isFemale = objectIsAttr(objno, ATTR_FEMALE);
 	var isMale = objectIsAttr(objno, ATTR_MALE);

 	if (!isPlural) 
 	{
	 	if (isFemale) return "F";
	 	if (isMale) return "M";
	    return "N"; // Neuter
 	}
 	else
 	{
	 	if (isFemale) return "PF";
	 	if (isMale) return "PM";
	 	return "PN"; // Neuter plural
 	}

}

function getLang()
{
	var value = bittest(getFlag(FLAG_PARSER_SETTINGS),5);
	if (value) return "ES"; else return "EN";
}

function getObjectFixArticles(objno)
{
	var object_text = getObjectText(objno);
	var object_words = object_text.split(' ');
	if (object_words.length == 1) return object_text;
	var candidate = object_words[0];
	object_words.splice(0, 1);
	if (getLang()=='EN')
	{
		if ((candidate!='an') && (candidate!='a') && (candidate!='some')) return object_text;
		return 'the ' + object_words.join(' ');
	}
	else
	{
		if ( (candidate!='un') && (candidate!='una') && (candidate!='unos') && (candidate!='unas') && (candidate!='alguna') && (candidate!='algunos') && (candidate!='algunas') && (candidate!='algun')) return object_text;
		var gender = getAdvancedGender(objno);
		if (gender == 'F') return 'la ' + object_words.join(' ');
		if (gender == 'M') return 'el ' + object_words.join(' ');
		if (gender == 'N') return 'el ' + object_words.join(' ');
		if (gender == 'PF') return 'las ' + object_words.join(' ');
		if (gender == 'PM') return 'los ' + object_words.join(' ');
		if (gender == 'PN') return 'los ' + object_words.join(' ');
	}	


}



// JS level log functions
function console_log(string)
{
	if (typeof console != "undefined") console.log(string);
}


// Resources functions
function getResourceById(resource_type, id)
{
	for (var i=0;i<resources.length;i++)
	 if ((resources[i][0] == resource_type) && (resources[i][1]==id)) return resources[i][2];
	return false; 
}

// Flag read/write functions
function getFlag(flagno)
{
	 return flags[flagno];
}

function setFlag(flagno, value)
{
	 flags[flagno] = value;
}

// Locations functions
function loc_here()  // Returns current location, avoid direct use of flags
{
	 return getFlag(FLAG_LOCATION);
}


// Connections functions

function setConnection(locno1, dirno, locno2)
{
	connections[locno1][dirno] = locno2;
}

function getConnection(locno, dirno)
{
	return connections[locno][dirno];
}

// Objects text functions

function getObjectText(objno)
{
	return filterText(objects[objno]);
}


// Message text functions
function getMessageText(mesno)
{
	return filterText(messages[mesno]);
}

function getSysMessageText(sysno)
{
	return filterText(sysmessages[sysno]);
}

function getWriteMessageText(writeno)
{
	return filterText(writemessages[writeno]);
}

// Location text functions
function getLocationText(locno)
{
	return  filterText(locations[locno]);
}



// Output processing functions
function implementTag(tag)
{
	tagparams = tag.split('|');
	for (var tagindex=0;tagindex<tagparams.length-1;tagindex++) tagparams[tagindex] = tagparams[tagindex].trim();
	if (tagparams.length == 0) {writeWarning(STR_INVALID_TAG_SEQUENCE_EMPTY); return ''}

	var resolved_hook_value = h_sequencetag(tagparams);
	if (resolved_hook_value!='') return resolved_hook_value;

	switch(tagparams[0].toUpperCase())
	{
		case 'URL': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					return '<a target="newWindow" href="' + tagparams[1]+ '">' + tagparams[2] + '</a>'; // Note: _blank would get the underscore character replaced by current selected object so I prefer to use a different target name as most browsers will open a new window
					break;
		case 'CLASS': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span class="' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'STYLE': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span style="' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'INK': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span style="color:' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'PAPER': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					  return '<span style="background-color:' + tagparams[1]+ '">' + tagparams[2] + '</span>';
					  break;
		case 'OBJECT': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(objects[getFlag(tagparams[1])]) return getObjectFixArticles(getFlag(tagparams[1])); else return '';
					   break;
		case 'WEIGHT': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(objectsWeight[getFlag(tagparams[1])]) return objectsWeight[getFlag(tagparams[1])]; else return '';
					   break;
		case 'OLOCATION': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					      if(objectsLocation[getFlag(tagparams[1])]) return objectsLocation[getFlag(tagparams[1])]; else return '';
					      break;
		case 'MESSAGE':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(messages[getFlag(tagparams[1])]) return getMessageText(getFlag(tagparams[1])); else return '';
					   break;
		case 'SYSMESS':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(sysmessages[getFlag(tagparams[1])]) return getSysMessageText(getFlag(tagparams[1])); else return '';
					   break;
		case 'LOCATION':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   if(locations[getFlag(tagparams[1])]) return getLocationText(getFlag(tagparams[1])); else return '';
					   break;
		case 'PROCESS':if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   callProcess(tagparams[1]);
					   return "";
					   break;
		case 'ACTION': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					   return '<a href="javascript: void(0)" onmouseup="orderEnteredLoop(\'' + tagparams[1]+ '\')">' + tagparams[2] + '</a>';
					   break;
		case 'RESTART': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					    return '<a href="javascript: void(0)" onmouseup="restart()">' + tagparams[1] + '</a>';
					    break;
		case 'EXTERN': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					    return '<a href="javascript: void(0)" onmouseup="' + tagparams[1] + ' ">' + tagparams[2] + '</a>';
					    break;
		case 'TEXTPIC': if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						var style = '';
						var post = '';
						var pre = '';
						align = tagparams[2];
						switch(align)
						{
							case 1: style = 'float:left'; break;
							case 2: style = 'float:right'; break;
							case 3: post = '<br />';
							case 4: pre='<center>';post='</center>';break;
						}
						return pre + "<img class='textpic' style='"+style+"' src='"+ RESOURCES_DIR + tagparams[1]+"' />" + post;
					    break;
		case 'HTML': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						return tagparams[1];
					    break;
		case 'FLAG': if (tagparams.length != 2) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
						return getFlag(tagparams[1]);
					    break;
		case 'OREF': if (tagparams.length != 1) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
   			        if(objects[getFlag(FLAG_REFERRED_OBJECT)]) return getObjectFixArticles(getFlag(FLAG_REFERRED_OBJECT)); else return '';
					break;
		case 'TT':  
		case 'TOOLTIP':
					if (tagparams.length != 3) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};
					var title = tagparams[1];
					var text = tagparams[2];
					return "<span title='"+title+"'>"+text+"</span>";
					break;
		case 'OPRO': if (tagparams.length != 1) {return '[[[' + STR_INVALID_TAG_SEQUENCE_BADPARAMS + ']]]'};  // returns the pronoun for a given object, used for english start database
					 switch (getSimpleGender(getFlag(FLAG_REFERRED_OBJECT)))
					 {
					 	case 'M' : return "him";
					 	case "F" : return "her";
					 	case "N" : return "it";
					 	case "P" : return "them";  // plural returns them
					 }
					break;

		default : return '[[[' + STR_INVALID_TAG_SEQUENCE_BADTAG + ' : ' + tagparams[0] + ']]]';
	}
}

function processTags(text)
{
	//Apply the {} tags filtering
	var pre, post, innerTag;
	tagfilter:
	while (text.indexOf('{') != -1)
	{
		if (( text.indexOf('}') == -1 ) || ((text.indexOf('}') < text.indexOf('{'))))
		{
			writeWarning(STR_INVALID_TAG_SEQUENCE + text);
			break tagfilter;
		}
		pre = text.substring(0,text.indexOf('{'));
		var openbracketcont = 1;
		pointer = text.indexOf('{') + 1;
		innerTag = ''
		while (openbracketcont>0)
		{
			if (text.charAt(pointer) == '{') openbracketcont++;
			if (text.charAt(pointer) == '}') openbracketcont--;
			innerTag = innerTag + text.charAt(pointer);
			pointer++;
		}
		innerTag = innerTag.substring(0,innerTag.length - 1);
		post = text.substring(pointer);
		if (innerTag.indexOf('{') != -1 ) innerTag = processTags(innerTag); 
		innerTag = implementTag(innerTag);
		text = pre + innerTag + post;
	}
	return text;
}

function filterText(text)
{
	// ngPAWS sequences
	text = processTags(text);


	// Superglus sequences (only \n remains)
    text = text.replace(/\n/g, STR_NEWLINE);

	// PAWS sequences (only underscore)
	objno = getFlag(FLAG_REFERRED_OBJECT);
	if ((objno != EMPTY_OBJECT) && (objects[objno]))	text = text.replace(/_/g,objects[objno].firstToLower()); else text = text.replace(/_/g,'');
	text = text.replace(/¬/g,' ');

	return text;
}


// Text Output functions
function writeText(text, skipAutoComplete)
{
	if (typeof skipAutoComplete === 'undefined') skipAutoComplete = false;
	text = h_writeText(text); // hook
	$('.text').append(text);
	$('.text').scrollTop($('.text')[0].scrollHeight);
	addToTranscript(text);
	if (!skipAutoComplete) addToAutoComplete(text);
	focusInput();
}

function writeWarning(text)
{
	if (showWarnings) writeText(text)
}

function addToTranscript(text)
{
	transcript = transcript + text;		
}

function writelnText(text, skipAutoComplete)
{
	if (typeof skipAutoComplete === 'undefined') skipAutoComplete = false;
	writeText(text + STR_NEWLINE, skipAutoComplete);
}

function writeMessage(mesno)
{
	if (messages[mesno]!=null) writeText(getMessageText(mesno)); else writeWarning(STR_NEWLINE + STR_WRONG_MESSAGE + ' [' + mesno + ']');
}

function writeSysMessage(sysno)
{
		if (sysmessages[sysno]!=null) writeText(getSysMessageText(sysno)); else writeWarning(STR_NEWLINE + STR_WRONG_SYSMESS + ' [' + sysno + ']');
		$(".text").scrollTop($(".text")[0].scrollHeight);
}

function writeWriteMessage(writeno)
{
		writeText(getWriteMessageText(writeno)); 
}

function writeObject(objno)
{
	writeText(getObjectText(objno));
}

function clearTextWindow()
{
	$('.text').empty();
}


function clearInputWindow()
{
	$('.prompt').val('');
}


function writeLocation(locno)
{
	if (locations[locno]!=null) writeText(getLocationText(locno) + STR_NEWLINE); else writeWarning(STR_NEWLINE + STR_WRONG_LOCATION + ' [' + locno + ']');
}

// Screen control functions

function clearGraphicsWindow()
{
	$('.graphics').empty();	
}


function clearScreen()
{
	clearInputWindow();
	clearTextWindow();
	clearGraphicsWindow();
}

function copyOrderToTextWindow(player_order)
{

	last_player_orders.push(player_order);
	last_player_orders_pointer = 0;
	clearInputWindow();
	writelnText(STR_PROMPT_START + player_order + STR_PROMPT_END, false);
}

function get_prev_player_order()
{
	if (!last_player_orders.length) return '';
	var last = last_player_orders[last_player_orders.length - 1 - last_player_orders_pointer];
	if (last_player_orders_pointer < last_player_orders.length - 1) last_player_orders_pointer++;
	return last;
}

function get_next_player_order()
{
	if (!last_player_orders.length) return '';
	if (last_player_orders_pointer > 0) last_player_orders_pointer--;
	return last_player_orders[last_player_orders.length - 1 - last_player_orders_pointer];

}



// Graphics functions


function hideGraphicsWindow()
{
		$('.text').removeClass('half_text');
		$('.text').addClass('all_text');
		$('.graphics').removeClass('half_graphics');
		$('.graphics').addClass('hidden');
		if ($('.location_picture')) $('.location_picture').remove();
}



function drawPicture(picno)  
{
	var pictureDraw = false;
	if (graphicsON) 
	{
		if ((isDarkHere()) && (!lightObjectsPresent())) picno = 0;
		var filename = getResourceById(RESOURCE_TYPE_IMG, picno);
		if (filename)
		{
			$('.graphics').removeClass('hidden');
			$('.graphics').addClass('half_graphics');
			$('.text').removeClass('all_text');
			$('.text').addClass('half_text');
			$('.graphics').html('<img alt="" class="location_picture" src="' +  filename + '" />');
			$('.location_picture').css('height','100%');
			pictureDraw = true;
		}
	}

	if (!pictureDraw) hideGraphicsWindow();
}




function clearPictureAt() // deletes all pictures drawn by "pictureAT" condact
{
	$.each($('.graphics img'), function () {
		if ($(this)[0].className!= 'location_picture') $(this).remove();
	});

}

// Turns functions

function incTurns()
{
	turns = getFlag(FLAG_TURNS_LOW) + 256 * getFlag(FLAG_TURNS_HIGH)  + 1;
	setFlag(FLAG_TURNS_LOW, turns % 256);
	setFlag(FLAG_TURNS_HIGH, Math.floor(turns / 256));
}

// input box functions

function disableInput()
{
	$(".input").prop('disabled', true); 
}

function enableInput()
{
	$(".input").prop('disabled', false); 
}

function focusInput()
{
	$(".prompt").focus();
	timeout_progress = 0;
}

// Object default attributes functions

function objectIsNPC(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_NPC);
}

function objectIsLight(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_LIGHT);
}

function objectIsWearable(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_WEARABLE);
}

function objectIsContainer(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_CONTAINER);
}

function objectIsSupporter(objno)
{
	if (objno > last_object_number) return false;
	return bittest(getObjectLowAttributes(objno), ATTR_SUPPORTER);
}


function objectIsAttr(objno, attrno)
{
	if (attrno > 63) return false;
	var attrs = getObjectLowAttributes(objno);
	if (attrno > 31)
	{
		attrs = getObjectHighAttributes(objno);
		attrno = attrno - 32;
	}
	return bittest(attrs, attrno);
}

function isAccesibleContainer(objno)
{
	if (objectIsSupporter(objno)) return true;   // supporter
	if ( objectIsContainer(objno) && !objectIsAttr(objno, ATTR_OPENABLE) ) return true;  // No openable container
	if ( objectIsContainer(objno) && objectIsAttr(objno, ATTR_OPENABLE) && objectIsAttr(objno, ATTR_OPEN)  )  return true;  // No openable & open container
	return false;
}

//Objects and NPC functions

function findMatchingObject(locno)
{
	for (var i=0;i<num_objects;i++)
		if ((locno==-1) || (getObjectLocation(i) == locno))
		 if (((objectsNoun[i]) == getFlag(FLAG_NOUN1)) && (((objectsAdjective[i]) == EMPTY_WORD) || ((objectsAdjective[i]) == getFlag(FLAG_ADJECT1))))  return i;
	return EMPTY_OBJECT;
}

function getReferredObject()
{
	var objectfound = EMPTY_OBJECT; 
	refobject_search: 
	{
		object_id = findMatchingObject(LOCATION_CARRIED);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(LOCATION_WORN);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(loc_here());
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	

		object_id = findMatchingObject(-1);
		if (object_id != EMPTY_OBJECT)	{objectfound = object_id; break refobject_search;}	
	}
	return objectfound;
}


function getObjectLowAttributes(objno)
{
	return objectsAttrLO[objno];
}

function getObjectHighAttributes(objno)
{
	return objectsAttrHI[objno]
}


function setObjectLowAttributes(objno, attrs)
{
	objectsAttrLO[objno] = attrs;
}

function setObjectHighAttributes(objno, attrs)
{
	objectsAttrHI[objno] = attrs;
}


function getObjectLocation(objno)
{
	if (objno > last_object_number) 
		writeWarning(STR_INVALID_OBJECT + ' [' + objno + ']');
	return objectsLocation[objno];
}

function setObjectLocation(objno, locno)
{
	if (objectsLocation[objno] == LOCATION_CARRIED) setFlag(FLAG_OBJECTS_CARRIED_COUNT, getFlag(FLAG_OBJECTS_CARRIED_COUNT) - 1);
	objectsLocation[objno] = locno;
	if (objectsLocation[objno] == LOCATION_CARRIED) setFlag(FLAG_OBJECTS_CARRIED_COUNT, getFlag(FLAG_OBJECTS_CARRIED_COUNT) + 1);
}



// Sets all flags associated to  referred object by current LS  
function setReferredObject(objno) 
{
	if (objno == EMPTY_OBJECT)
	{
		setFlag(FLAG_REFERRED_OBJECT, EMPTY_OBJECT);
		setFlag(FLAG_REFERRED_OBJECT_LOCATION, LOCATION_NONCREATED);
		setFlag(FLAG_REFERRED_OBJECT_WEIGHT, 0);
		setFlag(FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES, 0);
		setFlag(FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES, 0);
		return;
	}
	setFlag(FLAG_REFERRED_OBJECT, objno);
	setFlag(FLAG_REFERRED_OBJECT_LOCATION, getObjectLocation(objno));
	setFlag(FLAG_REFERRED_OBJECT_WEIGHT, getObjectWeight(objno));
	setFlag(FLAG_REFERRED_OBJECT_LOW_ATTRIBUTES, getObjectLowAttributes(objno));
	setFlag(FLAG_REFERRED_OBJECT_HIGH_ATTRIBUTES, getObjectHighAttributes(objno));

}


function getObjectWeight(objno) 
{
	var weight = objectsWeight[objno];
	if ( ((objectIsContainer(objno)) || (objectIsSupporter(objno))) && (weight!=0)) // Container with zero weigth are magic boxes, anything you put inside weigths zero
  		weight = weight + getLocationObjectsWeight(objno);
	return weight;
}


function getLocationObjectsWeight(locno) 
{
	var weight = 0;
	for (var i=0;i<num_objects;i++)
	{
		if (getObjectLocation(i) == locno) 
		{
			objweight = objectsWeight[i];
			weight += objweight;
			if (objweight > 0)
			{
				if (  (objectIsContainer(i)) || (objectIsSupporter(i)) )
				{	
					weight += getLocationObjectsWeight(i);
				}
			}
		}
	}
	return weight;
}

function getObjectCountAt(locno) 
{
	var count = 0;
	for (i=0;i<num_objects;i++)
	{
		if (getObjectLocation(i) == locno) 
		{
			attr = getObjectLowAttributes(i);
			if (!bittest(getFlag(FLAG_PARSER_SETTINGS),3)) count ++;  // Parser settings say we should include NPCs as objects
			 else if (!objectIsNPC(i)) count++;     // or object is not an NPC
		}
	}
	return count;
}


function getObjectCountAtWithAttr(locno, attrnoArray) 
{
	var count = 0;
	for (var i=0;i<num_objects;i++)
		if (getObjectLocation(i) == locno)  
			for (var j=0;j<attrnoArray.length;j++)
				if (objectIsAttr(i, attrnoArray[j])) count++;
	return count;
}


function getNPCCountAt(locno) 
{
	var count = 0;
	for (i=0;i<num_objects;i++)
		if ((getObjectLocation(i) == locno) &&  (objectIsNPC(i))) count++;
	return count;
}


// Location light function

function lightObjectsAt(locno) 
{
	return getObjectCountAtWithAttr(locno, [ATTR_LIGHT]) > 0;
}


function lightObjectsPresent() 
{
  if (lightObjectsAt(LOCATION_CARRIED)) return true;
  if (lightObjectsAt(LOCATION_WORN)) return true;
  if (lightObjectsAt(loc_here())) return true;
  return false;
}


function isDarkHere()
{
	return (getFlag(FLAG_LIGHT) != 0);
}

// Sound functions


function preloadsfx()
{
	for (var i=0;i<resources.length;i++)
	 	if (resources[i][0] == 'RESOURCE_TYPE_SND') 
	 	{
	 		var fileparts = resources[i][2].split('.');
			var basename = fileparts[0];
			var mySound = new buzz.sound( basename, {  formats: [ "ogg", "mp3" ] , preload: true} );
	 	}
}

function sfxplay(sfxno, channelno, times, method)
{

	if (!soundsON) return;
	if ((channelno <0) || (channelno >MAX_CHANNELS)) return;
	if (times == 0) times = -1; // more than 4000 million times
	var filename = getResourceById(RESOURCE_TYPE_SND, sfxno);
	if (filename)
	{
		var fileparts = filename.split('.');
		var basename = fileparts[0];
		var mySound = new buzz.sound( basename, {  formats: [ "ogg", "mp3" ] });
		if (soundChannels[channelno]) soundChannels[channelno].stop();
		soundLoopCount[channelno] = times;
		mySound.bind("ended", function(e) {
			for (sndloop=0;sndloop<MAX_CHANNELS;sndloop++)
				if (soundChannels[sndloop] == this)
				{
					if (soundLoopCount[sndloop]==-1) {this.play(); return }
					soundLoopCount[sndloop]--;
					if (soundLoopCount[sndloop] > 0) {this.play(); return }
					sfxstop(sndloop);
					return;
				}
		});
		soundChannels[channelno] = mySound;
		if (method=='play')	mySound.play(); else mySound.fadeIn(2000);
	}
}

function playLocationMusic(locno)
{
	if (soundsON) 
		{
			sfxstop(0);
			sfxplay(locno, 0, 0, 'play');
		}
}

function musicplay(musicno, times)  
{
	sfxplay(musicno, 0, times);
}

function channelActive(channelno)
{
	if (soundChannels[channelno]) return true; else return false;
}


function sfxstopall() 
{
	for (channelno=0;channelno<MAX_CHANNELS;channelno++) sfxstop(channelno);

}


function sfxstop(channelno)
{
	if (soundChannels[channelno]) 
		{
			soundChannels[channelno].unbind('ended');
			soundChannels[channelno].stop();
			soundChannels[channelno] = null;
		}
}

function sfxvolume(channelno, value)
{
	if (soundChannels[channelno]) soundChannels[channelno].setVolume(Math.floor( value * 100 / 65535)); // Inherited volume condact uses a number among 0 and 65535, buzz library uses 0-100.
}

function isSFXPlaying(channelno)
{
	if (!soundChannels[channelno]) return false;
	return true;
}


function sfxfadeout(channelno, value)
{
	if (!soundChannels[channelno]) return;
	soundChannels[channelno].fadeOut(value, function() { sfxstop(channelno) });
}

// *** Process functions ***

function callProcess(procno)
{
	if (inEND) return;
	current_process = procno;
	var prostr = procno.toString(); 
	while (prostr.length < 3) prostr = "0" + prostr;
	if (procno==0) in_response = true;
	if (doall_flag && in_response) done_flag = false;
	if (!in_response) done_flag = false;
	h_preProcess(procno);
    eval("pro" + prostr + "()");
	h_postProcess(procno);
	if (procno==0) in_response = false;
}

// Bitwise functions

function bittest(value, bitno)
{
	mask = 1 << bitno;
	return ((value & mask) != 0);
}

function bitset(value, bitno)
{

	mask = 1 << bitno;
	return value | mask;
}

function bitclear(value, bitno)
{
	mask = 1 << bitno;
	return value & (~mask);
}


function bitneg(value, bitno) 
{
	mask = 1 << bitno;
	return value ^ mask;

}

// Savegame functions
function getSaveGameObject()
{
	var savegame_object = new Object();
	// Notice that slice() is used to make sure a copy of each array is assigned to the object, no the arrays themselves
	savegame_object.flags = flags.slice();
	savegame_object.objectsLocation = objectsLocation.slice();
	savegame_object.objectsWeight = objectsWeight.slice();
	savegame_object.objectsAttrLO = objectsAttrLO.slice();
	savegame_object.objectsAttrHI = objectsAttrHI.slice();
	savegame_object.connections = connections.slice();
	savegame_object = h_saveGame(savegame_object);
	return savegame_object;
}

function restoreSaveGameObject(savegame_object)
{
	flags = savegame_object.flags;
	// Notice that slice() is used to make sure a copy of each array is assigned to the object, no the arrays themselves
	objectsLocation = savegame_object.objectsLocation.slice();
	objectsWeight = savegame_object.objectsWeight.slice();
	objectsAttrLO = savegame_object.objectsAttrLO.slice();
	objectsAttrHI = savegame_object.objectsAttrHI.slice();
	connections = savegame_object.connections.slice();
	h_restoreGame(savegame_object);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        The parser                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function loadPronounSufixes()
{

    var swapped;

	for (var j=0;j<vocabulary.length;j++) if (vocabulary[j][VOCABULARY_TYPE] == WORDTYPE_PRONOUN)
			 pronoun_suffixes.push(vocabulary[j][VOCABULARY_WORD]);
	// Now sort them so the longest are first, so you rather replace SELOS in (COGESELOS=>COGE SELOS == >TAKE THEM) than LOS (COGESELOS==> COGESE LOS ==> TAKExx THEM) that woul not be understood (COGESE is not a verb, COGE is)
    do {
        swapped = false;
        for (var i=0; i < pronoun_suffixes.length-1; i++) 
        {
            if (pronoun_suffixes[i].length < pronoun_suffixes[i+1].length) 
            {
                var temp = pronoun_suffixes[i];
                pronoun_suffixes[i] = pronoun_suffixes[i+1];
                pronoun_suffixes[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


function findVocabulary(word, forceDisableLevenshtein)  
{
	// Pending: in general this function is not very efficient. A solution where the vocabulary array is sorted by word so the first search can be binary search
	//          and possible typos are precalculated, so the distance is a lookup table instead of a function, would be much more efficient. On the other hand,
	//          the current solution is fast enough with a 1000+ words game that I don't consider improving this function to have high priority now.

	// Search word in vocabulary
	for (var j=0;j<vocabulary.length;j++)
		if (vocabulary[j][VOCABULARY_WORD] == word)
			 return vocabulary[j];

	if (forceDisableLevenshtein) return null;

	if (word.length <=4) return null; // Don't try to fix typo for words with less than 5 length

	if (bittest(getFlag(FLAG_PARSER_SETTINGS), 8)) return null; // If matching is disabled, we won't try to use levhenstein distance

	// Search words in vocabulary with a Levenshtein distance of 1
	var distance2_match = null;
	for (var k=0;k<vocabulary.length;k++)
	{
		if ([WORDTYPE_VERB,WORDTYPE_NOUN,WORDTYPE_ADJECT,WORDTYPE_ADVERB].indexOf(vocabulary[k][VOCABULARY_TYPE])  != -1 )
		{
			var distance = getLevenshteinDistance(vocabulary[k][VOCABULARY_WORD], word);
			if ((!distance2_match) && (distance==2)) distance2_match = vocabulary[k]; // Save first word with distance=2, in case we don't find any word with distance 1
			if (distance <= 1) return vocabulary[k];
		}
	} 

	// If we found any word with distance 2, return it, only if word was at least 7 characters long
	if ((distance2_match) &&  (word.length >6)) return distance2_match;

	// Word not found
	return null;
}

function normalize(player_order)   
// Removes accented characters and makes sure every sentence separator (colon, semicolon, quotes, etc.) has one space before and after. Also, all separators are converted to comma
{
	var originalchars = 'áéíóúäëïöüâêîôûàèìòùÁÉÍÓÚÄËÏÖÜÂÊÎÔÛÀÈÌÒÙ';
	var i;
	var output = '';
	var pos;

	for (i=0;i<player_order.length;i++) 
	{
		pos = originalchars.indexOf(player_order.charAt(i));
		if (pos!=-1) output = output + "aeiou".charAt(pos % 5); else 
		{
			ch = player_order.charAt(i);
			if ((ch=='.') || (ch==',') || (ch==';') || (ch=='"') || (ch=='\'') || (ch=='«') || (ch=='»')) output = output + ' , '; else output = output + player_order.charAt(i);
		}

	}
	return output;
}

function toParserBuffer(player_order)  // Converts a player order in a list of sentences separated by dot.
{
     player_order = normalize(player_order);
     player_order = player_order.toUpperCase();
    
	 var words = player_order.split(' ');
	 for (var q=0;q<words.length;q++)
	 {
	 	words[q] = words[q].trim();
	 	if  (words[q]!=',')
	 	{
	 		words[q] = words[q].trim();
	 		foundWord = findVocabulary(words[q], false);
	 		if (foundWord)
	 		{
	 			if (foundWord[VOCABULARY_TYPE]==WORDTYPE_CONJUNCTION)
	 			{
	 			words[q] = ','; // Replace conjunctions with commas
		 		} 
	 		}
	 	}
	 }

	 var output = '';
	 for (q=0;q<words.length;q++)
	 {
	 	if (words[q] == ',') output = output + ','; else output = output + words[q] + ' ';
	 }
	 output = output.replace(/ ,/g,',');
	 output = output.trim();
	 player_order_buffer = output;
}

function getSentencefromBuffer()
{
	var sentences = player_order_buffer.split(',');
	var result = sentences[0];
	sentences.splice(0,1);
	player_order_buffer = sentences.join();
	return result;
}

function processPronounSufixes(words)  
{
	// This procedure will split pronominal sufixes into separated words, so COGELA will become COGE LA at the end, and work exactly as TAKE IT does.
	// it's only for spanish so if lang is english then it makes no changes
	if (getLang() == 'EN') return words;
	var verbFound = false;
	if (!bittest(getFlag(FLAG_PARSER_SETTINGS),0)) return words;  // If pronoun sufixes inactive, just do nothing
	// First, we clear the word list from any match with pronouns, cause if we already have something that matches pronouns, probably is just concidence, like in COGE LA LLAVE
	var filtered_words = [];
	for (var q=0;q < words.length;q++)
	{
		foundWord = findVocabulary(words[q], false);
		if (foundWord) 
			{
				if (foundWord[VOCABULARY_TYPE] != WORDTYPE_PRONOUN) filtered_words[filtered_words.length] = words[q];
			}
			else filtered_words[filtered_words.length] = words[q];
	}
	words = filtered_words;

	// Now let's start trying to get sufixes
	new_words = [];
	for (var k=0;k < words.length;k++)
	{
		words[k] = words[k].trim();
		foundWord = findVocabulary(words[k], true); // true to disable Levenshtein distance applied
		if (foundWord) if (foundWord[VOCABULARY_TYPE] == WORDTYPE_VERB) verbFound = true;  // If we found a verb, we don't look for pronoun sufixes, as they have to come together with verb
		suffixFound = false;
		pronunsufix_search:
		for (var l=0;(l<pronoun_suffixes.length) && (!suffixFound) && (!verbFound);l++)
		{

			if (pronoun_suffixes[l] == words[k].rights(pronoun_suffixes[l].length))
			{
				var verb_part = words[k].substring(0,words[k].length - pronoun_suffixes[l].length);
				var checkWord = findVocabulary(verb_part, false);
				if ((!checkWord)  || (checkWord[VOCABULARY_TYPE] != WORDTYPE_VERB))  // If the part before the supposed-to-be pronoun sufix is not a verb, then is not a pronoun sufix
				{
					new_words.push(words[k]);	
					continue pronunsufix_search;
				}
				new_words.push(verb_part);  // split the word in two parts: verb + pronoun. Since that very moment it works like in english (COGERLO ==> COGER LO as of TAKE IT)
				new_words.push(pronoun_suffixes[l]);
				suffixFound = true;
				verbFound = true;
			}
		}
		if (!suffixFound) new_words.push(words[k]);
	}
	return new_words;
}

function getLogicSentence()
{
	parser_word_found = false; ;
	aux_verb = -1;
	aux_noun1 = -1;
	aux_adject1 = -1;
	aux_adverb = -1;
	aux_pronoun = -1
	aux_pronoun_adject = -1
	aux_preposition = -1;
	aux_noun2 = -1;
	aux_adject2 = -1;
	initializeLSWords();
	SL_found = false;

	var order = getSentencefromBuffer();
	setFlag(FLAG_PARSER_SETTINGS, bitclear(getFlag(FLAG_PARSER_SETTINGS),1)); // Initialize flag that says an unknown word was found in the sentence


	words = order.split(" ");
	words = processPronounSufixes(words);
	wordsearch_loop:
	for (var i=0;i<words.length;i++)
	{
		original_word = currentword = words[i];
		if (currentword.length>10) currentword = currentword.substring(0,MAX_WORD_LENGHT);
		foundWord = findVocabulary(currentword, false);
		if (foundWord)
		{
			wordtype = foundWord[VOCABULARY_TYPE];
			word_id = foundWord[VOCABULARY_ID];

			switch (wordtype)
			{
				case WORDTYPE_VERB: if (aux_verb == -1)  aux_verb = word_id; 
				        			break;

				case WORDTYPE_NOUN: if (aux_noun1 == -1) aux_noun1 = word_id; else if (aux_noun2 == -1) aux_noun2 = word_id;
									break;

				case WORDTYPE_ADJECT: if (aux_adject1 == -1) aux_adject1 = word_id; else if (aux_adject2 == -1) aux_adject2 = word_id;
									  break;

				case WORDTYPE_ADVERB: if (aux_adverb == -1) aux_adverb = word_id;
				        			  break;

				case WORDTYPE_PRONOUN: if (aux_pronoun == -1) 
											{
												aux_pronoun = word_id;
												if ((previous_noun != EMPTY_WORD) && (aux_noun1 == -1))
												{
													aux_noun1 = previous_noun;
													if (previous_adject != EMPTY_WORD) aux_adject1 = previous_adject;
												}
											}

				        			   break;

				case WORDTYPE_CONJUNCTION: break wordsearch_loop; // conjunction or nexus. Should not appear in this function, just added for security
				
				case WORDTYPE_PREPOSITION: if (aux_preposition == -1) aux_preposition = word_id;
										   if (aux_noun1!=-1) setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS),2));  // Set bit that determines that a preposition word was found after first noun
										   break;
			}

			// Nouns that can be converted to verbs
			if ((aux_noun1!=-1) && (aux_verb==-1) && (aux_noun1 < NUM_CONVERTIBLE_NOUNS))
			{
				aux_verb = aux_noun1;
				aux_noun1 = -1;
			}

			if ((aux_verb==-1) && (aux_noun1!=-1) && (previous_verb!=EMPTY_WORD)) aux_verb = previous_verb;  // Support "TAKE SWORD AND SHIELD" --> "TAKE WORD AND TAKE SHIELD"

			if ((aux_verb!=-1) || (aux_noun1!=-1) || (aux_adject1!=-1 || (aux_preposition!=-1) || (aux_adverb!=-1))) SL_found = true;



		} else if (aux_verb!=-1) setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS),1));  // Set bit that determines that an unknown word was found after the verb
	}

	if (SL_found)
	{
		if (aux_verb != -1) setFlag(FLAG_VERB, aux_verb);
		if (aux_noun1 != -1) setFlag(FLAG_NOUN1, aux_noun1);
		if (aux_adject1 != -1) setFlag(FLAG_ADJECT1, aux_adject1);
		if (aux_adverb != -1) setFlag(FLAG_ADVERB, aux_adverb);
		if (aux_pronoun != -1) 
			{
				setFlag(FLAG_PRONOUN, aux_noun1);
				setFlag(FLAG_PRONOUN_ADJECT, aux_adject1);
			}
			else
			{
				setFlag(FLAG_PRONOUN, EMPTY_WORD);
				setFlag(FLAG_PRONOUN_ADJECT, EMPTY_WORD);
			}
		if (aux_preposition != -1) setFlag(FLAG_PREP, aux_preposition);
		if (aux_noun2 != -1) setFlag(FLAG_NOUN2, aux_noun2);
		if (aux_adject2 != -1) setFlag(FLAG_ADJECT2, aux_adject2);
		setReferredObject(getReferredObject());
		previous_verb = aux_verb;
		if ((aux_noun1!=-1) && (aux_noun1>=NUM_PROPER_NOUNS))
		{
			previous_noun = aux_noun1;
			if (aux_adject1!=-1) previous_adject = aux_adject1;
		}
		
	}
	if ((aux_verb + aux_noun1+ aux_adject1 + aux_adverb + aux_pronoun + aux_preposition + aux_noun2 + aux_adject2) != -8) parser_word_found = true;

	return SL_found;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                        Main functions and main loop                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Interrupt functions

function enableInterrupt()
{
	interruptDisabled = false;
}

function disableInterrupt()
{
	interruptDisabled = true;
}

function timer()
{
	// Timeout control
	timeout_progress=  timeout_progress + 1/32;  //timer happens every 40 milliseconds, but timeout counter should only increase every 1.28 seconds (according to PAWS documentation)
	timeout_length = getFlag(FLAG_TIMEOUT_LENGTH);
	if ((timeout_length) && (timeout_progress> timeout_length))  // time for timeout
	{
		timeout_progress = 0;
		if (($('.prompt').val() == '')  || (($('.prompt').val()!='') && (!bittest(getFlag(FLAG_TIMEOUT_SETTINGS),0))) )  // but first check there is no text type, or is allowed to timeout when text typed already
		{
			setFlag(FLAG_TIMEOUT_SETTINGS, bitset(getFlag(FLAG_TIMEOUT_SETTINGS),7)); // Clears timeout bit
			writeSysMessage(SYSMESS_TIMEOUT);	
			callProcess(PROCESS_TURN);
		}
	}	

	// PAUSE condact control
	if (inPause)
	{
		pauseRemainingTime = pauseRemainingTime - 40; // every tick = 40 milliseconds
		if (pauseRemainingTime<=0)
		{
			inPause = false;
			hideAnykeyLayer();
			waitKeyCallback()
		}
	}

	// Interrupt process control
	if (!interruptDisabled)
	if (interruptProcessExists)
	{
		callProcess(interrupt_proc);
		setFlag(FLAG_PARSER_SETTINGS, bitclear(getFlag(FLAG_PARSER_SETTINGS), 4));  // Set bit at flag that marks that a window resize happened 
	}

	// Set timer again
	setTimeout(function (){
	     	timer();
     },TIMER_MILLISECONDS);
}

// Initialize and finalize functions

function farewell()
{
	writeSysMessage(SYSMESS_FAREWELL);
	ACCnewline();
}


function initializeConnections()
{
  connections = [].concat(connections_start);
}

function initializeObjects()
{
  for (i=0;i<objects.length;i++)
  {
  	objectsAttrLO = [].concat(objectsAttrLO_start);
  	objectsAttrHI = [].concat(objectsAttrHI_start);
  	objectsLocation = [].concat(objectsLocation_start);
  	objectsWeight = [].concat(objectsWeight_start);
  }
}

function  initializeLSWords()
{
  setFlag(FLAG_PREP,EMPTY_WORD);
  setFlag(FLAG_NOUN2,EMPTY_WORD);
  setFlag(FLAG_ADJECT2,EMPTY_WORD);
  setFlag(FLAG_PRONOUN,EMPTY_WORD);
  setFlag(FLAG_ADJECT1,EMPTY_WORD);
  setFlag(FLAG_VERB,EMPTY_WORD);
  setFlag(FLAG_NOUN1,EMPTY_WORD);
  setFlag(FLAG_ADJECT1,EMPTY_WORD);
  setFlag(FLAG_ADVERB,EMPTY_WORD);
}


function initializeFlags()
{
  flags = [];
  for (var  i=0;i<FLAG_COUNT;i++) flags.push(0);
  setFlag(FLAG_MAXOBJECTS_CARRIED,4);
  setFlag(FLAG_PARSER_SETTINGS,9); // Pronoun sufixes active, DOALL and others ignore NPCs, etc. 00001001
  setFlag(FLAG_MAXWEIGHT_CARRIED,10);
  initializeLSWords();
  setFlag(FLAG_OBJECT_LIST_FORMAT,64); // List objects in a single sentence (comma separated)
  setFlag(FLAG_OBJECTS_CARRIED_COUNT,carried_objects);  // FALTA: el compilador genera esta variable, hay que cambiarlo en el compilador, ERA numero_inicial_de_objetos_llevados
}

function initializeInternalVars()
{
	num_objects = last_object_number + 1;
	transcript = '';
	timeout_progress = 0;
	previous_noun = EMPTY_WORD;
	previous_verb = EMPTY_WORD;
	previous_adject = EMPTY_WORD;
	player_order_buffer = '';
	last_player_orders = [];
	last_player_orders_pointer = 0;
	graphicsON = true; 
	soundsON = true; 
	interruptDisabled = false;
	unblock_process = null;
	done_flag = false;
	describe_location_flag =false;
	in_response = false;
	success = false;
	doall_flag = false;
	entry_for_doall	= '';
}

function initializeSound()
{
	sfxstopall();
}




function initialize()
{
	preloadsfx();
	initializeInternalVars();
	initializeSound();
	initializeFlags();
	initializeObjects();
	initializeConnections();
}



// Main loops

function descriptionLoop()
{
	do
	{
		describe_location_flag = false;
		if (!getFlag(FLAG_MODE)) clearTextWindow();
		if ((isDarkHere()) && (!lightObjectsPresent())) writeSysMessage(SYSMESS_ISDARK); else writeLocation(loc_here()); 
		h_description_init(); //CiberSheep check before publishing
		playLocationMusic(loc_here());
		if (loc_here()) drawPicture(loc_here()); else hideGraphicsWindow(); // Don't show picture at location 0
		ACCminus(FLAG_AUTODEC2,1);
		if (isDarkHere()) ACCminus(FLAG_AUTODEC3,1);
		if ((isDarkHere()) && (lightObjectsAt(loc_here())==0)) ACCminus(FLAG_AUTODEC4,1);
		callProcess(PROCESS_DESCRIPTION);
		h_description_post();
		if (describe_location_flag) continue; // descriptionLoop() again without nesting
		describe_location_flag = false;
		callProcess(PROCESS_TURN);
		if (describe_location_flag) continue; 
		describe_location_flag = false;
		focusInput();
		break; // Dirty trick to make this happen just one, but many times if descriptioLoop() should be repeated
	} while (true);

}

function orderEnteredLoop(player_order)
{
	previous_verb = EMPTY_WORD;
	setFlag(FLAG_TIMEOUT_SETTINGS, bitclear(getFlag(FLAG_TIMEOUT_SETTINGS),7)); // Clears timeout bit
	if (player_order == '') {writeSysMessage(SYSMESS_SORRY); ACCnewline(); return; };	
	player_order = h_playerOrder(player_order); //hook
	copyOrderToTextWindow(player_order);
	toParserBuffer(player_order);
	do 
	{
		describe_location_flag = false;
		ACCminus(FLAG_AUTODEC5,1);
		ACCminus(FLAG_AUTODEC6,1);
		ACCminus(FLAG_AUTODEC7,1);
		ACCminus(FLAG_AUTODEC8,1);
		if (isDarkHere()) ACCminus(FLAG_AUTODEC9,1);
		if ((isDarkHere()) && (lightObjectsAt(loc_here())==0)) ACCminus(FLAG_AUTODEC10,1);
		
		if (describe_location_flag) 
		{
			descriptionLoop();
			return;
		};

		if (getLogicSentence())
		{
			incTurns();
			done_flag = false;
			callProcess(PROCESS_RESPONSE); // Response table
			if (describe_location_flag) 
			{
				descriptionLoop();
				return;
			};
			if (!done_flag) 
			{
				if ((getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) && (CNDmove(FLAG_LOCATION)))
				{
					descriptionLoop();
					return;
				} else if (getFlag(FLAG_VERB)<NUM_CONNECTION_VERBS) {writeSysMessage(SYSMESS_WRONGDIRECTION);ACCnewline();}	else {writeSysMessage(SYSMESS_CANTDOTHAT);ACCnewline();};

			}
		} else
		{
			h_invalidOrder(player_order);
			if (parser_word_found) {writeSysMessage(SYSMESS_IDONTUNDERSTAND);   ACCnewline() }
			    		      else {writeSysMessage(SYSMESS_NONSENSE_SENTENCE); ACCnewline() };	
		}  
		callProcess(PROCESS_TURN);
	} while (player_order_buffer !='');
	previous_verb = ''; // Can't use previous verb if a new order is typed (we keep previous noun though, it can be used)
	focusInput();
}


function restart()
{
	location.reload();	
}


function hideBlock()
{
	clearInputWindow();
    $('.block_layer').hide('slow');
    enableInterrupt();   	
    $('.input').show();  
    focusInput();
}

function hideAnykeyLayer()
{
	$('.anykey_layer').hide();
    $('.input').show();  
    focusInput();   
}

function showAnykeyLayer()
{
	$('.anykey_layer').show();
    $('.input').hide();  
}

//called when the block layer is closed
function closeBlock()
{
	if (!inBlock) return;
	inBlock = false;
	hideBlock();
    var proToCall = unblock_process;
	unblock_process = null;
	callProcess(proToCall);
	if (describe_location_flag) descriptionLoop();
}

function setInputPlaceHolder()
{
	var prompt_msg = getFlag(FLAG_PROMPT);
	if (!prompt_msg)
	{
		var random = Math.floor((Math.random()*100));
		if (random<30) prompt_msg = SYSMESS_PROMPT0; else
		if ((random>=30) && (random<60)) prompt_msg = SYSMESS_PROMPT1; else
		if ((random>=60) && (random<90)) prompt_msg = SYSMESS_PROMPT2; else
		if (random>=90) prompt_msg = SYSMESS_PROMPT3;
	}
	$('.prompt').attr('placeholder', getSysMessageText(prompt_msg));
}


function divTextScrollUp()
{
   	var currentPos = $('.text').scrollTop();
	if (currentPos>=DIV_TEXT_SCROLL_STEP) $('.text').scrollTop(currentPos - DIV_TEXT_SCROLL_STEP);
}

function divTextScrollDown()
{
   	var currentPos = $('.text').scrollTop();
   	if (currentPos <= ($('.text')[0].scrollHeight - DIV_TEXT_SCROLL_STEP)) $('.text').scrollTop(currentPos + DIV_TEXT_SCROLL_STEP);
}

// Autocomplete functions

function predictiveText(currentText)
{
	if (currentText == '') return currentText;
	var wordToComplete;
	var words = currentText.split(' ');
	if (autocompleteStep!=0) wordToComplete = autocompleteBaseWord; else wordToComplete = words[words.length-1];
	words[words.length-1] = completedWord(wordToComplete);
	return words.join(' ');
}


function initAutoComplete()
{
	for (var j=0;j<vocabulary.length;j++)
		if (vocabulary[j][VOCABULARY_TYPE] == WORDTYPE_VERB)
			if (vocabulary[j][VOCABULARY_WORD].length >= 3)
				autocomplete.push(vocabulary[j][VOCABULARY_WORD].toLowerCase());
}

function addToAutoComplete(sentence)
{
	var words = sentence.split(' ');
	for (var i=0;i<words.length;i++)
	{
		var finalWord = '';
		for (var j=0;j<words[i].length;j++)
		{
			var c = words[i][j].toLowerCase();
			if ("abcdefghijklmnopqrstuvwxyzáéíóúàèìòùçäëïÖüâêîôû".indexOf(c) != -1) finalWord = finalWord + c;
			else break;
		}
	
		if (finalWord.length>=3) 
		{
			var index = autocomplete.indexOf(finalWord);
			if (index!=-1) autocomplete.splice(index,1);
			autocomplete.push(finalWord);
		}
	}
}

function completedWord(word)
{
	if (word=='') return '';
   autocompleteBaseWord  =word;
   var foundCount = 0;
   for (var i = autocomplete.length-1;i>=0; i--)
   {
   	  if (autocomplete[i].length > word.length) 
   	  	 if (autocomplete[i].indexOf(word)==0) 
   	  	 	{
   	  	 		foundCount++;
   	  	 		if (foundCount>autocompleteStep)
   	  	 		{
   	  	 			autocompleteStep++;
   	  	 			return autocomplete[i];
   	  	 		}
   	  	 	}
   }
   return word;
}


// Exacution starts here, called by the html file on document.ready()
function start()
{
	h_init(); //hook
	$('.graphics').addClass('half_graphics');
	$('.text').addClass('half_text');
	if (isBadIE()) alert(STR_BADIE)
	loadPronounSufixes();	
    setInputPlaceHolder();
    initAutoComplete();

	// Assign keypress action for input box (detect enter key press)
	$('.prompt').keypress(function(e) {  
    	if (e.which == 13) 
    	{ 
    		setInputPlaceHolder();
    		player_order = $('.prompt').val();
    		if (player_order.charAt(0) == '#')
    		{
    			addToTranscript(player_order + STR_NEWLINE);
    			clearInputWindow();
    		} 
    		else
    		if (player_order!='') 
    				orderEnteredLoop(player_order);
    	}
    });

	// Assign arrow up key press to recover last order
    $('.prompt').keyup( function(e) {
    	if (e.which  == 38) $('.prompt').val(get_prev_player_order());
    	if (e.which  == 40) $('.prompt').val(get_next_player_order());
    });


    // Assign tab keydown to complete word
    $('.prompt').keydown( function(e) {
    	if (e.which == 9) 
    		{
    			$('.prompt').val(predictiveText($('.prompt').val()));
    			e.preventDefault();
    		} else 
    		{
		    	autocompleteStep = 0;
    			autocompleteBaseWord = ''; // Any keypress other than tab resets the autocomplete feature
    		}
    });

    //Detect resize to change flag 12
    $(window).resize(function () {
     	setFlag(FLAG_PARSER_SETTINGS, bitset(getFlag(FLAG_PARSER_SETTINGS), 4));  // Set bit at flag that marks that a window resize happened 
     	clearPictureAt();
     	return;
    });


    // assign any click on block layer --> close it
    $(document).click( function(e) {
     	if (inBlock)
     	{
     		closeBlock();
     		e.preventDefault();
     		return;
     	}

     	if (inAnykey)  // return for ANYKEY, accepts mouse click
     	{
     		inAnykey = false;
     		hideAnykeyLayer();
     		waitKeyCallback();
     		e.preventDefault();
     		return;
    	}

    });

    //Make tap act as click
    //document.addEventListener('touchend', function(e) {$(document).click(); }, false);   
     
     
	$(document).keydown(function(e) {

		if (!h_keydown(e)) return; // hook

		// if waiting for END response
		if (inEND)
		{
			var endYESresponse = getSysMessageText(SYSMESS_YES);
			var endNOresponse = getSysMessageText(SYSMESS_NO);
			if (!endYESresponse.length) endYESresponse = 'Y'; // Prevent problems with empy message
			if (!endNOresponse.length) endNOresponse = 'N'; 
			var endYESresponseCode = endYESresponse.charCodeAt(0);
			var endNOresponseCode = endNOresponse.charCodeAt(0);

			if (endYESresponseCode == e.keyCode) location.reload(); 
			if (endNOresponseCode == e.keyCode)  
			{
				inEND = false;
				sfxstopall();
				$('body').hide('slow');
			}
			return;
		}


		// if waiting for QUIT response
		if (inQUIT)
		{
			var endYESresponse = getSysMessageText(SYSMESS_YES);
			var endNOresponse = getSysMessageText(SYSMESS_NO);
			if (!endYESresponse.length) endYESresponse = 'Y'; // Prevent problems with empy message
			if (!endNOresponse.length) endNOresponse = 'N'; 
			var endYESresponseCode = endYESresponse.charCodeAt(0);
			var endNOresponseCode = endNOresponse.charCodeAt(0);

			if (endNOresponseCode == e.keyCode) 
			{
	           inQUIT=false;
			   waitkey_callback_function.pop();
			   hideAnykeyLayer();
			   e.preventDefault();
			}

			if (endYESresponseCode == e.keyCode) 
			{
				inQUIT=false;
     			e.preventDefault();
				waitKeyCallback();
     			return;				
			}
		}


		if (inGetkey)  // return for getkey
     	{
     		setFlag(getkey_return_flag, e.keyCode);
     		getkey_return_flag = null;
     		inGetkey = false;
     		hideAnykeyLayer();
     		e.preventDefault();
     		waitKeyCallback();
     		return;
      	}


     	if (inAnykey)  // return for anykey
     	{
     		inAnykey = false;
     		hideAnykeyLayer();
     		e.preventDefault();
     		waitKeyCallback();
     		return;
     	}

		// if keypress and block displayed, close it
     	if (inBlock)
     		{
     			closeBlock();
     			e.preventDefault();
     			return;
     		}


     	// if ESC pressed and transcript layer visible, close it
     	if ((inTranscript) &&  (e.keyCode == 27)) 
     		{
     			$('.transcript_layer').hide();
     			inTranscript = false;
     			e.preventDefault();
     			return;
     		}

     	// Scroll text window using PgUp/PgDown
        if (e.keyCode==33)  // PgUp
        {
        	divTextScrollUp();
        	e.preventDefault();
        	return;
        }
        if (e.keyCode==34)  // PgDown
        {
        	divTextScrollDown();
        }


	});


    $(document).bind('mousewheel',function(e)
    {
  		if(e.originalEvent.wheelDelta /120 > 0) divTextScrollUp(); else divTextScrollDown();
    });


	initialize();
	descriptionLoop();
	focusInput();
	
	h_post();  //hook

    // Start interrupt process
    setTimeout(function (){
    	timer();
    },TIMER_MILLISECONDS);

}

$('document').ready(
	function ()
	{
		start();
	}
	);

// VOCABULARY

vocabulary = [];
vocabulary.push([2, "A", 6]);
vocabulary.push([11, "ABAJO", 1]);
vocabulary.push([25, "ABANDONA", 0]);
vocabulary.push([25, "ABANDONDAR", 0]);
vocabulary.push([25, "ABANDONO", 0]);
vocabulary.push([146, "ABISMO", 1]);
vocabulary.push([105, "ABRAZA", 0]);
vocabulary.push([105, "ABRAZAR", 0]);
vocabulary.push([64, "ABRE", 0]);
vocabulary.push([64, "ABRIR", 0]);
vocabulary.push([64, "ABRO", 0]);
vocabulary.push([40, "ACARICIA", 0]);
vocabulary.push([40, "ACARICIAR", 0]);
vocabulary.push([127, "ACEITAR", 0]);
vocabulary.push([131, "ACEITE", 1]);
vocabulary.push([99, "ACERCA", 0]);
vocabulary.push([99, "ACERCAR", 0]);
vocabulary.push([120, "ACERCATE", 0]);
vocabulary.push([94, "ACORDARSE", 0]);
vocabulary.push([94, "ACORDARTE", 0]);
vocabulary.push([103, "ACTIVA", 0]);
vocabulary.push([103, "ACTIVAR", 0]);
vocabulary.push([94, "ACUERDATE", 0]);
vocabulary.push([115, "AD", 0]);
vocabulary.push([106, "ADQUIERE", 0]);
vocabulary.push([106, "ADQUIERESE", 0]);
vocabulary.push([106, "ADQUIRIR", 0]);
vocabulary.push([20, "AGARR", 0]);
vocabulary.push([20, "AGARRA", 0]);
vocabulary.push([20, "AGARRAR", 0]);
vocabulary.push([20, "AGARRO", 0]);
vocabulary.push([49, "AGITA", 0]);
vocabulary.push([49, "AGITAR", 0]);
vocabulary.push([49, "AGITO", 0]);
vocabulary.push([46, "AGREDE", 0]);
vocabulary.push([46, "AGREDIR", 0]);
vocabulary.push([57, "AGUA", 1]);
vocabulary.push([77, "AGUJE", 1]);
vocabulary.push([77, "AGUJERO", 1]);
vocabulary.push([60, "AIRE", 1]);
vocabulary.push([2, "AL", 6]);
vocabulary.push([125, "ALFOMBRA", 1]);
vocabulary.push([126, "ALMEJA", 1]);
vocabulary.push([127, "ALMOHADA", 1]);
vocabulary.push([11, "ALTOS", 2]);
vocabulary.push([85, "ALUMBRA", 0]);
vocabulary.push([85, "ALUMBRAR", 0]);
vocabulary.push([85, "ALUMBRO", 0]);
vocabulary.push([90, "ANDA", 0]);
vocabulary.push([90, "ANDAR", 0]);
vocabulary.push([182, "ANIMAL", 1]);
vocabulary.push([54, "ANUDA", 0]);
vocabulary.push([54, "ANUDAR", 0]);
vocabulary.push([67, "APAGA", 0]);
vocabulary.push([67, "APAGAR", 0]);
vocabulary.push([67, "APAGO", 0]);
vocabulary.push([122, "APARTA", 0]);
vocabulary.push([122, "APARTAR", 0]);
vocabulary.push([122, "APARTO", 0]);
vocabulary.push([111, "APRETAR", 0]);
vocabulary.push([111, "APRIETA", 0]);
vocabulary.push([111, "APRIETO", 0]);
vocabulary.push([99, "APROXIMA", 0]);
vocabulary.push([99, "APROXIMAR", 0]);
vocabulary.push([58, "ARBOL", 1]);
vocabulary.push([79, "ARRANCA", 0]);
vocabulary.push([79, "ARRANCAR", 0]);
vocabulary.push([83, "ARRASTRA", 0]);
vocabulary.push([83, "ARRASTRAR", 0]);
vocabulary.push([10, "ARRIBA", 1]);
vocabulary.push([99, "ARRIMA", 0]);
vocabulary.push([99, "ARRIMAR", 0]);
vocabulary.push([32, "ARROJA", 0]);
vocabulary.push([32, "ARROJAR", 0]);
vocabulary.push([32, "ARROJARSE", 0]);
vocabulary.push([32, "ARROJASE", 0]);
vocabulary.push([32, "ARROJO", 0]);
vocabulary.push([57, "ARROY", 1]);
vocabulary.push([57, "ARROYO", 1]);
vocabulary.push([57, "ARROYUELO", 1]);
vocabulary.push([10, "ASCENDER", 0]);
vocabulary.push([10, "ASCIENDE", 0]);
vocabulary.push([46, "ASESINA", 0]);
vocabulary.push([46, "ASESINAR", 0]);
vocabulary.push([116, "ASOMA", 0]);
vocabulary.push([116, "ASOMAR", 0]);
vocabulary.push([116, "ASOMO", 0]);
vocabulary.push([117, "ASUST", 0]);
vocabulary.push([117, "ASUSTAR", 0]);
vocabulary.push([117, "ASUSTO", 0]);
vocabulary.push([54, "ATA", 0]);
vocabulary.push([46, "ATACA", 0]);
vocabulary.push([46, "ATACAR", 0]);
vocabulary.push([54, "ATAR", 0]);
vocabulary.push([20, "ATRAPA", 0]);
vocabulary.push([20, "ATRAPAR", 0]);
vocabulary.push([20, "ATRAPO", 0]);
vocabulary.push([34, "AYUDA", 0]);
vocabulary.push([60, "AZUFR", 1]);
vocabulary.push([60, "AZUFRE", 1]);
vocabulary.push([112, "BAILA", 0]);
vocabulary.push([112, "BAILAR", 0]);
vocabulary.push([11, "BAJA", 0]);
vocabulary.push([11, "BAJAR", 0]);
vocabulary.push([11, "BAJARSE", 0]);
vocabulary.push([11, "BAJARTE", 0]);
vocabulary.push([11, "BAJATE", 0]);
vocabulary.push([8, "BAJO", 6]);
vocabulary.push([50, "BALANCEA", 0]);
vocabulary.push([50, "BALANCEAR", 0]);
vocabulary.push([50, "BALANCEARS", 0]);
vocabulary.push([50, "BALANCEART", 0]);
vocabulary.push([50, "BALANCEATE", 0]);
vocabulary.push([56, "BANAR", 0]);
vocabulary.push([56, "BANATE", 0]);
vocabulary.push([56, "BANO", 0]);
vocabulary.push([128, "BARRA", 1]);
vocabulary.push([90, "BARRO", 1]);
vocabulary.push([129, "BARROTE", 1]);
vocabulary.push([129, "BARROTES", 1]);
vocabulary.push([55, "BATERIA", 1]);
vocabulary.push([55, "BATERIAS", 1]);
vocabulary.push([39, "BEBE", 0]);
vocabulary.push([39, "BEBER", 0]);
vocabulary.push([39, "BEBERSE", 0]);
vocabulary.push([39, "BEBERTE", 0]);
vocabulary.push([39, "BEBETE", 0]);
vocabulary.push([39, "BEBO", 0]);
vocabulary.push([62, "BESA", 0]);
vocabulary.push([62, "BESAME", 0]);
vocabulary.push([62, "BESAR", 0]);
vocabulary.push([130, "BICHO", 1]);
vocabulary.push([111, "BOCA", 1]);
vocabulary.push([76, "BORDE", 1]);
vocabulary.push([58, "BOSQU", 1]);
vocabulary.push([58, "BOSQUE", 1]);
vocabulary.push([101, "BOTA", 1]);
vocabulary.push([101, "BOTAS", 1]);
vocabulary.push([53, "BOTEL", 1]);
vocabulary.push([53, "BOTELLA", 1]);
vocabulary.push([107, "BRILL", 1]);
vocabulary.push([107, "BRILLO", 1]);
vocabulary.push([45, "BRINCA", 0]);
vocabulary.push([45, "BRINCAR", 0]);
vocabulary.push([45, "BRINCARSE", 0]);
vocabulary.push([45, "BRINCARTE", 0]);
vocabulary.push([45, "BRINCATE", 0]);
vocabulary.push([132, "BROTE", 1]);
vocabulary.push([118, "BUSCA", 0]);
vocabulary.push([118, "BUSCAR", 0]);
vocabulary.push([118, "BUSCO", 0]);
vocabulary.push([56, "CABAÑ", 1]);
vocabulary.push([56, "CABAÑA", 1]);
vocabulary.push([119, "CABRON", 0]);
vocabulary.push([133, "CACA", 1]);
vocabulary.push([134, "CADENA", 1]);
vocabulary.push([47, "CAGA", 0]);
vocabulary.push([47, "CAGAR", 0]);
vocabulary.push([47, "CAGARSE", 0]);
vocabulary.push([47, "CAGARTE", 0]);
vocabulary.push([47, "CAGATE", 0]);
vocabulary.push([66, "CAMIN", 1]);
vocabulary.push([90, "CAMINA", 0]);
vocabulary.push([90, "CAMINAR", 0]);
vocabulary.push([66, "CAMINO", 1]);
vocabulary.push([90, "CANDA", 1]);
vocabulary.push([90, "CANDADO", 1]);
vocabulary.push([120, "CANON", 1]);
vocabulary.push([44, "CANTA", 0]);
vocabulary.push([44, "CANTAR", 0]);
vocabulary.push([135, "CANTO", 1]);
vocabulary.push([119, "CAPULLO", 0]);
vocabulary.push([27, "CARGA", 0]);
vocabulary.push([27, "CARGAR", 0]);
vocabulary.push([29, "CARGARAM", 0]);
vocabulary.push([93, "CARTE", 1]);
vocabulary.push([93, "CARTEL", 1]);
vocabulary.push([56, "CASA", 1]);
vocabulary.push([92, "CASCA", 1]);
vocabulary.push([92, "CASCADA", 1]);
vocabulary.push([56, "CASIT", 1]);
vocabulary.push([56, "CASITA", 1]);
vocabulary.push([125, "CATIFA", 1]);
vocabulary.push([51, "CAVA", 0]);
vocabulary.push([51, "CAVAR", 0]);
vocabulary.push([56, "CAVER", 1]);
vocabulary.push([56, "CAVERNA", 1]);
vocabulary.push([20, "CAZA", 0]);
vocabulary.push([20, "CAZAR", 0]);
vocabulary.push([20, "CAZO", 0]);
vocabulary.push([19, "CERRADURA", 1]);
vocabulary.push([65, "CERRAR", 0]);
vocabulary.push([75, "CHARC", 1]);
vocabulary.push([75, "CHARCO", 1]);
vocabulary.push([75, "CHARCOS", 1]);
vocabulary.push([77, "CHILLA", 0]);
vocabulary.push([77, "CHILLAR", 0]);
vocabulary.push([63, "CHUPA", 0]);
vocabulary.push([63, "CHUPAR", 0]);
vocabulary.push([65, "CIERRA", 0]);
vocabulary.push([79, "CLARO", 1]);
vocabulary.push([65, "CLOSE", 0]);
vocabulary.push([20, "COGE", 0]);
vocabulary.push([123, "COGEL", 0]);
vocabulary.push([20, "COGER", 0]);
vocabulary.push([124, "COJE", 0]);
vocabulary.push([124, "COJER", 0]);
vocabulary.push([127, "COJIN", 1]);
vocabulary.push([20, "COJO", 0]);
vocabulary.push([65, "COLIN", 1]);
vocabulary.push([65, "COLINA", 1]);
vocabulary.push([50, "COLUMPIARS", 0]);
vocabulary.push([50, "COLUMPIART", 0]);
vocabulary.push([50, "COLUMPIATE", 0]);
vocabulary.push([38, "COME", 0]);
vocabulary.push([38, "COMER", 0]);
vocabulary.push([38, "COMERSE", 0]);
vocabulary.push([38, "COMERTE", 0]);
vocabulary.push([38, "COMETE", 0]);
vocabulary.push([38, "COMO", 0]);
vocabulary.push([106, "COMPRA", 0]);
vocabulary.push([106, "COMPRAR", 0]);
vocabulary.push([106, "COMPRARSE", 0]);
vocabulary.push([106, "COMPRARTE", 0]);
vocabulary.push([106, "COMPRASE", 0]);
vocabulary.push([106, "COMPRATE", 0]);
vocabulary.push([9, "CON", 6]);
vocabulary.push([103, "CONECTA", 0]);
vocabulary.push([103, "CONECTAR", 0]);
vocabulary.push([107, "CONSULTA", 0]);
vocabulary.push([107, "CONSULTAR", 0]);
vocabulary.push([181, "CORNISA", 1]);
vocabulary.push([90, "CORRE", 0]);
vocabulary.push([90, "CORRER", 0]);
vocabulary.push([52, "CORTA", 0]);
vocabulary.push([118, "CORTADO", 1]);
vocabulary.push([52, "CORTAR", 0]);
vocabulary.push([125, "CRUZA", 0]);
vocabulary.push([125, "CRUZAR", 0]);
vocabulary.push([125, "CRUZO", 0]);
vocabulary.push([178, "CUADLO", 1]);
vocabulary.push([178, "CUADLOS", 1]);
vocabulary.push([178, "CUADRO", 1]);
vocabulary.push([178, "CUADROS", 1]);
vocabulary.push([6, "CUIDADOSAM", 3]);
vocabulary.push([119, "CULO", 0]);
vocabulary.push([24, "D", 0]);
vocabulary.push([73, "DA", 0]);
vocabulary.push([73, "DALE", 0]);
vocabulary.push([112, "DANZA", 0]);
vocabulary.push([112, "DANZAR", 0]);
vocabulary.push([73, "DAR", 0]);
vocabulary.push([73, "DARLE", 0]);
vocabulary.push([73, "DARSE", 0]);
vocabulary.push([73, "DARTE", 0]);
vocabulary.push([3, "DE", 6]);
vocabulary.push([8, "DEBAJO", 6]);
vocabulary.push([31, "DECIR", 0]);
vocabulary.push([47, "DEFECA", 0]);
vocabulary.push([47, "DEFECAR", 0]);
vocabulary.push([47, "DEFECARSE", 0]);
vocabulary.push([47, "DEFECARTE", 0]);
vocabulary.push([47, "DEFECATE", 0]);
vocabulary.push([21, "DEJA", 0]);
vocabulary.push([21, "DEJAR", 0]);
vocabulary.push([21, "DEJO", 0]);
vocabulary.push([3, "DEL", 6]);
vocabulary.push([14, "DELANTE", 6]);
vocabulary.push([4, "DENTRO", 6]);
vocabulary.push([176, "DEPOSITO", 1]);
vocabulary.push([88, "DEPRE", 1]);
vocabulary.push([88, "DEPRESION", 1]);
vocabulary.push([104, "DESACTIVA", 0]);
vocabulary.push([104, "DESACTIVAR", 0]);
vocabulary.push([98, "DESATA", 0]);
vocabulary.push([98, "DESATAR", 0]);
vocabulary.push([61, "DESCANSA", 0]);
vocabulary.push([61, "DESCANSAR", 0]);
vocabulary.push([11, "DESCENDER", 0]);
vocabulary.push([11, "DESCIENDE", 0]);
vocabulary.push([71, "DESCO", 1]);
vocabulary.push([71, "DESCONCHAD", 1]);
vocabulary.push([104, "DESCONECTA", 0]);
vocabulary.push([24, "DESCRIBE", 0]);
vocabulary.push([24, "DESCRIBIR", 0]);
vocabulary.push([24, "DESCRIBO", 0]);
vocabulary.push([5, "DESDE", 6]);
vocabulary.push([97, "DESDOBLA", 0]);
vocabulary.push([97, "DESDOBLAR", 0]);
vocabulary.push([21, "DESENCADEN", 0]);
vocabulary.push([51, "DESENTERRA", 0]);
vocabulary.push([51, "DESENTIERR", 0]);
vocabulary.push([87, "DESPERTAR", 0]);
vocabulary.push([87, "DESPERTARS", 0]);
vocabulary.push([87, "DESPERTART", 0]);
vocabulary.push([87, "DESPIERTA", 0]);
vocabulary.push([87, "DESPIERTAT", 0]);
vocabulary.push([110, "DESPLAZA", 0]);
vocabulary.push([110, "DESPLAZAR", 0]);
vocabulary.push([69, "DESTRUIR", 0]);
vocabulary.push([69, "DESTRUYE", 0]);
vocabulary.push([22, "DESVESTIR", 0]);
vocabulary.push([22, "DESVESTIRS", 0]);
vocabulary.push([22, "DESVESTIRT", 0]);
vocabulary.push([22, "DESVISTE", 0]);
vocabulary.push([22, "DESVISTO", 0]);
vocabulary.push([7, "DETRAS", 6]);
vocabulary.push([31, "DI", 0]);
vocabulary.push([136, "DIAMANTE", 1]);
vocabulary.push([31, "DIGO", 0]);
vocabulary.push([90, "DIRIGETE", 0]);
vocabulary.push([90, "DIRIGIRSE", 0]);
vocabulary.push([90, "DIRIGIRTE", 0]);
vocabulary.push([96, "DOBLA", 0]);
vocabulary.push([96, "DOBLAR", 0]);
vocabulary.push([61, "DORMIR", 0]);
vocabulary.push([61, "DORMIRSE", 0]);
vocabulary.push([61, "DORMIRTE", 0]);
vocabulary.push([73, "DOY", 0]);
vocabulary.push([130, "DRAGON", 1]);
vocabulary.push([61, "DUERME", 0]);
vocabulary.push([6, "DURA", 2]);
vocabulary.push([6, "DURO", 2]);
vocabulary.push([4, "E", 1]);
vocabulary.push([74, "ECHA", 0]);
vocabulary.push([74, "ECHAR", 0]);
vocabulary.push([61, "ECHARSE", 0]);
vocabulary.push([61, "ECHARTE", 0]);
vocabulary.push([61, "ECHATE", 0]);
vocabulary.push([104, "ELFIT", 1]);
vocabulary.push([104, "ELFITO", 1]);
vocabulary.push([104, "ELFO", 1]);
vocabulary.push([33, "EMPUJA", 0]);
vocabulary.push([33, "EMPUJAR", 0]);
vocabulary.push([33, "EMPUJO", 0]);
vocabulary.push([4, "EN", 6]);
vocabulary.push([68, "ENANO", 1]);
vocabulary.push([66, "ENCENDER", 0]);
vocabulary.push([10, "ENCENDIDA", 2]);
vocabulary.push([66, "ENCIENDE", 0]);
vocabulary.push([66, "ENCIENDO", 0]);
vocabulary.push([16, "ENCIMA", 6]);
vocabulary.push([54, "ENLAZA", 0]);
vocabulary.push([54, "ENLAZAR", 0]);
vocabulary.push([36, "ENSEÑA", 0]);
vocabulary.push([36, "ENSEÑAR", 0]);
vocabulary.push([36, "ENSEÑARSE", 0]);
vocabulary.push([36, "ENSEÑASE", 0]);
vocabulary.push([51, "ENTERRAR", 0]);
vocabulary.push([51, "ENTIERRA", 0]);
vocabulary.push([2, "ENTONCES", 5]);
vocabulary.push([12, "ENTRA", 0]);
vocabulary.push([110, "ENTRADA", 1]);
vocabulary.push([12, "ENTRAR", 0]);
vocabulary.push([15, "ENTRE", 6]);
vocabulary.push([12, "ENTRO", 0]);
vocabulary.push([129, "ENUMERA", 0]);
vocabulary.push([129, "ENUMERAR", 0]);
vocabulary.push([47, "ERUCTA", 0]);
vocabulary.push([47, "ERUCTAR", 0]);
vocabulary.push([47, "ERUCTARSE", 0]);
vocabulary.push([47, "ERUCTARTE", 0]);
vocabulary.push([47, "ERUCTATE", 0]);
vocabulary.push([74, "ESCAL", 1]);
vocabulary.push([57, "ESCALA", 0]);
vocabulary.push([57, "ESCALAR", 0]);
vocabulary.push([74, "ESCALERA", 1]);
vocabulary.push([91, "ESCONDE", 0]);
vocabulary.push([91, "ESCONDER", 0]);
vocabulary.push([92, "ESCONDERSE", 0]);
vocabulary.push([92, "ESCONDERTE", 0]);
vocabulary.push([92, "ESCONDETE", 0]);
vocabulary.push([37, "ESCUCHA", 0]);
vocabulary.push([37, "ESCUCHAR", 0]);
vocabulary.push([37, "ESCUCHO", 0]);
vocabulary.push([171, "ESCUDO", 1]);
vocabulary.push([48, "ESCUPE", 0]);
vocabulary.push([48, "ESCUPIR", 0]);
vocabulary.push([137, "ESMERALDA", 1]);
vocabulary.push([87, "ESPABILAR", 0]);
vocabulary.push([87, "ESPABILARS", 0]);
vocabulary.push([87, "ESPABILART", 0]);
vocabulary.push([87, "ESPABILATE", 0]);
vocabulary.push([138, "ESPECIAS", 1]);
vocabulary.push([139, "ESPEJO", 1]);
vocabulary.push([43, "ESPERA", 0]);
vocabulary.push([43, "ESPERAR", 0]);
vocabulary.push([43, "ESPERO", 0]);
vocabulary.push([121, "ESPINO", 1]);
vocabulary.push([78, "ESPIRAL", 1]);
vocabulary.push([15, "ESTAS", 1]);
vocabulary.push([4, "ESTE", 1]);
vocabulary.push([125, "ESTERA", 1]);
vocabulary.push([79, "ESTIRA", 0]);
vocabulary.push([79, "ESTIRAR", 0]);
vocabulary.push([46, "ESTRANGULA", 0]);
vocabulary.push([114, "ESTRU", 1]);
vocabulary.push([114, "ESTRUCTURA", 1]);
vocabulary.push([111, "ESTRUJA", 0]);
vocabulary.push([111, "ESTRUJAR", 0]);
vocabulary.push([30, "EX", 0]);
vocabulary.push([30, "EXAMINA", 0]);
vocabulary.push([30, "EXAMINAR", 0]);
vocabulary.push([85, "EXAMINARSE", 0]);
vocabulary.push([85, "EXAMINARTE", 0]);
vocabulary.push([85, "EXAMINATE", 0]);
vocabulary.push([30, "EXAMINO", 0]);
vocabulary.push([51, "EXCAVA", 0]);
vocabulary.push([51, "EXCAVAR", 0]);
vocabulary.push([12, "EXCEPTO", 6]);
vocabulary.push([133, "EXCREMENTO", 1]);
vocabulary.push([41, "EXITS", 0]);
vocabulary.push([67, "EXTINGUE", 0]);
vocabulary.push([67, "EXTINGUIR", 0]);
vocabulary.push([75, "EXTRAE", 0]);
vocabulary.push([75, "EXTRAER", 0]);
vocabulary.push([75, "EXTRAIGO", 0]);
vocabulary.push([121, "FEE", 0]);
vocabulary.push([140, "FIE", 1]);
vocabulary.push([104, "FIGUR", 1]);
vocabulary.push([104, "FIGURA", 1]);
vocabulary.push([25, "FIN", 0]);
vocabulary.push([146, "FISURA", 1]);
vocabulary.push([119, "FOLLAR", 0]);
vocabulary.push([60, "FRAGA", 1]);
vocabulary.push([60, "FRAGANCIA", 1]);
vocabulary.push([101, "FREGAR", 0]);
vocabulary.push([101, "FRIEGA", 0]);
vocabulary.push([101, "FROTA", 0]);
vocabulary.push([101, "FROTAR", 0]);
vocabulary.push([123, "FUEGO", 1]);
vocabulary.push([13, "FUERA", 6]);
vocabulary.push([147, "GANCHO", 1]);
vocabulary.push([148, "GARFIO", 1]);
vocabulary.push([180, "GAS", 1]);
vocabulary.push([180, "GASES", 1]);
vocabulary.push([172, "GIGANTE", 1]);
vocabulary.push([119, "GILIPOLLAS", 0]);
vocabulary.push([35, "GIRA", 0]);
vocabulary.push([35, "GIRAR", 0]);
vocabulary.push([35, "GIRO", 0]);
vocabulary.push([72, "GOLPEA", 0]);
vocabulary.push([72, "GOLPEAR", 0]);
vocabulary.push([26, "GRABA", 0]);
vocabulary.push([170, "GRABADO", 1]);
vocabulary.push([26, "GRABAR", 0]);
vocabulary.push([28, "GRABARAM", 0]);
vocabulary.push([31, "GRAFI", 1]);
vocabulary.push([31, "GRAFICOS", 1]);
vocabulary.push([3, "GRANDE", 2]);
vocabulary.push([87, "GRIETA", 1]);
vocabulary.push([87, "GRIETAS", 1]);
vocabulary.push([77, "GRITA", 0]);
vocabulary.push([77, "GRITAR", 0]);
vocabulary.push([26, "GUARDA", 0]);
vocabulary.push([26, "GUARDAR", 0]);
vocabulary.push([69, "HABIT", 1]);
vocabulary.push([69, "HABITACION", 1]);
vocabulary.push([31, "HABLA", 0]);
vocabulary.push([31, "HABLAR", 0]);
vocabulary.push([31, "HABLO", 0]);
vocabulary.push([149, "HACHA", 1]);
vocabulary.push([6, "HACIA", 6]);
vocabulary.push([133, "HECES", 1]);
vocabulary.push([115, "HOLA", 1]);
vocabulary.push([42, "HUELE", 0]);
vocabulary.push([150, "HUESO", 1]);
vocabulary.push([151, "HUEVO", 1]);
vocabulary.push([90, "HUIR", 0]);
vocabulary.push([122, "HUMO", 1]);
vocabulary.push([42, "HUSMEA", 0]);
vocabulary.push([42, "HUSMEAR", 0]);
vocabulary.push([90, "HUYE", 0]);
vocabulary.push([14, "I", 1]);
vocabulary.push([119, "IDIOTA", 0]);
vocabulary.push([119, "IMBECIL", 0]);
vocabulary.push([66, "INCENDIA", 0]);
vocabulary.push([66, "INCENDIAR", 0]);
vocabulary.push([89, "INCREPA", 0]);
vocabulary.push([89, "INCREPAR", 0]);
vocabulary.push([38, "INGERIR", 0]);
vocabulary.push([38, "INGIERE", 0]);
vocabulary.push([74, "INSERTA", 0]);
vocabulary.push([74, "INSERTAR", 0]);
vocabulary.push([74, "INSERTO", 0]);
vocabulary.push([30, "INSPECCION", 0]);
vocabulary.push([89, "INSULTA", 0]);
vocabulary.push([89, "INSULTAR", 0]);
vocabulary.push([12, "INTERNARTE", 0]);
vocabulary.push([12, "INTERNATE", 0]);
vocabulary.push([74, "INTRODUCE", 0]);
vocabulary.push([12, "INTRODUCET", 0]);
vocabulary.push([74, "INTRODUCIR", 0]);
vocabulary.push([74, "INTRODUZCO", 0]);
vocabulary.push([14, "INVEN", 1]);
vocabulary.push([14, "INVENTARIO", 1]);
vocabulary.push([90, "IR", 0]);
vocabulary.push([90, "IRSE", 0]);
vocabulary.push([90, "IRTE", 0]);
vocabulary.push([152, "JARRON", 1]);
vocabulary.push([129, "JAULA", 1]);
vocabulary.push([119, "JODE", 0]);
vocabulary.push([119, "JODER", 0]);
vocabulary.push([119, "JODES", 0]);
vocabulary.push([119, "JOPUTA", 0]);
vocabulary.push([153, "JOYA", 1]);
vocabulary.push([132, "JUDIA", 1]);
vocabulary.push([99, "JUNTA", 0]);
vocabulary.push([99, "JUNTAR", 0]);
vocabulary.push([2, "LA", 4]);
vocabulary.push([175, "LAGO", 1]);
vocabulary.push([175, "LAGUNA", 1]);
vocabulary.push([63, "LAME", 0]);
vocabulary.push([63, "LAMER", 0]);
vocabulary.push([50, "LAMPA", 1]);
vocabulary.push([50, "LAMPARA", 1]);
vocabulary.push([32, "LANZA", 0]);
vocabulary.push([32, "LANZAR", 0]);
vocabulary.push([32, "LANZARSE", 0]);
vocabulary.push([32, "LANZASE", 0]);
vocabulary.push([32, "LANZO", 0]);
vocabulary.push([9, "LARGA", 2]);
vocabulary.push([9, "LARGO", 2]);
vocabulary.push([2, "LAS", 4]);
vocabulary.push([63, "LAVA", 1]);
vocabulary.push([101, "LAVAR", 0]);
vocabulary.push([88, "LAVARSE", 0]);
vocabulary.push([88, "LAVARTE", 0]);
vocabulary.push([88, "LAVATE", 0]);
vocabulary.push([2, "LE", 4]);
vocabulary.push([86, "LECHO", 1]);
vocabulary.push([109, "LEE", 0]);
vocabulary.push([109, "LEEL", 0]);
vocabulary.push([109, "LEER", 0]);
vocabulary.push([109, "LEERL", 0]);
vocabulary.push([109, "LEERSE", 0]);
vocabulary.push([109, "LEERTE", 0]);
vocabulary.push([109, "LEETE", 0]);
vocabulary.push([3, "LENTAMENTE", 3]);
vocabulary.push([109, "LEO", 0]);
vocabulary.push([2, "LES", 4]);
vocabulary.push([93, "LETRE", 1]);
vocabulary.push([93, "LETRERO", 1]);
vocabulary.push([114, "LEVANTA", 0]);
vocabulary.push([114, "LEVANTAR", 0]);
vocabulary.push([53, "LEVANTARSE", 0]);
vocabulary.push([53, "LEVANTARTE", 0]);
vocabulary.push([53, "LEVANTATE", 0]);
vocabulary.push([128, "LIBERA", 0]);
vocabulary.push([128, "LIBERAR", 0]);
vocabulary.push([128, "LIBERO", 0]);
vocabulary.push([101, "LIMPIA", 0]);
vocabulary.push([101, "LIMPIAR", 0]);
vocabulary.push([88, "LIMPIARSE", 0]);
vocabulary.push([88, "LIMPIARTE", 0]);
vocabulary.push([88, "LIMPIATE", 0]);
vocabulary.push([50, "LINTE", 1]);
vocabulary.push([50, "LINTERNA", 1]);
vocabulary.push([76, "LLAMA", 0]);
vocabulary.push([76, "LLAMAR", 0]);
vocabulary.push([109, "LLAMAS", 1]);
vocabulary.push([76, "LLAMO", 0]);
vocabulary.push([54, "LLAVE", 1]);
vocabulary.push([55, "LLENA", 0]);
vocabulary.push([55, "LLENAR", 0]);
vocabulary.push([55, "LLENO", 0]);
vocabulary.push([93, "LLORA", 0]);
vocabulary.push([93, "LLORAR", 0]);
vocabulary.push([15, "LLORAS", 1]);
vocabulary.push([93, "LLORIQUEA", 0]);
vocabulary.push([93, "LLORIQUEAR", 0]);
vocabulary.push([2, "LO", 4]);
vocabulary.push([27, "LOAD", 0]);
vocabulary.push([2, "LOS", 4]);
vocabulary.push([46, "LUCHAR", 0]);
vocabulary.push([116, "LUZ", 1]);
vocabulary.push([24, "M", 0]);
vocabulary.push([154, "MAGIA", 1]);
vocabulary.push([154, "MAGICA", 1]);
vocabulary.push([154, "MAGICO", 1]);
vocabulary.push([63, "MAGMA", 1]);
vocabulary.push([121, "MALEZA", 1]);
vocabulary.push([155, "MAQUINA", 1]);
vocabulary.push([119, "MARICA", 0]);
vocabulary.push([38, "MASTICA", 0]);
vocabulary.push([38, "MASTICAR", 0]);
vocabulary.push([46, "MATA", 0]);
vocabulary.push([46, "MATAR", 0]);
vocabulary.push([81, "MATARSE", 0]);
vocabulary.push([81, "MATARTE", 0]);
vocabulary.push([81, "MATATE", 0]);
vocabulary.push([46, "MATO", 0]);
vocabulary.push([47, "MEA", 0]);
vocabulary.push([47, "MEAR", 0]);
vocabulary.push([47, "MEARSE", 0]);
vocabulary.push([47, "MEARTE", 0]);
vocabulary.push([47, "MEATE", 0]);
vocabulary.push([49, "MENEA", 0]);
vocabulary.push([49, "MENEAR", 0]);
vocabulary.push([124, "MENSAJE", 1]);
vocabulary.push([82, "MESA", 1]);
vocabulary.push([82, "MESAS", 1]);
vocabulary.push([74, "METE", 0]);
vocabulary.push([74, "METER", 0]);
vocabulary.push([117, "MIERDA", 1]);
vocabulary.push([24, "MIRA", 0]);
vocabulary.push([24, "MIRAR", 0]);
vocabulary.push([85, "MIRARSE", 0]);
vocabulary.push([85, "MIRARTE", 0]);
vocabulary.push([85, "MIRATE", 0]);
vocabulary.push([24, "MIRO", 0]);
vocabulary.push([51, "MONED", 1]);
vocabulary.push([51, "MONEDA", 1]);
vocabulary.push([36, "MOSTRAR", 0]);
vocabulary.push([36, "MOSTRARSE", 0]);
vocabulary.push([110, "MOVER", 0]);
vocabulary.push([36, "MUESTRA", 0]);
vocabulary.push([36, "MUESTRASE", 0]);
vocabulary.push([110, "MUEVE", 0]);
vocabulary.push([110, "MUEVO", 0]);
vocabulary.push([2, "N", 1]);
vocabulary.push([56, "NADA", 0]);
vocabulary.push([56, "NADAR", 0]);
vocabulary.push([6, "NE", 1]);
vocabulary.push([156, "NIEBLA", 1]);
vocabulary.push([7, "NO", 1]);
vocabulary.push([109, "NOMBR", 1]);
vocabulary.push([109, "NOMBRE", 1]);
vocabulary.push([46, "NOQUEA", 0]);
vocabulary.push([46, "NOQUEAR", 0]);
vocabulary.push([6, "NORDESTE", 1]);
vocabulary.push([6, "NORESTE", 1]);
vocabulary.push([7, "NOROESTE", 1]);
vocabulary.push([2, "NORTE", 1]);
vocabulary.push([124, "NOTA", 1]);
vocabulary.push([5, "NUEVA", 2]);
vocabulary.push([5, "NUEVO", 2]);
vocabulary.push([5, "O", 1]);
vocabulary.push([30, "OBSERVA", 0]);
vocabulary.push([30, "OBSERVAR", 0]);
vocabulary.push([91, "OCULTA", 0]);
vocabulary.push([91, "OCULTAR", 0]);
vocabulary.push([92, "OCULTARSE", 0]);
vocabulary.push([92, "OCULTARTE", 0]);
vocabulary.push([92, "OCULTATE", 0]);
vocabulary.push([15, "OCURRE", 1]);
vocabulary.push([5, "OESTE", 1]);
vocabulary.push([73, "OFRECE", 0]);
vocabulary.push([73, "OFRECER", 0]);
vocabulary.push([73, "OFRECERSE", 0]);
vocabulary.push([73, "OFRECESE", 0]);
vocabulary.push([37, "OIGO", 0]);
vocabulary.push([37, "OIR", 0]);
vocabulary.push([42, "OLER", 0]);
vocabulary.push([42, "OLFATEA", 0]);
vocabulary.push([42, "OLFATEAR", 0]);
vocabulary.push([64, "OPEN", 0]);
vocabulary.push([59, "ORA", 0]);
vocabulary.push([59, "ORAR", 0]);
vocabulary.push([47, "ORINA", 0]);
vocabulary.push([47, "ORINAR", 0]);
vocabulary.push([47, "ORINARSE", 0]);
vocabulary.push([47, "ORINARTE", 0]);
vocabulary.push([47, "ORINATE", 0]);
vocabulary.push([157, "OSO", 1]);
vocabulary.push([126, "OSTRA", 1]);
vocabulary.push([37, "OYE", 0]);
vocabulary.push([158, "PAJARO", 1]);
vocabulary.push([63, "PALADEA", 0]);
vocabulary.push([63, "PALADEAR", 0]);
vocabulary.push([40, "PALPA", 0]);
vocabulary.push([40, "PALPAR", 0]);
vocabulary.push([10, "PARA", 6]);
vocabulary.push([70, "PARED", 1]);
vocabulary.push([70, "PAREDES", 1]);
vocabulary.push([69, "PARTE", 0]);
vocabulary.push([183, "PARTIDAS", 1]);
vocabulary.push([69, "PARTIR", 0]);
vocabulary.push([15, "PASA", 1]);
vocabulary.push([125, "PASAR", 0]);
vocabulary.push([125, "PASO", 0]);
vocabulary.push([46, "PATEA", 0]);
vocabulary.push([46, "PATEAR", 0]);
vocabulary.push([31, "PEDIR", 0]);
vocabulary.push([72, "PEGAR", 0]);
vocabulary.push([72, "PEGO", 0]);
vocabulary.push([60, "PENSAR", 0]);
vocabulary.push([159, "PEPITA", 1]);
vocabulary.push([157, "PEPOSO", 1]);
vocabulary.push([2, "PEQUEÑA", 2]);
vocabulary.push([2, "PEQUEÑO", 2]);
vocabulary.push([160, "PERLA", 1]);
vocabulary.push([60, "PESTE", 1]);
vocabulary.push([81, "PICNI", 1]);
vocabulary.push([81, "PICNIC", 1]);
vocabulary.push([31, "PIDO", 0]);
vocabulary.push([135, "PIEDRA", 1]);
vocabulary.push([60, "PIENSA", 0]);
vocabulary.push([55, "PILA", 1]);
vocabulary.push([161, "PILAR", 1]);
vocabulary.push([55, "PILAS", 1]);
vocabulary.push([162, "PIRAMIDE", 1]);
vocabulary.push([46, "PISOTEA", 0]);
vocabulary.push([46, "PISOTEAR", 0]);
vocabulary.push([132, "PLANTA", 1]);
vocabulary.push([163, "PLOVE", 1]);
vocabulary.push([163, "PLUGH", 1]);
vocabulary.push([71, "PON", 0]);
vocabulary.push([71, "PONER", 0]);
vocabulary.push([71, "PONERSE", 0]);
vocabulary.push([71, "PONERTE", 0]);
vocabulary.push([71, "PONGO", 0]);
vocabulary.push([71, "PONSE", 0]);
vocabulary.push([71, "PONTE", 0]);
vocabulary.push([11, "POR", 6]);
vocabulary.push([111, "POZO", 1]);
vocabulary.push([67, "PRECI", 1]);
vocabulary.push([67, "PRECIPICIO", 1]);
vocabulary.push([31, "PREGUNTA", 0]);
vocabulary.push([31, "PREGUNTAR", 0]);
vocabulary.push([31, "PREGUNTO", 0]);
vocabulary.push([66, "PRENDE", 0]);
vocabulary.push([66, "PRENDER", 0]);
vocabulary.push([63, "PROBAR", 0]);
vocabulary.push([63, "PRUEBA", 0]);
vocabulary.push([164, "PUENTE", 1]);
vocabulary.push([89, "PUERT", 1]);
vocabulary.push([89, "PUERTA", 1]);
vocabulary.push([101, "PULE", 0]);
vocabulary.push([101, "PULIR", 0]);
vocabulary.push([119, "PUTA", 0]);
vocabulary.push([15, "QUE", 1]);
vocabulary.push([69, "QUEBRAR", 0]);
vocabulary.push([66, "QUEMA", 0]);
vocabulary.push([66, "QUEMAR", 0]);
vocabulary.push([69, "QUIEBRA", 0]);
vocabulary.push([15, "QUIER", 1]);
vocabulary.push([15, "QUIERES", 1]);
vocabulary.push([22, "QUITA", 0]);
vocabulary.push([22, "QUITAR", 0]);
vocabulary.push([22, "QUITARSE", 0]);
vocabulary.push([22, "QUITARTE", 0]);
vocabulary.push([22, "QUITASE", 0]);
vocabulary.push([22, "QUITATE", 0]);
vocabulary.push([22, "QUITO", 0]);
vocabulary.push([15, "RABIA", 1]);
vocabulary.push([99, "RAM", 1]);
vocabulary.push([58, "RAMA", 1]);
vocabulary.push([58, "RAMAS", 1]);
vocabulary.push([29, "RAMLOAD", 0]);
vocabulary.push([66, "RAMPA", 1]);
vocabulary.push([28, "RAMSAVE", 0]);
vocabulary.push([2, "RAPIDAMENT", 3]);
vocabulary.push([102, "RASCA", 0]);
vocabulary.push([102, "RASCAR", 0]);
vocabulary.push([52, "RASGA", 0]);
vocabulary.push([52, "RASGAR", 0]);
vocabulary.push([102, "RASPA", 0]);
vocabulary.push([102, "RASPAR", 0]);
vocabulary.push([78, "REBUSCA", 0]);
vocabulary.push([78, "REBUSCAR", 0]);
vocabulary.push([165, "RECOLECTOR", 1]);
vocabulary.push([94, "RECORDAR", 0]);
vocabulary.push([94, "RECUERDA", 0]);
vocabulary.push([73, "REGALA", 0]);
vocabulary.push([73, "REGALAR", 0]);
vocabulary.push([73, "REGALARSE", 0]);
vocabulary.push([73, "REGALASE", 0]);
vocabulary.push([126, "REGAR", 0]);
vocabulary.push([78, "REGISTRA", 0]);
vocabulary.push([78, "REGISTRAR", 0]);
vocabulary.push([84, "REGISTRARS", 0]);
vocabulary.push([84, "REGISTRART", 0]);
vocabulary.push([84, "REGISTRATE", 0]);
vocabulary.push([89, "REJA", 1]);
vocabulary.push([89, "REJAS", 1]);
vocabulary.push([55, "RELLENA", 0]);
vocabulary.push([55, "RELLENAR", 0]);
vocabulary.push([49, "REMOVER", 0]);
vocabulary.push([49, "REMUEVE", 0]);
vocabulary.push([31, "RESPONDE", 0]);
vocabulary.push([31, "RESPONDER", 0]);
vocabulary.push([25, "RETIRO", 0]);
vocabulary.push([58, "RETORCER", 0]);
vocabulary.push([58, "RETUERCE", 0]);
vocabulary.push([99, "REUNE", 0]);
vocabulary.push([99, "REUNIR", 0]);
vocabulary.push([59, "REZA", 0]);
vocabulary.push([59, "REZAR", 0]);
vocabulary.push([126, "RIEGA", 0]);
vocabulary.push([126, "RIEGO", 0]);
vocabulary.push([25, "RINDO", 0]);
vocabulary.push([57, "RIO", 1]);
vocabulary.push([119, "ROCA", 1]);
vocabulary.push([119, "ROCAS", 1]);
vocabulary.push([12, "RODADO", 2]);
vocabulary.push([69, "ROMPE", 0]);
vocabulary.push([69, "ROMPER", 0]);
vocabulary.push([69, "ROMPO", 0]);
vocabulary.push([61, "RONCA", 0]);
vocabulary.push([61, "RONCAR", 0]);
vocabulary.push([35, "ROTA", 0]);
vocabulary.push([35, "ROTAR", 0]);
vocabulary.push([35, "ROTO", 0]);
vocabulary.push([5, "RUIDOSAMEN", 3]);
vocabulary.push([3, "S", 1]);
vocabulary.push([63, "SABOREA", 0]);
vocabulary.push([63, "SABOREAR", 0]);
vocabulary.push([75, "SACA", 0]);
vocabulary.push([75, "SACAR", 0]);
vocabulary.push([22, "SACARSE", 0]);
vocabulary.push([22, "SACARTE", 0]);
vocabulary.push([22, "SACASE", 0]);
vocabulary.push([22, "SACATE", 0]);
vocabulary.push([75, "SACO", 0]);
vocabulary.push([49, "SACUDE", 0]);
vocabulary.push([49, "SACUDIR", 0]);
vocabulary.push([49, "SACUDO", 0]);
vocabulary.push([13, "SAL", 0]);
vocabulary.push([13, "SALGO", 0]);
vocabulary.push([41, "SALIDAS", 0]);
vocabulary.push([13, "SALIR", 0]);
vocabulary.push([45, "SALTA", 0]);
vocabulary.push([45, "SALTAR", 0]);
vocabulary.push([45, "SALTARSE", 0]);
vocabulary.push([45, "SALTARTE", 0]);
vocabulary.push([45, "SALTATE", 0]);
vocabulary.push([45, "SALTO", 0]);
vocabulary.push([113, "SALUDA", 0]);
vocabulary.push([113, "SALUDAR", 0]);
vocabulary.push([113, "SALUDO", 0]);
vocabulary.push([26, "SALVA", 0]);
vocabulary.push([26, "SALVAR", 0]);
vocabulary.push([26, "SAVE", 0]);
vocabulary.push([8, "SE", 1]);
vocabulary.push([179, "SEDA", 1]);
vocabulary.push([179, "SEDAS", 1]);
vocabulary.push([2, "SELA", 4]);
vocabulary.push([2, "SELAS", 4]);
vocabulary.push([2, "SELO", 4]);
vocabulary.push([2, "SELOS", 4]);
vocabulary.push([132, "SEMILLA", 1]);
vocabulary.push([66, "SENDA", 1]);
vocabulary.push([23, "SENTAR", 0]);
vocabulary.push([23, "SENTARSE", 0]);
vocabulary.push([23, "SENTARTE", 0]);
vocabulary.push([100, "SEPARA", 0]);
vocabulary.push([100, "SEPARAR", 0]);
vocabulary.push([166, "SERPIENTE", 1]);
vocabulary.push([23, "SIENTATE", 0]);
vocabulary.push([23, "SIENTO", 0]);
vocabulary.push([106, "SIGUE", 1]);
vocabulary.push([106, "SIGUEME", 1]);
vocabulary.push([4, "SILENCIOSA", 3]);
vocabulary.push([83, "SILLA", 1]);
vocabulary.push([9, "SO", 1]);
vocabulary.push([67, "SOFOCA", 0]);
vocabulary.push([67, "SOFOCAR", 0]);
vocabulary.push([93, "SOLLOZA", 0]);
vocabulary.push([93, "SOLLOZAR", 0]);
vocabulary.push([21, "SOLTAR", 0]);
vocabulary.push([95, "SOPLA", 0]);
vocabulary.push([95, "SOPLAR", 0]);
vocabulary.push([95, "SOPLO", 0]);
vocabulary.push([7, "SUAVE", 2]);
vocabulary.push([10, "SUBE", 0]);
vocabulary.push([10, "SUBETE", 0]);
vocabulary.push([10, "SUBIR", 0]);
vocabulary.push([10, "SUBIRSE", 0]);
vocabulary.push([10, "SUBIRTE", 0]);
vocabulary.push([10, "SUBO", 0]);
vocabulary.push([15, "SUCED", 1]);
vocabulary.push([15, "SUCEDE", 1]);
vocabulary.push([15, "SUCEDIDO", 1]);
vocabulary.push([8, "SUDESTE", 1]);
vocabulary.push([72, "SUELO", 1]);
vocabulary.push([21, "SUELTA", 0]);
vocabulary.push([21, "SUELTO", 0]);
vocabulary.push([81, "SUICIDARSE", 0]);
vocabulary.push([81, "SUICIDARTE", 0]);
vocabulary.push([81, "SUICIDATE", 0]);
vocabulary.push([3, "SUR", 1]);
vocabulary.push([8, "SURESTE", 1]);
vocabulary.push([9, "SUROESTE", 1]);
vocabulary.push([173, "TAPICES", 1]);
vocabulary.push([173, "TAPIZ", 1]);
vocabulary.push([124, "TEXTO", 1]);
vocabulary.push([36, "TIEMP", 1]);
vocabulary.push([36, "TIEMPO", 1]);
vocabulary.push([32, "TIRA", 0]);
vocabulary.push([32, "TIRAR", 0]);
vocabulary.push([32, "TIRARSE", 0]);
vocabulary.push([32, "TIRASE", 0]);
vocabulary.push([32, "TIRO", 0]);
vocabulary.push([128, "TITANIO", 1]);
vocabulary.push([40, "TOCA", 0]);
vocabulary.push([40, "TOCAR", 0]);
vocabulary.push([40, "TOCO", 0]);
vocabulary.push([20, "TODO", 1]);
vocabulary.push([20, "TOMA", 0]);
vocabulary.push([20, "TOMAR", 0]);
vocabulary.push([20, "TOMO", 0]);
vocabulary.push([58, "TORCER", 0]);
vocabulary.push([78, "TORRE", 1]);
vocabulary.push([52, "TORTI", 1]);
vocabulary.push([52, "TORTILLA", 1]);
vocabulary.push([46, "TORTURA", 0]);
vocabulary.push([46, "TORTURAR", 0]);
vocabulary.push([38, "TRAGA", 0]);
vocabulary.push([38, "TRAGAR", 0]);
vocabulary.push([38, "TRAGARSE", 0]);
vocabulary.push([38, "TRAGARTE", 0]);
vocabulary.push([38, "TRAGATE", 0]);
vocabulary.push([6, "TRANQUILAM", 3]);
vocabulary.push([68, "TRANSCRIP", 0]);
vocabulary.push([68, "TRANSCRIPC", 0]);
vocabulary.push([68, "TRANSCRIPT", 0]);
vocabulary.push([7, "TRAS", 6]);
vocabulary.push([57, "TREPA", 0]);
vocabulary.push([57, "TREPAR", 0]);
vocabulary.push([57, "TREPO", 0]);
vocabulary.push([167, "TRIDENTE", 1]);
vocabulary.push([174, "TROFEO", 1]);
vocabulary.push([174, "TROFEOS", 1]);
vocabulary.push([169, "TROLL", 1]);
vocabulary.push([132, "TRONCO", 1]);
vocabulary.push([177, "TRONO", 1]);
vocabulary.push([58, "TUERCE", 0]);
vocabulary.push([99, "UNE", 0]);
vocabulary.push([99, "UNIR", 0]);
vocabulary.push([127, "UNTAR", 0]);
vocabulary.push([80, "USA", 0]);
vocabulary.push([80, "USAL", 0]);
vocabulary.push([80, "USAR", 0]);
vocabulary.push([80, "USARL", 0]);
vocabulary.push([80, "UTILIZA", 0]);
vocabulary.push([80, "UTILIZAR", 0]);
vocabulary.push([86, "VACIA", 0]);
vocabulary.push([86, "VACIAR", 0]);
vocabulary.push([86, "VACIO", 0]);
vocabulary.push([80, "VALLE", 1]);
vocabulary.push([156, "VAPOR", 1]);
vocabulary.push([168, "VARITA", 1]);
vocabulary.push([90, "VE", 0]);
vocabulary.push([120, "VEN", 0]);
vocabulary.push([120, "VENIR", 0]);
vocabulary.push([73, "VENTA", 1]);
vocabulary.push([145, "VENTANA", 1]);
vocabulary.push([120, "VENTE", 0]);
vocabulary.push([89, "VERJA", 1]);
vocabulary.push([89, "VERJAS", 1]);
vocabulary.push([70, "VERSION", 0]);
vocabulary.push([86, "VERTER", 0]);
vocabulary.push([86, "VERTIR", 0]);
vocabulary.push([71, "VESTIR", 0]);
vocabulary.push([71, "VESTIRSE", 0]);
vocabulary.push([71, "VESTIRTE", 0]);
vocabulary.push([90, "VETE", 0]);
vocabulary.push([4, "VIEJA", 2]);
vocabulary.push([4, "VIEJO", 2]);
vocabulary.push([106, "VIENES", 1]);
vocabulary.push([86, "VIERTE", 0]);
vocabulary.push([71, "VISTE", 0]);
vocabulary.push([71, "VISTESE", 0]);
vocabulary.push([56, "VIVES", 1]);
vocabulary.push([62, "VOLCA", 1]);
vocabulary.push([62, "VOLCAN", 1]);
vocabulary.push([35, "VOLTEA", 0]);
vocabulary.push([35, "VOLTEAR", 0]);
vocabulary.push([47, "VOMITA", 0]);
vocabulary.push([47, "VOMITAR", 0]);
vocabulary.push([47, "VOMITARSE", 0]);
vocabulary.push([47, "VOMITARTE", 0]);
vocabulary.push([47, "VOMITATE", 0]);
vocabulary.push([41, "X", 0]);
vocabulary.push([82, "XYZZY", 0]);
vocabulary.push([2, "Y", 5]);
vocabulary.push([101, "ZAPAT", 1]);
vocabulary.push([101, "ZAPATO", 1]);
vocabulary.push([101, "ZAPATOS", 1]);



// SYS MESSAGES

total_sysmessages=68;

sysmessages = [];

sysmessages[0] = "No puedes ver nada, está muy oscuro.\n";
sysmessages[1] = "Puedes ver: ";
sysmessages[2] = "¿Qué quieres hacer ahora?      ";
sysmessages[3] = "¿Cuál es tu siguiente orden?";
sysmessages[4] = "¿Qué vas a hacer ahora?       ";
sysmessages[5] = "Teclea tus órdenes";
sysmessages[6] = "¿Cómo? Por favor, prueba con otras palabras.\n";
sysmessages[7] = "No puedes ir en esa dirección.\n";
sysmessages[8] = "¿Perdón?";
sysmessages[9] = "Llevas: ";
sysmessages[10] = " (puesto/a)";
sysmessages[11] = "ningún objeto.\n";
sysmessages[12] = "¿Seguro? \n";
sysmessages[13] = "¿Juegas de nuevo? \n";
sysmessages[14] = "Adiós...";
sysmessages[15] = "Perfecto.\n";
sysmessages[16] = "Pulsa una tecla para continuar.\n";
sysmessages[17] = "Has realizado ";
sysmessages[18] = " turno";
sysmessages[19] = "s";
sysmessages[20] = ".\n";
sysmessages[21] = "Tu puntuación es del ";
sysmessages[22] = "%.\n";
sysmessages[23] = "No llevas puesto eso.\n";
sysmessages[24] = "No puedes, ya llevas eso puesto.\n";
sysmessages[25] = "Ya tienes {OREF}.\n";
sysmessages[26] = "No ves eso por aquí.\n";
sysmessages[27] = "No puedes llevar más cosas.\n";
sysmessages[28] = "No tienes eso.\n";
sysmessages[29] = "Pero si ya llevas puesto {OREF}.\n";
sysmessages[30] = "S";
sysmessages[31] = "N";
sysmessages[32] = "Más...";
sysmessages[33] = "> ";
sysmessages[34] = "";
sysmessages[35] = "El tiempo pasa...\n";
sysmessages[36] = "Coges {OREF}.\n";
sysmessages[37] = "Te pones {OREF}.\n";
sysmessages[38] = "Te quitas {OREF}.\n";
sysmessages[39] = "Dejas {OREF}.\n";
sysmessages[40] = "No puedes ponerte {OREF}.\n";
sysmessages[41] = "No puedes quitarte {OREF}.\n";
sysmessages[42] = "No puedes quitarte {OREF}.  ¡Tienes demasiadas cosas en las manos!\n";
sysmessages[43] = "Desgraciadamente {OREF} pesa demasiado.\n";
sysmessages[44] = "Pones {OREF} en ";
sysmessages[45] = "Me temo que {OREF} no está en ";
sysmessages[46] = ", ";
sysmessages[47] = " y¬";
sysmessages[48] = ".\n";
sysmessages[49] = "No tienes {OREF}.\n";
sysmessages[50] = "No llevas puesto {OREF}.\n";
sysmessages[51] = ".\n";
sysmessages[52] = "Eso no está en ";
sysmessages[53] = "ningún objeto\n";
sysmessages[54] = "Fichero no encontrado.\n";
sysmessages[55] = "Fichero corrupto.\n";
sysmessages[56] = "Error de lectura/escritura. Fichero no grabado.\n";
sysmessages[57] = "Directorio lleno.\n";
sysmessages[58] = "Introduce el nombre con el que grabaste la partida.";
sysmessages[59] = "No se encontró ninguna partida grabada con ese nombre.\n Confirma que el nombre es correcto y que realizaste dicha partida en este mismo dispositivo.\n Escribe «PARTIDAS» para una lista de las partidas guardadas.\n";
sysmessages[60] = "Introduce el nombre con el que grabar la partida.";
sysmessages[61] = "";
sysmessages[62] = "¿Perdón? Por favor, prueba con otras palabras.\n";
sysmessages[63] = "Aquí ";
sysmessages[64] = "está ";
sysmessages[65] = "están ";
sysmessages[66] = "dentro hay ";
sysmessages[67] = "encima hay ";

// USER MESSAGES

total_messages=94;

messages = [];

messages[0] = "";
messages[1] = "";
messages[2] = "";
messages[3] = "¡Qué horror, el palizas otra vez! ¡Prefiero la muerte!";
messages[4] = "";
messages[5] = "Algo que has hecho te impide completar la aventura.";
messages[6] = "";
messages[7] = "";
messages[8] = "¡Busca luz!";
messages[9] = "¡Deja objetos como pistas!";
messages[10] = "¿Qué necesita un candado?";
messages[11] = "Sé lógico y hazte un mapa.";
messages[12] = "";
messages[13] = "Pone: «CUIDADO CON TUS OBJETOS».";
messages[14] = "";
messages[15] = "Está encendida.";
messages[16] = "Está apagada.";
messages[17] = "Esta antigua moneda perteneció a los Elfos.";
messages[18] = "?";
messages[19] = "Dejaría satisfecho hasta a un oso.";
messages[20] = "";
messages[21] = "Lleva la insignia del Rey Elfo.";
messages[22] = "Es de la marca «SEMPER LUX» (aunque no deberías creértelo).";
messages[26] = "No estás en clase de botánica.";
messages[27] = "Un bujero quecha humo y pedorreta.";
messages[28] = "";
messages[29] = "";
messages[30] = "Tiene una fuerte reja.";
messages[31] = "Baja p'abajo.";
messages[32] = "Sube p'arriba.\n";
messages[34] = "De hechura rústica y buena madera. Muy usada por los enanos del bosque.";
messages[35] = "";
messages[36] = "¡Tate pa la faena!";
messages[37] = "";
messages[38] = "Es muy fuerte. Impide la entrada.";
messages[39] = "";
messages[40] = "";
messages[41] = "Con un gracioso saltito emprendes el vuelo.";
messages[42] = "Tremendo batacazo en el fondo del abismo.";
messages[43] = "Pareces estar un poco muerto.\n\n";
messages[47] = "      ¡¡¡FELICIDADES!!!";
messages[48] = "   CLAVE DE ACCESO:  TIMACUS ";
messages[49] = "   CLAVE DE ACCESO:  WHALKIRA ";
messages[50] = "   CLAVE DE ACCESO:  BATRACCIO ";
messages[51] = "   CLAVE DE ACCESO:  GUACHARO ";
messages[52] = "";
messages[53] = " Hay una fuerte reja metálica";
messages[54] = ". Detrás de ella se ve una misteriosa entrada a las profundidades.";
messages[55] = " cerrada con un candado";
messages[56] = " con un candado abierto";
messages[58] = "Al quitarlo... ¡desaparece de tus manos!";
messages[63] = "Es un elfo que llora acurrucado junto a un árbol.";
messages[64] = "No hay suficiente luz.";
messages[65] = "Y desesperado Don Enano se lanza al volcán. ¡Descanse en paz!";
messages[71] = " El sol hace brillar algo en una rama.";
messages[72] = "¡Parece una llave!";
messages[77] = "\1<div style='padding:0 1%; margin: 0; font-size:.7em; text-align:center'><span style='font-size:1.3em; font-weight:bold; color:#ff3333'>AVENTURA ORIGINAL</span>\n <b>La búsqueda</b> y <b>el encuentro</b>\n\n\n\n <b>Dirección:</b> Andrés Samudio\n <b>Programación:</b> Manuel González\n <b>Gráficos:</b> Carlos Marqués\n\n (c) 1989 Aventuras AD\n\n\n\n <b>Adaptación a ngPAWS:</b> CiberSheep\n <b>Soporte y betatesting:</b> Uto, I. Cabanillas, Baltasar el Arquero</div>\n\n\n";
messages[96] = "¡Ya no tiene solución!";
messages[98] = "";
messages[99] = "\1<div style='padding:0 1%; margin: 0; font-size:.7em; text-align:center'>********\n <span style='font-size:1.5em; font-weight:bold; color:#ff3333'>¡LA GRAN CAVERNA!</span>\n   Origen de leyendas sobre fabulosas      <b>riquezas</b> y terribles <b>peligros.</b>\n\n <span style='font-size:1.2em; font-weight:bold; color:#ffcccc'>¿MITO O REALIDAD?</span>\n Siguiendo el borroso mapa que te dio un extraño (por cierto, muy rico) a quien  salvaste de las garras de unos <i>trolls</i>    has llegado a este apacible valle.  \n\n     Presientes que estás muy cerca,    pero de repente el viejo mapa se    <b>deshace</b> en tus manos mientras una            calida brisa te susurra:\n    «Solo los valientes que dominen     la <b>magia</b> merecerán mis tesoros»\n\n <span style='font-size:1.2em; font-weight:bold; color:#ffcccc'>¡SUERTE!</span>\n ******</div>";
messages[100] = "";
messages[101] = "No hay ninguna salida";
messages[102] = "Sur";
messages[103] = "Este";
messages[104] = "Oeste";
messages[105] = "Noreste";
messages[106] = "Noroeste";
messages[107] = "Sureste";
messages[108] = "Suroeste";
messages[109] = "Subir";
messages[110] = "Bajar";
messages[111] = "Entrar";
messages[112] = "Salir";
messages[113] = "Norte";
messages[114] = "Las salidas posibles son ";
messages[116] = ", ";
messages[117] = " y ";
messages[118] = "La única salida es \n\n";
messages[1000] = "Salidas visibles: ";
messages[1001] = "No hay salidas visibles.";
messages[1002] = "";
messages[1003] = "";
messages[1004] = "al {ACTION|norte|norte}";
messages[1005] = "al {ACTION|sur|sur}";
messages[1006] = "al {ACTION|este|este}";
messages[1007] = "al {ACTION|oeste|oeste}";
messages[1008] = "al {ACTION|noreste|noreste}";
messages[1009] = "al {ACTION|noroeste|noroeste}";
messages[1010] = "al {ACTION|sureste|sureste}";
messages[1011] = "al {ACTION|suroeste|suroeste}";
messages[1012] = "{ACTION|arriba|arriba}";
messages[1013] = "{ACTION|abajo|abajo}";
messages[1014] = "{ACTION|dentro|dentro}";
messages[1015] = "{ACTION|fuera|fuera}";

// WRITE MESSAGES

total_writemessages=1051;

writemessages = [];

writemessages[0] = "RESPONSE_START";
writemessages[1] = "No ves nada.";
writemessages[2] = "No hay nada por aquí.";
writemessages[3] = "No llevas nada.";
writemessages[4] = "¿No sabes leer? ¡Un enanito desaparece con lo dejado!";
writemessages[5] = "No ves eso por aquí.";
writemessages[6] = "No ves eso por aquí.";
writemessages[7] = "No hay nada ahí.";
writemessages[8] = "No hay nada ahí.";
writemessages[9] = "No ves eso por aquí.";
writemessages[10] = "No ves eso por aquí.";
writemessages[11] = "No llevas nada.";
writemessages[12] = "No llevas nada.";
writemessages[13] = "No llevas nada.";
writemessages[14] = "No llevas nada";
writemessages[15] = "No llevas nada puesto.";
writemessages[16] = "No llevas nada para ponerte.";
writemessages[17] = "No llevas nada.";
writemessages[18] = "¡No puedes tirarlo todo a la vez!";
writemessages[19] = "Por favor, intenta especificar un poco más.";
writemessages[20] = "RESPONSE_USER";
writemessages[21] = "También participaron: Eva Samitier, Juan Darder, Juanjo Muñoz y Tim Gilberts (some bugs).";
writemessages[22] = " Hay una fuerte reja metálica";
writemessages[23] = " cerrada con un candado";
writemessages[24] = ".";
writemessages[25] = " Hay una fuerte reja metálica";
writemessages[26] = " con un candado abierto";
writemessages[27] = ".";
writemessages[28] = " Hay una fuerte reja metálica";
writemessages[29] = ".";
writemessages[30] = "Para entrar y sobrevivir en las profundidades necesitas más cosas.";
writemessages[31] = "¡Algo te impide pasar!";
writemessages[32] = "\1<div style='padding:0; text-align:center; color:#ff3333'>¡Bien hecho!</div>";
writemessages[33] = "\1<div style='text-align:center'>Todos los habitantes del valle han venido a admirar al nuevo: MAESTRO AVENTURERO</div>";
writemessages[34] = "\1<div style='text-align:center'>A tus pies aparecen todos los tesoros conquistados.</div>";
writemessages[35] = "\1<div style='text-align:center'>El equipo A.D. te invita a participar en su próxima aventura.</div>";
writemessages[36] = "\1<div style='text-align:center'>{RESTART|¿Juegas de nuevo?}</div>";
writemessages[37] = "¡Algo te impide pasar!";
writemessages[38] = "¡Algo te impide pasar!";
writemessages[39] = "El reptil te marca sus colmillos en el cuello, y se marcha.";
writemessages[40] = "¡Hala! con tus patazas has roto la tierna plantita.";
writemessages[41] = "La puerta está cerrada.";
writemessages[42] = "Uff. Empujas la puerta pero no cede.";
writemessages[43] = "No puedes entrar. La jaula está cerrada.";
writemessages[44] = "El reptil te marca sus colmillos en el cuello, y se marcha.";
writemessages[45] = "¡Algo te impide pasar!";
writemessages[46] = "Oyes el susurro del viento, el canto de los pájaros y el murmullo del agua.";
writemessages[47] = "El eco susurra: RECOLECTOR";
writemessages[48] = "Si en vez de escuchar tanto, teclearas más, oirías: «Clik, Clak, Clok».";
writemessages[49] = "El reptil te marca sus colmillos en el cuello y se marcha.";
writemessages[50] = "El veneno te ha matado.";
writemessages[51] = "Asustado por tu valentía, el cobardica vuelve llorando a su casa en el Hobbit.";
writemessages[52] = "¡El enano se las sabe todas!";
writemessages[53] = "El invencible Troll Chulangas te da una patada.";
writemessages[54] = "¿Te parece forma de solucionar las cosas?";
writemessages[55] = "¡El enano ha caído al volcán!";
writemessages[56] = "¡Asesino nanicida!";
writemessages[57] = "Para lo viejo que parece, se ha abierto sin ningún problema.";
writemessages[58] = "Estiras de él pero está cerrado. No se abre.";
writemessages[59] = "Para ello, abres el candado que ";
writemessages[60] = "con lo viejo que parece, se ha abierto sin ningún problema.";
writemessages[61] = "Mmm... no puedes porque tiene el candado puesto.";
writemessages[62] = "Empujas y empujas sin conseguir nada. En muy resistente y todavía está el candado puesto.";
writemessages[63] = "Pero si ya está abierto.";
writemessages[64] = "No te va a servir de nada llevártelo así que lo dejas donde está.";
writemessages[65] = "Te arrastras como una cucaracha por todo el suelo";
writemessages[66] = " pero de monedas nada, ¡listillo!";
writemessages[67] = "La llave está demasiado lejos.";
writemessages[68] = "Al quitarlo... ¡desaparece de tus manos!";
writemessages[69] = "Lo tienes en la mano, sigue en la reja. Cerrado. ¿Y ahora qué?";
writemessages[70] = "Te haces daño en la mano. ¡A quién se le ocurre!";
writemessages[71] = "¿Qué candado? Vas y golpeas la pared. La violencia no es la solución.";
writemessages[72] = "No consigues más que hacerte daño. Cabeza de chorlito.";
writemessages[73] = "Dejas {OREF}";
writemessages[74] = "¿No sabes leer? ¡Un enanito desaparece con lo dejado!";
writemessages[75] = "¡Anda, {OREF} ha caído al suelo!";
writemessages[76] = "¡¡Argggh!! ¡Te has ahogado!";
writemessages[77] = "¡¡Arggg!! ¡Te has ahogado!";
writemessages[78] = "No tienes la linterna.";
writemessages[79] = "No tiene pilas.";
writemessages[80] = "La linterna va mal. La luz parpadea.";
writemessages[81] = "Ya está encendida.";
writemessages[82] = "Enciendes la linterna que ilumina el lugar.";
writemessages[83] = "Enciendes la linterna iluminándolo todo.";
writemessages[84] = "Enciendes la linterna.";
writemessages[85] = "No tienes la linterna.";
writemessages[86] = "Ya está apagada.";
writemessages[87] = "Apagas la linterna y la oscuridad se apodera del lugar.";
writemessages[88] = "Apagas la linterna. Todo queda a oscuras.";
writemessages[89] = "Apagas la linterna.";
writemessages[90] = "Como quieras pero yo no estaría mucho tiempo sin hacer nada aquí dentro.";
writemessages[91] = "¿Intentas leer el letrero?";
writemessages[92] = "No puedes leer eso que dices.";
writemessages[93] = "Por favor, especifica qué quieres leer.";
writemessages[94] = "No le ves sentido a leer eso.";
writemessages[95] = "No puedes leer {OREF}.";
writemessages[96] = "No ves {OREF} por aquí.";
writemessages[97] = "Curioso, la peste a azufre parece venir del este.";
writemessages[98] = "Uff, te estás empezando a marear del pestazo a azufre. Parece que hacia el este es más fuerte.";
writemessages[99] = "El olor a azufre se intensifica cada vez más hacie el este.";
writemessages[100] = "Uff, te estás empezando a marear del pestazo a azufre. Parece que hacia el este es más fuerte.";
writemessages[101] = "Ya está vacía.";
writemessages[102] = "Derramas el aceite que deja una mancha en el suelo.";
writemessages[103] = "No puedes hacerlo.";
writemessages[104] = "Derramas el agua que hay en ella hasta que no queda nada.";
writemessages[105] = "Está llena de aceite y no cabe nada más.";
writemessages[106] = "No cabe más agua ya.";
writemessages[107] = "Casi sin esfuerzo, llenas la botella de agua.";
writemessages[108] = "No te resulta demasiado difícil llenarla de agua.";
writemessages[109] = "Genial. Ya está llena de agua.";
writemessages[110] = "Mmm... a ver... listo. Botella llena.";
writemessages[111] = "Llenas la botella de agua espectacularmente cristalina.";
writemessages[112] = "Llenas la botella. Crees que irá bien.";
writemessages[113] = "Botella llena. Perfecto.";
writemessages[114] = "No sin cierta dificultad, llenas la botella de aceite, quedando un poco pringosa.";
writemessages[115] = "De qué quieres llenarla. No hay nada por aquí.";
writemessages[116] = "¡La tortila está riquísima!";
writemessages[117] = "Pero qué sed tenías.";
writemessages[118] = "Ya te estás agarrando a las ramas. Si no, ya hubieras caído.";
writemessages[119] = "¡La llave ha caído al suelo!";
writemessages[120] = "La rama se mueve y se mueve.";
writemessages[121] = "¡CHUMM! ¡PUM! ¡BROOM! ¡PIFSSSS!";
writemessages[122] = "¡¡¡ Pilas recargadas !!!";
writemessages[123] = "¡CHUMM! ¡PUM! ¡BROOM! ¡PIFSSSS!";
writemessages[124] = "¡¡¡ Pilas recargadas !!!";
writemessages[125] = "No tienes la linterna... ¿Dónde está?";
writemessages[126] = "No tienes la pila, así que...";
writemessages[127] = "La linterna ya tiene las pilas puestas.";
writemessages[128] = "Vale, linterna lista.";
writemessages[129] = "No tienes la linterna.";
writemessages[130] = "La linterna no tiene las pilas puestas.";
writemessages[131] = "Ya no puedes llevar más trastos.";
writemessages[132] = "Ya no puedes llevar más trastos.";
writemessages[133] = "Sacas la pila y la linterna se apaga.";
writemessages[134] = "Al quitarlo... ¡desaparece de tus manos!";
writemessages[135] = "Te sientas... y te levantas para seguir jugando. ";
writemessages[136] = "Ya te lo advertí...";
writemessages[137] = "Te aconsejo que dejes de insultar.";
writemessages[138] = "Ya te lo advertí...";
writemessages[139] = "Te aconsejo que dejes de decir groserías.";
writemessages[140] = "Has jugado ";
writemessages[141] = " turnos.";
writemessages[142] = "{RESTART|Volver a jugar}";
writemessages[143] = "El enano está muy cabreado para finuras y con malos modales intenta deshacerse de ti.";
writemessages[144] = "Te observa tímidamente y esboza una sonrisa.";
writemessages[145] = "Te observa por unos instantes y esboza una sonrisa.";
writemessages[146] = "Muy ofendido, Elfito, se las pira llorando.";
writemessages[147] = "Las botas son pequeñas para tus pies.";
writemessages[148] = "previous_noun=50";
writemessages[149] = "Don Enano se calza, y agradecido, te deja una linterna. Ves como se marcha dando salitos de alegría.";
writemessages[150] = "Pues ya lo sabes.";
writemessages[151] = "El jarrón se ha roto en el suelo.";
writemessages[152] = "... tras un corto descansito sigues con lo tuyo.";
writemessages[153] = "¡Algo te impide pasar!";
writemessages[154] = "¡Si el peaje no quieres pagar, conmigo tendrás que luchar!";
writemessages[155] = "El pajarito se escapa, cantando alegremente.";
writemessages[156] = "El pajarito se escapa, cantando alegremente. ";
writemessages[157] = "Y al ver a la serpiente la ataca en los ojos y la hace huir despavorida.";
writemessages[158] = "El veneno te ha matado.";
writemessages[159] = "Abres la jaula que ahora tiene la reja abierta.";
writemessages[160] = "Necesitarás algo, ¿no?";
writemessages[161] = "No hace falta. ";
writemessages[162] = "Poco a poco las valvas del molusco se abren y con asombro descubres que... ¡es una ostra! Dentro hay una preciosa perla que por tu imprudencia cae y rueda por el pasillo. La ostra se cierra.";
writemessages[163] = "Está cerrada para siempre. No hay más que hacer aquí.";
writemessages[164] = "¡Es demasiado fuerte para ti, forastero!";
writemessages[165] = "Abres la puerta con facilidad.";
writemessages[166] = "Lo intentas pero no cede. Mmm... ¡cuánto óxido!";
writemessages[167] = "Pero si ya está abierta.";
writemessages[168] = "¡Algo te impide pasar!";
writemessages[169] = "Ya está cerrada.";
writemessages[170] = "Ni cerrar la puerta ni abrirla podrías con el óxido que tiene.";
writemessages[171] = "Cierras la puerta fácilmente.";
writemessages[172] = "No hace falta. ";
writemessages[173] = "Te pasarías horas probando de hacer algo útil pero tal vez no sea el sitio indicado.";
writemessages[174] = "No ves la pila por aquí.";
writemessages[175] = "La niebla te lo impide.";
writemessages[176] = "¡Está en el suelo!";
writemessages[177] = "El reptil te marca sus colmillos en el cuello y se marcha.";
writemessages[178] = "El jarrón se ha roto en el suelo.";
writemessages[179] = "Tienes al pájaro enjaulado.";
writemessages[180] = "El pajarito se escapa, cantando alegremente.";
writemessages[181] = "Las resecas semillas queman tu mano y caen de nuevo a tierra.";
writemessages[182] = "La niebla te lo impide.";
writemessages[183] = "Es demasiado pesada. Es como si fuera de un gigante.";
writemessages[184] = "No ves el hacha de gigante por aquí.";
writemessages[185] = "Es demasiado pesado, tanto como el hacha. Es como si fuera de un gigante.";
writemessages[186] = "Coger se escribe con ge.";
writemessages[187] = "No sel puñetelo.";
writemessages[188] = "El jarrón se ha roto en el suelo.";
writemessages[189] = "Lo liberas de la pared y lo llevas de la cadena.";
writemessages[190] = "Recibes de lleno el ataque del enorme oso Peposo.";
writemessages[191] = "Al verse libre, Peposo escapa dejando a tus pies la cadena.";
writemessages[192] = " Se yergue sobre sus patas traseras y agitando sus garras amenazadoramente, abre su enorme boca y deja escapar un cavernoso rugido. Al verlo suelto, el Troll Chulangas sale corriendo.";
writemessages[193] = "Al verse libre, Peposo escapa dejando a tus pies la cadena.";
writemessages[194] = "No ves a Peposo por aquí. Seguramente no querrá acercarse a un humano ahora que es libre.";
writemessages[195] = "No le encuentras nada de especial.";
writemessages[196] = "¡¡Arggg!! ¡Te has ahogado con el hueso!";
writemessages[197] = "Bebes hasta saciar tu sed.";
writemessages[198] = "Aunque da un poco de asco, bebes saciando la sed.";
writemessages[199] = "Es excelente. No puede ser un agua más pura.";
writemessages[200] = "La puerta queda bien aceitada.";
writemessages[201] = "No ves aceite por aquí.";
writemessages[202] = "No le hace falta más aceite. Con el que tiene será suficiente.";
writemessages[203] = "No sabrías cómo.";
writemessages[204] = "¿Cómo la vas a apartar?";
writemessages[205] = "Soplas y parece que funciona. ";
writemessages[206] = "La niebla se disipa momentánemente, puedes ver todo un poco mejor... y lentamente vuelve a envolverlo todo.";
writemessages[207] = "El aceite, como es lógico, las deja bien fritas.";
writemessages[208] = "Ya me dirás cómo quieres hacerlo sin la botella.";
writemessages[209] = "Ya me dirás cómo quieres hacerlo sin agua.";
writemessages[210] = "Absorbiendo ávidamente el precioso líquido las semillas se hinchan, se abren y de ellas nace una tierna plantita de judías.";
writemessages[211] = "Al recibir más agua, el tronco se endurece y crece fuerte hacia lo alto hasta salir por el agujero superior.";
writemessages[212] = "Nadie te hace caso. ";
writemessages[213] = "La botella se ha roto en el suelo.";
writemessages[214] = "La botella se ha roto en el suelo dejando una fea mancha de aceite.";
writemessages[215] = "No la llevas encima.";
writemessages[216] = "¡Has fallado! El hacha cae al suelo.";
writemessages[217] = "¡Le has cortado la cabeza! ¡Maluva se desintegra junto con su hacha!";
writemessages[218] = "No la llevas encima.";
writemessages[219] = "Al agua que va la linte... ¡Espera un momento!";
writemessages[220] = "Al agua que va la linte... ¡Espera un momento!";
writemessages[221] = "Tiras {OREF} al agua y ves como se hunde... lentamente...";
writemessages[222] = "Tiras {OREF} al agua. Y allá va, hundiéndose. ¿Pero qué has hecho?";
writemessages[223] = "¡Te bloquea un fornido Troll que ruge: «un tesoro has de dar para poder pasar»!";
writemessages[224] = "Por el peso de Peposo, el puente se rompe y los dos al foso.";
writemessages[225] = "¡Boing! ¡Boong!";
writemessages[226] = "Nunca te lo habías pasado bien haciendo el tonto. Venga, déjate ya de perder el tiempo.";
writemessages[227] = "El huevo vibra afectado por el hechizo.";
writemessages[228] = "Se te ha caído. ";
writemessages[229] = "El huevo vibra afectado por el hechizo.";
writemessages[230] = "¡El huevo aparece entre tus pies!";
writemessages[231] = "La magia hace temblar la cueva.";
writemessages[232] = "La magia hace temblar la cueva.";
writemessages[233] = "La magia hace temblar la cueva.";
writemessages[234] = "La magia hace temblar la cueva.";
writemessages[235] = "La magia hace temblar la cueva.";
writemessages[236] = "Nadie te hace caso. ";
writemessages[237] = "No puedes ";
writemessages[238] = "RESPONSE_DEFAULT_START";
writemessages[239] = "Ahora mismo no te apetece.";
writemessages[240] = "Estás bien así.";
writemessages[241] = "Te miras de arriba a abajo pero no ves nada especial.";
writemessages[242] = "No encuentras nada destacable.";
writemessages[243] = "Esa no es la solución...";
writemessages[244] = "Ahora mismo no te apetece...";
writemessages[245] = "Has jugado a demasiadas aventuras conversacionales...";
writemessages[246] = "No puedes coger eso que dices.";
writemessages[247] = "Por favor, especifica qué quieres coger.";
writemessages[248] = "Mejor no coges {OREF}, está bien donde está.";
writemessages[249] = "No puedes dejar eso que dices.";
writemessages[250] = "Por favor, especifica qué quieres dejar.";
writemessages[251] = "Por favor, especifica qué quieres sacar.";
writemessages[252] = "No puedes sacar eso que dices.";
writemessages[253] = "No puedes sacar eso.";
writemessages[254] = "No puedes sacar eso.";
writemessages[255] = "No puedes sacar {OREF} de ningún sitio, en todo caso puedes quitártelo porque lo llevas puesto...";
writemessages[256] = "¿De dónde quieres sacar eso?";
writemessages[257] = "No puedes sacar {OREF} de eso.";
writemessages[258] = "¿De dónde dices que quieres sacar {OREF}?";
writemessages[259] = "Antes abre {OBJECT|15}.";
writemessages[260] = "Antes abre {OBJECT|15}.";
writemessages[261] = "No puedes sacar nada de ahí porque no está aquí.";
writemessages[262] = "No puedes coger nada de ahí porque no está aquí.";
writemessages[263] = "No puedes sacar cosas de ahí.";
writemessages[264] = "Por favor, especifica qué quieres meter.";
writemessages[265] = "No puedes meter eso que dices.";
writemessages[266] = "No puedes meter eso.";
writemessages[267] = "No puedes meter eso.";
writemessages[268] = "Primero deberías quitarte {OREF} para poder hacer eso...";
writemessages[269] = "No llevas {OREF}.";
writemessages[270] = "¿Dónde quieres meter eso?";
writemessages[271] = "No puedes meter {OREF} a eso.";
writemessages[272] = "¿Dónde dices que quieres meter {OREF}?";
writemessages[273] = "No puedes meter cosas dentro de eso...";
writemessages[274] = "No puedes meter {OREF} ahí porque no llevas eso.";
writemessages[275] = "No puedes meter {OREF} ahí porque no llevas eso.";
writemessages[276] = "Antes abre {OBJECT|15}.";
writemessages[277] = "Antes abre {OBJECT|15}";
writemessages[278] = "No te puedes quitar eso que dices.";
writemessages[279] = "Por favor, especifica qué quieres quitarte.";
writemessages[280] = "No te puedes poner eso que dices.";
writemessages[281] = "Por favor, especifica qué quieres ponerte.";
writemessages[282] = "No puedes tirar de eso que dices.";
writemessages[283] = "Por favor, especifica de qué quieres tirar.";
writemessages[284] = "No sería adecuado.";
writemessages[285] = "No está aquí.";
writemessages[286] = "No ves mucho sentido a tirar de eso.";
writemessages[287] = "No parece que se consiga nada tirando de {OREF}.";
writemessages[288] = "Para tirar de {OREF} tendría que estar aquí.";
writemessages[289] = "No puedes examinar dentro de eso que dices..";
writemessages[290] = "Por favor, especifica dentro de qué quieres examinar.";
writemessages[291] = "No ves nada interesante hacia allí.";
writemessages[292] = "No puedes mirar eso que dices.";
writemessages[293] = "No puedes esconder eso que dices.";
writemessages[294] = "Por favor, especifica qué quieres esconder.";
writemessages[295] = "Piensas que no conseguirás que pase desapercibido.";
writemessages[296] = "No está aquí.";
writemessages[297] = "No crees que eso sirva de algo...";
writemessages[298] = "Escondiendo {OREF} no solucionarás nada.";
writemessages[299] = "No ves {OREF} por aquí.";
writemessages[300] = "La autocompasión no conduce a nada.";
writemessages[301] = "No recuerdas nada que te pueda ser útil.";
writemessages[302] = "No hay respuesta alguna.";
writemessages[303] = "Esa es una opción muy cobarde.";
writemessages[304] = "No puedes empujar eso que dices.";
writemessages[305] = "Por favor, especifica qué quieres empujar.";
writemessages[306] = "No crees que le guste demasiado.";
writemessages[307] = "No se mueve.";
writemessages[308] = "No está aquí.";
writemessages[309] = "No ves eso por aquí.";
writemessages[310] = "No ves mucho sentido a empujar eso.";
writemessages[311] = "No parece que se consiga nada empujando {OREF}.";
writemessages[312] = "Para empujar {OREF} tendría que estar aquí.";
writemessages[313] = "No puedes mover eso que dices.";
writemessages[314] = "Por favor, especifica qué quieres mover.";
writemessages[315] = "No crees que le guste demasiado.";
writemessages[316] = "No está aquí.";
writemessages[317] = "No ves mucho sentido a mover eso.";
writemessages[318] = "No parece que se consiga nada moviendo {OREF}.";
writemessages[319] = "Para mover {OREF} tendría que estar aquí.";
writemessages[320] = "No puedes girar eso que dices.";
writemessages[321] = "Por favor, especifica qué quieres girar.";
writemessages[322] = "No sería apropiado.";
writemessages[323] = "No ves utilidad en girar eso.";
writemessages[324] = "No está aquí.";
writemessages[325] = "No ves eso por aquí.";
writemessages[326] = "No ves mucho sentido a girar eso.";
writemessages[327] = "No ves sentido a girar {OREF}.";
writemessages[328] = "Girar {OREF} requiere su presencia.";
writemessages[329] = "No puedes lanzar eso que dices.";
writemessages[330] = "Por favor, especifica qué quieres lanzar.";
writemessages[331] = "La violencia no es la solución.";
writemessages[332] = "No puedes lanzar eso.";
writemessages[333] = "No está aquí.";
writemessages[334] = "No ves eso por aquí.";
writemessages[335] = "No, no ves sentido a lanzar eso.";
writemessages[336] = "Lanzas {OREF}.";
writemessages[337] = "Desgraciadamente no llevas {OREF}.";
writemessages[338] = "No parece decir nada.";
writemessages[339] = "No está aquí.";
writemessages[340] = "Prestas atención a ver si oyes algo más pero no escuchas nada en especial.";
writemessages[341] = "No puedes comer eso que dices.";
writemessages[342] = "Por favor, especifica qué quieres comer.";
writemessages[343] = "No crees que se deje. En cualquier caso no es muy apropiado.";
writemessages[344] = "No es muy buena idea que te comas eso.";
writemessages[345] = "No está aquí.";
writemessages[346] = "No quieres comer eso.";
writemessages[347] = "No ves sentido a comerte {OREF}.";
writemessages[348] = "Te comes {OREF}.";
writemessages[349] = "Para comerte {OREF} debería estar aquí.";
writemessages[350] = "No puedes beber eso que dices.";
writemessages[351] = "Por favor, especifica qué quieres beber.";
writemessages[352] = "Estás perdiendo el rumbo.";
writemessages[353] = "No está aquí.";
writemessages[354] = "No quieres beber eso.";
writemessages[355] = "No ves sentido a beberte {OREF}.";
writemessages[356] = "Te bebes {OREF}.";
writemessages[357] = "Para beberte {OREF} debería estar aquí.";
writemessages[358] = "No tienes ganas.";
writemessages[359] = "No puedes escupir a eso que dices.";
writemessages[360] = "Por favor, especifica a qué quieres escupir.";
writemessages[361] = "Eso sería de muy mala educación.";
writemessages[362] = "No está aquí.";
writemessages[363] = "No le ves sentido a escupir a eso.";
writemessages[364] = "No quieres escupir a {OREF}.";
writemessages[365] = "No ves {OREF} por aquí.";
writemessages[366] = "No puedes tocar eso que dices.";
writemessages[367] = "Por favor, especifica qué quieres tocar.";
writemessages[368] = "No se deja.";
writemessages[369] = "No está aquí.";
writemessages[370] = "No le ves sentido a tocar eso.";
writemessages[371] = "No quieres tocar {OREF}.";
writemessages[372] = "No ves {OREF} por aquí.";
writemessages[373] = "No puedes oler eso que dices.";
writemessages[374] = "Por favor, especifica qué quieres oler.";
writemessages[375] = "Es de mala educación.";
writemessages[376] = "No está aquí.";
writemessages[377] = "No le ves sentido a oler eso.";
writemessages[378] = "La verdad es que {OREF} huele bien.";
writemessages[379] = "La verdad es que {OREF} huele bien.";
writemessages[380] = "No quieres oler {OREF}.";
writemessages[381] = "La verdad es que {OREF} huele bien.";
writemessages[382] = "No ves {OREF} por aquí.";
writemessages[383] = "No puedes agitar eso que dices.";
writemessages[384] = "Por favor, especifica qué quieres agitar.";
writemessages[385] = "No crees que le guste demasiado.";
writemessages[386] = "No está aquí.";
writemessages[387] = "No le ves sentido a agitar eso.";
writemessages[388] = "No quieres agitar {OREF}.";
writemessages[389] = "No ves {OREF} por aquí.";
writemessages[390] = "No puedes balancearte en eso que dices.";
writemessages[391] = "Por favor, especifica dónde quieres balancearte.";
writemessages[392] = "No crees que le guste demasiado.";
writemessages[393] = "No está aquí.";
writemessages[394] = "No es algo adecuado para balancearse.";
writemessages[395] = "Crees que {OREF} no es algo adecuado para balancearse.";
writemessages[396] = "No ves {OREF} por aquí.";
writemessages[397] = "No tienes sueño.";
writemessages[398] = "Saltas, sin conseguir nada.";
writemessages[399] = "Rezas todo lo que sabes.";
writemessages[400] = "No quieres cavar aquí.";
writemessages[401] = "Pensar siempre es bueno.";
writemessages[402] = "No tienes sueño.";
writemessages[403] = "Cantas fatal.";
writemessages[404] = "La verdad es que bailar no se te da muy bien...";
writemessages[405] = "No puedes atacar a eso que dices.";
writemessages[406] = "Por favor, especifica a qué o a quién quieres atacar.";
writemessages[407] = "La violencia no es buena.";
writemessages[408] = "No está aquí.";
writemessages[409] = "La violencia no es la solución.";
writemessages[410] = "Atacar {OREF} no solucionará nada.";
writemessages[411] = "No ves {OREF} por aquí, en cualquier caso la violencia no es la solución.";
writemessages[412] = "No puedes golpear a eso que dices.";
writemessages[413] = "Por favor, especifica a qué o a quién quieres golpear.";
writemessages[414] = "La violencia no es buena.";
writemessages[415] = "No está aquí.";
writemessages[416] = "La violencia no es la solución.";
writemessages[417] = "Golpear {OREF} no solucionará nada.";
writemessages[418] = "No ves {OREF} por aquí, en cualquier caso la violencia no es la solución.";
writemessages[419] = "USAR es demasiado genérico. Por favor, sé más concreto. Por ejemplo, si quieres barrer el suelo utiliza BARRER SUELO, no USAR ESCOBA.";
writemessages[420] = "No puedes limpiar eso que dices.";
writemessages[421] = "Por favor, especifica qué quieres limpiar.";
writemessages[422] = "No se deja.";
writemessages[423] = "No está aquí.";
writemessages[424] = "No le ves sentido a limpiar eso.";
writemessages[425] = "Limpias {OREF}. No hay efecto alguno.";
writemessages[426] = "No ves {OREF} por aquí.";
writemessages[427] = "No puedes rascar eso que dices.";
writemessages[428] = "Por favor, especifica qué quieres rascar.";
writemessages[429] = "No se deja.";
writemessages[430] = "No está aquí.";
writemessages[431] = "No quieres rascar eso.";
writemessages[432] = "Rascas {OREF}. No hay efecto alguno.";
writemessages[433] = "No ves {OREF}_ por aquí.";
writemessages[434] = "No puedes quemar eso que dices.";
writemessages[435] = "Por favor, especifica qué quieres quemar.";
writemessages[436] = "La barbarie no solucionará tus problemas.";
writemessages[437] = "No está aquí.";
writemessages[438] = "No le ves sentido a quemar eso.";
writemessages[439] = "Quemar {OREF} no es la solución.";
writemessages[440] = "No ves {OREF} por aquí.";
writemessages[441] = "No puedes apagar eso que dices.";
writemessages[442] = "Por favor, especifica qué quieres apagar.";
writemessages[443] = "No le ves sentido a apagar eso.";
writemessages[444] = "No quieres apagar {OREF}.";
writemessages[445] = "No ves {OREF} por aquí.";
writemessages[446] = "No puedes cortar eso que dices.";
writemessages[447] = "Por favor, especifica qué quieres cortar.";
writemessages[448] = "La violencia no es la solución.";
writemessages[449] = "No crees que cortar eso sea de mucha utilidad.";
writemessages[450] = "No está aquí.";
writemessages[451] = "No le ves sentido a cortar eso.";
writemessages[452] = "No ves sentido a cortar {OREF}.";
writemessages[453] = "No ves {OREF} por aquí.";
writemessages[454] = "No puedes atar eso que dices.";
writemessages[455] = "Por favor, especifica qué quieres atar.";
writemessages[456] = "Crees que no se va a dejar.";
writemessages[457] = "No está aquí.";
writemessages[458] = "No le ves sentido a atar eso.";
writemessages[459] = "No quieres atar {OREF}.";
writemessages[460] = "No ves {OREF} por aquí.";
writemessages[461] = "No puedes desatar eso que dices.";
writemessages[462] = "Por favor, especifica qué quieres desatar.";
writemessages[463] = "¿Desatarle?.";
writemessages[464] = "No está aquí.";
writemessages[465] = "No le ves sentido a desatar eso.";
writemessages[466] = "¿Desatar {OREF}?, ¿para qué?";
writemessages[467] = "No ves {OREF} por aquí.";
writemessages[468] = "No puedes llenar eso que dices.";
writemessages[469] = "Por favor, especifica qué quieres llenar.";
writemessages[470] = "No le ves sentido a llenar eso.";
writemessages[471] = "No quieres llenar {OREF}.";
writemessages[472] = "No puedes llenar {OREF}.";
writemessages[473] = "No ves {OREF} por aquí.";
writemessages[474] = "Mejor no.";
writemessages[475] = "No te apetece trepar.";
writemessages[476] = "No puedes retorcer eso que dices.";
writemessages[477] = "Por favor, especifica qué quieres retorcer.";
writemessages[478] = "La violencia no es la solución.";
writemessages[479] = "No está aquí.";
writemessages[480] = "No le ves sentido a retorcer eso.";
writemessages[481] = "No quieres retorcer {OREF}.";
writemessages[482] = "No ves {OREF} por aquí.";
writemessages[483] = "No puedes apretar eso que dices.";
writemessages[484] = "Por favor, especifica qué quieres apretar.";
writemessages[485] = "La violencia no es la solución.";
writemessages[486] = "No está aquí.";
writemessages[487] = "No le ves sentido a apretar eso.";
writemessages[488] = "No quieres apretar {OREF}.";
writemessages[489] = "No ves {OREF} por aquí.";
writemessages[490] = "No puedes besar eso que dices.";
writemessages[491] = "Por favor, especifica a qué o a quién quieres besar.";
writemessages[492] = "No se deja.";
writemessages[493] = "No está aquí.";
writemessages[494] = "No quieres besar eso.";
writemessages[495] = "No quieres besar {OREF}.";
writemessages[496] = "No ves {OREF} por aquí.";
writemessages[497] = "No puedes abrazar eso que dices.";
writemessages[498] = "Por favor, especifica a qué o a quién quieres abrazar.";
writemessages[499] = "Ni se deja, ni crees que sea muy apropiado.";
writemessages[500] = "No está aquí.";
writemessages[501] = "No quieres abrazar eso.";
writemessages[502] = "No quieres abrazar {OREF}.";
writemessages[503] = "No ves {OREF} por aquí.";
writemessages[504] = "No puedes conectar eso que dices.";
writemessages[505] = "Por favor, especifica qué quieres conectar.";
writemessages[506] = "No ves la manera de conectar eso.";
writemessages[507] = "Activas {OREF}.";
writemessages[508] = "Ya lo está.";
writemessages[509] = "No ves la manera de activar {OREF}.";
writemessages[510] = "No ves {OREF} por aquí.";
writemessages[511] = "No puedes desconectar eso que dices.";
writemessages[512] = "Por favor, especifica qué quieres desconectar.";
writemessages[513] = "No le ves sentido a desconectar eso.";
writemessages[514] = "Desactivas {OREF}.";
writemessages[515] = "Ya lo está.";
writemessages[516] = "No puedes desconectar {OREF}.";
writemessages[517] = "No ves {OREF} por aquí.";
writemessages[518] = "No puedes abrir eso que dices.";
writemessages[519] = "Por favor, especifica qué quieres abrir.";
writemessages[520] = "No le ves sentido a abrir eso.";
writemessages[521] = "Abres {OREF}.";
writemessages[522] = "Está cerrado con llave.";
writemessages[523] = "Ya lo está.";
writemessages[524] = "Ya lo está.";
writemessages[525] = "No puedes abrir {OREF}.";
writemessages[526] = "No ves {OREF} por aquí.";
writemessages[527] = "No puedes cerrar eso que dices.";
writemessages[528] = "Por favor, especifica qué quieres cerrar.";
writemessages[529] = "No le ves sentido a cerrar eso.";
writemessages[530] = "Cierras {OREF}.";
writemessages[531] = "Ya lo está.";
writemessages[532] = "No puedes cerrar {OREF}.";
writemessages[533] = "No ves {OREF} por aquí.";
writemessages[534] = "No puedes chupar eso que dices.";
writemessages[535] = "Por favor, especifica qué quieres chupar.";
writemessages[536] = "Eso sería muy poco apropiado.";
writemessages[537] = "Piensas en comerte {OREF} pero te contienes.";
writemessages[538] = "No está aquí.";
writemessages[539] = "No te imaginas chupando eso.";
writemessages[540] = "No quieres chupar {OREF}.";
writemessages[541] = "No ves {OREF} por aquí.";
writemessages[542] = "No puedes romper eso que dices.";
writemessages[543] = "Por favor, especifica qué quieres romper.";
writemessages[544] = "La violencia no es buena.";
writemessages[545] = "No está aquí.";
writemessages[546] = "La violencia no es la solución.";
writemessages[547] = "Romper {OREF} no solucionará nada.";
writemessages[548] = "No ves {OREF} por aquí; en cualquier caso, romper eso no es la solución.";
writemessages[549] = "No puedes comprar eso que dices.";
writemessages[550] = "Por favor, especifica qué quieres comprar.";
writemessages[551] = "Todo el mundo tiene un precio... pero no está en venta.";
writemessages[552] = "No está aquí.";
writemessages[553] = "No hay nada en venta.";
writemessages[554] = "No hay nada en venta.";
writemessages[555] = "No ves {OREF} por aquí.";
writemessages[556] = "No puedes doblar eso que dices.";
writemessages[557] = "Por favor, especifica qué quieres doblar.";
writemessages[558] = "Piensas que ya está bien como está...";
writemessages[559] = "No está aquí.";
writemessages[560] = "Prefieres no doblar eso.";
writemessages[561] = "Doblar {OREF} no solucionará nada.";
writemessages[562] = "No ves {OREF} por aquí.";
writemessages[563] = "No puedes desdoblar eso que dices.";
writemessages[564] = "Por favor, especifica qué quieres desdoblar.";
writemessages[565] = "Piensas que ya está bien como está...";
writemessages[566] = "No está aquí.";
writemessages[567] = "¿Para qué quieres desdoblar eso?";
writemessages[568] = "¿Desdoblar {OREF}?, ¿para qué?";
writemessages[569] = "No ves {OREF} por aquí.";
writemessages[570] = "No puedes dar eso.";
writemessages[571] = "Por favor, especifica qué quieres dar.";
writemessages[572] = "No puedes dar eso que dices.";
writemessages[573] = "No puedes dar eso.";
writemessages[574] = "Primero deberías quitarte {OREF} para poder hacer eso...";
writemessages[575] = "No llevas {OREF}.";
writemessages[576] = "¿A quién quieres dar eso?";
writemessages[577] = "No puedes darle {OREF} a eso.";
writemessages[578] = "No puedes darle {OREF} a eso.";
writemessages[579] = "Estás perdiendo la cabeza...";
writemessages[580] = "No le puedes dar {OREF} porque no está aquí.";
writemessages[581] = "Le ofreces {OREF} pero no le hace ni caso.";
writemessages[582] = "No puedes mostrar eso.";
writemessages[583] = "Por favor, especifica qué quieres mostrar.";
writemessages[584] = "No puedes mostrar eso que dices.";
writemessages[585] = "No puedes mostrar eso.";
writemessages[586] = "Primero deberías quitarte {OREF} para poder hacer eso...";
writemessages[587] = "No llevas {OREF}.";
writemessages[588] = "¿A quién quieres mostrar eso?";
writemessages[589] = "No puedes mostrarle {OREF} a eso.";
writemessages[590] = "No puedes mostrarle {OREF} a eso.";
writemessages[591] = "Estás perdiendo la cabeza...";
writemessages[592] = "No le puedes mostrar {OREF} porque no está aquí.";
writemessages[593] = "Le muestras {OREF} pero no le hace ni caso.";
writemessages[594] = "No puedes soplar eso que dices.";
writemessages[595] = "Por favor, especifica a qué quieres soplar.";
writemessages[596] = "No crees que le guste demasiado.";
writemessages[597] = "No está aquí.";
writemessages[598] = "No le ves sentido a soplar eso.";
writemessages[599] = "No quieres soplar {OREF}.";
writemessages[600] = "No ves eso que dices.";
writemessages[601] = "Mejor no, puede enfadarse.";
writemessages[602] = "Gritas con fuerza pero no te oye.";
writemessages[603] = "Gritas lo más fuerte que puedes y... no sucede nada.";
writemessages[604] = "No crees que haga falta.";
writemessages[605] = "No está aquí.";
writemessages[606] = "Pellizcas tu mejilla creyendo que despertarás pero... no estás soñando...¿o sí?";
writemessages[607] = "No puedes levantar eso que dices.";
writemessages[608] = "Por favor, especifica qué quieres levantar.";
writemessages[609] = "No crees que le guste demasiado.";
writemessages[610] = "No está aquí.";
writemessages[611] = "No ves mucho sentido a levantar eso.";
writemessages[612] = "No puedes levantar {OREF}. Pesa demasiado.";
writemessages[613] = "No conseguirás nada levantando eso.";
writemessages[614] = "Para levantar {OREF} tendría que estar aquí.";
writemessages[615] = "No puedes arrastrar eso que dices.";
writemessages[616] = "Por favor, especifica qué quieres arrastrar.";
writemessages[617] = "No crees que le guste demasiado.";
writemessages[618] = "No está aquí.";
writemessages[619] = "No ves mucho sentido a arrastrar eso.";
writemessages[620] = "No parece que se consiga nada arrastrando {OREF}.";
writemessages[621] = "Para arrastrar {OREF} tendría que estar aquí.";
writemessages[622] = "No puedes vaciar eso que dices.";
writemessages[623] = "Por favor, especifica qué quieres vaciar.";
writemessages[624] = "No es lo más apropiado.";
writemessages[625] = "No está aquí.";
writemessages[626] = "No le ves sentido a vaciar eso.";
writemessages[627] = "No quieres vaciar {OREF}.";
writemessages[628] = "No ves {OREF} por aquí.";
writemessages[629] = "No puedes llamar a eso que dices.";
writemessages[630] = "Por favor, especifica a qué o a quién quieres llamar.";
writemessages[631] = "No hay respuesta...";
writemessages[632] = "No está aquí.";
writemessages[633] = "No le ves sentido a llamar a eso.";
writemessages[634] = "No quieres llamar a {OREF}.";
writemessages[635] = "No ves {OREF} por aquí.";
writemessages[636] = "No puedes preguntar a eso que dices.";
writemessages[637] = "Por favor, especifica a quién quieres preguntar.";
writemessages[638] = "No hay respuesta alguna...";
writemessages[639] = "No está aquí.";
writemessages[640] = "No le ves sentido a preguntar a eso.";
writemessages[641] = "No quieres preguntar a {OREF}.";
writemessages[642] = "No ves {OREF} por aquí.";
writemessages[643] = "No puedes consultar eso que dices.";
writemessages[644] = "Por favor, especifica qué quieres consultar.";
writemessages[645] = "No le ves sentido a consultar eso.";
writemessages[646] = "No quieres consultar {OREF}.";
writemessages[647] = "No ves {OREF} por aquí.";
writemessages[648] = "No puedes insultar a eso que dices.";
writemessages[649] = "Por favor, especifica a quién quieres insultar.";
writemessages[650] = "No parece hacerte ni caso...";
writemessages[651] = "No está aquí.";
writemessages[652] = "No conseguirás nada insultando a eso.";
writemessages[653] = "Estás perdiendo la cabeza...";
writemessages[654] = "Ni ves eso que dices, ni crees que sea útil insultarle.";
writemessages[655] = "No puedes unir eso que dices.";
writemessages[656] = "Por favor, especifica qué quieres unir.";
writemessages[657] = "No crees que le guste demasiado.";
writemessages[658] = "No está aquí.";
writemessages[659] = "No ves mucho sentido a unir eso.";
writemessages[660] = "No parece que se consiga nada uniendo {OREF}.";
writemessages[661] = "Para unir {OREF} tendría que estar aquí.";
writemessages[662] = "No puedes separar eso que dices.";
writemessages[663] = "Por favor, especifica qué quieres separar.";
writemessages[664] = "No crees que le guste demasiado.";
writemessages[665] = "No está aquí.";
writemessages[666] = "No ves mucho sentido a separar eso.";
writemessages[667] = "No parece que se consiga nada separando {OREF}.";
writemessages[668] = "Para separar {OREF}, tendría que estar aquí.";
writemessages[669] = "No puedes hablar con eso que dices.";
writemessages[670] = "Por favor, especifica con quién quieres hablar.";
writemessages[671] = "No parece interesarse por tu charla.";
writemessages[672] = "No está aquí.";
writemessages[673] = "No quieres hablarle a eso.";
writemessages[674] = "Estás perdiendo la cabeza...";
writemessages[675] = "Ni ves eso que dices, ni crees que sea útil hablarle.";
writemessages[676] = "No puedes ir ahí donde dices.";
writemessages[677] = "Por favor, especifica dónde quieres ir.";
writemessages[678] = "Prefieres no acercarte más...";
writemessages[679] = "No sabes dónde está.";
writemessages[680] = "No le ves sentido a ir hacia eso.";
writemessages[681] = "No quieres ir a {OREF}.";
writemessages[682] = "No ves eso que dices.";
writemessages[683] = "No puedes ir ";
writemessages[684] = ". ";
writemessages[685] = "RESPONSE_DEFAULT_END";
writemessages[686] = "PRO1";
writemessages[687] = "La aventura original";
writemessages[688] = "Esta parte del bosque es muy densa, los árboles te impiden orientarte bien y son todos muy parecidos. Vagas por entre la maleza buscando tu rumbo pero pronto te das cuenta de que estás algo despistadillo.";
writemessages[689] = "<b>Si es la primera vez que juegas a una aventura conversacional y no sabes por dónde empezar, teclea «AYUDA».</b>";
writemessages[690] = "¡Puaj! Aquí apesta. ";
writemessages[691] = "El sol hace brillar algo en una rama.";
writemessages[692] = "Oyes un débil llanto y con dificultad ves una figura traslúcida.";
writemessages[693] = "«¡Mi casa!»";
writemessages[694] = "Estás en una depresión de siete metros. El valle se estrecha hacia el sur.";
writemessages[695] = " Elfito da saltos de alegría.";
writemessages[696] = " Elfito da saltos de alegría.";
writemessages[697] = " Tienes ante ti la entrada a La Gran Caverna.";
writemessages[698] = "Elfito dice: «¡Mi casa!»";
writemessages[699] = "«Mi agradecimiento está sobre la mesa.» Y penetra en las profundidades.";
writemessages[700] = "«No es aquí.»";
writemessages[701] = "«¡Mi casa!»";
writemessages[702] = "El calor que se desprende de la burbujeante lava es asfixiante. Un enorme penacho de cenizas se desprende flotando perezosamente del ardiente magma, dejando una peste cosa mala. Imprudentemente estás haciendo el payaso en el peligroso borde del volcán";
writemessages[703] = " junto a un enano que rabia de amargura.";
writemessages[704] = ".";
writemessages[705] = "Has jugado durante ";
writemessages[706] = " turnos.";
writemessages[707] = "{RESTART|Volver a jugar}";
writemessages[708] = "Con un click la puerta se cierra mágicamente...";
writemessages[709] = "Ánimo, solo te faltan ";
writemessages[710] = ".";
writemessages[711] = "Si no has perdido el último tesoro vencerás a la Gran Caverna.";
writemessages[712] = "Mágicamente, dándote otra oportunidad de vivir, la puerta se abre...";
writemessages[713] = "Te encuentras en una pequeña cueva, rodeado de húmedas rocas. Los rayos del sol penetran a través de los barrotes de la cerrada reja. Hacia el oeste sale un pasadizo bajo y oscuro que se pierde en el misterio.";
writemessages[714] = "Te encuentras en la salida al exterior de la cueva. Vuelves a ver los rayos del sol.";
writemessages[715] = "PRO2";
writemessages[716] = "¡La linterna se ha apagado!";
writemessages[717] = "Maluva te parte en dos la cabeza.";
writemessages[718] = "El reptil te marca sus colmillos en el cuello, y se marcha.";
writemessages[719] = "El veneno te ha matado.";
writemessages[720] = "La linterna va mal. La luz parpadea.";
writemessages[721] = "¡La linterna apenas da luz!";
writemessages[722] = "Tropiezas en la oscuridad y te desnucas.";
writemessages[723] = "¡El enano Maluva sale de entre las sombras! Chorreando espesa baba avanza bamboleante hacia ti.";
writemessages[724] = "...¡y falla por poco!";
writemessages[725] = "Con un gran insulto vuelve a las tinieblas.";
writemessages[726] = "\1<div style='padding:0 1%; margin: 0; font-family:monospace; font-size:.7em; text-align:center'>------- LOS TESOROS DE -------</div>";
writemessages[727] = "\1<div style='padding:0 1%; margin: 0; font-family:monospace; font-size:.7em; text-align:center'>----- LA CAVERNA ORIGINAL ----</div>";
writemessages[728] = "\1<div style='padding:0 1%; margin: 0; font-family:monospace; font-size:.7em; text-align:center'>---------- SON TUYOS ---------</div>";
writemessages[729] = "\1<div style='padding:0 1%; margin: 0; font-size:.7em; text-align:center'>FELICIDADES</div>";
writemessages[730] = "   Aparece Elfito y te dice:";
writemessages[731] = "    «Al haber perdido todos sus tesoros La Gran Caverna no tiene razón para seguir existiendo y está a punto de derrumbarse, larguémonos cuanto antes»";
writemessages[732] = "        y se las pira...";
writemessages[733] = "Tal como dijo Elfito, sin tesoros que le den fuerza vital, la caverna se colapsa. El cataclismo acaba con todo ser viviente.";
writemessages[734] = "Algo que has hecho te impide completar la aventura.";
writemessages[735] = "No llevas todos los objetos que necesitas, por lo tanto la magia de La Gran Caverna te impide el paso.";
writemessages[736] = "Examina lo que has encontrado. Explora toda la zona.";
writemessages[737] = "Algunas de las preguntas más frecuentes son:";
writemessages[738] = "No la ves desde aquí.";
writemessages[739] = "No estás suficientemente cerca.";
writemessages[740] = "Es una sólida y bella construcción.";
writemessages[741] = "Continúa hacia una extraña construcción.";
writemessages[742] = "No hay nada que te llame la atención. Acaban aquí.";
writemessages[743] = "Estas botas tienen un tacón muy alto pero no son de tu número.";
writemessages[744] = "Es de vidrio y está vacía.";
writemessages[745] = "La tienes llena de agua fresca y fertilizante.";
writemessages[746] = "Es una sólida construcción que antaño perteneció a los dueños del valle, hoy está abandonada.";
writemessages[747] = "Se ve tan pequeña que parece de juguete.";
writemessages[748] = "La columna de humo sube de forma lenta, casi poética.";
writemessages[749] = "La imagen del volcán es aterradora. Suerte que está lejos.";
writemessages[750] = "Está hacia al sur. No sabrías describirla muy bien desde aquí.";
writemessages[751] = "La entrada es pequeña pero lo suficientemente amplia para que pases por ella y penetres a un Mundo Mágico.";
writemessages[752] = "La boca del pozo está muy oscura.";
writemessages[753] = "Chapoteas tocando gelatinosas babosidades ";
writemessages[754] = "¡pero de monedas nada, listillo!";
writemessages[755] = "Chapoteas tocando asquerosas gelatinosas babosidades ";
writemessages[756] = "y de pronto descubres que hay ¡una moneda!";
writemessages[757] = "previous_noun=51";
writemessages[758] = "Dicen que las aguas de este río tienen la mágica propiedad de hacer crecer semillas muy viejas.";
writemessages[759] = "No dan muchas ganas de meterse en él pero no conseguirás nada quedándote aquí. ¿Con qué tipo de criaturas te vas a encontrar?";
writemessages[760] = "Has oído decir que las aguas de este río tienen mágicas propiedades. Que pueden hacer crecer semillas de cualquier tipo.";
writemessages[761] = "Es un bosque frondoso. Si no fuera por el valle en el que estás, no verías el sol.";
writemessages[762] = "Es un lugar bellísimo pero no deberías admirar los parajes, esta es una tierra que seguro está llena de peligros...";
writemessages[763] = "El agua corre. Ves que el caudal mengua hacia el sur.";
writemessages[764] = "Sientes una extraña sensación. Algo te da muy mala espina...";
writemessages[765] = "Cada vez más seco, el agua se pierde entre las grietas.";
writemessages[766] = "Sabes de buena tinta que las aguas de este río son mágicas. Dicen que pueden hacer crecer todo tipo de semillas.";
writemessages[767] = "Inlcuso desde aquí se puede apreciar el mal estado en el que está.";
writemessages[768] = "Por su posición y solidez proporciona una fácil subida.";
writemessages[769] = "¿Estás de broma? Es demasiado peligroso. Te estás quedando sin cejas del calor que notas ya desde aquí.";
writemessages[770] = "¿Estás de broma? Si antes ya era peligroso ahora vas a arder si te acercas más.";
writemessages[771] = "Solo de imaginar que te asomas al vacío ya te estás mareando, como para acercarse.";
writemessages[772] = "Como los del circo. Parece tener muy mala uva. Para comunicarte, «dile algo».";
writemessages[773] = "Seguro que desde allí hay buenas vistas.";
writemessages[774] = "De un color oscuro. Cada una de una forma más excepcional que la anterior.";
writemessages[775] = "No serviría de mucho. Ni tan siquiera si pudieras acercar la mano.";
writemessages[776] = "¡Puaj! No te quieres acercar más. ¡Qué asco! ¿Qué es eso que está pegado ahí? Mejor no saberlo.";
writemessages[777] = "¡Aj! Si sigues investigando vas acabar por vomitar. ¡Qué asco!";
writemessages[778] = "¡Buaaaaagghhh! No... argh... es pegajoso... ¡puaj!";
writemessages[779] = "Chapoteas tocando asquerosas gelatinosas babosidades ";
writemessages[780] = "y de pronto descubres que hay ¡una moneda!";
writemessages[781] = "Chapoteas tocando gelatinosas babosidades ";
writemessages[782] = "¡pero de monedas nada, listillo!";
writemessages[783] = "Es una construcción altísima y de un brillo metálico, pero de superficie tan resbaladiza que la hace inexpugnable.";
writemessages[784] = "Son ranuras estrechas por las que se cuela el agua del río.";
writemessages[785] = "Es muy fuerte. Impide la entrada.";
writemessages[786] = "Esta zona es la más inquietante de las que has estado desde hace un rato.";
writemessages[787] = "Mmmm... hacia el sur se hace cada vez más estrecho. Hacia el norte se ensancha.";
writemessages[788] = "Un aire pútrido te da en la cara. El olor es tan nauseabundo que te preguntas si todo esto merece la pena.";
writemessages[789] = "No parece que se pueda forzar con nada. Habrá que buscar la llave que lo abre.";
writemessages[790] = "Está abierto pero sigue ahí puesto.";
writemessages[791] = "Ha desaparecido delante de tus ojos";
writemessages[792] = "Es un lugar excepcional, imaginas cómo debió ser hace años, cuando el río caía por aquí.";
writemessages[793] = "Este lugar es la Gran Cascada del jefe de los enanos, aunque ya no haya agua. Ahora, es un lugar tan bello como desolador.";
writemessages[794] = "¡Uuaahhh! Te estás mareando de lo profundo que es. Deja de hacer tonterías que te vas a matar.";
writemessages[795] = "Ves la pared casi vertical. Imposible de escalar, ni tan siquiera teniendo el equipo adecuado. Como para intentarlo sin él: Muerte segura.";
writemessages[796] = "Tiene un aspecto peculiar.";
writemessages[797] = "Tiene un aspecto peculiar.";
writemessages[798] = "No ves nada de nada.";
writemessages[799] = "No puedes examinar dentro de eso que dices.";
writemessages[800] = "Por favor, especifica dentro de qué quieres examinar.";
writemessages[801] = "No puedes examinar eso que dices.";
writemessages[802] = "Por favor, especifica qué o a quién quieres examinar.";
writemessages[803] = "Vaya ocurrencia...";
writemessages[804] = "No está aquí.";
writemessages[805] = "Es de mala educación.";
writemessages[806] = "No está aquí.";
writemessages[807] = "No le ves sentido a examinar dentro de eso.";
writemessages[808] = "No le ves sentido a examinar eso.";
writemessages[809] = "Examinas {OREF} pero no ves nada especial ";
writemessages[810] = ".";
writemessages[811] = "Examinas {OREF} pero no ves nada especial ";
writemessages[812] = ".";
writemessages[813] = "Examinas {OREF} pero no ves nada especial";
writemessages[814] = ".";
writemessages[815] = "Examinas {OREF} pero no ves nada especial. Si lo abres podrás ver su contenido.";
writemessages[816] = "Examinas {OREF} pero no ves nada especial. Si lo abres podrás ver su contenido.";
writemessages[817] = "Examinas {OREF} pero no ves nada especial ";
writemessages[818] = ".";
writemessages[819] = "Examinas {OREF} pero no ves nada especial.";
writemessages[820] = "No ves {OREF} por aquí.";
writemessages[821] = "La lava te reduce a cenizas.";
writemessages[822] = " Flotas en forma de nube.";
writemessages[823] = "Te rompes el hocico contra la raíz del árbol.";
writemessages[824] = "«¿Qué dices?»";
writemessages[825] = "«¡Mi casa!»";
writemessages[826] = "«Cuando encuentre mi casa.»";
writemessages[827] = "Muy contrariado Elfito no puede aguantar las lágrimas y se va. Lo has perdido de vista.";
writemessages[828] = "«¡Qué grosería! ¡Qué mala educación!»";
writemessages[829] = "«¡No encuentro mi casa!»";
writemessages[830] = "«En la Gran Caverna.»";
writemessages[831] = "Oh, qué amable. Gracias.";
writemessages[832] = "«Mi nombre es Elfito.»";
writemessages[833] = "Te dice: «¡Hola tú!»";
writemessages[834] = "«¡No quiero! ¿No entiendes que estoy perdido? Solo quiero saber dónde está mi casa.»";
writemessages[835] = "Concreta un poco más. Intenta «Decir, y lo que quieras preguntar»";
writemessages[836] = "«Pero ¿qué dices?»";
writemessages[837] = "«¡No me da la gana!»";
writemessages[838] = "«¡Quiero ser más alto!»";
writemessages[839] = "«No quiero ir a ninguna parte ¿Por qué no me dejas en paz?»";
writemessages[840] = "«No quiero seguirte. Déjame tranquilo ya.»";
writemessages[841] = "«¿Quién te has creído que soy? ¿Quién te piensas que eres?»";
writemessages[842] = "«Don Enano»";
writemessages[843] = "Sí, sí... hola, hola. Ahora, piérdete.";
writemessages[844] = "«¡Largo de aquí!»";
writemessages[845] = "Cabreadísimo te ataca, echándose encima de ti.";
writemessages[846] = "Lucháis, forcejeando como dos locos, en el borde del volcán...";
writemessages[847] = " ¡y os precipitáis hacia el abismo!";
writemessages[848] = "Te arroja con furia su hacha...";
writemessages[849] = "Aparece el Terrible Pirata gritando: «¡Te quito {OREF} y me voy a mi entrelazada guarida!» ";
writemessages[850] = "Y con un gran insulto vuelve a las tinieblas.";
writemessages[851] = "Estás en una fétida madriguera llena de caca de dragón por todos lados. El olor es insoportable, pero del norte llega una suave brisa húmeda";
writemessages[852] = ". Frente a ti tienes al «bisssssho» más grande que hayas visto jamás.";
writemessages[853] = ".";
writemessages[854] = "¡Te bloquea un fornido Troll que ruge: «un tesoro has de dar para poder pasar»!";
writemessages[855] = " Una enorme serpiente te observa.";
writemessages[856] = " Un pajarillo revolotea por la estancia.";
writemessages[857] = "Aquí hay una puerta herrumbrosa.";
writemessages[858] = "Ves que la puerta está bien aceitada.";
writemessages[859] = "La puerta está abierta.";
writemessages[860] = "Estás en un";
writemessages[861] = " laberinto de";
writemessages[862] = " ovales";
writemessages[863] = " pasillos";
writemessages[864] = " intercomunicados";
writemessages[865] = " intercomunicado";
writemessages[866] = " laberinto de";
writemessages[867] = " pasillos";
writemessages[868] = " ovales";
writemessages[869] = " laberinto de";
writemessages[870] = " intercomunicados";
writemessages[871] = " pasillos";
writemessages[872] = " ovales";
writemessages[873] = " intercomunicado";
writemessages[874] = " laberinto de";
writemessages[875] = " ovales";
writemessages[876] = " pasillos";
writemessages[877] = " laberinto de";
writemessages[878] = " pasillos";
writemessages[879] = " ovales";
writemessages[880] = " intercomunicados";
writemessages[881] = ". ";
writemessages[882] = "En el suelo hay unas semillas de judías.";
writemessages[883] = "Aquí hay una tierna plantita de judías.";
writemessages[884] = "Aquí hay una planta de judías cuyo tronco es enorme. Sale por el agujero superior.";
writemessages[885] = " ¡Un enorme oso tira con furia de su cadena para darte un abrazo de bienvenida!";
writemessages[886] = " El oso Peposo está encadenado.";
writemessages[887] = " El oso viene contigo. ";
writemessages[888] = "Estás en un";
writemessages[889] = " laberinto de";
writemessages[890] = " pequeñas";
writemessages[891] = " habitaciones";
writemessages[892] = " entrelazadas";
writemessages[893] = " pequeño";
writemessages[894] = " laberinto de";
writemessages[895] = " habitaciones";
writemessages[896] = " entrelazadas";
writemessages[897] = " entrelazado";
writemessages[898] = " laberinto de";
writemessages[899] = " habitaciones";
writemessages[900] = " pequeñas";
writemessages[901] = ". ";
writemessages[902] = "Hay un agujero en el suelo";
writemessages[903] = " pequeño";
writemessages[904] = " laberinto de";
writemessages[905] = " entrelazadas";
writemessages[906] = " habitaciones";
writemessages[907] = " laberinto de";
writemessages[908] = " habitaciones";
writemessages[909] = " pequeñas";
writemessages[910] = " entrelazadas";
writemessages[911] = " entrelazado";
writemessages[912] = " laberinto de";
writemessages[913] = " pequeñas";
writemessages[914] = " habitaciones";
writemessages[915] = ". ";
writemessages[916] = "Estás en la guarida del pirata cleptómano";
writemessages[917] = ". ";
writemessages[918] = " El precipicio queda al ";
writemessages[919] = "oeste";
writemessages[920] = ".";
writemessages[921] = "este";
writemessages[922] = ".";
writemessages[923] = "Has dado ";
writemessages[924] = " órdenes.";
writemessages[925] = "{RESTART|Volver a jugar}";
writemessages[926] = "Chorreando espesa baba avanza bamboleante hacia ti.";
writemessages[927] = "Mirándote amenazante desde lo alto, ruge: ¡Serás un buen bocata!";
writemessages[928] = "¡Qué rico! Exclama relamiéndose, otro aventurero para cenar.";
writemessages[929] = "No ves al dragón por ninguna parte.";
writemessages[930] = "Peposo no está aquí.";
writemessages[931] = "No ves al troll.";
writemessages[932] = "Peposo se tranquiliza, come la tortilla y agradecido te lame la sucia cara. Tienes un fiel amigo.";
writemessages[933] = "Se ha comido la linterna. Y ahora no crees que haya sido una buena idea... ";
writemessages[934] = "porque todo se queda a oscuras";
writemessages[935] = "Aunque no pensaste que fuera capaz, se ha comido la linterna. Y puede que no haya sido una buena idea... ";
writemessages[936] = "porque todo se queda a oscuras";
writemessages[937] = "¡No intentes engañarme! Esto no es un tesoro. Y cabreado tira la linterna al abismo.";
writemessages[938] = " Puede que no haya sido una buena idea... ";
writemessages[939] = "porque todo se queda a oscuras";
writemessages[940] = "El dragón se ha comido {OREF}.";
writemessages[941] = "El oso se ha comido {OREF}.";
writemessages[942] = "Se ha comido {OREF}.";
writemessages[943] = "Pero... ¡Si no tienes eso!";
writemessages[944] = "Pero... ¡Si no tienes eso!";
writemessages[945] = "¡No intentes engañarme! Esto no es un tesoro. Y cabreado tira {OREF} al abismo.";
writemessages[946] = "¡Cojo {OREF}. Pasa aventurero cobardica!";
writemessages[947] = "No puedes hacerlo.";
writemessages[948] = "\1<div style='padding:2em 2%; text-align:center; font-size:1.5em'>*** RECOLECTOR DE TESOROS ***</div>";
writemessages[949] = "Tesoro: {OREF}";
writemessages[950] = "Tesoro: {OREF}";
writemessages[951] = "Objeto: {OREF}";
writemessages[952] = "Caes por el precipicio y te estampas contra el suelo.";
writemessages[953] = "¡Vale gran mago! El pajarillo se transforma en dragón, y de un flamazo te incinera. ";
writemessages[954] = "Intenta hacerte un mapa.";
writemessages[955] = "Utiliza la magia.";
writemessages[956] = "Utiliza la magia.";
writemessages[957] = "Usa otros sentidos o la magia.";
writemessages[958] = "Utiliza la magia.";
writemessages[959] = "¡Busca luz!";
writemessages[960] = "¡Aparta la niebla!";
writemessages[961] = "Ya no hay nada más que hacer aquí.";
writemessages[962] = "¡Piensa un poco! Es fácil. ";
writemessages[963] = "Las letras están grabadas en la piedra.";
writemessages[964] = "No se ve bien.";
writemessages[965] = "Es una tierna plantita. Todavía le falta por crecer.";
writemessages[966] = "Vaya con la «plantita». Podrías trepar por ella.";
writemessages[967] = "¡Agua, agua!";
writemessages[968] = "El espejo, en estos momentos, solo refleja la ventana vacía de la habitación situada al otro lado del abismo.";
writemessages[969] = "La alfombra cubre el suelo de toda esta habitación.";
writemessages[970] = "¡Puaj! Qué asco. Están recubiertas de moho.";
writemessages[971] = "Lo único llamativo son las ventanas por las que no llegas a ver.";
writemessages[972] = "La figura te imita.";
writemessages[973] = "Neptuno las abría fácilmente con sus tres dientes.";
writemessages[974] = "Es la llave del zoológico subterráneo de los Reyes Elfos.";
writemessages[975] = "Debido a tu retorcida curiosidad te pringas todo. ¡Cochino!";
writemessages[976] = "Es un puente colgante muy peligroso porque las tablas de las que está hecho seguramente estén podridas.";
writemessages[977] = "Es un puente mágico que cambia de color según el lugar de donde lo mires.";
writemessages[978] = "La grieta es demasiado grande para poder atravesarla.";
writemessages[979] = "El hacha es muy grande. De un tamaño descomunal.";
writemessages[980] = "Es muy grande. Tanto como el hacha.";
writemessages[981] = "Dirías que no puede moverse ni un milímetro con el óxido que tiene.";
writemessages[982] = "La puerta está bien aceitada. Seguro que se abre.";
writemessages[983] = "La puerta está abierta. Parecía mentira.";
writemessages[984] = "Es enorme y fiero. Te tiemblan las piernas al verlo.";
writemessages[985] = "El agua es cristalina pero pensar que el dragón se bañaba aquí te quita las ganas de bañarte.";
writemessages[986] = "Tiene una ranura y un apartado para poner pilas.";
writemessages[987] = "Se la comería hasta un oso.";
writemessages[988] = "Aunque no es muy grande, es un charco de agua bastante limpia.";
writemessages[989] = "La niebla es tan densa aquí que podría haber cualquier cosa y no podrías verla.";
writemessages[990] = "Ves la niebla a lo lejos, espesa... misteriosa.";
writemessages[991] = "La misteriosa niebla parece comenzar aquí.";
writemessages[992] = "La niebla no es muy espesa aquí.";
writemessages[993] = "Ves la niebla quedesaparece en tenues retazos.";
writemessages[994] = "Ves la niebla a lo lejos, espesa... misteriosa.";
writemessages[995] = "La niebla es bastante molesta. Suerte que no es tan densa como en otras partes de la caverna.";
writemessages[996] = "La rampa desciende de forma bastante pronunciada.";
writemessages[997] = "La rampa acaba aquí. Qué lugar más extraño.";
writemessages[998] = "El aceite se acumula en esa zona de ahí, en un charco. Da un poco de asco.";
writemessages[999] = "El agujero es lo suficientemente grande como para que pases por él. ¿Hacia dónde va? Deberás averiguarlo tú.";
writemessages[1000] = "No se ve a dónde va a parar el agujero. Ya que quieres meter la cabeza, atraviésalo que será más seguro.";
writemessages[1001] = "Por el agujero entra la luz... mmm...";
writemessages[1002] = "Es un trono bastante grande adornados con intrincados dibujos. No sabes si significan algo.";
writemessages[1003] = "No sabrías decir qué son excepto que son antiguos trofeos pero no parecen tener mucho valor.";
writemessages[1004] = "Debían ser bellísimos cuando eran nuevos. Ahora, son solo una sombra de lo que fueron.";
writemessages[1005] = "Son pleciosos. O al menos eso clees polque son un poco lalos. No palecen tenel mucho valol.";
writemessages[1006] = "Pleciosas telas de seda natural. Piensas de qué podlía servirte pelo no se te oculle nada.";
writemessages[1007] = "La luz parece venir de otro lugar. Es totalmente artificial.";
writemessages[1008] = "Es una escalera de piedra, algo resbaladiza pero podrás usarla.";
writemessages[1009] = "No tiene mucho misterio. Es una puerta, de madera, bastante fea.";
writemessages[1010] = "Aunque la visión es espectacular, no deberías quedarte aquí mucho tiempo.";
writemessages[1011] = "Por la peste que hace aquí, ha vivido mucho tiempo aquí. ";
writemessages[1012] = "No la ves por aquí.";
writemessages[1013] = "La linterna está apagada. ";
writemessages[1014] = "La linterna está encendida. ";
writemessages[1015] = "No tiene la pila.";
writemessages[1016] = "Nivel de energia de la pila: ";
writemessages[1017] = "altísimo.";
writemessages[1018] = "¡Es demasiado fuerte para ti, forastero!";
writemessages[1019] = "¡Es demasiado fuerte para ti, forastero!";
writemessages[1020] = "La jaula está vacía.";
writemessages[1021] = "Tienes al pájaro enjaulado.";
writemessages[1022] = "Tienes al pájaro enjaulado.";
writemessages[1023] = "Está volando.";
writemessages[1024] = "¿Se podrán comer las paredes?.";
writemessages[1025] = "«En este lugar perdió el Rey Elfo una pepita de oro.»";
writemessages[1026] = "Pone XYZZY.";
writemessages[1027] = "Pone «OID».";
writemessages[1028] = "Pone: «GRACIAS POR HABER TRAÍDO LUZ A ESTA TRISTE HABITACIÓN»";
writemessages[1029] = "Pone: «FEE FIE FOE FOO». Lee justo después de la descripción. ¿Estás de beta tester o qué?";
writemessages[1030] = "Mmm... Aquí las paredes no tienen mucho interés.";
writemessages[1031] = "La serpiente se está poniendo nerviosa.";
writemessages[1032] = "Es una grieta tan profunda que no ves dónde acaba.";
writemessages[1033] = "La grieta es tan profunda que crees perder el conocimiento al mirar.";
writemessages[1034] = "El troll da mucho miedo. No sabes cómo puede reaccionar...";
writemessages[1035] = "Ahora ya sabes qué animal era el que hacía tanta peste.";
writemessages[1036] = "Sudas la gota gorda del calor que hace en el interior del volcán.";
writemessages[1037] = "Apesta aquí. Te recuerdan a los gases de fuera de la caverna. ";
writemessages[1038] = "La cornisa es artificial. No sabes cuánto tiempo debe hacer que está aquí.";
writemessages[1039] = "Las letras, enormes, están grabadas en la piedra de una forma muy tosca.";
writemessages[1040] = "Las letras son bastante sutiles. Están grabadas en la piedra.";
writemessages[1041] = "La botella está llena de un aceite muy denso.";
writemessages[1042] = "La botella está vacía.";
writemessages[1043] = "La botella está llena de agua.";
writemessages[1044] = "Es mágica. A ver, úsala a ver qué pasa. Aparte de eso, ";
writemessages[1045] = "Es... una piedra, redonda y bastante fea. Aparte de eso, ";
writemessages[1046] = "No ves nada que te llame la atención. Pierdes el tiempo.";
writemessages[1047] = "No ves eso por aquí.";
writemessages[1048] = "No ves {OREF} por aquí.";
writemessages[1049] = "{OREF} es un tesoro.";
writemessages[1050] = "{OREF} es un objeto.";

// LOCATION MESSAGES

total_location_messages=126;

locations = [];

locations[0] = "\1<div style='padding:2em 2%; text-align:center; font-size:1.5em'>LA AVENTURA ORIGINAL</div>\n";
locations[1] = "";
locations[2] = "";
locations[3] = "Estás justo en la frontera entre las tierras áridas del norte y la zona húmeda y boscosa del sur. Muy cerca hacia el este hay una cabaña de ladrillos rodeada por un frondoso bosque. Un río poco caudaloso fluye hacia el sur.";
locations[4] = "En campo abierto, rodeado por escasa vegetación. Un camino va hacia la cabaña abandonada y desde el este te llega una peste a azufre.";
locations[5] = "Esta es una zona muy árida donde solo crecen malezas espinosas. La fragancia azufrada ya empieza a molestar.";
locations[6] = "Estás en un terreno tapizado de lava vomitada por el activo volcán norteño. Hacia el sur hay una colinita que se eleva suavemente.";
locations[7] = "En este lugar el paisaje es alucinante, lleno de rocas erosionadas y partidas, mudos testigos de anteriores erupciones producidas por el furioso volcán del norte.";
locations[8] = "Desde la colina contemplas el fiero espectáculo de fuego, humo y cenizas producido por el volcán. Hacia el oeste, a lo lejos, y rodeada de denso bosque, se ve una casita. Una senda parte hacia el este, y al sur queda el bosque, tras el que ves una extraña torre en espiral rodeada de nubes.";
locations[9] = "¡Cuidado! Estás al borde del precipicio donde antaño se suicidaban los enanos celosos. Aquí terminan (aparte de las pasiones desenfrenadas) tanto la senda del oeste como el camino del norte.";
locations[10] = "Estás en una habitación bastante guarra. Las paredes desconchadas y el suelo roto indican que hace tiempo fue abandonada. Ves la oscura boca de un pozo por la que baja una herrumbrosa escalera.";
locations[11] = "¡Puaf! El fondo del pozo está casi seco (por suerte para ti, curiosón). Solo quedan algunos charcos malolientes de agua estancada. La estrechez de las mohosas paredes y el enorme silencio que reina hacen que tengas por única compañía el latido desbocado de tu corazón.";
locations[12] = "";
locations[13] = "";
locations[14] = "";
locations[15] = "";
locations[16] = "Te encuentras en lo profundo del bosque rodeado por densa vegetación y junto a un enorme árbol con desgajadas ramas que llegan al suelo.";
locations[17] = "Ya estás sentado entre las ramas del enorme árbol. Tienes una espléndida vista de toda la región. Al norte queda el fardón volcán. Rodeada de bosque está la casita. Hacia el oeste un profundo valle se extiende de norte a sur. En la lejanía, al sur se yergue la misteriosa espiral. Al este solo hay vacío y nubes.";
locations[18] = "En esta zona los enanos hacían sus pícnics (aunque las malas lenguas dicen que eran verdaderas orgías). Hay varias sillas junto a una mesa y un árbol con un curioso letrero.";
locations[19] = "Este es un bosquecillo muy agradable al lado este del valle. Oyes el murmullo de una corriente de agua cerca.";
locations[20] = "Aquí el bosque es bastante cerrado, con árboles por todas partes. ";
locations[21] = "Estás al comienzo de una maravillosa rampa artificial fabricada en medio del bosque, no se sabe hace cuantos años ni por quién.";
locations[22] = "Sigues en la rampa artificial construida en medio del bosque. Frente a ti ves la base de una extraña, pero bellísima estructura.";
locations[23] = "La rampa te conduce hasta un majestuoso claro. Ante ti se eleva la espiral, pulida, brillante y sobre todo impresionante. Detrás, el suelo cae bruscamente.";
locations[24] = "Estás al comienzo del valle, al lado de un alegre arroyuelo que juguetea sobre el lecho rocoso en su camino hacia el sur. Hay bosque a ambos lados.";
locations[25] = "El valle se hace más estrecho y profundo. El arroyo es cada vez menos caudaloso, y ahora no tan alegre, porque poco a poco se va filtrando por las numerosas grietas del rocoso lecho.";
locations[26] = "";
locations[27] = "";
locations[28] = "El cañón se abre en lo que fue antes una cascada y hoy solo un precipicio rocoso. Un enorme cortado parte el paisaje de este a oeste y, desde tus quinientos metros de altura, tienes una vista maravillosa de las tierras del sur. Desde el norte llega el viento a través de la garganta rocosa.";
locations[29] = "";
locations[30] = "";
locations[31] = "";
locations[32] = "Gateas trabajosamente sobre cantos rodados en un pasadizo muy bajo. El lugar es muy estrecho, con paredes poco trabajadas y llenas de humedad. Todo parece indicar que era una salida de emergencia. Una suave luminosidad te llega del este.";
locations[33] = "El camino de guijarros termina aquí, donde se acumulan todos los desechos arrastrados por el rio. La caverna se hace un poco más amplia y un misterioso cañon continúa hacia el oeste. Un enigmático texto grabado en la roca rompe la monotonía de la pared.";
locations[34] = "";
locations[35] = "El cañon se abre formando una espléndida cámara llena de pétreas cascadas doradas adornadas con rojas pinceladas de ferrita. El techo está decorado con bellas estalactitas multiformes. En el centro destaca una enorme y labrada estalagmita que se eleva majestuosa.";
locations[36] = "El rústico pasaje de escape hacia el este termina aquí. A tus pies se abre un agujero por el que escapan tenues retazos de tibia niebla.";
locations[37] = "El lado este de la enorme Cámara de las Nieblas está lleno de cúmulos de denso vapor que se deslizan silenciosamente por la estancia dificultando la visión. Hay una nota en la pared y, entre la niebla, distingues una escalera de piedra que baja aún más hacia desconocidas profundidades.";
locations[38] = "Estás junto a una enorme y ancha fisura que parte en dos la cámara. Del abismo salen desagradables ruidos de espesos borboteos y también nace la niebla, muy espesa en esta zona.";
locations[39] = "Sigues junto a la impresionante fisura, pero ahora estás junto a un bellísimo puente de mágico cristal multicolor.";
locations[40] = "Es el lado oeste de la Cámara, aquí no hay tanta niebla y puedes ver varias salidas que se abren hacia los desconocido.";
locations[41] = "";
locations[42] = "";
locations[43] = "";
locations[44] = "";
locations[45] = "";
locations[46] = "";
locations[47] = "";
locations[48] = "";
locations[49] = "";
locations[50] = "";
locations[51] = "";
locations[52] = "";
locations[53] = "Hay una máquina recargapilas con una ranura para meter monedas.";
locations[54] = "";
locations[55] = "";
locations[56] = "";
locations[57] = "";
locations[58] = "";
locations[59] = "";
locations[60] = "";
locations[61] = "";
locations[62] = "";
locations[63] = "";
locations[64] = "";
locations[65] = "";
locations[66] = "El Trono de los Reyes Elfos de las Montañas está en una impresionante habitación. Las paredes están decoradas con varios trofeos y bellos tapices que, aunque algo dañados, aún recuerdan un pasado esplendoroso.";
locations[67] = "Esta habitación es un bajo pasaje inclinado, su dirección es norte-sur y en el rocoso suelo hay un agujero que penetra aún más en las entrañas de la caverna.";
locations[68] = "Estás en la Sala Acústica, donde convergen todos los sonidos de la inmensa caverna. Cuentan que los Reyes Elfos oían aquí los conciertos ofrecidos por las hadas cantoras. En el pilar central hay, tallado en la roca, un curioso mensaje.";
locations[69] = "El mirador tiene una ventana que da al profundo abismo. El fondo se halla cubierto de espesa niebla y al lado opuesto se abre otra ventana hacia una habitación en penumbra, desde la cual te observa una extraña figura. Tambien hay un charco de agua.";
locations[70] = "";
locations[71] = "";
locations[72] = "";
locations[73] = "";
locations[74] = "";
locations[75] = "";
locations[76] = "";
locations[77] = "En la habitación marina se oye a lo lejos el sonido de las olas del mar y se respira un picante aire salado. Una enorme almeja está anclada firmemente al inclinado suelo.";
locations[78] = "Estás en un inclinado corredor de cortantes paredes. Por el centro baja una rampa de granito.";
locations[79] = "Has llegado al final del corredor inclinado, es un fondo de saco excavado en la roca donde termina la granítica rampa.";
locations[80] = "";
locations[81] = "Has encontrado la habitación secreta por donde los reyes Elfos desaparecían hacia sus correrías nocturnas. Hay un agujero en el suelo que te llevará aún mas profundo, hacia los fosos. Huele un poco a caca de dragón.";
locations[82] = "";
locations[83] = "Una galería muy alta y con humedad que le llega del norte. Arriba, colgando del techo hay un enorme espejo. En la pared, muy alto y frente al espejo, hay una ventana por la que se ven retazos de vapor ascendiendo. Hay un agujero en el suelo, por el cual se oyen campanitas chinas.";
locations[84] = "A esta laguna subterranea formada por el agua del rio del valle venía a beber y tomar baños el dragón cobarde.";
locations[85] = "";
locations[86] = "";
locations[87] = "";
locations[88] = "Estás en la famosa habitación del Queso Suizo, viendo sus paredes perforadas por miles de polimorfos agujeritos y oliendo, muy a pesar tuyo, su fortísimo aroma.";
locations[89] = "";
locations[90] = "";
locations[91] = "";
locations[92] = "El fondo del Pozo Oeste queda unos cuatro metros por debajo del salón Dos Fosos. En lo alto ves el agujero. ";
locations[93] = "Estás al lado de un depósito de aceite en el Foso Este.";
locations[94] = "La Habitación Dos Fosos es muy grande, estás en el lado oeste, cerca a uno de los fosos, y ves que la bajada es fácil debido a lo tallado de las paredes de roca.";
locations[95] = "Estás al este de la Habitación Dos Fosos, al lado de uno de los fosos. La bajada es fácil debido a lo tallado de las paredes de roca. Desde el este llega un fuerte olor.";
locations[96] = "La habitación blanda lo es porque una gruesa alfombra cubre el suelo duro de la roca y las paredes están tapizadas por espeso moho.";
locations[97] = "";
locations[98] = "La habitación Oliental estal bellamente decolada con finas sedas y pleciosos cuadlos. En el aile oilse el dulce tañido de las campanitas de viento y hasta tu sentilte un poco chinito.";
locations[99] = "";
locations[100] = "La Alcoba, lugar de retozos de los Reyes. Hoy dia vacía y olvidada. Una misteriosa luz verde sale por un estrecho pasaje al este.";
locations[101] = "La habitación mágica no necesita luz. Su enorme poder la hace vibrar y carga el aire de eléctricas motitas de energía que dan a la escena un sobrenatural resplandor verde. En el lado norte hay una puerta hacia la oscuridad.";
locations[102] = "Estás del lado suroeste de un abismo cruzado sólo por un destartalado y peligroso puente. De la enorme grieta brotan fétidos gases y se escucha el rugir de las entrañas del volcán.";
locations[103] = "Este es el lado Noreste del abismo. Del este llegan ráfagas de aire caliente y se escucha el sordo retumbar del magma hirviente.";
locations[104] = "Encima de una cornisa de unos diez metros de altura sobre un profundo cortado del que suben extraños vapores. En las paredes de húmeda roca que dan al abismo se encuentran, enfrentadas, dos ventanas.";
locations[105] = "Hacía años que la luz no rasgaba las espesas tinieblas de la habitación Negra.";
locations[106] = "El hacha y el escudo del gigante llenan casi por completo este lugar. En la pared se lee: FEE FIE FOE FOO.";
locations[107] = "";
locations[108] = "";
locations[109] = "";
locations[110] = "";
locations[111] = "";
locations[112] = "Esta habitación tiene las paredes calientes y combadas hacia dentro por la ardiente presión que soportan. Estamos tan cerca al corazón del furioso volcán que su latir hace temblar toda la estructura. Del techo cae un fino polvillo mezclado con cenizas y de los lados ruedan pequeñas rocas chamuscadas.";
locations[113] = "";
locations[114] = "";
locations[115] = "";
locations[116] = "Es un húmedo pasadizo inclinado, bastante incómodo y resbaloso que termina frente a una jaula muy fuerte, como para contener a un terrible animal. De hecho, apesta a fiera que marea.";
locations[117] = "Estás dentro de una apestosa y sucia jaula en las profundidades de la caverna. Hoy dia es lo único que resta del antaño bien surtido zoológico subterraneo.";
locations[118] = "Estás en un magnífico lago interior, frente a la espumosa Gran Cascada. En el centro hay un remolino que succiona con avaricia. La luz de tu lámpara crea en el rocío bellos juegos de luz, llegando por momentos a formar un multicolor arcoiris.";
locations[119] = "";
locations[120] = "Lo siento, no has logrado sobrevivir dentro de la Gran Caverna.";
locations[121] = "";
locations[122] = "";
locations[123] = "";
locations[124] = "";
locations[125] = "";

// CONNECTIONS

connections = [];
connections_start = [];

connections[0] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[1] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[2] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[3] = [ -1, -1, 4, 24, 10, -1, -1, -1, -1, -1, -1, -1, 10, -1, -1, -1 ];
connections[4] = [ -1, -1, 4, 3, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[5] = [ -1, -1, 5, -1, 6, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[6] = [ -1, -1, 12, 8, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[7] = [ -1, -1, 12, 9, -1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[8] = [ -1, -1, 6, 13, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[9] = [ -1, -1, 7, 0, 0, 8, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1 ];
connections[10] = [ -1, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, 0, -1, 3, -1, -1 ];
connections[11] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1 ];
connections[12] = [ -1, -1, 0, 7, 12, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1 ];
connections[13] = [ -1, -1, 13, 16, 13, 14, 13, 13, 13, 15, -1, -1, -1, -1, -1, -1 ];
connections[14] = [ -1, -1, 14, 14, 13, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[15] = [ -1, -1, 14, 18, 15, 14, -1, -1, 16, -1, -1, -1, -1, -1, -1, -1 ];
connections[16] = [ -1, -1, 15, 14, 14, 14, -1, -1, -1, -1, 17, -1, -1, -1, -1, -1 ];
connections[17] = [ -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, 16, -1, -1, -1, -1 ];
connections[18] = [ -1, -1, -1, -1, 19, 24, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[19] = [ -1, -1, -1, 20, -1, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[20] = [ -1, -1, 19, 21, -1, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[21] = [ -1, -1, 20, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[22] = [ -1, -1, 21, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[23] = [ -1, -1, 22, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[24] = [ -1, -1, 3, 25, 18, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[25] = [ -1, -1, 24, 26, 14, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[26] = [ -1, -1, 25, 28, 20, 20, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1 ];
connections[27] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[28] = [ -1, -1, 26, -1, 20, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[29] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[30] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[31] = [ -1, -1, -1, -1, -1, 32, -1, -1, -1, -1, -1, -1, -1, 31, -1, -1 ];
connections[32] = [ -1, -1, -1, -1, 31, 33, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[33] = [ -1, -1, -1, -1, 32, 35, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[34] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[35] = [ -1, -1, -1, -1, 33, 36, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[36] = [ -1, -1, -1, -1, 35, -1, -1, -1, -1, -1, -1, 37, -1, -1, -1, -1 ];
connections[37] = [ -1, -1, -1, -1, -1, 39, -1, -1, -1, -1, 36, 66, -1, -1, -1, -1 ];
connections[38] = [ -1, -1, -1, -1, 37, 40, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[39] = [ -1, -1, -1, -1, 37, 40, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[40] = [ -1, -1, 48, 42, 39, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[41] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[42] = [ -1, -1, 40, 42, 42, 42, 40, 40, 40, 40, 43, 42, -1, -1, -1, -1 ];
connections[43] = [ -1, -1, 43, 43, 42, 43, 82, 42, 42, 44, 42, 42, -1, -1, -1, -1 ];
connections[44] = [ -1, -1, 44, 44, 44, 45, 42, 44, 43, 43, 43, 35, -1, -1, -1, -1 ];
connections[45] = [ -1, -1, 44, 44, 45, 44, 45, 45, 45, 45, 43, 46, -1, -1, -1, -1 ];
connections[46] = [ -1, -1, 45, 45, 44, 46, 47, 44, 45, 44, 46, 46, -1, -1, -1, -1 ];
connections[47] = [ -1, -1, 46, 47, 44, 45, 46, 46, 44, 46, 45, 47, -1, -1, -1, -1 ];
connections[48] = [ -1, -1, 49, 40, 48, 48, -1, -1, -1, -1, 48, 48, -1, -1, -1, -1 ];
connections[49] = [ -1, -1, 49, 50, 49, 49, -1, -1, -1, -1, 49, 48, -1, -1, -1, -1 ];
connections[50] = [ -1, -1, 49, 50, 51, 50, -1, -1, -1, -1, 50, 50, -1, -1, -1, -1 ];
connections[51] = [ -1, -1, 51, 51, 50, 52, -1, -1, -1, -1, 51, 51, -1, -1, -1, -1 ];
connections[52] = [ -1, -1, 52, 51, 52, 52, -1, -1, -1, -1, 52, 53, -1, -1, -1, -1 ];
connections[53] = [ -1, -1, 53, 53, 53, 53, -1, -1, -1, -1, 52, 53, -1, -1, -1, -1 ];
connections[54] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[55] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[56] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[57] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[58] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[59] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[60] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[61] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[62] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[63] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[64] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[65] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[66] = [ -1, -1, 0, -1, -1, -1, -1, -1, -1, 81, 37, -1, -1, -1, -1, -1 ];
connections[67] = [ -1, -1, 68, 66, -1, -1, -1, -1, -1, -1, -1, 88, -1, -1, -1, -1 ];
connections[68] = [ -1, -1, -1, 67, -1, 69, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[69] = [ -1, -1, -1, -1, 68, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[70] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[71] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[72] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[73] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[74] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[75] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[76] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[77] = [ -1, -1, -1, 88, -1, -1, -1, -1, -1, -1, -1, 78, -1, -1, -1, -1 ];
connections[78] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 77, 79, -1, -1, -1, -1 ];
connections[79] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 78, -1, -1, -1, -1, -1 ];
connections[80] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[81] = [ -1, -1, -1, -1, -1, 82, 66, -1, -1, -1, -1, 94, -1, -1, -1, -1 ];
connections[82] = [ -1, -1, 0, -1, 81, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[83] = [ -1, -1, 84, 82, -1, -1, -1, -1, -1, -1, -1, 98, -1, -1, -1, -1 ];
connections[84] = [ -1, -1, -1, 83, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[85] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[86] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[87] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[88] = [ -1, -1, 77, 44, 96, 95, -1, 98, -1, -1, 67, -1, -1, -1, -1, -1 ];
connections[89] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[90] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[91] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[92] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 94, -1, -1, -1, -1, -1 ];
connections[93] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 95, -1, -1, -1, -1, -1 ];
connections[94] = [ -1, -1, -1, -1, 95, -1, -1, -1, -1, -1, 81, 92, -1, -1, -1, -1 ];
connections[95] = [ -1, -1, -1, -1, 88, 94, -1, -1, -1, -1, -1, 93, -1, -1, -1, -1 ];
connections[96] = [ -1, -1, -1, -1, -1, 88, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[97] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[98] = [ -1, -1, -1, -1, -1, -1, 100, -1, 88, 104, 83, -1, -1, -1, -1, -1 ];
connections[99] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[100] = [ -1, -1, -1, -1, 0, -1, -1, -1, -1, 98, -1, -1, -1, -1, -1, -1 ];
connections[101] = [ -1, -1, 105, -1, -1, 0, -1, -1, -1, -1, -1, -1, 105, -1, -1, -1 ];
connections[102] = [ -1, -1, 0, 104, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[103] = [ -1, -1, -1, 0, 112, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1 ];
connections[104] = [ -1, -1, 102, 98, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[105] = [ -1, -1, -1, 101, -1, -1, -1, -1, -1, -1, -1, -1, -1, 101, -1, -1 ];
connections[106] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 92, 0, -1, -1, -1 ];
connections[107] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[108] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[109] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[110] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[111] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[112] = [ -1, -1, -1, -1, -1, 103, -1, -1, -1, -1, -1, 116, -1, -1, -1, -1 ];
connections[113] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[114] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[115] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[116] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 112, -1, 0, -1, -1, -1 ];
connections[117] = [ -1, -1, -1, -1, 116, -1, -1, -1, -1, -1, -1, -1, -1, 116, -1, -1 ];
connections[118] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 104, -1, -1, -1, -1 ];
connections[119] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[120] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[121] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[122] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[123] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[124] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections[125] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];

connections_start[0] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[1] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[2] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[3] = [ -1, -1, 4, 24, 10, -1, -1, -1, -1, -1, -1, -1, 10, -1, -1, -1 ];
connections_start[4] = [ -1, -1, 4, 3, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[5] = [ -1, -1, 5, -1, 6, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[6] = [ -1, -1, 12, 8, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[7] = [ -1, -1, 12, 9, -1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[8] = [ -1, -1, 6, 13, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[9] = [ -1, -1, 7, 0, 0, 8, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1 ];
connections_start[10] = [ -1, -1, -1, -1, -1, 3, -1, -1, -1, -1, -1, 0, -1, 3, -1, -1 ];
connections_start[11] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1 ];
connections_start[12] = [ -1, -1, 0, 7, 12, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1 ];
connections_start[13] = [ -1, -1, 13, 16, 13, 14, 13, 13, 13, 15, -1, -1, -1, -1, -1, -1 ];
connections_start[14] = [ -1, -1, 14, 14, 13, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[15] = [ -1, -1, 14, 18, 15, 14, -1, -1, 16, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[16] = [ -1, -1, 15, 14, 14, 14, -1, -1, -1, -1, 17, -1, -1, -1, -1, -1 ];
connections_start[17] = [ -1, -1, 0, 0, 0, 0, -1, -1, -1, -1, -1, 16, -1, -1, -1, -1 ];
connections_start[18] = [ -1, -1, -1, -1, 19, 24, -1, 3, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[19] = [ -1, -1, -1, 20, -1, 18, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[20] = [ -1, -1, 19, 21, -1, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[21] = [ -1, -1, 20, 22, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[22] = [ -1, -1, 21, 23, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[23] = [ -1, -1, 22, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[24] = [ -1, -1, 3, 25, 18, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[25] = [ -1, -1, 24, 26, 14, 13, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[26] = [ -1, -1, 25, 28, 20, 20, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1 ];
connections_start[27] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[28] = [ -1, -1, 26, -1, 20, 20, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[29] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[30] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[31] = [ -1, -1, -1, -1, -1, 32, -1, -1, -1, -1, -1, -1, -1, 31, -1, -1 ];
connections_start[32] = [ -1, -1, -1, -1, 31, 33, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[33] = [ -1, -1, -1, -1, 32, 35, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[34] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[35] = [ -1, -1, -1, -1, 33, 36, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[36] = [ -1, -1, -1, -1, 35, -1, -1, -1, -1, -1, -1, 37, -1, -1, -1, -1 ];
connections_start[37] = [ -1, -1, -1, -1, -1, 39, -1, -1, -1, -1, 36, 66, -1, -1, -1, -1 ];
connections_start[38] = [ -1, -1, -1, -1, 37, 40, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[39] = [ -1, -1, -1, -1, 37, 40, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[40] = [ -1, -1, 48, 42, 39, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[41] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[42] = [ -1, -1, 40, 42, 42, 42, 40, 40, 40, 40, 43, 42, -1, -1, -1, -1 ];
connections_start[43] = [ -1, -1, 43, 43, 42, 43, 82, 42, 42, 44, 42, 42, -1, -1, -1, -1 ];
connections_start[44] = [ -1, -1, 44, 44, 44, 45, 42, 44, 43, 43, 43, 35, -1, -1, -1, -1 ];
connections_start[45] = [ -1, -1, 44, 44, 45, 44, 45, 45, 45, 45, 43, 46, -1, -1, -1, -1 ];
connections_start[46] = [ -1, -1, 45, 45, 44, 46, 47, 44, 45, 44, 46, 46, -1, -1, -1, -1 ];
connections_start[47] = [ -1, -1, 46, 47, 44, 45, 46, 46, 44, 46, 45, 47, -1, -1, -1, -1 ];
connections_start[48] = [ -1, -1, 49, 40, 48, 48, -1, -1, -1, -1, 48, 48, -1, -1, -1, -1 ];
connections_start[49] = [ -1, -1, 49, 50, 49, 49, -1, -1, -1, -1, 49, 48, -1, -1, -1, -1 ];
connections_start[50] = [ -1, -1, 49, 50, 51, 50, -1, -1, -1, -1, 50, 50, -1, -1, -1, -1 ];
connections_start[51] = [ -1, -1, 51, 51, 50, 52, -1, -1, -1, -1, 51, 51, -1, -1, -1, -1 ];
connections_start[52] = [ -1, -1, 52, 51, 52, 52, -1, -1, -1, -1, 52, 53, -1, -1, -1, -1 ];
connections_start[53] = [ -1, -1, 53, 53, 53, 53, -1, -1, -1, -1, 52, 53, -1, -1, -1, -1 ];
connections_start[54] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[55] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[56] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[57] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[58] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[59] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[60] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[61] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[62] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[63] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[64] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[65] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[66] = [ -1, -1, 0, -1, -1, -1, -1, -1, -1, 81, 37, -1, -1, -1, -1, -1 ];
connections_start[67] = [ -1, -1, 68, 66, -1, -1, -1, -1, -1, -1, -1, 88, -1, -1, -1, -1 ];
connections_start[68] = [ -1, -1, -1, 67, -1, 69, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[69] = [ -1, -1, -1, -1, 68, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[70] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[71] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[72] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[73] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[74] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[75] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[76] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[77] = [ -1, -1, -1, 88, -1, -1, -1, -1, -1, -1, -1, 78, -1, -1, -1, -1 ];
connections_start[78] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 77, 79, -1, -1, -1, -1 ];
connections_start[79] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 78, -1, -1, -1, -1, -1 ];
connections_start[80] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[81] = [ -1, -1, -1, -1, -1, 82, 66, -1, -1, -1, -1, 94, -1, -1, -1, -1 ];
connections_start[82] = [ -1, -1, 0, -1, 81, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[83] = [ -1, -1, 84, 82, -1, -1, -1, -1, -1, -1, -1, 98, -1, -1, -1, -1 ];
connections_start[84] = [ -1, -1, -1, 83, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[85] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[86] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[87] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[88] = [ -1, -1, 77, 44, 96, 95, -1, 98, -1, -1, 67, -1, -1, -1, -1, -1 ];
connections_start[89] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[90] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[91] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[92] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 94, -1, -1, -1, -1, -1 ];
connections_start[93] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 95, -1, -1, -1, -1, -1 ];
connections_start[94] = [ -1, -1, -1, -1, 95, -1, -1, -1, -1, -1, 81, 92, -1, -1, -1, -1 ];
connections_start[95] = [ -1, -1, -1, -1, 88, 94, -1, -1, -1, -1, -1, 93, -1, -1, -1, -1 ];
connections_start[96] = [ -1, -1, -1, -1, -1, 88, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[97] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[98] = [ -1, -1, -1, -1, -1, -1, 100, -1, 88, 104, 83, -1, -1, -1, -1, -1 ];
connections_start[99] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[100] = [ -1, -1, -1, -1, 0, -1, -1, -1, -1, 98, -1, -1, -1, -1, -1, -1 ];
connections_start[101] = [ -1, -1, 105, -1, -1, 0, -1, -1, -1, -1, -1, -1, 105, -1, -1, -1 ];
connections_start[102] = [ -1, -1, 0, 104, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[103] = [ -1, -1, -1, 0, 112, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1 ];
connections_start[104] = [ -1, -1, 102, 98, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[105] = [ -1, -1, -1, 101, -1, -1, -1, -1, -1, -1, -1, -1, -1, 101, -1, -1 ];
connections_start[106] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 92, 0, -1, -1, -1 ];
connections_start[107] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[108] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[109] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[110] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[111] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[112] = [ -1, -1, -1, -1, -1, 103, -1, -1, -1, -1, -1, 116, -1, -1, -1, -1 ];
connections_start[113] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[114] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[115] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[116] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 112, -1, 0, -1, -1, -1 ];
connections_start[117] = [ -1, -1, -1, -1, 116, -1, -1, -1, -1, -1, -1, -1, -1, 116, -1, -1 ];
connections_start[118] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 104, -1, -1, -1, -1 ];
connections_start[119] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[120] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[121] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[122] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[123] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[124] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];
connections_start[125] = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ];


resources=[];
resources.push([RESOURCE_TYPE_IMG, 261, "dat/dragon.png"]);
resources.push([RESOURCE_TYPE_IMG, 260, "dat/enanomalauva.png"]);
resources.push([RESOURCE_TYPE_IMG, 257, "dat/intro.png"]);
resources.push([RESOURCE_TYPE_IMG, 0, "dat/loc00.svg"]);
resources.push([RESOURCE_TYPE_IMG, 3, "dat/loc03.png"]);
resources.push([RESOURCE_TYPE_IMG, 4, "dat/loc04.png"]);
resources.push([RESOURCE_TYPE_IMG, 5, "dat/loc05.png"]);
resources.push([RESOURCE_TYPE_IMG, 6, "dat/loc06.png"]);
resources.push([RESOURCE_TYPE_IMG, 7, "dat/loc07.png"]);
resources.push([RESOURCE_TYPE_IMG, 8, "dat/loc08.png"]);
resources.push([RESOURCE_TYPE_IMG, 9, "dat/loc09.png"]);
resources.push([RESOURCE_TYPE_IMG, 10, "dat/loc10.png"]);
resources.push([RESOURCE_TYPE_IMG, 100, "dat/loc100.png"]);
resources.push([RESOURCE_TYPE_IMG, 101, "dat/loc101.png"]);
resources.push([RESOURCE_TYPE_IMG, 102, "dat/loc102.png"]);
resources.push([RESOURCE_TYPE_IMG, 103, "dat/loc103.png"]);
resources.push([RESOURCE_TYPE_IMG, 104, "dat/loc104.png"]);
resources.push([RESOURCE_TYPE_IMG, 105, "dat/loc105.png"]);
resources.push([RESOURCE_TYPE_IMG, 106, "dat/loc106.png"]);
resources.push([RESOURCE_TYPE_IMG, 11, "dat/loc11.png"]);
resources.push([RESOURCE_TYPE_IMG, 112, "dat/loc112.png"]);
resources.push([RESOURCE_TYPE_IMG, 116, "dat/loc116.png"]);
resources.push([RESOURCE_TYPE_IMG, 117, "dat/loc117.png"]);
resources.push([RESOURCE_TYPE_IMG, 262, "dat/loc117osolibre.png"]);
resources.push([RESOURCE_TYPE_IMG, 263, "dat/loc117vacia.png"]);
resources.push([RESOURCE_TYPE_IMG, 118, "dat/loc118.png"]);
resources.push([RESOURCE_TYPE_IMG, 12, "dat/loc12.png"]);
resources.push([RESOURCE_TYPE_IMG, 13, "dat/loc13.png"]);
resources.push([RESOURCE_TYPE_IMG, 14, "dat/loc14.png"]);
resources.push([RESOURCE_TYPE_IMG, 15, "dat/loc15.png"]);
resources.push([RESOURCE_TYPE_IMG, 16, "dat/loc16.png"]);
resources.push([RESOURCE_TYPE_IMG, 17, "dat/loc17.png"]);
resources.push([RESOURCE_TYPE_IMG, 18, "dat/loc18.png"]);
resources.push([RESOURCE_TYPE_IMG, 19, "dat/loc19.png"]);
resources.push([RESOURCE_TYPE_IMG, 20, "dat/loc20.png"]);
resources.push([RESOURCE_TYPE_IMG, 21, "dat/loc21.png"]);
resources.push([RESOURCE_TYPE_IMG, 22, "dat/loc22.png"]);
resources.push([RESOURCE_TYPE_IMG, 23, "dat/loc23.png"]);
resources.push([RESOURCE_TYPE_IMG, 24, "dat/loc24.png"]);
resources.push([RESOURCE_TYPE_IMG, 25, "dat/loc25.png"]);
resources.push([RESOURCE_TYPE_IMG, 26, "dat/loc26.png"]);
resources.push([RESOURCE_TYPE_IMG, 27, "dat/loc26abierta.png"]);
resources.push([RESOURCE_TYPE_IMG, 259, "dat/loc26sincand.png"]);
resources.push([RESOURCE_TYPE_IMG, 28, "dat/loc28.png"]);
resources.push([RESOURCE_TYPE_IMG, 29, "dat/loc29.png"]);
resources.push([RESOURCE_TYPE_IMG, 30, "dat/loc30.png"]);
resources.push([RESOURCE_TYPE_IMG, 31, "dat/loc31.png"]);
resources.push([RESOURCE_TYPE_IMG, 32, "dat/loc32.png"]);
resources.push([RESOURCE_TYPE_IMG, 33, "dat/loc33.png"]);
resources.push([RESOURCE_TYPE_IMG, 35, "dat/loc35.png"]);
resources.push([RESOURCE_TYPE_IMG, 36, "dat/loc36.png"]);
resources.push([RESOURCE_TYPE_IMG, 37, "dat/loc37.png"]);
resources.push([RESOURCE_TYPE_IMG, 38, "dat/loc38.png"]);
resources.push([RESOURCE_TYPE_IMG, 39, "dat/loc39.png"]);
resources.push([RESOURCE_TYPE_IMG, 40, "dat/loc40.png"]);
resources.push([RESOURCE_TYPE_IMG, 42, "dat/loc42.png"]);
resources.push([RESOURCE_TYPE_IMG, 48, "dat/loc48.png"]);
resources.push([RESOURCE_TYPE_IMG, 66, "dat/loc66.png"]);
resources.push([RESOURCE_TYPE_IMG, 67, "dat/loc67.png"]);
resources.push([RESOURCE_TYPE_IMG, 68, "dat/loc68.png"]);
resources.push([RESOURCE_TYPE_IMG, 69, "dat/loc69.png"]);
resources.push([RESOURCE_TYPE_IMG, 77, "dat/loc77.png"]);
resources.push([RESOURCE_TYPE_IMG, 78, "dat/loc78.png"]);
resources.push([RESOURCE_TYPE_IMG, 79, "dat/loc79.png"]);
resources.push([RESOURCE_TYPE_IMG, 81, "dat/loc81.png"]);
resources.push([RESOURCE_TYPE_IMG, 82, "dat/loc82.png"]);
resources.push([RESOURCE_TYPE_IMG, 83, "dat/loc83.png"]);
resources.push([RESOURCE_TYPE_IMG, 84, "dat/loc84.png"]);
resources.push([RESOURCE_TYPE_IMG, 88, "dat/loc88.png"]);
resources.push([RESOURCE_TYPE_IMG, 92, "dat/loc92.png"]);
resources.push([RESOURCE_TYPE_IMG, 93, "dat/loc93.png"]);
resources.push([RESOURCE_TYPE_IMG, 94, "dat/loc94.png"]);
resources.push([RESOURCE_TYPE_IMG, 96, "dat/loc96.png"]);
resources.push([RESOURCE_TYPE_IMG, 98, "dat/loc98.png"]);
resources.push([RESOURCE_TYPE_IMG, 264, "dat/pirata.png"]);


 //OBJECTS

objects = [];
objectsAttrLO = [];
objectsAttrHI = [];
objectsLocation = [];
objectsNoun = [];
objectsAdjective = [];
objectsWeight = [];
objectsAttrLO_start = [];
objectsAttrHI_start = [];
objectsLocation_start = [];
objectsWeight_start = [];

objects[0] = "una linterna {TEXTPIC|iconolinterna.svg|0}";
objectsNoun[0] = 50;
objectsAdjective[0] = 255;
objectsLocation[0] = 252;
objectsLocation_start[0] = 252;
objectsWeight[0] = 1;
objectsWeight_start[0] = 1;
objectsAttrLO[0] = 524548;
objectsAttrLO_start[0] = 524548;
objectsAttrHI[0] = 0;
objectsAttrHI_start[0] = 0;

objects[1] = "una moneda {TEXTPIC|iconomoneda.svg|0}";
objectsNoun[1] = 51;
objectsAdjective[1] = 255;
objectsLocation[1] = 252;
objectsLocation_start[1] = 252;
objectsWeight[1] = 1;
objectsWeight_start[1] = 1;
objectsAttrLO[1] = 256;
objectsAttrLO_start[1] = 256;
objectsAttrHI[1] = 0;
objectsAttrHI_start[1] = 0;

objects[2] = "una tortilla {TEXTPIC|iconotortilla.svg|0}";
objectsNoun[2] = 52;
objectsAdjective[2] = 255;
objectsLocation[2] = 252;
objectsLocation_start[2] = 252;
objectsWeight[2] = 1;
objectsWeight_start[2] = 1;
objectsAttrLO[2] = 288;
objectsAttrLO_start[2] = 288;
objectsAttrHI[2] = 0;
objectsAttrHI_start[2] = 0;

objects[3] = "una botella {TEXTPIC|iconobotella.svg|0}";
objectsNoun[3] = 53;
objectsAdjective[3] = 255;
objectsLocation[3] = 28;
objectsLocation_start[3] = 28;
objectsWeight[3] = 1;
objectsWeight_start[3] = 1;
objectsAttrLO[3] = 4194560;
objectsAttrLO_start[3] = 4194560;
objectsAttrHI[3] = 0;
objectsAttrHI_start[3] = 0;

objects[4] = "una llave {TEXTPIC|iconollave.svg|0}";
objectsNoun[4] = 54;
objectsAdjective[4] = 255;
objectsLocation[4] = 252;
objectsLocation_start[4] = 252;
objectsWeight[4] = 1;
objectsWeight_start[4] = 1;
objectsAttrLO[4] = 256;
objectsAttrLO_start[4] = 256;
objectsAttrHI[4] = 0;
objectsAttrHI_start[4] = 0;

objects[5] = "una pila eléctrica {TEXTPIC|iconopila.svg|0}";
objectsNoun[5] = 55;
objectsAdjective[5] = 255;
objectsLocation[5] = 8;
objectsLocation_start[5] = 8;
objectsWeight[5] = 1;
objectsWeight_start[5] = 1;
objectsAttrLO[5] = 256;
objectsAttrLO_start[5] = 256;
objectsAttrHI[5] = 0;
objectsAttrHI_start[5] = 0;

objects[6] = "una pareja de botas {TEXTPIC|iconobotas.svg|0}";
objectsNoun[6] = 101;
objectsAdjective[6] = 255;
objectsLocation[6] = 23;
objectsLocation_start[6] = 23;
objectsWeight[6] = 1;
objectsWeight_start[6] = 1;
objectsAttrLO[6] = 258;
objectsAttrLO_start[6] = 258;
objectsAttrHI[6] = 0;
objectsAttrHI_start[6] = 0;

objects[7] = "una jaula {TEXTPIC|iconojaula.svg|0}";
objectsNoun[7] = 129;
objectsAdjective[7] = 255;
objectsLocation[7] = 32;
objectsLocation_start[7] = 32;
objectsWeight[7] = 1;
objectsWeight_start[7] = 1;
objectsAttrLO[7] = 256;
objectsAttrLO_start[7] = 256;
objectsAttrHI[7] = 0;
objectsAttrHI_start[7] = 0;

objects[8] = "una varita mágica {TEXTPIC|iconovarita.svg|0}";
objectsNoun[8] = 168;
objectsAdjective[8] = 255;
objectsLocation[8] = 33;
objectsLocation_start[8] = 33;
objectsWeight[8] = 1;
objectsWeight_start[8] = 1;
objectsAttrLO[8] = 256;
objectsAttrLO_start[8] = 256;
objectsAttrHI[8] = 0;
objectsAttrHI_start[8] = 0;

objects[9] = "una botella con aceite {TEXTPIC|iconobotella.svg|0}";
objectsNoun[9] = 53;
objectsAdjective[9] = 255;
objectsLocation[9] = 252;
objectsLocation_start[9] = 252;
objectsWeight[9] = 1;
objectsWeight_start[9] = 1;
objectsAttrLO[9] = 256;
objectsAttrLO_start[9] = 256;
objectsAttrHI[9] = 0;
objectsAttrHI_start[9] = 0;

objects[10] = "un hueso humano algo chamuscado {TEXTPIC|iconohueso.svg|0}";
objectsNoun[10] = 150;
objectsAdjective[10] = 255;
objectsLocation[10] = 82;
objectsLocation_start[10] = 82;
objectsWeight[10] = 1;
objectsWeight_start[10] = 1;
objectsAttrLO[10] = 2048;
objectsAttrLO_start[10] = 2048;
objectsAttrHI[10] = 0;
objectsAttrHI_start[10] = 0;

objects[11] = "una almohada {TEXTPIC|iconoalmohada.svg|0}";
objectsNoun[11] = 127;
objectsAdjective[11] = 255;
objectsLocation[11] = 96;
objectsLocation_start[11] = 96;
objectsWeight[11] = 1;
objectsWeight_start[11] = 1;
objectsAttrLO[11] = 256;
objectsAttrLO_start[11] = 256;
objectsAttrHI[11] = 0;
objectsAttrHI_start[11] = 0;

objects[12] = "un hacha {TEXTPIC|iconohacha.svg|0}";
objectsNoun[12] = 149;
objectsAdjective[12] = 255;
objectsLocation[12] = 252;
objectsLocation_start[12] = 252;
objectsWeight[12] = 1;
objectsWeight_start[12] = 1;
objectsAttrLO[12] = 2048;
objectsAttrLO_start[12] = 2048;
objectsAttrHI[12] = 0;
objectsAttrHI_start[12] = 0;

objects[13] = "un canto rodado {TEXTPIC|iconopiedra.svg|0}";
objectsNoun[13] = 135;
objectsAdjective[13] = 255;
objectsLocation[13] = 32;
objectsLocation_start[13] = 32;
objectsWeight[13] = 1;
objectsWeight_start[13] = 1;
objectsAttrLO[13] = 2048;
objectsAttrLO_start[13] = 2048;
objectsAttrHI[13] = 0;
objectsAttrHI_start[13] = 0;

objects[14] = "una pepita de oro {TEXTPIC|iconopepita.svg|0}";
objectsNoun[14] = 159;
objectsAdjective[14] = 255;
objectsLocation[14] = 252;
objectsLocation_start[14] = 252;
objectsWeight[14] = 1;
objectsWeight_start[14] = 1;
objectsAttrLO[14] = 256;
objectsAttrLO_start[14] = 256;
objectsAttrHI[14] = 0;
objectsAttrHI_start[14] = 0;

objects[15] = "un diamante {TEXTPIC|iconodiamante.svg|0}";
objectsNoun[15] = 136;
objectsAdjective[15] = 255;
objectsLocation[15] = 39;
objectsLocation_start[15] = 39;
objectsWeight[15] = 1;
objectsWeight_start[15] = 1;
objectsAttrLO[15] = 16777216;
objectsAttrLO_start[15] = 16777216;
objectsAttrHI[15] = 0;
objectsAttrHI_start[15] = 0;

objects[16] = "una barra de titanio {TEXTPIC|iconotitanio.svg|0}";
objectsNoun[16] = 128;
objectsAdjective[16] = 255;
objectsLocation[16] = 67;
objectsLocation_start[16] = 67;
objectsWeight[16] = 1;
objectsWeight_start[16] = 1;
objectsAttrLO[16] = 16777216;
objectsAttrLO_start[16] = 16777216;
objectsAttrHI[16] = 0;
objectsAttrHI_start[16] = 0;

objects[17] = "una joya {TEXTPIC|iconojoya.svg|0}";
objectsNoun[17] = 153;
objectsAdjective[17] = 255;
objectsLocation[17] = 252;
objectsLocation_start[17] = 252;
objectsWeight[17] = 1;
objectsWeight_start[17] = 1;
objectsAttrLO[17] = 16777472;
objectsAttrLO_start[17] = 16777472;
objectsAttrHI[17] = 0;
objectsAttrHI_start[17] = 0;

objects[18] = "unas especias indias {TEXTPIC|iconoespecias.svg|0}";
objectsNoun[18] = 138;
objectsAdjective[18] = 255;
objectsLocation[18] = 92;
objectsLocation_start[18] = 92;
objectsWeight[18] = 1;
objectsWeight_start[18] = 1;
objectsAttrLO[18] = 16777216;
objectsAttrLO_start[18] = 16777216;
objectsAttrHI[18] = 0;
objectsAttrHI_start[18] = 0;

objects[19] = "una alfombra persa {TEXTPIC|iconoalfombra.svg|0}";
objectsNoun[19] = 125;
objectsAdjective[19] = 255;
objectsLocation[19] = 252;
objectsLocation_start[19] = 252;
objectsWeight[19] = 1;
objectsWeight_start[19] = 1;
objectsAttrLO[19] = 16777472;
objectsAttrLO_start[19] = 16777472;
objectsAttrHI[19] = 0;
objectsAttrHI_start[19] = 0;

objects[20] = "un tridente marino {TEXTPIC|iconotridente.svg|0}";
objectsNoun[20] = 167;
objectsAdjective[20] = 255;
objectsLocation[20] = 118;
objectsLocation_start[20] = 118;
objectsWeight[20] = 1;
objectsWeight_start[20] = 1;
objectsAttrLO[20] = 16777216;
objectsAttrLO_start[20] = 16777216;
objectsAttrHI[20] = 0;
objectsAttrHI_start[20] = 0;

objects[21] = "una gran perla {TEXTPIC|iconoperla.svg|0}";
objectsNoun[21] = 160;
objectsAdjective[21] = 255;
objectsLocation[21] = 252;
objectsLocation_start[21] = 252;
objectsWeight[21] = 1;
objectsWeight_start[21] = 1;
objectsAttrLO[21] = 16777472;
objectsAttrLO_start[21] = 16777472;
objectsAttrHI[21] = 0;
objectsAttrHI_start[21] = 0;

objects[22] = "un huevo de oro {TEXTPIC|iconohuevo.svg|0}";
objectsNoun[22] = 151;
objectsAdjective[22] = 255;
objectsLocation[22] = 252;
objectsLocation_start[22] = 252;
objectsWeight[22] = 1;
objectsWeight_start[22] = 1;
objectsAttrLO[22] = 16777216;
objectsAttrLO_start[22] = 16777216;
objectsAttrHI[22] = 0;
objectsAttrHI_start[22] = 0;

objects[23] = "una cadena de plata {TEXTPIC|iconocadena.svg|0}";
objectsNoun[23] = 134;
objectsAdjective[23] = 255;
objectsLocation[23] = 252;
objectsLocation_start[23] = 252;
objectsWeight[23] = 1;
objectsWeight_start[23] = 1;
objectsAttrLO[23] = 16777472;
objectsAttrLO_start[23] = 16777472;
objectsAttrHI[23] = 0;
objectsAttrHI_start[23] = 0;

objects[24] = "una pirámide de platino {TEXTPIC|iconopiramide.svg|0}";
objectsNoun[24] = 162;
objectsAdjective[24] = 255;
objectsLocation[24] = 105;
objectsLocation_start[24] = 105;
objectsWeight[24] = 1;
objectsWeight_start[24] = 1;
objectsAttrLO[24] = 16777472;
objectsAttrLO_start[24] = 16777472;
objectsAttrHI[24] = 0;
objectsAttrHI_start[24] = 0;

objects[25] = "una esmeralda {TEXTPIC|iconoesmeralda.svg|0}";
objectsNoun[25] = 137;
objectsAdjective[25] = 255;
objectsLocation[25] = 100;
objectsLocation_start[25] = 100;
objectsWeight[25] = 1;
objectsWeight_start[25] = 1;
objectsAttrLO[25] = 16777472;
objectsAttrLO_start[25] = 16777472;
objectsAttrHI[25] = 0;
objectsAttrHI_start[25] = 0;

objects[26] = "un jarrón chino {TEXTPIC|iconojarron.svg|0}";
objectsNoun[26] = 152;
objectsAdjective[26] = 255;
objectsLocation[26] = 98;
objectsLocation_start[26] = 98;
objectsWeight[26] = 1;
objectsWeight_start[26] = 1;
objectsAttrLO[26] = 16777216;
objectsAttrLO_start[26] = 16777216;
objectsAttrHI[26] = 0;
objectsAttrHI_start[26] = 0;

objects[27] = "un garfio de oro {TEXTPIC|iconogarfio.svg|0}";
objectsNoun[27] = 148;
objectsAdjective[27] = 255;
objectsLocation[27] = 47;
objectsLocation_start[27] = 47;
objectsWeight[27] = 1;
objectsWeight_start[27] = 1;
objectsAttrLO[27] = 16777216;
objectsAttrLO_start[27] = 16777216;
objectsAttrHI[27] = 0;
objectsAttrHI_start[27] = 0;

last_object_number =  27; 
carried_objects = 0;
total_object_messages=28;

