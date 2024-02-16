const articles = [
    {
        id: 5,
        title: 'How to Pack a Parachute',
        date: '2023-09-10',
        author: 'Tom Miller',
        content: `
            <p>
                Packing your parachute is an important part of skydiving. The following video shows how to pack a
                main parachute.
            </p>
            <div class="embedded-video">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0jLfb76FzkQ?si=iMf3NzzMaKRnc4LO"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
            <p>
                In summary, to pack a parachute you need to:

                <ol>
                    <li>Stow the toggles and check the lines</li>
                    <li>Pick up the lines and walk toward the canopy, removing any twists</li>
                    <li>Count the cells and hold the nose between your legs</li>
                    <li>Flake the fabric between the line groups</li>
                    <li>Spread the slider out between the line groups, placing it as far down as possible</li>
                    <li>Take the tail to the lines and wrap the sides around the rest of the canopy</li>
                    <li>Twist the edges and gently lay the resulting cocoon on the ground</li>
                    <li>Press the air out of the cocoon and fold it</li>
                    <li>Put the canopy into the deployment bag, pulling the bag around the folded cocoon</li>
                    <li>Close the deployment bag by wrapping the rubber bands around the lines</li>
                    <li>Make additional stows by wrapping the lines with the remaining rubber bands</li>
                    <li>Place the bag and the lines into the container</li>
                    <li>Close the container's flaps with the pin</li>
                    <li>Fold the pilot chute and stow it in the bottom of the container</li>
                </ol>
            </p>
            <p>
                Whew, that's quite a lot of steps! But don't worry, the more you practice, the easier it gets.
            </p>
        `,
    },
    {
        id: 4,
        title: 'How Safe is Skydiving?',
        date: '2023-08-25',
        author: 'Sarah Smith',
        content: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum nisi eget
                accumsan consectetur. Sed sollicitudin semper orci sed luctus. Nam ac dictum quam.
                Aliquam erat volutpat. Donec quam sapien, semper tempor scelerisque id, sagittis
                vitae mi. Nunc in suscipit purus. Donec dui nibh, facilisis vitae dolor sed,
                consequat ullamcorper mauris.
            </p>
            <p>
                Vestibulum malesuada purus id nulla consectetur, nec ornare mi maximus. Aenean vitae
                faucibus odio. Ut varius leo sed aliquam vehicula. Mauris eu ligula libero.
                Nulla erat urna, aliquet cursus justo sit amet, hendrerit pharetra felis. Phasellus
                eget justo eros. Pellentesque vitae risus eu felis semper aliquet luctus nec neque.
                Integer aliquet, lectus id luctus convallis, dolor arcu vulputate libero, eu
                molestie neque elit sit amet libero. Quisque lacinia suscipit scelerisque.
                Nulla ultrices luctus ex ultricies lacinia. Donec congue vehicula tortor, non
                aliquam magna sollicitudin a. Etiam posuere urna vitae scelerisque efficitur.
                Duis sodales ornare justo vitae suscipit.
            </p>
            <p>
                Nunc hendrerit ex felis, nec pretium ante interdum ut. Morbi at accumsan orci.
                Maecenas dapibus metus sapien, sed auctor velit consequat et. Curabitur mollis
                semper dui, non feugiat nisl posuere id. Nunc accumsan ultricies libero, in
                ornare nisi venenatis sit amet. Quisque ut diam eros. Sed at ex a neque molestie
                tincidunt vel et dolor. Duis velit dolor, fringilla at odio vitae, interdum
                iaculis ex. Sed lobortis vestibulum erat. Nulla condimentum odio enim, ut
                efficitur enim imperdiet ut. Ut id convallis arcu. In a dapibus quam.
                Aliquam maximus justo leo.
            </p>
        `,
    },
    {
        id: 3,
        title: 'Hand Signs for Skydiving',
        date: '2023-08-14',
        author: 'Mike Jones',
        content: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum nisi eget
                accumsan consectetur. Sed sollicitudin semper orci sed luctus. Nam ac dictum quam.
                Aliquam erat volutpat. Donec quam sapien, semper tempor scelerisque id, sagittis
                vitae mi. Nunc in suscipit purus. Donec dui nibh, facilisis vitae dolor sed,
                consequat ullamcorper mauris.
            </p>
            <p>
                Vestibulum malesuada purus id nulla consectetur, nec ornare mi maximus. Aenean vitae
                faucibus odio. Ut varius leo sed aliquam vehicula. Mauris eu ligula libero.
                Nulla erat urna, aliquet cursus justo sit amet, hendrerit pharetra felis. Phasellus
                eget justo eros. Pellentesque vitae risus eu felis semper aliquet luctus nec neque.
                Integer aliquet, lectus id luctus convallis, dolor arcu vulputate libero, eu
                molestie neque elit sit amet libero. Quisque lacinia suscipit scelerisque.
                Nulla ultrices luctus ex ultricies lacinia. Donec congue vehicula tortor, non
                aliquam magna sollicitudin a. Etiam posuere urna vitae scelerisque efficitur.
                Duis sodales ornare justo vitae suscipit.
            </p>
            <p>
                Nunc hendrerit ex felis, nec pretium ante interdum ut. Morbi at accumsan orci.
                Maecenas dapibus metus sapien, sed auctor velit consequat et. Curabitur mollis
                semper dui, non feugiat nisl posuere id. Nunc accumsan ultricies libero, in
                ornare nisi venenatis sit amet. Quisque ut diam eros. Sed at ex a neque molestie
                tincidunt vel et dolor. Duis velit dolor, fringilla at odio vitae, interdum
                iaculis ex. Sed lobortis vestibulum erat. Nulla condimentum odio enim, ut
                efficitur enim imperdiet ut. Ut id convallis arcu. In a dapibus quam.
                Aliquam maximus justo leo.
            </p>
        `,
    },
    {
        id: 2,
        title: 'How to Become a Licensed Skydiver in the UK',
        date: '2023-08-07',
        author: 'Sarah Smith',
        content: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum nisi eget
                accumsan consectetur. Sed sollicitudin semper orci sed luctus. Nam ac dictum quam.
                Aliquam erat volutpat. Donec quam sapien, semper tempor scelerisque id, sagittis
                vitae mi. Nunc in suscipit purus. Donec dui nibh, facilisis vitae dolor sed,
                consequat ullamcorper mauris.
            </p>
            <p>
                Vestibulum malesuada purus id nulla consectetur, nec ornare mi maximus. Aenean vitae
                faucibus odio. Ut varius leo sed aliquam vehicula. Mauris eu ligula libero.
                Nulla erat urna, aliquet cursus justo sit amet, hendrerit pharetra felis. Phasellus
                eget justo eros. Pellentesque vitae risus eu felis semper aliquet luctus nec neque.
                Integer aliquet, lectus id luctus convallis, dolor arcu vulputate libero, eu
                molestie neque elit sit amet libero. Quisque lacinia suscipit scelerisque.
                Nulla ultrices luctus ex ultricies lacinia. Donec congue vehicula tortor, non
                aliquam magna sollicitudin a. Etiam posuere urna vitae scelerisque efficitur.
                Duis sodales ornare justo vitae suscipit.
            </p>
            <p>
                Nunc hendrerit ex felis, nec pretium ante interdum ut. Morbi at accumsan orci.
                Maecenas dapibus metus sapien, sed auctor velit consequat et. Curabitur mollis
                semper dui, non feugiat nisl posuere id. Nunc accumsan ultricies libero, in
                ornare nisi venenatis sit amet. Quisque ut diam eros. Sed at ex a neque molestie
                tincidunt vel et dolor. Duis velit dolor, fringilla at odio vitae, interdum
                iaculis ex. Sed lobortis vestibulum erat. Nulla condimentum odio enim, ut
                efficitur enim imperdiet ut. Ut id convallis arcu. In a dapibus quam.
                Aliquam maximus justo leo.
            </p>
        `,
    },
    {
        id: 1,
        title: 'What is Tandem Skydiving?',
        date: '2023-07-29',
        author: 'Tom Miller',
        content: `
            <p>
                Tandem Skydiving is a great way to experience this amazing sport without having to
                learn how to skydive yourself. You will be attached to a tandem instructor who will
                guide you through the whole experience.
            </p>
            <img class="article-image" src="/images/articles/tandem1.jpg" alt="A tandem instructor in free fall with his student">
            <p>
                Vestibulum malesuada purus id nulla consectetur, nec ornare mi maximus. Aenean vitae
                faucibus odio. Ut varius leo sed aliquam vehicula. Mauris eu ligula libero.
                Nulla erat urna, aliquet cursus justo sit amet, hendrerit pharetra felis. Phasellus
                eget justo eros. Pellentesque vitae risus eu felis semper aliquet luctus nec neque.
                Integer aliquet, lectus id luctus convallis, dolor arcu vulputate libero, eu
                molestie neque elit sit amet libero. Quisque lacinia suscipit scelerisque.
                Nulla ultrices luctus ex ultricies lacinia. Donec congue vehicula tortor, non
                aliquam magna sollicitudin a. Etiam posuere urna vitae scelerisque efficitur.
                Duis sodales ornare justo vitae suscipit.
            </p>
            <p>
                Nunc hendrerit ex felis, nec pretium ante interdum ut. Morbi at accumsan orci.
                Maecenas dapibus metus sapien, sed auctor velit consequat et. Curabitur mollis
                semper dui, non feugiat nisl posuere id. Nunc accumsan ultricies libero, in
                ornare nisi venenatis sit amet. Quisque ut diam eros. Sed at ex a neque molestie
                tincidunt vel et dolor. Duis velit dolor, fringilla at odio vitae, interdum
                iaculis ex. Sed lobortis vestibulum erat. Nulla condimentum odio enim, ut
                efficitur enim imperdiet ut. Ut id convallis arcu. In a dapibus quam.
                Aliquam maximus justo leo.
            </p>
        `,
    },
];

function getArticles(searchText = '') {
    return articles.filter((article) => {
        return article.title.toLowerCase().includes(searchText.toLowerCase());
    });
}
