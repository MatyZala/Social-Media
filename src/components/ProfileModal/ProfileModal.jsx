import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened = {modalOpened}
      onClose = {()=>setModalOpened(false)}
    >
        <form className="infoForm">
            <h3>Tú Información</h3>

            <div>
                <input 
                type="text" 
                className="infoInput" 
                name='firstname' 
                placeholder='Nombre' 
                />
                <input 
                type="text" 
                className="infoInput" 
                name='lastname' 
                placeholder='Apellido' 
                />
            </div>

            <div>
            <input 
                type="text" 
                className="infoInput" 
                name='worksAT' 
                placeholder='Trabaja en' 
                />
            </div>

            <div>
            <input 
                type="text" 
                className="infoInput" 
                name='livesIN' 
                placeholder='Vive en' 
                />
                <input 
                type="text" 
                className="infoInput" 
                name='country' 
                placeholder='Ciudad' 
                />
            </div>

            <div>
                <input 
                type="text" 
                className="infoInput"
                placeholder='Estado de relación' 
                />
            </div>

            <div>
                Imagen de perfil
                <input type="file" name='profileImg' />
                Portada
                <input type="file" name='coverImg'/>
            </div>

            <button className="button infoButton">Actualizar</button>
        </form>
    </Modal>
  );
}

export default ProfileModal