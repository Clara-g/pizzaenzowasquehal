<?php
    $pageTitle = 'Pizza Enzo || A propos';
     include "header.php";
 ?>


<style>
    @import url("css/apropos.css");
</style>
<main>
    <article title="storytelling">
        
        <p>A la pizzeria Enzo Wasquehal </p> 
        
     
        <section>
        <p><strong>La farine et la levure fraîche sont sélectionnées.<br/>
        La pâte à pizza est pétrie, divisée en patons puis étalée sur place, chaque jour.<br/>
        Les pâtes à pizzas sont garnies  avec nos préparations, cuisinées et notre séléction d'ingrédients de qualité pour réaliser des pizzas sucrées, salées, épicées, fromagères, etc...</br>
        La pizza est cuite à environ 350 degrés quelques minutes afin qu'elle soit moelleuse et croustillante à la fois.</strong>
        </p>
        <img src="img/facade.png" alt="pizzeria wasquehal">
    </section>
    </article>
    <article title="product">
        <h2>Provenance de nos produits</h2>
        <section name="france">
            <img src="img/flagfrance.svg" alt="" />
            <ul>
            <li>Farine de tradition Française</li>
            <li>Reblochon de Savoie au lait cru</li>
            <li>Raclette de Savoie</li>
            <li>Mozzarella 100%</li>
            <li>Jambon supérieur</li>
            <li>Lardons allumettes</li>
            <li>Boeuf haché 100%</li>
            <li>Maroilles</li>
            <li>Oeufs frais</li>
            <li>Fromage de chèvre frais au lait pasteurisé</li>
            <li>Légumes : champignons de Paris, tomates grappes, pommes de terre, salade composée, roquette.</li>

                
            </ul>
        </section>
        <section name="otherorigin">
            <div>
                <img src="img/flagitaly.svg" alt="Italy" />   
                <p>Parmesan, gorgonzola, sauce tomate, mascarpone, pasta.</p>
            </div>

            <div>
                <img src="img/flagspain.svg" alt="Spain" />
                <p>Chorizo, jambon sec</p>
            </div>

            <div>
                <img src="img/flagnorthway.svg" alt="Nortwhay" />
                <p>Saumon fumé</p>
            </div>

            <div>
                <img src="img/flagmarocco.svg" alt="Maroco" />
                <p>Anchois</p>
            </div>
        </section>

    </article>

</main>

<?php include "footer.html"; ?>
</body>