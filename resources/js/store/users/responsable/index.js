import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            // events: null,
            selectedEvent: null,
            selectedEventSessions: null,
            selectedEventCommittees: null,
            contacts: null,
            eventAdmins: null,
            responsables: null,
            sessionAdmins: null,
            users: null,
            user: null,
            // events: null,
            events: [
                {
                    "id": 1,
                    "name": "Miller, Predovic and Sipes",
                    "description": "Rerum consequatur sed sequi aut pariatur. Perspiciatis et laborum laboriosam suscipit et. Est similique similique est voluptatum rerum atque. Sint voluptatem aut corporis. Atque et vitae quia et. Vitae quibusdam quisquam corporis. Natus necessitatibus eum neque modi illum sit quo. Suscipit vero assumenda quam beatae. Animi sunt et aut quam veritatis autem voluptatem enim. Est dolores omnis ut quo illum itaque suscipit.",
                    "startDate": "2019-10-30 13:32:35",
                    "endDate": "2022-06-22 02:44:07",
                    "type": "conference",
                    "city": "North Vitaburgh",
                    "country": "Seychelles",
                    "address": "38807 Luettgen Springs Apt. 378\nWest Kamilleshire, AL 23753",
                    "venueName": "Rolfson Station",
                    "phone": "+1 (989) 408-0478",
                    "email": "ymiller@gmail.com",
                    "created_at": "2021-06-10T14:44:42.000000Z",
                    "updated_at": "2021-06-10T14:44:42.000000Z",
                    "event_id": 1,
                    "image": "c4c638684789d01bf75c0bd05e979291.png"
                },
                {
                    "id": 2,
                    "name": "Turner, Murazik and Kub",
                    "description": "Nemo vitae qui omnis quasi et eos voluptates. Ut quod reprehenderit molestiae dolor ipsam vero. Amet est commodi aut aut repellat ad. Et esse recusandae facere et sed veritatis ullam. Voluptatibus est fugiat in voluptatem distinctio eum ipsam.",
                    "startDate": "2019-07-24 05:12:40",
                    "endDate": "2022-11-22 19:24:27",
                    "type": "formation",
                    "city": "Hilpertview",
                    "country": "Tuvalu",
                    "address": "65920 Abshire Village Apt. 084\nKiehnchester, DE 94021",
                    "venueName": "Elijah Branch",
                    "phone": "915.929.3558",
                    "email": "newell.turcotte@gmail.com",
                    "created_at": "2021-06-10T14:44:43.000000Z",
                    "updated_at": "2021-06-10T14:44:43.000000Z",
                    "event_id": 2,
                    "image": "0f6b1f72142e09abb489d28983402299.png"
                },
                {
                    "id": 3,
                    "name": "Reynolds-Hauck",
                    "description": "Eaque magni veniam voluptate aut. Odio est quia tempora ducimus neque doloribus cum rerum. Nobis iure hic quasi molestiae quisquam laudantium. Corporis magni error nobis placeat rerum labore aut. Omnis non tempora vel quam. Sit ut atque illo nulla fugit qui temporibus. Delectus veritatis et autem eos et odio. Adipisci quam dolorem aut molestias illum porro non saepe. Dignissimos maiores eos aliquam blanditiis odit autem vitae dolore. Illo amet eaque illum quae velit et illum.",
                    "startDate": "2020-08-21 10:08:11",
                    "endDate": "2022-11-22 06:35:49",
                    "type": "conference",
                    "city": "Carterstad",
                    "country": "Argentina",
                    "address": "4201 Kirlin Roads Apt. 204\nPaytonland, SD 50484-0125",
                    "venueName": "Kareem Expressway",
                    "phone": "+1 (308) 354-7082",
                    "email": "kuhn.aiden@hotmail.com",
                    "created_at": "2021-06-10T14:44:44.000000Z",
                    "updated_at": "2021-06-10T14:44:44.000000Z",
                    "event_id": 3,
                    "image": "30873e71396265e97ebb079158bf66bd.png"
                },
                {
                    "id": 4,
                    "name": "Dickinson-Carter",
                    "description": "Commodi voluptatum inventore repellendus qui nulla voluptatem. Magnam est doloremque consequatur quo tempora. Voluptatem voluptatem deleniti inventore eveniet odit ex sunt repellat. Perspiciatis architecto nisi asperiores repudiandae et beatae. Iste molestias ut ut aut vel excepturi inventore. Et nemo inventore occaecati suscipit minus commodi. Voluptas minima consequuntur accusantium natus incidunt doloribus est. Eius magnam et laborum harum. Provident similique ut dolor sint a veritatis consequatur deleniti.",
                    "startDate": "2020-08-25 06:42:39",
                    "endDate": "2021-09-22 10:57:48",
                    "type": "formation",
                    "city": "South Mercedesburgh",
                    "country": "Romania",
                    "address": "482 Ritchie Skyway\nEast Loma, NV 78255-6751",
                    "venueName": "Elsa Plaza",
                    "phone": "+1-628-870-5158",
                    "email": "wlangosh@yahoo.com",
                    "created_at": "2021-06-10T14:44:45.000000Z",
                    "updated_at": "2021-06-10T14:44:45.000000Z",
                    "event_id": 4,
                    "image": "e79d0a9b0ac71238c7fee29728bc58a0.png"
                },
                {
                    "id": 5,
                    "name": "Legros and Sons",
                    "description": "Non sunt non quidem quidem. Distinctio temporibus ut alias molestias. Tempore dolorem fuga deserunt quo id aperiam eaque. Enim eos quae voluptatum omnis esse occaecati. Vel libero ratione quam voluptas. Dolorem consequatur non dolor ex nemo laborum. Vel sit odit autem facere nam dicta sequi. Error architecto aut hic eaque et blanditiis autem. Odio voluptas cupiditate eveniet autem similique. Vitae repudiandae voluptatum harum voluptas.",
                    "startDate": "2021-04-09 11:54:38",
                    "endDate": "2022-06-22 00:45:31",
                    "type": "formation",
                    "city": "New Bart",
                    "country": "Heard Island and McDonald Islands",
                    "address": "442 Rebeca Land\nSouth Austyn, SD 05749-2957",
                    "venueName": "Macejkovic Fields",
                    "phone": "1-425-988-4358",
                    "email": "moen.trey@hotmail.com",
                    "created_at": "2021-06-10T14:44:46.000000Z",
                    "updated_at": "2021-06-10T14:44:46.000000Z",
                    "event_id": 5,
                    "image": "cb7e779cc4024a8a3208988017a160a4.png"
                },
                {
                    "id": 6,
                    "name": "Welch-Grimes",
                    "description": "Expedita corrupti earum ex soluta cum explicabo non. Expedita voluptatem autem voluptatem. Amet et delectus ut quam distinctio id sed. Porro et culpa nisi at expedita. Nulla autem saepe alias eaque tenetur recusandae quo. Provident et temporibus omnis qui minima.",
                    "startDate": "2020-01-11 10:41:06",
                    "endDate": "2022-07-09 14:38:18",
                    "type": "conference",
                    "city": "New Isacstad",
                    "country": "Sweden",
                    "address": "3638 O'Kon Streets Suite 819\nStephanyfurt, OR 12812-8364",
                    "venueName": "Torphy Parkway",
                    "phone": "1-574-673-9136",
                    "email": "ctreutel@hotmail.com",
                    "created_at": "2021-06-10T14:44:47.000000Z",
                    "updated_at": "2021-06-10T14:44:47.000000Z",
                    "event_id": 6,
                    "image": "171161de2dedfbead758539b4b3de384.png"
                },
                {
                    "id": 7,
                    "name": "Hilpert-Pfannerstill",
                    "description": "Totam dolore sapiente et laboriosam quos. Voluptates sapiente sit id facilis qui pariatur ad. Dolorem qui quia vero qui. Cupiditate ducimus voluptas alias omnis officiis deleniti perferendis. Dolorum aspernatur nostrum quis incidunt nobis tempore. Id tenetur consequatur animi exercitationem eveniet eaque. Dolore nulla eveniet minus labore quos voluptas maxime incidunt. Dolorem cumque non aspernatur vel atque.",
                    "startDate": "2019-12-05 16:25:39",
                    "endDate": "2022-06-05 03:50:22",
                    "type": "atelier",
                    "city": "Madonnaburgh",
                    "country": "Singapore",
                    "address": "58534 Jayne Locks\nLake Tremayneside, NC 92408-2314",
                    "venueName": "Rowe Brook",
                    "phone": "+1-703-214-4144",
                    "email": "kluettgen@gmail.com",
                    "created_at": "2021-06-10T14:44:48.000000Z",
                    "updated_at": "2021-06-10T14:44:48.000000Z",
                    "event_id": 7,
                    "image": "85b1e028e1ce5670b1f554261624664b.png"
                },
                {
                    "id": 8,
                    "name": "O'Connell-Ferry",
                    "description": "Ratione voluptatem incidunt consequatur doloremque at voluptates. Reiciendis et dolorum ducimus molestiae et. Libero quo explicabo et nostrum molestiae autem quasi. Autem molestias harum in dolor placeat officiis enim. Ipsum commodi voluptatem rerum sint consequatur et rerum. Assumenda molestiae cupiditate perferendis deserunt. Optio nihil id explicabo quae tempore dolores. Fuga unde laboriosam laboriosam qui est maxime velit.",
                    "startDate": "2019-06-15 19:29:41",
                    "endDate": "2021-10-22 00:40:03",
                    "type": "conference",
                    "city": "Luciotown",
                    "country": "Ghana",
                    "address": "777 Stokes Spurs Apt. 223\nRamonland, IL 62549",
                    "venueName": "Dixie Throughway",
                    "phone": "1-415-462-2921",
                    "email": "minnie33@yahoo.com",
                    "created_at": "2021-06-10T14:44:50.000000Z",
                    "updated_at": "2021-06-10T14:44:50.000000Z",
                    "event_id": 8,
                    "image": "5811adceffb79855091fd23f2f5f52b1.png"
                },
                {
                    "id": 9,
                    "name": "Kuhlman, Raynor and Rosenbaum",
                    "description": "Sed id odit sunt fugiat labore sequi harum assumenda. Excepturi numquam pariatur eum ipsum. Fugiat ipsam eum quibusdam incidunt rerum. Qui dolorem cumque ut sed. Quia et quod minus veritatis animi quia molestias.",
                    "startDate": "2021-03-09 08:39:21",
                    "endDate": "2022-03-01 21:03:05",
                    "type": "conference",
                    "city": "Port Jacey",
                    "country": "Oman",
                    "address": "329 Thompson Circle Suite 312\nErinbury, IN 84204-4021",
                    "venueName": "Marquardt Mountain",
                    "phone": "1-214-443-4095",
                    "email": "bhane@yahoo.com",
                    "created_at": "2021-06-10T14:44:51.000000Z",
                    "updated_at": "2021-06-10T14:44:51.000000Z",
                    "event_id": 9,
                    "image": "a0e10e6d79546b2aec8aa85ce1f8df72.png"
                },
                {
                    "id": 10,
                    "name": "O'Reilly, Watsica and Beahan",
                    "description": "Necessitatibus praesentium error harum natus quas aut perspiciatis ut. Iste dolorem aliquid quaerat quaerat aut ipsa. Vero soluta perspiciatis laborum iusto sit non. Reprehenderit recusandae nemo placeat qui placeat ipsum corporis. Explicabo ut qui iusto aut recusandae. Dolore veritatis sed mollitia omnis numquam. Id inventore eos voluptatem.",
                    "startDate": "2019-10-22 00:23:37",
                    "endDate": "2023-03-25 01:21:46",
                    "type": "formation",
                    "city": "Strosinfurt",
                    "country": "Mauritius",
                    "address": "52787 Bogan View Apt. 404\nGaylordfort, TN 42143-4782",
                    "venueName": "Alford Falls",
                    "phone": "+12525857623",
                    "email": "nmetz@hotmail.com",
                    "created_at": "2021-06-10T14:44:52.000000Z",
                    "updated_at": "2021-06-10T14:44:52.000000Z",
                    "event_id": 10,
                    "image": "e3e8cca9f9d5d8154615fa4c5090abd7.png"
                },
                {
                    "id": 11,
                    "name": "Morissette Group",
                    "description": "Amet nostrum et aut quisquam omnis similique. Eum explicabo delectus perspiciatis aut expedita occaecati aliquid. Voluptatem quasi repellat eos odio aut. Sed corporis libero quia quod fugit. Repudiandae voluptas laborum quis omnis error impedit saepe. In blanditiis repudiandae voluptate. Qui quisquam et illo libero sunt.",
                    "startDate": "2020-01-13 21:03:59",
                    "endDate": "2022-09-03 09:20:14",
                    "type": "atelier",
                    "city": "Sabinashire",
                    "country": "Niger",
                    "address": "2850 Muller Causeway\nAdolfomouth, CO 49907",
                    "venueName": "Ashlynn Orchard",
                    "phone": "947.435.8038",
                    "email": "olesch@yahoo.com",
                    "created_at": "2021-06-10T14:44:53.000000Z",
                    "updated_at": "2021-06-10T14:44:53.000000Z",
                    "event_id": 11,
                    "image": "d7f7ab958a53fa5230de6f0c16104aae.png"
                },
                {
                    "id": 12,
                    "name": "Hauck and Sons",
                    "description": "Non quas et consequatur dolore. Eveniet occaecati aut repellat illo. Voluptates explicabo nobis doloribus rerum reiciendis debitis. Odit voluptatibus accusantium quia corrupti laboriosam soluta cum at. Ullam voluptatibus omnis officiis ut nam. Qui fuga asperiores ipsum labore doloremque nemo repellat. Et amet accusantium rerum qui. Facere consequuntur optio recusandae accusamus qui ea. Ipsa aspernatur esse minus neque consequatur. Quo fugit cupiditate ut ex.",
                    "startDate": "2020-07-07 12:01:29",
                    "endDate": "2023-01-14 13:19:11",
                    "type": "conference",
                    "city": "Lake Neldaville",
                    "country": "Germany",
                    "address": "3138 Kim Ridge Suite 295\nWest Margestad, MI 32458-8107",
                    "venueName": "Manuela Dam",
                    "phone": "757.260.9650",
                    "email": "winnifred.morissette@hotmail.com",
                    "created_at": "2021-06-10T14:44:55.000000Z",
                    "updated_at": "2021-06-10T14:44:55.000000Z",
                    "event_id": 12,
                    "image": "c6f01e9218333556953bc2217fba01ad.png"
                },
                {
                    "id": 13,
                    "name": "Davis, Nitzsche and Kuphal",
                    "description": "Vel et totam perferendis laboriosam soluta possimus asperiores. Neque eligendi iure praesentium voluptas temporibus ea quaerat. Ea iste nobis dignissimos aliquam ut voluptatem est rerum. Consequatur aliquam excepturi est fugit. Aut voluptatum a soluta ut itaque tenetur dicta. Corporis aut laudantium qui et deleniti sed repellat odio. Sint consequuntur ut sunt laboriosam qui.",
                    "startDate": "2020-03-04 05:18:58",
                    "endDate": "2022-09-18 18:51:29",
                    "type": "conference",
                    "city": "Hansenport",
                    "country": "Palestinian Territories",
                    "address": "207 Macejkovic Ridge Suite 580\nEast Arielle, CO 35357-6525",
                    "venueName": "Marcus Shoals",
                    "phone": "628-564-0193",
                    "email": "hegmann.faustino@yahoo.com",
                    "created_at": "2021-06-10T14:44:55.000000Z",
                    "updated_at": "2021-06-10T14:44:55.000000Z",
                    "event_id": 13,
                    "image": "12a1ed6ae37d5df92f258a07c7f8ce09.png"
                },
                {
                    "id": 14,
                    "name": "Franecki-Fay",
                    "description": "Vitae odit odio similique qui consequatur. Fuga ratione commodi in nemo ipsum laudantium quaerat. Voluptatem et numquam eveniet sapiente est nobis velit facilis. Quas et voluptatum maiores autem. Laudantium a aperiam delectus. Nisi aspernatur vitae temporibus sint omnis sit. Consequatur quaerat recusandae eveniet sed ullam ducimus tempore. Similique explicabo sunt voluptatem magnam eos.",
                    "startDate": "2020-03-17 08:05:04",
                    "endDate": "2021-10-17 06:44:15",
                    "type": "conference",
                    "city": "Schmelerstad",
                    "country": "Finland",
                    "address": "7969 Trent Inlet Suite 447\nSouth Eladio, TN 11022-6416",
                    "venueName": "Lisa Brook",
                    "phone": "(260) 318-6390",
                    "email": "jeffry.blick@yahoo.com",
                    "created_at": "2021-06-10T14:44:56.000000Z",
                    "updated_at": "2021-06-10T14:44:56.000000Z",
                    "event_id": 14,
                    "image": "f3694e71ba9e5b02488f578f008541f9.png"
                },
                {
                    "id": 15,
                    "name": "Predovic, Grimes and Turcotte",
                    "description": "Ad modi necessitatibus iste officia nemo. Et et ipsum tenetur harum rerum. Non necessitatibus reprehenderit odit qui consequuntur assumenda. Odio illum suscipit quis est dolore autem vitae rem. Qui quidem aspernatur id odit. Suscipit tempora error officiis dolor consequatur aut. Qui qui aut molestias. Dolores illum officia quasi rem delectus consectetur. Nihil iure aut neque eum hic illum. Consectetur et qui labore provident exercitationem enim voluptatem.",
                    "startDate": "2020-03-27 19:11:35",
                    "endDate": "2022-12-16 21:24:21",
                    "type": "atelier",
                    "city": "Eulahborough",
                    "country": "United States Minor Outlying Islands",
                    "address": "3606 Rodger Lakes Apt. 932\nLake Merrittview, OR 89251",
                    "venueName": "Krystel Summit",
                    "phone": "+1.559.757.6131",
                    "email": "dayana.jenkins@hotmail.com",
                    "created_at": "2021-06-10T14:44:57.000000Z",
                    "updated_at": "2021-06-10T14:44:57.000000Z",
                    "event_id": 15,
                    "image": "4bcf467f4f4eb214ab916eaeaae29d50.png"
                },
                {
                    "id": 16,
                    "name": "Mann and Sons",
                    "description": "Itaque vel eum ea excepturi pariatur non. Aperiam dolorum suscipit magnam aut excepturi porro. Enim sint iure quae omnis debitis et ex. Ipsum ipsam et autem omnis nihil totam qui sequi. Voluptates et quam repellat delectus sunt.",
                    "startDate": "2020-01-21 01:12:47",
                    "endDate": "2021-12-28 04:33:33",
                    "type": "formation",
                    "city": "North Willa",
                    "country": "Tajikistan",
                    "address": "775 Mohamed Stream\nNew Ignatius, GA 52395",
                    "venueName": "Eliza Crossing",
                    "phone": "+1-910-243-4474",
                    "email": "abernathy.eulah@hotmail.com",
                    "created_at": "2021-06-10T14:44:58.000000Z",
                    "updated_at": "2021-06-10T14:44:58.000000Z",
                    "event_id": 16,
                    "image": "377cdfcd9a2a87fb956a83064ce00139.png"
                },
                {
                    "id": 17,
                    "name": "Schowalter-Jacobi",
                    "description": "Perspiciatis dolorem molestias deserunt rerum nihil similique omnis sunt. Sed sint molestiae omnis nobis. Omnis nihil ut deserunt libero. Eos officia sed vitae est. Aut et sit sequi quod aut quia. Distinctio quod id quod reiciendis voluptatem ab illum. Deleniti porro assumenda ut beatae illum. Corrupti dolorem quae aliquam est. Saepe modi odit provident. Modi et nisi numquam eos velit.",
                    "startDate": "2020-05-11 21:53:02",
                    "endDate": "2022-11-08 01:03:43",
                    "type": "conference",
                    "city": "Port Royce",
                    "country": "Niue",
                    "address": "965 Torphy Courts\nSouth Keira, NJ 91694-2470",
                    "venueName": "Smith Isle",
                    "phone": "(760) 270-5639",
                    "email": "jedidiah.dubuque@hotmail.com",
                    "created_at": "2021-06-10T14:45:00.000000Z",
                    "updated_at": "2021-06-10T14:45:00.000000Z",
                    "event_id": 17,
                    "image": "5a274b6911f715daa1fbccfeb04338a8.png"
                },
                {
                    "id": 18,
                    "name": "Padberg-O'Hara",
                    "description": "Repellat adipisci ullam laborum fugiat ut. Quia doloremque vitae eius molestiae et inventore odit. Ipsa quia porro provident dolores rem vel quis. Eveniet non voluptatum aut cupiditate aperiam hic. Reiciendis deleniti eum laboriosam dolor dolorem veritatis. Ut nobis officiis dolores voluptatibus nostrum voluptatem culpa. Culpa possimus ut deserunt quos optio.",
                    "startDate": "2021-01-11 21:19:03",
                    "endDate": "2022-09-13 13:34:26",
                    "type": "conference",
                    "city": "Port Marvin",
                    "country": "Faroe Islands",
                    "address": "883 Amanda Grove\nKovacekton, OK 35696-7923",
                    "venueName": "Bonnie Trail",
                    "phone": "351.717.1155",
                    "email": "erin51@yahoo.com",
                    "created_at": "2021-06-10T14:45:01.000000Z",
                    "updated_at": "2021-06-10T14:45:01.000000Z",
                    "event_id": 18,
                    "image": "e9511b01c642f1acd7396cee8f8fffd5.png"
                },
                {
                    "id": 19,
                    "name": "Nienow Group",
                    "description": "Perferendis unde commodi et quasi eum sit accusamus eum. Quasi consequuntur consectetur totam blanditiis similique. Voluptatem et enim cum tempore sequi. Dolorum delectus quos aperiam minima. Est commodi minima et asperiores nam. Adipisci molestiae enim perspiciatis. Enim distinctio qui consequatur error. Sit et laudantium nihil nostrum esse quo molestias.",
                    "startDate": "2019-06-20 06:26:53",
                    "endDate": "2022-06-02 20:12:03",
                    "type": "conference",
                    "city": "West Nyahland",
                    "country": "Latvia",
                    "address": "24930 Cummings Station\nNelsfurt, OR 72747",
                    "venueName": "Green Via",
                    "phone": "480.371.0017",
                    "email": "marks.jadyn@hotmail.com",
                    "created_at": "2021-06-10T14:45:02.000000Z",
                    "updated_at": "2021-06-10T14:45:02.000000Z",
                    "event_id": 19,
                    "image": "34aeaafd2bee65f6559cc3ba26b32511.png"
                },
                {
                    "id": 20,
                    "name": "Hettinger, Fay and Zboncak",
                    "description": "Iste in ut enim blanditiis. Velit ullam aspernatur dolores maxime. Nemo perspiciatis quidem excepturi aliquam nihil consequatur assumenda. Quas ipsam pariatur deserunt laudantium. Maxime facilis debitis fugit officia. Repudiandae iste reprehenderit officiis voluptatem dolores qui rem. Asperiores non possimus qui autem molestiae.",
                    "startDate": "2019-12-22 17:39:07",
                    "endDate": "2021-08-25 04:50:46",
                    "type": "atelier",
                    "city": "Schoenburgh",
                    "country": "Australia",
                    "address": "732 Betty River Apt. 289\nPort Jose, SD 92302",
                    "venueName": "Brannon Ville",
                    "phone": "(251) 747-8043",
                    "email": "marion.rolfson@hotmail.com",
                    "created_at": "2021-06-10T14:45:03.000000Z",
                    "updated_at": "2021-06-10T14:45:03.000000Z",
                    "event_id": 20,
                    "image": "d52a27ba995976271c6c223f630e415b.png"
                },
                {
                    "id": 21,
                    "name": "Rodriguez Ltd",
                    "description": "Vel occaecati voluptatum aut nulla eveniet nesciunt. Magnam quasi eveniet voluptas totam autem eius qui et. Placeat quibusdam iste ex ut velit totam occaecati officia. Doloribus quia rem quis doloremque. Ipsam aliquid non dicta provident fugiat commodi. Minima vero eligendi dolorum officia fugiat. Deleniti delectus minus aut nemo numquam. Ad qui quia ducimus perspiciatis eaque deleniti. Impedit modi suscipit facere fuga. Aspernatur dicta voluptatem perferendis.",
                    "startDate": "2020-09-09 14:55:30",
                    "endDate": "2022-05-16 22:37:54",
                    "type": "atelier",
                    "city": "West Malvina",
                    "country": "Mali",
                    "address": "30872 Morar Meadow\nWest Cameron, KS 71144-5679",
                    "venueName": "Everett Manors",
                    "phone": "216-817-4260",
                    "email": "gaylord.luigi@gmail.com",
                    "created_at": "2021-06-10T14:45:04.000000Z",
                    "updated_at": "2021-06-10T14:45:04.000000Z",
                    "event_id": 21,
                    "image": "7fa8b45b7c2d4663558174c519c00417.png"
                },
                {
                    "id": 22,
                    "name": "Cartwright, Larson and Auer",
                    "description": "Eaque optio ipsam officia dolorum minus soluta eaque libero. Qui sequi debitis ipsa reprehenderit hic ipsam aliquam. Qui amet ullam eius cumque sapiente assumenda nemo. Corrupti aperiam excepturi quaerat occaecati placeat hic harum. Et voluptas impedit quas dicta vel ut nulla. Sunt consequuntur unde molestias est aut officia ad ratione. Facere architecto autem dolor earum vel perferendis dolore.",
                    "startDate": "2021-02-21 22:37:45",
                    "endDate": "2023-02-28 06:38:21",
                    "type": "conference",
                    "city": "Lake Shawnfort",
                    "country": "New Zealand",
                    "address": "669 Matilde Flat\nLednerberg, KS 76606",
                    "venueName": "Blick Canyon",
                    "phone": "1-240-321-2150",
                    "email": "okuhlman@gmail.com",
                    "created_at": "2021-06-10T14:45:05.000000Z",
                    "updated_at": "2021-06-10T14:45:05.000000Z",
                    "event_id": 22,
                    "image": "a4c3ee05daed9ed41ecc0853ec02f794.png"
                },
                {
                    "id": 23,
                    "name": "Auer, Kunze and Kerluke",
                    "description": "Voluptatem blanditiis dolorem est id et minus alias voluptas. Quod aut exercitationem esse animi sit. Sit aut corrupti ut. Corporis nihil voluptatem itaque quam qui. Aspernatur odit suscipit quia explicabo dolores. A et et ut molestiae.",
                    "startDate": "2021-04-12 04:12:13",
                    "endDate": "2022-02-07 13:41:23",
                    "type": "atelier",
                    "city": "East Loma",
                    "country": "Finland",
                    "address": "950 Beahan Bridge Suite 598\nO'Connerland, SD 01860-5765",
                    "venueName": "Huels Courts",
                    "phone": "+1-678-314-2800",
                    "email": "hoyt.satterfield@hotmail.com",
                    "created_at": "2021-06-10T14:45:06.000000Z",
                    "updated_at": "2021-06-10T14:45:06.000000Z",
                    "event_id": 23,
                    "image": "3fa4a2ec58291906653c3e5832b4fd46.png"
                },
                {
                    "id": 24,
                    "name": "Rath LLC",
                    "description": "Ea delectus aut et numquam quidem. Qui sint sed necessitatibus doloribus deserunt rerum vero. Saepe optio odit dignissimos et. Quibusdam magnam adipisci quia et necessitatibus voluptates unde hic. Architecto cum debitis dolorem odit vel. Voluptas ex eos dolor voluptas molestiae at dolores. Aut excepturi voluptas animi illum doloribus. Veniam quas aut at aspernatur corporis aut dolorem.",
                    "startDate": "2019-07-29 10:44:01",
                    "endDate": "2021-10-05 08:52:41",
                    "type": "conference",
                    "city": "Lake Jerod",
                    "country": "Solomon Islands",
                    "address": "1603 Hoyt Walk\nNew Venaview, TN 15239-3203",
                    "venueName": "Murazik Junction",
                    "phone": "(629) 516-2399",
                    "email": "ziemann.heber@hotmail.com",
                    "created_at": "2021-06-10T14:45:07.000000Z",
                    "updated_at": "2021-06-10T14:45:07.000000Z",
                    "event_id": 24,
                    "image": "5bb009cb6abf53b69aae81297b1b3381.png"
                },
                {
                    "id": 25,
                    "name": "Hyatt, Marvin and Parisian",
                    "description": "Debitis neque iusto quisquam dolorem. Ducimus quam expedita impedit dolorem. Quia architecto exercitationem distinctio quo vel. Non officia provident perferendis. Vitae aut tempore vitae ut est. Enim voluptatem reprehenderit occaecati quidem numquam nihil corporis ex. Voluptatem quis aliquam nobis sunt enim. Eveniet tempore ea in odit ipsa. Sit qui impedit amet eum odio suscipit. Vel perspiciatis ut et ut voluptas.",
                    "startDate": "2020-02-14 14:07:43",
                    "endDate": "2022-06-12 11:00:51",
                    "type": "atelier",
                    "city": "Port Steve",
                    "country": "Nicaragua",
                    "address": "81322 Cortez Lane Apt. 949\nNorth Anais, RI 90086",
                    "venueName": "Friesen Prairie",
                    "phone": "(872) 390-4436",
                    "email": "njerde@hotmail.com",
                    "created_at": "2021-06-10T14:45:08.000000Z",
                    "updated_at": "2021-06-10T14:45:08.000000Z",
                    "event_id": 25,
                    "image": "90b6577ff729f66fca2545f3bbbb7f05.png"
                },
                {
                    "id": 26,
                    "name": "Harris, Keebler and Rogahn",
                    "description": "Adipisci ipsam eligendi consectetur neque voluptatem impedit nam. Quia sequi molestiae et voluptatibus. Quia aut minima repellat omnis. Nam aut eligendi aut nesciunt voluptas tempore. Minima atque animi eos et. Exercitationem est architecto voluptate hic rem dolores ipsum.",
                    "startDate": "2019-10-16 21:54:52",
                    "endDate": "2021-09-08 01:27:06",
                    "type": "atelier",
                    "city": "West Justonshire",
                    "country": "Cambodia",
                    "address": "1064 Owen Green\nWest Romaine, IL 40570-7715",
                    "venueName": "Ottis Ville",
                    "phone": "1-539-656-7447",
                    "email": "virginia.carroll@gmail.com",
                    "created_at": "2021-06-10T14:45:09.000000Z",
                    "updated_at": "2021-06-10T14:45:09.000000Z",
                    "event_id": 26,
                    "image": "dfe99d7813a11c2dc493c5d6f74208a1.png"
                },
                {
                    "id": 27,
                    "name": "Johnson Group",
                    "description": "Illum qui libero nihil nulla facilis maxime consequatur. Assumenda voluptas quisquam et numquam in nisi. Qui et nisi eos autem assumenda qui. Delectus vel accusantium dolore ut ab a et quis. Ut voluptatum deserunt enim quia laudantium est soluta dolor. Ea incidunt veritatis sed omnis eligendi in nisi sunt. Maxime praesentium deleniti cum qui magnam error. Saepe ut libero est dolorem consequatur quaerat quos.",
                    "startDate": "2020-02-08 14:49:50",
                    "endDate": "2023-04-17 07:14:08",
                    "type": "conference",
                    "city": "Bodechester",
                    "country": "Lebanon",
                    "address": "946 Gorczany Shoals Apt. 683\nNorth Mitchell, LA 32471",
                    "venueName": "Goodwin Square",
                    "phone": "+1 (872) 471-5440",
                    "email": "clowe@yahoo.com",
                    "created_at": "2021-06-10T14:45:10.000000Z",
                    "updated_at": "2021-06-10T14:45:10.000000Z",
                    "event_id": 27,
                    "image": "8573f77e5f640380f2f0ac2b04b6d71d.png"
                },
                {
                    "id": 28,
                    "name": "Stark, Gerlach and Williamson",
                    "description": "Ut beatae laudantium et earum. Sit est similique vel sit aspernatur id accusantium. Voluptas et explicabo quia ipsa similique omnis. Voluptatem quam tempora necessitatibus ipsum nisi voluptatem. Excepturi et commodi illum provident. Quia iste ea vel dolor fuga nihil quo. Et saepe animi dicta quidem et.",
                    "startDate": "2020-07-15 10:01:01",
                    "endDate": "2021-07-28 22:46:15",
                    "type": "formation",
                    "city": "West Reganhaven",
                    "country": "Portugal",
                    "address": "753 Serenity Center\nEvalynmouth, IA 29871-3229",
                    "venueName": "Jeanne Groves",
                    "phone": "+1-651-258-5204",
                    "email": "ankunding.chelsea@hotmail.com",
                    "created_at": "2021-06-10T14:45:11.000000Z",
                    "updated_at": "2021-06-10T14:45:11.000000Z",
                    "event_id": 28,
                    "image": "6c59f47759b0d10c8f637a6f4a0209c1.png"
                },
                {
                    "id": 29,
                    "name": "Waters Ltd",
                    "description": "Eum repellat aut quo corporis. Dolores eum qui odit quis sed eum sit. Veritatis hic dolor exercitationem distinctio sint cumque minus. Non non aut repellendus quasi. Ratione optio rerum est totam placeat ea. Voluptatem sint consequatur ab vel error adipisci. Dolore laboriosam ut et esse. Quasi quidem eaque ducimus dolor magni architecto rerum laudantium.",
                    "startDate": "2021-04-06 21:06:10",
                    "endDate": "2022-10-28 03:46:32",
                    "type": "formation",
                    "city": "Barrowsstad",
                    "country": "Denmark",
                    "address": "924 Lowe Falls\nDanielleton, OH 31276",
                    "venueName": "O'Hara Mission",
                    "phone": "(239) 670-8551",
                    "email": "nelda.jacobson@gmail.com",
                    "created_at": "2021-06-10T14:45:12.000000Z",
                    "updated_at": "2021-06-10T14:45:12.000000Z",
                    "event_id": 29,
                    "image": "dd670180db8b070797653e3db18945fe.png"
                },
                {
                    "id": 30,
                    "name": "Reichert Group",
                    "description": "Possimus et earum est aut veniam aut distinctio. Sit iste consequuntur illo fugiat est asperiores. Et qui eum expedita aliquam molestiae. Molestiae dolorem eveniet ut. Vel voluptatem qui quo ut fugiat tempore. Est quia totam sapiente expedita odio. Aperiam quidem qui amet recusandae distinctio eaque provident. Vel ut iusto et soluta non. Ea quasi et placeat totam.",
                    "startDate": "2021-05-17 01:16:02",
                    "endDate": "2022-01-08 04:06:58",
                    "type": "conference",
                    "city": "Cierramouth",
                    "country": "Guam",
                    "address": "2481 Price Plains\nEast Sherwoodmouth, IA 32715-4173",
                    "venueName": "Goodwin Glens",
                    "phone": "212.717.9173",
                    "email": "pkunde@gmail.com",
                    "created_at": "2021-06-10T14:45:14.000000Z",
                    "updated_at": "2021-06-10T14:45:14.000000Z",
                    "event_id": 30,
                    "image": "9f0eca033e44606e0e4b605fec0707c5.png"
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}