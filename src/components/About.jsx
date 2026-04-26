/* eslint-disable react/prop-types */
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-light-bg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-accent text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-secondary text-[15px] text-center py-2">
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Hello.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>
          欢迎来到我的个人主页！我是朱少龙，一名专注于前端开发和软件工程的开发者，
          致力于通过技术为用户带来优质的产品体验。技术世界充满挑战，但这正是它的魅力所在。
        </p>
        <br />
        <p>
          我毕业于{' '}
          <span className="text-[#D2691E]">
            安徽建筑大学物联网工程专业
          </span>
          ，拥有扎实的计算机科学基础。目前专精于{' '}
          <span className="text-[#D2691E]">
            前端开发、Web开发和软件工程
          </span>
          ，在React、Vue、小程序开发等技术栈方面有丰富的实践经验。
        </p>
        <br />
        <p>
          在我的学业和职业生涯中，我从安徽建筑大学的计算机学习开始，逐步成长为杭州星物种机器人有限公司的
          开发技术负责人。我主导了多个大型项目的技术实现，包括智能出纸机物联网系统平台（用户量50万+）、
          孟想教育平台（用户量150万+）等，在物联网、教育科技、机器人控制等领域积累了丰富的项目经验。
        </p>
        <br />
        <p>
          我热爱技术创新和持续学习，始终保持对新技术的敏锐度和学习热情。
          如果您对我的项目或技术分享感兴趣，欢迎随时与我交流！
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
