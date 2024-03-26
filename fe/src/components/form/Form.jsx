import React, { useState } from 'react';
import styles from './form.module.css';
import Button from '../buttons/Button';

const jobOptions = {
    Tank: ['Paladin', 'Warrior', 'Dark Knight', 'Gunbreaker'],
    Healer: ['White Mage', 'Scholar', 'Astrologian', 'Sage'],
    DPS: [
      'Monk', 'Dragoon', 'Ninja', 'Samurai', 'Reaper',
      'Bard', 'Machinist', 'Dancer', 'Black Mage', 'Summoner', 'Red Mage', 'Viper', 'Pictomancer'
    ],
  };

const Form = () => {
    const [mainRole, setMainRole] = useState('');
    const [mainJob, setMainJob] = useState('');

    const handleRoleChange = (e) => {
        setMainRole(e.target.value);
        setMainJob('');  //Resettino MainJob se cambi Role
    };

    const handleJobChange = (e) => {
        setMainJob(e.target.value);
      };

    return(
        <div className={styles.formContainer}>
        <h1>- Apply -</h1>
        <form className={styles.form}>
          <input type="text" placeholder="Character Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          
          <select value={mainRole} onChange={handleRoleChange} className={styles.select}>
            <option value="">Select Your Main Role</option>
            <option value="Tank">Tank</option>
            <option value="Healer">Healer</option>
            <option value="DPS">DPS</option>
          </select>
          
          {mainRole && (
            <select value={mainJob} onChange={handleJobChange} className={styles.select}>
              <option value="">Select Your Main Job</option>
              {jobOptions[mainRole].map((job) => (
                <option key={job} value={job}>{job}</option>
              ))}
            </select>
          )}
          
          <textarea
            placeholder="Apply Message (max 200 characters)"
            maxLength="200"
            className={styles.textarea}
          />
          
          <Button type='submit' text="Send Apply" variant={"md"}/>
        </form>
      </div>  
    );
};

export default Form;