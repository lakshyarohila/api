import { NextResponse } from "next/server";

export async function GET() {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything.",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What do you call fake spaghetti? An impasta.",
    "How do you organize a space party? You planet.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why did the programmer quit his job? He didn't get arrays.",
    "What do you call a programmer from Finland? Nerdic.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why do Java developers wear glasses? Because they can't C#.",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "What's the object-oriented way to become wealthy? Inheritance.",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",
    "Why did the developer go broke? Because he used up all his cache.",
    "What do you call a programmer who doesn't comment code? An undocumented developer.",
    "What did one hat say to the other? Stay here, I'm going on ahead.",
    "Why don’t eggs tell jokes? They’d crack up.",
    "What do you call a dinosaur that is sleeping? A dino-snore.",
    "How does a penguin build its house? Igloos it together.",
    "What do you call a fish wearing a bowtie? Sofishticated.",
    "What do you call a can opener that doesn’t work? A can’t opener.",
    "Why did the cookie go to the doctor? Because it was feeling crumbly.",
    "What did the grape do when he got stepped on? He let out a little wine.",
    "What do you call a cheese that isn’t yours? Nacho cheese.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "What do you call a dog magician? A labracadabrador.",
    "Why don’t sharks like fast food? Because they can’t catch it.",
    "What do you get when you cross a cat and a lemon? A sourpuss.",
    "Why did the cow go to outer space? To see the moooon.",
    "What do you call a sleeping bull? A bulldozer.",
    "Why did the frog call his insurance company? He had a jump in his car.",
    "What do you call a bear with no ears? B.",
    "Why don’t oysters donate to charity? Because they’re shellfish.",
    "What do you call a sheep with no legs? A cloud.",
    "Why did the chicken join a band? Because it had the drumsticks.",
    "I’m reading a book on anti-gravity. It’s impossible to put down.",
    "I used to be a baker because I kneaded dough.",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why did the stadium get hot after the game? All the fans left.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "Why did the math book look sad? Because it had too many problems.",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "What did the left eye say to the right eye? Between us, something smells.",
  ];

  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

  const headers = new Headers();
  headers.append("Access-Control-Allow-Origin", "*");

  return NextResponse.json({ joke: randomJoke }, { headers });
}
