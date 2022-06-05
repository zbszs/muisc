window.addEventListener('load', function () {
    var arr = ['123.mp3',
        '3 Sud Est - Te Plac.m4a',
        '3LAU、Said The Sky、NéONHèART - Fire.mp3',
        '7 Eleven - Let Go (The Train Vrs. Edit).mp3',
        'A-Lusion、Scope Dj - Between Worlds.mp3',
        'Actium - Here With You.mp3',
        'Activ - Doar Cu Tine.mp3',
        'Aero Chord - Boundless.mp3',
        'Aero Chord - Surface.mp3',
        'Afrojack - Keep Our Love Alive.m4a',
        'Afrojack - Rock The House.m4a',
        'Agent K、Curtis B、DJ Fixx、Keith MacKenzie - Hit You Wit It (KMFX Remix).mp3',
        'Ahrix - Nova.m4a',
        'Ahxello - Infinity.mp3',
        'Air - Sexy Boy.mp3',
        'Akon - Keep Up.mp3',
        'Akon、Flipsyde - Toss It Up.mp3',
        'Alan Walker - 135.mp3',
        'Alan Walker - Fade.mp3',
        'Alan Walker - Flying Dreams.mp3',
        'Alan Walker - Spectre.m4a',
        'Alan Walker、Coldplay - Hymn For The Weekend.mp3',
        'Alan Walker、Dash Berlin - Shelter(Alan Walker Remix).mp3',
        'Alchemist Project - Go Down (Radio Edit).mp3',
        'Aleesia、DVBBS、Martin Garrix、Sander van Doorn - Gold Skies.m4a',
        'Alesso - Heroes (we could be) [feat. Tove Lo].m4a',
        'Alesso - Years.m4a',
        'Allie X - Downtown.mp3',
        'Alyssa Reid - High.mp3',
        'ambinate - Patchwork.mp3',
        'Ann Winsborn - La La Love On My Mind.m4a',
        'Apologize - 绯闻女孩.mp3',
        'Approaching Nirvana - 305.mp3',
        'Approaching Nirvana - You.mp3',
        'arc north - meant to be (feat. krista marina) [lyric video].mp3',
        'Ariana Grande、Nicki Minaj - Side To Side(Slushii Remix).m4a',
        'Armin van Buuren - Ping Pong (Hardwell Remix).m4a',
        'Armin van Buuren - Together (In a State of Trance) [Radio Edit].mp3',
        'Armin van Buuren、Nadia Ali - Feels So Good.mp3',
        'Armin van Buuren、Trevor Guthrie - This Is What It Feels Like feat. Trevor Guthrie (Extended Mix) - remix.m4a',
        'Arty、Angel Taylor - Up All Night.mp3',
        'Asa - Sweeter Things (Eleven8 Remix) - remix.mp3',
        'Asher Monroe - Here With You.mp3',
        'ATC - Around the World (La la la la La).mp3',
        'Atlantic - Forgive Me (Original Mix).mp3',
        'Atlantic Cascade - Sea Of Depression.mp3',
        'Au5 - Inside.m4a',
        'Audien、Lady Antebellum - Something Better.m4a',

        'Audio Machine - Guardians at the Gate.mp3',
        'Audio Machine - Shadowfall.mp3',
        'Audiomachine - Danuvius.mp3',
        'Audiomachine - The New Earth.mp3',
        'Audioscribe - Free Fall.m4a',
        'Avicii - Waiting for Love.m4a',
        'Axero、Andrew Harrison - Took My Sunshine.m4a',
        'B-Complex - Beautiful Lies.mp3',

        'Bad Style - Time Back(1).mp3',
        'Barcode Brothers - dooh dooh.m4a',
        'Barcode Brothers - Flute.m4a',
        'Basshunter - Dota.m4a',
        'Bassjackers - Rampage (Original Mix).m4a',
        'BeaTsGOy - Piano Beat.mp3',
        'beFour - comsic ride.mp3',
        'beFour - Magic Melody.mp3',
        'beFour - One Step to Infinity.mp3',
        'Bella Thorne、Prince Fox - Just Call.mp3',
        'Blackmill - Lucid Truth.mp3',
        'Blackmill - Spirit Of Life.mp3',
        'Blasterjaxx - Faith.mp3',
        'Blasterjaxx - Snake (Original Mix).m4a',
        'Bobby Rock - New Life.mp3',
        'Bodies Without Organs - Sunshine in The Rain.mp3',
        'Bodybangers - Sunshine Day (Radio Edit).mp3',
        'Bogdan Vladau - Hila.mp3',
        'Borgeous - Wildfire (Original Mix).m4a',
        'Borgeous、Tony Junior - Break The House (Original Mix).m4a',
        'Bougenvilla、Albert Neve、David Puentez - No Matter What.mp3',
        'Breathe Carolina、IZII - ECHO (LET GO).mp3',
        'Breno、The Fall - Original Mix.mp3',
        'Brianna - All I Need.mp3',
        'Bright Lights、Dannic - Dear Life (Bassjackers Remix).m4a',
        'Broiler、ravvel - Wild Eyes.mp3',
        'Brooks、GRX - Boomerang.mp3',
        'Brothers - Dance Now.mp3',
        'Brothers - Dieci Cento Mille.mp3',
        'Brothers - Sexy Girl.m4a',
        'BT、Dragon、Jontron;Senadee - Lifeline.m4a',
        'Burak Yeter、Danelle Sandoval - Tuesday (Original Mix).mp3',
        'BXDN - Glow.mp3',
        'Calvin Harris 、Ellie Goulding - Outside(Hardwell Remix).mp3',
        'Calvin Harris、Rihanna - This Is What You Came For (Mike Destiny Bootleg).mp3',
        'Calvin Harris、Rihanna - This Is What You Came For (REEZ x Kazkid Remix版).mp3',
        'Calvin Harris、Ummet Ozcan - Overdrive (Part 2) (Club Edit).mp3',
        'Campsite Dream - Counting Down To Christmas.mp3',
        'Candee! - Around The World - Ein Kleines Lied.mp3',
        'Canoo - Butterfly.mp3',
        'Carly Rae Jepsen - I Really Like You.mp3',
        'Carnage、Migos - Bricks.mp3',
        'Carta、Sem Vox - Memories.mp3',
        'Cartoon、Futuristik、Mikk M?e - C U Again.mp3',
        'Cascada - Night Nurse.mp3',
        'Cheat Codes - No Promises (CanPlu remix).mp3',

        'Circadian Eyes - What Remains of Our Chalk Road.mp3',
        'Claptone、Jaw - Dear Life (Original Mix).m4a',
        'CMA - Caught In Our Thoughts.mp3',
        'CMA - Dream Away.mp3',
        'CMA - Forgive Me.mp3',
        'CMA - Friends.mp3',
        'CMA - Timeless.mp3',

        'Conro - Close.mp3',
        'Consoul Trainin - Take Me to Infinity (Extended Mix).mp3',
        'Consoul Trainin、Eneli - No Saint (Radio Edit).mp3',
        'Cosmic Gate - Flatline.mp3',
        'Crankdat、San Holo - Light (Crankdat Re-Crank).mp3',
        'Crazy Frog - Axel F.mp3',
        'Cristian Onofreiciuc - Beyond the Stars.mp3',
        'Crywolf、Aylen - Silence.m4a',
        'Daav One、Jim Yosef - Emerald.m4a',
        'Dannic - Dear Life.m4a',
        'Dannic、Shermanology - Wait For You (Original Mix).m4a',
        'Danny Mc Carthy - Rags To Rings.m4a',
        'Danny McCarthy - silver scrapes (混音).mp3',
        'dark cat - VENTING.mp3',
        'Dark Oscillators - Trapped.mp3',
        'Darren Hayes - Creepin`up Ou You.m4a',
        'Dash Berlin、3LAU、Bright Lights - Somehow (Club Mix).m4a',
        'Dash Berlin、Collin McLoughlin、Jay Cosmic - Here Tonight (Club Mix).mp3',
        'Dastan Orazbekov - К?к аспан.mp3',
        'David Arkenstone - Call Of The Sea.mp3',

        'David Guetta、Emeli Sandé - What I Did For Love (VINAI Remix).m4a',
        'David Guetta、Ne-Yo、Akon - Play Hard (New Edit).mp3',
        'David Guetta、Rihanna - Right Now.m4a',
        'David Guetta、Showtek、Vassy - Bad (Original Mix).mp3',
        'Davide Sonar - Natural.mp3',
        'DEAF KEV - Invincible.m4a',
        'Deepmaniak - Just Like This.mp3',
        'Deepmaniak - Something Just Like This (Remix).mp3',
        'Deja Vu - The Rain.mp3',
        'Deorro - Five Hours.mp3',
        'Desiigner - Panda (THUGLI Remix).mp3',
        'Diana Boncheva - Purple Passion.mp3',
        'Dillon Francis、Kill The Noise - Dill the Noise.m4a',
        'Dimatis - Contact.m4a',
        'Dimension Present Oceano - Cabo Del Mar (On The Beach Mix).mp3',
        'Dimitri Vegas、Like Mike、Ummet Ozcan - The Hum (Original Mix).mp3',
        'Dimitri Vegas、Like Mike、VINAI - Louder (Original Mix).m4a',
        'Dinka、Tania Zygar - Not Okay (Original Mix).mp3',
        'Diplo、Liz - Set Me Free.m4a',
        'Dirk Reichardt - Weekend.mp3',
        'Dirk Reichardt - When The Light Comes.mp3',
        'Disfigure - Blank.mp3',
        'DJ - 1 - 曳步舞曲.mp3',
        'Dj - 2012最好听的电音旋律.mp3',
        'Dj - Mc水观音芙蓉出水英文舞曲 - 2014年8月收录.mp3',
        'DJ - mike 11 a.u.s 曳步舞曲.mp3',
        'DJ - Still D.R.E (Eal7 NS版) (Nurselim Boy Remix).mp3',
        'DJ - 墨尔本曳步舞曲.mp3',
        'DJ - 外文9D环绕车载混炸立体夜场舞曲 DJ花亿月 (2017年3月收录).mp3',
        'Dj - 外文越南鼓咚咚咚旋律 Dj楦儿 - 2015年5月收录.mp3',
        'Dj - 好听的旋律house单曲.mp3',
        'Dj - 慢摇 - 低音.mp3',
        'Dj - 最新时尚劲爆英文超嗨曲旋律慢摇 - 2014年8月收录.mp3',
        'dj - 经典曳步舞曲.mp3',
        'Dj - 迷幻旋律震撼心灵外文电音舞曲 - 2014年10月收录.mp3',
        'DJ - 黄昏 (的士高劲爆版).mp3',
        'DJ AiRui - Hands On The Get Busy.mp3',

        'dj carpi - the garden.mp3',
        'Dj Gius - Nerve.mp3',

        'DJ KAJJIN、Mimi - Take my hand - Freddy@Disco Radio Edit.m4a',
        'Dj Khazik - Dancer in the Dark(1).mp3',
        'DJ Phil TY - Miami Belch (Polite Mix).mp3',
        'DJ Sanny J - Ti Sto Cercando.m4a',
        'DJ Snake、Mr Hudson - Here Comes The Night (NGHTMRE Remix).mp3',
        'DJ Suss One、Jamie Drastik、Flo Rida - Single For Tonight.mp3',
        'DJ Zany、Harmonik - Evolution.mp3',
        'DjsmallYu - Pakito - Living on Video - 本色主打Mashup经典歌路2016新混搭.m4a',
        'DJ宝贝 - A8慢摇 (DJ版).mp3',
        'DJ宝贝 - A8慢摇.m4a',
        'DJ小可 - Waking In The Sun.m4a',
        'Dj电音liang爺、pk《tobu》.mp3',
        'Doctor Vox - Frontier (边境).mp3',

        'Don Diablo - Universe (Original Mix).m4a',
        'Draper、Laura Brehm - All I See (Kicks N Licks Remix).mp3',
        'DVBBS、Joey Dale - Deja Vu (Original Mix).m4a',
        'Earphones - Primetime Sexcrime.mp3',
        'Ed Sheeran - I See Fire.mp3',
        'Eddy Wata - In Your Mind.mp3',
        'Electro-Light - Symbolism.m4a',
        'Electro-Light、Itro - Paradox.mp3',
        'Electus - Asgard.mp3',
        'Electus - Drift Away.mp3',
        'Electus - Imagine.mp3',
        'Electus - Save Me.mp3',
        'Electus - Temple of Light.mp3',


        'Elize - Rhythm Of Love.mp3',
        'Elize - Sexual Healing.m4a',

        'Ellie Goulding、Jonas Blue - Still Falling For You (Jonas Blue Remix).m4a',
        'ELYZA - Strings For A Queen (Original Mix).mp3',

        'Emily Vaughn - Think Twice.mp3',
        'Eminem - Not Afraid.m4a',
        'Emi、M2O Team - Anima Libera.mp3',
        'Emozioni Libere - Per Te (Stephan F、YdragonZ Remix).mp3',
        'Enrique Iglesias - Ring My Bells.mp3',
        'ENV - Pneumatic Tokyo.mp3',
        'Epic Score - Journey of Life.mp3',
        'Epic Score - Our Flame Shall Endure.mp3',
        'Erik Hakansson - Summer Vibe (Chill Version).mp3',
        'Evocativ - Seasons.mp3',
        'EXGF - We Are The Hearts.m4a',
        'Exhorth - Rasta Trip (Original Mix) - remix.mp3',
        'Falamensia - BG.mp3',
        'Fall Out Boy - Centuries.m4a',
        'Fall Out Boy - Immortals.mp3',
        'Fall Out Boy - My Songs Know What You Did In The Dark (Light Em Up).m4a',
        'Fall Out Boy - Uma Thurman.m4a',
        'Fantasy Prouject - Crazy Baby.mp3',
        'Far East Movement、Justin Bieber - Live My Life.m4a',

        'Feint - My Sunset - Original Mix.mp3',
        'Feint - Reprise - Original Mix.mp3',
        'Fetty Wap - Trap Queen (Crankdat Remix).mp3',
        'Fiction - Ice XV.mp3',
        'Fifth Harmony、Kid Ink - Worth It.mp3',
        'Firebeatz - No Heroes (Original Mix).m4a',
        'Firebeatz - Original Mix - No Heroes.mp3',
        'Florian Bur - The Way.mp3',
        'Flume、Tove Lo - Say It (Illenium Remix).mp3',
        'Foster The People - Pumped Up Kicks (混音).mp3',
        'Foster The People、Annonymous - Pumped Up Kicks (DUBSTEP).mp3',
        'Fri、TomLeevis - Leevis.mp3',
        'Frontliner - Time.m4a',
        'Gabry Ponte - Geordie.m4a',
        'Gala - Faraway.m4a',
        'Gareth Emery - Soldier (feat. Roxanne Emery).m4a',
        'Gaullin - Op Opa.mp3',

        'Giulia - Ce Frumoasa E Iubirea.mp3',
        'Gorgon City - No More.m4a',
        'Gorgon City、LIV - No More.mp3',
        'GRABOTE、Marc Philippe - Dancer In The Dark (Original Mix).mp3',
        'Graves、Crankdat、Coolights - Say Things (Crankdat Re-Crank版).mp3',
        'Green Sun - Simplicity.mp3',
        'Groove Coverage - God Is A Girl.mp3',
        'Guido Negraszus - Sailing Forever.mp3',
        'Guido Negraszus - Sunset Avenue.mp3',
        'GZQ、DUBJ、小白受 - 玉门关.mp3',

        'Hardwell - Apollo (Revealed Vol. 6 Edit) [feat. Amba Shepherd].m4a',
        'Hardwell - Cobra (Official Energy Anthem 2011).m4a',
        'Hardwell - Everybody Is In The Place (Original Mix).m4a',
        'Hardwell - Left Behinds.m4a',
        'Hardwell - Spaceman 1.m4a',
        'Harrison、VINAI - The Wave (Original Mix).mp3',
        'Headhunterz - Doomed - 纯音乐版.mp3',
        'Headhunterz - Dreamcatcher.mp3',
        'Headhunterz - Just Say My Name.mp3',
        'Headhunterz - Once Again (Original Mix).m4a',
        'Headhunterz - Psychedelic.mp3',
        'Headhunterz; Abject - End of My Existence.mp3',
        'Headhunterz; Abject - Scantraxx Rootz.mp3',
        'Headhunterz、Crystal Lake - Live Your Life (Original Mix).m4a',
        'Headhunterz、Mike Taylor - Lift Me Up.mp3',
        'Headhunterz、Wildstylez、Project One - Halfway There (Original Mix).mp3',
        'Headhunterz、Wildstylez、Project One - Prelude (Original Mix).mp3',
        'Headhunterz、Wildstylez、Project One - The Story Unfolds (Original Mix).mp3',
        'Henry Fong、D.O.D - Bust Dem (Original Mix).m4a',
        'Hex Cougar - Sweet Dreams.mp3',
        'Highland - Solo Tu.m4a',
        'Hinkik - Explorers.mp3',
        'Hoaprox - Ng?u H?ng.mp3',
        'Hook N Sling、Karin Park - Tokyo By Night (Axwell Remix).m4a',
        'Howard Shore - Twilight and Shadow.mp3',
        'ILLENIUM、Annika Wells - Crawl Outta Love (Original Mix).mp3',
        'ILLENIUM、Flume、Tove Lo - Say It (Illenium Remix).mp3',
        'Illenium、Joni Fatora - Sleepwalker.mp3',
        'ILLENIUM、Kerli - Sound Of Walking Away.mp3',
        'ILLENIUM、King Deco - Reverie.m4a',
        'ILLENIUM、Nevve - Fractures.mp3',
        'Illenium、Nina Sung - Only One.mp3',
        'Illenium、Said The Sky、Cristina Soto - Painted White.m4a',
        'ILLENIUM、Seven Lions、Said The Sky、HALIENE - Rush Over Me.mp3',
        'Imagine Dragons - Radioactive.m4a',
        'Immediate Music - Dark Side Of Power.mp3',
        'Immediate Music - Imperitum Immediate.mp3',
        'Immediate Music - Tales Of The Electric Romeo.mp3',

        'Indian Calling - Harmony.mp3',
        'Inez - Stronger.m4a',
        'ItaloBrothers - this is nightlife (video edit).m4a',
        'Ivan Torrent - Human Legacy.mp3',
        'J Lisk - Where Is Your Love.mp3',
        'Jack Howes - Tomorrow Is Today(Original Mix).m4a',
        'Jack ü、Ember Island - Where Are ü Now.mp3',
        'Jacoo - Memories.mp3',
        'Jacoo - Mist.mp3',
        'Jacoo - Peace Of Mind.mp3',
        'Jacoo - Towards the Light.mp3',
        'Jaeger - Until Dawn.mp3',
        'Jam - 不露声色.mp3',
        'Janji - 1.Fade.mp3',
        'Janji - Horizon.mp3',
        'Janji - Shadows.m4a',
        'Janji - Shadows.mp3',
        'Janji、Justin Bieber - What Do You Mean (JANJI REMIX).m4a',
        'Jaques Le Noir、savior - Looking (Savior Remix).mp3',
        'Jarico - Fiery Sky.mp3',
        'Jasper Forks - River Flows In You (Single Mix) - remix.m4a',
        'Jauz、San Holo - OK! (Original Mix).mp3',
        'Jedward - Give It Up.m4a',
        'Jennifer Hudson - No One Gonna Love You (Jason Nevins Radio Remix).mp3',
        'Jeremy Lim - Into Ether (Original Mix).mp3',
        'Jeremy Lim - Uncharted (Original Mix).mp3',

        'Jillian Ann、Ms.D - Quiet Riot (Pegboard Nerds Remix).mp3',

        'Joel Fletcher、Jake Sgarlato - Vapour (Original Mix).m4a',
        'Joey Dale、Delora、DVBBS - Deja Vu (Original Mix).mp3',
        'John Dreamer - Becoming a Legend.mp3',
        'Jonny Rose、PRFFTT、Svyable - Turn It Up.mp3',
        'Josh Vietti - Lost Without You.mp3',
        'JPB - High.m4a',
        'Julian Calor - Typhoon (Edit).m4a',
        'Julian Jordan - Blinded By The Light (Radio Edit).m4a',
        'Julien Jabre - Still Alive.mp3',
        'K-391 - Summertime.mp3',
        'K-391、Alan Walker、Julie Bergan、胜利 - Ignite.mp3',
        'Kadebostany - Early Morning Dreams (Kled Mone Remix)(1).mp3',
        'Kanic - Lux Aestiva.mp3',
        'Katy Perry - Wide Awake.mp3',
        'KCJIN锦、灿烈 - Stay With Me.mp3',
        'Killercats - Kaibu.m4a',
        'Killigrew - Coming Home.mp3',
        'Killigrew - Courage.mp3',
        'Killigrew - Liquid Hearts.mp3',
        'Killigrew - Secret Garden.mp3',
        'Kina、Adriana Proenza - Can We Kiss Forever.mp3',
        'Kiso、Yvette - Good Life.mp3',
        'Klaus Badelt - Will and Elizabeth.mp3',
        'Knife Party - lrad.m4a',
        'Kozoro - Autumn.mp3',
        'Kozoro、Evence - Dreaming.mp3',
        'KSHMR - Leviathan (Original Mix).m4a',
        'KTSG - The Journey.mp3',
        'KXA - Gladius.mp3',
        'Lady Antebellum - Need You Now.mp3',
        'Lady Gaga - Just Dance(Tony Arzadon Edit).m4a',
        'Lana Del Rey - Summertime Sadness.mp3',
        'LARSM - Lovers.m4a',

        'Late Night Alumni - Empty Streets.m4a',
        'Laura Brehm、Draper、Kicks n Licks - All I See (Kicks N Licks Remix).mp3',
        'League of Legends、MitiS - The Boy Who Shattered Time (MitiS Remix).m4a',
        'Lene Marlin - What If.m4a',
        'Lensko - Bourbon Street 2015.mp3',
        'Lensko - Circles.mp3',
        'Lensko - Heaven.mp3',
        'Lexington Bridge - Go On And Go.mp3',
        'Lightscape - Escape This Moment.mp3',
        'Lindequist - Zeemeeuw.mp3',
        'LIONE - Leave This Place.mp3',
        'LIONE、The Chainsmokers - Closer (LIONE Remix).m4a',
        'Liquido - Ordinary Life.m4a',
        'Lo Air - Day and Night.mp3',
        'Lollipop - Batte forte (subside extended rmx).m4a',
        'Lookas - Genesis.mp3',
        'Lost Frequencies、Janieck Devy - Reality.mp3',
        'Loud Luxury - See It Again.mp3',

        'Lumious - We Fly.m4a',

        'Manian、Floorfilla - Just Another Night (Anthem 4) [manian Mix] - remix.m4a',
        'Mari Ferrari - Hello, Hello (Extended Mix)(1).m4a',
        'Mariah Carey - Obsessed (Super Clean Version).mp3',
        'Marian Hill - Down.mp3',
        'Mark Petrie - A New Day.mp3',
        'Mark Petrie - Go Time.mp3',
        'Mark Petrie - New Light.mp3',
        'Mark Pride - River Flows In You (Original Mix) - remix.m4a',
        'Maroon 5 - Animals.mp3',
        'Marshmello - Alone.m4a',
        'Marshmello - Flash Funk.mp3',
        'Martin Garrix - Animals (Original Mix).mp3',
        'Martin Garrix - Oops.m4a',
        'Martin Garrix、Jay Hardway - Error 404 (Original Mix) - remix.m4a',
        'Martin Garrix、Jay Hardway - Wizard (Original Mix).m4a',

        'Martin Garrix、MOTI - Virus (How About Now) (Original Mix).m4a',
        'Martin Garrix、Third Party - Lions In The Wild (Original Mix).m4a',
        'Masanori Yasuda - Kalos Eidos (Masanori Yasuda Chillout Mix).mp3',
        'Massive Ditto - ULTRA (Jason Risk Remix).mp3',
        'Massmelo - Ibiza.mp3',
        'Master Blaster - Until The End (Monday 2 Friday Radio Edit).m4a',
        'Matt B - Color Blind.m4a',
        'Matteo - Panama.mp3',
        'Max Denoise、Andrea Mazza - State Of Soul (Max Denoise chill out mix) - remix.mp3',
        'Max Enforcer、Hardstyle Masterz - The Stage Is Our Home (Max Enforcer Remix).m4a',
        'Max Oazo、Cami - Wicked Game (Radio).mp3',
        'Mendum - One Third.m4a',
        'Meri?、Jaeger - After Dawn.mp3',
        'Metrognome、Ringtone - Metrognome Remix.mp3',
        'Michelle Williams - If You Wanna Go.mp3',
        'Mike Destiny、Calvin Harris、Rihanna - This Is What You Came For (Mike Destiny Bootleg).mp3',
        'Milky Chance - Stolen Dance.mp3',
        'MitiS - Ascension (Remix).m4a',
        'MitiS - Beneath Us (Original Mix).m4a',
        'MitiS - Open Window feat. Anna Yvette (Original Mix) - remix.m4a',
        'MKJ - Time.mp3',
        'MKJ、Eightfold - Trap Queen.mp3',
        'MMZ-BOY - Yasuo (纯音乐版).mp3',
        'Modern Talking - Brother Louie.m4a',
        'Moguai、Cheat Codes - Hold On (Radio Edit).mp3',
        'Mt Eden、Blackmill - Now.mp3',
        'Myrne - Watchmaker (Original Mix).mp3',
        'MYRNE、Linying - Silver City.mp3',

        'Natalia Kills - Mirrors.mp3',
        'Naughty Boy、Sam Smith - La La La.mp3',
        'Nelly - Just A Dream.mp3',
        'Neon Hitch - Bad Dog - Discotech Remix - Remix.mp3',
        'NERVO、Afrojack、Like Mike、Dimitri Vegas - The Way We See The World (Tomorrowland Anthem Afrojack Short Vocal Edit).m4a',
        'Network Music Ensemble - Born a Champion.m4a',
        'New Tribute Kings - Are You With Me (Originally Performed By Lost Frequencies(Tribute Version)).mp3',
        'Nicky Romero - Like Home (Original Mix).m4a',
        'Nicky Romero、Cimo Frankel - New Life.m4a',
        'Nigel Stanford - Cymatics.m4a',
        'Nigel Stanford - One Hundred Hunters.mp3',
        'Nigel Stanford、Dallin Applebaum - Everything Changed.mp3',
        'Nikki Jamal - Priceless.mp3',
        'Nikolaz、Gantz、Jerique - Superman.mp3',
        'Nitro Fun - Believe (Silva Hound Remix版).mp3',
        'Nitro Fun - Believe.m4a',
        'Niykee Heaton - Bad Intentions.mp3',
        'Nora En Pure、Paul Harris、Dragonette - One Night Lover (Nora En Pure Remix).m4a',
        'Not Your Dope - Bring Back The Summer (Not Your Dope Remix).mp3',
        'NUWANDA - Lights Out.mp3',
        'O.T. Genasis - CoCo (MAKJ Remix).mp3',
        'ODESZA、Zyra、Mazde - Say My Name (Mazde Remix).mp3',
        'ODESZA、Zyra、Mazde - Say My Name.mp3',
        'Oleska、Otter Berry - Far Behind (Original Mix).m4a',
        'Oliver Heldens - Koala.mp3',
        'Omnia、Jonny Rose - Two Hands.m4a',
        'One Day - Original Mix - Antrux.mp3',
        'OneRepublic - Apologize.mp3',
        'OneRepublic - Counting Stars.mp3',
        'OneRepublic - If I Lose Myself.m4a',
        'OneRepublic - Love Runs Out.m4a',
        'Ookay - Back Again.mp3',
        'OVA - Встреча.mp3',
        'Panda Eyes、Phantom Sage - ID.mp3',
        'ParagonX9 - Chaoz Fantasy (Romos Remix).mp3',
        'paul harris、Dragonette、Nora En Pure - One Night Lover (Nora En Pure Remix).mp3',

        'Paul Lawler - Lucid Dreamer.mp3',
        'Paula Deanda - Why Would I Ever.mp3',
        'Pegboard Nerds - Pink Cloud(JumoDaddy Remix).m4a',
        'Philip Guyler - Gangsta Symphony.mp3',
        'Phoebe Ryan、Illenium - Mine (Illenium Remix).mp3',
        'Phoebe Ryan、ILLENIUM - Mine.mp3',
        'Position Music - Man At Arms (Non Choir).mp3',
        'Position Music - Man At Arms.mp3',

        'Prezioso Feat. Marvin - Rock The Discothek (Video Edit).m4a',
        'Prezioso、Marvin - LetTalk About A Man.m4a',
        'Quintino - Slammer (Original Mix).m4a',
        'R3AKTIV - Liquid (Original Mix).m4a',
        'R3AKTIV - Liquid.mp3',
        'R3hab - Samurai (Ti?sto Remix).mp3',
        'R3hab - Unstoppable (Vinai Remix).m4a',
        'R3hab、KSHMR - Karate (Original Mix).m4a',
        'R3hab、NERVO - Ready For The Weekend (Club Mix).m4a',
        'R3hab、Sander Van Doorn - Phoenix (Original Mix).m4a',
        'R3hab、Skytech、Fafaq - Tiger (Original Mix).mp3',
        'Radar Detector、Skrillex - Scary Monsters And Nice Sprites (Radar Detector Remix).mp3',
        'Rain Man - Bring Back The Summer.mp3',
        'Rameses B - Lone Wanderer.mp3',
        'Rameses B - Miracle.mp3',
        'Rameses B - Moonlight.mp3',
        'Ramzi - Love Is Blind.mp3',
        'Ramzi - Say Goodnight.mp3',
        'Ran-D And Redixx - No Cure.mp3',
        'Ray Volpe、Dec3mber、Clinton Sly - Lion (Dec3mber Remix).mp3',
        'Razihel、Aero Chord - Titans (Original Mix).mp3',
        'Refined - Same Skies.mp3',
        'Remix - Obsession (Monkey?MO?Edit).mp3',
        'Remix、Regard - Ride?It (Regard?Remix).mp3',
        'Rezz - Edge (边缘).mp3',
        'Rihanna - Rude Boy.m4a',
        'Rihanna - Skin.mp3',
        'Rihanna - Stupid In Love.mp3',
        'Rihanna - Take A Bow.mp3',
        'Rihanna - Warrior.mp3',
        'Rihanna - What Now.mp3',
        'Rihanna、Drake - Work (R3hab Remix).mp3',
        'RL Grime、Chief Keef - Love Sosa.mp3',
        'romos、ParagonX9 - Chaoz Fantasy (Romos Remix).m4a',
        'Rompasso - Angetenar (安捷纳尔)(Original Mix).mp3',
        'Rootkit - Carry Me Away (Original Mix).mp3',
        'RT - Umbrella (Meow Remix).mp3',
        'Rudebrat - Lunar VIP (Original Mix).mp3',
        'Rudebrat - The Quick and the Dead (Original Mix) - remix.mp3',
        'Rune R.K. - Calabria (Firebeatz Remix).mp3',
        'Ryan Farish - Fireflies.mp3',
        'Ryan Farish - Music Box.mp3',
        'Ryan Farish - Road To You.mp3',
        'Ryan.B of CNBALLER、AY杨佬叁 - 再也没有.mp3',
        'Said The Sky - Disciple.mp3',
        'Said The Sky - Listen.mp3',

        'San Holo、Eminem - Lose Yourself (San Holo Remix).mp3',
        'Sand - CHINA-2 (中国-2).mp3',
        'Sander van Doorn - Right Here Right Now (Neon) (Extended Mix).mp3',
        'Sander van Doorn - Right Here Right Now(Neon).m4a',
        'sAr - Reaction.mp3',
        'sAr - what for？.mp3',
        'Sarina Paris - Just About Enough.m4a',
        'SCNDL、Vinai - Frontier.mp3',
        'SeeB、Mike Posner - I Took A Pill In Ibiza (SeeB Remix).m4a',

        'Selena Gomez、Felix Cartal - Kill Em with Kindness (Felix Cartal Remix).m4a',
        'Senpai - Stones Over Styx (Thomas Prime Remix).mp3',
        'Sensitive、Bogdan Bondarenko - Remember (Original Mix) - remix.mp3',
        'September - Leave It All Behind (Uk Radio Edit).mp3',
        'Shareefa - Need a Boss.mp3',
        'Shayne Ward - Breathless.mp3',

        'Showtek - Electronic Stereophonic.mp3',
        'Showtek、MC DV8 - Hold Us Back.mp3',
        'Shuprio - The Quest (Original Mix).mp3',
        'SizzleBird - Between Worlds.mp3',
        'Skrillex - Bangarang (feat. Sirah).m4a',
        'Skrillex - Summit (feat. Ellie Goulding).m4a',
        'Skrillex、Snails、Diplo - Holla Out（VIP）.m4a',
        'Skrux、Venemy - Eternity.m4a',
        'Skylar Grey、The Paragon Axis - Coming Home (A.N.O. Remix).mp3',
        'Slinz - Three Of Us.mp3',
        'Slumberjack - Horus.mp3',
        'Slumberjack、klp - The Others.m4a',
        'Slushii - So Long.mp3',
        'Slushii、Jack ü、Kai - Mind (Slushii Remix).m4a',

        'Snails - Wild (Henry Fong Remix).mp3',
        'SNAXX、Jaxan、Lévie - Hotdog Millionaire.mp3',
        'Solarsoul - Wake Up With You - Original Chill Breaks Mix.mp3',
        'Solid Base - Stay With Me.m4a',
        'Solid Base - This Is How We Do It.m4a',
        'Spaarkey - Oasis.mp3',
        'Spag Heddy、Eh!de、Different Heaven - My Heart (Spag Heddy Remix).m4a',
        'Spiffy Man、Two Minds、Mekanik - Belong Again.m4a',
        'Steerner、Martelli - Sky (Radio Edit).m4a',

        'Steve Jablonsky - Prime.mp3',


        'Stive Morgan - Birth Of New Star.mp3',
        'Stive Morgan - In My Dreams.mp3',
        'Stive Morgan - Spirit Of The Earth.mp3',
        'Storm_Official - Believe AMG (DJ版).mp3',
        'Summer Was Fun、Emelie Cyréus - Love Back On.mp3',
        't.A.T.u - loves me not.mp3',
        'T.S.O 王利夫 - 三体 Opening Theme.mp3',
        'Technoboy - Catfight (Radio Edit).m4a',
        'TECHNOBOY - Into Deep.m4a',
        'Technoboy - Next Dimensional World (Qlimax 2008 Anthem).m4a',
        'Technoboy、Tuneboy、DJ Issac - CTRL (Radio Edit).mp3',
        'THALLIE ANN SEENYEN、Felix Jaehn - Dance With Me (Original Mix).mp3',
        'The Chainsmokers - #SELFIE (Club Mix).m4a',

        'The Deysion - Perfect Day feat. R.I.B..mp3',
        'The Hose - The Piano Song (Collezione Autunno Inverno Mix).m4a',
        'The Hose - The Piano Song (Collezione Autunno Inverno Mix).mp3',

        'The Mavrik - Supersonic.mp3',
        'The Paragon Axis - Courage.mp3',
        'The Prophet - Chubby.m4a',
        'The Prophet - Forget About It.m4a',
        'The Prophet - Fuck-R.m4a',
        'The Prophet - Morphed.m4a',

        'The Prophet - Recession.m4a',
        'The Prophet - Window Of Time.m4a',
        'THE RAIDERS - Disk Warrior (The Nasty Boyz Remix).mp3',
        'The Wanted - Glad You Came.mp3',
        'The Wanted - We Own The Night.m4a',

        'The XX - Intro - intro.m4a',
        'The xx - XX Intro.mp3',
        'TheFatRat - Never Be Alone.m4a',
        'TheFatRat - Unity.m4a',
        'TheFatRat - Windfall.m4a',
        'TheFatRat - Xenogenesis.mp3',
        'TheFatRat、Laura Brehm - Monody.m4a',

        'Thomas Bergersen - Empire of Angels.mp3',
        'Thomas Bergersen - Illusions.mp3',
        'Thomas Bergersen - Immortal.mp3',
        'Thomas Greenberg - The Right Path.mp3',
        'Tigerforest - Skylines.mp3',
        'Tiggy - Why.m4a',
        'Timmy Trumpet - Freaks.m4a',
        'Timmy Trumpet - Nightmare (Original Mix).m4a',
        'Ti?sto、Jauz - Infected (Original Mix).m4a',
        'TJR、Benji Madden - Come Back Down (Original Mix).m4a',
        'TJR、VINAI - Bounce Generation (SCNDL Remix).mp3',
        'Tobu - Life.m4a',
        'Tobu - Morning Energy.mp3',
        'Tobu - Natural High.mp3',
        'Tobu、Itro - Sunburst.mp3',
        'TomLeevis - Soaring.mp3',
        'Tomsize Simeon - Loud Strings.mp3',
        'Tomsize、Simeon - Jump.mp3',
        'Tone Damli - Stupid.mp3',
        'Tony lgy - Summer Rain (Rework 2012).mp3',
        'Tove Lo - Talking Body.mp3',
        'Tracy Bush - Legends of Azeroth (Main Title).mp3',
        'Tracy Bush - Main Title_Legends of Azeroth.mp3',
        'Trazer、Lightscape - Awake.mp3',
        'Tritonal - Satellite (Radio Mix).mp3',
        'Tropkillaz - HIDEHO.mp3',

        'Tuneboy - Dirty (Wildstylez Remix).mp3',

        'twenty one pilots - Heathens (DISTO Remix).mp3',
        'Two Steps From Hell - Archangel.mp3',
        'Two Steps From Hell - For The Win.mp3',
        'Two Steps From Hell - Invincible - Original.mp3',
        'Two Steps From Hell - Protectors of the Earth.mp3',
        'Two Steps From Hell - SkyWorld.mp3',
        'Two Steps From Hell - Star Sky - Instrumental.mp3',
        'Two Steps From Hell - Victory.mp3',
        'Two Ways - Tangled Strings.mp3',
        'Two Ways、Alan Walker - Fade (Two Ways Remix).mp3',
        'Ummet Ozcan - Smash! (Original Mix).mp3',
        'Ummet Ozcan - Superwave (Original Mix).mp3',
        'Ummet Ozcan、Katt Niall - Stars (Original Mix).m4a',

        'Valentin - A Little Story.mp3',
        'Valentin - One Sweetest.mp3',
        'Vanni G - I Say Yeah (Vanni G Extended Mix).mp3',
        'Vanotek、Eneli - Back To Me.mp3',
        'Various Artists - Anima libera.m4a',
        'Various Artists - Charm Floor.m4a',

        'Various Artists - The magic key.m4a',
        'Various Artists - The Magic Key.mp3',
        'Veela、Feint - Vagrant.m4a',
        'Veorra - Run.mp3',
        'Vexare - The Silent Majority.mp3',
        'Vicetone - Ensemble (Original Mix).m4a',
        'Vicetone - No Way Out (Extended Mix).m4a',
        'Vicetone - United We Dance (Club Mix).m4a',
        'Vicetone - White Lies (feat. Chloe Angelides) [Radio Edit].m4a',
        'Vicetone、Popeska、Luciana - The New Kings(1).m4a',
        'Vicetone、Tony Igy - Astronomia 2014 (Radio Edit).m4a',
        'Vinai - Two of Us (VINAI Edit).mp3',
        'Virtual Riot - Lunar (Original Mix).mp3',
        'Virtual Riot - Stay For A While.mp3',
        'Virus Syndicate、Teddy Killerz - Knock It Back (Teddy Killerz Drop Mix).mp3',

        'Wildstylez - Pleasure.mp3',
        'Will Sparks、Wiley、Elen Levon、SCNDL - Ah Yeah So What (SCNDL Remix).mp3',
        'William Joseph - Radioactive.m4a',
        'Wisp X - Stand With Me.m4a',
        'Wisp X、DJ OKAWARI - Luv Letter (Wisp X Remix).mp3',
        'Wiz Khalifa、Iggy Azalea - Go Hard Or Go Home.mp3',
        'X-Ray Dog - Cyberworld.mp3',
        'X-Wise - Memories (Original Mix).mp3',
        'Xeuphoria - Blue.mp3',
        'Yal!X - Forgiven (Original Mix).mp3',
        'Yal!X - Mourning Dove.mp3',
        'Yal!X - Osprey.mp3',
        'Yellow Claw - DJ Turn It Up.mp3',
        'Yellow Claw、Ayden - Till It Hurts.mp3',
        'Yellow Claw、Rochelle Jordan - Shotgun.mp3',

        'Yinyues - Everything.mp3',
        'Yinyues - Far Away.mp3',
        'Yoomiii - Rhythm Of Love (Video Version).m4a',
        'Zabo - Mantra.mp3',
        'Zack Hemsey - Mind Heist.mp3',
        'Zany And B-Front - Victims Of The Same World (Edit).mp3',
        'Zara Larsson、Afterfab - Uncover (Afterfab Remix).mp3',
        'Zedd、Alessia Cara - Stay.m4a',
        'Zomboy - Immunity.mp3',
        '丁佳吉 - Larg.mp3',
        '刀郎 - 冲动的惩罚.mp3',
        '刘汉成 - Deep house (串烧节目).mp3',
        '华晨宇 - 烟火里的尘埃 (2014北京火星演唱会).mp3',
        '叶建楠的小迷弟 - (ΦωΦ).mp3',
        '吉他的天空 - 暗里着迷.mp3',
        '吴司令 - Yosemite (DJ版).mp3',
        '吴静 - 女儿情.mp3',
        '周深 - 大鱼.mp3',
        '大气神秘音乐 - 纯音乐版.mp3',

        '孙楠 - 拯救.mp3',
        '慢摇 - 弄你的士高.mp3',

        '李晓杰 - 把酒倒满.mp3',
        '李玉刚 - 清明上河图 - 单曲版.mp3',
        '林志炫 - 你的样子.mp3',
        '梦然 - 没有你陪伴真的好孤单.mp3',
        '江映东 - In the eyes.mp3',
        '浪子康、豪大大 - 电灯胆.mp3',
        '现场(世界第一_流畅)-DJ舞曲-4794108.aac',
        '纯音乐 - here we are again.mp3',
        '纯音乐 - Ocean Princess.mp3',
        '纯音乐 - 旋律电音.mp3',
        '纯音乐 - 迷幻电音.mp3',
        '网络歌手 - Stay With Me (绝版环绕).mp3',
        '群星 - Hey Oh.mp3',
        '群星 - 迷幻社会摇重鼓点电音.mp3',
        '群星、Dj - 劲爆开场舞曲.mp3',
        '者思范Remix、Aoax - In My Mind (DJ版).mp3',
        '者思范、Aoax - love.mp3',
        '者思范、者思范Remix - ZAYN-Dusk Till Dawn(Remix)（莫游生／者思范Remix Remix）.mp3',
        '者思范、者思范Remix、Aoax - A deep affection.mp3',
        '者思范、者思范Remix、Aoax - Do not.mp3',
        '者思范、者思范Remix、Aoax - La La La (DJ版).mp3',
        '者思范、者思范Remix、Aoax - БАНАНА (Remix).mp3',
        '肖琴、肖Music - 一曲肝肠断 (DJ版).mp3',
        '萨顶顶 - 左手指月 (Live).mp3',
        '车继铃 - 最远的你是我最近的爱.mp3',
        '郭聪明 - 盗墓笔记·十年人间 (片段).mp3',
        '金南玲 - 逆流成河.mp3',
        '陈一发 - 童话镇.mp3',
        '黄英华 - 只要为你活一天.mp3']

    document.addEventListener('selectstart', function (e) {
        e.preventDefault();

    })
    var box = document.querySelector('.box')
    var ul = box.querySelector('ul')
    var ol = box.querySelector('ol')
    var arrowr = document.querySelector('.arrowr')
    var arrowl = document.querySelector('.arrowl')
    var mask = document.querySelector('.mask')
    var boxwidth = box.clientWidth
    box.addEventListener('mouseenter', function () {
        arrowr.style.display = 'block'
        arrowl.style.display = 'block'
        clearInterval(timer)
    })
    box.addEventListener('mouseleave', function () {
        arrowr.style.display = 'none'
        arrowl.style.display = 'none'
        timer = setInterval(function () {
            arrowr.click()
        }, 5000)
    })
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('index', i)
        ol.appendChild(li)

        li.addEventListener('click', function () {
            var index = this.getAttribute('index')
            num = index
            console.log(this.getAttribute('index'));
            animate(ul, -index * boxwidth)
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            this.className = 'current'
        })
    }
    ol.children[0].className = 'current'
    ul.appendChild(ul.firstElementChild.cloneNode(true))
    var num = 0
    arrowr.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0
            num = 0
        }
        num++
        animate(ul, -num * boxwidth)
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        if (num == ol.children.length) {
            ol.children[0].className = 'current'
        } else {
            ol.children[num].className = 'current'
        }

    })
    var ulleft = ul.children.length * boxwidth
    arrowl.addEventListener('click', function () {
        if (num == 0) {
            ul.style.left = -ulleft + 'px'
            num = ul.children.length - 1
        }
        num--
        animate(ul, -num * boxwidth)
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        if (num == ol.children.length) {
            ol.children[0].className = 'current'
        } else {
            ol.children[num].className = 'current'
        }

    })
    var timer = setInterval(function () {
        arrowr.click()
    }, 5000)
    ul.addEventListener('click', function (e) {
        var bg = e.target.src
        mask.style.backgroundImage = 'url(' + bg + ')'
    })
    var pellucidity = document.querySelector('.pellucidity')
    var audio = document.getElementById("audio-element");
    var p = pellucidity.querySelector('p')
    var x = 0
    var speed_img = document.querySelector('.speed_img')
    var pl = 0
    var text = document.querySelector('.text')
    var movex = 0
    var tiame1 = 0
    p.addEventListener('mousedown', function (e) {
        x = e.pageX

        pl = p.offsetLeft
        //    调整轮播图透明度
        document.addEventListener('mousemove', move)
        function move(e) {
            movex = e.pageX - x + pl
            if (movex <= 0) {
                movex = 0;
            } else if (movex >= 100) {
                movex = 100;
            }
            p.style.left = movex + 'px'
            ul.style.opacity = 1 - movex / 100
            // mask.style.filter = 'blur(' + movex / 10+'px)'
        }
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', move);
        })
        e.stopPropagation()
    })
    // 调整背景透明度
    pellucidity.addEventListener('click', function (e) {
        var pmove = e.pageX - (pellucidity.offsetLeft + 7.5)

        p.style.left = pmove + 'px'
        mask.style.opacity = 1
        mask.style.filter = 'blur(' + pmove / 10 + 'px)'
        movex = pmove
    })
    var speed = document.querySelector('.speed ')
    var a = 0
    var flag = false
    var btn2 = document.querySelector('.btn2')
    // console.log(btn1);
    var tiems = null
    // 播放暂停
    btn2.addEventListener('click', function () {
        btn2.innerHTML = ''
        // clearInterval(tiems)

        audio.oncanplay = function () {
            b = audio.duration

        }
        duration()
    })
    var audiotime = 0
    var b = 0
    // 进度条
    speed.addEventListener('click', function (e) {
        audiotime = e.pageX - this.offsetLeft
        a = audiotime
        console.log(a);
        console.log(audiotime);
        audio.currentTime = a / 1200 * b
        audio.oncanplay = function () {

            b = audio.duration


            play()
            
            btn2.innerHTML = ''
            speed_img.style.left = (audiotime - 20) + 'px'
            speed.style.boxShadow = ' ' + audiotime + 'px 0 1px 0 black inset'
        }
        
    })
    //    播放函数
    function play() {
        clearInterval(tiems)
        audio.play();
        tiame1 = parseInt(b) * 1000 / 1200
        tiems = setInterval(function () {
            a++
            speed_img.style.left = (a - 20) + 'px'
            speed.style.boxShadow = ' ' + a + 'px 0 1px 0 black inset'
            if (a == 1200) {
                clearInterval(tiems)
                btn3.click()
            }
        }, tiame1)
    }
    function duration() {
        // audio = document.getElementById("audio-element");
        // if (audio.readyState > 0) {
        //     var minutes = parseInt(audio.duration / 60, 10);
        //     var seconds = parseInt(audio.duration % 60); 
        // }
        // audio.currentTime     = a / 1200 * b
        console.log(a);
        console.log(b);
        if (audio.paused) {

            audio.play();
            btn2.innerHTML = ''
            tiame1 = parseInt(b) * 1000 / 1200

            tiems = setInterval(function () {
                a++
                speed_img.style.left = (a - 20) + 'px'
                speed.style.boxShadow = ' ' + a + 'px 0 1px 0 black inset'
                if (a == 1200) {
                    clearInterval(tiems)
                    btn3.click()
                }
            }, tiame1)

            console.log(audio.currentTime);
        } else {


            audio.pause();
            btn2.innerHTML = ''
            clearInterval(tiems)
            tiems = null
        }

    }
    var source = document.querySelector('.source')
    var btn1 = document.querySelector('.btn1')
    var num1 = 0

    var tiame1 = null
    var audio = document.getElementById("audio-element");

    // 上一首
    btn1.addEventListener('click', function () {

        clearInterval(tiems)
        a = 0

        if (num1 == 0) {
            num1 = arr.length - 1
        }
        num1--
        text.innerHTML = arr[num1].substring(0, arr[num1].length - 4)
        audio.src = '../../../../Music/' + arr[num1] + ''
        source.src = '../../../../Music/' + arr[num1] + ''
        audio.load();
        audio = document.getElementById("audio-element");

        audio.oncanplay = function () {
            b = audio.duration
            duration()
        }

    })
    // 下一首
    var btn3 = document.querySelector('.btn3')
    btn3.addEventListener('click', function () {
        clearInterval(tiems)
        a = 0
        if (num1 == arr.length - 1) {
            num1 = 0
        }
        num1++
        text.innerHTML = arr[num1].substring(0, arr[num1].length - 4)
        audio.src = '../../../../Music/' + arr[num1] + ''
        source.src = '../../../../Music/' + arr[num1] + ''
        audio.load();


        audio.oncanplay = function () {

            b = audio.duration
            duration()
        }

    })

    //    音量调节
    var btn4 = document.querySelector('.btn4')
    var p1 = btn4.querySelector('p')
    var num2 = 0

    var move1 = 20
    var x1 = 0
    audio.volume = 20 / 100
    p1.style.left = move1 + 'px'
    btn4.style.boxShadow = ' ' + move1 + 'px 0 1px 0 black inset'
    p1.addEventListener('mousedown', function (e) {
        x1 = e.pageX
        num2 = p1.offsetLeft
        console.log(x1);


        document.addEventListener('mousemove', move)
        function move(e) {
            move1 = e.pageX - x1 + num2
            // console.log(e.pageX);
            // console.log(move1);
            if (move1 <= 0) {
                move1 = 0;
            } else if (move1 >= 95) {
                move1 = 95;
            }
            p1.style.left = move1 + 'px'
            btn4.style.boxShadow = ' ' + move1 + 'px 0 1px 0 black inset'
            audio.volume = move1 / 95

        }
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', move);
        })
        e.stopPropagation()
        // console.log(audio.volume);
    })
    btn4.addEventListener('click', function (e) {
        pmove = move1
        var pmove = e.pageX - (btn4.offsetLeft + 5)
        if (pmove <= 0) {
            pmove = 0
        }
        p1.style.left = pmove + 'px'
        this.style.boxShadow = ' ' + pmove + 'px 0 1px 0 black inset'
        audio.volume = pmove / 100
        move1 = pmove
        // console.log(audio.volume);
    })
    // console.log(audio.volume);
    // 歌曲列表
    var list = document.querySelector('.list')
    for (var j = 0; j < arr.length; j++) {
        var list1 = document.createElement('a')
        list.appendChild(list1)
        list1.setAttribute('index', j)
        list1.innerHTML = arr[j]
        list1.addEventListener('click', function (e) {

            e.preventDefault
            var index = this.getAttribute('index')
            num1 = index
            var mp3 = []
            mp3 = this.innerHTML
            text.innerHTML = this.innerHTML.substring(0, arr[num1].length - 4)
            console.log(mp3);
            audio.src = '../../../../Music/' + mp3 + ''
            source.src = '../../../../Music/' + mp3 + ''
            audio.load()
            a = 0
            clearInterval(tiems)
            audio.oncanplay = function () {

                b = audio.duration
                duration()
            }
            // btn2.click()
            // console.log(this.innerHTML.substring(2, this.innerHTML.length));
        })

    }
    // list.innerHTML = list1
})
