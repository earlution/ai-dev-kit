"""
Code Generator Framework

A comprehensive framework for building code generators for common framework patterns and templates.

This package provides:
- Base generator classes and interfaces
- Template-based generation utilities
- Common generation patterns
- Generator registry and discovery

Part of: Epic 8 - Tooling & Automation
Story: E8:S01 - Code Generators
"""

from .base import BaseGenerator, GeneratorResult, GeneratorConfig
from .registry import GeneratorRegistry
from .template_engine import TemplateEngine

__all__ = [
    'BaseGenerator',
    'GeneratorResult',
    'GeneratorConfig',
    'GeneratorRegistry',
    'TemplateEngine',
]

