import './Feed.css';

import Post from './comps/post/Post';

import ImagemPerfil01 from './imagens/Perfil/Emma.jpg';
import ImagemPerfil02 from './imagens/Perfil/Brandon.jpg';
import ImagemPerfil03 from './imagens/Perfil/Cris.jpg';
import ImagemPerfil04 from './imagens/Perfil/Mia.jpg';
import ImagemPerfil05 from './imagens/Perfil/Misha.jpg';
import ImagemPerfil06 from './imagens/Perfil/Olivia.jpg';
import ImagemPerfil07 from './imagens/Perfil/Ron.jpg';
import ImagemPerfil08 from './imagens/Perfil/Sarah.jpg';

import ImagemPost01 from './imagens/Nenemcomopapai.jpg';
import ImagemPost02 from './imagens/Bastidores.jpg';
import ImagemPost03 from './imagens/Camera.jpg';
import ImagemPost04 from './imagens/Buquêdegirassol.jpg';
import ImagemPost05 from './imagens/Cameras.jpg';
import ImagemPost06 from './imagens/Casalbuque.jpg';
import ImagemPost07 from './imagens/Casallanternasflutuantes.jpg';
import ImagemPost09 from './imagens/Casalskincare.jpg';
import ImagemPost10 from './imagens/Emmadancando.jpg';
import ImagemPost11 from './imagens/Estúdio.jpg';
import ImagemPost12 from './imagens/Floresnamaodehomem.jpg';
import ImagemPost013 from './imagens/Fogueiracomosamigos.jpg';
import ImagemPost14 from './imagens/Homemservindomacarrao.jpg';
import ImagemPost15 from './imagens/Jantar.jpg';
import ImagemPost16 from './imagens/Microfone.jpg';
import ImagemPost17 from './imagens/Netflix.jpg';
import ImagemPost18 from './imagens/Parquecomasamigas.jpg';
import ImagemPost19 from './imagens/Pizzadecoracao.jpg';
import ImagemPost20 from './imagens/Plataformadoharry.jpg';
import ImagemPost21 from './imagens/Rosa.jpg';
import ImagemPost22 from './imagens/Sombras.jpg';
import ImagemPost23 from './imagens/Titiocomnenem.jpg';
import ImagemPost24 from './imagens/Unocomosamigos.jpg';



function Feed() {
    return(
        <div className='Feed'>
            <Post
               NomePerfil='Stuart_Emma'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost01}
               NomePerfil1='Stuart_Emma'
               Legenda="Papai ama dms essa neném!!!"    
            />

            <Post
               NomePerfil='Bran_Stu'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost03}
               NomePerfil1='Bran_Stu'
               Legenda="Presente do meu amor, eu te amo Emmaaa!"    
            />   

            <Post
               NomePerfil='Moranguinha'
               ImagemPerfil={ImagemPerfil08} 
               ImagemPost={ImagemPost24}
               NomePerfil1='Moranguinha'
               Legenda="Ninguém é amigo quando se trata de Uno, amo vcs."
            />  

            <Post
               NomePerfil='Mi_sha'
               ImagemPerfil={ImagemPerfil05} 
               ImagemPost={ImagemPost16}
               NomePerfil1='Mi_sha'
               Legenda="Mais uma pra conta."
            /> 

            <Post
               NomePerfil='Stuart_Emma'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost02}
               NomePerfil1='Stuart_Emma'
               Legenda="Essa bagunça que eu amo. ANSIOSAAAA."
            />   

            <Post
               NomePerfil='Oli'
               ImagemPerfil={ImagemPerfil06} 
               ImagemPost={ImagemPost23}
               NomePerfil1='Oli'
               Legenda="Titio ama muito essa neném, Titio babão."
            />  

            <Post
               NomePerfil='Bran_Stu'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost20}
               NomePerfil1='Bran_Stu'
               Legenda="Completamente apaixonado por ela!"
            /> 

            <Post
               NomePerfil='Ron'
               ImagemPerfil={ImagemPerfil07} 
               ImagemPost={ImagemPost06}
               NomePerfil1='Ron'
               Legenda="Demonstre que vc ama a sua mulher, eu te amo azeite de oliva."
            /> 

            <Post
               NomePerfil='Stuart_Emma'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost14}
               NomePerfil1='Stuart_Emma'
               Legenda="Eita como cozinha."
            /> 

            <Post
               NomePerfil='Stuart_Emma'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost10}
               NomePerfil1='Stuart_Emma'
               Legenda="Fazendo o que eu amo."
            /> 

            <Post
               NomePerfil='Mia_miau'
               ImagemPerfil={ImagemPerfil04} 
               ImagemPost={ImagemPost18}
               NomePerfil1='Mia_miau'
               Legenda="Com as bests."
            /> 

            <Post
               NomePerfil='Bran_Stu'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost22}
               NomePerfil1='Bran_Stu'
               Legenda="O tanto que eu amo não tá escrito."
            />

            <Post
               NomePerfil='Bolinho_cris'
               ImagemPerfil={ImagemPerfil03} 
               ImagemPost={ImagemPost013}
               NomePerfil1='Bolinho_cris'
               Legenda="Se aparecer algum bicho eu corro e largo vocês aí."
            />  

            <Post
               NomePerfil='Mi_sha'
               ImagemPerfil={ImagemPerfil05} 
               ImagemPost={ImagemPost15}
               NomePerfil1='Mi_sha'
               Legenda="Muito bom!!"
            /> 

            <Post
               NomePerfil='Bran_Stu'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost05}
               NomePerfil1='Bran_Stu'
               Legenda="Cada dia que passa a coleção aumenta mais."
            /> 

            <Post
               NomePerfil='Bran_Stu'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost04}
               NomePerfil1='Bran_Stu'
               Legenda="Levando para o meu amor (espero que ela não veja esse post)."
            /> 

            <Post
               NomePerfil='Stuart_Emma'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost07}
               NomePerfil1='Stuart_Emma'
               Legenda="Mais um sonho realizado, e o melhor do seu lado."
            /> 

            <Post
               NomePerfil='Oli'
               ImagemPerfil={ImagemPerfil06} 
               ImagemPost={ImagemPost21}
               NomePerfil1='Oli'
               Legenda="Florzinha."
            /> 

            <Post
               NomePerfil='Bolinho_cris'
               ImagemPerfil={ImagemPerfil03} 
               ImagemPost={ImagemPost11}
               NomePerfil1='Bolinho_cris'
               Legenda="Bora mais uma?"
            /> 

            <Post
               NomePerfil='Stuart_Emma'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost09}
               NomePerfil1='Stuart_Emma'
               Legenda="Arrumar a cara né (sim, eu obriguei ele)."
            /> 

            <Post
               NomePerfil='Ron'
               ImagemPerfil={ImagemPerfil07} 
               ImagemPost={ImagemPost12}
               NomePerfil1='Ron'
               Legenda="Essas são especialmente para o meu amor a minha azeite de Oliva."
            /> 

            <Post
               NomePerfil='Bran_Stu'
               ImagemPerfil={ImagemPerfil02} 
               ImagemPost={ImagemPost17}
               NomePerfil1='Bran_Stu'
               Legenda="Eu escolho dessa vez Emma!!."
            /> 

            <Post
               NomePerfil='Stuart_Emma'
               ImagemPerfil={ImagemPerfil01} 
               ImagemPost={ImagemPost19}
               NomePerfil1='Stuart_Emma'
               Legenda="Tava muito bommmm!"
            /> 

        </div>
    )
}

export default Feed;