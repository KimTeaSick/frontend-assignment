import {WeekInitialStateType} from './index.d';
import {createSlice} from '@reduxjs/toolkit';

const initialState: WeekInitialStateType = {
  questionList: [
    {
      checked: false,
      weekNumber: 1,
      content:
        'Track your ovulation cycle to an idea of when you will be ovulating.',
    },
    {
      checked: false,
      weekNumber: 1,
      content: 'Study about symptoms of ovulation',
    },
    {
      checked: false,
      weekNumber: 1,
      content: 'Take folic acid',
    },
    {
      checked: false,
      weekNumber: 2,
      content: 'Keep a record of your weight ',
    },
    {
      checked: false,
      weekNumber: 2,
      content: 'Reduce caffeine intake ',
    },
    {
      checked: false,
      weekNumber: 2,
      content: 'Take folic acid',
    },
    {
      checked: false,
      weekNumber: 3,
      content: 'Get an at-home pregnancy test ',
    },
    {
      checked: false,
      weekNumber: 3,
      content: 'Buy superfood that is good for pregnant women',
    },
    {
      checked: false,
      weekNumber: 3,
      content: 'Take folic acid',
    },
    {
      checked: false,
      weekNumber: 4,
      content: 'Eat leafy greens to increase iron intake. ',
    },
    {
      checked: false,
      weekNumber: 4,
      content: 'Schedule an appointment with a OBGYN.',
    },
    {
      checked: false,
      weekNumber: 4,
      content: 'Take folic acid',
    },
    {
      checked: false,
      weekNumber: 5,
      content: 'Take folic acid',
    },
    {
      checked: false,
      weekNumber: 6,
      content: 'Keep a record of your weight ',
    },
    {
      checked: false,
      weekNumber: 6,
      content: 'Take folic acid',
    },
    {
      checked: false,
      weekNumber: 6,
      content: 'Create a fiber-rich diet for better bowel movements. ',
    },
    {
      checked: false,
      weekNumber: 7,
      content: 'Take folic acid',
    },
    {
      checked: false,
      weekNumber: 7,
      content: 'Create a fiber-rich diet for better bowel movements. ',
    },
    {
      checked: false,
      weekNumber: 7,
      content: 'Reduce caffeine intake ',
    },
    {
      checked: false,
      weekNumber: 8,
      content: 'Reduce caffeine intake ',
    },
    {
      checked: false,
      weekNumber: 8,
      content: 'Eat more calcium. ',
    },
    {
      checked: false,
      weekNumber: 9,
      content: 'Consult your doctor about increasing the food portion. ',
    },
    {
      checked: false,
      weekNumber: 9,
      content: 'Do light exercises',
    },
    {
      checked: false,
      weekNumber: 9,
      content: 'Schedule a visit to the dentist',
    },
    {
      checked: false,
      weekNumber: 10,
      content: 'Seek medical help if morning sickness is severe. ',
    },
    {
      checked: false,
      weekNumber: 10,
      content:
        "Before having any food, check to see if it's safe to consume during pregnancy. ",
    },
    {
      checked: false,
      weekNumber: 10,
      content:
        'Consider implenting a new diet plan to increase calcium consumption. ',
    },
    {
      checked: false,
      weekNumber: 11,
      content:
        'Ask your doctor about which medication is safe to take during pregnancy. ',
    },
    {
      checked: false,
      weekNumber: 11,
      content: 'Eat iron-rich foods to prevent anemia. ',
    },
    {
      checked: false,
      weekNumber: 11,
      content: 'Learn about the Down Syndrome screening. ',
    },
    {
      checked: false,
      weekNumber: 12,
      content:
        'Consider purchasing materinity pillows for your comfort in bed. ',
    },
    {
      checked: false,
      weekNumber: 13,
      content: 'Consider storing the cord blood for the baby.  ',
    },
    {
      checked: false,
      weekNumber: 13,
      content:
        'Look for symptoms of UTIs, such as itchiness or burning sensation. ',
    },
    {
      checked: false,
      weekNumber: 13,
      content: 'Get a pair of materinity tights for circulation. ',
    },
    {
      checked: false,
      weekNumber: 14,
      content:
        'Ask your doctor about if you need any supplements and medications. ',
    },
    {
      checked: false,
      weekNumber: 14,
      content: 'Maintain a well-balanced diet. ',
    },
    {
      checked: false,
      weekNumber: 15,
      content: 'Buy healthy snacks to catch up your increased appetite.',
    },
    {
      checked: false,
      weekNumber: 15,
      content:
        'Talk to your doctor about morning sickness if the symptom is severe. ',
    },
    {
      checked: false,
      weekNumber: 16,
      content: 'Do Kegel exercise 2-3 times a day for pelvic muscle strength. ',
    },
    {
      checked: false,
      weekNumber: 16,
      content: 'Learn about the pros and cons of amniotic fluid test',
    },
    {
      checked: false,
      weekNumber: 16,
      content: 'Wear comfortable shoes. ',
    },
    {
      checked: false,
      weekNumber: 17,
      content: 'Schedule an ultrasound to find out the gender of your baby. ',
    },
    {
      checked: false,
      weekNumber: 17,
      content: 'Plan a diet that can help you take plenty of iron.',
    },
    {
      checked: false,
      weekNumber: 18,
      content: 'Create a weight increase chart to see the trend. ',
    },
    {
      checked: false,
      weekNumber: 18,
      content: 'Switch to materinity underwear. ',
    },
    {
      checked: false,
      weekNumber: 18,
      content: 'See if the 3D ultrasonography is available at your clinic. ',
    },
    {
      checked: false,
      weekNumber: 19,
      content:
        'Consider purchasing a seatbelt extender designed for pregnant women. ',
    },
    {
      checked: false,
      weekNumber: 19,
      content: 'Create a weight increase chart to see the trend. ',
    },
    {
      checked: false,
      weekNumber: 19,
      content:
        'Consider purchasing a seatbelt extender designed for pregnant women. ',
    },
    {
      checked: false,
      weekNumber: 20,
      content: 'Talk to your doctor if you are experiencing symptoms of UTIs. ',
    },
    {
      checked: false,
      weekNumber: 20,
      content:
        "Research if there's any remedy for reducing the appearance of stretch marks. ",
    },
    {
      checked: false,
      weekNumber: 21,
      content:
        'Designate a few minutes each day and communicate with your baby. ',
    },
    {
      checked: false,
      weekNumber: 21,
      content:
        'Consult a doctor if your belly feels tight and painful frequently. ',
    },
    {
      checked: false,
      weekNumber: 21,
      content:
        "Research if there's any class available in your area about breastfeeding. ",
    },
    {
      checked: false,
      weekNumber: 22,
      content: 'Plan a "baby-moon" ',
    },
    {
      checked: false,
      weekNumber: 22,
      content: 'Start planning for a baby nursery at home. ',
    },
    {
      checked: false,
      weekNumber: 23,
      content: 'Eat leafy greens to increase iron intake. ',
    },
    {
      checked: false,
      weekNumber: 23,
      content: 'Consider taking an antenatal class for healthy pregnancy. ',
    },
    {
      checked: false,
      weekNumber: 23,
      content:
        'Choose skin care products that are designed for sensitive skin type or pregnant women. ',
    },
    {
      checked: false,
      weekNumber: 24,
      content: 'Listen to soothing and calm music. ',
    },
    {
      checked: false,
      weekNumber: 24,
      content: 'Stretch your muscles often. ',
    },
    {
      checked: false,
      weekNumber: 25,
      content: 'Consult your doctor about your magnesium intake. ',
    },
    {
      checked: false,
      weekNumber: 25,
      content:
        'Learn about different breathing methods you can use during labor. ',
    },
    {
      checked: false,
      weekNumber: 25,
      content: 'Schedule screening for gestational diabetes',
    },
    {
      checked: false,
      weekNumber: 26,
      content: 'Stretch your muscles often. ',
    },
    {
      checked: false,
      weekNumber: 26,
      content: 'Research different delivery methods available to you. ',
    },
    {
      checked: false,
      weekNumber: 27,
      content: 'Stay hydrated. ',
    },
    {
      checked: false,
      weekNumber: 27,
      content: 'Eat small portions of snacks often throughout the day. ',
    },
    {
      checked: false,
      weekNumber: 27,
      content: 'Stretch your muscles often. ',
    },
    {
      checked: false,
      weekNumber: 28,
      content: 'Go for a walk outside or do a light workout. ',
    },
    {
      checked: false,
      weekNumber: 28,
      content: 'Stay hydrated. ',
    },
    {
      checked: false,
      weekNumber: 29,
      content:
        'Massage your belly with oil or cream to help reduce the appearance of strech marks. ',
    },
    {
      checked: false,
      weekNumber: 29,
      content: 'Be mindful about your stress level. ',
    },
    {
      checked: false,
      weekNumber: 30,
      content: 'Be aware of the signs of premature birth. ',
    },
    {
      checked: false,
      weekNumber: 30,
      content: 'Create a plan for the delivery. ',
    },
    {
      checked: false,
      weekNumber: 30,
      content: 'Make a shopping list for newborn items. ',
    },
    {
      checked: false,
      weekNumber: 31,
      content: 'Learn about the symptoms of pre-eclampsia. ',
    },
    {
      checked: false,
      weekNumber: 31,
      content:
        'Apply sunscreen regularly as your skin can become sensitive during pregnancy. ',
    },
    {
      checked: false,
      weekNumber: 31,
      content: 'Purchase carbon monoxide detectors for your home. ',
    },
    {
      checked: false,
      weekNumber: 32,
      content:
        'Consider taking supplements that helps you produce breastmilk. ',
    },
    {
      checked: false,
      weekNumber: 33,
      content: 'Learn about the cord blood storing or donation option. ',
    },
    {
      checked: false,
      weekNumber: 33,
      content: 'Pack a hospital bag. ',
    },
    {
      checked: false,
      weekNumber: 33,
      content: 'Do light exercise reguarly. ',
    },
    {
      checked: false,
      weekNumber: 34,
      content:
        'Create your own checklist and start preparing for the birth of your baby. ',
    },
    {
      checked: false,
      weekNumber: 34,
      content: 'Learn about the pros and cons of breastfeeding',
    },
    {
      checked: false,
      weekNumber: 34,
      content: 'Double-check your hospital bag. ',
    },
    {
      checked: false,
      weekNumber: 35,
      content:
        'Birth ball exercise can help induce the baby to move their head down. ',
    },
    {
      checked: false,
      weekNumber: 35,
      content: 'Stretch your legs often to promote circulation. ',
    },
    {
      checked: false,
      weekNumber: 35,
      content: 'Practice breathing methods before going into labor',
    },
    {
      checked: false,
      weekNumber: 36,
      content: 'Start setting up a nursery room suitable for a newborn. ',
    },
    {
      checked: false,
      weekNumber: 37,
      content:
        "Review each delivery method and determine if you'd like to induce labor. ",
    },
    {
      checked: false,
      weekNumber: 37,
      content:
        'Consider downloading the contraction timer app on your phone to prepare for labor. ',
    },
    {
      checked: false,
      weekNumber: 38,
      content: 'Do light exercise or go for a walk. ',
    },
    {
      checked: false,
      weekNumber: 38,
      content:
        'Consider downloading the contraction timer app on your phone to prepare for labor. ',
    },
    {
      checked: false,
      weekNumber: 39,
      content: 'Place a waterproof mattress cover in case your water breaks. ',
    },
    {
      checked: false,
      weekNumber: 39,
      content:
        'Consider downloading the contraction timer app on your phone to prepare for labor. ',
    },
    {
      checked: false,
      weekNumber: 39,
      content: 'Do light exercise or go for a walk. ',
    },
    {
      checked: false,
      weekNumber: 40,
      content: 'Do light exercise or go for a walk. ',
    },
    {
      checked: false,
      weekNumber: 40,
      content:
        'Consider downloading the contraction timer app on your phone to prepare for labor. ',
    },
  ],
};

const weekSlice = createSlice({
  name: 'weekSlice',
  initialState,
  reducers: {
    checked: (state, action) => {
      state.questionList.map(list => {
        list.content === action.payload.content &&
          list.weekNumber === action.payload.weekNumber &&
          (list.checked = action.payload.checked);
      });
    },
  },
});

export const {checked} = weekSlice.actions;

export default weekSlice.reducer;
