<template>
    <section class="formTeacher">
        <h1>Teacher Form</h1>
        <form @submit.prevent="addTeacher()">
            <div class="input-group">                
                <label for="teacherName">Nombre del Profesor</label>
                <input type="text" name="teacherName" id="teacherName" placeholder="ingrese nombre" v-model="teacher.teacherName">
            </div>
            <div class="input-group">                
                <label for="surName">Apellido del Profesor</label>
                <input type="text" name="surName" id="surName" v-model="teacher.surName">
            </div>
            <div class="input-group">                
                <label for="dni">Cedula del Profesor</label>
                <input type="text" name="dni" id="dni" v-model="teacher.dni">
            </div>
            <div class="input-group">                
                <label for="subject">Materias del Profesor</label>
                <input type="text" name="subject" id="subject" v-model="subject">
                <button type="button" @:click="addSubject()"> + </button>
            </div>
            <div>
                <b>Listado de Materias :</b>
                <ul>
                    <li v-for="(element,index) in teacher.subjects" :key="index">
                        {{ element }}
                    </li>
                </ul>
            </div>
            <div class="input-group">                
                <label for="doc">Documentos entregados</label>
                <input type="checkbox" id="doc" v-model="teacher.doc">
            </div>            
            <button type="submit" >Enviar</button>
        </form>
    </section>


    <section class="tableTeachers">
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Materias</th>
                <th>Documentacion</th>    
            </tr>
            <tr v-for="element in teachers" :key="element.dni">
                <td>{{ element.teacherName }}</td>
                <td>{{ element.surName }}</td>
                <td>{{ element.dni }}</td>
                <td>
                    <ul>
                        <li v-for="(elem,index) in element.subjects" :key="index">
                            {{ elem }}
                        </li>
                    </ul>
                </td>                
                    
                <td v-if="element.doc">Entregada</td>
                <td v-else>No entregada</td>
                
            </tr>
        </table>
    </section>

</template>

<script setup lang="ts">
    import { ref,Ref } from 'vue';
    
    /*
    let teacher = ref({
        teacherName:'',
        surName:'',
        dni:'',
        subjects:[],
        doc:false
    });*/

    //con TS
    interface ITeacher {
        teacherName: string,
        surName: string,
        dni: string,
        subjects: Array<string>,
        doc: boolean
    }
    
    let teacher:Ref<ITeacher> = ref({
        teacherName:'',
        surName:'',
        dni:'',
        subjects:[],
        doc:false
    });

    //let teachers = ref([]);
    let teachers:Ref<Array<ITeacher>> = ref([]);

    let subject:Ref<string> = ref('');

    const addSubject = ()=>{
        teacher.value.subjects.push(subject.value);
        subject.value = '';
    }

    const addTeacher = ()=>{        
        teachers.value.push({...teacher.value});
        teacher.value.teacherName = ''; 
        teacher.value.surName='';
        teacher.value.dni='';
        teacher.value.subjects=[];
        teacher.value.doc=false;
    }
    

</script>

<style scoped>
    
</style>