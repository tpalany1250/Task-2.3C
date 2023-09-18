<template>
  <div id="app">

    <!-- HEADER -->
    <h1 style="max-width: 1000px; margin: 0 auto; line-height: 1.5;">Welcome to my Vue 3 Concepts using Composition API with Single File Components</h1>

    <br><br>

    <!-- Template Syntax Section -->
    <div class="VConcepts">

      <h3>Template Syntax: </h3>

      <!-- This shows Text Interpolation -->
      <p><strong>Welcome to my app, {{ username }} !!🎉</strong></p>
      
      <!-- This shows Raw HTML -->
      <div v-html="Instruction"></div>

      <br>

      <!-- This shows Attribute Bindings -->
      <button v-bind:id="buttonId">Click me</button>
      
      <!-- This shows JavaScript expressions inside syntax -->
      <p><strong>{{ num1 }} done, {{ num2 }} more to go. This makes a total of {{ num1 + num2 }}.</strong></p>

    </div>

    <!-- Comments: 
      Template Syntax: Demonstrates Vue's template syntax, 
      including text interpolation, raw HTML rendering, attribute bindings, 
      and JavaScript expressions within double curly braces.
    -->

    <br><br>

    <!-- Methods Section-->
    <div class="VConcepts">

      <h3>Methods:</h3>

    </div>

    <!-- Comments:
      Methods: This section is left empty because did not understand
      what methods was need + there was no section in Vue that I
      could find with this name other in the javascript part -->

    <br><br>

    <!-- Reactivity Fundamentals Section -->
    <div class="VConcepts">

      <h3>Reactivity Fundamentals:</h3>
      <p style="text-align: left;"><strong>Below is an example of reactive fundamentals:</strong></p>

      <br>

      <!-- Reactive  -->
      <p><strong>Counter:</strong> {{ counter }}</p>
      <button @click="increment">Increment</button>

      <br><br><br>

      <!-- Explanation of its reactivity -->
      <p style="text-align: left; margin-right: 40px;">Through creating a 'counter' variable using ref(0) together with its 'increment' function, the counter is able to be reactive and increase it's value by one. Together with the help from the button "increment", the count is then able to act on this motion. Thus, allowing it show it's reactivity.</p>

    </div>

    <!-- Comments: 
      Reactivity Fundamentals: This shows Vue's reactivity system using 
      a counter and an explanation of its reactivity.
    -->

    <br><br>

    <!-- Computed Properties Section -->
    <div class="VConcepts">

      <h3>Computed Properties</h3>

      <p style="text-align: left;"><strong>Below is an example of computed properties:</strong></p>

      <input v-model="textInput" placeholder="Type something" />
      <p>Text length: {{ textLength }}</p>

    </div>

    <!-- Comments: 
      Computed Properties: This demonstrates computed properties in Vue, 
      which can compute and display values based on data.
    -->

    <br><br>

    <!-- Class and Style Bindings Section -->
    <div class="VConcepts">

      <h3>Class and Style Bindings</h3>

      <!-- CLASS BINDING -->
      <p style="text-align: left;"><strong>Class Bindings:</strong></p>

      <p :class="{ active: isActive, 'text-bold': isTextBold }">This text can have dynamic classes</p>
      <!-- Button to toggle classes -->
      <button @click="toggleClasses">Toggle Classes</button>

      <!-- STYLE BINDING -->
      <p style="text-align: left;"><strong>Style Bindings:</strong></p>

      <p :style="dynamicStyles">This text can have dynamic styles</p>

    </div>

    <!-- Comments: 
      Class and Style Bindings: This section is meant to show how to 
      dynamically apply CSS classes and styles to elements in Vue. However,
      I need help on this section don't understand what is going on.
    -->

    <br><br>

    <!-- List Rendering Section -->
    <div class="VConcepts">

      <h3>List Rendering</h3>

      <!-- v-for with an Object -->
      <p style="text-align: left;"><strong>v-for with an Object:</strong></p>

      <ul>
        <p><strong>Details of a random person</strong></p>
        <li v-for="(value, key) in user" :key="key">{{ key }}: {{ value }}</li>
      </ul>

      <br>

      <!-- v-for with a Range -->
      <p style="text-align: left;"><strong>v-for with a Range:</strong></p>

      <ul>
        <li v-for="n in 5" :key="n">{{ n }}</li>
      </ul>

      <br>

      <!-- v-for on <template> -->
      <p style="text-align: left;"><strong>v-for on template :</strong></p>
      <template v-for="item in items" :key="item.id">
        <div><strong style="line-height: 1.5;">{{ item.name }}</strong></div>
        <span style="line-height: 1.5;">{{ item.description }}</span>

      </template>

      <br>

      <!-- v-for with v-if -->
      <p style="text-align: left;"><strong>v-for with v-if:</strong></p>
      <ul>
        <p><strong>Filtered item names</strong></p>
        <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
      </ul>

      <br>

      <!-- v-for with a Component -->
      <p style="text-align: left;"><strong>v-for with a Component:</strong></p>

      <ul>
        <list-item v-for="item in items" :key="item.id" :item="item"></list-item>
      </ul>

    </div>

    <!-- Comments: 
      List Rendering: This shows Vue's v-for directive to render lists,
      both with objects and with a range of numbers. And with further
      examples using using v-for with v-if and rendering components 
      in a list.
      -->

    <br><br>

    <!-- Event Handling: Listening to Events Section -->
    <div class="VConcepts">

      <h3>Event Handling: Listening to Events</h3>

      <!-- Inline Handlers -->
      <p style="text-align: left;"><strong>Inline Handlers:</strong></p>

      <p style="text-align: left; line-height: 1.5;">Looking back at the <strong>Reactivity Fundamentals Section</strong>, the button has been clicked <strong>{{ counter }} times</strong>.</p>

      <p>This is an example of inline handling</p>

      <br>

      <!-- Method Handlers -->
      <p style="text-align: left;"><strong>Method Handlers:</strong></p>

      <button @click="sayHello">Say Hello</button>
      <button @click="sayGoodbye">Say Goodbye</button>

      <br>

      <p style="margin-right: 40px; line-height: 1.5;">This an example of method handling as they call different methods when clicked</p>

    </div>

    <!-- Comments: 
      Event Handling: Demonstrates how to handle events in Vue, 
      both with inline handlers and methods.
    -->

    <br><br>

    <!-- Form Input Bindings -->
    <div class="VConcepts">

      <h3>Form Input Bindings</h3>

      <!-- Input field with v-model -->
      <p>Enter your name: <span><b>{{ message }}</b></span></p>
      
      <input v-model.trim="message" /> <!-- Applied .trim modifier -->

      <br><br>

      <!-- Numeric Input with v-model.number -->
      <p>Enter your age: <span><b>{{ numericValue }}</b></span></p>
      <input v-model.number="numericValue" /> <!-- Applied .number modifier -->

      <br><br><br>

      <!-- Radio buttons and v-model -->
      <bold>Presentation of the website is: {{ checkedNames }}</bold>

      <br><br>
 
      <input type="radio" id="E" value="Excellent" v-model="checkedNames" />
      <label for="E">Excellent</label>
           
      <input type="radio" id="G" value="Good" v-model="checkedNames" />
      <label for="G">Good</label>
           
      <input type="radio" id="M" value="Moderate" v-model="checkedNames" />
      <label for="M">Moderate</label>

      <input type="radio" id="Pass" value="Poor" v-model="checkedNames" />
      <label for="Pass">Poor</label>

      <br><br>

      <!-- Textarea with v-model.lazy -->
      <p>Leave a comment:</p>
      <textarea v-model.lazy.trim="comment"></textarea> <!-- Applied .lazy and .trim modifiers -->

      <br><br>

      <!-- Button to confirm the comment -->
      <button @click="confirmComment">Confirm Comment</button>

      <br><br>

      <!-- Display the comment -->
      <bold style="white-space: pre-line;">
        {{ confirmedComment }}
      </bold>


    </div>

    <!-- Comments: 
      Form Input Bindings: This shows the use of modifiers like 
      .trim and .number and .lazy. Where .trim is used to automatically
      trim the whitespace, and .number is used to automatically write typecast
      as a number, while .lazy is used to wait to update an input event 
      instead of automatically syncing. As well as this, radio 
      buttons, textareas, were also used.
      -->

    <br><br>

    <!-- Watchers -->
    <div class="VConcepts">

      <h3>Watchers</h3>

      <p><strong>Magic 8-Ball</strong></p>
      <p>Ask a yes/no question:</p>
      <input v-model="question" @input="shakeMagic8Ball" />
      <p>{{ answer }}</p>

    </div>

    <!-- Comments: 
      Watchers: This shows Vue watchers, which can watch for changes 
      in data properties and trigger actions in response.
    -->

    <br><br>

    <!-- Components -->
    <div class="VConcepts">

      <h3>Components</h3>

    </div>

    <!-- Comments:
      Components: I don't understand. Need help
    -->

    <br><br>

    <!-- Routers -->
    <div class="VConcepts">

      <h3>Routers</h3>

    </div>

    <!-- Comments:
      Routers: Need help. Every time I add a router it says uncaugt runtime
      errors. PS. I have a uploaded a pic of what it says
    -->

    <br><br>
  
  </div>

</template>



<script setup>
import { ref, computed } from 'vue';

const counter = ref(0);

const increment = () => {
  counter.value++;
};

const textInput = ref('');

const textLength = computed(() => {
  return textInput.value.length;
});

const isActive = ref(false);
const isTextBold = ref(true);

const toggleClasses = () => {
  isActive.value = !isActive.value;
  isTextBold.value = !isTextBold.value;
};

const textColor = ref('black');
const fontSize = ref('16px');

const dynamicStyles = computed(() => {
  return {
    color: textColor.value,
    fontSize: fontSize.value,
    // Add more style properties as needed
  };
});

function sayHello() {
  alert('Hello, Mr. Chengzu Dong!')
}

function sayGoodbye() {
  alert('Goodbye, Mr. Chengzu Dong!')
}

</script>



<script>
export default {
  data() {
    return {
      username: 'Mr. Chengzu Dong',
      Instruction: '<span style="color: red; font-weight: bold;">Scroll down to see the different concepts in Vue 3 using Composition API with Single File Components.</span>',
      buttonId: 'my-button',
      num1: 1,
      num2: 10,
      user: {
        name: 'John',
        age: 30,
        city: 'New York',
      },
      items: [
        { id: 1, name: 'Item 1', description: 'Tall Bookshelf' },
        { id: 2, name: 'Item 2', description: 'Empty Bin' },
        { id: 3, name: 'Item 3', description: 'Long Shower Curtains' },
      ],
      message: '',
      comment: '',
      checkedNames: '',
      inputItems: [
        { message: 'v-if' },
        { message: 'v-else' },
        { message: 'v-else-if' },
        { message: 'v-show' },
        { message: 'v-for' },
      ],
      numericValue: 0, // Add the numericValue property
      confirmedComment: '', // Add the confirmedComment property
      question: '',
      answer: 'Ask a question and shake the 8-ball...',
    };
  },
  watch: {
    question: 'shakeMagic8Ball',
  },
  computed: {
    // v-for with v-if
    filteredItems() {
      return this.items.filter(item => item.name.startsWith('Item'));
    },
  },
  methods: {
    // ... (other methods)
    confirmComment() {
      // Assign the comment value to confirmedComment
      this.confirmedComment = this.comment;
    },
    async shakeMagic8Ball() {
      if (this.question.includes('?')) {
        this.answer = 'Shaking...';
        try {
          // Simulate the Magic 8-Ball's response with random answers
          const possibleAnswers = ['Yes', 'No', 'Maybe', 'Outlook not so good', 'Try again later'];
          const randomIndex = Math.floor(Math.random() * possibleAnswers.length);
          this.answer = possibleAnswers[randomIndex];
        } catch (error) {
          this.answer = 'Error! The 8-Ball is malfunctioning. ' + error;
        }
      } else {
        this.answer = 'Please ask a question ending with a "?"';
      }
    },
  },

};
</script>



<style scoped>

template {
  background-color: #2a282e;
}


/* Styling for unordered lists */
ul {
    list-style: none; /* Remove bullet points */
    padding: 0; /* Remove default padding */
    margin: 25px;
    margin-left: 70px;
    margin-right: 70px;
    text-align: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;;
}

/* Styling for list items */
li {
    margin: 25px;
    margin-left: 70px;
    margin-right: 70px;
    text-align: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;;
}



/* Styling for the Vue Concepts container */
.VConcepts {
    max-width: 600px;
    margin: auto;
    border: 1px solid #ddd;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px #ddd;
}

/* Styling for input elements within the Vue Concepts container */
.VConcepts input {
    margin-left: 30px;
}

/* Styling for textarea elements */
textarea {
    margin-left: 30px;
}
</style>