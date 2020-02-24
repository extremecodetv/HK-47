const { Language } = require('../providers/langauge')

module.exports = class extends Language {
  constructor () {
    super()
    this.language = {
      HK_QUESTION: 'Question:',
      HK_STATEMENT: 'Statement:',
      HK_STATEMENT_ANGRY: 'Angry statement:',
      HK_STATEMENT_ANNOYED: 'Annoyed statement:',
      HK_STATEMENT_CONCLUSIVE: 'Conclusive statement:',
      HK_STATEMENT_OBVIOUS: 'Obvious statement:',
      HK_OBSERVATION: 'Observation:',
      HK_COMMENTARY: 'Commentary:',
      HK_CORRECTION: 'Correction:',
      /**
       * WIP HK_: Query, Theoretic queries,
       * Offensive question, Conclusion,
       * Musing, Advice, Clarification,
       */
      PROMPT_DISCUSSION_CREATE: (prefix = this.language.HK_STATEMENT) => `${prefix} Meatbag should enter a title for discussion`
    }
  }
}
