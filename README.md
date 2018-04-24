# WAD-Opdracht

*IDEE*
-------

Een social media / forum pagina maken zoals Reddit. Je moet posts kunnen toevoegen, voten en reacties toevoegen.


Week 2
--------

Basic setup van de pagina met components in components. Data wordt doorgegeven met props


Week 3
--------

PropTypes aan elke component toegevoegd

PostFC.jsx(wordt nu gebruikt) is de functional component versie van Post.jsx 

Title, author, content en date kan worden aangepast via state in de App.

Ik kon het enkel werkend krijgen met de <Input />'s rechtstreeks in de <App> te zetten. 


Week 4
--------

De verschillende Inputs in de App.jsx werden gegroepeerd in een Form.jsx

Kan enkel maar lege posts toevoegen en editen.


Week 5
--------

Delete post werkt 

Add post werkt met een Form Submit nu

Eerste Link gelegd met Posts(overview) en PostDetail + Fallback

Comments toevoegen in PostDetail

AddPost gesplitst van Posts.jsx -> Route /add


Week 6
---------

State vervangen door MobX

App in een Route gestoken met een location omdat anders de Links niet meer werken door MobX

Een nieuwe post maken wordt gedaan mbv de Post.js model, comments zitten er ook in als lege array en kunnen worden toegevoegd met de addComment action

Votes toegevoegd, berekent de total met @computed upvotes-downvotes