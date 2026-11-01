import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  buildMailtoUrl,
  formatPeriod,
  getSkillLevelMeta,
} from './portfolio.ts';

test('validateContactForm passes with valid data', () => {
  const result = validateContactForm({
    name: 'Muhammad Rashya',
    email: 'test@example.com',
    subject: 'Project Collaboration',
    message: 'Hello, I would love to connect with you regarding web development!',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateContactForm rejects empty and invalid inputs', () => {
  const result = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    subject: '',
    message: 'short',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.email);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.message);
});

test('buildMailtoUrl correctly encodes recipient and message fields', () => {
  const url = buildMailtoUrl('acarashya14@gmail.com', {
    name: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'Web App Idea',
    message: 'Let us build something cool!',
  });

  assert.ok(url.startsWith('mailto:acarashya14@gmail.com?subject='));
  assert.ok(url.includes('Web%20App%20Idea') || url.includes('Web+App+Idea'));
  assert.ok(url.includes('Jane%20Doe') || url.includes('Jane+Doe'));
});

test('formatPeriod formats single years, ranges, and current roles', () => {
  assert.equal(formatPeriod(2019), '2019');
  assert.equal(formatPeriod(2022, 2022), '2022');
  assert.equal(formatPeriod(2025, undefined, true, 'en'), '2025 – Present');
  assert.equal(formatPeriod(2025, undefined, true, 'id'), '2025 – Sekarang');
  assert.equal(formatPeriod(2022, 2025), '2022 – 2025');
});

test('getSkillLevelMeta returns correct styling attributes', () => {
  const basic = getSkillLevelMeta('Basic');
  assert.equal(basic.levelText, 'Basic');

  const intermediate = getSkillLevelMeta('Intermediate');
  assert.equal(intermediate.levelText, 'Intermediate');
});
